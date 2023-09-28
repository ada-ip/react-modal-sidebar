import { FaBars } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="navbar">
			<button type="button" className="navbar-btn">
				<FaBars className="navbar-btn-icon" />
			</button>
		</nav>
	);
};
export default Navbar;
