package Login.Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Login.Action.LoginProcess;
import ServiceManager.ServiceForward;
import ServiceManager.ServiceInterface;

/**
 * Servlet implementation class LoginController
 */
@WebServlet("/login")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		// login.do �� ���� �Ǵ� �ּҵ��� ��� �̰����� �ɴϴ�.
		
		// �б⿡ ����� ��ü �غ�
		ServiceForward 		forwardAction 	= 	null; // �ܼ� �̵��� ����� ��ü
		ServiceInterface 	action 			=	null; // �׼��� ������ ����� �������̽� ��ü
		
		request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
	
		//��ɾ� �и�
		String cmd = request.getParameter("cmd");
		
		switch(cmd)
		{
				case "loginForm" : //�ܼ��� �α��� ������ �̵� 
					//�ܼ� �̵��̹Ƿ� forwardAction�� ���
					forwardAction = new ServiceForward();
					forwardAction.setRedirect(false);
					forwardAction.setPath("view/Login/login.jsp"); // Login���� �ȿ� login.jsp�� �̵� ����
				break;
				
				case "loginProcess" : // �α��� ������ ó�� �׼��� �ʿ��ϴ�.
					// �׼��� �ʿ� �ϹǷ� �׼� ȣ��
					action = new LoginProcess();   // LoginPorcess()�� ������ ������ ������ ServiceInterface�� ��� �޾Ҵ�.
					try 
					{
						forwardAction = action.execute(request, response); // loginprocess excute()�� �����ϰ� forwardAction�޾ƿ���
					} catch (Exception e) {}
			
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
