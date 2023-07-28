/*<aside>
💡 **Question 7**

Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in O(log n) time.

**Example 1:**

**Input:** nums = [3,4,5,1,2]

**Output:** 1

**Explanation:**

The original array was [1,2,3,4,5] rotated 3 times.

</aside>*/

#include <iostream>
#include <vector>
using namespace std;

int findMin(vector<int> &nums)
{
    int mini = INT_MAX;
    for (int i = 0; i < nums.size(); i++)
    {
        mini = min(nums[i], mini);
    }
    return mini;
}

int main()
{
    vector<int> nums;
    int size, n;
    cout << "Enter the size of nums: ";
    cin >> size;
    cout << "Enter the elements of array: ";
    for (int i = 0; i < size; i++)
    {
        cin >> n;
        nums.push_back(n);
    }
    cout << "Output: " << findMin(nums);
    return 0;
}