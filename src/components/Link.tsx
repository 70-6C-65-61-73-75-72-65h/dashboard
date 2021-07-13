import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";

interface Props {
  [index: string]: any;
}

export default function Link(props: Props): ReactElement {
  return (
    <a
      href={props?.href}
      onClick={props?.onClick}
      className={classNames([
        props.className || "link",
        props.white && "white",
        props.icon && "with-icon",
        props.vertical && "vertical",
      ])}
    >
      {props.icon && <img src={props.icon} />}
      {props.children}
    </a>
  );
}
