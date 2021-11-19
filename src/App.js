import React, {useEffect, useState} from "react";
import SortingVisualizer from "./Components/SortingVisualizer";

const NUM_ARR_LENGTH = 300;
function App() {
  const [numArr, setNumArr] = useState([])
  useEffect(() => {
      generateArr();
  }, [])

  const generateArr = () => {
    let arr = []
    for(let i=0; i<NUM_ARR_LENGTH; i++) {
        const num = Math.floor(Math.random() * 500) + 5
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
