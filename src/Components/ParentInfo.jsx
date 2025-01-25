import { useDispatch, useSelector } from "react-redux";
import parentInfo from "../locals/parentInfo.json";
import ProfileCard from "./ProfileCard";
import { setShowLeftMenu } from "../redux/slices/layout-slice";

export const ParentInfo = () => {
  const {
    name,
    job,
    age,
    location,
    languages,
    codingSkills,
    knowledge,
    socialLinks,
    cvLink,
  } = parentInfo;

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { showLeftMenu } = state.layout;
  return (
    <div
      class="parent-info"
      style={{
        ...(showLeftMenu
          ? { left: "0", top: "0", height: "100vh" }
          : {
              ...(!showLeftMenu && { top: "0", height: "100vh" }),
            }),
      }}
    >
      <i
        class="fa-solid fa-xmark"
        onClick={() => dispatch(setShowLeftMenu(!showLeftMenu))}
      ></i>
      <ProfileCard
        name={name}
        job={job}
        // imageUrl="/New Project.png"
        imageUrl="/Test.png"
        modalImageUrl="/Profile.jpg"
      />
      {/* <div class="header-box">
        <div class="profile-img">
          <img src="/Profile.jpg" alt="" />
          <div class="lamp-parent">
            <div class="lamp"></div>
          </div>
        </div>
        <div class="profile-about py-3">
          <h5 class="name">{name}</h5>
          <div class="job pt-1">{job}</div>
        </div>
      </div> */}
      <div class="scroll-area">
        <div class="box">
          <div class="info pt-3 px-3">
            <ul class="about-us list-unstyled">
              <li>
                <h6>Residence:</h6>
                <span>{location.residence}</span>
              </li>
              <li>
                <h6>City:</h6>
                <span>{location.city}</span>
              </li>
              <li>
                <h6>Age:</h6>
                <span>{age}</span>
              </li>
            </ul>
            <div class="divider"></div>
            <h5 class="title-h">Languages</h5>

            <div class="lang-skills p-3">
              {languages.map((lang, index) => (
                <div key={index} className="lang-skills-item">
                  <div
                    id={`circleprog1-${index + 1}`}
                    data-type="circles"
                    data-value={lang.proficiency}
                    className="circle-progress"
                  >
                    <svg
                      viewBox="0 0 100 100"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                        stroke="#eee"
                        strokeWidth="7"
                        fillOpacity="0"
                      ></path>
                      <path
                        d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                        stroke="#555"
                        strokeWidth="7"
                        fillOpacity="0"
                        style={{
                          strokeDasharray: "300, 300",
                          strokeDashoffset: `${
                            300 - (300 * lang.proficiency) / 100
                          }`,
                        }}
                      ></path>
                    </svg>
                    <div className="progressbar-text">{lang.proficiency}</div>
                  </div>
                  <h6>{lang.language}</h6>
                </div>
              ))}
            </div>

            <div class="divider"></div>
            <h5 class="title-h">Coding</h5>

            <div class="hard-skills py-3">
              <ul class="skills list-unstyled">
                {codingSkills.map((skill, index) => (
                  <li key={index}>
                    <h6>{skill.skill}</h6>
                    <span>{skill.percentage}%</span>
                    <div className={`progress ${skill.className}`}></div>
                  </li>
                ))}
              </ul>
            </div>

            <div class="divider"></div>
            <h5 class="title-h">knowledge</h5>

            <div class="knowledge-area py-2">
              <ul class="knowledge list-unstyled">
                {knowledge.map((item, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="divider"></div>
            <div class="cv-downloed py-3">
              <a target="_blank" href={cvLink}>
                Downloed Cv <i class="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <div class="social">
          <ul class="list-unstyled">
            {Object.keys(socialLinks).map((platform, index) => (
              <li key={index}>
                <a target="_blank" href={socialLinks[platform]}>
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
