import { styled } from "@stitches/react"


const Button = () => {
  return (<>
  <Wrapper>
    this is a button in react
    <Title>
      Ravolution
    </Title>
  </Wrapper>
  </>
  
  )
}

const Wrapper = styled("button", {
  background: "$darkGray",
  padding: "$x6",
  border: "2px solid yellow"
})

const Title = styled("h1", {
  color: "red",
})

export default Button;