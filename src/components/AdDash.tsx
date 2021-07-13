import React, { ReactElement } from "react";
import ad from "@static/images/ad.svg";
import time from "@static/icons/time.svg";
import Link from "@src/components/Link";

const advertisment = {
  title: "UX Research - Week 3",
  topic: "CERTIFICATE UX/UI design",
  status: "In Progress",
  // 8 april
  date: new Date(Date.UTC(2021, 3, 8, 0, 0, 0)).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  }),
};

interface Props {
  [index: string]: any;
}

export default function AdDash(props: Props = advertisment): ReactElement {
  return (
    <div className="dash-advertisment">
      <div className="className">{props.status}</div>
      <Link>Join Now</Link>
    </div>
  );
}
