import { Component, createRef } from "react";

class Alert extends Component {
  alertRef = createRef();

  componentDidMount() {
    const alert = this.alertRef.current.classList;
    setTimeout(() => {
      alert.add("mounted");
    }, 200);

    setTimeout(() => {
      alert.add("closing");
    }, 3000);
  }

  render() {
    return (
      <div className="alert" ref={this.alertRef}>
        Contact already exist
      </div>
    );
  }
}

export default Alert;
