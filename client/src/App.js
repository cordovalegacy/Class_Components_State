import './App.css';
import React from 'react'
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent firstName={"Brendan"} lastName={"Cordova"} age={27} hairColor={"brown"} />
      <ClassComponent firstName={"Charlie"} lastName={"Cordova"} age={10} hairColor={"white"} />
      <ClassComponent firstName={"Tori"} lastName={"Cordova"} age={26} hairColor={"brown"} />
      <ClassComponent firstName={"Bella"} lastName={"Cordova"} age={11} hairColor={"gold"} />
    </div>
  );
}

export default App;
