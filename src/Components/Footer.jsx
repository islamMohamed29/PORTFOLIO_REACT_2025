import React from "react";
import footer from "../locals/footer.json";
export const Footer = () => {
  const { copyRight, ownerMail } = footer;
  return (
    <div class="footer">
      <div class="container-fluid px-4">
        <div class="box-footer">
          <div>{copyRight}</div>
          <div>
            Email:
            <a href="#" target="_blank">
              {ownerMail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
