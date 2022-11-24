import { StyledContainer } from "../Styles/Project.styles";
import screenshot from "../../images/rpgjournal.jpg";

export const RPGJournal = () => {
  return (
    <StyledContainer>
      <a href="https://github.com/g-uberman/rpg-journal" target="blank">
        <img src={screenshot}></img>
      </a>
      <h1>Dziennik Drużynowy (RPG Journal)</h1>
      <p>Work in progress / Individual training project</p>
      <p>
        This blog-style app dedicated to tabletop roleplaying players will allow
        the user to create an instance of a journal specific to their
        roleplaying game party and invite their friends to record the party's
        progress and other campaign-specific information together.
      </p>
      <div className="miniheader">
        Repository:{" "}
        <a href="https://github.com/g-uberman/rpg-journal" target="blank">
          github.com/g-uberman/rpg-journal/
        </a>
      </div>
      <div className="miniheader">Not yet deployed</div>

      <br />
      <div className="miniheader green">Technologies used: </div>
      <ul>
        <li>React with TypeScript</li>
        <li>Material UI</li>
        <li>Firebase Auth & Firestore</li>
      </ul>
      <br />
      <div className="miniheader green">Planned features: </div>
      <ul>
        <li>
          Allowing the user to create an instance of the blog only accessible to
          specified other logged users
        </li>
        <li>
          Users will be able to add records to the history log, character descriptions and images
        </li>
        <li>Fully responsive</li>
      </ul>
    </StyledContainer>
  );
};
