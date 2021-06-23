<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<<h1>New Thing</h1>
<%-- <form:form action="/things" method="post" modelAttribute="thing">
    <p>
        <form:label path="name">Name</form:label>
        <form:errors path="name"/>
        <form:input path="name"/>
    </p>
    <p>
        <form:label path="description">Desc</form:label>
        <form:errors path="description"/>
        <form:textarea path="description"/>
    </p>

  
    <input type="submit" value="Submit"/>
</form:form> --%>


    <form method="post" action="/things">
        <p>
            <label for="name">Name</label>
            <input type="text" id="name" name="name"/>
        </p>
        <p>
            <label for="description">Desc</label>
            <input type="text" id="description" name="description"/>
        </p>
        <p>
        	<label for="colors">Colors</label>
            <input type="text" id="colors" name="colors"/>
        </p>
        <input type="submit" value="Login!"/>
    </form> 
<a href="/things">Go back</a>    

