     // Lógica para mostrar/ocultar el menú de ayuda
        function toggleHelpMenu() {
            const menu = document.getElementById('helpMenu');
            if (menu.style.display === 'flex') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'flex';
            }
        }

        init();
          