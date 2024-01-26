import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sideNavbar">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-group-item">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="list-group-item">
          <Link to="/create">Create blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
