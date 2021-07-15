import Date from "@src/components/Date";

import React, { ReactElement } from "react";

interface Props {
  [index: string]: any;
}

export default function SessionDate(props: Props): ReactElement {
  return (
    <div className="sessions-date">
      <div className="narrowing-date">{props.narrowingDate}</div>
      <Date day={props.day} month={props.month} />
    </div>
  );
}
