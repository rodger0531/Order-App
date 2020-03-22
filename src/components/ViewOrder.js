import React from 'react';

class ViewOrder extends React.Component {

    render() {

        let table;
        if (this.props.list.length > 0) {
            let orderList = this.props.list.map((item, i) => {
                return (<tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td className="note">{item.note}</td>
                    <td><button type="button" className="btn btn-outline-primary" onClick={() => this.props.changeOrder(item)}>Edit</button></td>
                    <td><button type="button" className="btn btn-outline-danger" onClick={() => this.props.deleteOrder(item.id)}>Delete</button></td>
                </tr>)
            });

            table = (<table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order #</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price ($)</th>
                        <th scope="col">Note</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList}
                </tbody>
            </table>
            );
        } else {
            table = (<h2>There are no orders</h2>);
        }
        return (
            <div>
                {table}
            </div>
        );
    }
}

export default ViewOrder;
