import { Standing } from "@app-types/back-end/ergastResponse";
import {
  ConstructorStandingItem,
  ScheduleCardItemType,
  ScheduleItem,
  StandingItem,
} from "@app-types/front-end/display";

export const getStandings = (standings: Standing): StandingItem[] => {
  let output: StandingItem[] = [];
  console.log(standings);
  if ("ConstructorStandings" in standings) {
    const data = standings.ConstructorStandings;
    for (let i = 0; i < data.length; i++) {
      const standing: StandingItem = {
        StandingType: "Constructor",
        ConstructorStandingItem: {
          points: parseInt(data[i].points),
          position: parseInt(data[i].position),
          ConstructorName: data[i].Constructor.name,
        },
      };
      output.push(standing);
    }
  }
  return output;
};

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
