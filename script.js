const profils = [
    {
        id: "idriss",
        name: "Idriss ADEL",
        age: "",
        image: "./assets/persos/idriss.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "basile",
        name: "Basile ALEVEQUE",
        age: "18 ans",
        image: "./assets/persos/basile.png",
        accroche: "Tout vient à point à qui sait attendre.",
        signe: "poisson",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident nam, autem quas delectus amet dolorum dolor, error at, a dolore asperiores aspernatur tenetur eum quo labore quisquam qui nesciunt ? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet elit.",
        soft: "Soft 1, Soft 2, Soft 3, Soft 4, Soft 5",
        expertise: ["sql", "symfony", "wordpress", "angular", "css", "html", "js", "php"],
        hobbies: "Hobbies 1, Hobbies 2, Hobbies 3, Hobbies 4, Hobbies 5",
        linkedin: "https://www.linkedin.com/in/basile-aleveque-dessolin-75a2a9278",
        github: "https://github.com/b-alvd",
        cv: "./assets/cv/basile.pdf"
    },
    {
        id: "zohra",
        name: "Zohra BEKKAI",
        age: "",
        image: "./assets/persos/zohra.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "anthony",
        name: "Anthony BOSSUT",
        age: "",
        image: "./assets/persos/anthony.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "florian",
        name: "Florian BYNENS",
        age: "",
        image: "./assets/persos/florian.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "daniel",
        name: "Daniel COPPI",
        age: "",
        image: "./assets/persos/daniel.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "lana",
        name: "Lana KARMAOUI",
        age: "",
        image: "./assets/persos/lana.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "timothee",
        name: "Timothée LAPOV",
        age: "",
        image: "./assets/persos/timothee.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "joseph",
        name: "Joseph LE PIOUFFLE",
        age: "",
        image: "./assets/persos/joseph.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "emma",
        name: "Emma MINARY",
        age: "",
        image: "./assets/persos/emma.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "nathalia",
        name: "Nathalia PEREIRA",
        age: "",
        image: "./assets/persos/nathalia.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "maxime",
        name: "Maxime PORTA",
        age: "",
        image: "./assets/persos/maxime.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "isaac",
        name: "Isaac RASOLOFO",
        age: "",
        image: "./assets/persos/isaac.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "robin",
        name: "Robin RAVIER",
        age: "",
        image: "./assets/persos/robin.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "hugo",
        name: "Hugo SIMONEAU",
        age: "",
        image: "./assets/persos/hugo.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    },
    {
        id: "mostafa",
        name: "El Mostafa TITAH",
        age: "",
        image: "./assets/persos/mostafa.png",
        accroche: "",
        signe: "",
        desc: "",
        expertise: [],
        hobbies: "",
        linkedin: "",
        github: "",
        cv: ""
    }
];

let currentIndex = 0;

// Cartes de profil
function createProfilCards() {
    const profilsContainer = document.getElementById('profils-container');

    profils.forEach((profil, index) => {
        const card = document.createElement('div');
        card.classList.add('profil-card');
        card.onclick = () => showPopup(index);
        
        const image = document.createElement('div');
        image.classList.add('profil-image');
        image.style.backgroundImage = `url(${profil.image})`;

        const identite = document.createElement('div');
        identite.classList.add('profil-identite');
        identite.textContent = profil.name;

        card.appendChild(image);
        card.appendChild(identite);

        profilsContainer.appendChild(card);
    });
}

// Pop-up
function showPopup(index) {
    currentIndex = index;
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    const expertiseContainer = document.createElement('div');
    expertiseContainer.classList.add('cadre-popup-expertise');
    
    profils[index].expertise.forEach(skill => {
        const expertiseImage = document.createElement('img');
        expertiseImage.classList.add('popup-expertise');
        expertiseImage.src = `./assets/logos/${skill}.png`;
    
        expertiseImage.addEventListener('mouseover', () => {
            showTooltip(skill, expertiseImage);
        });
    
        expertiseImage.addEventListener('mouseout', () => {
            hideTooltip();
        });
    
        expertiseContainer.appendChild(expertiseImage);
    });
    function showTooltip(skill, element) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = skill;
    
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.right + window.scrollX + 'px';
        tooltip.style.top = rect.bottom + window.scrollY + 'px';
    
        document.body.appendChild(tooltip);
    }
    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
    
    // Ajouter le conteneur au corps du document
    document.body.appendChild(expertiseContainer);

    popupContent.innerHTML = `
        <div class="cadre-popup-photo">
            <img class="popup-photo" src="./assets/persos/${profils[index].id}.png">
        </div>
        <h2 class="popup-identite">${profils[index].name}</h2>
        <h2 class="popup-age">${profils[index].age}</h2>
        <p class="popup-accroche">${profils[index].accroche}</p>
        <img class="popup-signe" src="./assets/signes/${profils[index].signe}.png">
        <p class="popup-description">${profils[index].desc}</p>
        <h3 class="title-popup-soft">Soft Skills</h3>
        <p class="popup-soft">${profils[index].soft}</p>
        <h3 class="title-popup-hobbies">Hobbies</h3>
        <p class="popup-hobbies">${profils[index].hobbies}</p>
        <div class="popup-reseaux">
            <a class="popup-lien-linkedin" href="${profils[index].linkedin}"  target="_blank">
                <img class="popup-linkedin" src="./assets/logos/linkedin.png">
            </a>
            <a class="popup-lien-github" href="${profils[index].github}"  target="_blank">
                <img class="popup-github" src="./assets/logos/linkedin.png">
            </a>
            <a class="popup-lien-cv" href="${profils[index].cv}"  target="_blank">
                <img class="popup-cv" src="./assets/logos/cv.png">
            </a>
        </div>
    `;

    popupContent.appendChild(expertiseContainer);

    popup.style.display = 'flex';
}

// Fermer pop-up
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Suivant / Précédent
function showProfil(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = profils.length - 1;
    } else if (currentIndex >= profils.length) {
        currentIndex = 0;
    }
    showPopup(currentIndex);
}

createProfilCards();