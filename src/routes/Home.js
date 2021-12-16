import React from "react";
import fiorDiLatte from "../fiorDiLatte.png";

function Header(props) {
  return (
    <header className="px-3 my-2">
      <h1>Anya Keller</h1>
      <h2>Spring 2022</h2>
    </header>
  );
}

function DayTimeBlock(props) {
  // console.log(props.sectionData.logistics);
  const startAmPm = props.sectionData.logistics.start.slice(-2);
  // begin count 7am, if pm add 12-7 = 5 hrs
  // start time
  const [startHrsStr, startMinutesStr] = props.sectionData.logistics.start
    .slice(0, -2)
    .split(":");
  const startHrs =
    startAmPm === "am" ? parseInt(startHrsStr) - 7 : parseInt(startHrsStr) + 5;
  const startMinutes = parseInt(startMinutesStr);
  const startTimeBlocks = (startHrs * 60 + startMinutes) / 5;
  // stop time
  const stopAmPm = props.sectionData.logistics.stop.slice(-2);
  const [stopHrsStr, stopMinutesStr] = props.sectionData.logistics.stop
    .slice(0, -2)
    .split(":");
  const stopHrs =
    stopAmPm === "am" ? parseInt(stopHrsStr) - 7 : parseInt(stopHrsStr) + 5;
  const stopMinutes = parseInt(stopMinutesStr);
  const stopTimeBlocks = (stopHrs * 60 + stopMinutes) / 5;

  const blockTopPercent = (100 * stopTimeBlocks) / 180;
  const blockHeightPercent = (100 * (stopTimeBlocks - startTimeBlocks)) / 180;

  return (
    <div
      style={{
        width: "100%",
        height: `${blockHeightPercent}%`,
        top: `${blockTopPercent}%`,
        position: "absolute"
      }}
      className={"bg-primary"}></div>
  );
}

function DayCol(props) {
  const timeBlocks = [];
  timeBlocks.push(
    props.dayData.map((section, sectionIndex) => {
      return <DayTimeBlock sectionData={section} key={sectionIndex} />;
    })
  );
  return timeBlocks;
}

function DayCols(props) {
  return (
    <div className="row" style={{ height: "100%" }}>
      {[""].concat(props.dayNames).map((day, index) => (
        <div className="col d-flex flex-column" key={index}>
          <h5 style={{ height: "1.5em" }}>{day}</h5>
          <div style={{ flexGrow: "1", position: "relative" }}>
            <DayCol
              dayData={day in props.coursesInDay ? props.coursesInDay[day] : []}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ScheduleGrid(props) {
  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thr", "Fri", "Sat"];
  const courses = {
    "Emerg Mod Europ": {
      code: "CAS HI102",
      crHrs: 4,
      instructor: "Backman",
      sections: [
        {
          type: "Independent",
          section: "A1",
          logistics: {
            building: "CAS",
            room: "B18",
            start: "9:05am",
            stop: "9:55am",
            days: ["Mon", "Wed", "Fri"]
          }
        }
      ]
    },
    "Italian Film": {
      code: "CAS LI283",
      crHrs: 4,
      instructor: "Carter",
      sections: [
        {
          type: "Independent",
          section: "A1",
          notes: "Mts w/CAS CI266",
          logistics: {
            building: "CAS",
            room: "223",
            start: "2:30pm",
            stop: "3:20pm",
            days: ["Mon", "Wed", "Fri"]
          }
        }
      ]
    },
    "ENG Mechanics 1": {
      code: "ENG EK301",
      crHrs: 4,
      instructor: "Holt",
      sections: [
        {
          type: "Lecture",
          section: "A3",
          notes: "Class Closed",
          logistics: {
            building: "EPC",
            room: "209",
            start: "1:30pm",
            stop: "3:15pm",
            days: ["Tues", "Thr"]
          }
        },
        {
          type: "Discussion",
          section: "B1",
          instructor: "Farny",
          notes: "Class Closed",
          logistics: { days: ["Arr"] }
        }
      ]
    },
    "Prob Stat Data": {
      code: "ENG EK381",
      crHrs: 4,
      instructor: "Nagem",
      sections: [
        {
          type: "Lecture",
          section: "A3",
          logistics: {
            building: "PHO",
            room: "203",
            start: "10:10am",
            stop: "11:55am",
            days: ["Mon", "Wed"]
          }
        },
        {
          type: "Discussion",
          section: "B8",
          logistics: {
            building: "CAS",
            room: "229",
            start: "1:25pm",
            stop: "2:15pm",
            days: ["Mon"]
          }
        }
      ]
    }
  };

  const coursesInDay = {
    Sun: [],
    Mon: [],
    Tues: [],
    Wed: [],
    Thr: [],
    Fri: [],
    Sat: []
  };

  // put sections in coursesInDay
  for (const courseName in courses) {
    const courseData = { courseName: courseName, ...courses[courseName] };
    // console.log(courseData);
    // for each section iterate through section time
    for (const sectionIndex in courseData["sections"]) {
      const sectionData = courseData["sections"][sectionIndex];
      for (const sectionDayIndex in sectionData["logistics"]["days"]) {
        const sectionday = sectionData["logistics"]["days"][sectionDayIndex];
        // make sure it doesn't say "Arr" because "Arr" isn't a day
        if (sectionday in coursesInDay) {
          coursesInDay[sectionday].push({
            code: courseData["code"],
            courseName: courseData["courseName"],
            ...sectionData
          });
        }
      }
    }
  }

  return (
    <div className="container" style={{ height: "500px" }}>
      <DayCols dayNames={dayNames} coursesInDay={coursesInDay} />
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <Header />
      <div
        className="border border-info rounded-3 mx-1 my-4 px-1 py-4"
        style={{}}>
        <ScheduleGrid />
      </div>
      <div
        className="border border-info rounded-3 mx-1 my-4 px-1 py-4"
        style={{}}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Class</th>
              <th>Status</th>
              <th>Cr hr/s</th>
              <th>Title/Instructor</th>
              <th>Type</th>
              <th>Bld</th>
              <th>Rm</th>
              <th>Day</th>
              <th>Start</th>
              <th>Stop</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAS HI102 A1</td>
              <td>REG</td>
              <td> 4.0</td>
              <td>Emerg Mod Europ Backman</td>
              <td>Independent</td>
              <td>CAS</td>
              <td>B18</td>
              <td>Mon,Wed,Fri</td>
              <td> 9:05am</td>
              <td> 9:55am</td>
              <td>
                <b></b>
              </td>
            </tr>

            <tr>
              <td>CAS LI283 A1</td>
              <td>REG</td>
              <td> 4.0</td>
              <td>Italian Film Carter</td>
              <td>Independent</td>
              <td>CAS</td>
              <td>223</td>
              <td>Mon,Wed,Fri</td>
              <td> 2:30pm</td>
              <td> 3:20pm</td>
              <td>
                Mts w/CAS CI266
                <b></b>
              </td>
            </tr>

            <tr>
              <td>ENG EK301 A3</td>
              <td>REG</td>
              <td> 4.0</td>
              <td>ENG Mechanics 1 Holt</td>
              <td>Lecture</td>
              <td>EPC</td>
              <td>209</td>
              <td>Tue,Thu</td>
              <td> 1:30pm</td>
              <td> 3:15pm</td>
              <td>
                Class Closed
                <b></b>
              </td>
            </tr>

            <tr>
              <td>ENG EK301 B1</td>
              <td>REG</td>
              <td> 0.0</td>
              <td>ENG Mechanics 1 Farny</td>
              <td>Discussion</td>
              <td></td>
              <td></td>
              <td>Arranged</td>
              <td></td>
              <td></td>
              <td>
                <b></b>
              </td>
            </tr>

            <tr>
              <td>ENG EK381 A3</td>
              <td>REG</td>
              <td> 4.0</td>
              <td>Prob Stat Data Nagem</td>
              <td>Lecture</td>
              <td>PHO</td>
              <td>203</td>
              <td>Mon,Wed</td>
              <td>10:10am</td>
              <td>11:55am</td>
              <td>
                <b></b>
              </td>
            </tr>

            <tr>
              <td>ENG EK381 B8</td>
              <td>REG</td>
              <td> 0.0</td>
              <td>Prob Stat Data Nagem</td>
              <td>Discussion</td>
              <td>CAS</td>
              <td>229</td>
              <td>Mon</td>
              <td> 1:25pm</td>
              <td> 2:15pm</td>
              <td>
                <b></b>
              </td>
            </tr>

            <tr>
              <td>
                <b>Total Credits</b>
              </td>
              <td></td>
              <td> 16.0</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b></b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
