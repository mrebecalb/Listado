package wasdev.sample.store;

import java.util.Collection;

import com.cloudant.client.api.Database;

import wasdev.sample.pendiente;

public interface PendienteStore {
 	
  public Database getDB();
  
  public Collection<pendiente> getAll();

  public pendiente get(String pendienteID);

  public pendiente persist(pendiente oPendiente);

  public pendiente update(String pendienteID, pendiente oPendiente);

  public void delete(String id);
  
  public int count() throws Exception;
}