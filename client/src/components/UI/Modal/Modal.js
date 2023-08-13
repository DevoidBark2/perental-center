import React from "react";
import styles from "./Modal.module.css"

const ModalComponent = ({modal,setModal,children}) => {
    return(
        <div className={modal ? [styles.modal,styles.active].join(' ') : styles.modal}  onClick={() => setModal(false)}>
            <div className={modal ? [styles.modal_content,styles.active].join(' ') : styles.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalComponent;