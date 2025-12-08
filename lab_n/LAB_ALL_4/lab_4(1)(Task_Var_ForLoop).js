function sumFor(...args) {
    let all = 0;
    for (let i = 0; i < args.length; i++) {
        all += args[i];
    }
    return all;
}