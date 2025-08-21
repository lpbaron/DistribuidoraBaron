/* 
=====================================================
Archivo: main.js
Descripción: Lógica JavaScript para el sitio web.
Incluye menú responsivo, validación de formulario,
control de cantidades en productos, carrito y animaciones.
=====================================================
*/
// Menú responsive
document.getElementById('menu-toggle').addEventListener('click', function(){
    document.querySelector('.nav-links').classList.toggle('active');
});

// Formulario de contacto
document.getElementById('contact-form')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias por contactarnos, pronto te responderemos.');
    this.reset();
});

// Validación de formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    // Manejar aumento/disminución de cantidad
    document.querySelectorAll(".quantity-control").forEach(control => {
        let span = control.querySelector("span");
        let decrease = control.querySelector(".decrease");
        let increase = control.querySelector(".increase");
        // Asegurarse de que el span tenga un valor numérico inicial
        decrease.addEventListener("click", () => {
            let current = parseInt(span.textContent);
            if (current > 0) span.textContent = current - 1;
        });
        // Asegurarse de que el span tenga un valor numérico inicial
        increase.addEventListener("click", () => {
            let current = parseInt(span.textContent);
            span.textContent = current + 1;
        });
    });

    // Manejar el botón de "Agregar al carrito"
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let quantity = button.previousElementSibling.querySelector("span").textContent;
            if (parseInt(quantity) > 0) {
                alert(`Se agregaron ${quantity} producto(s) al carrito 🛒`);
            } else {
                alert("Por favor selecciona al menos 1 unidad antes de agregar al carrito.");
            }
        });
    });

    // 👇 Animaciones de timeline en Acerca de
    const items = document.querySelectorAll(".timeline-item");
    if (items.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        items.forEach((item) => observer.observe(item));
    }
});

