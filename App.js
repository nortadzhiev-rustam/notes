import MainNavigator from "./navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "./store/Store";
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
