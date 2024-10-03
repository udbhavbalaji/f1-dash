import {
  ConstructorStandings,
  DriverStandings,
} from "@app-types/back-end/ergastResponse";

interface Standings {
  position: number;
  points: number;
}

export interface ConstructorStandingItem extends Standings {
  // StandingType: "Constructor";
  ConstructorName: string;
}

export interface DriverStandingItem extends Standings {
  // StandingType: "Driver";
  DriverName: string;
  DriverNumber: number;
  nationality: string;
}

export type StandingItem =
  | {
      StandingType: "Constructor";
      ConstructorStandingItem: ConstructorStandingItem;
    }
  | { StandingType: "Driver"; DriverStandingItem: DriverStandingItem };

export enum requestTypes {
  ConstructorStandings,
  DriverStandings,
  Schedule,
}

export type backendTypes = ConstructorStandings | DriverStandings;

export type frontendTypes = ConstructorStandingItem | DriverStandingItem;

export interface endPointMappingType<
  T extends backendTypes,
  R extends frontendTypes
> {
  reqType: requestTypes;
  url: string;
  handleFunction: (data: T[]) => R[];
}

export interface ScheduleCardItemType {
  season: string;
  round: number;
  raceName: string;
  CircuitName: string;
  Qualifying: SessionTiming;
  Race: SessionTiming;
}

export interface ScheduleItem {
  raceType: "Traditional" | "Sprint";
  season: string;
  round: number;
  raceName: string;
  CircuitName: string;
  FirstPractice: SessionTiming;
  Qualifying: SessionTiming;
  Race: SessionTiming;
  SecondPractice?: SessionTiming;
  ThirdPractice?: SessionTiming;
  SprintQualifying?: SessionTiming;
  Sprint?: SessionTiming;
}

interface SessionTiming {
  date: string;
  time: string;
}
