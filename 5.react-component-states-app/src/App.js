// Comment.js
import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      newTitle: 'Default Text', // Initialize with default text
    };
  }

  handleTitleSubmit = () => {
    // Handle the submission of the input box here
    // You can issue an AJAX request to change the name in the database
    console.log('Submitted new title:', this.state.newTitle);
  }

  handleTitleChange = (e) => {
    // Update the newTitle state with the value entered by the user in the form
    this.setState({ newTitle: e.target.value });
  }

  changeComponent = () => {
    // Toggle the 'show' state variable to switch between heading and input box
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show, newTitle } = this.state;

    // Based on the 'show' state, either display a Form with an input box or a Button with the heading
    const clickableTitle = show ? (
      <Form inline onSubmit={this.handleTitleSubmit}>
        <FormGroup controlId="formInlineTitle">
          <FormControl
            type="text"
            value={newTitle}
            onChange={this.handleTitleChange}
          />
        </FormGroup>
      </Form>
    ) : (
      <div>
        <Button bsStyle="link" onClick={this.changeComponent}>
          <h3>{newTitle}</h3>
        </Button>
      </div>
    );

    return (
      <div className="comment">
        {clickableTitle}
      </div>
    );
  }
}

export default Comment;
