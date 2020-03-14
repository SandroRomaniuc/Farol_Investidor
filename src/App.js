import React from 'react';
import { BrowserRouter } from "react-router-dom";

//Componentes
import { Sidebar, Header } from "./components";

// Styles
import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
      </Wrapper>
    </BrowserRouter>

  );
}

export default App;
