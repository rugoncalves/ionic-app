import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import { StaticAccordion } from './components/StaticAccordion';
import { DynamicAccordion } from './components/DynamicAccordion';
import { AddElement, GetListObject } from './Helper';
import { useEffect, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [myList, setMyList] = useState(GetListObject()); // Use React state to manage the list

  function addNewItem(isAppend = false): void {
    setMyList(AddElement(isAppend));
  }

  return (
    <div className="main-content">
      <h1>Accordion test</h1>
      <IonButton onClick={()=>addNewItem()}>Insert Element</IonButton>
      <IonButton onClick={()=>addNewItem(true)}>Push Element</IonButton>
      <DynamicAccordion elements={myList} />
    </div>
  )
};

/*return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/Inbox" />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );*/

export default App;
