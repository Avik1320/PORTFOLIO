
import Left from './Components/left/Left';
import Right from './Components/right/Right';
import './app.css'
import Hamburger from './Components/Hamburger/Humberger'
// import Modal from './Components/Modal';

function App() {
  return (
    <div className="App" style={{display: "flex"}}>
      {/* <Modal/> */}
      <Left/>
      <Hamburger/>
      <Right/>
    </div>
  );
}

export default App;
