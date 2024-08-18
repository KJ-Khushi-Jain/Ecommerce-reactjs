import NewCounter from "./components/NewCounter";
import Shop from "./components/Shop";
import SampleComponent from "./components/SampleComponent";
import { useState } from "react";

function App() {
  const[sampleData,setSampleData]=useState(52);
  return (
    <div className="main-wrapper">
      {/* <NewCounter/> */}
      <Shop/>
      {/* <h1>The sample value is {sampleData}.</h1>
      <SampleComponent data={sampleData}/> */}
    </div>
  );
}

export default App;
