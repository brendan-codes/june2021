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
	<h1>All Colors</h1>

	 
	 <c:forEach items="${colors}" var="c">
	 	<p style="color: ${c.hex}"><a href="/colors/${c.id}/edit"><c:out value="${c.name}"></c:out></a></p>
	 
	 </c:forEach>
	<a href="/colors/new">Create a Color!</a>
</body>
</html>