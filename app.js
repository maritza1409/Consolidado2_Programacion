const API = "http://localhost:4000/api/products";

const form = document.getElementById("form");
const lista = document.getElementById("lista");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        nombre: form.nombre.value,
        precio: form.precio.value,
        categoria: form.categoria.value,
        stock: form.stock.value
    };
    await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    cargar();
    form.reset();
});

async function cargar() {
    const res = await fetch(API);
    const productos = await res.json();
    lista.innerHTML = "";
    productos.forEach(p => {
        lista.innerHTML += `<li>${p.nombre} - $${p.precio} [${p.categoria}]</li>`;
    });
}

cargar();
