import "./App.css";
import { Provider } from "react-redux";
import store from "./ReduxContainer/Store";
import BookContainer from "./ReduxContainer/BookContainer";

function App() {
  return (
    <Provider store={store}>
      <BookContainer />
      <h1>Redux</h1>
    </Provider>
  );
}

export default App;
