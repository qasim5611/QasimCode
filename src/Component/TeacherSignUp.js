import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
class SignUp extends Component {
  render() {
    return (
      <div>
      <Row>
    <Col xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>
    <div id="confmPass" style={{height:"200px", width:"300px", marginTop:"150px", marginLeft:"100px", fontFamily:"cursive", fontSize:"30px"}}></div>
    
    </Col>
    <Col xs={8} sm={10} lg={4} md={4}  style={{backgroundColor:''}}>
   {/*signin*/}
   
   <main  style={{height:"480px"}}>
      <CssBaseline   />
      
      <Paper >
        
        <Avatar style={{marginLeft:"10px", marginTop:"10px"}}>
          <LockOutlinedIcon />
          
        </Avatar>
        <Typography component="h1" variant="h5" style={{  display:"flex", color:'blue'}}>
    
          Teacher SignUp
        </Typography>
        
        <form >
        <FormControl margin="normal" required="required" fullWidth>
            <InputLabel htmlFor="email">UserName</InputLabel>
            <Input id="name" name="name" autoComplete="email" autoFocus required />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type="text" name="password"  id="password" autoComplete="current-password" onChange={this.validatePassword}   />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Conferm Password</InputLabel>
            <Input name="password" type="password" id="cpassword" autoComplete="current-password"  />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
          
            fullWidth
            variant="contained"
          
            
            style={{backgroundColor:'#607d8b', color:'white'}}
            onClick={this.check}
          >
            Sign UP
          </Button>
          
          
        </form>
      </Paper>
    </main>
    
    </Col>
    <Col  xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/><br/><br/>
    <span id="msg" style={{borderRadius:"200px", boxShadow:"6px 5px 2px purple", fontFamily:"cursive"}}></span>
    </Col>
 
  </Row>
 
 
      </div>
    )
  }
}

export default SignUp
