import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap';
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
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
class SignIn extends Component {
  render() {
    return (
      <div>
       <Row>
    <Col xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}>1</Col>
    <Col xs={8} sm={10} lg={4} md={4}  style={{backgroundColor:''}}>
   {/*signin*/}
   <br/>
   <main  style={{height:"480px"}}>
      <CssBaseline   />
      <br/>
      <Paper >
        
        <Avatar style={{marginLeft:"10px", marginTop:"30px"}}>
          <LockOutlinedIcon />
          
        </Avatar>
        <Typography component="h1" variant="h5" style={{  display:"flex", color:'blue'}}>
    
          Teacher Signin
        </Typography>
        <br/>
        <form >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:'#757575', color:'white'}}
            onClick={this.check}
          >
            Sign in
          </Button>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR
          <br/>
          
        </form>
        <Link to="/TeacherSignUp"  style={{textDecoration:'none'}}>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            
            style={{backgroundColor:'#9e9e9e', color:'white'}}

          >
            Create an account
          </Button>
        </Link>
      </Paper>
    </main>
    
    </Col>
    <Col  xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}></Col>
 
  </Row>
 




      </div>
    )
  }
}

export default SignIn
