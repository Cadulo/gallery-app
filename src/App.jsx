import Upload from "./pages/Upload.jsx";
import Form from "./pages/Form.jsx";
import { Resume } from "./pages/Resume.jsx";
import { OrderList } from "./pages/OrderList.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ImageProvider } from "./context/ImageContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { PanelOrders } from "./pages/PanelOrders.jsx";


function App() {
  return (
    <AuthProvider>
      <ImageProvider>
        <OrderProvider>
          <div className="px-10 dark:bg-slate-900  dark:text-white">
            <Routes>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Upload />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/client-orders" element={<OrderList />}></Route>
                <Route path="/admin-orders" element={<PanelOrders />} />
                </Route>
            </Routes>
          </div>
        </OrderProvider>
      </ImageProvider>
    </AuthProvider>
  );
}
export default App;
