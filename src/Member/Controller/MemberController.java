package Member.Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Member.Action.JoinAction;
import ServiceManager.ServiceForward;
import ServiceManager.ServiceInterface;

/**
 * Servlet implementation class MemberController
 */
@WebServlet("/member")
public class MemberController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// �б⿡ ����� ��ü �غ�
		ServiceForward 		forwardAction 	= 	null; // �ܼ� �̵��� ����� ��ü
		ServiceInterface 	action 			=	null; // �׼��� ������ ����� �������̽� ��ü
		
		//��ɾ� �и�
		String cmd = request.getParameter("cmd");
		
		switch(cmd)
		{
			case "joinForm" : //ȸ�� ���� �������� �ܼ� �̵�
				//�ܼ� �̵��̹Ƿ� forwardAction�� ���
				forwardAction = new ServiceForward();
				forwardAction.setRedirect(false);
				forwardAction.setPath("/Member/join.jsp"); // Login���� �ȿ� login.jsp�� �̵� ����
			break;
			
			case "JoinMember" : // ȸ�� insert�� �ʿ� �ϹǷ� �׼�
				action = new JoinAction(); // ȸ�� ���� �߰� 
				
			try {
				forwardAction = action.execute(request, response);
				} 
				catch (Exception e) {}
			break;
		}
		
		
		// �׼� ���� ���� ���� ó���ϴ� �κ�
		if(forwardAction != null)
		{
				if(forwardAction.isRedirect())
				{
					response.sendRedirect(forwardAction.getPath());
				}
				else
				{
					RequestDispatcher dispatcher=request.getRequestDispatcher(forwardAction.getPath());
					dispatcher.forward(request, response);
				}
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
