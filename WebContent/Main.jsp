<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    
<!-- jstl library load -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ include file="view/layout/header.jsp" %>
<%@ include file="view/layout/nav.jsp" %>

<!-- jstl�� �̿��ϱ�  sessionScope �ȿ� login�̶�� ������ �ִٸ� -->
<c:if test="${not empty sessionScope.login }">
		[${sessionScope.login.id}]�� ȯ�� �մϴ� </br>
</c:if>

</body>
</html>
