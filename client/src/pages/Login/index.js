import React, { Children } from 'react';
import './styles.css';

import logoImage from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';


export default function Login(){
    return (
            <div className="logint-conatiner">
                <section className="from">
                    <img src={logoImage} alt="Erudio Logo"></img>
                    <form>
                        <h1>Access your Account</h1>
                        <input placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <button className="button" type="submit">Login</button>
                    </form>
                </section>

                <img src={padlock} alt="Login"></img>

            </div>
    )
}