import { useContext, useState, createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	return (
		<GlobalContext.Provider
			value={{ isModalOpen, closeModal, openModal, closeSidebar, openSidebar, isSidebarOpen }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default AppContext;
