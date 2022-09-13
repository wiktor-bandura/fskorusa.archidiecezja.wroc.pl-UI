const memoryBoxes = [...document.querySelectorAll('.section-memories__memories .memory')];

const generateModal = (memory) => {
    const modalTitle = document.createElement('h4');
    const modalAuthorName = document.createElement('h5');
    const modalContent = document.createElement('p');
    const modal = document.createElement('div');
    const modalClose = document.createElement('span');

    modalTitle.textContent = memory.title;
    modalAuthorName.textContent = memory.name;
    modalContent.textContent = memory.content;
    modalClose.innerHTML = `&#10005;`;

    modalTitle.classList.add('modal__title', 'heading', 'heading-4', 'heading--primary');
    modalAuthorName.classList.add('modal__author-name');
    modalContent.classList.add('modal__content');
    modalClose.classList.add('modal__close');
    modal.classList.add('modal');

    modal.append(
        modalTitle,
        modalAuthorName,
        modalContent,
        modalClose
    );

    document.body.appendChild(modal);

    modalClose.addEventListener('click', () => {
        document.body.removeChild(modal);
    })
}

const showErrorMessage = (error) => alert('Ups! Coś poszło nie tak! Spróbuj ponownie później', error);

const getModalsContent = (clickedMemoryTitle) => {
    fetch('./memories.json')
    .then((response) => response.json())
    .then((data) => {
        const found = data.memories.find(memory => memory.title === clickedMemoryTitle);

        generateModal(found);

    })
    .catch((error) => {
        console.error(error);
        showErrorMessage(error);
    });
}

memoryBoxes.forEach(memoryBox => memoryBox.addEventListener('click', () => {
    getModalsContent(memoryBox.dataset.title);
}));