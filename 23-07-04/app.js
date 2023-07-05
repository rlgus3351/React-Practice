const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText="Mouse is here!";
}

function handleMouseLeave(){
    title.innerText="Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor='tomato';
}

function handleWindowCopy(){
    alert("copy");
}

function handleWindowOffline(){
    alert("SOS no wifi");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);