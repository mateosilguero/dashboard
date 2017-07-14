import { Component } from 'react'
import io from 'socket.io-client'
import Head from 'next/head'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import * as superagent from 'superagent'
import Dialog from 'material-ui/Dialog';
import Router from 'next/router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Flex, Box } from 'grid-styled'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

var Ip = require('./Ip.js')
var list = [{name:""}];
const Red = '#d5393a';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    accent1Color: deepOrange500,
  },
});

class Admin extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      list: list || {},
      dialog: false,
      confirm: false,
      search: '',
      selectedUSer: {}
    }
  }

  // connect to WS server and listen event
  componentDidMount () {
    var logState = localStorage.getItem('logState') || false;
    if(!logState) {
      Router.push('/index');
    }
    var logUser = JSON.parse(localStorage.getItem('user')) || {}
    if(!logUser || logUser.name != "Mateo Silguero") {
      Router.push('/index');
    }
    this.getUsers();
    list = JSON.parse(localStorage.getItem('uList'));
    this.setState({list: list});
  }

  getUsers = async() => {
    await superagent.get('http://faraday:8000/api/users/')
      .then(res => {
        localStorage.setItem('uList' , JSON.stringify(JSON.parse(res.text).results))                     
      })
      .catch(error => console.error(error.stack))  
  }

  filterList(query) {
    var l = this.state.list;
    var newl = [];        
    l = l.filter(function(item){
      for (var i = l.length - 1; i >= 0; i--) {
        var a = l[i].name.toLowerCase();
        if(a.includes(query)) {
          newl.push(l[i]);
        }
      }
    })
    if(newl.length < 1) {
      this.setState({list: newl});
    }
    if (query === "" || !query) {
      this.setState({list: list});
    }    
  }

  areYouSure() {
    this.setState({dialog: false, confirm: true});  
  }

  remove = async(_id) => {
    this.setState({confirm: false});
    await superagent.post(`http://faraday:8000/api/users/delete/${_id}`)
      .then(res => {
        console.log(res);
        location.reload();                     
      })
      .catch(error => console.error(error.stack))  
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <main style={{margin: -8, backgroundColor: '#aaa'}}>
          <Head>
            <title>Faraday</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
             <style >{`
              body { 
                background: #aaa;
                font-family: 'Roboto';
                color: #fff;
              }
            `}
            </style> 
          </Head>
          <div style={{marginTop: 32}}>
            <Flex wrap align='center'>
              <Box p={0} width={[1, 1/4 ]}></Box>
              <Box p={0} width={[1, 2/4 ]}>   
                <Card zDepth={this.state.shadow} >
                  <CardTitle title="Administración de Usuarios" />                   
                  <CardText>
                    <TextField hintText="Buscar por nombre..." onChange={(e) => this.filterList(e.target.value)} />
                    <List>                     
                      {
                        this.state.list.map(user => (
                          <div key={user._id}>
                            <ListItem
                              leftAvatar={<Avatar src={user.profilePicture} />}
                              rightIcon={<ActionInfo />}
                              primaryText={user.name}
                              primaryTextStyle={{color: Red}}
                              secondaryText={user.email}
                              onClick={() => this.setState({dialog: !this.state.dialog, selectedUSer: user})}
                            />
                          </div>
                        ))
                      }
                      <Divider inset={true} />
                    </List>
                  </CardText>              
                </Card>
              </Box>
              <Box p={0} width={[1, 1/4 ]}></Box>
            </Flex>            
          </div>
          <Dialog
            title="Usuario"             
            actions={[
              <RaisedButton label="CERRAR" 
                primary={true}
                onClick={() => this.setState({dialog: !this.state.dialog})}
              />,
              <RaisedButton label="ELIMINAR"
                style={{marginLeft: 16}}                 
                secondary={true} 
                onClick={() => this.setState({dialog: false, confirm: true})}
              />
            ]}
            modal={false}
            open={this.state.dialog}
            onRequestClose={() => this.setState({dialog: !this.state.dialog})}
          >
            <List style={{height: 500, overflowY: 'auto'}}>                     
              <ListItem
                primaryText={this.state.selectedUSer.name}
                secondaryText="Nombre"
              />
              <ListItem
                primaryText={this.state.selectedUSer.cuil}
                secondaryText="Cuil"
              />
              <ListItem
                primaryText={this.state.selectedUSer.email}
                secondaryText="Email"
              />
              <ListItem
                primaryText={this.state.selectedUSer.direccion}
                secondaryText="Dirección"
              />
              <ListItem
                primaryText={this.state.selectedUSer.telefono}
                secondaryText="Telefono"
              />
              <ListItem
                primaryText={this.state.selectedUSer.role}
                secondaryText="ROL"
              />
              <ListItem
                primaryText={this.state.selectedUSer._id}
                secondaryText="ID"
              />
              <Divider inset={true} />
            </List>
          </Dialog>
          <Dialog
            title={"Seguro quieres dar de baja al usuario " + this.state.selectedUSer.name + " ?"}             
            actions={[
              <RaisedButton label="CERRAR" 
                primary={true}
                onClick={() => this.setState({confirm: !this.state.confirm})}
              />,
              <RaisedButton label="CONFIRMAR"
                style={{marginLeft: 16}}                 
                secondary={true} 
                onClick={() => this.remove(this.state.selectedUSer._id)}
              />
            ]}
            modal={false}
            open={this.state.confirm}
            onRequestClose={() => this.setState({confirm: !this.state.confirm})}
          >          
          </Dialog>
        </main>
      </MuiThemeProvider> 
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

export default Admin