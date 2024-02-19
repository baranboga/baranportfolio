import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import law from "../../Assets/Projects/law.jpeg";
import udemy from "../../Assets/Projects/udemy.jpeg";
import plant from "../../Assets/Projects/plant.jpeg";
import camping from "../../Assets/Projects/camping.jpg";
import coffe from "../../Assets/Projects/coffe.jpeg";
import food from "../../Assets/Projects/food.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camping}
              isBlog={false}
              title="Camping App"
              description="A project where users can reserve a camping area"
              ghLink="https://github.com/baranboga/reactnativecamping"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food recipies Project"
              description="A project where users can look at recipes and add these recipes to their favorite list."
              ghLink="https://github.com/baranboga/React.js--Foodrecipes-projesi"
              demoLink="https://yemektarifleri.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Plant App"
              description="A project where users can get information about plants and buy plants"
              ghLink="https://github.com/baranboga/reactnativeplantapp"
                    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={law}
              isBlog={false}
              title="Law Firm Project"
              description="Law office site prepared with Node.js mvc"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffe}
              isBlog={false}
              title="Coffe Recipe App"
              description="
              A project where users can get coffee recipes and add these recipes to their favorite list."
              ghLink="https://github.com/baranboga/LawFirm_FullStack_Express.js"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udemy}
              isBlog={false}
              title="Udemy like"
              description="A project similar to Udemy where users can purchase training from experts in their field."
              ghLink="https://github.com/baranboga/React.js--e-commerce-project"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
