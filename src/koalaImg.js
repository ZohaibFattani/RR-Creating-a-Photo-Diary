// Renders the image of a koala card
export let renderKoalaCardImage = koala => {
    let imageContainer = document.createElement('div')
    let koalaImage = document.createElement('img')

    imageContainer.setAttribute('class', 'image')

    koalaImage.setAttribute('src', koala.imageURL)

    imageContainer.append(koalaImage)

    return imageContainer
}
