import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import {Container} from "@material-ui/core";

function App() : JSX.Element {
  return (
    <div className="App">
      <Router>
      <AppBar style={{ background: '#ffffff' }} position="static">
        <Toolbar>
          <Typography variant="h6" >
            <Link to="/" className="logo">
              Unegma.Work
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {/*<Switch>*/}
      {/*  <Route exact path="/" component={DashboardPage} />*/}
      {/*  <Redirect to="/" />*/}
      {/*</Switch>*/}

      <Container className="site-container" maxWidth="sm">
        <Typography>This site contains links to various Projects and Proofs of Concepts (POCs).</Typography>

        <br/>

        <Typography variant="h6">Projects</Typography>
        <p><a href="https://unegma.com" target="_blank" className="hi">Unegma.com</a></p>
        <p><a href="https://nifty.help" target="_blank" className="hi">WTF is an NFT</a> - hackathon build</p>

        <br/>

        <Typography variant="h6">POCs</Typography>
        <p><a href="https://shopping.unegma.work" target="_blank" className="hi">Shopping POC</a> - A POC for showing transactions between buyers and sellers</p>
        <p><a href="https://applications.unegma.work" target="_blank" className="hi">Job Applications POC</a> - A short POC for showing ordering of job applicants</p>
        <p><a href="https://eip.design" target="_blank" className="hi">EIP Design</a> - EIP Proposal builder for Ethereum</p>

        <br/>

      </Container>

      </Router>
    </div>
  );
}

export default App;
