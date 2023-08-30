import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/react";
import React from "react";

export class StaticAccordion extends React.Component{
    public render(): any {
        return (
            <IonAccordionGroup>
                <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonLabel >First Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</div>
                </IonAccordion>
                <IonAccordion value="second" >
                    <IonItem slot="header" color="light">
                        <IonLabel >Second Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis tincidunt, gelida portenta. The unleashed virus est, et iam mortui ambulabunt super terram. Souless mortuum oculos attonitos back zombies. An hoc incipere Clairvius Narcisse, an ante? Is bello mundi z?</div>
                </IonAccordion>
                <IonAccordion value="third" >
                    <IonItem slot="header" color="light">
                        <IonLabel >Third Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum poenae horrifying fecimus. Indeflexus monstra per plateas currere. Fit de nostra carne undead. Poenitentiam agite pœnitentiam! Vivens mortua sunt apud nos.</div>
                </IonAccordion>
            </IonAccordionGroup>
        );
    }
}
