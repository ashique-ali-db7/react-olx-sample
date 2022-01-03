import React,{useState,useContext} from 'react';
import { useHistory,BrowserRouter as Router,Route,Link  } from "react-router-dom";
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import Signup from '../Signup/Signup';

function Login() {
  const History = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const [err, seterr] = useState('')
  const handleLogin = (e)=>{
    e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    History.push('/')
  }).catch((error)=>{
    seterr(error.message)
  })
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
        <p style={{color:'red'}}>{err}</p>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
        <Router>
        <Route path='/signup' >
    <Signup/>
</Route>
        </Router>
      </div>
    </div>
  );
}

export default Login;
