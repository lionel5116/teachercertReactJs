import React, { createRef,Component } from "react";
import { Container } from "react-bootstrap";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {BootstrapTable,TableHeaderColumn,Grid,Row,Col} from "react-bootstrap-table";

var products = [
  {
    id: 1,
    name: "Computer",
    price: 1500,
  },
  {
    id: 2,
    name: "Monitor",
    price: 125,
  },
  {
    id: 3,
    name: "HDMI Cable",
    price: 14,
  },
];

const options = {
  exportCSVText: 'Export CSV',
  insertText: 'Insert',
  deleteText: 'Delete',
  saveText: 'Save',
  closeText: 'Close'
};

const selectRowProp = {
  mode: 'checkbox'
};

export class BootstrapTableExample extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            name: '',
            price: 0
        };
    }


    CustomInputFormatterProductPrice(cell, row){
        return (
          <div>
            <input type={'text'} className="form-control custom-textbox" defaultValue={cell} 
            onChange={(e) => this.onChangeProductPrice(row, e)}
            />
          </div>
        );
    }

    onChangeProductPrice(e, row) {
       
        this.setState({ name: row.target.value });
        console.log(this.state.name)
        
    }

    wrapper = createRef();

  render() {
    return (
      <Container>
        <div ref={this.wrapper}>
          <h2>Boot Strap Table Example</h2>
          <BootstrapTable data={products} striped hover options={options}
          deleteRow={ true } selectRow={ selectRowProp }
          insertRow
          exportCSV
          >
            <TableHeaderColumn row="1" width="10%" editable={false} isKey dataField="id" >Product ID</TableHeaderColumn>
            <TableHeaderColumn row="1" width="45%" dataField="name" dataFormat={this.CustomInputFormatterProductPrice.bind(this)}>Product Name</TableHeaderColumn>
            <TableHeaderColumn row="1" width="45%"dataField="price" >Product Price</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </Container>
    );
  }
}

export default BootstrapTableExample;
