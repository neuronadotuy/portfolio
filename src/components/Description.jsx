import styled from "styled-components";

const Desc = styled.p`
  color: rgba(250, 250, 250, 0.6);
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding-bottom: 12px;

	span {
		color: rgba(250, 250, 250, 0.9);
		font-weight: 600;
	}
`

const Description = () => {
	return ( 
		<>
			<Desc>I am a self-taught front end developer who started in January 2021 as front end developer at Wunderman Thompson while in parallel did an internship in Altimetrik with focus on React, currently working as <span>Web UI Developer at Globant</span>.</Desc>
			<Desc>I work under agile methodologies like scrum and tools such Trello and Jira. Passionate for new technologies, likes to work in teams; always trying to learn new things everyday.</Desc>
			<Desc>Im proficient in <span>HTML/CSS</span>, <span>JavaScript</span>, TypeScript, <span>React</span>, Material UI, Sass, Styled Component, BEM methodology, Git, Jira and Slack</Desc>
			<Desc>When I am not coding, I’m usually running around Azeroth seeking for new adventures.</Desc>
		</>
	);
}
 
export default Description;