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
function DayTh(props) {
  return <th scope="col">{props.dayName}</th>;
}

function DayHeader(props) {
  var dayNames = ["", "Sun", "Mon", "Tues", "Wed", "Thr", "Fri", "Sat"];
  var dayHeaders = dayNames.map((day, index) => (
    <DayTh key={index} dayName={day} />
  ));
  return (
    <thead>
      <tr>{dayHeaders}</tr>
    </thead>
  );
}

function Home(props) {
  return (
    <div>
      <Header />
      <div
        className="border border-info rounded-3 mx-1 my-4 px-1 py-4"
        style={{}}>
        <table className="table table-hover">
          <DayHeader />
          <tbody></tbody>
        </table>
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
