// Given a 1-indexed array of integers numbers that are already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// Return the indices of the two numbers, index1, and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

#include <iostream>
#include <array>
using namespace std;

void returnIndex(int *arr, int size, int target)
{
    int ans[2], count=0;
    for (int i = 0; i < size-1; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if (arr[i]+arr[j] == target)
            {
                ans[0] = i;
                ans[1]=j;
                count++;
                break;
            }
        }
        if(count==1){
            break;
        }
    }
    cout<<"Output: ";
    for (int i = 0; i < 2; i++)
    {
        cout<<ans[i]<<" ";
    }
    
}

int main()
{
    int arr[100], size, ans[100], target;
    cout << "Enter the size of array: ";
    cin >> size;
    cout << "Enter the " << size << " elements of array" << endl;
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
    cout << "Enter your target" << endl;
    cin >> target;
    returnIndex(arr, size, target);
    return 0;
}