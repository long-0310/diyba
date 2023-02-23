import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "./Layout/DefaultPage/DefaultPage";
import Account from "./pages/Account/Account";
import Contact from "./pages/Contact/Contact";
import DashBoard from "./pages/DashBoard/DashBoard";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import Notifications from "./pages/Notifications/Notifications";
import Pending from "./pages/Pending/Pending";
import Search from "./pages/Search/Search";
import WishList from "./pages/WishList/WishList";
import "./index.scss";

export const HideContext = createContext();

function App() {
  const [hide, setHide] = useState(true);
  return (
    <HideContext.Provider value={hide}>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="portfolio" element={<MyPortfolio />} />
            <Route path="pending" element={<Pending />} />
            <Route path="search" element={<Search />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="contact" element={<Contact />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </HideContext.Provider>
  );
}

export default App;
