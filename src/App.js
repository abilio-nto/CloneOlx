import { React } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Rotas from './Routes';
const App = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Rotas />
      </Template>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
