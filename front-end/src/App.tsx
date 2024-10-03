import StandingsPage from "@pages/StandingsPage";
import HomePage from "@pages/HomePage";
import { requestTypes } from "@app-types/front-end/display";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SchedulePage from "@pages/SchedulePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/constructors/standings'
            element={
              <StandingsPage reqType={requestTypes.ConstructorStandings} />
            }
          />
          <Route
            path='/drivers/standings'
            element={<StandingsPage reqType={requestTypes.DriverStandings} />}
          />
          <Route
            path='/schedule'
            element={<SchedulePage reqType={requestTypes.Schedule} />}
          />
          <Route path='/*' element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
