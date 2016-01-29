<%@page import="Login.Action.LoginProcess"%>
<%@page import="Logout.Controller.LogoutController"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!-- jstl library load -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    

<nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="#"></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">J.W Work</a>&nbsp;&nbsp;
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
          	<li class="active"><a href="content.do?cmd=content_001">Home</a>
          	<li><a href="login.do?cmd=loginForm">page1</a>
          	<li><a href="login.do?cmd=loginForm">page2</a>
          </ul>
          <ul class="nav navbar-nav navbar-right">
          
<c:choose>          
   
   <c:when test="${sessionScope.login.id == null}">
   <li><a href="login.do?cmd=loginForm">로그인</a></li>
   <li><a href="member.do?cmd=joinForm">회원가입</a></li>
   </c:when>
   
   <c:otherwise>
   <li><a href="logout.do?cmd=logout">로그아웃</a></li>
   <li><a href="member.do?cmd=joinForm">회원정보</a></li>
   </c:otherwise>
</c:choose>

          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>

    
    