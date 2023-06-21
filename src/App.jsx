import { } from 'react'
import styled from 'styled-components'
import MainDescription from './components/MainDescription'
import Footer from './components/Footer'
import Description from './components/Description'
import Experience from './components/Experience'

const Container = styled.div`
  margin-left: 96px;
  margin-right: 96px;
  padding-left: 96px;
  padding-right: 96px;
`

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(2, 1fr);
`

const Static = styled.div`
  padding-top: 96px;
`

const Scrolleable = styled.div`
  padding-top: 96px;
`



function App() {

  return (
    <Container>
      <Wrapper>
        <Static>
          <MainDescription />
          <Footer />
        </Static>
        <Scrolleable>
          <Description />
          <Experience 
            dateStart={2021}
            position={'Web UI Developer'}
            company={'Globant'}
            companyWeb={'https://www.globant.com/'}
            desc={'Update of components based on business requirements and design, update project style and themes based on Design System, continue communication with design team regarding possible issues, accessibility and design fixes.'}
            technologies={['React', 'JavaScript', 'TypeScript', 'StyledComponents', 'Sass', 'CSS3', 'HTML5']}
          />
        </Scrolleable>
      </Wrapper>
    </Container>
  )
}

export default App
