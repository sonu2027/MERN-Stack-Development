#include <iostream>
#include <unordered_map>

bool isIsomorphic(std::string s, std::string t) {
    if (s.length() != t.length()) {
        return false;
    }

    std::unordered_map<char, char> s_map;
    std::unordered_map<char, char> t_map;

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
    std::string s = "egg";
    std::string t = "add";

    if (isIsomorphic(s, t)) {
        std::cout << "The strings are isomorphic." << std::endl;
    } else {
        std::cout << "The strings are not isomorphic." << std::endl;
    }

    return 0;
}
