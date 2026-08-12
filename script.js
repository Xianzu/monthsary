function openSurprise() {
    document.getElementById("content").style.display = "block";

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}