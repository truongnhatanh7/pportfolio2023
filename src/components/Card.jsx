import { styled } from "../design/stitches.config"

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
})

const Image = styled("img", {

})

const Content = styled("div", {
  marginTop: "$x6",
})

const Title = styled("h1", {
  fontWeight: "$semiBold",
  fontSize: "$24px",
})

export default Card;
