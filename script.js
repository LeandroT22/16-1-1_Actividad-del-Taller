let contenedor = document.getElementById("container");

function Mostrar_banderas(data) {
  contenedor.innerHTML = `
    <div class="container-fluid">
      <div class="row">
        ${data
          .map(
            (pais) => `
              <div class="col-3 col-md-4 col-lg-4 d-flex flex-column align-items-center mb-4">
                <img src="${pais.flags.png}" class="img-fluid" alt="${pais.name.common}" style="width: auto; height: auto;">
                <h5 class="text-center mt-2">${pais.name.common}</h5>
                <label for="html">Selecciona tu bandera</label>
                <input type="radio" id="html" name="fav_language" value="HTML">
              </div>
              
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    Mostrar_banderas(data);
  })
  .catch((error) => console.error(error));