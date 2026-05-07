// FILTRO
const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.card');

pills.forEach(btn=>{
  btn.addEventListener('click',()=>{
    pills.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');

    const user = btn.dataset.user;

    cards.forEach(card=>{
      if(user === "all" || card.dataset.user === user){
        card.style.display="block";
      }else{
        card.style.display="none";
      }
    });
  });
});

// MODAL TWITCH
function openStream(user){
  const modal = document.getElementById('modal');
  const frame = document.getElementById('twitchFrame');

  const parent = location.hostname + (location.port ? ':' + location.port : '');
  const src = `https://player.twitch.tv/?channel=${user}&parent=${parent}`;
  console.log('Twitch parent:', parent);
  console.log('Setting twitchFrame.src ->', src);
  frame.src = src;
  frame.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
  modal.style.display = "flex";
}

function showChat(user){
  const modal = document.getElementById('modal');
  const frame = document.getElementById('twitchFrame');

  const parent = location.hostname + (location.port ? ':' + location.port : '');
  const src = `https://www.twitch.tv/embed/${user}/chat?parent=${parent}`;
  console.log('Twitch parent:', parent);
  console.log('Setting twitchFrame.src ->', src);
  frame.src = src;
  frame.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
  modal.style.display = "flex";
}

function closeModal(){
  document.getElementById('modal').style.display = "none";
  document.getElementById('twitchFrame').src = "";
}