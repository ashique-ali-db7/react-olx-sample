import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory,BrowserRouter as Router,Route,Link  } from 'react-router-dom';
import Login from '../Login/Login';
function Header() {
//object destructurng
const {user} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)
const History = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>{
           History.push('/')
        }} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to='/login'>{user? `${user.displayName}`:'Login'}</Link>
          <Router>
        <Route path='/login' >
     <Login/>
</Route>
        </Router>
          <hr />
        
        </div>
        {user && <span onClick={()=>{
          firebase.auth().signOut()
          History.push('/login')
        }} className="logoutlink">Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>{
              History.push('/create')
            }} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
