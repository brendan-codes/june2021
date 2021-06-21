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

	<h1 style="color: ${color.hex}"><c:out value="${color.name}"></c:out></h1>
	
	<ul>
		<c:forEach items="${color.things}" var="t">
			<li><c:out value="${t.name}"></c:out></li>
		</c:forEach>
	</ul>
	
	<form action="/colors/${color.id}/edit" method="post">
	
		<select name="thing_id">
			<option selected disabled >Select a thing!</option>
			<c:forEach items="${things}" var="one_thing">
				<option value="${one_thing.id}">
					<c:out value="${one_thing.name}"></c:out>
				</option>
			</c:forEach>
		</select>
	
		<input type="submit" value="Add thing to color!" />
	</form>
</body>
</html>