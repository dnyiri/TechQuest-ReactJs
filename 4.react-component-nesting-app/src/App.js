import React, { useState } from 'react';
import './App.css';

// Parent component
const App = () => {
  const [selectedVersion, setSelectedVersion] = useState(1);

  const renderVersion = () => {
    switch (selectedVersion) {
      case 1:
        return <Version1 />;
      case 2:
        return <Version2 />;
      case 3:
        return <Version3 />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>React Component Nesting</h1>
      <section className="section">
        <h2>Nesting Without Using Children</h2>
        <button onClick={() => setSelectedVersion(1)}>Select</button>
      </section>
      <section className="section">
        <h2>Nesting Using Children</h2>
        <button onClick={() => setSelectedVersion(2)}>Select</button>
      </section>
      <section className="section">
        <h2>Nesting Using Props</h2>
        <button onClick={() => setSelectedVersion(3)}>Select</button>
      </section>
      {renderVersion()}
    </div>
  );
}



// Child components

// Version 1: Nesting without using children
const Version1 = () => {
  return (
    <div className="version">
      <Header />
      <Content />
      <h3>Pros:</h3>
      <ul>
        <li>Simple and straightforward</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Can become unwieldy with many nested components</li>
      </ul>
    </div>
  );
}

// Version 2: Nesting using children
const Version2 = ({ children }) => {
  return (
    <div className="version">
      {children}
      <h3>Pros:</h3>
      <ul>
        <li>More flexible than nesting without using children</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Can become difficult to manage with many nested components</li>
      </ul>
    </div>
  );
}

// Version 3: Nesting using props
const Version3 = ({ header, content }) => {
  return (
    <div className="version">
      {header}
      {content}
      <h3>Pros:</h3>
      <ul>
        <li>Explicit control over which child components are rendered</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Can become verbose with many nested components</li>
      </ul>
    </div>
  );
}

// Shared child components
const Header = () => {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
}

const Content = () => {
  return (
    <main>
      <p>Welcome to my app!</p>
    </main>
  );
}

export default App;
