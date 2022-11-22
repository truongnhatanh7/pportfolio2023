import { styled, keyframes } from "../design/stitches.config"

const Card = (props) => {

  const handleCardClick = () => {
    location.href = props.url
  }

  return (<Wrapper
      onClick={handleCardClick}
    >
    <ImageWrapper>
      {
        props.image === "" ?
        <ImagePlaceholder /> :
        <Image src={props.image} alt="card-image" />
      }
    </ImageWrapper>
    <Content>
      <Title>{props.title}</Title>
    </Content>
  </Wrapper>)
}

const omgAnimation = keyframes({
  "0%": {
  transform: "rotateY(0deg) scale(0.9)",

  },
  "25%": {
    transform: "rotateY(6deg) scale(0.9)",

  },
  "50%": {
    transform: "rotateY(70deg) scale(0.9)",
  },
  "75%": {
    transform: "rotateY(6deg) scale(0.9)",

  },
  "100%": {
    transform: "rotateY(0deg) scale(0.9)",
  }
})

const Wrapper = styled("div", {
  padding: "$x4",
  background: "$gray",
  borderRadius: 8,
  transition: ".3s",
  transform: "rotateY(2deg) scale(0.9)",
  "&:hover": {
    opacity: .8,
    transform: "rotateY(0deg)",
    cursor: "pointer",
  },
  animation: `${omgAnimation} 6s infinite alternate ease-in-out`,

  "@tablet": {
    animation: "none"
  }

})

const ImageWrapper = styled("div", {

})

const ImagePlaceholder = styled("div", {
  width: 280,
  height: 280,
  maxWidth: 300,
  background: "linear-gradient(to top, $gray, $primary)",
  borderRadius: 8,
  "@tablet": {
    display: "none",
  },

})

const Image = styled("img", {

})

const Content = styled("div", {
  marginTop: "$x6",
  width: "100%",
  "@tablet": {
    marginTop: 0,
  }
})

const Title = styled("h1", {
  width: "100%",
  maxWidth: "100%",
  fontWeight: "$semiBold",
  fontSize: "$24px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "@tablet": {
    fontSize: '$18px'
  }
})

export default Card;
