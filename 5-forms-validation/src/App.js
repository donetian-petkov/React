import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'm',
        userType: '',
        tac: false

    });
    
    const changeHandler = (e) => {

        setValues((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));

    };


    const submitHandler = (e) => {

        e.preventDefault();

    }



  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" name="username" value={values.username} onChange={changeHandler}/>
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" value={values.password} onChange={changeHandler}/>
            </div>

            <div>
                <label htmlFor="age">Age: </label>
                <input id="number" type="age" name="age" value={values.age} onChange={changeHandler}/>
            </div>

            <div>
                <label htmlFor="bio">Bio: </label>
                <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler}></textarea>
            </div>

            <div>
                <label htmlFor="gender">Gender: </label>
                <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="individual-user-type">Individual: </label>
                <input type="radio" name="user-type" value="individual" id="individual-user-type" checked={values.userType === 'individual'} onChange={changeHandler}/>
                <label htmlFor="individual-user-type">Corporate: </label>
                <input type="radio" name="user-type" value="corporate" id="corporate-user-type" checked={values.userType === 'corporate'} onChange={changeHandler}/>
            </div>

            <div>
                <label htmlFor="tac">Terms and Conditions: </label>
                <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={(e) => {setValues((oldValues) => ({
                    ...oldValues,
                    'tac': !oldValues['tac']
                }))}}/>
            </div>

            <button>Register</button>
        </form>

      </header>
    </div>
  );
}

export default App;
