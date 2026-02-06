const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const noMessages = [
  "Are you sure? 😳",
  "Think again 💭",
  "Don’t break my heart 💔",
  "You can’t say no 😝",
  "Nice try 😏",
  "Still no? 👀"
];

let count = 0;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  message.innerText = noMessages[count % noMessages.length];
  count++;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center;">
      <h1>Yaaay 💖💖💖</h1>
      <p>You just made my day 🥰</p>
    </div>
  `;
});