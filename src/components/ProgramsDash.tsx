import React, { ReactElement } from "react";
import DashHeader from "@src/components/DashHeader";
import ProgramItem from "@src/components/ProgramItem";

import { programs } from "@src/constants";

interface Props {}

export default function ProgramsDash({}: Props): ReactElement {
  return (
    <div className="dash-programs">
      <DashHeader>Active Programs</DashHeader>
      <div className="dash-programs__content">
        {programs.map((prog, i) => (
          <ProgramItem item={prog} key={i} />
        ))}
      </div>
    </div>
  );
}
