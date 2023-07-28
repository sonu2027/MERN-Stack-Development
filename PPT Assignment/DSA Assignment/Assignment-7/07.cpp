/*<aside>
💡 **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

</aside>*/


#include <iostream>
#include <stack>
using namespace std;

bool backspaceCompare(string s, string t) {
    stack<char> stackS, stackT;

    for (char c : s) {
        if (c != '#') {
            stackS.push(c); 
        } else if (!stackS.empty()) {
            stackS.pop(); 
        }
    }

    for (char c : t) {
        if (c != '#') {
            stackT.push(c); 
        } else if (!stackT.empty()) {
            stackT.pop(); 
        }
    }

    while (!stackS.empty() && !stackT.empty()) {
        if (stackS.top() != stackT.top()) {
            return false; 
        }
        stackS.pop();
        stackT.pop();
    }

    return stackS.empty() && stackT.empty(); 
}

int main() {
    string s, t;
    cout<<"Enter string s: ";
    cin>>s;
    cout<<"Enter string t: ";
    cin>>t;
    if (backspaceCompare(s, t)) {
        cout << "true" << endl;
    } else {
        cout << "false" << endl;
    }

    return 0;
}
