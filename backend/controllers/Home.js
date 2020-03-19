const NodeGeocoder = require('node-geocoder');
const Listing = require('../models/listing');
const User = require('../models/user');
const mongoose = require('mongoose');


module.exports = {

    index: function (req, res) {
        Listing.find().sort({ createdAt: -1 }).then(listing => res.json(listing));
    },

    add: async function (req, res) {
        const { title, price, status, features, size, description, type, lat, lng } = req.body;
        if (!title || !price || !status || !features || !size || !description || !type || !lng || !lat) {
            return res.status(400).json({ msg: 'Fill in all fields' });
        }
        var options = {
            provider: 'google',
            httpAdapter: 'https',
            apiKey: 'AIzaSyAhk0GWQGFyKybA2D87RKqzIxNTXYmTZ60',
            formatter: null
        };
        var geocoder = NodeGeocoder(options);
        var city = '';
        var state = '';
        var address = '';
        try {
            var geo = await geocoder.reverse({ lat: req.body.lat, lon: req.body.lng });
            country = geo[0].country;
            city = geo[0].city;
            state = geo[0].administrativeLevels.level1long;
            address = geo[0].formattedAddress;
            console.log(city);
        } catch (err) {
            console.log(err);
        }
        console.log(state);
        var user = await User.findById(req.user.id).select('-password').then(user => user);
        const newListing = new Listing({
            title,
            price,
            status,
            features,
            agent_id: req.user.id,
            agent_name: user.name,
            agent_phoneNumber: user.phoneNumber,
            size,
            description,
            type,
            address: address,
            state: state,
            city: city,
            longitude: lng,
            latitude: lat,
        });
        newListing.save().then(listing => res.json(listing)).catch(err => { if (err) throw err; res.status(400).json({ msg: 'Error Occured, Please try again later' }) });
    },

    like: async function (req, res) {
        const { id, userId } = req.body;
        if (!id || !userId) {
            return res.status(400).json({ msg: 'Error Occured' });
        }
        Listing.findById(id).then(listing => {
            let index = listing.likes.indexOf(userId);
            if (index > -1) {
                Listing.findOneAndUpdate({ _id: id }, { $pull: { likes: userId } }, {
                    new: true,
                    upsert: true,
                    rawResult: true
                }).then(list => res.json(list))
            } else {
                Listing.findOneAndUpdate({ _id: id }, { $push: { likes: userId } }, {
                    new: true,
                    upsert: true,
                    rawResult: true
                }).then(list => res.json(list))
            }
        })
    },

    singleList: function (req, res) {
        const { id } = req.params;
        if (id) {
            if (mongoose.Types.ObjectId.isValid(id)) {
                Listing.findById(id).then(list => res.json(list)).catch(err => console.log('ihguhiuhiu' + err));
            }
            else {
                return res.status(400).json({ msg: 'Invalid Id' });
            }
        }

    },

    delete: function (req, res) {
        var id = req.params.id;
        Listing.findById(id).then(listing => listing.remove().then(() => res.json({ sucess: true }))).catch(err => res.status(404).json({ sucess: false }))
    }

}