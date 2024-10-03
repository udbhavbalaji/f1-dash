export default {
  circuit: "CircuitTable",
  race: "RaceTable",
  constructor: "ConstructorTable",
  driver: "DriverTable",
  raceResult: "RaceTable",
  sprintResult: "RaceTable",
  qualifyingResult: "RaceTable",
  pitstop: "RaceTable",
  lap: "RaceTable",
  schedule: "RaceTable",
  standings: "StandingsTable",
};

export const standingsPropertyMapping = {
  constructor: "ConstructorStandings",
  driver: "DriverStandings",
};

export const sprintRoundMapping: { [key: number]: string } = {
  5: "1",
  6: "2",
  11: "3",
  19: "4",
  21: "5",
  23: "6",
};
