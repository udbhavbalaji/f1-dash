export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export type Table =
  | { TableType: "StandingsTable"; StandingsTable: StandingsTable }
  | { TableType: "CircuitTable"; CircuitTable: CircuitTable }
  | { TableType: "DriverTable"; DriverTable: DriverTable }
  | { TableType: "ConstructorTable"; ConstructorTable: ConstructorTable }
  | { TableType: "RaceTable"; RaceTable: RaceTable };

export interface ErgastResponse<T extends Table> {
  MRData: MRData & T;
}

interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}

export interface StandingsTable {
  season: string;
  round: string;
  StandingsLists: Standing[];
}

interface CircuitTable {
  Circuits: Circuit[];
}

export interface ConstructorTable {
  season: string;
  Constructors: Constructor[];
}

export interface DriverTable {
  season: string;
  Drivers: Driver[];
}

export interface RaceTable {
  season: string;
  Races: Results[] | Schedules[];
}

interface RaceInfo {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
}

export interface RaceResult extends RaceInfo {
  Results: CarRaceResult[];
}

export interface QualiResult extends RaceInfo {
  QualifyingResults: CarQualifyingResult[];
}

export interface SprintResult extends RaceInfo {
  SprintResults: CarRaceResult[];
}

interface Schedule extends RaceInfo {
  FirstPractice: SessionTiming;
  Qualifying: SessionTiming;
}

export interface TraditionalRound extends Schedule {
  SecondPractice: SessionTiming;
  ThirdPractice: SessionTiming;
}

export interface SprintRound extends Schedule {
  Sprint: SessionTiming;
  SprintQualifying: SessionTiming;
}

interface SessionTiming {
  date: string;
  time: string;
}

export interface CarRaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  time: {
    millis: string;
    time: string;
  };
  FastestLap: CarFastestLap;
}

interface CarQualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1?: string;
  Q2?: string;
  Q3?: string;
}

interface CarFastestLap {
  lap: string;
  Time: {
    time: string;
  };
}

export interface StandingsEntry {
  position: string;
  positionText: string;
  points: string;
  wins: string;
}

export interface ConstructorStanding extends StandingsEntry {
  Constructor: Constructor;
}

export interface DriverStanding extends StandingsEntry {
  Driver: Driver;
}

interface StandingBody {
  season: string;
  round: string;
}

export interface ConstructorStandings extends StandingBody {
  StandingType: "constructor";
  ConstructorStandings: ConstructorStanding[];
}

export interface DriverStandings extends StandingBody {
  StandingType: "driver";
  DriverStandings: DriverStanding[];
}

export type Standing = ConstructorStandings | DriverStandings;

export type Results = RaceResult | QualiResult | SprintResult;

export type Schedules = TraditionalRound | SprintRound;
