//create our to do list array
var toDoList = ["Wake Up","Shower","Leave House"];

function viewList() {
  //get our div
  var div = document.getElementById("myDiv");

  //print each array item into the div
  for(i = 0; i < toDoList.length; i++){
    div.innerHTML = div.innerHTML + "</br>" + i + ". " + toDoList[i];
  }
}
