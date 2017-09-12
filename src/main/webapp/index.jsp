<!DOCTYPE html>
<html lang="es">

<head>
    
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lista Pendientes</title>

    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
</head>

<body>
     <div class="container">
	<div id="Dialogo">
	</div>
     <div class="row ">
     	<div class="col-md-12">
     	<button type="button" class="btn btn-primary right" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Nuevo Pendiente</button>
     	</div>
     </div>
     <table id="tListadoPendientes" class="table table-hover">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>Usuario</th>
		      <th>Pendiente</th>
		      <th>Acciones</th>
		    </tr>
		  </thead>
		  <tbody>

		  </tbody>
	</table>
        <!--<h1>Welcome Rebeca.</h1>
        <div id="nameInput" class="input-group-lg center-block helloInput">
            <p class="lead">What is your name?</p>
            <input id="user_name" type="text" class="form-control" placeholder="name" aria-describedby="sizing-addon1" value="" />
        </div>
        <p id="response" class="lead text-center"></p>

        <p id="databaseNames" class="lead text-center"></p>-->
    </div> 
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
         <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h3>Pendiente</h3>
           </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="sUsuario" class="form-control-label">Usuario:</label>
          <select class="form-control" id="sUsuario">
		    </select>
		    <div id="iUsuario" class="ocultar">
				    *Dato obligatorio
			</div>
          </div>
          <div class="form-group">
            <label for="txtPendiente" class="form-control-label">Descripcion:</label>
            <textarea class="form-control" id="txtPendiente" class="form-control"></textarea>    
				<div id="iPendiente" class="ocultar">
				    *Dato obligatorio
				</div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="btnGuardar" type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>


  <div class="modal fade" id="modalConfirmacion" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
           <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h3>Alerta</h3>
           </div>
           <div class="modal-body">
              <h4>Estas seguro que deseas eliminar este pendiente?</h4>    
       </div>
           <div class="modal-footer">
          <a href="#" data-dismiss="modal" class="btn btn-primary">Cerrar</a>
          <button id="btnEliminar" type="button" class="btn  btn-danger">Eliminar</button>
           </div>
      </div>
   </div>
</div>

    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/antixss.js" type="text/javascript"></script>
    <script src="js/Index.js" type="text/javascript"></script>

</body>

</html>
