import{b as a}from"./init-22028896.js";console.log("Script started successfully");let e;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("openTabButtonArea").subscribe(()=>{e=WA.ui.openPopup("openTabButtonPopup","Would you like to open shopping cart?",[{label:"Open shopping cart",className:"primary",callback:r=>{WA.nav.openTab("https://docs.google.com/spreadsheets/d/1MjueV7HdBzLQ4M_MrElqaLNf_hK51CiUMllWgL9Tkps/edit#gid=215325378/"),r.close()}}])}),WA.room.area.onLeave("openTabButtonArea").subscribe(o),WA.room.area.onEnter("phrase01").subscribe(()=>{e=WA.ui.openPopup("phrase01Popup","Oh no... I don't have enough money to buy fresh fish",[])}),WA.room.area.onLeave("phrase01").subscribe(o),WA.room.area.onEnter("phrase02").subscribe(()=>{e=WA.ui.openPopup("phrase02Popup","Hi youngster... Can you help auntie reach for the soup? Auntie cannot reach...",[])}),WA.room.area.onLeave("phrase02").subscribe(o),WA.room.area.onEnter("phrase03").subscribe(()=>{e=WA.ui.openPopup("phrase03Popup","Hmmm what meat should I get?",[])}),WA.room.area.onLeave("phrase03").subscribe(o),WA.room.area.onEnter("phrase04").subscribe(()=>{e=WA.ui.openPopup("phrase04Popup","Oh, hi there..",[])}),WA.room.area.onLeave("phrase04").subscribe(o),WA.room.area.onEnter("phrase05").subscribe(()=>{e=WA.ui.openPopup("phrase05Popup","Hello, how are you?",[])}),WA.room.area.onLeave("phrase05").subscribe(o),WA.room.area.onEnter("phrase06").subscribe(()=>{e=WA.ui.openPopup("phrase06Popup","Hello!",[])}),WA.room.area.onLeave("phrase06").subscribe(o),WA.room.area.onEnter("phrase07").subscribe(()=>{e=WA.ui.openPopup("phrase07Popup","Well, hello youngster",[])}),WA.room.area.onLeave("phrase07").subscribe(o),WA.nav.openTab("https://www.wikipedia.org/"),a().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));function o(){e!==void 0&&(e.close(),e=void 0)}
