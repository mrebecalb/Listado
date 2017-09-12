package wasdev.sample.store;

public class PendienteStoreFactory {
	private static PendienteStore instance;
	static {
		CloudantPendiente cpif = new CloudantPendiente();	
		if(cpif.getDB() != null){
			instance = cpif;
		}
	}
	
	public static PendienteStore getInstance() {
		return instance;
	}

}
