/*Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).
Input: A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}
Output: 4
Explanation: The frequency of 4 is 5 which is greater than half of the size of the array size. */
#include <iostream>
#include <algorithm>
#include <vector>
#include <unordered_map>
using namespace std;

int majorityElement(vector<int> &arr)
{
    int ele = arr[0];
    int count = 0;
    for (int i = 0; i < arr.size(); i++)
    {
        if (count == 0)
            ele = arr[i];
        count += (ele == arr[i]) ? 1 : -1;
    }
    return ele;
}
int main()
{
    vector<int> v;
    int num, size;
    cout << "Enter the size of array: ";
    cin >> size;
    cout << "Enter the " << size << " elements of array" << endl;
    for (int i = 0; i < size; i++)
    {
        cin >> num;
        v.push_back(num);
    }
    cout << "Output: " << majorityElement(v);
    return 0;
}