package Member.Action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Login.DTO.LoginDTO;
import Member.DAO.MemberDAO;
import ServiceManager.ServiceForward;
import ServiceManager.ServiceInterface;

public class JoinAction implements ServiceInterface{

	@Override
	public ServiceForward execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		// ���� ��ų ��ü�� �غ�
		ServiceForward Fowardaction = new ServiceForward();
				
		// email pwd ����
		String email = request.getParameter("email");
		String pwd 	 = request.getParameter("pwd");
				
		//����� ��ü �����
		LoginDTO data = new LoginDTO(email,pwd);
				
		// DAO�� ���ؼ� DB���� ó�� �ϱ� ȸ�� ���� ó�� 
		boolean b = MemberDAO.insertMember(data);
		
		// ���� �� ��� ó��
		if(b) // ���� ������ �ڵ� �α���
		{
			// request ���ǿ� login �����͸� �־� �ش�.
			HttpSession session = request.getSession();
    		session.setAttribute("login", data);
    		
    		Fowardaction.setRedirect(true);
    		Fowardaction.setPath("Main.jsp");
		}
		else // ���� ���н� 
		{
			String msg="ȸ�� ���Կ� �����߽��ϴ�!";
			request.setAttribute("errMsg", msg);
			Fowardaction.setRedirect(false);
    		Fowardaction.setPath("Error.jsp");
		}
		
		return Fowardaction;
	}

}
