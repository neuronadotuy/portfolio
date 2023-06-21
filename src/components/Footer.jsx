import styled from "styled-components";
import { GitHub, LinkedIn } from '@mui/icons-material';

const ContactInfoContainer = styled.div`
  bottom: 48px;
  color: rgba(250, 250, 250, 0.498);
  font-size: 12px;
  position: absolute;
`
const ContactEmail = styled.p``

const Links = styled.div`
	display: flex;
	gap: 16px;
`

const Link = styled.a`
text-decoration: none;
color: inherit;

svg{
	transition: all ease-in-out .3s;
	color: rgba(250, 250, 250, 0.5);
	&:hover {
		color: rgba(250, 250, 250);
	}
}
`

const Footer = () => {
	return ( 
		<ContactInfoContainer>
			<Links>
				<Link href="#"><GitHub /></Link>
				<Link href="#"><LinkedIn /></Link>
			</Links>
			<ContactEmail>nicolaswt@gmail.com</ContactEmail>
		</ContactInfoContainer>
	);
}
 
export default Footer;