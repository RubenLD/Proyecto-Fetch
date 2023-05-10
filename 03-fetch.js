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
          <button onclick="mostrarDatos(${e.id})" class="btn btn-primary">Ver perfil</button>
        </div>
      </div>`;
        html = html + htmlCard;
    });
    content.innerHTML = html
});

function mostrarDatos(info){
    const resp = fetch('https://reqres.in/api/users/'${info});
    resp.then(response => response.json())
    .then(json => console.log(json))
}




    
