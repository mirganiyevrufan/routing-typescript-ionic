import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSlides,
  IonSlide,
  IonList,
  IonLabel,
  useIonAlert,
} from "@ionic/react";
import "./Home.css";
import { personSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
const Home: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Routing App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Routing App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonIcon icon={personSharp} />
          <IonInput
            value={input}
            onIonChange={(e: any) => setInput(e.target.value)}
            placeholder=" Enter your name"
          ></IonInput>
          <IonButton href={"/greetings/name=" + input} shape="round">
            Click me!
          </IonButton>
        </IonItem>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Rufan Mirganiyev</IonCardTitle>
            <IonCardSubtitle>One day in New York</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonSlides>
              <IonSlide>
                <img
                  onClick={() =>
                    presentAlert({
                      header: "Alert",
                      subHeader: "Important message",
                      message: "This is the first photo",
                      buttons: ["OK"],
                    })
                  }
                  src="assets/images/Rufan.jpg"
                  alt=""
                />
              </IonSlide>
              <IonSlide>
                <img
                  onClick={() =>
                    presentAlert({
                      header: "Alert",
                      subHeader: "Important message",
                      message: "This is the second photo",
                      buttons: ["OK"],
                    })
                  }
                  src="assets/images/WTC.jpg"
                  alt=""
                />
              </IonSlide>
              <IonSlide>
                <img
                  onClick={() =>
                    presentAlert({
                      header: "Alert",
                      subHeader: "Important message",
                      message: "This is the third photo",
                      buttons: ["OK"],
                    })
                  }
                  src="assets/images/AutumnNY.jpg"
                  alt=""
                />
              </IonSlide>
            </IonSlides>
            <IonList>
              <IonLabel>List of the popular sightseeing places in nyc</IonLabel>
              <IonItem>
                <IonLabel>Central Park</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>The Metropolitan Museum of Art</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Statue of Liberty</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Empire State Building</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Brooklyn Bridge</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
