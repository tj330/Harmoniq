import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Piano from "./instruments/Piano";
import Home from './instruments/Home';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container>
        <BrowserRouter className="mb-auto">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/piano" element={<Piano/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
