import * as React from 'react'
import { connect } from 'react-redux'
import CategoryHeader from '../components/CategoryHeader'
import CategoryContent from '../components/CategoryContent'
import { CategoryHeaderProps } from '../components/CategoryHeader'
import { CategoryContentProps } from '../components/CategoryContent'

interface CategoryBoxProps {
  header: CategoryHeaderProps
  content: CategoryContentProps
}

interface CategoryListProps {
  categories: CategoryBoxProps[]
}

class CategoryList extends React.Component<CategoryListProps, void> {
  renderCategoryBox(categoryBoxData: CategoryBoxProps) {
    return (
      <div class="accordion-group" id="accordion-group1">
        <CategoryHeader {...categoryBoxData.header}></CategoryHeader>
        <CategoryContent {...categoryBoxData.content}></CategoryContent>
      </div>
    )
  }

  public render() {
    let categoryList = this.props.categories.map((category) => {
      return this.renderCategoryBox(category)
    })
    return (
      <div id="accordion">
        {categoryList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(CategoryList)
export { CategoryBoxProps }
