import { Schedules } from "@app-types/ergastResponse";

export function isSchedules(item: any[]): item is Schedules[] {
  return item && "Qualifying" in item[0];
}
