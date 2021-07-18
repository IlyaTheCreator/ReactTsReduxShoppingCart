import "./App.css";
import ProductForm from "./products/ProductForm";
import ProductsList from "./products/ProductsList";
import { Provider } from "react-redux"
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
