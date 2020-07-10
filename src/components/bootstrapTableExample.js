import React, { Component } from "react";
import { Container } from "react-bootstrap";
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
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
];
export class BootstrapTableExample extends Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Boot Strap Table Example</h2>
          <BootstrapTable data={products} striped hover>
            <TableHeaderColumn isKey dataField="id">
              Product ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price">
              Product Price
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </Container>
    );
  }
}

export default BootstrapTableExample;
