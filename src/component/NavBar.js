import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">|| HOME ||</Link>
      <Link to="/discovery"> DISCOVERY ||</Link>
      <Link to="/luis">WEB LUIS</Link>
    </div>
  );
}
