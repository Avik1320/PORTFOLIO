
import Left from './Components/left/Left';
import Right from './Components/right/Right';
import './app.css'
import Hamburger from './Components/Hamburger/Humberger'

function App() {
  return (
    <div className="App" style={{display: "flex"}}>
      <Left/>
      <Hamburger/>
      <Right/>
    </div>
  );
}

export default App;
