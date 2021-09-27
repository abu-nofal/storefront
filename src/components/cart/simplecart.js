import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions";
import { Button } from "@material-ui/core";

const SimpleCart = (props) => {
  return (
    <>
    <div style={{position:"absolute", right:"20px"}}>

    
      <section >
        <If condition={() => props.cart.length !== 0}>
          <ui>
            {props.cart.map((item, idx) => {
              return (
                <li key={idx}>
                  <span>{item.name}</span>
                  <Button
                    color="secondary"
                    onClick={() => {
                      props.deleteProduct(item);
                    }}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
          </ui>
        </If>
      </section>
      </div>
    </>
  );
};

const mapStateToprops = (state) => {
  return { cart: state.cartReducer.cart };
};
const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);