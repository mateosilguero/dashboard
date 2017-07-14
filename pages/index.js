import { Component } from 'react'
import io from 'socket.io-client'
import GoogleLogin from 'react-google-login';
import Router from 'next/router'
var Ip = require('./Ip.js')

class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  // connect to WS server and listen event
  componentDidMount () {
    var logState = localStorage.getItem('logState') || false;
    if(logState) {
      Router.push('/main');
    }
  }

  responseGoogle(response){
    localStorage.setItem('logState', true);    
    localStorage.setItem('user', JSON.stringify(response.profileObj));    
    Router.push('/main');    
  }

  render () {
    return (
  		<div style={{alignItems: 'center', marginLeft: 'calc(50vw - 130px)',marginTop: '45vh', width: 300}}>
  	    <GoogleLogin
  	      clientId="368629677527-1nvofnmj4a7jupahllnt7i5jc4e5lpvs.apps.googleusercontent.com"
  	      buttonText="Iniciar Sesión con Google"
  	      onSuccess={this.responseGoogle}
  	      onFailure={() => alert("Error al iniciar sesión.")}
  	      style={styles.buttonLogin}          
  	    />
    	</div>
    )
  }
}

const styles = {
  buttonLogin: {
    color: 'rgb(255, 255, 255)',
    width: 264,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    background: 'rgb(209, 72, 54)',
    height: 58
  }
}

export default Login