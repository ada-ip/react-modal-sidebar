import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const Navbar = () => {
	const { openSidebar } = useGlobalContext();
	return (
		<nav className="navbar">
			<button type="button" className="navbar-btn" onClick={openSidebar}>
				<FaBars className="navbar-btn-icon" />
			</button>
		</nav>
	);
};
export default Navbar;
