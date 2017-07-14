import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Folder from 'material-ui/svg-icons/file/folder';
import File from 'material-ui/svg-icons/editor/insert-drive-file';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { Flex, Box } from 'grid-styled'
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import * as superagent from 'superagent'
const Red = '#d5393a';
var user;

class TabTwo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {  
      shadow: 3,
      user: user || {name: "", cuil: '', direccion:"", telefono: 0} 
    };
  }

  componentDidMount() {
    user = JSON.parse(localStorage.getItem('current'));
    this.setState({user: user});    
  }

  handleUploadFile = (event) => {

  }

  render() {
    return (
      <div style={{padding: 16, color: '#fff'}}>
        <Paper zDepth={0} style={{backgroundColor: '#aaa'}}>   
          <h1 style={styles.headline}>Documentación</h1>
          <TextField
            type="file"
            name="file"
            onChange={this.handleUploadFile}
          /><br />
        </Paper>
        <Paper zDepth={0} style={{backgroundColor: '#aaa'}}>   
          <h2 style={styles.headline}><Folder style={{color: '#fff'}}/> RR.HH.</h2>
        </Paper>                
        <Flex wrap align='center' style={styles.flex}>
          <Box p={2} width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday ene.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday feb.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday feb.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} ml='auto' width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday ene.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} ml='auto' width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday ene.pdf"/>
              </CardActions>
            </Card>
          </Box>
        </Flex>
        <br></br>
        <Divider />
        <Paper zDepth={0} style={{backgroundColor: '#aaa'}}>   
          <h2 style={styles.headline}><Folder style={{color: '#fff'}}/> Legales</h2>
        </Paper>                
        <Flex wrap align='center' style={styles.flex}>
          <Box p={2} width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday ene.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday feb.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday feb.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} ml='auto' width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday ene.pdf"/>
              </CardActions>
            </Card>
          </Box>
          <Box p={2} ml='auto' width={[1, 1/2, 1/3, 1/5 ]}>
            <Card zDepth={2}>
              <CardMedia>
                <File style={{height: 64, paddingTop: 10}}/>
              </CardMedia>
              <CardTitle title="F931" subtitle="01-2017" />
              <CardActions>
                <FlatButton label="Abrir" target="_blank" href="./static/docs/RRHH/Formulario 931 Faraday ene.pdf"/>
              </CardActions>
            </Card>
          </Box>
        </Flex>                    
      </div>
    )
  }
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    color: '#fff'
  },
  flex: {
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 20
  }
};

export default TabTwo;