
//import './App.css';
//import { Button } from "@alexandre34000/template-react-tables-filters";
//import TableTest from './component/tableTest';
import bodyElements from "./data/bodyElements";

function App() {

  const headerElements = {firstName:"nom", lastName:"prenom", dateOfBirth: "date"};

  const optionsTable={
   nbRows:[5,8,10,20],
   color: "grey" 
  }

  return (
    <div className="App">
       <h1> Test des composants</h1>
       {/* <TableTest  bodyElements={bodyElements} optionsTable={optionsTable} headerElements={headerElements}/> */}
    </div>
  );
}

export default App;
