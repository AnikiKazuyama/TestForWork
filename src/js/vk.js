function hasPhoto(attachments){
    return attachments.type == 'photo' ? true : false;
}

function hasAttachments(data){
    return data.attachments != undefined ? true : false;
}

function getSrc(photo){
    return photo.src_big;
}

function getPhotosFromAttachments(attachments){
    let photos = [];
    for(let i = 0; i < attachments.length; i++){
        if(hasPhoto(attachments[i])){
            let photo = attachments[i].photo;
            photos.push(getSrc(photo));
        }
    }

    return photos;
}

function getPhotosFromPosts(data){
    let photos = [];
    for(let i = 0; i < data.length; i++) {
        if(hasPhoto(data[i].attachments)) {
            photos.push(getPhotosFromAttachments(data[i].attachments));
        }

    }
    return photos;
    
}