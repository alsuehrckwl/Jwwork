package Member.Action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Member.DTO.MemberDTO;
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
		String mem_email = request.getParameter("mem_email");
		String mem_pwd 	 = request.getParameter("mem_pwd");
		String mem_name  = request.getParameter("mem_name");
		String mem_cell  = request.getParameter("mem_cell");
				
		//����� ��ü �����
		MemberDTO data = new MemberDTO(mem_email, mem_pwd, mem_name, mem_cell);
				
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
