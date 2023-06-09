import "./App.css";
import Multiselect from "./components/Multiselect";
import MultiselectMUI from "./components/MultiselectMUI";

const App = () => {
  const value=[1,2,4]
  return (
    <div className="flex flex-wrap justify-around m-20 gap-8">
      <Multiselect value={value} readonly={false}/>
      <MultiselectMUI value={value} readonly={false}/>     
    </div>
  );
};

export default App;
