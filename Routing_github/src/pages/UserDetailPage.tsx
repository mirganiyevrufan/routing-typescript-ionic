import { RouteComponentProps } from "react-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
interface UserDetailPageProps
  extends RouteComponentProps<{
    name: string;
  }> {}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ match }) => {
  let name = match.params.name.toUpperCase();

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>User Greeting Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>Hi, {name}</IonContent>
      </IonPage>
    </>
  );
};

export default UserDetailPage;
