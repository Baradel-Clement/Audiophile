import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
  displayMask: state.displayMask,
});

export default connect(mapStateToProps)(App);
