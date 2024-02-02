#include <iostream>
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

void insertNode(Node *&tail, int data)
{
    Node *temp = new Node(data);
    tail->next = temp;
    tail = temp;
}

void removeLoop(Node *head)
{
    // just remove the loop without losing any nodes
    Node *temp=head;
    Node *prev = head;
    head = head->next;
    while (head!=temp)
    {
        prev = head;
        head = head->next;
    }
    prev->next = NULL;
}

int main()
{
    Node *head = new Node(1);
    Node *tail = head;

    insertNode(tail, 2);
    insertNode(tail, 3);
    tail->next = head;

    cout<<"tail->next: "<<tail->next<<endl;
    removeLoop(head);
    cout<<"tail->next: "<<tail->next<<endl;

    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
}
