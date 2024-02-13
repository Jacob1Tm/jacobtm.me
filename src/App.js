import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from './styles/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import './styles/App.css';

function App() {
  const classes = useStyles();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setShowArrow(true);
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Button href="/" color="inherit">
              <Avatar alt="Jacob.Tm" src="https://avatars.githubusercontent.com/u/84023677?v=4" />
              <Typography variant="h6" className={classes.title}> Jacob.Tm </Typography>
            </Button>
            <Button className={classes.button} color="inherit" onClick={() => window.location.href = './about'}>About me</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path="/" element={
            <div>
              <header className={`${classes.header} App-header`}>
                <img src="https://avatars.githubusercontent.com/u/84023677?v=4" className={classes.logo} alt="logo" />
                <p className={classes.text}>
                  Jacob.Tm
                </p>
                <h3 className={classes.subtext}>
                  Young developer from Poland who loves to code.
                </h3>
                {showArrow && <ArrowDropDownIcon className="scroll-down-arrow" />}
              </header>
              <div className={classes.content}>
                <div className={classes.contentTitleWrapper}>
                  <content>
                    <h1 className={classes.contentTitle}>My projects!</h1>
                    <projects>
                      <div className={classes.projectContainer}>
                        <div className={classes.description}>
                          <h2>Jacob Bot</h2>
                          <p>My first ever project written in JavaScript using discord.js library.</p>
                          <p>It's a simple multifunctional Discord Bot i learned to code with</p>
                          <Button className={classes.buttonSourceCode} color="inherit" onClick={() => window.location.href = 'https://github.com/Jacob1Tm/Jacob-Bot'}>Source Code</Button>
                        </div>
                        <div className={classes.projectlogo}>
                          <img src="https://cdn.discordapp.com/icons/826740275460046858/6f793885d977772fadfc2846ae83c0c8.webp?size=1024&width=0&height=320" className={classes.projectlogo} alt="logo" />
                        </div>
                      </div>
                    </projects>
                  </content>
                </div>
                <div>
                  <footer>
                    <AppBar position="static">
                      <Toolbar className={classes.foot}>
                        <Typography variant="h6" className={classes.footerText}>Copyright © 2024 Jacob.Tm </Typography>
                        <Button className={classes.buttonFooter} color="inherit" onClick={() => window.location.href = 'https://github.com/Jacob1Tm/jacobtm.me'}>Source Code</Button>
                      </Toolbar>
                    </AppBar>
                  </footer>
                </div>
              </div>
            </div>
          } />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
