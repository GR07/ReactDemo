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
          <input value={this.state.inputValue} onChange={this.inputChange} className="input" type="text"/>
          <button onClick={this.addList}>增加技术栈</button>
        </div>
        <ul>
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
  inputChange(e) {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
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