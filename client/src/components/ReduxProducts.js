import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import { getProducts } from "../reducers/products";
import { connect } from "react-redux";

const ReduxProducts = (props) => {
  useEffect(() => {
    props.getProductsX();
  }, []);

  return (
    <>
      <Header as="h1">ReduxProducts</Header>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getProductsX: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(ReduxProducts);
