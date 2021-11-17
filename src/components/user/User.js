import './User.css';
import {useDispatch} from 'react-redux';
import {stateUser} from '../../redux/action';

export default function User({user}) {
    const dispatch = useDispatch();

    let onClick = () => {
        dispatch(stateUser({...user, password: '', repeatPassword: ''}));
    }

    return (
        <div className={'user__item'} onClick={onClick}>
            <div>{user.userName}</div>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.email}</div>
            <div>{user.type}</div>
        </div>
    );
}