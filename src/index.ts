const buttons = document.querySelectorAll('button.misskey-share-button')

for (const button of buttons) {
    button.childNodes.forEach(child => button.removeChild(child))
    button.insertAdjacentText('beforeend', 'a')
}
