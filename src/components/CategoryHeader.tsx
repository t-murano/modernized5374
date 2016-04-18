import * as React from 'react'
import Category from '../models/Category'

interface CategoryHeaderProps {
  daysLeft: string
  categoryName: string
  schedule: string
  image: string
}

class CategoryHeader extends React.Component<CategoryHeaderProps, void> {
  public render() {
    return (
      <div class="accordion-heading">
        <a class="accordion-toggle collapsed" style="height:168.25px" data-toggle="collapse" data-parent="#accordion" href="#collapse0">
          <div class="left-day">{this.props.daysLeft}日後</div>
          <div class="accordion-table">
            <img src={this.props.image} alt={this.props.categoryName}/>
          </div>
          <h6><p class="text-left date">{this.props.schedule}</p></h6>
        </a>
      </div>
    )
  }
}

export default CategoryHeader
export { CategoryHeaderProps }
