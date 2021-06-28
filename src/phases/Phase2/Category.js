import React, { Component } from 'react';
import { ITEMS } from '../../data/phase2';

import style from './Category.module.scss';
import CategoryQuestion from '../../components/CategoryQuestion/CategoryQuestion';

class Category extends Component {
  render() {
    const {
      match: {
        params: { category: urlCategory }
      }
    } = this.props;
    console.log(urlCategory);
    const categoryData = ITEMS.filter(
      category => category.url === urlCategory
    )[0];
    return (
      <div className={style.category}>
        {categoryData.questions.map((question, index) => (
          <CategoryQuestion
            status={question.status}
            points={question.points}
            question={question.question}
            key={`${question.question.text}--${urlCategory}--${index}`}
            replied={question.replied}
          />
        ))}
      </div>
    );
  }
}

export default Category;
