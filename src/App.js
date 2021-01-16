import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <body>
        <h1 class="title">Deck of Some Things</h1>
        <div class="card-container">
          <Card></Card>
        </div>
      </body>
    </div>
  );
}

export default App;
