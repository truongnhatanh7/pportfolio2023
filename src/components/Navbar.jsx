import { styled } from "../design/stitches.config"

const Navbar = () => {
  return (<Wrapper>
    <Content>
      <Name>
        <Link href="/">
        NANH
        </Link>
      </Name>

      <NavList>
          <Link href="/">
            <NavItem>
              HOME
            </NavItem>
          </Link>
          <Link href="/about">
            <NavItem>
              ABOUT
            </NavItem>
          </Link>
        <Link href="/skills">
            <NavItem>
              SKILLS
            </NavItem>
          </Link>
        <Link href="/projects">
            <NavItem>
              PROJECTS
            </NavItem>
          </Link>
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
  zIndex: 9999,
  
})

const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "$maxBound",
  margin: "0 auto",
  fontWeight: "$semiBold",
  "@tablet": {
    width: "90%",
  }
})

const Name = styled("div", {
  color: "$primary",
  transition: ".6s",
  "&:hover": {
    color: "white",
    transform: "scale(1.08)"
  },
  "@tablet": {
    display: "none",
  }
})

const NavList = styled("ul", {
  color: "$primary",
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  gap: "$x2",
  perspective: "1300px",
  perspectiveOrigin: "100% 50%",
  "@tablet": {
    gap: "$x1",
    margin: "0 auto",
    justifyContent: "space-between"
  }
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
    color: "white",
    cursor: "pointer",
    transform: "translateZ(8px) rotateY(-6deg)",
    width: "100%",
  },
  "&:hover:before": {
    width: "100%",
    background: "white",
    transform: "translateZ(36px) rotateY(-160deg)",
  },
})

const Link = styled("a", {
  color: "$primary",
  "@tablet": {
    flex: 1,
  }
})



export default Navbar;