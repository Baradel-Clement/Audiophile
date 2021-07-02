import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(App);
