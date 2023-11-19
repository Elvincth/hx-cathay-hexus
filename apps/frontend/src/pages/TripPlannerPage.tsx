import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, reload } from "ionicons/icons";

export function TripPlanner() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative flex  h-[280px] flex-col bg-[url(/images/Tokyo.png)] bg-cover bg-center">
          <div
            className="absolute bottom-0 w-full -z-1 opacity-70"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 50%)",
              height: "137px",
            }}
          />

          <IonToolbar className="pt-8 [--background:transparent]">
            <IonButtons slot="start">
              <IonButton
                color="dark"
                routerLink="/manage-trip"
                routerDirection="back"
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <div className="z-10 w-full p-4 mt-auto text-white">
            <div className="flex justify-between">
              <div className="p-0">
                <div className="font-bold">Tokyo, Japan</div>
                <div>1 Adults</div>
                <div>19 Nov 2023 - 26 Nov 2023</div>
              </div>

              <div>
                <IonButton color="light" fill="outline">
                  <IonIcon icon={reload} />
                </IonButton>
              </div>
            </div>

            <div className="mt-2 flex w-full gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
              {[
                "Cultural Immersion",
                "Exploration",
                "Photography",
                "Nature",
              ].map((tag, index) => (
                <div
                  key={index}
                  className="flex w-fit items-center whitespace-nowrap rounded-xl bg-[#016564] p-1 px-1.5 py-1 text-xs font-medium text-white "
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* body */}
          <div>Activity</div>

          
        </div>
      </IonContent>
    </IonPage>
  );
}
