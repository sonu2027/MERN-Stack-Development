// <aside>
// 💡 **Question 1**

// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true

// </aside>


#include <iostream>
#include <unordered_map>
using namespace std;

bool isIsomorphic(string s, string t) {
    if (s.length() != t.length()) {
        return false;
    }

    unordered_map<char, char> s_map;
    unordered_map<char, char> t_map;

    for (int i = 0; i < s.length(); i++) {
        char s_char = s[i];
        char t_char = t[i];

        if (s_map.count(s_char)) {
            if (s_map[s_char] != t_char) {
                return false;
            }
        } else {
            s_map[s_char] = t_char;
        }

        if (t_map.count(t_char)) {
            if (t_map[t_char] != s_char) {
                return false;
            }
        } else {
            t_map[t_char] = s_char;
        }
    }

    return true;
}

int main() {
    string s, t;
    cout<<"Enter string s:";
    cin>>s;
    cout<<"Enter string t:";
    cin>>t;

    if (isIsomorphic(s, t)) {
        cout << "The strings are isomorphic." << std::endl;
    } else {
        cout << "The strings are not isomorphic." << std::endl;
    }

    return 0;
}
