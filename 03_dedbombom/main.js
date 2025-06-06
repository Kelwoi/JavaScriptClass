function start() {
    const newWin = window.open("", "", "width=410,height=410");
  
    setTimeout(() => {
      newWin.resizeTo(500, 500);
    }, 2000);
  
    setTimeout(() => {
      newWin.moveTo(200, 200);
    }, 4000);
  
    setTimeout(() => {
      newWin.close();
    }, 6000);
  }
  
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  