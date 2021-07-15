import React, { ReactElement } from "react";

interface Props {
  time: string;
}

export default function SessionTime({ time }: Props): ReactElement {
  return <div className="sessions-time">{time}</div>;
}
