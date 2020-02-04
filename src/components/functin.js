import React from "react"
export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    email: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
   
    document.getElementById("demo").innerHTML=(`${this.state.firstName} ${this.state.email}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      
          <input
            type="text"
            placeholder="Enter Your Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
       
          <input
            type="text"
            placeholder="Email Id"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
   
        <button type="submit">Submit</button>
        <p id="demo"></p>
      </form>
    )
  }
}