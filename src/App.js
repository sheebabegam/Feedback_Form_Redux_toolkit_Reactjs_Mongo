import logo from "./logo.svg";
import "./App.css";
import Feedback_Form from "./Feedback_Form";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Feedback_Form />
      </div>
    </Provider>
  );
}

export default App;
