import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Explore from './pages/Explore/Explore';
import Navigation from './pages/Shared/Navigation/Navigation';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome/DashboardHome';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import Pay from './pages/Dashboard/Pay/Pay';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allProduct" element={<Explore />} />
          <Route path="/purchase/:id" element={<Purchase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome />} />
            <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
            <Route path={`/dashboard/addReview`} element={<AddReview />} />
            <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path="/dashboard/manageAllOrders" element={<AdminRoute><ManageAllOrders /></AdminRoute>} />
            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
            <Route path={`/dashboard/pay`} element={<Pay />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
