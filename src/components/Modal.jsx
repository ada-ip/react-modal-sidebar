import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
	const { closeModal, isModalOpen } = useGlobalContext();

	return (
		<div className={`modal-ext-container${isModalOpen ? "" : " hidden"}`}>
			<div className="modal-container">
				<h3 className="modal-title">Modal Content</h3>
				<FaTimes className="close-modal-btn" onClick={closeModal} />
			</div>
		</div>
	);
};
export default Modal;
