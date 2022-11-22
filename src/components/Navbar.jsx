import { styled } from "../design/stitches.config"

const Navbar = () => {
  return (<Wrapper>
    <Content>
      <Name>
        NANH
      </Name>

      <NavList>
        <NavItem>
          ABOUT
        </NavItem>
        <NavItem>
          SKILLS
        </NavItem>
        <NavItem>
          PROJECTS
        </NavItem>
      </NavList>
    </Content>
  </Wrapper>)
}

const Wrapper = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "$navbar$default",
  background: "$background",
})

const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "$maxBound",
  margin: "0 auto",
  fontWeight: "$semiBold"
})

const Name = styled("div", {
  color: "$primary"
})

const NavList = styled("ul", {
  color: "$primary",
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  gap: "$x2",
  perspective: "1300px",
  perspectiveOrigin: "100% 50%",
})

const NavItem = styled("li", {
  height: "100%",
  padding: "$x3",
  transition: ".2s",
  position: "relative",
  "&:before": {
    content: "",
    transition: ".6s",
    position:  "absolute",
    bottom: 2,
    width: 0,
    height: 2,
    background: "$primary",
  },
  "&:hover": {
    cursor: "pointer",
    transform: "translateZ(48px) rotateY(-26deg)",
    width: "100%",
  },
  "&:hover:before": {
    width: "100%",
    transform: "translateZ(36px) rotateY(-160deg)",

  }
})



export default Navbar;