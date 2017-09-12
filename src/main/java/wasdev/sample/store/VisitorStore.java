
package wasdev.sample.store;

import java.util.Collection;

import com.cloudant.client.api.Database;

import wasdev.sample.Visitor;


public interface VisitorStore {

  	
  public Database getDB();
  
  	
  public Collection<Visitor> getAll();

  
  public Visitor get(String id);

 
  public Visitor persist(Visitor vi);

  
  public Visitor update(String id, Visitor vi);

  
  public void delete(String id);
  
 
  public int count() throws Exception;
}
