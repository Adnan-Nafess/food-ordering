import About from "./components/About";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // ✅ FIXED: RouterProvider, Outlet

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* ✅ Nested route content renders here */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />; // ✅ FIXED
};

export default App;
