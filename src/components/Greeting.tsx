import React, { ReactElement } from "react";
import customize from "@static/icons/customize.svg";
import Link from "@src/components/Link";

interface Props {}

export default function Greeting({}: Props): ReactElement {
  return (
    <div className="greeting">
      <div className="headline">Hello, Mia!</div>
      <Link icon={customize}>Customize</Link>
    </div>
  );
}
