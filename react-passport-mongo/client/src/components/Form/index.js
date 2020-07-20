import React from "react";
import styles from './style.module.css';


// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" style={styles.input} {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" style={styles.input} {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={styles.button}
    // {{ float: "right", marginBottom: 10 }} 
    className={`btn btn-${ props.theme ? props.theme : "success"}`}>
      {props.children}
    </button>
  );
}
