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
	<h1>Please write your favorite Book</h1>
	<p style="color:red">	
		<c:out value="${error}"></c:out>
	</p>
	<form action="/submit" method="POST">
		<input type="text" name="title" placeholder="Name your book!"/>
		<input type="submit" value="what's your favorite book?"/>
	</form>
</body>
</html>