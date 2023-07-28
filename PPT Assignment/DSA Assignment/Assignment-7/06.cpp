/*<aside>
💡 **Question 6**

Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

A **shift** on s consists of moving the leftmost character of s to the rightmost position.

- For example, if s = "abcde", then it will be "bcdea" after one shift.

**Example 1:**

**Input:** s = "abcde", goal = "cdeab"

**Output:**

true

</aside>*/

#include <iostream>
#include <string>
using namespace std;

bool rotateString(string s, string goal) {
    if (s.length() != goal.length()) {
        return false;
    }

    string concatenated = s + s;

    return concatenated.find(goal) != string::npos;
}
int main() {
    string s, goal;
    cout<<"Enter string s: ";
    cin>>s;
    cout<<"Enetr goal: ";
    cin>>goal;

    if (rotateString(s, goal)) {
        cout << "Output: true" << endl;
    } else {
        cout << "Output: false" << endl;
    }

    return 0;
}
