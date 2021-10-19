(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const emails = document.querySelectorAll('b[name=email]')
    emails.forEach((e) => e.innerHTML = email ? email : 'your email')
})();