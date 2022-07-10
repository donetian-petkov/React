import logo from './logo.svg';
import './App.css';
import {BookList} from "./components/BookList";

function App() {

  const books = [
    {
      "title": "Northanger Abbey",
      "author": "Austen, Jane",
      "year": 1814,
      "edition": "Penguin",
      "price": 18.2
    },
    {
      "title": "War and Peace",
      "author": "Tolstoy, Leo",
      "year": 1865,
      "edition": "Penguin",
      "price": 12.7},
    {
      "title": "Anna Karenina",
      "author": "Tolstoy, Leo",
      "year": 1875,
      "edition": "Penguin",
      "price": 13.5},
    {
      "title": "Mrs. Dalloway",
      "author": "Woolf, Virginia",
      "year": 1925,
      "edition": "Harcourt Brace",
      "price": 25
    }
  ];


  return (
    <div className="App">
      <header className="App-header">
      <BookList books={books}/>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}

export default App;
