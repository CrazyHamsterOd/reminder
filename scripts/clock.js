function Clock() {

}

Clock.prototype.draw = function () {
  let currenData = new Date();
  let parentElem = document.getElementsByClassName("clockWrapper")[0];
  let divClock = document.createElement("div");
  divClock.innerHTML = (currenData.toLocaleString()).substr(12, 8);
  parentElem.innerHTML = "";
  parentElem.appendChild(divClock);
}

Clock.prototype.start = function () {
  let self = this;
  let interval = setInterval(function(){
    self.draw();
  }, 1000);
}

newClock = new Clock;
newClock.start();