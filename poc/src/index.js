import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Parent from './parent.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var products = [{
    id: 1,
    name: "Product1",
    price: 120,
    type: 'C',
    active: 'Y'
}, {
    id: 2,
    name: "Product2",
    price: 80,
    type: 'A',
    active: 'N'
},
{
    id: 3,
    name: "Product3",
    price: 90,
    type: 'D',
    active: 'Y'
},
{
    id: 4,
    name: "Product4",
    price: 100,
    type: 'B',
    active: 'N'
}];

function priceValidator(value) {
    if (value < 0) {
        alert("Price can not be negative");
    }
    else {
        this.setState({
            price: value
        })
    }
}

class DefaultPaginationTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }



    componentDidMount() {
        let me = this;
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        }).then(function (response) {
            console.log("response --->>>>>", response);
            if (response && response.data) {
                me.setState({
                    // data: response.data,
                    data: products
                });
            }
        });
    }

    createCustomModalHeader(onClose, onSave) {
        const headerStyle = {
            fontWeight: 'bold',
            fontSize: 'large',
            textAlign: 'center',
            backgroundColor: '#eeeeee'
        };
        return (
            <div className='modal-header' style={headerStyle}>
                <h3>That is my custom header</h3>
                <button className='btn btn-info' onClick={onClose}>Close it!</button>
            </div>
        );
    }

    jobTypes = ['A', 'B', 'C', 'D'];

    cellEditProp = {
        mode: 'click',
        blurToSave: true
    };

    render() {
        const options = {
            insertModalHeader: this.createCustomModalHeader
        };
        return (
            <div>
                {/*<button >New</button> <br />
                <BootstrapTable ref='table'
                    data={this.state.data}
                    pagination cellEdit={this.cellEditProp}
                    options={options}>
                    <TableHeaderColumn dataField='id' isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'  dataSort={true}>Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='type' editable={{ type: 'select', options: { values: this.jobTypes } }}>Job Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='active' editable={{ type: 'checkbox', options: { values: 'Y:N' } }}>Active</TableHeaderColumn>


                </BootstrapTable>*/}

                <Parent />
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <DefaultPaginationTable />,
    document.getElementById('root')
);
export default DefaultPaginationTable;