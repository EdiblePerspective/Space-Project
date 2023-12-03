const navHeader = document.getElementById('navHeader');

navHeader.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
    console.dir(event.target.id);
    console.log("Confirmation Recieved... Nuclear Device Launched at Target Location")
})
function trash(){
let A=prompt("Are you sure you want to delete 'C:\Windows\System32'?")
  if (A!=null){
    alert("Positive confirmation recieved, deletion in progress...")
  }
}
const song = document.getElementById("song");
function playTheSongOfMyPeople(){
  audioPlay.play();
}
song.addEventListener("click", playTheSongOfMyPeople);

document.documentElement.style.scrollBehavior = "smooth"; 


