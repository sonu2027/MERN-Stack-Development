#include <stdio.h>

int duplicate(int* a, int n) {
   
    int count[100000] = {0};
   
    for (int i = 0; i < n; i++) {
       
        count[a[i]]++;
       
       
        if (count[a[i]] == 2) {
            return 1;
        }
    }
   
    return 0;
}

int main() {
    int a[] = {1, 2, 3, 1};
    int n = sizeof(a) / sizeof(a[0]);

    int result = duplicate(a,n);

    printf("%s\n", result ? "true" : "false");

    return 0;
}