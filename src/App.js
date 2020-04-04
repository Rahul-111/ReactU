import React, {Component} from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    person:[{name:'Rahul',age:22},{name:'React',age:20},{name:'Javascript',age:20},{name:'Android',age:10}],
    showPerson:false
  }
  
  switchNameHandler=(newName)=>{
    this.setState({
      person:[{name:newName,age:22},{name:'React',age:20},{name:'Javascript',age:20}]
    })
  }
  changeNameHandler=(event)=>{
    this.setState({
      person:[{name:'Rahul',age:22},{name:event.target.value,age:20},{name:'Javascript',age:20}]
    })
  }
  togglePersonHandler=()=>{
    const doesShow = this.state.showPerson
    this.setState({showPerson:!doesShow})
  }
  render(){
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    }

    let person = null
    if(this.state.showPerson){
      person = (
        <div>
          {
            this.state.person.map((per)=>{
                return <Person 
                name={per.name}
                age={per.age}
                />
            })
          }
          </div>
            // <Person
            //   name = {this.state.person[0].name}
            //   age = {this.state.person[0].age}
            // />
          
            // <Person 
            //   name = {this.state.person[1].name}
            //   age = {this.state.person[1].age}
            //   click = {() => this.switchNameHandler('Rahul')}
            //   changed = {this.changeNameHandler}
            // />
            // <Person 
            //   name = {this.state.person[2].name}
            //   age = {this.state.person[2].age}
            // />
      )
    }
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is Really Working</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle</button>
          {person}
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById("root"))

export default App
// switchNameHandler =()=>{
//   // Don't do this state are immuatable this.state.person[1].name = "Srivastav"
//   this.setState({
//     person:[{name:'Rahul Srivastav',age:22},{name:'React',age:10}]
//   })
// }