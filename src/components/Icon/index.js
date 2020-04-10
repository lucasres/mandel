import React from 'react';

export default function Icon(props) {
  return (
    <div className="icon-container" onClick={props.onClick}>
        {props.children}
    </div>
  );
}
