import './styles/main.scss' //make sure to only import this once there is something in the main.scss file
import React from 'react'
import ReactDom from 'react-dom' //how we connnect back to the html, whwere the html doc has that root div

//nav bar
class Navbar extends React.Component { //prexisting tag- Header, don't use that!
  render(){
    return (
      <header className="app-header">
      <h1....
    )
  }
}

class App extends React.Component { //you are a base thing, I want to inherit evrthing you have. prototypal inheritence but it will be called app. a reusable component for parts of the body, while hte footer remains static.
  constructor(){
    super(props)

    this.state = { //initiate some default properties
      count: 0
    }
    this.handleClick = this.handleClick.bind(this) //without this the counter isn't aware of the handleClick menthod. Binding instance (the this=instance) to that menthod.
  }
  handleClick(e){
    this.setState(prevState => ({ count: prevState.count + 1 }))//want to return an object with teh new state. Returning an object literal, and we maintain that object literal by putting parens around it. look for the bundle-<hash> in terminal!!!
    })
  }

  render() {
    return (
      <div className="application">
      <Navbar />
        <p onClick =>{this.handleClick}>Counter:{this.state.count}></p> //similar to HBars, assigning a funtion that should execute on click. the counter refers back up to the state. The dom will continue to rerender and update as state changes.
    )
    }
  }
}

ReactDom.render(<App />, document.getElementById('root')) //now in termainal- npm run build
