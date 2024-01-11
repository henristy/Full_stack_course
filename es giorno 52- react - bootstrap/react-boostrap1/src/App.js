
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import MyFooterComponent from './components/MyFooterComponent';
import Welcome from './components/WelcomeComponent';
import AllTheBooksComponent from './components/AllTheBooksComponent';
import Container  from 'react-bootstrap/Container';
function App() {
  return (
    <>
      <NavBarComponent navItems ={['Home','About','Browse']} />
      <Container>
        <Welcome />
        <AllTheBooksComponent /> 
        
      </Container>
      <MyFooterComponent />
    </>
  );
}

export default App;
