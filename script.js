const secciones = {
  equipos: document.getElementById('lista-equipos'),
  herramientas: document.getElementById('lista-herramientas'),
  materiales: document.getElementById('lista-materiales')
};

function crearTarjeta(producto, indice) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'product-card';

  const numero = String(indice + 1).padStart(2, '0');
  tarjeta.innerHTML = `
    <span class="card-number">${numero}</span>
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion || 'Producto recomendado por White Lotus Details.'}</p>
    <a class="product-link" href="${producto.enlace}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon ↗</a>
  `;
  return tarjeta;
}

function renderizarCategoria(nombre) {
  const contenedor = secciones[nombre];
  const lista = productos[nombre] || [];
  contenedor.innerHTML = '';

  if (!lista.length) {
    contenedor.innerHTML = `
      <div class="empty-card">
        <strong>Próximamente</strong>
        Edita el archivo <b>products.js</b> para agregar tus productos en esta categoría.
      </div>`;
    return;
  }

  lista.forEach((producto, indice) => contenedor.appendChild(crearTarjeta(producto, indice)));
}

Object.keys(secciones).forEach(renderizarCategoria);

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  const abierto = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', abierto);
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));
