const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", evt => {
    evt.preventDefault();

    const dadosFormulario = new FormData(formulario);
    const data = {};
  
  // percorre todos os campos do formulário e adiciona seus valores ao objeto `data`
    for (const [key, value] of dadosFormulario.entries()) {
        data[key] = value;
    }
    console.log(data)
})