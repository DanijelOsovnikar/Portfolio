import Navbar from "../components/Navbar";
import "./Footer.scss";

export default function Footer({ children }) {
  return (
    <footer>
      {children}
      <Navbar />
    </footer>
  );
}
