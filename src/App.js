import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'

import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
//import UserContainer from './components/UserContainer'
import UseComponent from './components/UseComponent'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <UserContainer/> */}
        {/* <HooksCakeContainer/>        
        <CakeContainer/>
        <IceCreamContainer/> */}
        <UseComponent/>
      </Provider>
    </div>
  );
}

export default App;
