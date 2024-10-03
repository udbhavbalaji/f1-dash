import { Constructor, Driver } from "@app-types/ergastResponse";
import {
  getConstructors,
  getConstructorsStandings,
  getDrivers,
  getDriversStandings,
  getQualiResults,
  getRaceResults,
  getSeasonSchedule,
  getSprintResults,
} from "@services/ergastService";
import express, { Request, Response } from "express";

const router = express.Router();
const CurrentYear = "2024";

router.get(
  "/constructors/standings/:year?",
  async (req: Request, res: Response) => {
    const year = req.params.year;
    const response = await getConstructorsStandings(year ?? CurrentYear);
    res.status(200).send(response);
  }
);

router.get("/drivers/standings/:year?", async (req: Request, res: Response) => {
  const year = req.params.year;
  const response = await getDriversStandings(year ?? CurrentYear);
  res.status(200).send(response);
});

// info: could maybe support multiple constructors if using query params
router.get("/constructors/:id/:year?", async (req: Request, res: Response) => {
  const constructorId = req.params.id;
  const year = req.params.year;
  const response = await getConstructors(year ?? CurrentYear);

  const reqConstructor = response.filter(
    (constructor: Constructor) => constructor.constructorId === constructorId
  );

  res.status(200).send(reqConstructor);
});

router.get(
  "/drivers/:driverNumber/:year?",
  async (req: Request, res: Response) => {
    const driverNumber = req.params.driverNumber;
    const year = req.params.year;
    const response = await getDrivers(year ?? CurrentYear);
    const reqDriver = response.filter(
      (driver: Driver) => driver.permanentNumber === driverNumber
    );
    res.status(200).send(reqDriver);
  }
);

router.get(
  "/results/race/:year/:round",
  async (req: Request, res: Response) => {
    const year = req.params.year;
    const round = req.params.round;
    const response = await getRaceResults(year, round);
    res.status(200).send(response);
  }
);

router.get(
  "/results/qualifying/:year/:round",
  async (req: Request, res: Response) => {
    const year = req.params.year;
    const round = req.params.round;
    const response = await getQualiResults(year, round);
    res.status(200).send(response);
  }
);

router.get(
  "/results/sprint/:year/:round",
  async (req: Request, res: Response) => {
    const year = req.params.year;
    const round = req.params.round;
    const response = await getSprintResults(year, round);
    res.status(200).send(response);
  }
);

router.get("/schedule/:year?", async (req: Request, res: Response) => {
  const year = req.params.year;
  const response = await getSeasonSchedule(year ?? CurrentYear);
  res.status(200).send(response);
});

export default router;
