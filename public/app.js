let shareButton = document.querySelector('#share-button')

const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }


  // Share must be triggered by "user activation"
  shareButton.addEventListener('click', function() {
    try {
      navigator.share(shareData)
    } catch(err) {
        window.location = 'http://www.google.com'
    }
  });
