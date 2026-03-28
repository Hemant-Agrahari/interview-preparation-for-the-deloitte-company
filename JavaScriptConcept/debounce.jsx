function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// Example usage:
const handleResize = debounce(() => {
    console.log('Window resized');
}, 500);

