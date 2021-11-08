import React from 'react';
import { Container } from './App.styled';
import { Test } from '../components/Test/Test';
import  { Header } from "../components/Header/Header";

export default function App() {
    return (
    <Container>
       <Header /> 
      <Test/>
     </Container>
  )
}