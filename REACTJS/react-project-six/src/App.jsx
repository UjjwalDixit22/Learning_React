import { useState } from 'react';
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';
function App() {
  const[isLoggedIn,setLoggedIn] = useState(false);
  // const[isLoggedIn,setLoggedIn] = useState(true);


  // Using if else
//   if(isLoggedIn){
//     return( <LogoutBtn/>)
//   }
//   else{
//     return (
//       <LoginBtn/>
//     )
//   }
// }

// Using ternary conditional operator
// return(
//   <div>
//   {isLoggedIn?<LogoutBtn/>:<LoginBtn/>}
//   </div>
// )

// early return

if(!isLoggedIn){
  return(
    <div>
      <LoginBtn />
    </div>
  )
}


// using logical operators
return(
<div>
  <h1>
    Welcome  to Mern  Course by Love Babbar
  </h1>
  <div>
    {isLoggedIn && <LogoutBtn />}
  </div>
</div>
)


}
export default App
