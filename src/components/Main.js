import React from 'react';
import CreateOrder from './CreateOrder';
import ViewOrder from './ViewOrder';
import UpdateOrder from './UpdateOrder';

class Main extends React.Component {

    // Unique ID field is used to simulate database auto-increment ID
    // used for identifying when updating or deleting items
    constructor() {
        super();
        const list = JSON.parse(localStorage.getItem('list'));
        const uniqueId = JSON.parse(localStorage.getItem('uniqueId'));
        this.state = {
            id: null,
            name: '',
            price: '',
            note: '',
            list: (list || []),
            uniqueId: (uniqueId || 0),
            update: false,
            validation: true
        }
    }

    // Clear local storage and add sample data
    addSampleData = () => {
        this.setState({
            list: [
                { 'id': 1, 'name': 'Sony', 'price': '100', 'note': 'TV' },
                { 'id': 2, 'name': 'Samsung', 'price': '70', 'note': 'Smartphone' },
                { 'id': 3, 'name': 'Philips', 'price': '200', 'note': 'Hairdrier' },
                { 'id': 4, 'name': 'HTC', 'price': '1000', 'note': 'Vive VR headset' },
                { 'id': 5, 'name': 'Google', 'price': '20', 'note': 'Smart speaker, deliver late 2020' }
            ],
            uniqueId: 5
        }, () => { this.saveToStorage(this.state.uniqueId, this.state.list) })
    }

    // remove item and save to storage
    deleteOrder = id => {
        const newList = this.state.list.filter(i => i.id !== id);
        this.setState({ list: newList });
        localStorage.setItem('list', JSON.stringify(newList));
    }

    handleChange = event => {
        const input = event.target;
        const value = input.value;
        const name = input.name;
        this.setState({ [name]: value });
    };

    // process add order form submit and reset input field (state)
    // validate input if empty or price is negative
    // initiates list array and uniqueId as 0 if local storage is empty
    addOrder = e => {
        e.preventDefault();
        if (this.state.name && this.state.price && this.state.price >= 0) {

            let list = JSON.parse(localStorage.getItem('list')) || [];
            let uniqueId = JSON.parse(localStorage.getItem('uniqueId')) + 1 || 1;
            const newItem = {
                id: uniqueId,
                name: this.state.name,
                price: this.state.price,
                note: this.state.note
            }

            list.push(newItem);
            this.saveToStorage(uniqueId, list);
            
            this.setState({
                list: list,
                name: '',
                price: '',
                note: '',
                validation: true
            });
        } else {
            this.setState({ validation: false });
        }
    };

    // updates input field with selected item
    changeOrder = item => {
        this.isChanging(true);
        this.setState({
            id: item.id,
            name: item.name,
            price: item.price,
            note: item.note
        })
    }

    // switch for create or update item input fields and buttons
    isChanging = bool => {
        this.setState({
            update: bool
        })
    }

    // process update order form submit
    // parseInt removes leading 0 padding (simulating real price)
    // saves new list to local storage and resets input field by resetting state
    // if input validation fails, shows failed feedback to user by setting validation state to false
    updateOrder = e => {
        e.preventDefault();
        if (this.state.name && this.state.price && this.state.price >= 0) {

            const updatedItem = {
                id: this.state.id,
                name: this.state.name,
                price: parseInt(this.state.price, 10),
                note: this.state.note
            }
            
            const newList = this.state.list.map((item) =>
                item.id === this.state.id ? updatedItem : item
            );

            localStorage.setItem('list', JSON.stringify(newList));
            this.setState({
                list: newList,
                id: null,
                name: '',
                price: '',
                note: '',
                validation: true
            });

            this.isChanging(false);
        } else {
            this.setState({ validation: false })
        }

    }

    saveToStorage(id, list) {
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.setItem('uniqueId', id);

    }

    render() {
        return (
            <main role="main" className="inner cover">
                <button className="btn btn-warning" onClick={this.addSampleData}>Reset and add sample orders</button>
                {this.state.update ? (
                    <UpdateOrder
                        name={this.state.name}
                        price={this.state.price}
                        note={this.state.note}
                        validation={this.state.validation}
                        handleChange={this.handleChange}
                        updateOrder={this.updateOrder}
                        isChanging={this.isChanging}
                    />
                ) : (
                    <CreateOrder
                        name={this.state.name}
                        price={this.state.price}
                        note={this.state.note}
                        validation={this.state.validation}
                        handleChange={this.handleChange}
                        addOrder={this.addOrder}
                    />
                )}
                <ViewOrder
                    list={this.state.list}
                    deleteOrder={this.deleteOrder}
                    changeOrder={this.changeOrder}
                />
            </main>
        );
    }
}

export default Main;