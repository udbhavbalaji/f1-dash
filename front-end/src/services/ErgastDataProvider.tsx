import {
  ConstructorStandingItem,
  DriverStandingItem,
  requestTypes,
  ScheduleItem,
} from "@app-types/front-end/display";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import internalApiClient from "@services/internal/apiClient";
import { endPointMapping } from "@data/endPointMapping";
import { ConstructorStandings } from "@app-types/back-end/ergastResponse";

type ErgastDataContextType = {
  constructorStandings: ConstructorStandingItem[];
  driverStandings: DriverStandingItem[];
  raceSchedule: ScheduleItem[];
  fetchAllData: () => void;
};

const ErgastDataContext = createContext<ErgastDataContextType | undefined>(
  undefined
);

export const useErgastData = () => {
  const context = useContext(ErgastDataContext);
  if (!context) {
    throw new Error("useErgastData must be used within a ErgastDataProvider");
  }
  return context;
};

const ErgastDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [constructorStandings, setConstructorStandings] = useState<
    ConstructorStandingItem[]
  >([]);
  const [driverStandings, setDriverStandings] = useState<DriverStandingItem[]>(
    []
  );
  const [raceSchedule, setRaceSchedule] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = async <T, R>(
    url: string,
    transformer: (data: T[]) => R[],
    setFunction: React.Dispatch<React.SetStateAction<R[]>>
  ) => {
    const response = await internalApiClient<T>(url);
    if (response.status === "error" || !response.data) {
      throw new Error("Error while fetching data");
    }
    const dataList = response.data;
    const transformedData: R[] = transformer(dataList);
    setFunction(transformedData);
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const fetchPromises = endPointMapping.map(async (obj) => {
        if (obj.reqType === requestTypes.ConstructorStandings) {
          // console.log(cons);
          await fetchData(obj.url, obj.handleFunction, setConstructorStandings);
        } else if (obj.reqType === requestTypes.DriverStandings) {
          // console.log("driver");
          await fetchData(obj.url, obj.handleFunction, setDriverStandings);
        } else if (obj.reqType === requestTypes.Schedule) {
          await fetchData(obj.url, obj.handleFunction, setRaceSchedule);
        }
      });
      await Promise.all(fetchPromises);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      console.log(raceSchedule);
      setLoading(false);
    }
  };

  // console.log("before usEffect");

  useEffect(() => {
    console.log("in usEffect");
    fetchAllData();
  }, []);
  // console.log("after usEffect");

  return (
    <ErgastDataContext.Provider
      value={{
        constructorStandings,
        driverStandings,
        raceSchedule,
        fetchAllData,
      }}
    >
      {error === "" ? children : (error as string)}
    </ErgastDataContext.Provider>
  );
};

export default ErgastDataProvider;
