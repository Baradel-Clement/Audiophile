import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import {
  setDisplayCart,
  setDisplayMask,
  setDisplayMenu,
} from '../../actions';

const mapStateToProps = (state) => ({
  displayCart: state.cart.display,
  totalProductInCart: state.cart.totalProduct,
  displayMask: state.displayMask,
  displayMenu: state.displayMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayCart: (displayCart) => {
    dispatch(setDisplayCart(displayCart));
  },
  setDisplayMask: (displayMask, triggeredFrom) => {
    dispatch(setDisplayMask(displayMask, triggeredFrom));
  },
  setDisplayMenu: (displayMenu) => {
    dispatch(setDisplayMenu(displayMenu));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
