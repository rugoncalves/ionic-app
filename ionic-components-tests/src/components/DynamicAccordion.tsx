import { IonAccordion, IonAccordionGroup, IonIcon, IonItem, IonLabel } from "@ionic/react";
import React, { Component } from "react";

function logger(componentName: string, message: string, ...args: unknown[]): void {
    const time = ('00000' + Math.floor(performance.now())).slice(-5);
    const name = ('____________________' + componentName).slice(-20);
    console.log(`> ${time} | ${name}: ${message}`, ...args);
}

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

    componentDidMount() {
        logger('DynamicAccordion', 'componentDidMount()');
    }

    componentDidUpdate(prevProps, prevState) {
        logger('DynamicAccordion', 'componentDidUpdate()', prevProps);
    }

    componentWillUnmount() {
        logger('DynamicAccordion', 'componentWillUnmount()');
    }

    public render(): any {
        logger('DynamicAccordion', 'render()');
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
