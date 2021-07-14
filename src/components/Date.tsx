import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";

interface Props {
  [index: string]: any;
}

export default function Date(props: Props): ReactElement {
  return (
    <div className={classNames(["date", props.className])}>
      <div className="date-day">{props.day}</div>
      <div className="date-month">{props.month}</div>
    </div>
  );
}
