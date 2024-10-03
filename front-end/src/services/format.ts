import {
  ScheduleCardItemType,
  ScheduleItem,
} from "@app-types/front-end/display";

export const getScheduleCard = (item: ScheduleItem): ScheduleCardItemType => {
  const cardItem: ScheduleCardItemType = {
    season: item.season,
    round: item.round,
    raceName: item.raceName,
    CircuitName: item.CircuitName,
    Qualifying: item.Qualifying,
    Race: item.Race,
  };
  return cardItem;
};
