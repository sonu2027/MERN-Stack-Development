/*Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.*/
// C++ program to find minimum difference of maximum
// and minimum of K number.



#include<iostream>
using namespace std;
 
// Return minimum difference of maximum and minimum
// of k elements of arr[0..n-1].
int minDiff(int arr[], int n, int k)
{
    int result = INT_MAX;
 
    // Sorting the array.
     for (int i = 0; i < n-1; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if(arr[i]>arr[j])
            swap(arr[i], arr[j]);
        }
    }
 
    // Find minimum value among all K size subarray.
    for (int i=0; i<=n-k; i++)
        result = min(result, arr[i+k-1] - arr[i]);
 
    return result;
}
 
int main()
{
    int arr[] = {10, 100, 300, 200, 1000, 20, 30};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = 3;
 
    cout << minDiff(arr, n, k) << endl;
    return 0;
}