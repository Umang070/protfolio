import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";

import Contact from "./components/Contact";
import MessagePopupBox from "./helper/MessagePopupBox";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
export const PopupContext = createContext();
function App() {
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  return (
    <BrowserRouter>
      <PopupContext.Provider value={setPopup}>
        <Grid container direction="column" className="parent">
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </PopupContext.Provider>
      <MessagePopupBox
        open={popup.open}
        setOpen={(status) =>
          setPopup({
            ...popup,
            open: status,
          })
        }
        severity={popup.severity}
        message={popup.message}
      />
    </BrowserRouter>
  );
}

export default App;
