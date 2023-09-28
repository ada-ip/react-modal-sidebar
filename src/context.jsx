import { useContext, useState, createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};

	return <GlobalContext.Provider value={{ isModalOpen, closeModal, openModal }}>{children}</GlobalContext.Provider>;
};

export default AppContext;
