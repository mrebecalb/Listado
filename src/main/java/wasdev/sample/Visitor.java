
package wasdev.sample;



public class Visitor {
	private String _id;
	private String _rev;
	private String name = null;

	public Visitor() {
		this.name = "";
	}


	public String get_id() {
		return _id;
	}

	
	public void set_id(String _id) {
		this._id = _id;
	}

	
	public String get_rev() {
		return _rev;
	}

	
	public void set_rev(String _rev) {
		this._rev = _rev;
	}
	
	
	public String getName() {
		return name;
	}

	
	public void setName(String visitorName) {
		this.name = visitorName;
	}

}
