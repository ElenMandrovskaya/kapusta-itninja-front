import React from 'react';
import { Container } from './App.styled';
import { Test } from '../components/Test/Test';
import { Balance } from '../components/Balance/Balance';
import user from '../data/user.json'

export default function App() {
    return (
    <Container>
      {/* <Test/> */}
      <Balance value={user.balance}/>
    </Container>
  )
}