/*!

=========================================================
* Dual-Mag-Dash v1.0 ColSelect.js
=========================================================

* Select List in reactstrap Col

* Copyright 2020 Guatek
* Licensed under MIT (See LICENCE.md for details)

=========================================================

*/

import React from "react";

// reactstrap components
import {
  Col,
  Form,
  Input,
} from "reactstrap";

function ColSelect(props) {

  return (
    <>
      <Col className={props.justify} lg={props.lg} md={props.md} sm={props.sm}>
        <h5 className="card-category">{props.name}</h5>
        <Form>
          <Input type="select" name="select" id={props.inputId} onChange={(e) => {props.handler(e.target.value);}}>
            {props.items.map((item, i) => {
              if (item === props.value) {
                return (<option id={props.inputId + "_" +i.toString()} selected>{item}</option>)
              }
              else {
                return (<option id={props.inputId + "_" +i.toString()}>{item}</option>)
              }
            })}
          </Input>
        </Form>
      </Col>
    </>
  );

}

ColSelect.defaultProps = {
  lg: "12",
  md: "12",
  sm: "12",
  name: "CATEGORY",
  inputId: "SELECT_ID",
  justify: "text-left",
  handler: null,
  value: 0,
  items: [],
};

export default ColSelect;
