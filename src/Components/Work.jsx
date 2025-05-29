import React from "react";
import works from "../locals/works.json";
import { useNavigate } from "react-router-dom";
export const Work = () => {
  const { projects } = works;
  let navigate = useNavigate();

  return (
    <div className="work" id="work">
      <div className="container-fluid px-4">
        <nav className="d-flex align-items-center justify-content-between">
          <div className="title pt-4">
            <h4 className="title-section-h">Works</h4>
          </div>

          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              ALL
            </button>
            <button
              className="nav-link"
              id="nav-web-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-web"
              type="button"
              role="tab"
              aria-controls="nav-web"
              aria-selected="false"
            >
              WEB TEMPLATES
            </button>

            <button
              className="nav-link disabled"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Node.js-app
            </button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-all"
            role="tabpanel"
            aria-labelledby="nav-all-tab"
            tabIndex="0"
          >
            <div className="row gy-4">
              {projects
                .filter((project) => project.category === "all")
                .map((project) => (
                  <div className="col-lg-6" key={project.id}>
                    <div
                      className="box"
                      // onClick={() => navigate(`/details/${project.id}`)}
                      onClick={() => navigate(`/details/${project.id}`)}
                    >
                      <img
                        src={project.image}
                        loading="lazy"
                        alt={project.title}
                      />
                      <div className="over-lay">
                        <div className="over-lay-content">
                          <h2>{project.title}</h2>
                          <p>{project.description}</p>
                          <ul className="d-flex justify-content-center list-unstyled m-0 p-0">
                            {project.links.map((link, index) => (
                              <li key={index}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.type === "code" ? (
                                    <i className="fa-solid fa-code"></i>
                                  ) : (
                                    <i className="fa-solid fa-eye"></i>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-web"
            role="tabpanel"
            aria-labelledby="nav-web-tab"
            tabIndex="0"
          >
            <div className="row gy-4">
              {projects
                .filter((project) => project.category === "web")
                .map((project) => (
                  <div className="col-lg-6" key={project.id}>
                    <div
                      className="box"
                      onClick={() => navigate(`/workDetails/${project.id}`)}
                    >
                      <img
                        src={project.image}
                        loading="lazy"
                        alt={project.title}
                      />
                      <div className="over-lay">
                        <div className="over-lay-content">
                          <h2>{project.title}</h2>
                          <p>{project.description}</p>
                          <ul className="d-flex justify-content-center list-unstyled m-0 p-0">
                            {project.links.map((link, index) => (
                              <li key={index}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.type === "code" ? (
                                    <i className="fa-solid fa-code"></i>
                                  ) : (
                                    <i className="fa-solid fa-eye"></i>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
