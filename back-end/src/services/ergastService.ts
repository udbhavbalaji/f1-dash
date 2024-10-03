import {
  CarRaceResult,
  Constructor,
  ConstructorTable,
  Driver,
  DriverTable,
  ErgastResponse,
  RaceTable,
  Standing,
  StandingsTable,
  Table,
} from "@app-types/ergastResponse";
import axios from "axios";
import { sprintRoundMapping } from "@data/ergast";
import { isSchedules } from "@utils/utils";

const BASEURL = "http://api.jolpi.ca/ergast";

const makeErgastRequest = async <T extends Table>(
  url: string,
  limit?: number,
  offset?: number
): Promise<ErgastResponse<T>> => {
  if (limit || offset) {
    url += "?";
  }
  if (limit) {
    url += `limit=${limit}`;
  }
  if (offset) {
    url += url[-1] === "?" ? `offset=${offset}` : `&offset=${offset}`;
  }
  const response = await axios.get(url);
  const processedResponse: ErgastResponse<T> = {
    MRData: response.data.MRData,
  };

  return processedResponse;
};

export const getConstructorsStandings = async (
  year: string
): Promise<Standing[]> => {
  const response = await makeErgastRequest<{
    TableType: "StandingsTable";
    StandingsTable: StandingsTable;
  }>(`${BASEURL}/f1/${year}/constructorstandings`);
  const responseData = response.MRData.StandingsTable.StandingsLists;

  return responseData;
};

export const getDriversStandings = async (
  year: string
): Promise<Standing[]> => {
  const response = await makeErgastRequest<{
    TableType: "StandingsTable";
    StandingsTable: StandingsTable;
  }>(`${BASEURL}/f1/${year}/driverstandings`);
  const responseData = response.MRData.StandingsTable.StandingsLists;

  return responseData;
};

export const getConstructors = async (year: string): Promise<Constructor[]> => {
  const response = await makeErgastRequest<{
    TableType: "ConstructorTable";
    ConstructorTable: ConstructorTable;
  }>(`${BASEURL}/f1/${year}/constructors`);
  const responseData = response.MRData.ConstructorTable.Constructors;

  return responseData;
};

export const getDrivers = async (year: string): Promise<Driver[]> => {
  const response = await makeErgastRequest<{
    TableType: "DriverTable";
    DriverTable: DriverTable;
  }>(`${BASEURL}/f1/${year}/drivers`);
  const responseData = response.MRData.DriverTable.Drivers;
  return responseData;
};

// fixme: only works well with 2024 for now; need to investigate why; find a fix asap; i tihnk it has something to do with the offset calculation; could be varied for different seasons so need to find out a way to get over that
export const getRaceResults = async (
  year: string,
  round: string
): Promise<CarRaceResult[]> => {
  const limit = 20;
  const offset = 20 * (parseInt(round) - 1) - 1;
  const response = await makeErgastRequest<{
    TableType: "RaceTable";
    RaceTable: RaceTable;
  }>(`${BASEURL}/f1/${year}/results`, limit, offset);

  const responseData = response.MRData.RaceTable.Races[0];

  if ("Results" in responseData) {
    const raceResults = responseData.Results;
    return raceResults;
  } else {
    throw new Error("Incorrect results type retrieved");
  }
};

export const getQualiResults = async (year: string, round: string) => {
  const limit = 20;
  const offset = 20 * (parseInt(round) - 1) - 1;
  const response = await makeErgastRequest<{
    TableType: "RaceTable";
    RaceTable: RaceTable;
  }>(`${BASEURL}/f1/${year}/qualifying`, limit, offset);
  const responseData = response.MRData.RaceTable.Races[0];

  if ("QualifyingResults" in responseData) {
    const qualiResults = responseData.QualifyingResults;
    return qualiResults;
  } else {
    throw new Error("Incorrect results type retrieved");
  }
};

export const getSprintResults = async (year: string, round: string) => {
  const limit = 20;
  let sprintRound: string | undefined = undefined;
  const roundNum = parseInt(round);
  if (Object.keys(sprintRoundMapping).includes(round)) {
    sprintRound = sprintRoundMapping[roundNum];
  }
  if (!sprintRound) {
    throw new Error("Entered round isn't a sprint race");
  }

  const offset = 20 * (parseInt(sprintRound) - 1);

  const response = await makeErgastRequest<{
    TableType: "RaceTable";
    RaceTable: RaceTable;
  }>(`${BASEURL}/f1/${year}/sprint`, limit, offset);

  const responseData = response.MRData.RaceTable.Races[0];

  if ("SprintResults" in responseData) {
    const sprintResults = responseData.SprintResults;
    return sprintResults;
  } else {
    throw new Error("Incorrect results type retrieved");
  }
};

export const getSeasonSchedule = async (year: string) => {
  const response = await makeErgastRequest<{
    TableType: "RaceTable";
    RaceTable: RaceTable;
  }>(`${BASEURL}/f1/${year}`);
  const responseData = response.MRData.RaceTable.Races;
  if (!isSchedules(responseData)) {
    throw new Error("Not getting schedules");
  }
  return responseData;
};
