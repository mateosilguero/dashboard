import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Cake from 'material-ui/svg-icons/social/cake';
import Phone from 'material-ui/svg-icons/communication/phone'
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Company from 'material-ui/svg-icons/communication/business';
import Person from 'material-ui/svg-icons/social/person';
import Subheader from 'material-ui/Subheader';
import News from 'material-ui/svg-icons/action/receipt';
import { Flex, Box } from 'grid-styled'
import { Grid } from 'grid-styled'

const Red = '#d5393a';
var d = new Date();
var Month = d.getMonth();
var happybd = false;
var cumpleañero = [];
var i = 0;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class TabOne extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.filterList = this.filterList.bind(this);
    this.renderCump = this.renderCump.bind(this);
    this.state = {
      open: false,
      shadow: 3,
      user: {}
    };
  }

  handleRequestClose() {   
    this.setState({open: false});
  }

  componentDidMount() {
    if(happybd) {
      this.setState({open: true});
    }
    this.setState({user: JSON.parse(localStorage.getItem('user')) || {}});    
  }  

  filterList(emp) {
    var m = parseInt(empleados[emp].idMonth)
    var mt = parseInt(Month)
    //var mt = 8
    var d = empleados[emp].nacimiento
    var dt = parseInt(d[0] + d[1])
    var dd = new Date()
    var date = dd.getUTCDate()
    //var date = 22
    var name = empleados[emp].nombre    
    if (m === mt) {
      if (dt === date) {
        cumpleañero.push(name);
        name = '';              
        happybd = true;
        i = i + 1;                              
      }
      return (
        <div>          
          <ListItem
            leftAvatar={<Avatar icon={<Person/>} backgroundColor={Red} />}
            primaryText={empleados[emp].fecha + " - " + empleados[emp].nombre}
          />
          <Divider inset={true} />
        </div>        
      )      
    }
  }

  renderCump(emp) {
    if (emp < cumpleañero.length/2) {      
      return (
        <div>          
          <ListItem
            primaryText={<h3 style={{color: Red}}>{cumpleañero[emp]}</h3>}
          />
          <Divider inset={true} />
        </div>        
      ) 
    }     
  }

  render() {
    const actions = [
      <FlatButton
        label="CERRAR"
        primary={true}
        onClick={this.handleRequestClose}
      />,
    ]

    return (
      <div style={{padding: 16, fontFamily: 'Roboto'}}>
        <Grid width={[1, 1/2]} mb={16}>
        <Box p={0} width={[1]}>
            <Card
              zDepth={this.state.shadow}
              style={{marginRight: 8, marginBottom: 8}}>
              <CardTitle>
                <h2 style={{height: 29, color: Red }}><Cake style={{height: 30, width: 30, marginBottom: -5, color: Red }} /> Cumpleaños</h2>                  
              </CardTitle>
              <CardText>
                <List>
                  {Object.keys(empleados).map(this.filterList)}
                  <Divider/>
                </List>                    
              </CardText>
            </Card>
          </Box>
          <Box p={0} width={[1]}>
            <Card
              zDepth={this.state.shadow}
              style={{marginRight: 8}}>
              <CardTitle>
                <h2 style={{height: 29, color: '#2196f3'}}><Phone style={{height: 30, width: 30, marginBottom: -10, color: '#2196f3'}} /> Teléfonos Útiles</h2>                  
              </CardTitle>
              <CardText>
                <List>
                  <ListItem
                    leftAvatar={<Avatar icon={<Company />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="4719-6315"
                    secondaryText="Faraday | Quito 2618, Beccar"
                  />
                  <Divider inset={true} /> 
                  <ListItem
                    leftAvatar={<Avatar icon={<Company />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="4511-8157"
                    secondaryText="Transnoa | Av. Santa Fe 846 Pº4, CABA"
                  />
                  <Divider inset={true} />
                  <ListItem
                    leftAvatar={<Avatar icon={<Company />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="4322-7771"
                    secondaryText="Montelectro | Carlos Pellegrini 1135 Pº4, CABA"
                  />
                  <Divider/>
                </List>                                    
              </CardText>
            </Card>
          </Box>
        </Grid>
        <Grid width={[1, 1/2]}>
          <Box p={0} width={[1]}>
            <Card
              zDepth={this.state.shadow}>
              <CardMedia>
                <img src="./static/assets/encabezado.png" />
              </CardMedia>
              <CardTitle title={<h3 style={{fontWeight: 500}}>Hola {this.state.user.givenName}, estas son las novedades:</h3>}/>
              <CardText>
                <List>
                  <ListItem
                    primaryText="Noticia 1"
                    secondaryText={
                      <p>
                        <span style={{color: '#444'}}>Brunch this weekend?</span><br />
                        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                      </p>
                    }
                    secondaryTextLines={2}
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Noticia 2"
                    secondaryText={
                      <p>
                        <span style={{color: '#444'}}>Brunch this weekend?</span><br />
                        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                      </p>
                    }
                    secondaryTextLines={2}
                  />
                  <Divider/>
                </List>
              </CardText>              
            </Card>
          </Box>
        </Grid>                    
        <Dialog
          open={this.state.open}
          title="FELIZ CUMPLEAÑOS !"
          style={{alignText: 'center'}}
          actions={actions}
          onRequestClose={this.handleRequestClose}
        >
          <List>
            {Object.keys(cumpleañero).map(this.renderCump)}
          </List>
        </Dialog>
      </div>
    )
  }
}

const empleados=[
{legajo:" 313 ",nombre:"  RICARDO  VERA ",fechaIng:"  09/11/2010  ",nacimiento: "02/05/85"  ,fecha:"  02/05 ",mes:" mayo  ",idMonth:" 4 "},
{legajo:" 389 ",nombre:"  MARCELA  CASURRIAGA ",fechaIng:"  22/07/2013  ",nacimiento: "03/05/70"  ,fecha:"  03/05 ",mes:" mayo  ",idMonth:" 4 "},
{legajo:" 385 ",nombre:"  CAROLINA  LOIS  ",fechaIng:"  22/07/2013  ",nacimiento: "03/06/74"  ,fecha:"  03/06 ",mes:" junio ",idMonth:" 5 "},
{legajo:" 379 ",nombre:"  KARINA  ALLASINO  ",fechaIng:"  22/07/2013  ",nacimiento: "03/07/71"  ,fecha:"  03/07 ",mes:" julio ",idMonth:" 6 "},
{legajo:" 309 ",nombre:"  YESICA  TITERA  ",fechaIng:"  01/07/2010  ",nacimiento: "05/08/83"  ,fecha:"  05/08 ",mes:" agosto  ",idMonth:" 7 "},
{legajo:" 375 ",nombre:"  JAVIER  FERRARI ",fechaIng:"  22/07/2013  ",nacimiento: "06/01/77"  ,fecha:"  06/01 ",mes:" enero ",idMonth:" 0 "},
{legajo:" 435 ",nombre:"  DANIEL  BOKHDJALIAN ",fechaIng:"  01/03/2017  ",nacimiento: "08/11/59"  ,fecha:"  08/11 ",mes:" noviembre ",idMonth:" 10  "},
{legajo:" 113 ",nombre:"  JOSE  CAMPISI ",fechaIng:"  10/02/2003  ",nacimiento: "12/04/52"  ,fecha:"  12/04 ",mes:" abril ",idMonth:" 3 "},
{legajo:" 85  ",nombre:"  MIGUEL  CANILLAS  ",fechaIng:"  01/01/1999  ",nacimiento: "12/11/62"  ,fecha:"  12/11 ",mes:" noviembre ",idMonth:" 10  "},
{legajo:" 378 ",nombre:"  RODOLFO  POLIAK ",fechaIng:"  22/07/2013  ",nacimiento: "13/11/73"  ,fecha:"  13/11 ",mes:" noviembre ",idMonth:" 10  "},
{legajo:" 304 ",nombre:"  FLORENCIA  LAFROSCIA  ",fechaIng:"  22/03/2010  ",nacimiento: "14/03/87"  ,fecha:"  14/03 ",mes:" marzo ",idMonth:" 2 "},
{legajo:" 80  ",nombre:"  ANA MARIA JUAREZ  ",fechaIng:"  13/11/2013  ",nacimiento: "15/06/80"  ,fecha:"  15/06 ",mes:" junio ",idMonth:" 5 "},
{legajo:" 80  ",nombre:"  MIRIAM MEDINA  ",fechaIng:"  13/11/2013  ",nacimiento: "15/06/80"  ,fecha:"  15/06 ",mes:" junio ",idMonth:" 5 "},
{legajo:" 417 ",nombre:"  FRANCO  LOPEZ ",fechaIng:"  20/04/2015  ",nacimiento: "20/01/96"  ,fecha:"  20/01 ",mes:" enero ",idMonth:" 0 "},
{legajo:"  ",nombre:"  GABRIEL BERNADZKI ",fechaIng:"   ",nacimiento: "20/02/1957"  ,fecha:"  20/02 ",mes:" febrero ",idMonth:" 1 "},
{legajo:"   ",nombre:"  YANINA GOMEZ MURINGA  ",fechaIng:"    ",nacimiento: "22/09/81"  ,fecha:"  22/09 ",mes:" septiembre  ",idMonth:" 8 "},
{legajo:" 408 ",nombre:"  MATEO  SILGUERO ",fechaIng:"  01/04/2014  ",nacimiento: "22/11/95"  ,fecha:"  22/11 ",mes:" noviembre ",idMonth:" 10  "},
{legajo:" 377 ",nombre:"  PABLO  ANDRADE  ",fechaIng:"  22/07/2013  ",nacimiento: "22/11/75"  ,fecha:"  22/11 ",mes:" noviembre ",idMonth:" 10  "},
{legajo:" 413 ",nombre:"  MARIA EUGENIA SOSA  ",fechaIng:"  14/05/2014  ",nacimiento: "23/04/78"  ,fecha:"  23/04 ",mes:" abril ",idMonth:" 3 "},
{legajo:" 392 ",nombre:"  JULIETA  MARTINA  ",fechaIng:"  22/07/2013  ",nacimiento: "23/10/85"  ,fecha:"  23/10 ",mes:" octubre ",idMonth:" 9 "},
{legajo:" 437 ",nombre:"  JACQUELINE  ESCEMI  ",fechaIng:"  06/03/2017  ",nacimiento: "26/05/89"  ,fecha:"  26/05 ",mes:" mayo  ",idMonth:" 4 "},
{legajo:" 399 ",nombre:"  ALEJANDRA  CALISAYA ",fechaIng:"  03/10/2013  ",nacimiento: "27/03/73"  ,fecha:"  27/03 ",mes:" marzo ",idMonth:" 2 "},
{legajo:" 261 ",nombre:"  GISELA  MARIOTTI  ",fechaIng:"  03/12/2007  ",nacimiento: "27/04/81"  ,fecha:"  27/04 ",mes:" abril ",idMonth:" 3 "},
{legajo:"   ",nombre:"  MIGUEL RODRIGUEZ RECCHIA  ",fechaIng:"    ",nacimiento: "29/09/57"  ,fecha:"  29/09 ",mes:" septiembre  ",idMonth:" 8 "},
{legajo:" 239 ",nombre:"  ALEXANDER  FINSTERBUSCH ",fechaIng:"  09/04/2007  ",nacimiento: "31/07/72"  ,fecha:"  31/07 ",mes:" julio ",idMonth:" 6 "},
{legajo:" 441 ",nombre:"  MIGUEL  MARZELLA  ",fechaIng:"  20/03/2017  ",nacimiento: "31/12/64"  ,fecha:"  31/12 ",mes:" diciembre ",idMonth:" 11  "},                                                        
];

export default TabOne;