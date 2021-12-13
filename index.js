var btnCargar = document.getElementById("btnCargar");

var listaUL = document.getElementById("lista");

btnCargar.addEventListener("click", function() {

    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')

    .then(function(res) {

        let datos = res.data;
        
        for(let i=0; i<datos.length; i++) {

            let li = document.createElement("li");
            li.innerHTML = datos[i].name + " vive en " + datos[i].city + "<br>";
            listaUL.appendChild(li);

        }

    })

})