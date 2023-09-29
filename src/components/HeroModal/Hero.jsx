import { useGlobalContext } from "../../context";
import Modal from "./Modal";

const Hero = () => {
	const { openModal } = useGlobalContext();
	return (
		<>
			<button type="button" className="open-modal-btn" onClick={openModal}>
				Show Modal
			</button>
			<Modal />
		</>
	);
};
export default Hero;
