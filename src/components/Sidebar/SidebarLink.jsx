const SidebarLink = ({ url, text, icon }) => {
	return (
		<li>
			<a href={url} className="sidebar-link">
				<span>{icon}</span>
				<span>{text}</span>
			</a>
		</li>
	);
};
export default SidebarLink;
