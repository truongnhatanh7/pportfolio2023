import { styled, shakingAppear } from "../design/stitches.config"
import { useState } from "react"
import Tag from "../components/Tag"



const SkillsLayout = () => {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "ReactJS",
    "NextJS",
    "Javascript",
    "Typescript",
    "Astro",
    "Stitches",
    "Python",
    "C/C++",
    "Embedded System",
    "PHP",
    "Photoshop",
    "Figma"
  ])
  const [currentTag, setCurrentTag] = useState(9)

  return (<Wrapper>
    <Content>
      <TagsWrapper>
    {skills.map((skill, index) => {
      if (index == currentTag) {
        setTimeout(() => {
          setCurrentTag((currentTag + 1) % skills.length)
        },300)
        return <Tag content={skill} key={skill} mode="animate" />
      }
      return <Tag content={skill} key={skill}/>
  })}
      </TagsWrapper>
    </Content>
  </Wrapper>)
}

const Wrapper = styled("div", {
  height: "100vh",
  width: '100vw',
  display: "grid",
  placeItems: "center",
  perspective: "1003px",
  animation: `${shakingAppear} 100ms`

})

const Content = styled("div", {
  maxWidth: "$maxBound",
  margin: "0 auto",
  transform: "rotateY(30deg) translateX(80px)"
})

const TagsWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$x4",
  justifyContent: "center"
})

export default SkillsLayout