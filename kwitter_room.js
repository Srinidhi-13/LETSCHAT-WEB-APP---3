var firebaseConfig = {
  apiKey: "AIzaSyCbM5GqSdweRSCwSoawKXQw9aVGHABce1E",
  authDomain: "kwitter-1-374cb.firebaseapp.com",
  databaseURL: "https://kwitter-1-374cb-default-rtdb.firebaseio.com",
  projectId: "kwitter-1-374cb",
  storageBucket: "kwitter-1-374cb.appspot.com",
  messagingSenderId: "452139282720",
  appId: "1:452139282720:web:c5000b00120a08432ba745"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Names -"+Room_names);
row = "<div class = 'room_name' id ='"+Room_names+"' onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    });
  });

}

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
    window.location = "index.html";
}
