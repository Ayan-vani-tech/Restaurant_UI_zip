import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Restaurants from "./pages/Restaurants/Restaurants";
import Admin from "./pages/Admin/Admin";
import Reviews from "./pages/Reviews/Reviews";
import DisReview from "./pages/DisReview/DisReview";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/restraunts" element={<Restaurants />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/disReview" element={<DisReview />} />
            </Routes>
        </div>
    );
}

export default App;
