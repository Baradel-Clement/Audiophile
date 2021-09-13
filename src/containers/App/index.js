import { connect } from 'react-redux';

import App from '../../components/App';

import {
  changeMediaDevice,
} from '../../actions';

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
  displayMask: state.displayMask,
  mediaDevice: state.mediaDevice,
});

const mapDispatchToProps = (dispatch) => ({
  changeMediaDevice: (mediaDevice) => {
    dispatch(changeMediaDevice(mediaDevice));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
