
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new BJJ Blog';
  const likes = 50;
  let site = 'www.google.com';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
        <h1>{ title }</h1>
        <p>Likes: { likes }</p>
        <a href={ site }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
