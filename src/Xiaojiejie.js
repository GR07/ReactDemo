import React from 'react'
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
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} type="text"/>
          <button onClick={this.addList.bind(this)}>增加技术栈</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index + item}>{item}</li>
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
}

export default Xiaojiejie