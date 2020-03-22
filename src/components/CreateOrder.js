import React from 'react';


class CreateOrder extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.addOrder.bind(this)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputOrder">Order name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter order name"
                            value={this.props.name}
                            onChange={this.props.handleChange} />
                        <small className="form-text text-danger">
                            {this.props.validation ? "" : "Required field"}
                        </small>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPrice">Order price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            placeholder="Enter order price"
                            value={this.props.price}
                            onChange={this.props.handleChange} />
                        <small className="form-text text-danger">
                            {this.props.validation ? "" : "Required field and positive number"}
                        </small>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPrice">Order note</label>
                        <textarea type="text" className="form-control" name="note" placeholder="Enter order note" value={this.props.note} onChange={this.props.handleChange} />
                    </div>
                </div>
                <button className="btn btn-success" type="submit">Add Order</button>
            </form>
        );
    }
}

export default CreateOrder;



