import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import VideoPlayContainer from "./components/VideoPlayContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/v",
        element: <VideoPlayContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
