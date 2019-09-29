import React, { Component} from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // 只有当修改父组件传递props的时候子组件才会刷新dom
  // nextProps父组件即将传过来的props属性
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
    // 以上优雅写法
    // return nextProps.content === this.props.content;
  }

  render() {
    console.log('子组件在渲染 render函数在执行')
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