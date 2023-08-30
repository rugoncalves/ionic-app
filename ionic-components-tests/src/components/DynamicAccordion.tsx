import { IonAccordion, IonAccordionGroup, IonIcon, IonItem, IonLabel } from "@ionic/react";
import React, { Component } from "react";

export interface IElement {
    id: string;
    title: string;
    content: string;
    extraContent?: string;
}

export class DynamicAccordion extends Component<{ elements: IElement[] }> {
    constructor(props: { elements: IElement[] }) {
        super(props);
    }
    public render(): any {
        return (
            <IonAccordionGroup>
                {this.props.elements.map(item => (
                    <IonAccordion key={item.id}>
                        <IonItem slot="header" color="light">
                            <IonLabel>{item.title}</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            {item.content}
                            {item.extraContent && 
                                <div style={{ marginTop: '10px' }}>
                                    {item.extraContent}
                                </div>
                            }
                        </div>
                    </IonAccordion>
                ))}
            </IonAccordionGroup>
        );
    }
}
