import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./providers/ReactQueryProvider.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReactQueryProvider>
      <Provider store={store}>
        <App />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </ReactQueryProvider>
  </BrowserRouter>
);
