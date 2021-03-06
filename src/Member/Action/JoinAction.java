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
		
		// 리턴 시킬 객체를 준비
		ServiceForward Fowardaction = new ServiceForward();
				
		// email pwd 구별
		String mem_email = request.getParameter("mem_email");
		String mem_pwd 	 = request.getParameter("mem_pwd");
		String mem_name  = request.getParameter("mem_name");
		String mem_cell  = request.getParameter("mem_cell");
				
		//사용자 객체 만들기
		MemberDTO data = new MemberDTO(mem_email, mem_pwd, mem_name, mem_cell);
				
		// DAO를 통해서 DB에서 처리 하기 회원 가입 처리 
		boolean b = MemberDAO.insertMember(data);
		
		// 가입 한 결과 처리
		if(b) // 가입 성공시 자동 로그인
		{
			// request 세션에 login 데이터를 넣어 준다.
			HttpSession session = request.getSession();
    		session.setAttribute("login", data);
    		
    		Fowardaction.setRedirect(true);
    		Fowardaction.setPath("Main.jsp");
		}
		else // 가입 실패시 
		{
			String msg="회원 가입에 실패했습니다!";
			request.setAttribute("errMsg", msg);
			Fowardaction.setRedirect(false);
    		Fowardaction.setPath("Error.jsp");
		}
		
		return Fowardaction;
	}

}
