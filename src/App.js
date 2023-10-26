import React, { component  } from 'react'
import fire from './config/fire';
import Home from './home';
import Login from './login';

export default class home extends component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }

  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else {
        this.setState({user:null})
      }
    })
  }
     render () {
        return (
            <div> 
             {this-this.state.user ? (<Home/>) : (<Login/>)}
            </div>
        )
     }
}