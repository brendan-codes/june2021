package com.brendan.classes;

public class Square extends Drawing implements AreaInterface {
	
	public int s;
	
	

	public int getS() {
		return s;
	}

	public void setS(int s) {
		this.s = s;
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return this.getS() * this.getS();
	}

	@Override
	void draw() {
		// TODO Auto-generated method stub
		
	}
}
