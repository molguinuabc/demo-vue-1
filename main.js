const app = new Vue({
    el:'#miApp',
    data: {
        tabla: ""
    },
    methods: {
        creaTabla: function(datos) {
            this.tabla = `
            <div id="wrapper">
               <h1>Estudiantes</h1>
               <table id="keywords" cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                      <th><span>Nombre</span></th>
                      <th><span>Matrícula</span></th>
                      <th><span>Semestre de Ingreso</span></th>
                      <th><span>Créditos Cursados</span></th>
                    </tr>
                  </thead>
                  <tbody>
            `;
            datos.forEach( dato => {
                this.tabla += `
                  <tr >
                      <td class="lalign">${dato.nombre}</td>
                      <td>${dato.matricula}</td>
                      <td>${dato.semestreIngreso}</td>
                      <td>${dato.creditosCursados}</td>
                  </tr>
                `;
            });
            this.tabla += `
                 </div>
               </tbody>
             </table>
            `;
        }
    },
    mounted: function() {
      fetch("http://localhost:4000/estudiantes")
        .then(response =>{
          return response.json();
        })
        .then(datos =>{
          this.creaTabla(datos);
          console.log(datos);
        });
    },
    
});