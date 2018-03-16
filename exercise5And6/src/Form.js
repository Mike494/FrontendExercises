import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };


    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="Date"
          hintText="Date"
          floatingLabelText="Date"
          value={this.state.Date}
          onChange={e => this.change(e)}
          errorText={this.state.DateError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="Description"
          hintText="Description"
          floatingLabelText="Description"
          value={this.state.Description}
          onChange={e => this.change(e)}
          errorText={this.state.DescriptionError}
          floatingLabelFixed
        />
        <br />
        <br />
        <RaisedButton label="Add" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
