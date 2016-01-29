package Logout.Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import ServiceManager.ServiceForward;

/**
 * Servlet implementation class LogoutController
 */
@WebServlet("/logout")
public class LogoutController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LogoutController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// Logout.do �� ���� �Ǵ� �ּҵ��� ��� �̰����� �ɴϴ�.
		
		// �б⿡ ����� ��ü �غ�
		ServiceForward 		forwardAction 	= 	null; // �ܼ� �̵��� ����� ��ü
		
		//��ɾ� �и�
		String cmd = request.getParameter("cmd");
		
		switch(cmd)
		{
				case "logout" : 
					//1. Session ��ȸ
					HttpSession session = request.getSession();
		    		//2. Session�� ����(�Ҹ�)
					session.invalidate();
					//3. ���� - ������������ �̵�.
					forwardAction = new ServiceForward();
					forwardAction.setRedirect(false);
					forwardAction.setPath("/Main.jsp");
					
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
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
