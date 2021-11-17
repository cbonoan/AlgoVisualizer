import React, {useEffect, useState} from "react";
import SortingVisualizer from "./Components/SortingVisualizer";
function App() {
  const [numArr, setNumArr] = useState([])
  useEffect(() => {
      let arr = []
      for(let i=0; i<300; i++) {
          const num = Math.floor(Math.random() * 500) + 1
          arr.push(num);
      }
      setNumArr(arr);
  }, [])
  const generateArr = () => {
    let arr = []
      for(let i=0; i<300; i++) {
          const num = Math.floor(Math.random() * 500) + 1
          arr.push(num);
      }
      setNumArr(arr);
  }
  return (
    <div className="App">
      <SortingVisualizer arr={numArr} generateArr={generateArr}/>
    </div>
  );
}

export default App;
