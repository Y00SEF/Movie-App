import { useState } from "react";
import "./Loading.css";

export default function Loading() {

  return (
    <div className="loading-container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div
          className="spinner-border text-primary mb-3"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="text-light">Loading Movies...</h3>
        <p className="text-white">
          Please wait while we fetch the latest movies for you.
        </p>
      </div>
    </div>
  );
}
