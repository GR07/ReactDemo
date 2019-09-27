import React, { Component} from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.avname}为你服务 - { this.props.content }</li>
    )
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

XiaojiejieItem.propTypes = {
  // isRequired指定这个属性是必传的值
  avname: PropTypes.string.isRequired,

  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
// 指定组件的默认值
XiaojiejieItem.defaultProps = {
  avname: 'avname的默认值'
}
export default XiaojiejieItem