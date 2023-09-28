import { FaTimes } from "react-icons/fa";

const Modal = () => {
	return (
		<div className="modal-ext-container">
			<div className="modal-container">
				<h3 className="modal-title">Modal Content</h3>
				<FaTimes className="close-modal-btn" />
			</div>
		</div>
	);
};
export default Modal;
