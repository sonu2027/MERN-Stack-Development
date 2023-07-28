/*Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4*/

#include <iostream>
using namespace std;

bool checkTarget(int arr[], int target, int size)
{
    
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == target) // Checking target element in an array
        {                
            return true; // It will return true if the target element found
        }
    }

    return false; // When the target element not found in an array nums the it will return -1

}

int main()
{

    int nums[100], target, size; // Declaration of nums array, target and size of array

    cout << "Enter the size of an array nums: ";
    cin >> size; // Taking size of array as an input

    cout << "Enter the elements of an array nums: ";
    for (int i = 0; i < size; i++)
    {
        cin >> nums[i]; // Taking all the elements of array in nums as an input
    }

    cout << "Enter your target element: ";
    cin >> target; // Targeting the on element of array to find it on array

    if (checkTarget(nums, target, size))
        cout << "1"; // If the checkTarget function will return true then it wii print 1
    else
        cout << "-1"; // If the checkTarget function will return false then it wii print -1

    return 0;
}