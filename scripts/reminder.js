function Reminder() {
  this.plannedNote = [];
  this.activeNote = [];
  this.doneNote = [];
}

Reminder.prototype.addNote = function () {
  let newNote = new Note();
  this.plannedNote.push(newNote);
}

Reminder.prototype.startCheck = function () {
  let self = this;
  let interval = setInterval(function(){
    self.plannedNote.map(function(el, i, arr){
      if(el.checkStatus(true)){
        arr.splice(i, 1);
        self.activeNote.push(el);
      }
    });
    self.activeNote.map(function(el, i, arr){
      if(el.checkStatus(false)){
        arr.splice(i, 1);
        self.doneNote.push(el);
      }
    });
    self.draw();
  }, 1000);
}

Reminder.prototype.draw = function(){
  let activeWrapper = document.getElementsByClassName("activeWrapper")[0];
  let plannedWrapper = document.getElementsByClassName("plannedWrapper")[0];
  let doneWrapper = document.getElementsByClassName("doneWrapper")[0];
  activeWrapper.innerHTML = "";
  plannedWrapper.innerHTML = "";
  doneWrapper.innerHTML = "";
  drawNote(this.activeNote, activeWrapper);
  drawNote(this.plannedNote, plannedWrapper);
  drawNote(this.doneNote, doneWrapper);
}

function drawNote(arr, div){
  arr.map(function(el){
    let noteDiv = document.createElement("div");
    noteDiv.className = "plannedNote";
    noteDiv.innerHTML = el.text +" "+el.startTime.hour+" "+el.finishTime.min;
    div.appendChild(noteDiv);
  });
}

function addNote(){
  newReminder.addNote();
  newReminder.draw();
}

newReminder = new Reminder();
newReminder.startCheck();

