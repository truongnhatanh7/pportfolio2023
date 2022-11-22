import { styled, shakingAppear } from "../design/stitches.config"
import FancyBlob from "../components/FancyBlob"

const HomeLayout = () => {
  return (<Wrapper>
    <FancyBlob />
  </Wrapper>)
}

const Wrapper = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "grid",
  placeItems: "center",
  animation: `${shakingAppear} 100ms`
})

export default HomeLayout;