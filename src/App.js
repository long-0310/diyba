import { createContext, useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import { AppContext } from "./Context/AppContext";

export const HideContext = createContext();

function App() {
  const [hide, setHide] = useState(true);
  const { open, setIsOpen } = useContext(AppContext);

  const setHideMenu = () => {
    setIsOpen();
  };
  return (
    <HideContext.Provider value={hide}>
      <div className="App">
        {open ? <div onClick={setHideMenu} className="wrapper"></div> : ""}
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
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
