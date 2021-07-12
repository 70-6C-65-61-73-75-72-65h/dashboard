import ProgramsDash from "@src/components/ProgramsDash";
import React, { ReactElement } from "react";

interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <div>
      <ProgramsDash />
    </div>
  );
}
