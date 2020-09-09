import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { addName, addLocation, addEmail,addCompany } from '../redux/empActions'

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
    
          axios.post('http://localhost:5000/employees/add', employee)
            .then(res => {

            console.log(res.data)}
      
              // console.log(res.data)
              );
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
        // this.setState({name: '', location: '', email: '',company: ''})
    }

    render() {
        return (
            <div>
                <center>
                <h1>Add Employee</h1>
                <br/>
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
        addLocation: location => dispatch(addLocation(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)
// import React, { Component } from 'react';
// import axios from 'axios';

// export default class AddEmployee extends Component {
//   constructor(props) {
//     super(props);
//      this.state = {
//       fieldValChild: ""
//     };
//     this.onChangeName = this.onChangeName.bind(this);
//     this.onChangeAddress = this.onChangeAddress.bind(this);
//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangeCompany = this.onChangeCompany.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       name: '',
//       address: '',
//       email: '',
//       company: ''
//     }
//   }

//   onChangeName(e) {
//     this.setState({
//       name: e.target.value
//     })
//   }

//   onChangeAddress(e) {
//     this.setState({
//       address: e.target.value
//     })
//   }

//   onChangeEmail(e) {
//     this.setState({
//       email: e.target.value
//     })
//   }

//   onChangeCompany(e) {
//     this.setState({
//       company: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

    // const employee = {
    //   name: this.state.name,
    //   address: this.state.address,
    //   email: this.state.email,
    //   company: this.state.company
    // }

    // // this.props.update(this.props.dataValue+1);
    // this.state.name='';
    // this.state.address='';
    // this.state.email='';
    // this.state.company='';
    // document.getElementById("createdEmployee").innerHTML="<h3>Employee Created</h3>";
    // axios.post('http://localhost:5000/employees/add', employee)
    //   .then(res => {
    //     this.props.data.updateUnit(this.props.data.unit+1);
    //     document.getElementById("createdId").innerHTML=res.data;}

    //     // console.log(res.data)
    //     );
//   }

//   render() {
//     return (
//     <div id = "leftbox">
//       <h3>Employee Form</h3>
//       <form id="myForm" onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//           <label>Name: </label>
//           <input type="text"
//               required
//               className="form-control"
//               id="empName"
//               value={this.state.name}
//               onChange={this.onChangeName}/>
         
//         </div>
//         <div className="form-group"> 
//           <label>Address: </label>
//           <input type="text"
//               required
//               className="form-control"
//               id="empAddress"
//               value={this.state.address}
//               onChange={this.onChangeAddress}
//               />
//         </div>
//         <div className="form-group"> 
//           <label>Email: </label>
//           <input  type="email"
//               required
//               className="form-control"
//               id="empEmail"
//               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//               value={this.state.email}

//               onChange={this.onChangeEmail}
//               />
//         </div>
//         <div className="form-group"> 
//           <label>Comapny: </label>
//           <input  type="text"
//               required
//               className="form-control"
//               id="empCompany"
//               value={this.state.company}
//               onChange={this.onChangeCompany}
//               />
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Add Employee" className="btn btn-primary" />
//         </div>
//       </form>
//       <span id="createdEmployee">
//       </span>
//       <span id="createdId">
//       </span>
//     </div>
//     )
//   }
// }