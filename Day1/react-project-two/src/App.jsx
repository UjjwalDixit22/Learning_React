import UserCard from "./components/UserCard.jsx";
import './App.css';
import back from './assets/back.jpeg';
import pool from './assets/pool.jpeg';
import ud from './assets/ud.jpeg';


function App() {

  return (
   <div className = "container">
    <UserCard name = "Ujjwal1" desc="Great Warrior" image={ud} style={{"border-radius":"300px"}}/>
    <UserCard name = "Ujjwal2" desc="Lion" image={back}  style={{"border-radius":"300px"}}/>
    <UserCard name=" Ujjwal3" desc="GOAT of Cricket" image={pool}  style={{"border-radius":"300px"}}/>
   </div>
  )
}

export default App
