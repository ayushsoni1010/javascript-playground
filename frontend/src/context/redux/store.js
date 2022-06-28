import { Provider } from "react-redux";
import createStore from "redux";

const reducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducers);

const App = () => <Provider store={store}></Provider>;
