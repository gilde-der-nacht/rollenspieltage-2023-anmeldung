import { Match, Switch } from "solid-js";
import { Nav } from "./Nav";
import { store } from "./state";
import { StartPage } from "./start/StartPage";
import { Collapse } from "./common/Collapse";
import { StateOutput } from "./StateOutput";
import { createContainers, createEvents } from "./form/Values"
import { Initial } from "./start/Initial";
import { Footer } from "./Footer";
import { TimePage } from "./time/TimePage";
import { PlayPage } from "./play/PlayPage";
import { MasterPage } from "./master/MasterPage";
import { SummaryPage } from "./summary/SummaryPage";

const [state, setState] = store();
const { name, mail, phone, friend01, friend02 } = createContainers(state, setState);
const triggerEvent = createEvents(setState);

const App = () => {
  return (
    <>
      <div class="xWrapper">
        <h1 class="text-4xl font-bold">Luzerner Rollenspieltage 2023</h1>
        <h2 class="text-3xl">Anmeldung</h2>
        <Switch fallback={
          <Initial name={name} mail={mail} phone={phone} triggerEvent={triggerEvent} />
        }>
          <Match when={state.initialized}>
            <Nav pages={state.pages} triggerEvent={triggerEvent} activePage={state.currentPage} userInput={state.userInput} />
            <Switch>
              <Match when={state.currentPage === "Start"}>
                <StartPage name={name} mail={mail} phone={phone} friend01={friend01} friend02={friend02} />
              </Match>
              <Match when={state.currentPage === "Zeit"}>
                <TimePage />
              </Match>
              <Match when={state.currentPage === "Spielen"}>
                <PlayPage />
              </Match>
              <Match when={state.currentPage === "Leiten"}>
                <MasterPage />
              </Match>
              <Match when={state.currentPage === "Zusammenfassung"}>
                <SummaryPage />
              </Match>
            </Switch>
            <Footer pages={state.pages} triggerEvent={triggerEvent} activePage={state.currentPage} />
          </Match>
        </Switch>
      </div>
      <div class="sticky bottom-0 z-50 bg-primary">
        <div class="xWrapper mt-4">
          <Collapse title="Debugging">
            <StateOutput obj={state.userInput} />
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default App;
