import { connect } from 'react-redux';

import Product from '../../components/Product';
import {
  addCart,
} from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  addCart: (product) => {
    dispatch(addCart(product));
  },
});

export default connect(null, mapDispatchToProps)(Product);
