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
			
		// login.do 로 시작 되는 주소들은 모두 이곳으로 옵니다.
		
		// 분기에 사용할 객체 준비
		ServiceForward 		forwardAction 	= 	null; // 단순 이동에 사용할 객체
		ServiceInterface 	action 			=	null; // 액션이 있을때 사용할 인터페이스 객체
		
		request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
	
		//명령어 분리
		String cmd = request.getParameter("cmd");
		
		switch(cmd)
		{
				case "loginForm" : //단순히 로그인 폼으로 이동 
					//단순 이동이므로 forwardAction을 사용
					forwardAction = new ServiceForward();
					forwardAction.setRedirect(false);
					forwardAction.setPath("view/Login/login.jsp"); // Login폴더 안에 login.jsp로 이동 설정
				break;
				
				case "loginProcess" : // 로그인 절차를 처리 액션이 필요하다.
					// 액션이 필요 하므로 액션 호출
					action = new LoginProcess();   // LoginPorcess()로 생성이 가능한 이유는 ServiceInterface를 상속 받았다.
					try 
					{
						forwardAction = action.execute(request, response); // loginprocess excute()를 실행하고 forwardAction받아오기
					} catch (Exception e) {}
			
				break;
				
		}
	
		
		// 액션 변수 값을 보고 처리하는 부분
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
