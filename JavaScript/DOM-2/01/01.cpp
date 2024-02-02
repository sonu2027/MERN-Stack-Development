#include <iostream>
#include <string>
#include <vector>
using namespace std;
class Node
{
public:
    int data;
    Node *next = NULL;
    Node(int data)
    {
        this->data = data;
    }
};

void insertNode(Node *&head, Node *&tail, int data)
{
    Node *temp = new Node(data);
    if (head == NULL)
    {
        head = temp;
        tail = temp;
        return;
    }
    tail->next = temp;
    tail = temp;
}

void revStr(string &str)
{
    for (int i = 0; i < str.size() / 2; i++)
        swap(str[i], str[str.size() - i - 1]);
}

string revmoveZero(string str)
{
    string st;
    bool a = false;
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] == '0' && a == false)
        {
            continue;
        }
        else
        {
            st.push_back(str[i]);
            a = true;
        }
    }
    return st;
}

string returnStr(Node *head)
{
    string str;
    while (head != NULL)
    {
        str += to_string(head->data);
        head = head->next;
    }
    return str;
}

int convertToNum(string str)
{
    int sum = 0;
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] == ' ')
        {
            continue;
        }
        int num = str[i] - '0';
        sum = sum * 10 + num;
    }
    return sum;
}

string computation(string str1, string str2)
{
    string ans;
    int size1 = str1.size(), size2 = str2.size(), i = 0;
    int carry = 0;
    while (size1 > 0 && size2 > 0)
    {
        if (size1 >= size2)
        {
            int num1 = str1[i] - '0';
            int num2 = str2[i] - '0';
            if (carry == 0 && num1 >= num2)
            {
                int diff = num1 - num2;
                if (diff < 0)
                    diff = -diff;
                ans += to_string(diff);
            }
            else if (carry == 0 && num1 < num2)
            {
                num1 += 10;
                int diff = num1 - num2;
                if (diff < 0)
                    diff = -diff;
                ans += to_string(diff);
                carry = 1;
            }
            else if (carry == 1 && num1 > num2)
            {
                num1 -= 1;
                int diff = num1 - num2;
                if (diff < 0)
                    diff = -diff;
                ans += to_string(diff);
                carry = 0;
            }
            else
            {
                num1 += 9;
                int diff = num1 - num2;
                if (diff < 0)
                    diff = -diff;
                ans += to_string(diff);
                carry = 1;
            }
        }

        else
        {
            int num1 = str2[i] - '0';
            int num2 = str1[i] - '0';
            if (carry == 0 && num1 >= num2)
            {
                int diff = num1 - num2;
                ans += to_string(diff);
            }
            else if (carry == 0 && num1 < num2)
            {
                num1 += 10;
                int diff = num1 - num2;
                ans += to_string(diff);
                carry = 1;
            }
            else if (carry == 1 && num1 > num2)
            {
                num1 -= 1;
                int diff = num1 - num2;
                ans += to_string(diff);
                carry = 0;
            }
            else
            {
                num1 += 9;
                int diff = num1 - num2;
                ans += to_string(diff);
                carry = 1;
            }
        }
        size1--;
        size2--;
        i++;
    }

    while (size1 > 0)
    {
        int num = str1[i] - '0';
        if (carry == 0)
        {
            ans += to_string(num);
        }
        else if (carry == 1 && num == 0)
        {
            num = 9;
            ans += to_string(num);
            carry = 1;
        }
        else
        {
            num -= 1;
            ans += to_string(num);
            carry = 0;
        }
        size1--;
        i++;
    }
    while (size2 > 0)
    {
        int num = str2[i] - '0';
        if (carry == 0)
        {
            ans += to_string(num);
        }
        else if (carry == 1 && num == 0)
        {
            num = 9;
            ans += to_string(num);
            carry = 1;
        }
        else
        {
            num -= 1;
            ans += to_string(num);
            carry = 0;
        }
        size2--;
        i++;
    }
    return ans;
}

Node *subLinkedList(Node *head1, Node *head2)
{
    // Your implementation of subLinkedList goes here
    // Make sure to return the head of the resulting linked list
    string str1 = returnStr(head1);
    string str2 = returnStr(head2);

    str1 = revmoveZero(str1);
    str2 = revmoveZero(str2);

    revStr(str1);
    revStr(str2);

    string ans = computation(str1, str2);

    revStr(ans);
    ans = revmoveZero(ans);

    int number = convertToNum(ans);
    Node *head = new Node(number);
    return head;
}

int main()
{
    // {2,9,8,0,0,0,3};
    // {4,0,0,0};
    vector<int> v1 = {9,0,7,6,2,2,3,0};
    vector<int> v2 = {7,2,9,8,5,9,4,8,0,2};
    Node *head1 = NULL;
    Node *tail1 = NULL;

    Node *head2 = NULL;
    Node *tail2 = NULL;

    for (int i = 0; i < v1.size(); i++)
        insertNode(head1, tail1, v1[i]);

    for (int i = 0; i < v2.size(); i++)
        insertNode(head2, tail2, v2[i]);

    Node *head = subLinkedList(head1, head2);
    cout << head->data;
}