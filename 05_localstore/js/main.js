let colors = ["red", "green", "blue", "orange", "purple"];
let lightIndex = 0;


window.onload = () => {
  loadBlocks();
  loadTrafficLight();
};


function addBlock() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const block = document.createElement("div");
  block.className = "block";
  block.style.backgroundColor = color;
  document.getElementById("blocks-container").appendChild(block);


  saveBlocks();
}

function saveBlocks() {
  const blocks = document.querySelectorAll(".block");
  const blockColors = Array.from(blocks).map(b => b.style.backgroundColor);
  localStorage.setItem("blocks", JSON.stringify(blockColors));
}

function loadBlocks() {
  const saved = localStorage.getItem("blocks");
  if (saved) {
    const blockColors = JSON.parse(saved);
    blockColors.forEach(color => {
      const block = document.createElement("div");
      block.className = "block";
      block.style.backgroundColor = color;
      document.getElementById("blocks-container").appendChild(block);
    });
  }
}


function nextLight() {
  const lights = document.querySelectorAll(".light");
  lights.forEach(light => light.style.backgroundColor = "grey");

  lights[lightIndex].style.backgroundColor = ["red", "orange", "green"][lightIndex];
  lightIndex = (lightIndex + 1) % 3;

  localStorage.setItem("trafficLight", lightIndex);
}

function loadTrafficLight() {
  const savedIndex = localStorage.getItem("trafficLight");
  if (savedIndex !== null) {
    lightIndex = Number(savedIndex);
    nextLight();
    lightIndex = Number(savedIndex);
  }
}
