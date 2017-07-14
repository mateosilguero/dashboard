import { Component } from 'react'
import Head from 'next/head'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import Badge from 'material-ui/Badge';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui/svg-icons/action/note-add';
import Delete from 'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {TabOne, TabTwo, TabThree} from './Tabs';
import {deepOrange500} from 'material-ui/styles/colors';
import Router from 'next/router'
import Off from 'material-ui/svg-icons/action/power-settings-new'
import { Flex, Box } from 'grid-styled'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
var Ip = require('./Ip.js')

const Red = '#d5393a';
const ip = Ip + ':3000';
var name;
var logState;
var tasks = [];
const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    accent1Color: deepOrange500,
  },
});
const actions = [
  <FlatButton
    label="CERRAR"
    primary={true}
    onTouchTap={() => this.setState({todo: false})}
  />,
]


class HomePage extends Component {  

  static defaultProps = {
    
  }

  constructor(props, context) {
    super(props, context);
    this.newTask = this.newTask.bind(this);
    this.logout = this.logout.bind(this);
  }

  // init state with the prefetched messages
  state = {
    field: '',    
    open: false,
    todo: false,
    undo: false,
    value: 'a'   
  }

  // connect to WS server and listen event
  componentDidMount () {
    logState = localStorage.getItem('logState') || false;
    if(!logState) {
      Router.push('/index');
    }
    tasks = JSON.parse(localStorage.getItem('tasks')) || ["No hay pendientes."]; 
    this.setState({logged: logState})
    var logUser = JSON.parse(localStorage.getItem('user')) || {}         
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('logState');
    this.setState({user: ''});
    this.setState({logged: false});
    logState = localStorage.getItem('logState') || false;
    Router.push('/index');
  }

  // close socket connection
  componentWillUnmount () {
    this.socket.off('message', this.handleMessage)
    this.socket.close()
  }

  // add messages from server to the state
  handleMessage = (message) => {
    this.setState(state => ({ messages: state.messages.concat(message) }))
  }

  handleChange = event => {
    this.setState({ field: event.target.value })
  }

  handleDrawer() {
    this.setState({dopen: !this.state.dopen});
  }

  handleTabs = (value) => {
    this.setState({
      value: value,
    });
  };

  // send messages to server and add them to the state
  handleSubmit = event => {
    event.preventDefault()

    // create message object
    const message = {
      id: (new Date()).getTime(),
      value: this.state.field
    }

    // send object to WS server
    this.socket.emit('message', message)

    // add it to state and clean current input value
    this.setState(state => ({
      field: '',
      messages: state.messages.concat(message)
    }))
  }

  newTask(){    
    tasks.push("Nueva tarea");    
    this.setState({todo: false});
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(tasks));        
    tasks = JSON.parse(localStorage.getItem('tasks'));
    this.setState({todo: true});
  }

  deleteTask(i){
    var taskUndo = tasks;
    localStorage.removeItem('taskUndo');
    localStorage.setItem('taskUndo', JSON.stringify(taskUndo));    
    tasks.splice(i, 1);        
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasks = JSON.parse(localStorage.getItem('tasks'));
    this.setState({todo: false, undo: true});             
  }

  modifyTask(e){
    var i = parseInt(e.target.name);
    tasks[i] = e.target.value;
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(tasks));    
  }

  undoDelete() {    
    tasks = JSON.parse(localStorage.getItem('taskUndo'));
    this.setState({undo: false, todo: true});   
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render () {
    return (        
      <MuiThemeProvider muiTheme={muiTheme}>
        <main style={{margin: -8, backgroundColor: '#aaa'}}>
          <Head>
            <title>Faraday</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
             <style>{`
              body { 
                background: #aaa;
                font-family: 'Roboto';
                color: #fff;
              }
            `}
            </style> 
          </Head>          
          <AppBar
            title="Faraday S.A.I.C. y F.   (30-50386583-8)"
            style={{backgroundColor: Red}}
            iconElementLeft={
              <Badge
                badgeContent={tasks.length}
                primary={true}
                onClick={() => this.setState({open: !this.state.open})}
                badgeStyle={{backgroundColor: '#FF9125', marginRight: 5}}                
              >
                <Menu style={{color: 'white', marginTop: -10}} />
              </Badge>
            }
            iconElementRight={
              <FlatButton
                label="Cerrar Sesión"
                secondary={true}
                onClick={this.logout}
                icon={<Off/>}
              />
            }
          />          
          <Tabs value={this.state.value} inkBarStyle={{backgroundColor: '#000'}}>
            <Tab onClick={() => this.setState({value: 'a'})} label="Cartelera" value="a" style={styles.tab}>
              <TabOne />              
            </Tab>
            <Tab onClick={() => this.setState({value: 'b'})} label="Documentos" value="b" style={styles.tab}>
              <TabTwo />
            </Tab>
            <Tab onClick={() => this.setState({value: 'c'})} label="Datos Personales" value="c" style={styles.tab}>
              <TabThree />
            </Tab>
          </Tabs>
          <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <AppBar 
              title="Faraday"
              style={{backgroundColor: Red, marginBottom: 16}}
              iconElementLeft={
                <IconButton
                  primary={true}
                  onClick={() => this.setState({open: !this.state.open})}              
                >
                  <Close style={{color: 'white', marginTop: -10}} />
                </IconButton>
              } 
            />
            <MenuItem onClick={() => this.setState({todo: true, open: !this.state.open})}>Pendientes ( {tasks.length} )</MenuItem>
            <MenuItem onClick={() => this.setState({open: !this.state.open})}>Menu Item 2</MenuItem>
          </Drawer>
          <Dialog
            title={
              <GridList cols={3} cellHeight={36}>
                <GridTile cols={2.5}>
                  Pendientes ( {tasks.length} )
                </GridTile>
                <GridTile cols={0.5}>
                  <IconButton
                    style={{marginTop: -15, height: 48, width: 48}}
                    iconStyle={{height: 32, width: 32}} 
                    onClick={this.newTask}>
                    <Add />
                  </IconButton>
                </GridTile>
              </GridList>
            }              
            actions={[
              <FlatButton label="CERRAR" 
                primary={true} 
                onClick={() => this.setState({todo: !this.state.todo})}
              />
            ]}
            modal={false}
            open={this.state.todo}
            onRequestClose={() => this.setState({todo: !this.state.todo})}
          >
            <List style={{height: 500, overflowY: 'auto'}}>            
              {tasks.map((task, index) =>                
                <ListItem                   
                  rightIcon={
                    <IconButton style={{marginTop: 15, paddingRight: 5}} onClick={() => this.deleteTask(index)}>
                      <Delete />
                    </IconButton>
                  }
                >
                  <TextField 
                    name={index.toString()} 
                    id="text-field-default"
                    style={{minWidth: '90%'}} 
                    defaultValue={task}
                    multiLine={true} 
                    onChange={this.modifyTask}/>
                </ListItem>
              )}
            </List>
          </Dialog>
          <Snackbar
            open={this.state.undo}
            message="Tarea eliminada."
            action="DESHACER"
            autoHideDuration={5000}
            onClick={() => this.undoDelete()}
            onRequestClose={() => this.setState({undo: false})}
          />                            
        </main>
      </MuiThemeProvider>     
    )
  }
}

const styles = {
  tab: {
    backgroundColor: Red,
    zDepth: 3
  },
  body: { 
    background: '#aaa',
    fontFamily: 'Roboto',
    color: '#fff',
  }
}

export default HomePage
