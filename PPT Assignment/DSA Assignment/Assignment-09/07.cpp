/*Given an array of integers, find the inversion of an array. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
N=5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: (2,1) (4,1) and (4,3) forms an inversion in an array*/

#include <iostream>
using namespace std;
#include <vector>
vector<vector<int>> inversion(vector<int> &nums)
{
    vector<vector<int>> ans;
    vector<int> v;
    for (int i = 0; i < nums.size() - 1; i++)
    {
        for (int j = i + 1; j < nums.size(); j++)
        {
            if (nums[i] > nums[j] && i < j)
            {
                v.push_back(nums[i]);
                v.push_back(nums[j]);
                ans.push_back(v);
            }
        }
    }
    return ans;
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
    vector<vector<int>> ans = inversion(v);
    for (int i = 0; i < ans.size(); i++)
    {

        for (int j = 0; j < ans[i].size(); j++)
        {
            cout << ans[i][j] << " ";
        }
        cout<<endl;
    }

    return 0;
}