import { Navigate } from "react-router-dom";
import Layout from "./components/AdminLayout/Layout";
import AdminDashboard from "./screens/AdminDashboard";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NotFound from "./components/NotFound/NotFound";
import AdminProfile from "./screens/AdminProfile";
import AdminUsermanagemet from "./screens/AdminUsermanagemet";
import AdminChangePass from "./screens/AdminChangePass";
import ProductListing from "./screens/ProductListing";
import NavComponent from "./screens/NavComponent";
import ProductDetailedView from "./screens/ProductDetailedView";
import FindByBrand from "./screens/FindByBrand";
import ClientAccount from "./screens/ClientAccount";
import ClientLogin from "./screens/ClientLogin";
import AuthGuard from "./Auth/AuthGuard";
import CartScreen from "./screens/CartScreen";
import ClientSignup from "./screens/ClientSignup";

const dashboardRoute = [{ path: "/dashboard", element: <AdminDashboard /> }];
const adminProfile = [{ path: "/adminProfile", element: <AdminProfile /> }];
const adminLogin = [{ path: "/admin/login", element: <AdminLoginScreen /> }];
const adminUserManagement = [
  { path: "/userManagement", element: <AdminUsermanagemet /> },
];
const adminChangePass = [
  { path: "/admin/password", element: <AdminChangePass /> },
];
const productListingRoute = [
  { path: "/product/productListing", element: <ProductListing /> },
];

const productDetailedViewRoute = [
  { path: "/product/productDetailedView", element: <ProductDetailedView /> },
];

const productFindByBrand = [
  { path: "/product/productBrand", element: <FindByBrand /> },
];

const clientLogin = [{ path: "/user/login", element: <ClientLogin /> }];
const clientSignup = [{ path: "/user/signup", element: <ClientSignup /> }];

const clientAccount = [{ path: "/user/account", element: <ClientAccount /> }];

const cart = [{ path: "/user/cart", element: <CartScreen /> }];

const routes = [
  {
    element: (
      <AuthGuard>
        <NavComponent />
      </AuthGuard>
    ),
    children: [
      ...productListingRoute,
      ...productDetailedViewRoute,
      ...productFindByBrand,
      ...clientAccount,
      ...cart,
    ],
  },
  {
    element: <NavComponent />,
    children: [...clientLogin, ...clientSignup],
  },
  {
    element: <Layout />,
    children: [
      ...dashboardRoute,
      ...adminProfile,
      ...adminUserManagement,
      ...adminChangePass,
    ],
  },
  { path: "/", element: <HomeScreen /> },
  { path: "/product", element: <Navigate to="/product/productListing" /> },
  { path: "/admin", element: <Navigate to="/dashboard" /> },
  { path: "/login", element: <AdminLoginScreen /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
