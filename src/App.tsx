import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import {Container, Divider} from "@material-ui/core";

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
        <p><a href="https://zk.contact" target="_blank" className="hi">ZK Contact</a> - The definitive list for projects in the Zero Knowledge Space</p>
        <p><a href="https://nifty.help" target="_blank" className="hi">WTF is an NFT</a> - Hackathon build</p>

        <br/>

        <Typography variant="h6">POCs</Typography>
        <p><a href="https://shopping.unegma.work" target="_blank" className="hi">Shopping POC</a> - A POC for showing transactions between buyers and sellers</p>
        <p><a href="https://applications.unegma.work" target="_blank" className="hi">Job Applications POC</a> - A short POC for showing ordering of job applicants</p>
        <p><a href="https://eip.design" target="_blank" className="hi">EIP Design</a> - EIP Proposal builder for Ethereum</p>

        <br/>

        <Typography variant="h6">Other</Typography>
        <p><a href="https://github.com/unegma" target="_blank" className="hi">Github</a> - Github Page</p>

        <br/><br/>

        <Divider/>

        <p><a href="https://unegma.com" target="_blank" className="hi">By Unegma</a></p>

        <Divider/>

        {/*<p>Who we have worked with</p>*/}

      </Container>

      </Router>
    </div>
  );
}

export default App;
