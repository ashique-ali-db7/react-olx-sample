import React, { useState,useContext } from 'react';
import { useHistory,BrowserRouter as Router,Route,Link  } from "react-router-dom";
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Signup.css';
import Login from '../Login/Login';





export default function Signup() {


  const History = useHistory()
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('')
const {firebase} = useContext(FirebaseContext)
const [err, seterr] = useState('')
  const handleSubmit = (e)=>{
   
    e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
     result.user.updateProfile({displayName:userName}).then(()=>{
   
       firebase.firestore().collection('users').add({
         id:result.user.uid,
         username:userName,
          phone:phone
       
       })
       }).then(()=>{
     
        History.push('/login')
     })
  }).catch((error)=>{
    seterr(error.message)
  })
  }
 
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
         <p style={{color:'red'}}>{err}</p>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value = {userName}
            onChange={(e)=>setUserName(e.target.value)}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
         
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>login</Link>
        <Router>
        <Route path='/login' >
     <Login/>
</Route>
        </Router>
      </div>
    </div>
  );
}
