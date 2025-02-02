import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

/* const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
  </Route>
); */

const router = createBrowserRouter([
  {path: '/', 
   element: <RootLayout/>,
   errorElement: <ErrorPage/>,
   children: [
    {index: true, element: <HomePage/>},
    {path: 'products', element: <ProductsPage/>},
    {path: 'products/:productId', element: <ProductDetailPage/>},
   ],
  },

]);


//const router = createBrowserRouter(routeDefinition);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
