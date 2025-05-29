import contactInformation from "../locals/contactInformation.json";

export const Contact = () => {
  const { social, location, contact } = contactInformation;

  // Helper function to format the key to Title Case
  const formatKey = (key) => {
    return (
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <div className="contact" id="contact">
      <div className="container-fluid px-4 py-2">
        <h4 className="title-section-h mt-4">Contact Information</h4>
        <div className="row gy-3">
          {/* Location Section */}
          <div className="col-lg-4">
            <div className="box">
              <ul className="list-unstyled m-0">
                {Object.entries(location).map(([key, value]) => (
                  <li key={key}>
                    <h6>{formatKey(key)}:</h6>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Section */}
          <div className="col-lg-4">
            <div className="box">
              <ul className="list-unstyled m-0">
                {Object.entries(social).map(([key, value]) => (
                  <li key={key}>
                    <h6>{formatKey(key)}:</h6>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4">
            <div className="box">
              <ul className="list-unstyled m-0">
                {Object.entries(contact).map(([key, value]) => (
                  <li key={key}>
                    <h6>{formatKey(key)}:</h6>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
