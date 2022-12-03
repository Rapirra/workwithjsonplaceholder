import './App.css';
import NavPanel from './components/NavPanel/NavPanel';
import Provider from './components/FunctonalComponents/Provider';

function App() {

  return (
    <div className="App" >
      <Provider >
        <NavPanel />
      </Provider>   
    </div>
  );
}

export default App;
