<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<h1>New Color</h1>
<form:form action="/colors" method="post" modelAttribute="color">
    <p>
        <form:label path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input path="name"/>
    </p>
    <p>
        <form:label path="hex">Hex</form:label>
        <form:errors path="hex"/>
        <form:input type="color" path="hex"/>
    </p>

  
    <input type="submit" value="Submit"/>
</form:form>
<a href="/colors">Go back</a>    
