import styled from "styled-components";

const Name = styled.h1`
  color: rgb(250, 250, 250);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1.2px;
  margin: 0;
  padding-bottom: 12px;
`

const Position = styled.h2`
  color: rgba(250, 250, 250, 0.8);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0;
  padding-bottom: 24px;

  a {
    color: rgba(250, 250, 250, 0.9);
    font-weight: 600;
    text-decoration: none;
  }
`

const ShortDesc = styled.p`
  width: 80%;
  color: rgba(250, 250, 250, 0.6);
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 6px;
`

const Navigation = styled.ul`
  width: 125px;
  color: rgba(250, 250, 250, 0.6);
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style-type: none; 
  margin: 0;
  padding: 48px 0 0 0;
`

const NavItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
`

const NavLink = styled.a`
  color: rgba(250, 250, 250, .9);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const NavItemDecoration = styled.hr`
  background-color: rgba(250, 250, 250, .9);
  border: none;
  height: 1px;
  transition: ease-in-out all .3s;
  width: 24px;

  ${NavItem}:hover & {
    width: 48px;
  }
`

const MainDescription = () => {
	return ( 
		<>
		<Name>Nicolás Oten</Name>
		<Position>Web UI Developer at <a href='#'>Globant</a></Position>
		<ShortDesc>
		Front-End developer and graphic designer with a strong focus on creating exceptional User Interfaces (UI).
		</ShortDesc>
		<ShortDesc>
		My expertise lies in crafting visually appealing and intuitive websites that provide seamless user experiences.
		</ShortDesc>
		{/* <Navigation>
			<NavItem>
				<NavItemDecoration />
				<NavLink>About</NavLink>
			</NavItem>
			<NavItem>
				<NavItemDecoration />
				<NavLink>Experience</NavLink>
			</NavItem>
			<NavItem>
				<NavItemDecoration />
				<NavLink>Projects</NavLink>
			</NavItem>
		</Navigation> */}
		</>
	);
}
 
export default MainDescription;