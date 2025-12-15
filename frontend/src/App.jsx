import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

// Public pages
import Home from "./pages/Home";
import ExploreLibraries from "./pages/ExploreLibraries";
import SeatLayout from "./pages/SeatMap";
import About from "./pages/About";
import Tech from "./pages/Tech";
// Owner pages
import Login from "./pages/Login";
import OwnerDashboard from "./pages/Dashboard";
import ManageSeatsPage from "./pages/ManageSeatsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* All pages inside your MainLayout */}
        <Route element={<MainLayout />}>
          
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/libraries" element={<ExploreLibraries />} />
          
          {/* Dynamic library seat layout */}
          <Route path="/libraries/:libraryId" element={<SeatLayout />} />

          {/* OWNER ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<OwnerDashboard />} />
          <Route path="/dashboard/manage-seats" element={<ManageSeatsPage />} />
          <Route path="/about" element={<About />} />
<Route path="/tech" element={<Tech />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
