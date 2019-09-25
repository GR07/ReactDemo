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
  }
  render() {
    return (
      <Fragment>
        <div>
          {/*注释*/}
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} className="input" type="text"/>
          <button onClick={this.addList.bind(this)}>增加技术栈</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                  <XiaojiejieItem />
                </div>
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