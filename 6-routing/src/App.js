import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home'
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Nav from "./components/Nav";
import {Starship} from "./components/Starship";
import {StarshipList} from "./components/StarshipList";

function App() {
    return (
        <div className="App">
            <h1>Hello React Router</h1>

            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/pricing/*' element={<Pricing/>}/>
                <Route path='/pricing/premium' element={<Contact/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/starships' element={<StarshipList/>}/>
                <Route path='/starships/:starshipId' element={<Starship/>}/>
                <Route path='/millennium-falcon' element={<Navigate to='/starships/10' replace/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
