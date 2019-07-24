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
import {sendToActionFORConfirmStudent} from './../Redux/Action/action';
import {connect} from 'react-redux'; 

import {sendToActionFORRetriveStudent} from './../Redux/Action/action';







export class StudentSignIn extends Component {
  componentWillMount() {

    this.props.sendToActionFORRetriveStudent();


    // DateMangwaLiya();
  //  this.setState({ loading: !this.state.loading })
  }
  state={
    Student:{
      email:'',
      password:'',
    },
   
    initial:false,


  };
  handle=(event)=>{
    var name=event.target.name;
    var value=event.target.value;
    this.setState({[name]:value});
      }
    
   
    check=()=>{
      var name =document.getElementById("name").value;
          var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    if(name=== " " || email==='' || password=== '' ){
      alert('Please Enter All Fields');

    
    } 
  }
  checkReqFields=()=>{
		var returnValue;
		
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
		
		returnValue=true;
	
		if(email.trim()==""){
			document.getElementById("msg").innerHTML="* Email is required.";
			returnValue=false;
    }	
    if(password.trim()==""){
			document.getElementById("msg").innerHTML="* Password is required.";
			returnValue=false;
		}								
		return returnValue;
	} 
  
  sendToActionFORConfirmStudent = () =>{
      var a = this.checkReqFields()
      if(a===true){
        var obj= {
          
          email:this.state.email,  
          password:this.state.password
    
        }
// alert('your credentials are' + obj.email + ' ' + obj.password);
    this.props.sendToActionFORConfirmStudent(obj);
    
    
     //action waly AddRecordToStore function ko call kia,
   // this.props.AddToFirebase(obj); if we want to store data on firebase regardless od node js/MongoDb
  //this.props.history.push('/RetriveDataFromDb');
      }
       else{
         alert('Sorry');
       }
        

       }
      
        
  render() {
    return (
      <div>
        
        <Row>
    <Col xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}></Col>
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
        <Typography component="h1" variant="h5" style={{  display:"flex", color:'green'}}>
    
          Student Signin
        </Typography>
        <br/>
        <form >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input type="email" id="email" name="email" autoComplete="email" autoFocus onChange={this.handle} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" onChange={this.handle} id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        <Button
          
          fullWidth
          variant="contained"
          style={{backgroundColor:'#607d8b', color:'white'}}
          onClick={this.sendToActionFORConfirmStudent}
         
        >
          Sign In
        </Button>
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR
          <br/>
          
        </form>
        <Link to="/StudentSignUp">
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
    <Col  xs={2} sm={1} lg={4} md={4}  style={{backgroundColor:''}}><span id="msg" style={{borderRadius:"200px", boxShadow:"6px 5px 2px purple", fontFamily:"cursive"}}></span></Col>
 
  </Row>
 
{/* /////////////////////////////////////////////////////////////////////// */}
{/* 
  <div style={{ height: "400px", width: "1099px", backgroundColor: "", overflow: "scroll" }}>
 <table style={{ border: "2px black dashed", width: "1090px" }}>
   <tr style={{ border: "2px black solid", width: "900px" }} >
     <th style={{ border: "2px black solid", width: "200px" }}>ID</th>
     <th style={{ border: "2px black solid", width: "500px" }}>Name</th>

     <th style={{ border: "2px black solid", width: "400px" }}>email</th>
     <th style={{ border: "2px black solid", width: "400px" }}>Password</th>

     <th style={{ border: "2px black solid", width: "200px" }}><center>Action</center></th>
   </tr>

   {
     //  return this.props.tasks.map((task) => {
     this.props.data.map((value, index) => {
       console.log('value', value)
       return (
         <tr key={index}>

           <td style={{ paddingLeft: "70px" }} id="name1"> {value._id} </td>
           <td style={{ paddingLeft: "70px" }} id="cat1"> {value.name}  </td>
           <td style={{ paddingLeft: "70px" }} id="dic1"> {value.email}</td>
           <td style={{ paddingLeft: "70px" }} id="dic1"> {value.password}</td>

           <td >
             <td style={{}}>
               <Fab color="secondary" aria-label="Edit" onClick={() => this.UpdateRecordFromDB(value._id)} >
                 <Icon><img src={logo} alt="not" /></Icon>
               </Fab>
             </td>
             <td>
               <IconButton aria-label="Delete" onClick={() => this.DeleteRecordFromStore(value._id)} >
                 <DeleteIcon fontSize="large" />
               </IconButton>
             </td>
           </td>
         </tr>
       )
     })
   }

 </table>
</div> */}




      </div>
    )
  }
}
const mapStateToProps = (store) => {
  console.log('+++++++++++state++++++++++++++++',  store.ReducerForDBdata.LoginTF);

  return {
    // rtitle : store.title,
    // rDiscription:  store.descp,
    data: store.ReducerForDBdata.LoginTF
  //data: store.ReducerForDBdata.StateForFirebase   For Firbase DB case

  }
}
export default connect(mapStateToProps, {sendToActionFORConfirmStudent, sendToActionFORRetriveStudent }) (StudentSignIn)
