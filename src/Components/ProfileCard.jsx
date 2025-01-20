import React, { useState } from "react";

const ProfileCard = ({ name, job, imageUrl, modalImageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header-box">
      <div className="profile-img" onClick={() => openModal(modalImageUrl)}>
        <img src={imageUrl} alt="Profile" />
        <div className="lamp-parent">
          <div className="lamp"></div>
        </div>
      </div>
      <div className="profile-about py-3">
        <h5 className="name">{name}</h5>
        <div className="job pt-1">{job}</div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={modalImageSrc} alt="Full Image" />
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
