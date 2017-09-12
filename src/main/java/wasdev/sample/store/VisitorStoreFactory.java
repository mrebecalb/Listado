
package wasdev.sample.store;

public class VisitorStoreFactory {
	
	private static VisitorStore instance;
	static {
		CloudantVisitorStore cvif = new CloudantVisitorStore();	
		if(cvif.getDB() != null){
			instance = cvif;
		}
	}
	
	public static VisitorStore getInstance() {
		return instance;
	}

}
