function Note() {
  this.add();
}

Note.prototype.add = function () {
  let noteData = getNoteData();
  this.text = noteData.text;
  this.startTime = noteData.startTime;
  this.finishTime = noteData.finishTime;
}

Note.prototype.checkStatus = function (planned) {
  let currentTime = getTimeFromDate(new Date, false);
  let noteTime = (planned) ? this.startTime : this.finishTime ;
  if ((currentTime.hour >= noteTime.hour && currentTime.min >= noteTime.min)){
    return true;
  }

  return false;
}

function getNoteData() {
  let reminderText = prompt("Enter text note");
  let reminderStartTime = prompt("Enter start time (format HH:MM)");
  let reminderFinishTime = prompt("Enter finish time (format HH:MM)");

  let result = {
    text: reminderText,
    startTime: getTimeFromDate(reminderStartTime, true),
    finishTime: getTimeFromDate(reminderFinishTime, true)
  }

  return result;
}

function checkInputTime(time) {
  if (time.length != 5)
    return false;

  let hour = parseInt(time.substr(0, 2));
  let min = parseInt(time.substr(3, 2));

  if (hour < 0 || hour > 23) {
    return false;
  } else if (min < 0 || min > 59) {
    return false;
  }

  return true;
}

function getTimeFromDate(date, prompt) {
  let hour = (prompt) ? date.substr(0, 2) : date.getHours();
  let min = (prompt) ? date.substr(3, 2) : date.getMinutes();
  let time = {
    hour: parseInt(hour),
    min: parseInt(min)
  }

  return time;
}

