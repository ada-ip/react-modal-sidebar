import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";

const SidebarHeader = () => {
	const { closeSidebar } = useGlobalContext();
	return (
		<header className="sidebar-header">
			<h3>Company Logo</h3>
			<button type="button" className="close-btn sidebar-close-btn" onClick={closeSidebar}>
				<FaTimes />
			</button>
		</header>
	);
};
export default SidebarHeader;
