/*!

=========================================================
* Dual-Mag-Dash v1.0 Pager.js
=========================================================

* Split a total numer of items into a set and render page buttons

* Copyright 2020 Guatek
* Licensed under MIT (See LICENCE.md for details)

=========================================================

*/

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  ButtonGroup,
} from "reactstrap";

function Pager(props) {

  const nPages = Math.ceil(props.totalItems / props.pageSize);
  const pages = [];
  if (nPages > props.maxButtons) {

    if (props.pageNumber === 0) {
      pages.push({pageNumber: 0, pageName: "0"});
      pages.push({pageNumber: 1, pageName: "Next"});
      pages.push({pageNumber: nPages-1, pageName: ((nPages-1)*props.pageSize).toString()});
    }
    else if (props.pageNumber === nPages - 1) { 
      pages.push({pageNumber: 0, pageName: "0"});
      pages.push({pageNumber: nPages-2, pageName: "Previous"});
      pages.push({pageNumber: nPages-1, pageName: ((nPages-1)*props.pageSize).toString()});
    }
    else {
      if (props.pageNumber > 1) {
        pages.push({pageNumber: 0, pageName: "0"});
      }
      
      pages.push({pageNumber: props.pageNumber-1, pageName: "Previous"});
      pages.push({pageNumber: props.pageNumber, pageName: ((props.pageNumber)*props.pageSize).toString()});
      pages.push({pageNumber: props.pageNumber+1, pageName: "Next"});
      
      if (props.pageNumber < nPages-2) {
        pages.push({pageNumber: nPages-1, pageName: ((nPages-1)*props.pageSize).toString()});
      }
    }
  }
  else {
    for (let i = 0; i < nPages; i++) {
      pages.push({pageNumber: i, pageName: (i*props.pageSize).toString()});
    }
  }
  const pageButtons = pages.map((page) =>
    <Button
      key={page.pageNumber}
      tag="label"
      className={classNames("btn-simple", {
        active: props.pageNumber === page.pageNumber,
      })}
      color="info"
      id={page.pageNumber}
      size="sm"
      onClick={() => props.setPageNumber(page.pageNumber)}
    >
      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
        {page.pageName}
      </span>
      <span className="d-block d-sm-none">
        <i className="tim-icons icon-single-02" />
      </span>
    </Button>
  );

  return (
    <>
      <ButtonGroup
        className="btn-group-toggle float-left"
        data-toggle="buttons"
      >
        {pageButtons}
      </ButtonGroup>
    </>
  );
}


Pager.defaultProps = {
  maxButtons: 6,
  pageSize: 200,
  totalItems: 1000,
  pageNumer: 0,
};

export default Pager;