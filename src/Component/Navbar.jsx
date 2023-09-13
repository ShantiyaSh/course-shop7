import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/new-course">Add Course</Link>
    </div>
  );
};
export default Navbar;
