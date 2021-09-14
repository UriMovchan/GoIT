import { Component } from "react";

class Input extends Component {
  render() {
    return <input {...this.props} className="input" />;
  }
}

export default Input;
