import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'grid-styled'
import * as superagent from 'superagent'
import RaisedButton from 'material-ui/RaisedButton';

const Red = '#d5393a';
var user;

class TabThree extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      shadow: 3,
      edit: false,
      user: user || {name: "", cuil: '', direccion:"", telefono: 0}
    };
  }


  componentDidMount(){
    user = JSON.parse(localStorage.getItem('current'));
    this.setState({user: user});
    // superagent.get(`http://faraday:8000/api/users/${_id}`)
    //   .then(res => {
    //     localStorage.setItem('current' , JSON.stringify(JSON.parse(res.text)))                    
    //   })
    //   .catch(error => console.error(error.stack))
    var _name = user.name
    //var _name = 'asd';
    superagent.get(`http://faraday:8000/api/users/byname/${_name}`)
      .then(res => {
        localStorage.setItem('current' , JSON.stringify(JSON.parse(res.text)))                    
      })
      .catch(error => {
        var sUser = JSON.parse(localStorage.getItem('current'));
        var user = {
          name: sUser.name, 
          email: sUser.email, 
          cuil: '', 
          direccion:"", 
          telefono: 0,
          profilePicture: sUser.imageUrl
        }
        superagent.post('http://faraday:8000/api/users', user)
          .then(res => {
            //console.log(res);                     
          })
          .catch(error => console.error(error.stack))
        console.error(error.stack)        
      })
    user = JSON.parse(localStorage.getItem('current'));  
    this.setState({user: user});
  }

  updateUser(user) {
    superagent.put(`http://faraday:8000/api/users/${user._id}`, user)
      .then(res => {
        //console.log(res);                     
      })
      .catch(error => console.error(error.stack))  
    this.setState({edit: !this.state.edit});
    //console.log(user);
  }

  show() {
    if(!this.state.edit) {
      return (
        <div>          
          <CardTitle title={this.state.user.telefono} subtitle="Telefono" subtitleColor={Red} />
          <CardTitle title={this.state.user.direccion} subtitle="Dirección" subtitleColor={Red} />
          <CardTitle title={this.state.user.cuil || 0} subtitle="Cuil" subtitleColor={Red} />
          <RaisedButton style={styles.button} primary="true" label="ACTUALIZAR" onClick={() => this.setState({edit: !this.state.edit})} />
        </div>
      )
    } else {
      return (
        <div style={{marginLeft: 16}}>
          <TextField
            floatingLabelText="Telefono"
            defaultValue={this.state.user.telefono}
            type='number'              
            style={{webkitAppearance: 'none'}}
            onChange={(e) => this.state.user.telefono = e.target.value}
          /><br />
          <TextField
            floatingLabelText="Dirección"
            defaultValue={this.state.user.direccion}
            multiLine={true}
            rows={1}
            rowsMax={4}
            onChange={(e) => this.state.user.direccion = e.target.value}
          /><br />
          <TextField
            floatingLabelText="Cuil"
            defaultValue={this.state.user.cuil}
            type='number'
            onChange={(e) => this.state.user.cuil = e.target.value}
          /><br />

          <RaisedButton style={styles.button} secondary="true" label="GUARDAR" onClick={() => this.updateUser(this.state.user)} />
        </div>
      )
    }
  }

  render() {  
    return (
      <div style={{height: '80vh', padding: 16, color: '#fff'}}>
        <Flex wrap align='center'>
          <Box p={0} width={[1, 1/4 ]}></Box>
          <Box p={0} width={[1, 2/4 ]}>   
            <Card zDepth={this.state.shadow} >
              <CardTitle title="Datos Personales" />
              <CardText>
                <CardTitle titleColor={Red} title={this.state.user.name} />
                <CardTitle title={this.state.user.email} subtitle="Email" subtitleColor={Red} />
                {this.show()} 
              </CardText>              
            </Card>
          </Box>
          <Box p={0} width={[1, 1/4 ]}></Box>
        </Flex>                  
      </div>
    )
  }
}

const styles = {
  button: {
    marginTop: 16
  }
};

export default TabThree;