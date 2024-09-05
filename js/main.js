
window.onload = function() {
    const paragraph = document.querySelector('.hero p');
    const typingDuration = 4000; 

    setTimeout(() => {
        paragraph.classList.remove('hidden');
        paragraph.style.opacity = 1;
    }, typingDuration);
};
