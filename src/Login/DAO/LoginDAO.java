package Login.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;

import DBManager.DBManager;
import Login.DTO.LoginDTO;

public class LoginDAO {
	
	
	// ����� �α��� ���� ��ü�� DTO�� �޾Ƽ� db���� ��ȸ�ؼ� ó�� �Ѵ�
	public static boolean isMember(LoginDTO data) {
		
		// ��� ���� �ʱ� ���� false
		boolean check = false;

		// db connection �޾ƿ���
		Connection conn = DBManager.get_DB_Connection();

		// DB���� �ڿ� �غ�
		PreparedStatement pstmt = null;
		ResultSet query_result = null;

		// db ��� ��������
		StringBuffer SQL = new StringBuffer();
		SQL.append("SELECT mem_pwd FROM member WHERE mem_email=?");

		try {
			// ���� ����
			pstmt = conn.prepareStatement(SQL.toString());
			pstmt.setObject(1, data.getId(), Types.VARCHAR);
		

			// ���� ����
			query_result = pstmt.executeQuery();

			// ���� �˻� ��� ���� �˾ƿ���
			query_result.last();
			int count = query_result.getRow();
			query_result.beforeFirst();

			// �˻� ����� �ִ� ���
			if (count > 0) 
			{
				while (query_result.next()) 
				{

					String _pwd = query_result.getString(1);

					if (data.getPwd().equals(_pwd))// ȸ�������� ��й�ȣ�� ��ġ �ϴ� ���
					{
						check = true;
					} 
					else // ȸ�� ������ ��й�ȣ�� ��ġ ���ϴ� ���
					{
						check = false;
					}
				}
			}
			
			// �ڿ� �ݳ�
			conn.close();
			pstmt.close();
			query_result.close();
			query_result = null;
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		} // try end
		
		// ��� �ݳ�
		return check;
		
	}// method end
}

