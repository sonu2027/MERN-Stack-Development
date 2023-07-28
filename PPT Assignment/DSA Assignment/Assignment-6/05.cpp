// <aside>
// 💡 **Question 5**

// The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

// - For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

// **Example 1:**

// **Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

// **Output:** 40

// **Explanation:**

// We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

// </aside>



#include<iostream>
#include<algorithm>
using namespace std;

int minValue(int num1[], int num2[], int size)
{
	sort(num1, num1 + size);
	sort(num2, num2 + size);
	int ans = 0;
	for (int i = 0; i < size; i++)
		ans = ans + (num1[i] * num2[size - i - 1]);

	return ans;
}

int main()
{
	int num1[100], num2[100], size;
	cout<<"Enter the size of array num1 and num2: ";
    cin>>size;
    cout<<"Enter the elements of array num1: ";
    for (int i = 0; i < size; i++)
    {
        cin>>num1[i];
    }
    cout<<"Enter the elements of array num2: ";
    for (int i = 0; i < size; i++)
    {
        cin>>num2[i];
    }
	cout <<"Output: "<< minValue(num1, num2, size) << endl;
	return 0;
}
