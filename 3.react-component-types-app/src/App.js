import React, { Component } from 'react';

// Stateless functional component
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <nav>
        <ul>
          <li><a href="#">Types of React Components</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

// Stateful class component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>Stateful Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

// HOC (Higher Order Component) that adds a "clickCount" prop to a component
const withClickCount = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clickCount: 0
      };
    }

    handleClick = () => {
      this.setState({
        clickCount: this.state.clickCount + 1
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          clickCount={this.state.clickCount}
          onClick={this.handleClick}
        />
      );
    }
  }
}

// Component that receives "clickCount" and "onClick" props
const Button = ({ clickCount, onClick }) => {
  return (
    <button onClick={onClick}>
      Clicked {clickCount} times
    </button>
  );
}

// Wrap Button component with withClickCount HOC
const ButtonWithClickCount = withClickCount(Button);

// Parent component that renders all three components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My App" />
        <Counter />
        <h2>Higher Order Component</h2>
        <ButtonWithClickCount />
        <h2>Stateless Functional Component</h2>
        <p>This is a stateless functional component.</p>
      </div>
    );
  }
}

export default App;
