const DayNames = ["Sun", "Mon", "Tues", "Wed", "Thr", "Fri", "Sat"];
const CoursesInDay = {
  Sun: [],
  Mon: [],
  Tues: [],
  Wed: [],
  Thr: [],
  Fri: [],
  Sat: []
};

const CourseColorPalette = [
  "8c1c36",
  "bf5926",
  "b3881b",
  "2d803a",
  "137680",
  "194480",
  "75238c",
  "8c2a72"
];

const COURSES = {
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

/* 
"debugging course":{
    code: "na",
    crHrs: 4,
    instructor: "na",
    sections: [
      {
        type: "na",
        section: "na",
        logistics: {
          building: "asdf",
          room: "asdf",
          start: "7:00am",
          stop: "8:00am",
          days: ["Sun"]
        }
      },
      {
        type: "na",
        section: "na",
        logistics: {
          building: "asdf",
          room: "asdf",
          start: "9:00am",
          stop: "10:00am",
          days: ["Sun"]
        }
      },
      {
        type: "na",
        section: "na",
        logistics: {
          building: "asdf",
          room: "asdf",
          start: "11:00am",
          stop: "12:00pm",
          days: ["Sun"]
        }
      },
      {
        type: "na",
        section: "na",
        logistics: {
          building: "asdf",
          room: "asdf",
          start: "1:00pm",
          stop: "2:00pm",
          days: ["Sun"]
        }
      },
    ]
  }
*/

// put sections in coursesInDay
for (const courseName in COURSES) {
  const courseData = { courseName: courseName, ...COURSES[courseName] };
  // console.log(courseData);
  // for each section iterate through section time
  for (const sectionIndex in courseData["sections"]) {
    const sectionData = courseData["sections"][sectionIndex];
    for (const sectionDayIndex in sectionData["logistics"]["days"]) {
      const sectionday = sectionData["logistics"]["days"][sectionDayIndex];
      // make sure it doesn't say "Arr" because "Arr" isn't a day
      if (sectionday in CoursesInDay) {
        CoursesInDay[sectionday].push({
          code: courseData["code"],
          courseName: courseData["courseName"],
          ...sectionData
        });
      }
    }
  }
}

export {
  DayNames as dayNames,
  CoursesInDay as coursesInDay,
  COURSES as courses
};
