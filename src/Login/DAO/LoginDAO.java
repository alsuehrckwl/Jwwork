package Login.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Types;

import DBManager.DBManager;
import Login.DTO.LoginDTO;

public class LoginDAO {
	
	
	// 사용자 로그인 정보 객체인 DTO를 받아서 db에서 조회해서 처리 한다
	public static boolean isMember(LoginDTO data) {
		
		// 결과 리턴 초기 값은 false
		boolean check = false;

		// db connection 받아오기
		Connection conn = DBManager.get_DB_Connection();

		// DB연결 자원 준비
		PreparedStatement pstmt = null;
		ResultSet query_result = null;

		// db 결과 가져오기
		StringBuffer SQL = new StringBuffer();
		SQL.append("SELECT mem_pwd FROM member WHERE mem_email=?");

		try {
			// 쿼리 설정
			pstmt = conn.prepareStatement(SQL.toString());
			pstmt.setObject(1, data.getId(), Types.VARCHAR);
		

			// 쿼리 실행
			query_result = pstmt.executeQuery();

			// 쿼리 검색 결과 갯수 알아오기
			query_result.last();
			int count = query_result.getRow();
			query_result.beforeFirst();

			// 검색 결과가 있는 경우
			if (count > 0) 
			{
				while (query_result.next()) 
				{

					String _pwd = query_result.getString(1);

					if (data.getPwd().equals(_pwd))// 회원정보가 비밀번호와 일치 하는 경우
					{
						check = true;
					} 
					else // 회원 정보와 비밀번호가 일치 안하는 경우
					{
						check = false;
					}
				}
			}
			
			// 자원 반납
			conn.close();
			pstmt.close();
			query_result.close();
			query_result = null;
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		} // try end
		
		// 결과 반납
		return check;
		
	}// method end
}

