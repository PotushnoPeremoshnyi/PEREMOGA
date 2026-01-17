function sumDoWhile(...args) {
    let all = 0;
    let a = 0;
    if (args.length === 0) return 0;
    do {
        all += args[a];
        a++;
    } while (a < args.length);
    return all;
}
