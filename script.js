function go(page){ window.location.href = page; }

function makeHearts(){
  const icons=["❤️","💖","💕","💗","💓","✨"];
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=icons[Math.floor(Math.random()*icons.length)];
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(16+Math.random()*20)+"px";
    h.style.animationDuration=(5+Math.random()*5)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),10000);
  },500);
}
makeHearts();

function celebrate(){
  const icons=["🎉","🎈","❤️","💖","🥳","✨","🎂","💕","🌸"];
  for(let i=0;i<60;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.textContent=icons[Math.floor(Math.random()*icons.length)];
    c.style.left=Math.random()*100+"vw";
    c.style.animationDuration=(2+Math.random()*3)+"s";
    c.style.animationDelay=(Math.random()*1)+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),6000);
  }
}
