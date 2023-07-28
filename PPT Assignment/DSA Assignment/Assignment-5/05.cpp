/*<aside>
💡 **Question 5**

Given two integer arrays arr1 and arr2, and the integer d, *return the distance value between the two arrays*.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

**Example 1:**

**Input:** arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

**Output:** 2

**Explanation:**

For arr1[0]=4 we have:

|4-10|=6 > d=2

|4-9|=5 > d=2

|4-1|=3 > d=2

|4-8|=4 > d=2

For arr1[1]=5 we have:

|5-10|=5 > d=2

|5-9|=4 > d=2

|5-1|=4 > d=2

|5-8|=3 > d=2

For arr1[2]=8 we have:

**|8-10|=2 <= d=2**

**|8-9|=1 <= d=2**

|8-1|=7 > d=2

**|8-8|=0 <= d=2**

</aside>*/
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int findTheDistanceValue(vector<int> &arr1, vector<int> &arr2, int d)
{
    int ans = 0;
    sort(arr2.begin(), arr2.end());
    for (int i = 0; i < arr1.size(); i++)
    {
        int it = lower_bound(arr2.begin(), arr2.end(), arr1[i]) - arr2.begin();
        bool is = false;
        if (it < arr2.size() && abs(arr2[it] - arr1[i]) <= d)
            is = true;
        if (it != 0 && abs(arr2[it - 1] - arr1[i]) <= d)
            is = true;
        if (!is)
            ans++;
    }
    return ans;
}
int main()
{
    vector<int> arr1;
    vector<int> arr2;
    int size1, size2, n, d;
    cout << "Enter the size of arr1: ";
    cin >> size1;
    cout << "Enter the elements of arr1: ";
    for (int i = 0; i < size1; i++)
    {
        cin >> n;
        arr1.push_back(n);
    }

    cout << "Enter the size of arr2: ";
    cin >> size2;
    cout << "Enter the elements of arr2: ";
    for (int i = 0; i < size2; i++)
    {
        cin >> n;
        arr2.push_back(n);
    }
    cout << "Enter the distance: ";
    cin >> d;
    cout << "Output: " << findTheDistanceValue(arr1, arr2, d);
}