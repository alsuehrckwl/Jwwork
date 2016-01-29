package Member.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import DBManager.DBManager;
import Login.DTO.LoginDTO;

public class MemberDAO 
{

	
	public static boolean insertMember(LoginDTO data)
	{
		boolean result = false;
		
		Connection conn = DBManager.get_DB_Connection();
		PreparedStatement pstmt = null;
		ResultSet query_result = null;
		
		StringBuffer SQL = new StringBuffer();
		SQL.append("Insert into member");
		SQL.append(" values (?,?)");
		
		try{
			pstmt=conn.prepareStatement(SQL.toString());
			pstmt.setString(1, data.getId());
			pstmt.setString(2, data.getPwd());

			int n=pstmt.executeUpdate();
				if(n>0)
				{
					result = true;
				}
				
			// ÀÚ¿ø ¹Ý³³
			conn.close();
			pstmt.close();
			query_result.close();
			query_result = null;
				
			}catch(SQLException e){e.printStackTrace();}
		
		return result;
	}
}
