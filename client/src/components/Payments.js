import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
// import { connect } from "react-redux";
// import * as actions from "../actions";

class Payments extends Component {
  render() {
    // debugger;
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        // token={token => this.props.handleToken(token)}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn red darken-4">Add credits</button>
      </StripeCheckout>
    );
  }
}
export default Payments;

// export default connect(
//   null,
//   actions
// )(Payments);
