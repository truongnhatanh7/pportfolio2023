import { styled, keyframes } from "../design/stitches.config"
import { useState, useRef } from "react"

const AboutLayout = () => {


  return (<Wrapper
  >
    <TryHover>
      TRY TO HOVER THE CONTENT BELOW
    </TryHover>
    <P>
    I'm currently studying Software Engineering at RMIT Vietnam University, <br></br>former Intern frontend web developer at SpiritLabs. <br></br>Now I'm working at SKDV startup as frontend web developer and R&D.<br></br> My skills are very dynamic and can adapt very quickly in any working environments.
    </P>
    <ImageWrapper
      css={{
        height: 200,
        width: 300,
      }}
    >
      <Image src="/avatar.jpg"/>
    </ImageWrapper>

  </Wrapper>)
}

const Wrapper = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "grid",
  placeItems: "center",
  perspective: "100px",

})

const TryHover = styled("div", {
  color: "$primary",
  position: "absolute",
  top: 120,
  opacity: .5,
})

const P = styled("p", {
  display: "block",
  width: 400,
  color: "$primary",
  zIndex: 1,
  transform: "rotateY(6deg) translateX(-50px)",
  background: "$gray",
  padding: "$x6",
  transition: ".6s",
  borderRadius: 2,
  "&:hover": {
    transform: "rotateY(0deg) translateX(-50px) scale(1.2)",
    borderRadius: 16,
  }

})

const ImageWrapper = styled("div", {
  height: 400,
  width: 400,
  overflow: "hidden",
  position: "absolute",
  zIndex: 0,
  transform: "rotateY(6deg) translateX(140px)",
  borderRadius: 2,
  transition: ".6s",
  "&:hover": {
    transform: "rotateY(0deg) translateX(180px)",
  }
})

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

const Content = styled("div", {

})





export default AboutLayout;