import './App.css';
import Users from './components/users/Users';
import FormUser from './components/formUser/FormUser';
import {useDispatch, useSelector} from 'react-redux';
import {stateFormUser} from './redux/action';

function App() {
    const {domReducer} = useSelector(state => state);
    const dispatch = useDispatch();

    const showForm = () => {
        dispatch(stateFormUser('show'));
    };

    return (
        <div className={'app'}>
            <div className={'app__inner'}>
                <div className={`message ${domReducer.message.class}`}>{domReducer.message.text}</div>
                <button className={'btn-create'} onClick={showForm}>Create User</button>
                <Users/>
                <FormUser/>
            </div>
        </div>
    );
}

export default App;
