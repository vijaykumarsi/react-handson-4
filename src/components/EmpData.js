import React, { Component } from 'react'

export default class EmployeeData extends Component {
    constructor(props) {
        super(props)
        console.log();
    }
  render() {
    return (
      <div>
        <h1>Employee Data</h1>
        <div id="data_container">
            {this.props.data.map((ele,index) =>{
                return (
                    <div id="inner_container" key={index}>
                        <h3>{ele.name}</h3>
                    </div>
                 );
                })
            }
        </div>
        <button className="dynamic_button" onClick={this.props.toggleFunc}>Go back</button>
      </div>
    )
  }
}
