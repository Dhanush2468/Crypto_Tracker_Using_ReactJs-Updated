import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import `Routes` component

import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes> {/* Wrap your routes in `Routes` component */}
          <Route path="/" element={<Homepage />} /> {/* Use `element` prop instead of `component` */}
          <Route path="/coins/:id" element={<CoinPage />} /> {/* Use `element` prop instead of `component` */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
