import React from 'react'
import { CSSTransition } from 'react-transition-group'
const Component = React.Component

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() {
    return (
      <div>
        {/*<div className={this.state.isShow? 'show' : 'hide' }>Boss - 阿里 腾讯 百度</div>*/}
        <CSSTransition in={this.state.isShow} timeout={2000} classNames="boss-text"><div>用CSSTransition实现 ---- Boss - 阿里 腾讯 百度</div></CSSTransition>
        <div><button onClick={this.toToggole}>显示</button></div>
      </div>
    )
  }
  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

export default Boss;