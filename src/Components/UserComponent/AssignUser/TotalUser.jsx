import { Box, Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import AddNewUser from './AddNewUser'
import UserList from './UserList'

const TotalUser = () => {
    const [user, setUser] = useState([])

    const [showAddUser, setShowAddUser] = useState(false);

    const toggleShowAddUser = () => {
        setShowAddUser(prevShowAddUser => !prevShowAddUser);
    };
      
    useEffect(() => {
    axios.get(`http://localhost:5000/user`).then(
        // &limit=10
    (response) => {
        setUser(response.data);
        // console.log(response.data);
    }
  ).catch((error) => {
      console.error(error);
    });
  }, []);
    
  return (
    <div className="side-details">
      <Box sx={{mb:'32px'}} className="amount-wrapper">
        <p className="price-heading">Total Users</p>
        <p className="price-count">{user.length}</p>
      </Box>

      <Box>
        <Box sx={{display:'flex', justifyContent:'space-between', mb:'16px', alignItems:'center'}}>
            <Typography sx={{color:'#707070', fontSize:'20px', fontWeight:'700'}}>Users</Typography>
            <Typography 
            sx={{color:'#7A58E6', fontSize:'24px', cursor:'pointer'}}
            onClick={toggleShowAddUser}
            >
                +
            </Typography>
        </Box>
        {showAddUser ? <AddNewUser user={user} setUser={setUser} toggleShowAddUser={toggleShowAddUser} /> : <UserList user={user} />}

        
        
      </Box>
    </div>
  )
}

export default TotalUser
