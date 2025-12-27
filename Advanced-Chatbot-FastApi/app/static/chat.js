async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value;
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `<div class="message user">${message}</div>`;

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  chatBox.innerHTML += `<div class="message bot">${data.reply}</div>`;

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}
function typeText(text, element) {
  let index = 0;

  const typing = setInterval(() => {
    element.textContent += text[index];
    index++;

    if (index === text.length) {
      clearInterval(typing);
    }
  }, 30); // speed (30ms)
}
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
