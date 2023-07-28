#include <stdio.h>

void merge(int* n1, int m, int* n2, int n) {
    int i1 = m - 1;
    int i2 = n - 1;
    int mergeindex = m + n - 1;

    while (i1 >= 0 && i2 >= 0) {
        if (n1[i1] >= n2[i2]) {
            n1[mergeindex] = n1[i1];
            i1--;
        } else {
            n1[mergeindex] = n2[i2];
            i2--;
        }
        mergeindex--;
    }

   
    while (i2 >= 0) {
        n1[mergeindex] = n2[i2];
        i2--;
        mergeindex--;
    }
}

int main() {
    int n1[6] = {4,5,2,7,1,5};
    int m = 3;
    int n2[3] = {2, 5, 6};
    int n = 3;

    merge(n1, m, n2, n);

    printf(" Array  after merge: ");
    for (int i = 0; i < m + n; i++) {
        printf("%d ", n1[i]);
    }
    printf("\n");

    return 0;
}