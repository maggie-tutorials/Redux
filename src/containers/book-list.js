import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            { book.title
          }</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // The purpose of this function is to take the application state as an argument
  // And whatever gets returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch);
}

// The connect function is what takes the component, maps the state to props
// and returns a container which is aware of the state contained by Redux
// Whatever object is returned will be available as this.props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
