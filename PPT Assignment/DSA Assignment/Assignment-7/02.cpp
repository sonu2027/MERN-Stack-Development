/*<aside>
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

</aside>*/

#include <iostream>
#include <unordered_map>
using namespace std;

bool isStrobogrammatic(string num) {
    unordered_map<char, char> strobogrammaticMap{
        {'0', '0'},
        {'1', '1'},
        {'6', '9'},
        {'8', '8'},
        {'9', '6'}
    };

    int left = 0;
    int right = num.length() - 1;

    while (left <= right) {
        if (!strobogrammaticMap.count(num[left]) || strobogrammaticMap[num[left]] != num[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

int main() {
    string num;
    cout<<"Enter num:";
    cin>>num;

    if (isStrobogrammatic(num)) {
        cout << "The number is strobogrammatic." << endl;
    } else {
        cout << "The number is not strobogrammatic." << endl;
    }

    return 0;
}