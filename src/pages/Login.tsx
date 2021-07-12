import Time from "@src/icons/time";
import React, { ReactElement } from "react";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <div className="login">
      <Time />
    </div>
  );
}
