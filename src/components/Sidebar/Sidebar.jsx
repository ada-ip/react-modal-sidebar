import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink";
import SidebarSubmenuLink from "./SidebarSubmenuLink";
import { useGlobalContext } from "../../context";

import { links, social } from "../../data";

const Sidebar = () => {
	const { isSidebarOpen } = useGlobalContext();
	return (
		<aside className={`sidebar${isSidebarOpen ? "" : " sidebar-hidden"}`}>
			<SidebarHeader />
			<ul className="sidebar-links">
				{links.map((link) => (
					<SidebarLink key={`links${link.id}`} {...link} />
				))}
			</ul>
			<ul className="sidebar-submenu">
				{social.map((item) => (
					<SidebarSubmenuLink key={`socials${item.id}`} {...item} />
				))}
			</ul>
		</aside>
	);
};
export default Sidebar;
