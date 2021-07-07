import { connect } from 'react-redux';

import Cart from '../../components/Cart';
import { cleanCart, addQuantityProductInCart, removeQuantityProductInCart } from '../../actions';

const mapStateToProps = (state) => ({
  productsInCart: state.cart.products,
  totalPrice: state.cart.totalPrice,
  totalProduct: state.cart.totalProduct,
});

const mapDispatchToProps = (dispatch) => ({
  cleanCart: () => {
    dispatch(cleanCart());
  },
  addQuantityProductInCart: (product) => {
    dispatch(addQuantityProductInCart(product));
  },
  removeQuantityProductInCart: (product) => {
    dispatch(removeQuantityProductInCart(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
