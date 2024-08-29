import showCant from './ventas.js';

document.getElementById('mostrar').addEventListener('click', () => {
    const cantidad = document.getElementById('cantidad').value;
    const resultado = showCant(cantidad);
    document.getElementById('resultado').textContent = resultado;
});


