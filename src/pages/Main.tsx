import ProgramsDash from "@src/components/ProgramsDash";
import AdDash from "@src/components/AdDash";
import SessionsDash from "@src/components/SessionsDash";
import Messaging from "@src/components/Messaging";
import Greeting from "@src/components/Greeting";
import React, { ReactElement } from "react";

interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <div className="dash-page">
      <div className="dash-box">
        <Greeting />
        <ProgramsDash />
        <AdDash />
        <SessionsDash />
      </div>
      {/* if mediaquery less then 1440px - display none for msgs */}
      <Messaging />
    </div>
  );
}
