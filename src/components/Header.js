import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <h1>Hello, I'm KrishnaKant Malviya</h1>
        <h3>💻 Web Developer 💻</h3>
        <div className="photo-placeholder"><img src='../../KK.jpeg' width='100px' alt='img'/></div>
      </div>
    </header>
  );
}

export default Header;
