import React, { ReactElement } from "react";
import successVector from "@static/icons/success-vector.svg";
import classNames from "@src/utils/classNames";

interface Props {
  color?: "red" | "white" | "black";
  vertical?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function SuccessFlag(props: Props): ReactElement {
  return (
    <div
      className={classNames([
        "success-flag with-icon",
        props.className,
        props.color,
        props.vertical && "vertical",
      ])}
    >
      <img src={successVector} alt="success" />
      {props.children}
    </div>
  );
}
