window.addEventListener("load", () => {
    setTimeout(() => {
        var loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 1000);
    }, 1000);
});