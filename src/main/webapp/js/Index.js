
$(document).ready(function(){
	//Carga de listado
	MostrarPedientes();
	getNames();
	/*Eventos*/
	$('#exampleModal').on('show.bs.modal', function (event) {
		  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		//$('#sUsuario option:selected').removeAttr('selected');
		$( "#btnGuardar" ).removeAttr("idp")
		
		$("#txtPendiente").removeClass("invalid");
		$("#iPendiente").addClass("ocultar");
		
		$("#sUsuario").removeClass("invalid");
		$("#iUsuario").addClass("ocultar");
		
		$("#sUsuario").val("1") ;
		$("#txtPendiente").val("");
		  var modal = $(this)
		});
		
		
		$( "#btnGuardar" ).on( "click", function() {
			if($("#txtPendiente").val() == ""){
				$("#txtPendiente").addClass("invalid");
				$("#iPendiente").removeClass("ocultar");
				return false;
				
			}
			
			if($("#sUsuario").val() == "1"){
				$("#sUsuario").addClass("invalid");
				$("#iUsuario").removeClass("ocultar");
				return false;
				
			}
				var objPendiente = {};
				var id = $( "#btnGuardar" ).attr("idp")
				objPendiente.descripcion = $("#txtPendiente").val();
				objPendiente.nombreUsuario = $( "#sUsuario option:selected" ).text();
				objPendiente.usuarioID = $("#sUsuario").val()
				if(id == undefined)
					Nuevo(objPendiente);
				else{
					objPendiente.pendienteID = id;
					Editar(objPendiente);
				}
				
				
			
			
			
		});
		
		$( "#btnEliminar" ).on( "click", function() {
			var objPendiente = {};
			var id = $("#btnEliminar").attr("idp")
			objPendiente.pendienteID = id;
			Delete(objPendiente);
			
		});
	
	
	
	});


		function MostrarPedientes()
		{
			var option = "";
	          $.get("./api/pendientes")
	              .done(function(data) {
	                  if(data.length > 0) {
	                	MostrarDatosTabla(data);
	                	localStorage.setItem("lstPendientes", JSON.stringify(data));
	                  }
	                  else
	                	  $("#tListadoPendientes").append("<tr><td>No se encontraron registros :(</td></tr>"); 
	              });
			
		};
        function getNames(){
        	var option = "<option value='1'>Seleccione...</option>";
          $.get("./api/visitors")
              .done(function(data) {
                  if(data.length > 0) {
                    data.forEach(function(element, index) {
                       option += "<option value='"+element._id+"'>"+element.name+"</option>";
                    });
                    $("#sUsuario").append(option);
                  }
              });
          };
        
        function MostrarDatosTabla(data)
        {
        	$("#tListadoPendientes tbody").empty();
        	var body ="";
        	var j = 1; 
        	for(var i=0; i< data.length; i++)
        		{
        			body += "<tr>"
							+"<th scope='row'>"+ j +"</th>"
							+"<td>"+ data[i].nombreUsuario +"</td>"
							+"<td>"+ data[i].descripcion +"</td>"
							+"<td><span  tipo='"+1+"' idP='"+ data[i]._id+"'><i class='material-icons'>&#xE254;</i></span>"
							+"<span tipo='"+2+"' idP='"+ data[i]._id +"'><i class='material-icons'>&#xE872;</i></span></td>"
							+"</tr>";
					j++
        		}
        	$("#tListadoPendientes").append(body);
        	
        	
        	$( "#tListadoPendientes span" ).on( "click", function() {
        		var id =  $(this).attr("idp");
        		var tipo =  $(this).attr("tipo");
        		var oPendiente = Buscar(id);
        		if(tipo == "1")
        			{
        			    $('#exampleModal').modal('show');
        			    $("#sUsuario").val(oPendiente.usuarioID) ;
        			    $("#txtPendiente").val(oPendiente.descripcion);
        			    $( "#btnGuardar" ).attr("idp", oPendiente._id);//Edicion
        			}
        		else{
        			if(tipo == "2")
        				{
        					$('#modalConfirmacion').modal('show');
        					$("#btnEliminar").attr("idp", oPendiente._id)
        				}
        				
        		}
        			
        			
        		
        	});
        	
        };
        function Buscar(id)
        {
        	var oPendiente;
        	var lstPendientes = JSON.parse(localStorage.getItem("lstPendientes"));
        	$.each( lstPendientes, function( index, element ){
        		if(element._id == id)
        			oPendiente = element;
        	});
        	return oPendiente
        }
        
        function Editar(objPendiente)
        {
        	$.ajax({
				  method: "POST",
				  url: "./api/pendientes/Update",
				  contentType: "application/json",
				  data: JSON.stringify(objPendiente)
				})
            .done(function(data) {
            	 localStorage.setItem("lstPendientes", data);
             	  MostrarDatosTabla(JSON.parse(data));
            	 $('#exampleModal').modal('hide')
            	 Dialogo("Se han guardado los cambios satisfactoriamente");
               
            });
        }
        
        function Nuevo(objPendiente)
        {
        	$.ajax({
				  method: "POST",
				  url: "./api/pendientes/newToDo",
				  contentType: "application/json",
				  data: JSON.stringify(objPendiente)
				})
            .done(function(data) {
          	  localStorage.setItem("lstPendientes", data);
          	  MostrarDatosTabla(JSON.parse(data));
          	  $('#exampleModal').modal('hide');
          	  Dialogo("Se ha guardado el pendiente satisfactoriamente");
          	  
               
            });
        }
        
        function Delete(objPendiente)
        {
        	$.ajax({
				  method: "POST",
				  url: "./api/pendientes/Delete",
				  contentType: "application/json",
				  data: JSON.stringify(objPendiente)
				})
            .done(function(data) {
            	 localStorage.setItem("lstPendientes", data);
             	  MostrarDatosTabla(JSON.parse(data));
            	$('#modalConfirmacion').modal('hide');
            	Dialogo("Se ha eliminado el pendiente satisfactoriamente");
               
            });
        }
        
        function Dialogo(Mensaje){
        	var alert ="<div class='alert alert-success show' role='alert'>"
						  +"<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
						   +"<span aria-hidden='true'>&times;</span>"
						  +"</button>"
						  + Mensaje
						+"</div>";
        	$("#Dialogo").append(alert);
        }
          