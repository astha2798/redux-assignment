import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { addName, addLocation, addEmail,addCompany } from '../redux/empActions'
class ShowOne extends Component{
    // console.log(props.name);
    constructor(props) {
        super(props)
        
    }
    // console.log("hiii");\
    render(){
        // console.log(this.props.name.length);
    return(
        <div className="container">
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.company}</td>
                <td>{this.props.location}</td>
                </tr>
            </tbody>
        </table>
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
        addLocation: location => dispatch(addLocation(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowOne)