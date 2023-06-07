import React, {useEffect, useState} from "react";
import axios from "../../axios";

function Users (){
    const [users,setUsers] = useState([]);
    useEffect(() => {
        axios.get('/users').then(res => setUsers(res.data.data))
    },[])


    return <div>
        {
            users.map(user => (
                <div key={user.id}>
                    {user.first_name}
                </div>
            ))
        }
    </div>
}

export default Users;