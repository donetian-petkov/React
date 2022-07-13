import './App.css';
import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {UserSection} from "./components/user-section/UserSection";
import {useEffect, useState} from "react";

function App() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/api/users')
            .then(res => res.json())
            .then(result => {
                setUsers(result.users);
            });
    },[]);

  return (
    <div className="App">

        <Header/>

        <main className="main">

            <Search />
            <UserSection />

        </main>

        <Footer />

    </div>
  );
}

export default App;
