import React, { Component } from 'react'
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import {Main} from './layout/Main'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App
