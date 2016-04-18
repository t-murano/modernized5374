import * as React from 'react'
import Garbage from '../models/Garbage'

interface GarbageListProps {
  initialCharacter: string
  garbageList: Garbage[]
}

class GarbageList extends React.Component<GarbageListProps, void> {
  public render() {
    let garbageItems = this.props.garbageList.map((garbage) => {
      return (
        <li style="list-style:none;">
          <div>{garbage.name}</div>
          <div class="note">{garbage.notice}</div>
        </li>
      )
    })

    return (
      <div>
        <h4 class="initials">{this.props.initialCharacter}</h4>
        <ul>{garbageItems}</ul>
      </div>
    )
  }
}

export default GarbageList
export { GarbageListProps }

