import logo from './logo.svg';
import './App.css';
import {Prediction} from "./components/predict-form"
import comerade from "./components/comerad.jpg"
import { SetUp } from './components/setup';

function App() {
  return (
    <SetUp>
      <img src={comerade} />
      <h2>Body Count Prediction</h2>
      <Prediction />
    </SetUp>
  );
}

export default App;
