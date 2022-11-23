import { StyledContainer } from "../Styles/Project.styles";
import screenshot from "../../images/kosci.jpg";

export const Kosci = () => {
  return (
    <StyledContainer>
      <a href="https://kosci-5cf52.web.app/" target="blank">
        <img src={screenshot}></img>
      </a>
      <h1>Kości (Dice)</h1>
      <p>Individual training project</p>
      <p>
        This one page app allows you to generate random numbers the same
        way that rolling any of the popular polyhedral dice does.
      </p>
      <div className="miniheader">
        Repository:{" "}
        <a href="https://github.com/g-uberman/dice-roller" target="blank">
          github.com/g-uberman/dice-roller
        </a>
      </div>
      <div className="miniheader">
        Deployed app:{" "}
        <a href="https://kosci-5cf52.web.app/" target="blank">
          kosci-5cf52.web.app
        </a>
      </div>

      <br />
      <div className="miniheader green">Technologies used: </div>
      <ul>
        <li>JavaScript</li>
      </ul>
      <br />
      <div className="miniheader green">Key features: </div>
      <ul>
        <li>LocalStorage saving the last 10 roll results</li>
        <li>
          Toggleable exploding dice (rolling another die when the first one's
          result was its maximum)
        </li>
        <li>Fully responsive</li>
      </ul>
    </StyledContainer>
  );
};
