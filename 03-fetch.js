const resp = fetch('https://reqres.in/api/users?page=1');
resp.then(response => response.json())
.then(json => {
    let content = document.querySelector("#container")
    let html = '';

    json.data.forEach(e => {
        let htmlCard = `<div class="card" style="width: 18rem;">
        <img src="${e.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.first_name}</h5>
          <p class="card-text">${e.last_name}</p>
          <button onclick="mostrarDatos(${e.id})" data-bs-toggle="modal" data-bs-target="#mi-modal" class="btn btn-primary">Ver perfil</button>
        </div>
      </div>`;
        html = html + htmlCard;
    });
    content.innerHTML = html
});

function mostrarDatos(info){
    const resp = fetch(`https://reqres.in/api/users/${info}`);
    resp.then(response => response.json())
    .then(json => {
        let modalTitulo = document.querySelector('#nombre');
        let modalApellido = document.querySelector('#apellido');
        let modalCorreo = document.querySelector('#correo');
        let modalImg = document.querySelector('#img');
      
        modalTitulo.textContent = 'Nombre: '+ json.data.first_name;
        modalApellido.textContent = 'Apellido: '+ json.data.last_name
        modalCorreo.textContent = 'Correo: '+ json.data.email
        modalImg.src = json.data.avatar

    });
}




    
