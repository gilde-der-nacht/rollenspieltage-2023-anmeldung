import { Match, Switch } from "solid-js";
import { Nav } from "./Nav";
import { store } from "./state";
import { StartPage } from "./start/StartPage";
import { Collapse } from "./common/Collapse";
import { StateOutput } from "./StateOutput";
import { Container } from "./form/Values"

const [state, setState] = store();

const name: Container<string> = {
  val: state.userInput.name,
  setVal: (n) => setState('userInput', 'name', (_) => n)
}

const mail: Container<string> = {
  val: state.userInput.mail,
  setVal: (n) => setState('userInput', 'mail', (_) => n)
}

const phone: Container<string> = {
  val: state.userInput.phone,
  setVal: (n) => setState('userInput', 'phone', (_) => n)
}

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
        <Nav pages={state.pages} />
        <Switch>
          <Match when={state.pages.find(p => p.label === "Start" && p.status === "active")}>
            <StartPage name={name} mail={mail} phone={phone} />
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default App;
