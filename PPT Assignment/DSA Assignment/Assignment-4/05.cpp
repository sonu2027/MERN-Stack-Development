/*<aside>
💡 **Question 2**

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example 1:**
**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2.
</aside>*/
#include<iostream>

int arrangeCoins(int n) {
        int count = 0, coin = 1;
        while (n >= coin) {
            n -= coin;
            coin++;
            count++;
        }
        return count;
    }

using namespace std;
int main(){
    int n;
    cout<<"Enter n: ";
    cin>>n;
    cout<<arrangeCoins(n);
    return 0;
}