import React from 'react'
import styles from'./Styling/home.module.css'
import NavBar from './Components/Nav Bar/NavBar';
import logo from './GlobalLogo.png'
import GetStarted from './Components/Get Started/GetStarted';
import Service from './Components/Services/Service';
import Why from './Components/Why/Why';
import Success from './Components/Success Story/Success';
const s = styles;
export function MainNavBar() 
{
  return(
    <div className={s["main"]}>
    <div className={s["logo"]}>
     <img src={logo} alt="" />
    </div>
   
    <div className={s["nav"]}>
     <NavBar/>
    </div>
    </div>
  );
}
const Home = () => {
  return (
 <div>
   <GetStarted/>
   <Service/>
   <Why/>
   <Success/>
 </div>
   
  )
}

export default Home
