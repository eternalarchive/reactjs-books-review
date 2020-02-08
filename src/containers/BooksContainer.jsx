import { connect } from 'react-redux';
import Books from '../components/Books';
import { setBooksThunk, deleteBooksThunk } from '../actions';

const mapStateToProps = state => ({
  token: state.token,
  books: state.books,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  setBooks: token => {
    dispatch(setBooksThunk(token));
  },
  deleteBook: (token, id) => {
    dispatch(deleteBooksThunk(token, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
