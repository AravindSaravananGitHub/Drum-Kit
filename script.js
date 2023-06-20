const kits = ["crash", "kick", "snare", "tom"];
const container = document.querySelector(".container");

kits.forEach((kit) => {
  //console.log(kit);
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.style.backgroundImage = `url(image/${kit}.png)`;
  btn.innerText = kit;
  container.appendChild(btn);
  const audio = document.createElement("audio");
  audio.src = `sound/edited${kit}.mpeg`;
  container.appendChild(audio);

  btn.addEventListener("click", () => {
   audio.pause();
    audio.play();
  });

  window.addEventListener("keydown", (e) => {
    //console.log(e);
    if (e.key === kit.slice(0, 1)) {
      audio.play();
      btn.style.transform = "scale(.9)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    }
  });
});
