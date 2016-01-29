package Login.Action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Login.DAO.LoginDAO;
import Login.DTO.LoginDTO;
import ServiceManager.ServiceForward;
import ServiceManager.ServiceInterface;

public class LoginProcess implements ServiceInterface{ // �α����� ó���ϴ� Ŭ����

	@Override
	public ServiceForward execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		// ���� ��ų ��ü�� �غ�
		ServiceForward Fowardaction = new ServiceForward();
		
		// eamil pwd ����
		String mem_email = request.getParameter("mem_email");
		String mem_pwd   = request.getParameter("mem_pwd");
		
		
		//����� ��ü �����
		LoginDTO data = new LoginDTO(mem_email,mem_pwd);
		
		// DAO�� ���ؼ� DB���� ó�� �ϱ�
		boolean b = LoginDAO.isMember(data);
		
		
		if(b) // �α��� ������ 
		{
			// request ���ǿ� login �����͸� �־� �ش�.
			HttpSession session = request.getSession();
    		session.setAttribute("login", data);
    		
    		Fowardaction.setRedirect(true);
    		Fowardaction.setPath("Main.jsp");
		}
		else // �α��� ���н� notice page�� �̵�
		{
			String msg="�̸��� �Ǵ� ��й�ȣ�� Ȯ���� �ּ���.";
			request.setAttribute("errMsg", msg);
			Fowardaction.setRedirect(false);
    		Fowardaction.setPath("Error.jsp");
		}
		
		return Fowardaction;
	}

}
