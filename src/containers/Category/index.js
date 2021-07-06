import { connect } from 'react-redux';

import Category from '../../components/Category';

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Category);
