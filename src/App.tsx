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
        <Typography>Portfolio of work and projects by Unegma.</Typography>

        <br/>

        <Typography variant="h4">Unegma</Typography>
        <p><a href="https://unegma.com" target="_blank" className="hi">Unegma.com</a><span className='threeDee'/></p>
        <p><a href="https://unegma.xyz" target="_blank" className="hi">Unegma Blog</a></p>
        <p><a href="https://www.youtube.com/channel/UC_B-UUwH1zLHD7im62m_gzw" target="_blank" className="hi">Unegma YouTube</a><span className='video'/><span className='web3'/></p>
        <p><a href="https://unegma.place" target="_blank" className="hi">Unegma.place</a> - 3D scans of venues<span className='threeDee'/><span className='metaverse'/><span className='vr'/></p>
        <p><a href="https://unegma.store" target="_blank" className="hi">Unegma.store</a> - 3D assets for stores (POC)<span className='threeDee'/><span className='metaverse'/><span className='ar'/></p>
        <p><a href="https://geo.unegma.science" target="_blank" className="hi">Geo.unegma.science</a> - 3D scans of rocks<span className='threeDee'/><span className='ar'/></p>

        <br/>
        <br/>

        <Typography variant="h4">Projects</Typography>
        <p><a href="https://mynifty.gallery" target="_blank" className="hi">Mynifty.gallery</a> - A 3D gallery for your NFTs and POAPs<span className='threeDee'/><span className='vr'/><span className='web3'/><span className='nft'/></p>
        <p><a href="https://nifty.rip" target="_blank" className="hi">Nifty.rip</a> - A 3D gallery of dead NFTs (needs fixes)<span className='threeDee'/><span className='vr'/><span className='web3'/><span className='nft'/></p>
        <p><a href="https://thursdao.xyz" target="_blank" className="hi">Thursdao.xyz</a> - A 3d site for a coworking space<span className='threeDee'/><span className='vr'/><span className='web3'/></p>
        <p><a href="https://fridao.xyz" target="_blank" className="hi">Fridao.xyz</a> - A 3d site for a coworking space<span className='threeDee'/><span className='vr'/><span className='web3'/></p>
        <p><a href="https://arkcoworking.space" target="_blank" className="hi">arkcoworking.space</a> - A 3d site for a coworking space<span className='threeDee'/><span className='vr'/></p>
        <p><a href="https://mtkn.unegma.art" target="_blank" className="hi">mtkn.unegma.art</a> - A faucet for distributing Web3 tokens<span className='web3'/><span className='nft'/></p>

        <br/>
        <br/>

        <Typography variant="h4">Partners</Typography>
        <p><a href="https://www.meetup.com/ethereum" target="_blank" className="hi">Ethereum London</a> - Web3 Events<span className='web3'/></p>
        <p><a href="https://www.meetup.com/metafashion" target="_blank" className="hi">Metafashion</a> - Metaverse Events<span className='metaverse'/></p>
        <p><a href="https://twitter.com/MondaoMeetup" target="_blank" className="hi">MonDAO</a> - Web3 Meetup<span className='web3'/></p>
        <p><a href="https://twitter.com/ThursdaoLondon" target="_blank" className="hi">ThursDAO</a> - Web3 Coworking<span className='web3'/></p>

        <br/>
        <br/>

        <Typography variant="h4">POCs</Typography>
        <p><a href="https://rain-examples.unegma.work" target="_blank" className="hi">Rain Protocol POCs</a> - POCs for a Web3 toolkit<span className='web3'/><span className='nft'/></p>
        <p><a href="https://shopping.unegma.work" target="_blank" className="hi">Shopping POC</a> - A POC for showing seller/buyer transactions</p>
        <p><a href="https://applications.unegma.work" target="_blank" className="hi">Job Applications POC</a> - A short POC for showing ordering of job applicants</p>
        <p><a href="https://tims-gallery.unegma.art" target="_blank" className="hi">Gallery POC</a> - A short POC for showing buying 3D NFTs<span className='threeDee'/><span className='web3'/><span className='nft'/></p>
        <p><a href="https://boutique.unegma.store" target="_blank" className="hi">Boutique Perfume POC</a> - A short POC for showing 3D Bottles<span className='threeDee'/><span className='ar'/></p>
        <p><a href="https://rotate.unegma.net" target="_blank" className="hi">Rotate.unegma.net</a> - A short POC for displaying NFTs<span className='web3'/><span className='nft'/></p>
        {/*<p><a href="https://eip.design" target="_blank" className="hi">EIP Design</a> - EIP Proposal builder for Ethereum</p>*/}

        <br/>
        <br/>

        <Typography variant="h4">Pitch Decks</Typography>
        <p><a href="" target="_blank" className="hi"></a>TBC</p>

        <br/>
        <br/>

        <Typography variant="h4">Other</Typography>
        <p><a href="https://zk.contact" target="_blank" className="hi">ZK Contact</a> - Projects in the Zero Knowledge Space<span className='zkp'/><span className='web3'/></p>
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
