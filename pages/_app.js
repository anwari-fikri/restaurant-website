import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
