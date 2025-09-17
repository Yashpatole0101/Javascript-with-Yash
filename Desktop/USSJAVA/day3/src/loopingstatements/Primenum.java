package loopingstatements;

public class Primenum {

	public static void main(String[] args) {
		
	//for specific number	
		int num=5;
		boolean flag=true;
		
		for(int i=2;i<num;i++) {
			if(num%i==0)
			{
				//System.out.println(num+"is prime");
				flag=false;
			}
			 
		}
		if(flag==true) {
			System.out.println("prime");
		}
		else {
			System.out.println("not prime");
		}
		
		System.out.println("************************************************");
		
		
		//for range numbers
		
		for(int i=2;i<=20;i++) {
			boolean fla=true;
			for( int j=2;j<i;j++) {
				if(i%j==0) {
					fla=false;
					
				}
			}
			
			if(fla==true) {
				System.out.println(i+" is prime");
			}
			else {
				System.out.println(i+" is not prime");
			}
			
		}

	


}}