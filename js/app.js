if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((reg=>console.log('service worker regostered')))
    .catch((err)=>console.log('No registered'));
}


window.eventListeners('load',(evt)=>{subscribe();});

async function subscribe(){
    let sw= await navigator.serviceWorker.ready;
    let push= await sw.pushMenager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:'BL4vHCuYFTwZ0GJicFlY4d3lNAf4__GD7JH7y1vmTAK4LTdNXSUM43PNbwuscavArzfzqBEqLHl2uR4Z3InkDjs'
    });
    console.log(JSON.stringify(push));
}

