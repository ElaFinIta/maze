import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import EmptyMaze from './components/EmptyMaze';
import Maze from './components/Maze';


function App() {
  return (
    <div className="App">
      <Header />
      <Maze />
      <Footer />
    </div>
  );
}

export default App;
