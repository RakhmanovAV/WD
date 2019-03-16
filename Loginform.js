import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const dataUser  = [
        {email: 'lexa55rus@mail.ru',
        password: '12345'},

        {email: 'rav3110@gmail.com',
        password: '54321'}

        ];
       
class LoginForm extends Component {
   state = {
        email: '',
        password: '',
        error: ''
   };


authentication() {
        var auntefic = dataUser.some((user) => {return user.email===this.state.email && user.password===this.state.password});
        if (auntefic){
       console.log('Hi')
}       else{ 
        console.log('Hi2')} 
};

    render () {
        
        console.log(this.state)
        console.log(dataUser)
        console.log(this.auntefic)
        console.log(dataUser.some((user) => {return user.email===this.state.email && user.password===this.state.password}))

       return (
        <Fragment>
    <form>               
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                        onChange ={(event)  => this.setState({email: event.target.value})}
                        />
                </div>
                <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                        onChange ={(event)  => this.setState({password: event.target.value})}
                        />
                </div>

                <h1>{this.state.error}</h1>
                <button onClick={this.authentication} type='button'  className="btn btn-primary">Login</button>
    </form>

        </Fragment>)
    }} 
    const mapStateToProps = ({auth}) => ({auth});

    export default connect(mapStateToProps, actions)(LoginForm) 
