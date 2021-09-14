import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";

import "styles/index.scss";

import App from "App";
import store from "./redux/store";

const persistor = persistStore(store);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
