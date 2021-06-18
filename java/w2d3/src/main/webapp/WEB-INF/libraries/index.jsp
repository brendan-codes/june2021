<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<h1>All Libraries</h1>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${libraries}" var="library">
        <tr>
            <td><c:out value="${library.name}"/></td>
            <td><a href="/libraries/${library.id}">Edit</a></td>
        </tr>
        </c:forEach>
    </tbody>
</table>
<a href="/libraries/new">New Library</a> | <a href="/books">Books</a>