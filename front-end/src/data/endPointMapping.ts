import { ConstructorStandings } from "@app-types/back-end/ergastResponse";
import {
  backendTypes,
  ConstructorStandingItem,
  //   ConstructorStandingItem,
  //   DriverStandingItem,
  endPointMappingType,
  frontendTypes,
  requestTypes,
} from "@app-types/front-end/display";
import {
  handleConstructorStandings,
  handleDriverStandings,
  handleSchedule,
} from "@services/handleData";

// type backendTypes = ConstructorStandings | DriverStandings;

// type frontendTypes = ConstructorStandingItem | DriverStandingItem;

// export interface endPointMapping<
//   T extends backendTypes,
//   R extends frontendTypes
// > {
//   reqType: requestTypes;
//   url: string;
//   handleFunction: (data: T[]) => R[];
// }

export const endPointMapping: endPointMappingType<any, any>[] = [
  {
    reqType: requestTypes.ConstructorStandings,
    url: "http://localhost:3000/api/constructors/standings",
    handleFunction: handleConstructorStandings,
  },
  {
    reqType: requestTypes.DriverStandings,
    url: "http://localhost:3000/api/drivers/standings",
    handleFunction: handleDriverStandings,
  },
  {
    reqType: requestTypes.Schedule,
    url: "http://localhost:3000/api/schedule",
    handleFunction: handleSchedule,
  },
];
