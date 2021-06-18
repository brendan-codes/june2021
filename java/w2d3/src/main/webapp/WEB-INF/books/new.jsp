<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<h1>New Book</h1>
<form:form action="/books" method="post" modelAttribute="book">
    <p>
        <form:label path="title">Title</form:label>
        <form:errors path="title"/>
        <form:input path="title"/>
    </p>
    <p>
        <form:label path="description">Description</form:label>
        <form:errors path="description"/>
        <form:textarea path="description"/>
    </p>
    <p>
        <form:label path="language">Language</form:label>
        <form:errors path="language"/>
        <form:input path="language"/>
    </p>
    <p>
        <form:label path="numberOfPages">Pages</form:label>
        <form:errors path="numberOfPages"/>     
        <form:input type="number" path="numberOfPages"/>
    </p>
    <p>
    	<form:label path="library">Library</form:label>
    	<form:errors path="library"/>
    	<form:select path="library">
    		<option value="" disabled selected>Please pick a library!</option>
			<c:forEach items="${libraries}" var="l">
				<form:option value="${l}">
					<c:out value="${l.name}"></c:out>
				</form:option>
			</c:forEach>
    	</form:select>
    </p>    
    <input type="submit" value="Submit"/>
</form:form>
<a href="/books">Go back</a>    
