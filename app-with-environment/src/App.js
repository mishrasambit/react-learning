
import './App.css';

import MainComponent1 from './scenario1/MainComponent';
import MainComponent2 from './scenario2/MainComponent';
import MainComponentConext from './learnhooks/UseReducerHookExample/MainComponent';
const blogs=[{
    id:1,
    title:"blog1",
    message: "this is first blog"
},{
  id:2,
  title:"blog2",
  message: "this is 2nd blog"
},{
  id:3,
  title:"blog3",
  message: "this is 3rd blog"
}]
function App() {
  return (
    <div className="App">
      <MainComponent1/>
      <MainComponent2/>
      {/* <MainComponentConext /> */}
    </div>
  );
}

export default App;
