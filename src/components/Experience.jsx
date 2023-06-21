import { useState } from "react";
import styled from "styled-components";
import { ArrowOutward, FiberManualRecord } from '@mui/icons-material';

const ExperienceContainer = styled.div`
	padding-top: 24px;
`
const ExperienceWrapper = styled.div`
	align-items: flex-start;
	display: flex;
	gap: 36px;
`
const DateContainer = styled.div`
	color: rgba(250, 250, 250);
	display: flex;
	font-size: 12px;
	gap: 12px;
	padding-top: 2px;

	hr {
		background-color: rgba(250, 250, 250, .5);
		border: none;
		height: 1px;
		width: 16px;
	}
`

const JobDescContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const PositionContainer = styled.div`
	display:flex;
	align-items: flex-end;
	gap: 12px;
	padding-bottom: 16px;

	svg {
		max-width: 8px;
		max-height: 8px;
		padding-bottom: 6px;
	}
`

const Position = styled.h3`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 0px;
	margin-top: 0;
`

const Company = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	gap: 4px;
	color: rgba(250, 250, 250);
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 0px;
	margin-top: 0;
	text-decoration: none;

	svg {
		position: absolute;
		top: -4px;
		right: -24px;
		max-height: 18px;
		max-width: 18px;
	}
`

const Desc = styled.p`
	color: rgba(250, 250, 250, .5);
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 8px;
	margin-top: 0;
`

const TechContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 6px;
	padding-top: 18px;
`

const Tech = styled.p`
	color: rgba(250, 250, 250);
	background: rgba(250, 250, 250, .2);
	font-size: 14px;
	font-weight: 400;
	padding: 6px 12px 8px 12px;
	border-radius: 24px;
	margin-bottom: 8px;
	margin-top: 0;
`

// eslint-disable-next-line react/prop-types
const Experience = ({ dateStart, dateEnd, position, company, companyWeb, desc, technologies }) => {

	const [companyLink, setCompanyLink] = useState(false)

	return ( 
		<ExperienceContainer>
			<ExperienceWrapper>
				<DateContainer>
					{dateStart} <hr/> {dateEnd ? dateEnd : 'PRESENT'}
				</DateContainer>
				<JobDescContainer>
					<PositionContainer>
						<Position>{position}</Position>
						<FiberManualRecord />
						<Company 
							href={companyWeb ? companyWeb : '#'}
							target="_blank"
							rel="noopener noreferrer"
							onMouseEnter={() => setCompanyLink(true)} 
							onMouseLeave={() => setCompanyLink(false)}
						>{company} {companyLink && <ArrowOutward />}
						</Company>
					</PositionContainer>
					<Desc>{desc}</Desc>
					<TechContainer>
						{technologies.map(technology => <Tech>{technology}</Tech>)}
					</TechContainer>
				</JobDescContainer>
			</ExperienceWrapper>
		</ExperienceContainer>
	);
}
 
export default Experience;