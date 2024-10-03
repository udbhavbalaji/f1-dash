import {
  ConstructorStanding,
  ConstructorStandings,
  DriverStanding,
  DriverStandings,
  Schedules,
} from "@app-types/back-end/ergastResponse";
import {
  ConstructorStandingItem,
  DriverStandingItem,
  ScheduleItem,
} from "@app-types/front-end/display";

export const handleConstructorStandings = (
  data: ConstructorStandings[]
): ConstructorStandingItem[] => {
  const constructorStandings: ConstructorStandingItem[] = [];
  const standings = data[0].ConstructorStandings;
  standings.forEach((entry: ConstructorStanding) => {
    const item: ConstructorStandingItem = {
      points: parseInt(entry.points),
      position: parseInt(entry.position),
      ConstructorName: entry.Constructor.name,
    };
    constructorStandings.push(item);
  });
  return constructorStandings;
};

export const handleDriverStandings = (
  data: DriverStandings[]
): DriverStandingItem[] => {
  const driverStandings: DriverStandingItem[] = [];
  const standings = data[0].DriverStandings;
  standings.forEach((entry: DriverStanding) => {
    const item: DriverStandingItem = {
      points: parseInt(entry.points),
      position: parseInt(entry.position),
      DriverName: `${entry.Driver.givenName} ${entry.Driver.familyName}`,
      DriverNumber: parseInt(entry.Driver.permanentNumber),
      nationality: entry.Driver.nationality,
    };
    driverStandings.push(item);
  });
  return driverStandings;
};

export const handleSchedule = (data: Schedules[]): ScheduleItem[] => {
  const scheduleList: ScheduleItem[] = [];

  data.forEach((race: Schedules) => {
    if ("Sprint" in race) {
      const item: ScheduleItem = {
        raceType: "Sprint",
        season: race.season,
        round: parseInt(race.round),
        raceName: race.raceName,
        CircuitName: race.Circuit.circuitName,
        FirstPractice: race.FirstPractice,
        SprintQualifying: race.SprintQualifying,
        Sprint: race.Sprint,
        Qualifying: race.Qualifying,
        Race: {
          date: race.date,
          time: race.time,
        },
      };
      scheduleList.push(item);
    } else {
      const item: ScheduleItem = {
        raceType: "Traditional",
        season: race.season,
        round: parseInt(race.round),
        raceName: race.raceName,
        CircuitName: race.Circuit.circuitName,
        FirstPractice: race.FirstPractice,
        SecondPractice: race.SecondPractice,
        ThirdPractice: race.ThirdPractice,
        Qualifying: race.Qualifying,
        Race: {
          date: race.date,
          time: race.time,
        },
      };
      scheduleList.push(item);
    }
  });

  return scheduleList;
};
