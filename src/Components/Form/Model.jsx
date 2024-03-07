/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "absolute",
        top: "-35%",
        left: "-15%",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 150,
          width: 600,
          margin: "auto",
          padding: "2%",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
