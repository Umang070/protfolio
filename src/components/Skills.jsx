import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";
// import { CloseOutlined } from "@material-ui/icons";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";

// logos
import HtmlLogo from "../assets/images/tech_skills/html.png";
import CSSLogo from "../assets/images/tech_skills/css3.png";
import ScssLogo from "../assets/images/tech_skills/SCSS.png";
import JavaScriptLogo from "../assets/images/tech_skills/javascript.png";
import JQueryLogo from "../assets/images/tech_skills/jQuery.png";
import ReactLogo from "../assets/images/tech_skills/react.png";
import MuiLogo from "../assets/images/tech_skills/Mui.png";
import StyledComponentsLogo from "../assets/images/tech_skills/styled-components.png";
import BootstrapLogo from "../assets/images/tech_skills/bootstrap.png";
import AngularLogo from "../assets/images/tech_skills/angular.png";
import VueLogo from "../assets/images/tech_skills/vue.png";
import NextjsLogo from "../assets/images/tech_skills/nextjs.png";
import ReduxLogo from "../assets/images/tech_skills/redux.png";
import GraphqlLogo from "../assets/images/tech_skills/graphql.png";
import RubyLogo from "../assets/images/tech_skills/ruby.png";
import RubyOnRailsLogo from "../assets/images/tech_skills/ruby-on-rails.png";
import PostgresLogo from "../assets/images/tech_skills/postgresql.png";
import GitLogo from "../assets/images/tech_skills/git.png";
import MongoDBLogo from "../assets/images/tech_skills/mongodb.png";
import NodeLogo from "../assets/images/tech_skills/node.png";
import ExpressLogo from "../assets/images/tech_skills/express.png";
import AxiosLogo from "../assets/images/tech_skills/axios.png";
import MysqlLogo from "../assets/images/tech_skills/mysql.png";
import FirebaseLogo from "../assets/images/tech_skills/firebase.png";
import ContentfulLogo from "../assets/images/tech_skills/contentful.png";
import GatsbyLogo from "../assets/images/tech_skills/gatsby.png";
import SequelizeLogo from "../assets/images/tech_skills/sequelize.png";
import CloseIcon from "@mui/icons-material/Close";
class Skill {
  constructor(name, logo, categories, website = null) {
    this.name = name;
    this.logo = logo;
    this.categories = [].concat(...categories);
    this.website = website;
  }
}

const CATEGORIES = {
  FRONT_END: "Front-End",
  BACK_END: "Back-End",
  MISC: "Misc.",
};

const { FRONT_END, BACK_END, MISC } = CATEGORIES;

const getSkills = () => [
  new Skill("HTML5", HtmlLogo, [FRONT_END]),
  new Skill("CSS3", CSSLogo, [FRONT_END]),
  new Skill("SCSS", ScssLogo, [FRONT_END]),
  new Skill("JavaScript", JavaScriptLogo, [FRONT_END, BACK_END]),

  new Skill("React.js", ReactLogo, [FRONT_END]),
  new Skill("Next.js", NextjsLogo, [FRONT_END], "https://nextjs.org/"),
  new Skill("Gatsby", GatsbyLogo, [FRONT_END], "https://www.gatsbyjs.com/"),
  new Skill("Redux", ReduxLogo, [FRONT_END], "https://redux.js.org"),

  new Skill("GraphQL", GraphqlLogo, [FRONT_END, BACK_END]),
  new Skill("PostgreSQL", PostgresLogo, [BACK_END]),
  new Skill("MySQL", MysqlLogo, [BACK_END]),
  new Skill("Git", GitLogo, [MISC]),

  new Skill("MongoDB", MongoDBLogo, [BACK_END]),
  new Skill("Node.js", NodeLogo, [BACK_END, FRONT_END]),
  new Skill("Express", ExpressLogo, [BACK_END]),
  new Skill("Axios", AxiosLogo, [MISC]),

  new Skill("jQuery", JQueryLogo, [FRONT_END]),
  new Skill("Ruby", RubyLogo, [BACK_END]),
  new Skill("Ruby on Rails", RubyOnRailsLogo, [BACK_END, FRONT_END]),
  new Skill("Firebase", FirebaseLogo, [BACK_END]),

  new Skill("Contentful", ContentfulLogo, [BACK_END]),
  new Skill(
    "Bootstrap",
    BootstrapLogo,
    [FRONT_END],
    "https://getbootstrap.com/"
  ),
  new Skill("Material UI", MuiLogo, [FRONT_END], "https://mui.com/"),
  new Skill(
    "styled-components",
    StyledComponentsLogo,
    [FRONT_END],
    "https://styled-components.com/"
  ),

  new Skill("Angular", AngularLogo, [FRONT_END], "https://angular.io/"),
  new Skill("Vue", VueLogo, [FRONT_END], "https://vuejs.org/"),
  new Skill("Sequelize", SequelizeLogo, [BACK_END], "https://sequelize.org/"),
];

function SkillsComponent({
  filteredSkills,
  selectedCategories,
  onCategoryClick,
  search,
  setSearch,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
        container.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollAmount += 1;
        container.scrollTo({ top: scrollAmount, behavior: "smooth" });
      }
    };

    const scrollInterval = setInterval(scrollStep, 40);

    return () => clearInterval(scrollInterval);
  }, [filteredSkills]);
  return (
    <div
      className={` mb-5 mt-12 md:mt-0 relative md:top-[-30px] bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ${
        filteredSkills.length >= 4 ? "lg:mt-0" : ""
      }`}
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center h-full w-full">
        {" "}
        <p className="font-lato text-3xl font-semibold text-primary-600 sm:text-4xl">
          Skills
        </p>
        <div className="filter-checkboxes mt-5 mb-5 flex flex-col items-center">
          <FormGroup row className="text-white justify-center mb-5">
            {[FRONT_END, BACK_END, MISC].map((value, key) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(value)}
                    color="primary"
                    onChange={() => onCategoryClick(value)}
                    name={value}
                    sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
                  />
                }
                label={value}
                labelPlacement="top"
                className="text-white"
              />
            ))}
            <Input
              placeholder="Search by name"
              type="text"
              value={search}
              name="searchName"
              onChange={(e) => setSearch(e.target.value)}
              className="text-white mx-2 mb-2"
              endAdornment={
                <InputAdornment position="end">
                  {search && (
                    <IconButton onClick={() => setSearch("")}>
                      <CloseIcon style={{ color: "white" }} />
                    </IconButton>
                  )}
                </InputAdornment>
              }
              sx={{
                color: "white",
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "white" },
              }}
            />
          </FormGroup>
        </div>
        <div
          ref={containerRef}
          className={`skills-container grid gap-5 max-h-72 min-h-[250px] overflow-y-auto overflow-x-hidden rounded-[30px] ${
            filteredSkills.length >= 4 ? "grid-cols-4" : "grid-cols-2"
          }  md:${filteredSkills.length >= 4 ? "grid-cols-3" : "grid-cols-2"}`}
        >
          {filteredSkills.map((skill) => (
            <Tooltip arrow placement="top" title={skill.name} key={skill.name}>
              <img
                className={`tech-logo object-contain p-5 m-5 rounded-[36px] w-24 h-24 bg-white cursor-help animate-float`}
                src={skill.logo}
                alt={skill.name}
                onClick={() =>
                  window.open(
                    skill.website ??
                      `https://en.wikipedia.org/wiki/${skill.name}`,
                    "_blank"
                  )
                }
              />
            </Tooltip>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <br />
    </div>
  );
}

export default function Skills() {
  const skills = getSkills();

  const [selectedCategories, setSelectedCategories] = useState(
    Object.values(CATEGORIES)
  );

  const [search, setSearch] = useState("");

  const uncheckCategory = (value) =>
    setSelectedCategories((prevState) =>
      prevState.filter((category) => category !== value)
    );

  const checkCategory = (value) =>
    setSelectedCategories((prevState) => [...prevState, value]);

  const onCategoryClick = (value) => {
    if (selectedCategories.includes(value)) {
      return uncheckCategory(value);
    }

    checkCategory(value);
  };

  const filteredSkills = useMemo(() => {
    return [...skills].filter(({ name, categories }) => {
      return (
        // filter by search input (skill.name) and by category
        name.toLowerCase().includes(search.toLowerCase()) &&
        categories.some((cat) => selectedCategories.includes(cat))
      );
    });
  }, [selectedCategories, search, skills]);

  // return (
  //   <Wrapper
  //     skillsCount={filteredSkills.length}
  //     className="language"
  //     cloudMode="true"
  //   >
  //     <p className="font-lato text-3xl font-semibold text-primary-600 sm:text-4xl">
  //       Skills
  //     </p>

  //     <div className="filter-checkboxes">
  //       <FormGroup
  //         row
  //         className="text-white"
  //         style={{ justifyContent: "center", marginBottom: "20px" }}
  //       >
  //         {[FRONT_END, BACK_END, MISC].map((value, key) => (
  //           <FormControlLabel
  //             key={key}
  //             control={
  //               <Checkbox
  //                 checked={selectedCategories.includes(value)}
  //                 color="primary"
  //                 onChange={() => onCategoryClick(value)}
  //                 name={value}
  //               />
  //             }
  //             label={value}
  //             labelPlacement="top"
  //           />
  //         ))}
  //         <Input
  //           placeholder="Search by name"
  //           type="text"
  //           value={search}
  //           name="searchName"
  //           onChange={(e) => setSearch(e.target.value)}
  //           endAdornment={
  //             <InputAdornment>
  //               {search && (
  //                 <IconButton onClick={() => setSearch("")}>
  //                   <CloseIcon />
  //                 </IconButton>
  //               )}
  //             </InputAdornment>
  //           }
  //         />
  //       </FormGroup>
  //     </div>

  //     <div className="skills-container">
  //       {filteredSkills.map((skill) => (
  //         <Tooltip arrow placement="top" title={skill.name} key={skill.name}>
  //           <img
  //             className="tech-logo"
  //             src={skill.logo}
  //             alt={skill.name}
  //             onClick={() =>
  //               window.open(
  //                 skill.website ??
  //                   `https://en.wikipedia.org/wiki/${skill.name}`,
  //                 "_blank"
  //               )
  //             }
  //           />
  //         </Tooltip>
  //       ))}
  //     </div>

  //     <br />
  //   </Wrapper>
  // );

  return (
    <SkillsComponent
      filteredSkills={filteredSkills}
      selectedCategories={selectedCategories}
      onCategoryClick={onCategoryClick}
      search={search}
      setSearch={setSearch}
    />
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-flow: column nowrap;
  color: white;
  margin-top: 50px;

  @media screen and (min-width: 1100px) {
    margin-top: 0;
    position: relative;
    top: -30px;
  }

  .MuiCheckbox-colorPrimary {
    svg {
      color: #fff !important;
    }
  }

  .MuiInputBase-root {
    input[name="searchName"] {
      color: #fff;
    }
    display: flex;
    margin: 10px 10px; // put underline and text closer together (15px), margin left 10px
    button {
      color: #fff;
    }
  }

  h1 {
    font-family: montserrat, sans-serif;
    font-size: clamp(19px, 10vw, 40px);
    text-align: center;
    margin-bottom: 30px;
  }

  .skills-container {
    max-height: 280px;
    min-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 30px;

    display: grid;
    grid-template-columns: ${({ skillsCount }) =>
      skillsCount >= 4
        ? `1fr 1fr 1fr 1fr`
        : "1fr 1fr"}; // center it if there are less than enough skills to fill 4 fr of col

    @media (max-width: 600px) {
      grid-template-columns: ${({ skillsCount }) =>
        skillsCount >= 4
          ? `1fr 1fr 1fr`
          : "1fr 1fr"}; // center it if there are less than enough skills to fill 3 fr of col
    }
  }

  /* logo float */
  @keyframes stackFloat {
    0% {
      /* down */
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
    50% {
      /* up */
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
    100% {
      /* back down */
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }

  .tech-logo {
    object-fit: contain;
    max-width: 100px;
    min-width: 100px;
    padding: 20px;
    margin: 20px;
    max-height: 100px;
    height: 100px;
    border-radius: 36px;
    min-height: 100px;
    width: 100%;
    height: auto;
    background: #fff;
    transform: translateY(0px);
    animation: ${({ cloudMode }) =>
      cloudMode && "stackFloat 6s ease-in-out infinite"};
  }

  .text-letter {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .text-letter:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }

  @media screen and (max-width: 533px) {
    .tech-logo {
      margin: 10px;
    }
  }

  @media screen and (max-width: 433px) {
    .tech-logo {
      margin: 5px;
    }
  }

  @media screen and (max-width: 330px) {
    .tech-logo {
      width: 25vw;
      margin: 4px;
      max-width: 25vw;
      min-width: 25vw;
    }
  }

  .tech-logo:hover {
    cursor: help;
  }
`;
