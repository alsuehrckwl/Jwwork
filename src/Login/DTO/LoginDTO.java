package Login.DTO;

public class LoginDTO {
	
	private String mem_email;
	private String mem_pwd;
	
	public LoginDTO(String mem_email, String mem_pwd) 
	{
		this.mem_email 	= mem_email;
		this.mem_pwd 	= mem_pwd;
	}
	public String getId() {	
		return mem_email;
	}
	public void setId(String mem_email) {
		this.mem_email = mem_email;
	}
	public String getPwd() {
		return mem_pwd;
	}
	public void setPwd(String mem_pwd) {
		this.mem_pwd = mem_pwd;
	}
	

}
