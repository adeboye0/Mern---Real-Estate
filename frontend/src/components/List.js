import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
// import PropTypes from 'prop-types';

class ShopingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    {items.map((item) => {
                        return <ListGroupItem key={item._id}>
                            <Button
                                className='removebtn' color='danger' size='sm' onClick={this.onDeleteClick.bind(this, item._id)}>&times;</Button>
                            {item.name}
                        </ListGroupItem>
                    })}

                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem })(ShopingList);