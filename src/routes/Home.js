import React from "react";
import { DayNames, CoursesInDay } from "../utils/Schedule.js";
import { convertTime } from "../utils/TimeHandling.js";
const { Interval } = require("luxon");

function Header(props) {
  return (
    <header className="px-3 my-2">
      <h1>Anya Keller</h1>
      <h2>Spring 2022</h2>
    </header>
  );
}

function DayTimeBlock(props) {
  const startTime = convertTime(props.sectionData.logistics.start);
  const stopTime = convertTime(props.sectionData.logistics.stop);
  const dayStart = startTime.startOf("day").plus({ hours: 7 });
  var timeInterval = Interval.fromDateTimes(startTime, stopTime);

  // how many minutes from 7 am
  var sevenToStartTime = startTime.diff(dayStart, "minutes").as("minutes");
  var minutesLong = stopTime.diff(startTime, "minutes").as("minutes");

  const blockTopPercent = (100 * sevenToStartTime) / 5 / 180;
  const blockHeightPercent = (100 * minutesLong) / 5 / 180;

  return (
    <div
      style={{
        width: "100%",
        height: `${blockHeightPercent}%`,
        top: `${blockTopPercent}%`,
        backgroundColor: `#${props.sectionData.color}`,
        position: "absolute",
        fontSize: ".6rem",
        lineHeight: "1.2em"
      }}
      className="text-white">
      {props.sectionData.courseName}
    </div>
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
      {[].concat(props.dayNames).map((day, index) => (
        <div
          className="col d-flex flex-column"
          style={{ padding: "0px 1px" }}
          key={index}>
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
  return (
    <div className="container" style={{ height: "500px" }}>
      <DayCols dayNames={DayNames} coursesInDay={CoursesInDay} />
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
        className="table-responsive-lg border border-info rounded-3 mx-1 my-4 px-1 py-4 "
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
