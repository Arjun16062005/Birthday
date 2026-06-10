const cursor = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    const bg = document.getElementById('bgPhoto');
    const card = document.getElementById('card');
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    card.style.transform = `rotateY(${-x/2}deg) rotateX(${y/2}deg)`;
});

const message = "Every moment I've spent knowing you has been a gift. Your kindness, your laugh, and the way you see the world it all makes my life feel so much more beautiful. Today is just the beginning of celebrating you. Happy Birthday to someone who truly has my heart.";

document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('bgMusic').play();
    let i = 0;
    function type() {
        if (i < message.length) {
            document.getElementById("typewriter").innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 40);
        } else {
            document.getElementById('signature').innerText = "With all my love.";
        }
    }
    type();
});

// This creates a feeling of a journey that never stops
const startDate = new Date("May 23, 2026").toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
document.getElementById("dateCounter").innerText = `OUR INFINITY JOURNEY BEGAN ON ${startDate.toUpperCase()}`;
setInterval(() => {
    const h = document.createElement("div");
    h.innerHTML = "❤"; h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts-container").appendChild(h);
    setTimeout(() => h.remove(), 6000);
}, 600);