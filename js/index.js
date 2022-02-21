fetch('http://www.raydelto.org/agenda.php').then(function(response){
                return response.json();
            }).then(function(response){

                let info = `<tr><th>Nombre</th><th>Apellido</th><th>Contacto</th></tr>`;

                for (let index = 0; index < response.length; index++) {
                    info += `<tr> <td>${response[index].nombre} </td><td>${response[index].apellido}</td>
                        <td>${response[index].telefono}</td></tr>`;
                    
                }
                document.getElementById("show").innerHTML = info;
            }
            );


            function mandar()
            {
                fetch('http://www.raydelto.org/agenda.php', {
     method: "POST",
     body: JSON.stringify({
         nombre: window.prompt("Nombre: "),
         apellido: window.prompt("Apellido: "),
         telefono: window.prompt("Telefono: ")
     })
 })
.then(response => response.json())

.then(json => console.log(json));
            }