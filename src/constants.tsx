import time from "@static/icons/time.svg";

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
        date: { day: "09", month: "APRIL", narrowingDate: "Tomorrow" },
        class: {
          title: "Database and Information Systems",
          topic: "Master of Computer Science",
        },
        time: "8:30am-1:00pm",
      },
      {
        date: { day: "10", month: "APRIL", narrowingDate: "Wed" },
        class: {
          title: "AI and Machine Learning",
          topic: "Master of Computer Science",
        },
        time: "9:30am-12:00pm",
      },
      {
        date: { day: "10", month: "APRIL", narrowingDate: "Wed" },
        class: {
          title: "Definition & Ideation",
          topic: "Certificate UX/UI Design",
        },
        time: "3:30pm-7:00pm",
      },
    ],
    columns: ["Date", "Class", "Time"],
  },
};
