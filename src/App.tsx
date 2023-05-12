import { Match, Switch } from "solid-js";
import { Nav } from "./Nav";
import { store } from "./state";
import { StartPage } from "./start/StartPage";
import { Collapse } from "./common/Collapse";
import { StateOutput } from "./StateOutput";

const [state, setState] = store();

const App = () => {
  return (
    <div class="xWrapper">
      <h1 class="text-4xl font-bold">Luzerner Rollenspieltage 2023</h1>
      <h2 class="text-3xl pb-8">Anmeldung</h2>
      <Collapse title="Debugging">
        <StateOutput obj={state.userInput} />
      </Collapse>
      <Nav pages={state.pages} />
      <Switch>
        <Match when={state.pages.find(p => p.label === "Start" && p.status === "active")}>
          <StartPage />
        </Match>
      </Switch>
    </div>
  );
};

export default App;
