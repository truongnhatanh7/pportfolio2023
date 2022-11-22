import { styled, shakingAppear } from "../design/stitches.config"
import Card from "../components/Card"
import { useState } from "react"

const ProjectsLayout = (props) => {
  const [projects, setProjects] = useState([
    {
      img: "",
      title: "",
    },
    {
      img: "",
      title: "",
    },
  ])

  return (<Wrapper>
    <Content>
      
    </Content>
  </Wrapper>)
}

const Wrapper = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "grid",
  placeItems: "center",
  animation: `${shakingAppear} 100ms`
})

const Content = styled("div", {
  display: "flex",
  maxWidth: "$maxBound",
  flexWrap: "wrap",
  margin: "0 auto"
})

export default ProjectsLayout