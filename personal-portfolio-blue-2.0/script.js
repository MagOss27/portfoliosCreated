let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log(navbar.classList); // Verifica se a classe 'active' está sendo adicionada
    console.log('Menu clicado!'); // Para verificar no console
};

document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const link = document.createElement('a');  // Cria um link temporário
    link.href = 'images/curriculo_tradicional.pdf'; // Caminho para o arquivo PDF
    link.download = 'curriculo_tradicional.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(link);  // Adiciona o link temporário ao DOM
    link.click();  // Simula o clique no link
    document.body.removeChild(link);  // Remove o link temporário
});