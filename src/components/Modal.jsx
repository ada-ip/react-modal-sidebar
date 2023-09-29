import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
	const { closeModal, isModalOpen } = useGlobalContext();

	return (
		<div className={`modal-ext-container${isModalOpen ? "" : " modal-hidden"}`}>
			<div className="modal-container">
				<h3 className="modal-title">Modal Content</h3>
				<button type="button" className="close-btn close-modal-btn" onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};
export default Modal;
