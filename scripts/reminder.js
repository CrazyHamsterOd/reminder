function Reminder() {
  this.plannedNote = [];
  this.activeNote = [];
  this.doneNore = [];
}

Reminder.prototype.addNote = function () {
  let newNote = new Note();
  this.plannedNote.push(newNote);
}

Reminder.prototype.startCheck = function () {
  let self = this;
  let interval = setInterval(function(){
    self.plannedNote.map(function(el, i, arr){
      

    });
    self.plannedNote.map(function(el, i, arr){
      
    });
  }, 1000);
}

Reminder.prototype.draw = function(){
  let activeWrapper = document.getElementsByClassName("activeWrapper")[0];
  let plannedWrapper = document.getElementsByClassName("plannedWrapper")[0];
  let doneWrapper = document.getElementsByClassName("doneWrapper")[0];
  plannedWrapper.innerHTML = "";
  doneWrapper.innerHTML = "";
  //debugger;
  drawNote(this.activeNote, activeWrapper);
  drawNote(this.plannedNote, plannedWrapper);
  drawNote(this.doneNore, doneWrapper);
}

function drawNote(arr, div){
  arr.map(function(el){
    let noteDiv = document.createElement("div");
    noteDiv.className = "plannedNote"; //debugger;
    noteDiv.innerHTML = el.text + el.time;
    div.appendChild(noteDiv);
  });
}

function addNote(){
  newReminder.addNote();
  newReminder.draw();
}

newReminder = new Reminder();
newReminder.startCheck();

