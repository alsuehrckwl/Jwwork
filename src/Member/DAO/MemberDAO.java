package Member.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import DBManager.DBManager;
import Member.DTO.MemberDTO;

public class MemberDAO 
{

	
	public static boolean insertMember(MemberDTO data)
	{
		boolean result = false;
		
		Connection conn = DBManager.get_DB_Connection();
		PreparedStatement pstmt = null;
		ResultSet query_result = null;
		
		StringBuffer SQL = new StringBuffer();
		SQL.append("Insert into member");
		SQL.append(" values (?,?,?,?,CURRENT_SYSDATE)");
		
		try{
			pstmt=conn.prepareStatement(SQL.toString());
			pstmt.setString(1, data.getMem_email());
			pstmt.setString(2, data.getMem_pwd());
			pstmt.setString(3, data.getMem_name());
			pstmt.setString(4, data.getMem_cell());

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
