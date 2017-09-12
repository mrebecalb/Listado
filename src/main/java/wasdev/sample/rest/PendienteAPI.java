package wasdev.sample.rest;
import java.util.List;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;

import com.google.gson.Gson;

import wasdev.sample.pendiente;
import wasdev.sample.store.PendienteStore;
import wasdev.sample.store.PendienteStoreFactory;

@ApplicationPath("api")
@Path("/pendientes")
public class PendienteAPI extends Application {
	
	//Our database store
		PendienteStore store = PendienteStoreFactory.getInstance();

		@GET
	    @Path("/")
	    @Produces({"application/json"})
	    public String getPendientes() {
			
			if (store == null) {
				return "No se encontraton elementos";
			}
			
			List<pendiente> lstPendientes = (List<pendiente>) store.getAll();
			return new Gson().toJson(lstPendientes);
	    }
	    
	   
	    @POST
	    @Path("/newToDo")
	    @Produces("application/text")
	    @Consumes("application/json")
	    public String newToDo(pendiente oPendiente) {
	      if(store == null) {
	    	  return "";
	      }
	      store.persist(oPendiente);
	      List<pendiente> lstPendientes = (List<pendiente>) store.getAll();
	      return new Gson().toJson(lstPendientes);

	    }
	    
	    
	  @POST
	    @Path("/Update")
	    @Consumes("application/json")
	    public String Update(pendiente oPendiente) {
	      if(store == null) {
	    	  return "No se pudó editar el elemento seleccionado";
	      }
	      store.update(oPendiente.getPendienteID(), oPendiente);
	      List<pendiente> lstPendientes = (List<pendiente>) store.getAll();
	      return new Gson().toJson(lstPendientes);

	    }
	    
	    @POST
	    @Path("/Delete")
	    @Consumes("application/json")
	    public String Delete(pendiente oPendiente) {
	      if(store == null) {
	    	  return "No se pudó elimianr el elemento seleccionado";
	      }
	      store.delete(oPendiente.getPendienteID());
	      List<pendiente> lstPendientes = (List<pendiente>) store.getAll();
	      return new Gson().toJson(lstPendientes);

	    }
}
