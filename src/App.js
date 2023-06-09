import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Login';
import Main from './pages/Main';
import Registration from './pages/Registration';
import Cart from "./pages/Cart";
import About from "./pages/About";
import MedicationInfo from "./pages/MedicationInfo";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Main />}/>
            <Route path="medications/:id" element={<MedicationInfo />}/>
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Registration />} />
            <Route path='cart' element={<Cart />} />
            <Route path='orders' element={<Order />} />
            <Route path='about' element={<About />} />
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
