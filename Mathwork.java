
import java.lang.Math;
public class Mathwork{
  public static void main(String[] args){
       int m1 = 1;
       int m0 = 3;
     
       System.out.println("ODE CHRISTOPHER 19CJ025813");
        System.out.println("Square root: " + Math.sqrt(13));
        System.out.println("Absolute:" + Math.abs(1-3));
        System.out.println("Raise to power: " + Math.pow(1, 3));
        System.out.println("Exponent: " + Math.exp(1));
        System.out.println("Cube root: " + Math.cbrt(13));
       
       
       
     
    if(m1 > m0){
      System.out.println("m1 is greater than mo");
    }
    else{
       System.out.println("m0 is greater than m1");
    }
 
    
    
    
     String smaller = m1>m0 ? "m1 is greater than m0" : "m1 is not greater than m0";
     System.out.println(smaller+ "\n");

     String smallers = m1<m0 ? "m1 is less than m0" : "m1 is not less than m0";
     System.out.println(smallers+ "\n");
     
    
        
       
     
     int number = 6;
     switch(number){
            case 6: System.out.println("this is case 6");
            break;
            case 2:System.out.println("this is case 2");
            break;
            case 5:System.out.println("this is case 5");
            break;
            case 9:System.out.println("this is case 9");
            break;
            default:System.out.println("this is default case");
      }
     
     
      String small = ((m1>1)||(m0>3)) ? "the OR statement returns true" : "the OR statement returns false";
     System.out.println(small+ "\n");

     String smallr = ((m1>1)&&(m0>3)) ? "The AND statement returns true" : "The AND statement returns false";
     System.out.println(smallr+ "\n");

     String smalle = ((m1!=m0)) ? "The and statement returns true" : "The and statement returns false";
     System.out.println(smalle+ "\n");
     
     
     for(int i=0; i<=20; i++){
       if(i == 13){
       System.out.println(i);
       }
     }
     
     
     int[] A = {5,8,1,3};
     A[2] = 9;
     System.out.println(A[2]);
    
  }
}