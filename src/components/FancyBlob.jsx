import { styled, keyframes } from "../design/stitches.config"

const FancyBlob = () => {
  return (<Wrapper>
    <ContentWrapper>
      <Title>
        ANH TRUONG
      </Title>
    </ContentWrapper>
  </Wrapper>)
}

const fancyBlobAnimation = keyframes({
  "0%": {
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% "
  },
  "25%": {
    borderRadius: "30% 70% 26% 74% / 30% 57% 43% 70% "

  },
  "50%": {
    borderRadius: "56% 44% 26% 74% / 80% 57% 43% 20% ",
  },
  "75%": {
    borderRadius: "74% 26% 69% 31% / 50% 57% 43% 50% "

  },
  "100%": {
    borderRadius: "21% 79% 7% 93% / 50% 57% 43% 50%"

  }
})

const Wrapper = styled("div", {
  margin: "auto",
  width: "70vw",
  height: "70vh",
  background: "red",
  background: "linear-gradient(to right, $background, $primary)",
  animation: `${fancyBlobAnimation} 5s infinite alternate ease-in-out`,
  display: "grid",
  placeItems: "center",
  "@tablet": {
    width: "90vw"
  }
})

const ContentWrapper = styled("div", {

})

const Title = styled("h1", {
  fontSize: "$48px",
  backgroundClip: "text",
  letterSpacing: 8

})

const Description = styled("p", {

})

export default FancyBlob;