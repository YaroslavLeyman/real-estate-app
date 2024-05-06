import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./components/layout/layout";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Login from "./auth/login/login";
import Register from "./auth/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
