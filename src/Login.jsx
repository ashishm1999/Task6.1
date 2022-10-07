import React from 'react'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import TopHeader from './Header'

import db from "./firebase"
import { collection, query, getDocs } from "firebase/firestore";
import { Navigate } from 'react-router-dom';

import Toast from './Toast'


class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      authenticated: false,
      failed: false, 
    };
  }

  componentDidMount() {
    const loggedIn = localStorage.getItem("authenticated");

    if(loggedIn === true){
      this.setState({
        authenticated: true
      });
    }
 }

  loginUser = async () => {
      console.log('this.state: ' + JSON.stringify(this.state))
      const first = query(
        collection(db, "users"),
      );
      const snapshot = await getDocs(first);
      var users = snapshot.docs.map(doc => doc.data());

      console.log('users: ' + JSON.stringify(snapshot))
      users.forEach(user => {

        if (this.state.email === user.email){
          if (this.state.password === user.password){
            
            localStorage.setItem("authenticated", true)
            localStorage.setItem("email", this.state.email)
            this.setState({
              authenticated: true
            });
            return
          }
        }

        this.setState({
          password: "",
          failed: true
        });
        console.log('state: '+ this.state.failed);
        
      });
    // const auth = getAuth();
    // console.log('auth: ' + auth)
    // signInWithEmailAndPassword(auth, this.state.email, this.state.password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log('user: ', JSON.stringify(user));
    //     this.setState({
    //              authenticated: true
    //             });
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    if (this.state.authenticated) {
      return <Navigate to={'/'}/>;
    }

    return (
      <div>
      <TopHeader />
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Log-in
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.updateInput} value={this.state.email} name="email"/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.updateInput} value={this.state.password} name="password"
          />

          <Button color='blue' fluid size='large' onClick={this.loginUser}>
            Login
          </Button>
        </Segment>
        {this.state.failed && <Toast />}
      </Form>
      <Message>
        New user? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  </div>

    )
}
}
export default Login