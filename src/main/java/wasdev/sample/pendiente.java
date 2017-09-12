package wasdev.sample;

public class pendiente {
	
	private String _id;
	private String descripcion;
	private String usuarioID;
	private String nombreUsuario;
	private String _rev;
	private String pendienteID;

	public String getid() {
		return _id;
	}
	
	public void setid(String id) {
		this._id = id;
	}

	
	public String getPendienteID() {
		return pendienteID;
	}
	
	public void setPendienteID(String pendienteID) {
		this.pendienteID = pendienteID;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	public String getUsuarioID() {
		return usuarioID;
	}
	public void setUsuarioID(String usuarioID) {
		this.usuarioID = usuarioID;
	}
	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public String get_rev() {
		return _rev;
	}
	public void set_rev(String _rev) {
		this._rev = _rev;
	}
	

	
}
