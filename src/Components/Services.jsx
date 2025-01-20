import React, { useEffect, useState } from "react";
import { services } from "../locals/services.json";
import { CustomTextModal } from "./CustomTextModal";

export const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState({});
  const showServices = (service) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="services" id="services">
      <div class="container-fluid px-4">
        <h4 class="title-section-h">My Services</h4>
        <div class="row g-4">
          {services.map((service, index) => (
            <div class="col-lg-4 col-md-6" key={index}>
              <div class="box" onClick={() => showServices(service)}>
                <h5>{service.title}</h5>
                <div class="div-content">
                  <p>{service.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CustomTextModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={currentService.title}
        content={currentService.content}
      />
      {/* {isModalOpen && (
        <div className="custom_text_modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div class="custom_modal_box">
            <h5>{currentService.title}</h5>
            <div class="custom_modal_content">
              <p>{currentService.content}</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
