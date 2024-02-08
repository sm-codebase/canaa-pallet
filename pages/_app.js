import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <div>
     
      <Component {...pageProps} />
      
  
    </div>
  );
}

export default MyApp;
