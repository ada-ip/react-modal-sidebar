import { FaTimes } from "react-icons/fa";

const SidebarHeader = () => {
	return (
		<header className="sidebar-header">
			<h3>Company Logo</h3>
			<button type="button" className="close-btn sidebar-close-btn">
				<FaTimes />
			</button>
		</header>
	);
};
export default SidebarHeader;
