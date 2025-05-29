import React from "react";

export const CustomTextModal = ({ isOpen, onClose, title, content }) => {
  return (
    isOpen && (
      <div className="custom_text_modal" onClick={onClose}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="custom_modal_box">
          <h5>{title}</h5>
          <div className="custom_modal_content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  );
};
