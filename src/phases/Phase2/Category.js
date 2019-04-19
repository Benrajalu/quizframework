import React, {Component} from 'react';

class Category extends Component {
  render() {
    const {
      match,
    } = this.props;
    console.log(this.props);
    return (
      <div>
        {match.params.category}
      </div>
    );
  }
}

export default Category;
