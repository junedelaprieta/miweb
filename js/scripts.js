// FILTRO
const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.card');

pills.forEach(btn=>{
  btn.addEventListener('click',()=>{
    pills.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');

    const user = btn.dataset.user;

    cards.forEach(card=>{
  card.style.display = "block";
});
  });
});

// MODAL TWITCH
function openStream(user){
  const modal = document.getElementById('modal');
  const frame = document.getElementById('twitchFrame');

  frame.src = `https://player.twitch.tv/?channel=${user}&parent=localhost&parent=127.0.0.1&parent=junedelaprieta.github.io`;

  modal.style.display = "flex";
}

function showChat(user){
  const modal = document.getElementById('modal');
  const frame = document.getElementById('twitchFrame');

  frame.src = `https://player.twitch.tv/?channel=${user}&parent=localhost&parent=127.0.0.1&parent=junedelaprieta.github.io`;

  modal.style.display = "flex";
}

function closeModal(){
  document.getElementById('modal').style.display = "none";
  document.getElementById('twitchFrame').src = "";
}