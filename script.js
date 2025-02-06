const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');

botaoSim.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=PR0y3pKo8-8';
});

botaoNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
});

botaoSim.addEventListener('click', () => {
    alert('É NADA');
});

