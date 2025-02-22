import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App fixed ">
        <Navbar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
