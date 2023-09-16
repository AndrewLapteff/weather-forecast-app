import s from './App.module.css'
import styled from 'styled-components'

const AppWrapper = styled.div`
  background-color: #003f84;
  background-image: linear-gradient(62deg, #003f84 0%, #121415 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  background-color: #fff;

  border-radius: 2rem;

  @media (min-width: 300px) {
    width: 85%;
    height: 90%;
  }
  @media (min-width: 900px) {
    width: 50%;
    height: 50%;
  }
`
function App() {
  return (
    <AppWrapper>
      <Container></Container>
    </AppWrapper>
  )
}

export default App
