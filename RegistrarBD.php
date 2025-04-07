<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/hoja.ico">
    <link rel="stylesheet" href="css/styles.css">
    <title>Fitfat</title>
</head>
<header></header>
<body>
<section class="regisBD">
    <h1 class="section-title">Registro de Alimentos</h1>
    <form id="foodForm" class="food-form">
        <label for="foodName" class="form-label">Buscar Alimento:</label>
        <input type="text" id="foodName" class="form-input" required>
        <button type="submit" class="form-button">Buscar</button>
    </form>
    <div id="searchResults" class="search-results"></div>
    <h2 class="list-title">Lista de Alimentos Registrados</h2>
    <ul id="foodList" class="food-list"></ul>
</section>
    <script>
        const foodForm = document.getElementById("foodForm");
        const foodNameInput = document.getElementById("foodName");
        const searchResults = document.getElementById("searchResults");
        const foodList = document.getElementById("foodList");

        // Función para buscar alimentos en la base de datos
        foodForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const foodName = foodNameInput.value.toLowerCase();

            // Realiza una solicitud a un archivo PHP para buscar el alimento en la base de datos
            fetch('buscar_alimento.php?nombre=' + foodName)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        // Agrega el alimento y sus atributos a la lista de alimentos registrados
                        const foodItem = document.createElement("li");
                        foodItem.textContent = `
                            Nombre: ${data.nombre}
                            Calorías: ${data.calorias}
                            Proteínas: ${data.proteinas}
                            Carbohidratos: ${data.carbohidratos}
                            Grasas: ${data.grasas}
                        `;
                        foodList.appendChild(foodItem);

                        // Limpia el campo de búsqueda
                        foodNameInput.value = "";
                        searchResults.innerHTML = ""; // Limpia los resultados de búsqueda
                    } else {
                        // Muestra un mensaje si el alimento no se encuentra en la base de datos
                        searchResults.textContent = "Alimento no encontrado en la base de datos.";
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    </script>

        	<script>
            // Función para redirigir a "index copy.html" cuando el ancho de la ventana sea menor que 900px
            function redirigirSegunAnchoDePantalla() {
              if (window.innerWidth < 900) {
                window.location.href = "RegistrarBD2.php";
              }
            }
            
            // Verificar el ancho de la ventana cuando se carga la página
            window.addEventListener("load", function () {
              redirigirSegunAnchoDePantalla();
            });
            
            // Verificar el ancho de la ventana cuando se cambia su tamaño
            window.addEventListener("resize", function () {
              redirigirSegunAnchoDePantalla();
            });
            </script>
    <footer></footer>
    <script src="js/script.js"></script>
</body>
</html>
