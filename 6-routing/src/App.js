import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Nav from "./components/Nav";
import {Starships} from "./components/Starships";

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
                <Route path='/starships/:starshipId' element={<Starships/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
