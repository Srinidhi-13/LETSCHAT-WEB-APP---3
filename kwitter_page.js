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
function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name : user_name,
message : msg,
like:0
      });
document.getElementById("msg").value="";
};
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name1+"<img class='user-tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning> id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
      