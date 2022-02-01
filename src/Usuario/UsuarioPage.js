import React, { useState, useEffect } from "react";

import UserList from './UsuarioList'
import { createUser, getListUser } from '../Service/UsuarioService';
import User from "./Usuario";





function UserPage() {  
    
  
  
  
    
  
    useEffect(() => {    
      getListUser().then(data => {
        setUser(data);
      }
      );
  
    }, []);
  
    return (
      <div>
        <h2>Usuarios </h2>
        <UserList>
          
          {
            guitar.map(user =>
              <User key ={user.id} id={user.id} username={user.username} password={user.password} status={user.status} />)
            
          }
        </UserList>
      </div>
    );
  }

  export default UserPage ;