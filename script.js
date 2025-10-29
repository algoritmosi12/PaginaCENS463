 // Filtrado de emprendimientos
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Agregar clase active al botón clickeado
                    this.classList.add('active');
                    
                    // Aquí iría la lógica para filtrar los emprendimientos
                    // Por simplicidad, no implementamos el filtrado real en este ejemplo
                });
            });
        });
