let shareButton = document.querySelector('#share-button')

console.log(shareButton)

const shareData = {
    url: 'http://homestar-ipsum.herokuapp.com'
}

shareButton.addEventListener('click', async() => {
    if(navigator.share){
        try {
            await navigator.share(shareData)
            console.log('shared!')
    } catch (error){
        console.log('error')
    }
    } else {
        console.log('whatefer')
    }
})