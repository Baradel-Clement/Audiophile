import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import {
  setDisplayCart,
} from '../../actions';

const mapStateToProps = (state) => ({
  displayCart: state.cart.display,
  totalProductInCart: state.cart.totalProduct,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayCart: (displayCart) => {
    dispatch(setDisplayCart(displayCart));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
