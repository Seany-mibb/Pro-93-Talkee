const firebaseConfig = {
      apiKey: "AIzaSyAItiqLaEsKioh5i1S1ddLW0Awmx7PcDXg",
      authDomain: "huzzah-7dcfa.firebaseapp.com",
      databaseURL: "https://huzzah-7dcfa-default-rtdb.firebaseio.com",
      projectId: "huzzah-7dcfa",
      storageBucket: "huzzah-7dcfa.appspot.com",
      messagingSenderId: "209037821998",
      appId: "1:209037821998:web:118c30e16a3eb944e237bf"
    };

    if(!firebase.apps.length)
    {
        firebase.initializeApp(firebaseConfig);
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout()
{
      window.location = "index.html"
}

function addRoom()
{
      var room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name", room_name)
      firebase.database().ref("/").child(room_name).update({
            what:"talk room"
      })
      document.getElementById("room_name").value = "";
}