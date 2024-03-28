import java.util.Arrays;

/**
 * Main
 */
public class Main {
  public static void main(String[] args) {
    test1();
  }  

  public static void test1() {
    int[] nums = {2, 8, 5, 4};
    // System.out.println(minSwaps(nums));
    testIndexOf(); 
  }

  public static void testIndexOf() {
    int[] nums = {2, 8, 5, 4};
    System.out.println(Arrays.binarySearch(nums, 5));
  }

  public static int minSwaps(int nums[]) {
    int swap = 0;
    for(int i = 0; i < nums.length; i++) {
      int[] sArr = Arrays.copyOfRange(nums, i, nums.length);
      Arrays.sort(sArr);
      int min = sArr[0];
      
      if(nums[i] > min) {
        System.err.println("OOps!" + min);
        System.out.print(nums[i]);
        System.out.print(min);
        System.out.println();
        int indexMin = Arrays.stream(nums).boxed().toList().indexOf(nums);
        System.out.println("indexMin: " + indexMin);
        nums[indexMin] = nums[i];
        nums[i] = min;
        swap++;
      } else {
        System.err.println("Ok!");
        System.out.print(nums[i]);
        System.out.print(min);
        System.out.println();
      }
    }
    return swap;
  }
}