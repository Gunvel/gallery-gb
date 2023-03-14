'use strict';

const regexImg = new RegExp('\.(png|jpe?g|gif|svg)$');
const regexAudio = new RegExp('\.mp3$');
const regexVideo = new RegExp('\.mp4$');

const imageCardMarkup = (imageURL, name) => `
    <div class="card">
        <img class="card__img" src="${imageURL}" alt="${name}"/>
        <div class="card__name">${name}</div>
    </div>
`;

const audioCardMarkup = (audioURL, name) => `
    <div class="card">
        <audio class="card__audio" controls src="${audioURL}"></audio>       
        <div class="card__name">${name}</div>
    </div>
`;

const videoCardMarkup = (videoURL, name) => `
    <div class="card">
        <video class="card__video" controls src="${videoURL}"/></video>
        <div class="card__name">${name}</div>
    </div>
`;

function CreateAndAddCard(container, content, name, markupGetter) {
    const markup = markupGetter(content, name);
    container.insertAdjacentHTML("beforeend", markup);
}

export function LoadCard(container, contentURL, name) {
    if (container == null || container == undefined ||
        contentURL == null || contentURL == undefined) 
        return;

    if (regexImg.test(contentURL)) {
        CreateAndAddCard(container, contentURL, name, imageCardMarkup);
    } else if (regexAudio.test(contentURL)) {
        CreateAndAddCard(container, contentURL, name, audioCardMarkup);
    } else if (regexVideo.test(contentURL)) {
        CreateAndAddCard(container, contentURL, name, videoCardMarkup);
    }
}