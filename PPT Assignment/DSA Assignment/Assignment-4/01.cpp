/*<aside>
💡 **Question 1**
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.

</aside>*/
#include <iostream>
#include <vector>
using namespace std;

vector<int> findCommon(vector<int> arr1, vector<int> arr2, vector<int> arr3)
{
    vector<int> v1;

    for (int i = 0; i < arr1.size(); i++)
    {
        for (int j = 0; j < arr2.size(); j++)
        {
            if (arr1[i] == arr2[j])
            {
                v1.push_back(arr1[i]);
                break;
            }
        }
    }

    vector<int> v2;

    for (int i = 0; i < arr3.size(); i++)
    {
        for (int j = 0; j < v1.size(); j++)
        {
            if (arr3[i] == v1[j])
            {
                v2.push_back(arr3[i]);
                break;
            }
        }
    }

    return v2;
}

int main()
{
    vector<int> arr1;
    vector<int> arr2;
    vector<int> arr3;
    int size, n;

    cout << "Enter the size of arr1: ";
    cin >> size;
    cout << "Enter the elements of arr1: ";
    for (int i = 0; i < size; i++)
    {
        cin >> n;
        arr1.push_back(n);
    }

    cout << "Enter the size of arr2: ";
    cin >> size;
    cout << "Enter the elements of arr2: ";
    for (int i = 0; i < size; i++)
    {
        cin >> n;
        arr2.push_back(n);
    }

    cout << "Enter the size of arr3: ";
    cin >> size;
    cout << "Enter the elements of arr3: ";
    for (int i = 0; i < size; i++)
    {
        cin >> n;
        arr3.push_back(n);
    }

    vector<int> v = findCommon(arr1, arr2, arr3);
    cout << "Common part of arr1, arr2 and arr3 are: ";
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }

    return 0;
}