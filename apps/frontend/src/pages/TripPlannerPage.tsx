import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, reload } from "ionicons/icons";
import { AsiaMilesIcon } from "~/features/common";
import { StarRating } from "~/features/common/components/StartRating";
import { trpc } from "~/lib/trpcClient";

export function TripPlanner() {
  const tripActivities = trpc.ai.genTripActivities.useMutation();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative flex  h-[280px] flex-col bg-[url(/images/Tokyo.png)] bg-cover bg-center">
          <div
            className="-z-1 absolute bottom-0 w-full opacity-70"
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

          <div className="z-10 mt-auto w-full p-4 text-white">
            <div className="flex justify-between">
              <div className="p-0">
                <div className="font-bold">Tokyo, Japan</div>
                <div>1 Adults</div>
                <div>19 Nov 2023 - 26 Nov 2023</div>
              </div>

              <div>
                <IonButton
                  color="light"
                  fill="outline"
                  onClick={async () => {
                    const result = await tripActivities.mutateAsync({
                      adults: 1,
                      children: 2,
                      travelDate: "2023-11-19",
                      destination: "Tokyo, Japan",
                    });

                    console.log(result);
                  }}
                >
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
        </div>

        <div className="p-4 font-semibold">
          <div className="w-full pb-3 ">Hotel</div>
          <IonGrid className="p-0 pb-6">
            <IonRow className="gap-2 ">
              <IonCol className="flex flex-col gap-1 rounded-xl  border-[1px] px-4 py-3 text-sm font-medium">
                <div className="opacity-50 ">Check In</div>
                <div className=" text-primary">19 Nov 2023</div>
              </IonCol>
              <IonCol className="flex flex-col gap-1 rounded-xl border-[1px] px-4 py-3 text-sm font-medium">
                <div className="opacity-50 ">Check Out</div>
                <div className=" text-primary">26 Nov 2023</div>
              </IonCol>
            </IonRow>
          </IonGrid>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row ">
                <img src="/images/Hotel1.png" className="w-[66px]" />
                <div className="flex flex-col gap-1 pl-2 ">
                  <div>Shinagawa Prince Hotel</div>
                  <div className="flex flex-row items-center">
                    <StarRating star={4} />
                    <div className="pl-1 text-xs opacity-50 ">Best Match</div>
                  </div>
                  <div className="flex flex-row items-center font-medium text-primary">
                    <AsiaMilesIcon />
                    <div className="flex flex-row gap-1 text-sm ">
                      2500 <div className="text-black opacity-50 ">or</div>{" "}
                      <div className="text-black ">HK$946 per night</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <IonCheckbox />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
