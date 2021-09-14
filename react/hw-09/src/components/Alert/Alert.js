import { createRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAlertText } from "redux/alert/alertSelector";

function Alert() {
  const alertRef = createRef(null);
  const alertMessage = useSelector(selectAlertText);

  useEffect(() => {
    if (alertMessage) {
      const alert = alertRef.current.classList;

      setTimeout(() => {
        alert.add("mounted");
      }, 200);

      setTimeout(() => {
        alert.add("closing");
      }, 3000);
    }
  }, [alertRef, alertMessage]);

  return (
    <>
      {alertMessage && (
        <div className="alert" ref={alertRef}>
          {alertMessage}
        </div>
      )}
    </>
  );
}

export default Alert;
