import React from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

const Component = React.Component
const Fragment = React.Fragment

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['js', 'css']
    }
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          {/*注释*/}
          <input value={this.state.inputValue} ref={(input) => {this.input = input}} onChange={this.inputChange} className="input" type="text"/>
          <button onClick={this.addList}>增加技术栈</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {
            this.state.list.map((item, index) => {
              return (
                  <XiaojiejieItem content={item} index={index} deleteItem={this.deleteItem} key={index+item} />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange() {
    // setState 是个异步方法，所以官方支持一个回调函数
    this.setState({
      inputValue: this.input.value
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  addList() {
    if (!this.state.inputValue) return;
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deleteItem(index) {
    // 这里重点：react 不允许直接对state数据进行改变，必须通过其他变量赋值。
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie