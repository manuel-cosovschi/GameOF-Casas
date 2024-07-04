const houses = [
    { name: 'Stark la tenes enorme', logo: 'img/house_stark.png' },
    { name: 'Lannister sos scioli con tarasca', logo: 'img/house_lannister.png' },
    { name: 'Targaryen piromano de mierda', logo: 'img/house_targaryen.png' },
    { name: 'Baratheon, te paso el fernet?', logo: 'img/house_baratheon.png' },
    { name: 'Greyjoy, no tenes pito JAJAJAJ fran dg dijeron?', logo: 'img/house_greyjoy.png' }
];

document.addEventListener('DOMContentLoaded', () => {
    const discoverHouseButton = document.getElementById('discover-house');
    const selectedHouseContainer = document.getElementById('selected-house');
    const backgroundAudio = document.getElementById('background-audio');

    // Reproducir el audio de fondo
    backgroundAudio.play();

    discoverHouseButton.addEventListener('click', () => {
        const randomHouse = houses[Math.floor(Math.random() * houses.length)];
        selectedHouseContainer.innerHTML = `
            <p>You belong to House ${randomHouse.name}!</p>
            <img src="${randomHouse.logo}" alt="House ${randomHouse.name} Logo" class="house-logo">
        `;
        selectedHouseContainer.style.display = 'block';
    });
});




