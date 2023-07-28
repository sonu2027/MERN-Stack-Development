/*Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2  as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"

Output: "134"  

*/
#include <iostream>
#include <algorithm>
using namespace std;

string addStrings(string num1, string num2) {
    string result;
    int carry = 0;
    int i = num1.length() - 1;
    int j = num2.length() - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        int digit1 = (i >= 0) ? num1[i] - '0' : 0;
        int digit2 = (j >= 0) ? num2[j] - '0' : 0;
        int sum = digit1 + digit2 + carry;
        carry = sum / 10;
        sum %= 10;
        result.push_back(sum + '0');

        i--;
        j--;
    }

    reverse(result.begin(), result.end());

    return result;
}

int main() {
    string num1, num2;
    cout<<"Enter num1 and num2 by space separated:";
    cin>>num1>>num2;

    string sum = addStrings(num1, num2);

    cout << "Sum: " << sum << endl;

    return 0;
}
