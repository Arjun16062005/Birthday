const text1 = "Every moment I've spent knowing you has been a gift. Your kindness, your laugh, and the way you see the world it all makes my life feel so much more beautiful. Today is just the beginning of celebrating you. Happy Birthday to someone who truly has my heart.";
const text2 = "Ammulu,\n\nI just wanted to tell you that I’m here for you, no matter what. If you ever want to talk, I’ll listen. If you need some space, I’ll understand that too, I’ll always respect whatever you need.\n\nI care about you a lot, and seeing you happy genuinely makes me happy. When you’re having a bad day, I want you to know you don’t have to go through it alone. Whether you’re stressed, tired, or upset, I’ll always be there to help. I want to look after you in a way no one else has. I’ll be there to cook for you whenever you’re hungry, to help with your aches when you’re tired, and to take care of you like a princess whenever you’re not feeling well or going through your periods. What is ego..bullshit if you ask I'll literally do all the things for you.\n\nI don’t think you need to change anything about yourself. The person you are today is already perfect, and that is exactly who I care about.\n\nI’d do all of this for you gladly because that’s how I feel about you. Me loving you is like wanting to live the rest of my life with you. I want to grow with you, i really want to say loudly to this world see this is my life partner and my everything. But the one thing I can’t do is make you fall in love with me. That’s something only your heart can decide.";

function type(text, elementId) {
    let i = 0;
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 30);
        }
    }
    typing();
}

function openModal() {
    document.getElementById("modalText").innerText = text2;
    document.getElementById("messageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("messageModal").style.display = "none";
}

function triggerCelebration() {
    const overlay = document.createElement("div");
    overlay.className = "celebration-overlay";
    overlay.innerHTML = `<div class="wow-message"><h1>HAPPY BIRTHDAY AMMULU!</h1></div>`;
    document.body.appendChild(overlay);

    for(let i=0; i<60; i++) {
        const h = document.createElement("div");
        h.innerHTML = "❤"; h.className = "heart-burst";
        h.style.left = Math.random() * 100 + "vw";
        h.style.top = Math.random() * 100 + "vh";
        h.style.fontSize = (Math.random() * 50 + 30) + "px";
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 3000);
    }
    setTimeout(() => overlay.remove(), 4000);
}

document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('bgMusic').play();
    type(text1, "typewriter");
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-follower');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    const bg = document.getElementById('bgPhoto');
    const card = document.getElementById('card');
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    card.style.transform = `rotateY(${-x/2}deg) rotateX(${y/2}deg)`;
});

setInterval(() => {
    const h = document.createElement("div");
    h.innerHTML = "❤"; h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts-container").appendChild(h);
    setTimeout(() => h.remove(), 6000);
}, 600);
