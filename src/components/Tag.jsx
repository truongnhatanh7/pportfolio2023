import { styled } from "../design/stitches.config"

const Tag = (props) => {
  return (<Wrapper mode={props.mode}>
    {props.content}
  </Wrapper>)
}

const Wrapper = styled("div", {
  padding: "$x3 $x6",
  color: "$primary",
  background: "$gray",
  borderRadius: 4,
  transition: ".3s",
  variants: {
    mode: {
      animate: {
        fontWeight: "bold",
        transform: "scale(1.1) translateY(4px)"
      }
    }
  }
})

export default Tag