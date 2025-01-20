import React from "react";
import contactInformation from "../locals/contactInformation.json";
export const Contact = () => {
  let { social, location, contact } = contactInformation;
  return (
    <div class="contact" id="contact">
      <div class="container-fluid px-4 py-2">
        <h4 class="title-section-h mt-4">Contact information</h4>
        <div class="row gy-3">
          <div class="col-lg-4">
            <div class="box">
              <ul class="list-unstyled m-0">
                <li>
                  <h6>Country:</h6>
                  <span>{location.country}</span>
                </li>
                <li>
                  <h6>City:</h6>
                  <span>{location.city}</span>
                </li>
                <li>
                  <h6>Streat:</h6>
                  <span>{location.streat}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box">
              <ul class="list-unstyled m-0">
                <li>
                  <h6>Email:</h6>
                  <span>{social.email}</span>
                </li>
                <li>
                  <h6>Facebook:</h6>
                  <span>{social.facebook}</span>
                </li>
                <li>
                  <h6>Linkedin:</h6>
                  <span>{social.linkedIn}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box">
              <ul class="list-unstyled m-0">
                <li>
                  <h6>Personal:</h6>
                  <span>{contact.personal}</span>
                </li>
                <li>
                  <h6>Work:</h6>
                  <span>{contact.work}</span>
                </li>
                <li>
                  <h6>Office:</h6>
                  <span>{contact.office}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
