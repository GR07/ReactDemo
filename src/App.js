import React, { Component} from 'react'

class App extends Component {
  render() {
    // js 和 xml 的结合，这就是jsx语法
    // 遇到 < 当成html解析 遇到 { 当成js解析
    return (
      <div>
        Hello React
      </div>
    )
  }
}

export default App