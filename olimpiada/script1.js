function f(n) {
    if (n <= 2) {
        return 1
    }

    return 3 * f(n - 1) - f(n - 2)
}

console.log(f(8));