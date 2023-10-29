const Modal = ({ image, onClose }) => {
    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={image} alt="Large" />
        </div>
      </div>
    );
  };
  
  export default Modal;