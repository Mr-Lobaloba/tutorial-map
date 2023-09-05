/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let openPopups: any[] = [];



// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

function openNewPopup(popupId: string, message: string, buttons: any[] = []) {
    const popup = WA.ui.openPopup(popupId, message, buttons);
    openPopups.push(popup);
}

function closeAllPopups() {
    for (const popup of openPopups) {
        popup.close();
    }
    openPopups = [];
}

    WA.controls.disablePlayerProximityMeeting();




    WA.room.area.onEnter('phrase01').subscribe(() => {
        openNewPopup("phrase01Popup", "Oh no... I don't have enough money to buy fresh fish", []);
    })

    WA.room.area.onLeave('phrase01').subscribe(closeAllPopups);

    WA.room.area.onEnter('phrase02').subscribe(() => {
        openNewPopup("phrase02Popup", "Hi youngster... Can you help auntie reach for the soup? Auntie cannot reach...", []);
    })

    WA.room.area.onLeave('phrase02').subscribe(closeAllPopups);

    WA.room.area.onEnter('phrase03').subscribe(() => {
        openNewPopup("phrase03Popup", "Hmmm what meat should I get?", []);
    })

    WA.room.area.onLeave('phrase03').subscribe(closeAllPopups);


    WA.room.area.onEnter('phrase04').subscribe(() => {
        openNewPopup("phrase04Popup", "Oh, hi there..", []);
    })

    WA.room.area.onLeave('phrase04').subscribe(closeAllPopups);

    WA.room.area.onEnter('phrase05').subscribe(() => {
        openNewPopup("phrase05Popup", "Hello, how are you?", []);
    })

    WA.room.area.onLeave('phrase05').subscribe(closeAllPopups);

    WA.room.area.onEnter('phrase06').subscribe(() => {
        openNewPopup("phrase06Popup", "Hello!", []);
    })

    WA.room.area.onLeave('phrase06').subscribe(closeAllPopups);

    WA.room.area.onEnter('phrase07').subscribe(() => {
        openNewPopup("phrase07Popup", "Well, hello youngster", []);
    })

    WA.room.area.onLeave('phrase07').subscribe(closeAllPopups);






    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));




