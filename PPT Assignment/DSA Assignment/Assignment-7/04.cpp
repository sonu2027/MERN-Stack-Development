/*<aside>
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

</aside>*/


#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
using namespace std;

string reverseWords(string s) {
    istringstream iss(s);
    string word;
    string result;

    while (iss >> word) {
        reverse(word.begin(), word.end());
        result += word + " ";
    }

    // Remove the trailing whitespace
    if (!result.empty()) {
        result.pop_back();
    }

    return result;
}

int main() {
    string s;
    cout<<"Enetr string s:";
    cin>>s;
    string reversed = reverseWords(s);
    cout << "Reversed sentence: " << reversed << endl;

    return 0;
}