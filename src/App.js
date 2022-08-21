import './App.css';
import ProductCard from './Components/ProductCard';
import store from './app/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductCard />
      </div>
    </Provider>
  );
}

export default App;
