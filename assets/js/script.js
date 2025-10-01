const text = `Olá! Meu nome é Esdras Matheus e sou uma pessoa apaixonada por tecnologia, aprendizado constante e soluções criativas. Tenho experiência e conhecimentos em diversas áreas, com foco em desenvolvimento Web, e linguagens de alto nível, como Python e Java. Ao longo da minha trajetória, desenvolvi habilidades técnicas e interpessoais que me permitem atuar de forma eficiente e colaborativa em diferentes contextos.`;
  const typingElement = document.getElementById('typing-text');
  let index = 0;
  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 30);
    }
  }
  window.addEventListener('load', () => {
    typingElement.textContent = ''; 
    type();
  });

  const slideElements = document.querySelectorAll('.slide-up');
  function checkSlide() {
    const triggerBottom = window.innerHeight * 0.9; // ponto para ativar animação
    slideElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', checkSlide);
  window.addEventListener('load', checkSlide);

  const carouselElement = document.getElementById('carouselExampleDark');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 4000, // 4 segundos entre slides
    pause: 'hover', // pausa ao passar o mouse
    ride: 'carousel'
  });