import { styled } from "../design/stitches.config"

const Card = (props) => {
  return (<Wrapper>
    <ImageWrapper>
      <Image src={props.image} alt="card-image" />
    </ImageWrapper>
    <Content>
      <Title>{props.title}</Title>
    </Content>
  </Wrapper>)
}

const Wrapper = styled("div", {

})

const ImageWrapper = styled("div", {

})

const Image = styled("img", {

})

const Content = styled("div", {

})

const Title = styled("h1", {

})

export default Card;
