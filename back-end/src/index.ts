import 'express-async-errors'
import app from "./controller/app";
import errorMiddleware from "./middleware/error";
import { routePokeTeam } from './routes/routerPokeTeam';
import { routeTeam } from './routes/routeTeam';

app.use("/team",routeTeam)

app.use("/poke-team",routePokeTeam)

app.use(errorMiddleware)