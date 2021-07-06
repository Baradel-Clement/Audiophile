import { connect } from 'react-redux';

import ProductQuantityCountAddCart from '../../components/ProductQuantityCount';
import { pressMinusAddCartCount, pressPlusAddCartCount } from '../../actions';

const mapStateToProps = (state) => ({
  addCartQuantityCount: state.addCartQuantityCount,
});

const mapDispatchToProps = (dispatch) => ({
  pressMinusAddCartCount: () => {
    dispatch(pressMinusAddCartCount());
  },
  pressPlusAddCartCount: () => {
    dispatch(pressPlusAddCartCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductQuantityCountAddCart);
