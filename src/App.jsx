import SingleNews from "./components/SingleNews";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singlenews/",
          element: <SingleNews />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
