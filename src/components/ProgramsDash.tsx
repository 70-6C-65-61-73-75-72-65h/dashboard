import React, { ReactElement } from "react";
import DashHeader from "@src/components/DashHeader";
import ProgramProgress from "@src/components/ProgramProgress";
import ProgramItem, { IProgramItem } from "@src/components/ProgramItem";

import logo from "@static/images/logo.svg";
import logo2 from "@static/images/logo2.svg";

interface Props {}

const programs: IProgramItem[] = [
  {
    logo: logo,
    title: "Master of Computer Science",
    institution: "University of Upstate at Brookstone",
    info: [
      { primary: "1", secondary: "Overdue Assignments" },
      { primary: "5", secondary: "Remaining Absenses" },
      { primary: "A-", secondary: "Academic Average" },
      {
        primary: { percentage: 45, component: ProgramProgress },
        secondary: "Completion",
      },
    ],
  },
  {
    logo: logo2,
    title: "CERTIFICATE UX/UI design",
    institution: "Academy of Art and Technology at Dursburg",
    info: [
      { primary: "0", secondary: "Overdue Assignments" },
      { primary: "6", secondary: "Remaining Absenses" },
      { primary: "--", secondary: "Academic Average" },
      {
        primary: { percentage: 28, component: ProgramProgress },
        secondary: "Completion",
      },
    ],
  },
];

export default function ProgramsDash({}: Props): ReactElement {
  return (
    <div className="dash-programs">
      <DashHeader>Active Programs</DashHeader>
      <div className="dash-programs__content">
        {programs.map((prog) => (
          <ProgramItem item={prog} />
        ))}
      </div>
    </div>
  );
}
