#include <stdio.h>
#include <stdlib.h>

int* missing(int* a, int n, int* b) {
    int* result = (int*)malloc(2 * sizeof(int));
    int* c = (int*)calloc(n + 1, sizeof(int));

    for (int i = 0; i < n; i++) {
        c[a[i]]++;
        if (c[a[i]] == 2)
            result[0] = a[i];
    }

    for (int i = 1; i <= n; i++) {
        if (c[i] == 0) {
            result[1] = i;
            break;
        }
    }

    *b = 2;
    return result;
}

int main() {
    int a[] = {1, 2, 2, 4};
    int n = sizeof(a) / sizeof(a[0]);
    int b;
    int* result = missing(a, n, &b);

    printf("The output is: [%d, %d]\n", result[0], result[1]);

    free(result);
    return 0;
}