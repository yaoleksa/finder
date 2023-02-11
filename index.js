navigator.geolocation.watchPosition((pos) => {
    window.open(`https://www.openstreetmap.org/#map=18/${pos.coords.latitude}/${pos.coords.longitude}`, 
    '_self');
}, (e) => {
    if(e.code == e.PERMISSION_DENIED){
        window.open('https://www.openstreetmap.org/#map=18/', '_self');
    }
});