import { Match, Switch } from "solid-js";
import { Nav } from "./Nav";
import { store } from "./state";
import { StartPage } from "./start/StartPage";
import { Collapse } from "./common/Collapse";
import { StateOutput } from "./StateOutput";
import { createContainers, createEvents } from "./form/Values"
import { Initial } from "./start/Initial";
import { Footer } from "./Footer";

const [state, setState] = store();
const { name, mail, phone, friend01, friend02 } = createContainers(state, setState);
const triggerEvent = createEvents(setState);

const App = () => {
  return (
    <>
      <div class="xWrapper">
        <h1 class="text-4xl font-bold">Luzerner Rollenspieltage 2023</h1>
        <h2 class="text-3xl pb-8">Anmeldung</h2>
      </div>
      <div class="sticky top-0 z-50 bg-primary">
        <div class="xWrapper">
          <Collapse title="Debugging">
            <StateOutput obj={state.userInput} />
          </Collapse>
        </div>
      </div>
      <div class="xWrapper">
        <Switch fallback={
          <Initial name={name} mail={mail} phone={phone} triggerEvent={triggerEvent} />
        }>
          <Match when={state.initialized}>
            <Nav pages={state.pages} triggerEvent={triggerEvent} />
            <Switch>
              <Match when={state.pages.find(p => p.label === "Start" && p.status === "active")}>
                <StartPage name={name} mail={mail} phone={phone} friend01={friend01} friend02={friend02} />
              </Match>
            </Switch>
            <Footer pages={state.pages} triggerEvent={triggerEvent} />
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default App;
