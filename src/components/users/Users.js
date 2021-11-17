import {useEffect, useState} from 'react';

import './Users.css';
import {getUsers} from '../../service/users.service';
import User from '../user/User';
import {users} from '../../configs';


export default function Users(props) {
    // let [users, setUsers] = useState([]);
    //
    // useEffect(() => {
    //     getUsers().then(value => setUsers([...value]));
    // }, []);

    return (
        <div className={'users'}>
            <div className="users__top">
                <div>Username</div>
                <div>First name</div>
                <div>Last name</div>
                <div>Email</div>
                <div>Type</div>
            </div>
            <div className={'users__items'}>
                {
                    users.map(user => <User key={user._id} user={user}/>)
                }
            </div>
        </div>
    );
}