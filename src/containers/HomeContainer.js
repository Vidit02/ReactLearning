import { connect } from "react-redux";
import { HomeComponent } from "../components/HomeComponent";
import { addToCart } from "../services/actions/Actions";
import { removeFromCart } from "../services/actions/Actions";

const mapStateToProps = state =>({
    cartData : state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler : product => dispatch(addToCart(product)),
    removeFromCartHandler : product => dispatch(removeFromCart(product))
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
