
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
   apiKey: "AIzaSyDzGqr_OxFmu-tOYYgRGQ2PPugyN4Re1I4",
   authDomain: "kwitter-42f8b.firebaseapp.com",
   databaseURL: "https://kwitter-42f8b-default-rtdb.firebaseio.com",
   projectId: "kwitter-42f8b",
   storageBucket: "kwitter-42f8b.appspot.com",
   messagingSenderId: "580642734452",
   appId: "1:580642734452:web:8d09c06089545d12612c21"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom() { room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
 } function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
       Room_names = childKey; 
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row; }); }); } 
         getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "kwitter.html";
}