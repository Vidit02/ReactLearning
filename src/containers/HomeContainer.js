import { connect } from "react-redux";
import { CartComponent } from "../components/CartComponent";
import { HomeComponent } from "../components/HomeComponent";
import { addToCart } from "../services/actions/Actions";
import { removeFromCart } from "../services/actions/Actions";

const mapStateToProps = state =>({
    cartData : state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler : product => dispatch(addToCart(product)),
    removeFromCartHandler : product => dispatch(removeFromCart(product)),
    // listFromCartHandler : product => dispatch(listFromCart(product))
})
export default {
    AddProduct: connect(mapStateToProps,mapDispatchToProps)(HomeComponent),
    ListProduct: connect(mapStateToProps,mapDispatchToProps)(CartComponent)
}
