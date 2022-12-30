import React from "react";
import { Button } from "antd";
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');
class App extends React.Component {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    render() {
      return (
        <ThemeContext.Provider value="dark">
            <Toolbar />;
            <ThemeContext.Consumer>
                {(value)=>`theme is ${value}`}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
      )
    }
  }
  
  function Toolbar(props) {
    // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
    // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
    // 因为必须将这个值层层传递所有组件。
    return (
      <div>
        <ThemedButton/>
      </div>
    );
  }
  
  class ThemedButton extends React.Component {
    static contextType = ThemeContext
    render() {
      return <Button theme={this.context} >{this.context}</Button>
    }
  }
  export default App