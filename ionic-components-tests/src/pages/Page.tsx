import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { StaticAccordion } from '../components/StaticAccordion';
import { DynamicAccordion, IElement } from '../components/DynamicAccordion';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
//<ExploreContainer name={name} />
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name} dynamic!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>        
      </IonContent>
    </IonPage>
  );
};

export default Page;
