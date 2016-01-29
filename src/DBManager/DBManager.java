package DBManager;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DBManager 
{
	private static DataSource ds = null;

	private DBManager()
	{
		init();
	}// method end
	
	private void init()
	{
		// dbcp �� ����  datasource �޾ƿ���
		Context init = null;
		try 
		{
			init = new InitialContext();
			ds = (DataSource) init.lookup("java:comp/env/jdbc/Maria");
		} 
		catch (NamingException e){e.printStackTrace();}
	}
	
	public static Connection get_DB_Connection()
	{
		Connection conn = null;
		
		if(ds == null) // datasource �� null �� ��� ���� ����
		{
			new DBManager();
		}
		try 
		{
			// datasource�� ���ؼ� db connection �޾ƿ���
			conn = ds.getConnection();
		} 
		catch (SQLException e) 
		{ 
			e.printStackTrace();
		}
	
		return conn; // Ŀ�ؼ� ����
	}
}
