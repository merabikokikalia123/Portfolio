 const projects = [
    { 
        title: "Agents and Footballers Website", 
        description: "C# and Angular project", 
        link: "https://sportscout.com.ge/home",
        tech: ["csharp","angular","css","javascript"]
    },
    { 
        title: "Football Club Page", 
        description: "JS/HTML/CSS", 
        link: "https://fcorbi.ge/#",
        tech: ["javascript","css",]
    },
    { 
        title: "Hotel Booking Project", 
        description: "Angular-based hotel booking system", 
        link: "https://hotels-roan.vercel.app/",
        tech: ["angular","css","javascript","csharp"]
    }
];

const techLogos = {
    "csharp": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", name:"C#" },
    "javascript": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name:"JavaScript" },
    "css": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name:"CSS" },
    "angular": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", name:"Angular" }
};

const projectsContainer = document.getElementById('projects-container');

projects.forEach(proj => {
    const col = document.createElement('div');
    col.classList.add('col-md-4','mb-4','project-card');
    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${proj.title}</h5>
                <p class="card-text">${proj.description}</p>
                <div class="mb-3 d-flex gap-2">
                    ${proj.tech.map(t => `
                        <img src="${techLogos[t].url}" alt="${techLogos[t].name}" title="${techLogos[t].name}" style="width:25px; height:25px;">
                    `).join('')}
                </div>
                <a href="${proj.link}" class="btn btn-dark mt-auto" target="_blank">Visit</a>
            </div>
        </div>
    `;
    projectsContainer.appendChild(col);
});

    // WhatsApp contact
    document.getElementById('contact-form').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const phoneNumber = "+995551009844"; 
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`სახელი: ${name}\nელფოსტა: ${email}\nმესიჯი: ${message}`)}`;
        window.open(url,"_blank");
        e.target.reset();
    });

    // Scroll-to-top
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = () => scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    scrollBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

    // Dark/Light toggle
    document.getElementById('darkModeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
