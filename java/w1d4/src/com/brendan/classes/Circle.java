package com.brendan.classes;

public class Circle extends Drawing implements AreaInterface {
	
	public int r;

	public int getR() {
		return r;
	}

	public void setR(int r) {
		this.r = r;
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return Math.sqrt(Math.PI * r);
	}

	@Override
	void draw() {
		// TODO Auto-generated method stub

	}

}
