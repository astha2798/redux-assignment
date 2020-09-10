import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { addName, addLocation, addEmail,addCompany,addEmployee } from '../redux/empActions'

class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', location: '', email: '',company: ''}
    }

    addValues = () => {
        const employee = {
            name: this.state.name,
            address: this.state.location,
            email: this.state.email,
            company: this.state.company
          }
    
        //   axios.post('http://localhost:5000/employees/add', employee)
        //     .then(res => {

        //     console.log(res.data)}
      
        //       // console.log(res.data)
        //       );
        this.props.addEmployee(employee)
        if(this.state.name.length>0 && this.state.email.length>0 && this.state.location.length>0 && this.state.company.length>0)
        {
            console.log(this.state.name, this.state.email, this.state.company)
            this.props.addName(this.state.name)
            this.props.addCompany(this.state.company)
            this.props.addEmail(this.state.email)
            this.props.addLocation(this.state.location)
        }
        else{
            alert("CLASS COMPONENT: Please enter valid values")
        }
    }

    render() {
        return (
            <div>
                <center>
                <h1>Add Employee</h1>
                Name: <input type='text' onChange={ event => this.setState({ name: event.target.value })}></input>
                Email: <input type='email' onChange={ event => this.setState({email: event.target.value })}></input>
                Company: <input type='text' onChange={ event => this.setState({company: event.target.value })}></input>
                Location: <input type='text' onChange={ event => this.setState({location: event.target.value })}></input>
                </center>
                <br/>
                <br/>
                <div>
                <center><button onClick={ ()=> this.addValues() }>Next</button></center>    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        location: state.location,
        email: state.email,
        company: state.company
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addName: name => dispatch(addName(name)),
        addCompany: company => dispatch(addCompany(company)),
        addEmail: email => dispatch(addEmail(email)),
        addLocation: location => dispatch(addLocation(location)),
        addEmployee: employee => dispatch(addEmployee(employee))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddEmployee)