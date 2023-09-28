const SidebarSubmenuLink = ({ url, icon }) => {
	return (
		<li>
			<a href={url} className="sidebar-submenu-link">
				{icon}
			</a>
		</li>
	);
};
export default SidebarSubmenuLink;
