import './App.css';

// react-related functions
import {useEffect, useState} from "react";

// services
import * as userService from './services/userService';

//components
import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {UserSection} from "./components/user-section/UserSection";

function App() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {

        userService.getAll()
            .then(users => setUsers(users));


    },[]);


  return (
    <div className="App">

        <Header/>

        <main className="main">

            <Search />
            <UserSection users={users} />

        </main>

        <Footer />

    </div>
  );
}

export default App;
