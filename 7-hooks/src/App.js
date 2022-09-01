import './App.module.css';
import {TaskList} from "./TaskList";
import styles from './App.module.css';

function App() {


  return (
    <div className={styles['site-wrapper']}>
      <header>
        <h1>TODO App</h1>
      </header>

      <main>
          <TaskList />
      </main>
    </div>
  );
}

export default App;
