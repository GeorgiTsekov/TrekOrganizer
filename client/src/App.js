import style from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className={style.app}>
      <Header />

      <Home />
    </div>
  );
}

export default App;
