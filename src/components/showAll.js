import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addName, addLocation, addEmail,addCompany,fetchEmployees } from '../redux/empActions'
class ShowAll extends Component {

 	constructor(props) {
    super(props);
    this.state={
      data:this.props.data,
      employees:[]
    };
  }
  componentDidMount = () => {
    // this.getEmployees();
    this.props.fetchEmployees()
  };

  // getEmployees = () => {
  //   axios.get('http://localhost:5000/employees/')
  //     .then((res) => {
  //       // console.log(res);
  //       const data = res.data;
  //       this.setState({ employees: data });
  //       // console.log('Data has been received!!');
  //     })
  //     .catch((err) => {
  //       alert('Error retrieving data!!!');
  //       // console.log(err.response);

  //     });
  // }
//   componentDidUpdate(prevProps) {
//     // console.log('componentDidUpdate');
//   if(prevProps.data !== this.props.data) {
//     this.setState({data: this.props.data});
    
//     return(this.getEmployees());
//     // this.render();
//   }
// }

  displayEmployees = (employees) => {


    if (!employees.length) return null;
    // console.log(employees);

    return employees.map((employee, index) => (
      <div key={index}>
        <table class="table">
        <tr>
        <td>{employee._id}</td>
        <td>{employee.name}</td>
        <td>{employee.address}</td>
        <td>{employee.email}</td>
        <td>{employee.company}</td>
        </tr>
        </table>
      </div>
    ));
  };

  render(){
  return(
    <div key="this.props.data">
        <h3>EmployeeList</h3>
        {this.displayEmployees(this.props.employees)}
    </div>
  );
}
  }
  const mapStateToProps = state => {
    return {
        name: state.name,
        location: state.location,
        email: state.email,
        company: state.company,
        employees: state.employees
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addName: name => dispatch(addName(name)),
//         addCompany: company => dispatch(addCompany(company)),
//         addEmail: email => dispatch(addEmail(email)),
//         addLocation: location => dispatch(addLocation(location))
//     }
// }

export default connect(mapStateToProps, {fetchEmployees})(ShowAll)