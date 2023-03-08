import React from "react";
import "../styles/Loader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Loader() {
  return (
    <div className="spinner">
      <FontAwesomeIcon icon={faCircleNotch} size="5x" className={"fa-spin"} />
    </div>
  );
}

export default Loader;
