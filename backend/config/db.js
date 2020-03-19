// const MongoClient = require("mongodb").MongoClient;

// const dbConnectionUrl = "mongodb+srv://Ray:hardeybhoye12@cluster0-myoh7.gcp.mongodb.net/test?retryWrites=true&w=majority;";
// function initialize(
//   successCallback,
//   failureCallback
// ) {
//   MongoClient.connect(dbConnectionUrl, { useUnifiedTopology: true }, function (err, dbInstance) {
//     if (err) {
//       console.log(`[MongoDB connection] ERROR: ${err}`);
//       failureCallback(err); 
//     } else {
//       const db = dbInstance.db('Real');
//       console.log("[MongoDB connection] SUCCESS");

//       successCallback(db);
//     }
//   });
// }

// module.exports = {
//   initialize
// };