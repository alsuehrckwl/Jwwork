<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    
<!-- jstl library load -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ include file="view/layout/header.jsp" %>
<%@ include file="view/layout/nav.jsp" %>

<!-- jstl를 이용하기  sessionScope 안에 login이라는 정보가 있다면 -->
<c:if test="${not empty sessionScope.login }">
		[${sessionScope.login.id}]님 환영 합니다 </br>
</c:if>

</body>
</html>
