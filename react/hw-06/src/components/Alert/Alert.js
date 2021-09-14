import { createRef, useEffect } from "react";

function Alert() {
  const alertRef = createRef(null);

  useEffect(() => {
    const alert = alertRef.current.classList;

    setTimeout(() => {
      alert.add("mounted");
    }, 200);

    setTimeout(() => {
      alert.add("closing");
    }, 3000);
  }, [alertRef]);

  return (
    <div className="alert" ref={alertRef}>
      Contact already exist
    </div>
  );
}

export default Alert;
