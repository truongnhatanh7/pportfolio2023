import { styled, shakingAppear } from "../design/stitches.config"
import Card from "../components/Card"
import { useState } from "react"

const ProjectsLayout = (props) => {
  const [projects, setProjects] = useState([
    {
      img: "",
      title: "Tamson",
      url: "https://tamson.vercel.app",
    },
    {
      img: "",
      title: "Hackerspace",
      url: "https://hackerspace.netlify.app/auth",
    },
    {
      img: "",
      title: "This website :D",
      url: "https://pportfolio2023.vercel.app/",
    },
  ])

  return (<Wrapper>
    <Content>
      {
        projects.map((project, index) => (
          <Card image={project.img} title={project.title} url={project.url}/>
        ))
      }
    </Content>
  </Wrapper>)
}

const Wrapper = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "grid",
  placeItems: "center",
  animation: `${shakingAppear} 100ms`,
  perspective: "100px",
})

const Content = styled("div", {
  display: "flex",
  maxWidth: "$maxBound",
  flexWrap: "wrap",
  margin: "0 auto",
  transformStyle: "preserve-3d",

})

export default ProjectsLayout