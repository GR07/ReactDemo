import React from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'

const Component = React.Component
// 外层容器
const Fragment = React.Fragment
// 继承了react Component这个基类，也就继承这个react的基类，才能有render(), 生命周期等方法可以使用。
class Xiaojiejie extends Component {
  // constructor()用来做一些组件的初始化工作，如定义this.state的初始内容
  constructor(props) {
    // super(props)用来调用基类的构造方法 constructor()
    // 也将父组件的props注入给子组件
    // 组件中props只读不可变，state可变
    super(props)
    this.state = {
      inputValue: '',
      list: ['js', 'css']
    }
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {console.log(`获取数据成功：${res}`)})
      .catch((error) => {console.log(`获取数据失败`)})
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
        <Boss />
      </Fragment>
    )
  }
  inputChange() {
    // setState 是个异步方法，所以官方支持一个回调函数，这个回调函数就是dom更新后执行的回调
    this.setState({
      inputValue: this.input.value
    }, () => {
      // dom更新后执行的回调
      // console.log(this.ul.querySelectorAll('li').length)
    })
  }
  addList() {
    console.log(this)
    if (!this.state.inputValue) return;
    this.setState({
      // 给list赋值
      list: [...this.state.list, this.state.inputValue],
      // 初始化inputValue为空
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