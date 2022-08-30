import React from "react";
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footer}>
      <h1>The Generics</h1>
      <span>
      <img
        src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
        alt="utube" width="40"
      />
      <img
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        alt="spotify" width="40"
      />
      <img
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        alt="fb" width="40"
      />
      </span>
    </div>
  );
}