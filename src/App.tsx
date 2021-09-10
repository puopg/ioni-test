import React, { useState, useEffect } from "react";
import { IonApp, IonContent, IonButton, IonModal } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";


const ComponentA = (props: any): React.ReactElement => {
  return (
    <div>
      <IonButton onClick={props.close}>Close A</IonButton>
    </div>
  );
};

const ComponentB = (props: any): any => {
  useEffect(() => {
    alert("I SHOULD NEVER BE SEEN");
  }, []);

  return "YOU SHOULD NEVER SEE ME";
};

const App: React.FC = () => {
  const [isOpenA, setA] = useState(false);

  return (
    <IonApp>
      <IonContent>
        <IonModal isOpen={isOpenA}>
          <ComponentA close={() => setA(false)} />
        </IonModal>
        <IonModal isOpen={false}>
          <ComponentB />
        </IonModal>
        <div>
          Open A, Close A, and watch ComponentB Mount (it will alert on mount
        </div>
        <IonButton
          onClick={() => {
            setA(!isOpenA);
          }}
        >
          Open A
        </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default App;
