const flatagramAPI = 'http://localhost:3000/images/1';
const imageContainer = document.getElementById('flatagram-image-container')
const commentList = document.querySelector('#comments-list')

fetch(flatagramAPI)
    .then((res) => res.json())
    .then(renderFlatagramImages)
    .catch(console.err)


// function displayFlatagramImages(flatagramArray) {
//     flatagramArray.forEach(addFlatagramImages)
// }

function renderFlatagramImages(card) {
    const imageCard = document.querySelector('#card-image') 
    imageCard.src = card.image 
    imageCard.alt = card.name
    
    const imageTitle = document.querySelector('#card-title')
        imageTitle.textContent = card.title 

    const imageLikes = document.querySelector('.likes-section')
        imageLikes.textContent = `${card.likes} likes`


    const imageComments = document.querySelector('#comments-list')
        imageComments.textContent = card.comments

        .addEventListener('click', (env) => {
            card.likes += 1;
            cardLikesTag.textContent = `${card.likes} Likes`
            
        })
        

        
          
    
    //console.log(card)
    // imageContainer.append(imageCard)
}
