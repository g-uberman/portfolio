import { StyledContainer } from "../Styles/Project.styles";
import screenshot from "../../images/co2car.jpg";

export const CO2Car = () => {
  return (
    <StyledContainer>
      <img src={screenshot}></img>
      <h1>CO₂CAR</h1>
      <p>
        Team project finishing InfoShare Academy Junior Front-end Developer
        Bootcamp co-authored by Dorota Dawidowicz, Tomasz Stenka and Monika
        Hilbrycht.
      </p>
      <p>
        CO₂CAR allows you to easily track your car's emissions, save your
        emission data over time and sum & compare your numbers to european
        averages and recommendations.
      </p>
      <div className="miniheader">
        Repository:{" "}
        <a
          href="https://github.com/infoshareacademy/jfddr7-team-co2car"
          target="blank"
        >
          github.com/infoshareacademy/jfddr7-team-co2car
        </a>
      </div>
      <div className="miniheader">
        Deployed app:{" "}
        <a href="https://co2car.netlify.app/" target="blank">
          co2car.netlify.app/
        </a>
      </div>

      <br /><div className="miniheader">Technologies used: </div>
      <ul>
        <li>React with TypeScript</li>
        <li>Material UI</li>
        <li>react-chartjs-2</li>
        <li>i18next</li>
        <li>Firebase Auth & Firestore</li>
      </ul>
      <br /><div className="miniheader">Key features: </div>
      <ul>
        <li>User account saving user data</li>
        <li>Data presented in easy-to-read charts</li>
        <li>Toggleable English and Polish language version</li>
        <li>Fully responsive</li>
      </ul>
    </StyledContainer>
  );
};
