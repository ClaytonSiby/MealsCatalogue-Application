import React from 'react';
import { Container } from 'react-bootstrap';
import RoutesGenerator from '../Pages/RoutesGenerator';
import NavigationBar from './NavigationBar';

const MainContainer = () => (
  <Container>
    <NavigationBar />
    <RoutesGenerator />
  </Container>
);

export default MainContainer;
