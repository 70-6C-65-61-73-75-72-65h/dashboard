import React from "react";
import time from "@static/icons/time.svg";
import logo from "@static/images/logo.svg";
import logo2 from "@static/images/logo2.svg";
import ProgramProgress from "@src/components/ProgramProgress";

import { IProgramItem } from "@src/components/ProgramItem";
import SessionDate from "@src/components/SessionItems/SessionDate";
import SessionClass from "@src/components/SessionItems/SessionClass";
import SessionTime from "@src/components/SessionItems/SessionTime";

export const advertisment = {
  title: "UX Research - Week 3",
  topic: "CERTIFICATE UX/UI design",
  status: { text: "In Progress", icon: time },
  // 8 april
  date: { day: "08", month: "APRIL" },
  // new Date(Date.UTC(2021, 3, 8, 0, 0, 0)).toLocaleString("en-US", {
  //   month: "long",
  //   day: "numeric",
  // }),
};

export const sessions = {
  header: "Upcoming Sessions",
  table: {
    rows: [
      {
        date: () => (
          <SessionDate
            {...{ day: "09", month: "APRIL", narrowingDate: "Tomorrow" }}
          />
        ),
        class: () => (
          <SessionClass
            {...{
              title: "Database and Information Systems",
              topic: "Master of Computer Science",
            }}
          />
        ),
        time: () => <SessionTime time={"8:30am-1:00pm"} />,
      },
      {
        date: () => (
          <SessionDate
            {...{ day: "10", month: "APRIL", narrowingDate: "Wed" }}
          />
        ),
        class: () => (
          <SessionClass
            {...{
              title: "AI and Machine Learning",
              topic: "Master of Computer Science",
            }}
          />
        ),
        time: () => <SessionTime time={"9:30am-12:00pm"} />,
      },
      {
        date: () => (
          <SessionDate
            {...{ day: "10", month: "APRIL", narrowingDate: "Wed" }}
          />
        ),
        class: () => (
          <SessionClass
            {...{
              title: "Definition & Ideation",
              topic: "Certificate UX/UI Design",
            }}
          />
        ),
        time: () => <SessionTime time={"3:30pm-7:00pm"} />,
      },
    ],
    columns: [
      { field: "Date", style: { flex: "0 1 13.68%" } },
      {
        field: "Class",
        style: { flex: "0 1 44.73%", "justify-content": "flex-start" },
      },
      { field: "Time", style: { flex: "0 1 23.15%" } },
      // { field: "Date", style: { flex: "0 1 17.63%" } },
      // { field: "Class", style: { flex: "0 1 56.31%" } },
      // { field: "Time", style: { flex: "1 1 26.05%" } },
    ],
  },
};

export const programs: IProgramItem[] = [
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
