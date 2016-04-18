import * as React from 'react'
import GarbageList from './GarbageList'
import { GarbageListProps } from './GarbageList'

interface CategoryContentProps {
  description: string
  initialList: GarbageListProps[]
}

class CategoryContent extends React.Component<CategoryContentProps, void> {
  public render() {
    let initialItems = this.props.initialList.map((initial) => {
      return (
        <GarbageList {...initial}></GarbageList>
      )
    })
    return (
      <div id="collapse0" class="accordion-body in" style="height: auto;">
        <div class="accordion-inner">
          <h3>{this.props.description}</h3>
        </div>
      </div>
    )
  }
}

export default CategoryContent
export { CategoryContentProps }
