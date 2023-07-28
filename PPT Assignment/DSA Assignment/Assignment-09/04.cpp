/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

#include <iostream>
#include <vector>
using namespace std;

int targetIndex(vector<int> v, int size, int target)
{
    if(target>v[size-1]){
        return size;
    }
    if( target< v[0]){
        return 0;
    }
    int s = 0;
    int e = size - 1;
    int m = s + ((e - s) / 2);
    while (s <= e)
    {
        if (v[m] == target)
        {
            return m;
        }
        else if (v[m] > target)
        {
            e = m - 1;
            m = s + ((e - s) / 2);
        }
        else
        {
            s = m + 1;
            m = s + ((e - s) / 2);
        }
    }
    return -1;
}

int main()
{
    vector<int> v;
    int size, num, target;
    cout << "Enter the size of array: ";
    cin >> size;
    cout << "Enter the " << size << " elements of array" << endl;
    for (int i = 0; i < size; i++)
    {
        cin >> num;
        v.push_back(num);
    }
    cout << "Enter your target element: ";
    cin >> target;
    cout << "Output: " << targetIndex(v, size, target);
    return 0;
}
