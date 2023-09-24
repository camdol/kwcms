(function() {
    var kiaM = new FontFaceObserver('kiaM'),
        kiaB = new FontFaceObserver('kiaB'),
        docEl = document.documentElement;

    docEl.classList.add('fonts-loading');

    Promise.all([kiaM.load(), kiaB.load()]).then(function() {
        sessionStorage.fontsLoaded = true;
        docEl.classList.remove('fonts-loading');
        docEl.classList.add('fonts-loaded');
    }).catch(function() {
        sessionStorage.fontsLoaded = false;
        docEl.classList.remove('fonts-loading');
        docEl.classList.add('fonts-failed');
    });

    if (sessionStorage.fontsLoaded) {
        docEl.classList.add('fonts-loaded');
    }

})()