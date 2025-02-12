import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import SigeUp from "./pages/SigeUp/SigeUp";
import Otp from "./pages/Otp/Otp";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";
import Analytics from "./pages/Analytics/Analytics";
import Reviews from "./pages/Reviews/Reviews";
import DisReview from "./pages/DisReview/DisReview";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sigeUp" element={<SigeUp />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/" element={<Order />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/disReview" element={<DisReview />} />
            </Routes>
        </div>
    );
}

export default App;
