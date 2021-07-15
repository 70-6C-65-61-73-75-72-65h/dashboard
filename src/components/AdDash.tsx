import React, { ReactElement } from "react";
import ad from "@static/images/ad.png";
import Link from "@src/components/Link";
import SuccessFlag from "@src/components/SuccessFlag";
import Date from "./Date";

interface Props {
  [index: string]: any;
}

export default function AdDash(props: Props): ReactElement {
  return (
    <div className="dash-advertisment">
      <div className="dash-advertisment__main-block">
        <div className="dash-advertisment__illustration">
          <SuccessFlag vertical className="ad-flag">
            Checked In
          </SuccessFlag>
          <img src={ad} />
        </div>
      </div>
      <div className="dash-advertisment__card">
        <div className="dash-advertisment__content status left bottom with-icon red">
          <img src={props.status.icon} alt="" />
          <div className="with-icon space-beetwen-4">{props.status.text}</div>
        </div>
        <div className="dash-advertisment__content left top">
          <div className="dash-advertisment__title">{props.title}</div>
          <div className="dash-advertisment__topic">{props.topic}</div>
        </div>
        <Date
          className="dash-advertisment__content right top"
          day={props.date.day}
          month={props.date.month}
        />

        <Link className="dash-advertisment__content join right bottom">
          Join Now
        </Link>
      </div>
      {/* <SuccessFlag>Checked In</SuccessFlag> */}
      {/* <div className="className">{props.status}</div> */}
      {/* <Link>Join Now</Link> */}
    </div>
  );
}
