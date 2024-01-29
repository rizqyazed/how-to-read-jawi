function test() {
    let latin = document.getElementById("latin");
    let jawi = document.getElementById("jawi");
    console.log("jawi:" + jawi.style.display);
    console.log("latin:" + latin.style.display);
    if (jawi.style.display === "none") {
        jawi.style.display = "inline";
        latin.style.display = "none";
        console.log("jawi");
    } else if (jawi.style.display === "inline"){
        latin.style.display = "inline";
        jawi.style.display = "none";
        console.log("latin");
    }
}

const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
    let timeout;
  
    const runInterval = () => {
      const timeoutFunction = () => {
        intervalFunction();
        runInterval();
      };
  
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  
      timeout = setTimeout(timeoutFunction, delay);
    };
  
    runInterval();
  
    return {
      clear() { clearTimeout(timeout) },
    };
  };

setRandomInterval(test, 3000, 10000)