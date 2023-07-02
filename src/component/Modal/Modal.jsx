import { useEffect } from 'react';
import { Wrapper, ModalBody } from './Modal.styled';
import { createPortal } from 'react-dom';


const Modal = ({ children, hendleClose }) => {

    const hendlerShutDown = e => {
        if (e.key === 'Escape' || e.target === e.currentTarget) {
            hendleClose();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', hendlerShutDown);
        return () => window.removeEventListener('keydown', hendlerShutDown);
    }, []);

    return createPortal(<Wrapper onClick={hendlerShutDown}>
        <ModalBody>{children}</ModalBody>
    </Wrapper>, document.getElementById('modal-root'))
};

export default Modal;

