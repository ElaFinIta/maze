import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EmptyMaze from './components/EmptyMaze';


function App() {
  return (
    <div className="App">
      <Header />
      <EmptyMaze/>
      <Footer />
    </div>
  );
}

export default App;
