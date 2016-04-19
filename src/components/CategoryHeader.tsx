import * as React from 'react'
import Category from '../models/Category'

interface CategoryHeaderProps {
  daysLeft: number
  categoryName: string
  schedule: string
  image: string
}

class CategoryHeader extends React.Component<CategoryHeaderProps, void> {
  private formatDaysLeft(daysLeft: number) {
    switch (daysLeft) {
      case 0:
        return '今日'
      case 1:
        return '明日'
      case 2:
        return '明後日'
      default:
        return `${daysLeft}日後`
    }
  }

  public render() {
    return (
      <div class="accordion-heading">
        <a class="accordion-toggle collapsed" style="height:168.25px" data-toggle="collapse" data-parent="#accordion" href="#collapse0">
          <div class="left-day">{this.formatDaysLeft(this.props.daysLeft)}</div>
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
