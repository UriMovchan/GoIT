const days = document.querySelector('[data-value="days"]'),
    hours = document.querySelector('[data-value="hours"]'),
    mins = document.querySelector('[data-value="mins"]'),
    secs = document.querySelector('[data-value="secs"]');
      
class CountdownTimer {
  constructor(config) {
    this.startTime = new Date(config.targetDate);
    this.start()
  }
  
  start() {  
    setInterval(this.timer, 1000, this.startTime);
  }

  timer( startTime ) {
    let time = new Date() - startTime;

    days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    secs.textContent = Math.floor((time % (1000 * 60)) / 1000);
  }
}

new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Jul 17, 2019'),
});







