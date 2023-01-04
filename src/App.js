import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { calcExpirationTime, retrieveStoredToken } from "./authHelper";
import { useEffect } from "react";
import { setTimer } from "./store/slices/Auth-slice";

import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import ProductDetail from "./components/Products/ProductDetail";
// import Auth from "./components/auth/Auth";

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const ProductDetail = React.lazy(() =>
  import("./components/Products/ProductDetail")
);
const Auth = React.lazy(() => import("./components/auth/Auth"));
// const Home = React.lazy(()=> import());

function App() {
  const isLogin = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = retrieveStoredToken();
    if (authData) {
      dispatch(setTimer(calcExpirationTime(authData.duration)));
    }
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback= {<div className="loading"></div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/cart"
            element={isLogin ? <Cart /> : <Navigate to="/auth" />}
          />
          <Route path="/products/:productId" element={<ProductDetail />} />
          {
            <Route
              path="/auth"
              element={!isLogin ? <Auth /> : <Navigate to="/" />}
            />
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
