function Note() {
  this.add();
}

Note.prototype.add = function () {
  let noteData = getNoteData();
  this.text = noteData.text;
  this.startTime = noteData.startTime;
  this.finishTime = noteData.finishTime;
}

Note.prototype.check = function(){
  let currentTime = getTimeFromDate(new Date);
  if(){

  }

}

function getNoteData() {
  let reminderText = prompt("Text");
  let reminderStartTime = prompt("StartTime");
  let reminderFinishTime = prompt("FinishTime");

  let result = {
    text: reminderText,
    startTime: reminderStartTime,
    finishTime: reminderFinishTime
  }

  return result;
}

function checkInputTime(time){
  if(time.length != 5) 
    return false;
  
  let hour = parseInt(time.substr(0, 2));
  let min = parseInt(time.substr(3,2));

  if(hour < 0 || hour > 23){
    return false;
  }else if(min < 0 || min > 59){
    return false;
  }

  return true;
}

function getTimeFromDate(date){
  let hour = date.getHours < 10;
  let min = date.getMinutes < 10;
  let time = {
    hour: hour,
    min: min
  }

  return time;
}