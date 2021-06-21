<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>All Things</h1>

	 
	 <c:forEach items="${things}" var="t">
	 	<p><c:out value="${t.name}"></c:out></p>
	 
	 </c:forEach>
	<a href="/things/new">Create a Thing!</a>

</body>
</html>