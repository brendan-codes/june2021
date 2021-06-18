<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<p>Add a book to <c:out value="${library.name}"></c:out></p>

	<form action="/libraries/${library.id}" method="post">
		<select name="book_id">
			<c:forEach items="${books}" var="book">
            	<option value="${book.id}"><c:out value="${book.title}"/></option>
        	</c:forEach>	
		</select>
		<input type="submit" value="add book to library!" />
	</form>
	
</body>
</html>