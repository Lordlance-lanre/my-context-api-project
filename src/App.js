import './App.css';
import First from "./components/First.js";
import Second from "./components/Second.js";
import { MyContextProvider } from './Context.js';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="">
      <MyContextProvider>
        <Routes>
            <Route path="/" element={<First/>} />
            <Route path="/second" element={<Second/>} />
        </Routes>
      </MyContextProvider>
    </div>
  );
}

export default App;
