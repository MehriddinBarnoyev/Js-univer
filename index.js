document.getElementById("changeLinkButton").onclick = function () {
  let link = document.getElementById("myLink");
  link.innerHTML = "Yangi link";
  link.href = "https://www.youtube.com";
};

let task4 = document.getElementById("Task4");
let btnClick = document.getElementById("btn4");

btnClick.onclick = function () {
  if (task4.className === "task14") {
    task4.className = "task4";
  } else {
    task4.className = "task14";
  }
  console.log(task4.className);
};

const darkLightMode = document.getElementById("body1");
const btnMode = document.getElementById("btnMode");

btnMode.onclick = function () {
  if (darkLightMode.className === "body2") {
    darkLightMode.className = "body3";
    console.log("body3 clasi")
  }
  else if(darkLightMode.className === 'body3'){
    darkLightMode.className = 'body2'
  }
  console.log(darkLightMode);
};

const btnAnimation = document.getElementById("animationBtn"); // Reference to the correct button
const names = document.getElementById("name");
console.log(names.className);

btnAnimation.onclick = function () {
  if (btnAnimation.innerHTML === "Stop") {
    btnAnimation.innerHTML = "Start";
    document.getElementById("name").className = "aniStop";
  } else {
    btnAnimation.innerHTML = "Stop";
    document.getElementById("name").className = "aniStart";
  }
};
