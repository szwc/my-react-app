import React from 'react'
class ChildCom extends React.Component {
  constructor(props) {
    super(props)
    console.log('childCom constructor--- props', props)
    this.state = {
      count: 0
    }
  }
  /**
     * 
     *getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
      它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
     */
  static getDerivedStateFromProps(props, state) {
    console.log('childCom static getDerivedStateFromProps', props, state)
    return {
      // num:1
    }
  }
  // componentWillMount(){
  //     console.log('willMount----');
  // }
  componentDidMount() {
    console.log('childCom didmount---')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('childCom shouldComponentUpdate---')
    return true
    // return false
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'childCom componentDidUpdate prevProps, prevState, snapshot',
      prevProps,
      prevState,
      snapshot
    )
  }
  componentWillUnmount() {
    console.log('childCom WillUnmount---')
    console.log('eslint test')
  }
  dfsa = () => {
    console.log('dsfjsdfojd dsfjsfjdsfs ')
    console.log('dsfjsdfojd dsfjsfjdsfs sdfs ')
  }
  dfsadsfs = () => {
    console.log('dsfdsfdsfjsdfojd   dsfjsfjdsfs ', this.state)
  }
  render() {
    console.log('childCom render---')
    const { count } = this.state
    return (
      <>
        <h1>hello world</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 })
          }}
        >
          count++
        </button>
        {/* <h2>parent num {this.props.num}</h2> */}
        <h2>self count {count}</h2>
      </>
    )
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'childCom getSnapshotBeforeUpdate prevProps, prevState',
      prevProps,
      prevState
    )
    return {}
  }
}
export default class LifeCircleDemo extends React.Component {
  constructor(props) {
    super(props)
    console.log('parent constructor--- props', props)
    this.state = {
      num: 0
    }
  }
  /**
     * 
     *getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
      它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
     */
  static getDerivedStateFromProps(props, state) {
    console.log('parent static getDerivedStateFromProps', props, state)
    return {
      num: 1
    }
  }
  // componentWillMount(){
  //     console.log('willMount----');
  // }
  componentDidMount() {
    console.log('parent didmount---')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('parent shouldComponentUpdate---')
    return true
    // return false
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'parent componentDidUpdate prevProps, prevState, snapshot',
      prevProps,
      prevState,
      snapshot
    )
  }
  componentWillUnmount() {
    console.log('parent WillUnmount---')
  }
  render() {
    console.log('parent render---')
    const { num } = this.state
    return (
      <>
        hello world
        <div>{num}</div>
        <button
          onClick={() => {
            this.setState({ num: num + 1 })
          }}
        >
          num++
        </button>
        <ChildCom />
      </>
    )
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'parent getSnapshotBeforeUpdate prevProps, prevState',
      prevProps,
      prevState
    )
    return {}
  }
}
