import './App.css';

//components
import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {Search} from "./components/search/Search";
import {UserSection} from "./components/user-section/UserSection";

function App() {


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
