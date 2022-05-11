let shareButton = document.querySelector('#share-button')

console.log(shareButton)

shareButton.addEventListener('click', function() {
    if(navigator.share){
        navigator.share({
            url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
        }).then(()=>{
            console.log('Thanks for sharing!')
        })
        .catch(console.error)
    } else {
        console.log('fail')
    }
})