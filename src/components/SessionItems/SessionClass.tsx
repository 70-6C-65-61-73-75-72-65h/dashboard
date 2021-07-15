import React, { ReactElement } from "react";

interface Props {
  [index: string]: any;
}

export default function SessionClass(props: Props): ReactElement {
  return (
    <div className="sessions-class">
      <div className="sessions-class__title">{props.title}</div>
      <div className="sessions-class__topic">{props.topic}</div>
    </div>
  );
}
