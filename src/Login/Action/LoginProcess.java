package Login.Action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Login.DAO.LoginDAO;
import Login.DTO.LoginDTO;
import ServiceManager.ServiceForward;
import ServiceManager.ServiceInterface;

public class LoginProcess implements ServiceInterface{ // 로그인을 처리하는 클래스

	@Override
	public ServiceForward execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		// 리턴 시킬 객체를 준비
		ServiceForward Fowardaction = new ServiceForward();
		
		// eamil pwd 구별
		String mem_email = request.getParameter("mem_email");
		String mem_pwd   = request.getParameter("mem_pwd");
		
		
		//사용자 객체 만들기
		LoginDTO data = new LoginDTO(mem_email,mem_pwd);
		
		// DAO를 통해서 DB에서 처리 하기
		boolean b = LoginDAO.isMember(data);
		
		
		if(b) // 로그인 성공시 
		{
			// request 세션에 login 데이터를 넣어 준다.
			HttpSession session = request.getSession();
    		session.setAttribute("login", data);
    		
    		Fowardaction.setRedirect(true);
    		Fowardaction.setPath("Main.jsp");
		}
		else // 로그인 실패시 notice page로 이동
		{
			String msg="이메일 또는 비밀번호를 확인해 주세요.";
			request.setAttribute("errMsg", msg);
			Fowardaction.setRedirect(false);
    		Fowardaction.setPath("Error.jsp");
		}
		
		return Fowardaction;
	}

}
