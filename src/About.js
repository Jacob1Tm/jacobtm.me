import React from 'react';
import './styles/About.css';
import useStyles from "./styles/styles";




function About() {
    const classes = useStyles();
    return (
        <div className="About">
            <header className="About-header">
                <img src="https://avatars.githubusercontent.com/u/84023677?v=4" className={classes.avatar} alt="avatar" />
                <p className="About-sub-avatar-text">
                    Jacob.Tm
                </p>
                <h3 className="About-text">
                    tbh no idea what to put here maybe later...
                </h3>
            </header>
        </div>
    )
}

export default About;
