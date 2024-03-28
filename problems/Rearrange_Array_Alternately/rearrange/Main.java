package rearrange;

import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    test1();
    test2();
    test3();
  }

  public static void test1() {
    long[] arr = {1,2,3,4,5,6};
    int n = 6;
    rearrange(arr, n);
  }

  public static void test2() {
    long[] arr = {1,2,3,4,5,6,7};
    int n = 7;
    rearrange(arr, n);
  }

  public static void test3() {
    long[] arr = {10,20,30,40,50,60,70,80,90,100,110};
    int n = 11;
    rearrange(arr, n);
  }

  public static void rearrange(long arr[], int n) {
    int i = 0; int j = n - 1;
    long[] aux = arr.clone();
    int indexArr = -1;
       
    while(i < n/2) {
      arr[++indexArr] = aux[j];
      arr[++indexArr] = aux[i];
      i++; j--;      
    }   
    if(n % 2 != 0) arr[n-1] = aux[n/2];
    System.out.println(Arrays.toString(arr));    
  }


}