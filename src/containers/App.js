// React.
import React from "react";

// React Router.
import { Switch, Route } from "react-router-dom";
import { MemoryRouter } from "react-router";

// Containers.
import ShamanLauncher from "./ShamanLauncher";

// FontAwesome.
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// TODO: import only used icons, instead of the whole icon packs.
library.add(fab, fas, far);

/**
 * Switch vs Non-Switch:
 * If the URL is /about, then <About>, <User>, and <NoMatch> will all render because they all match the path.
 * This is by design, allowing us to compose <Route>s into our apps in many ways, like sidebars and breadcrumbs,
 * bootstrap tabs, etc. Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t
 * want to also match /:user (or show our “404” page).
 */

const App = () => {
  return (
    <ShamanLauncher />
    // <MemoryRouter>
    //   <Switch>
    //     <Route exact path="/" component={ShamanLauncher} />
    //     <Route
    //       exact
    //       path="/conversation/:conversation_id"
    //       component={() => <h1>Conversation</h1>}
    //     />
    //   </Switch>
    // </MemoryRouter>
  );
};

export default App;
