import { memo } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { Favorites } from "./pages/favorites/Favorites.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { Notification } from "./pages/notification/Notification.jsx";
import { NotFound } from "./shared/components/NotFound/NotFound.jsx";
import { Login } from "./pages/auth/Login.jsx" ;
import { DrinkPage } from "./pages/drinks/DrinkPage.jsx";
import { BeanPage } from "./pages/beans/BeanPage.jsx";
import { Header } from "./shared/components/Header/Header.jsx";
import { Sidebar } from "./shared/components/Sidebar/Sidebar.jsx";
import GetPageTitle from "./services/GetPageTitle.js";

const App = () => {

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "drinks/:id",
          element: <DrinkPage />,
        },
        {
          path: "beans/:id",
          element: <BeanPage />,
        },
        {
          path: "auth",
          element: <Login />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
};

const MainLayout = memo(() => {
  const { getPageTitle } = GetPageTitle();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  console.log("MainLayout rendered");

  return (
    <>
      <Header title={ pageTitle } />
      <div className="main">
          <Outlet />
      </div>
      <Sidebar />
    </>
  )
});

export default App;
