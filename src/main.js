import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
import ShimmerUI from "./Components/ShimmerUI";

const Menu = lazy(() => {
  return import("./Components/Restaurant/Menu");
});

const Cart = lazy(() => import("./Components/Cart"));
const MenuUI = () => {
  return (
    <Suspense fallback={<ShimmerUI />}>
      <Menu />
    </Suspense>
  );
};

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: `/restaurant/:resId`,
        element: <MenuUI />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
