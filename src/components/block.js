import React from 'react';

export default class Block extends React.Component {

    renderImg(item){
        let imgsSrc = getPhotosFromAttachments(item.attachments);
        let imgs = imgsSrc.map((src, index) => {
            return <div className = "photo" key = {index}><img src = {src}/></div>
        })
        return(imgs)

    }

    render(){
        let item = this.props.item;

            if(item.id){
                return(
                    <div className = "block">
                        <div className = "title"><a href = {`https://vk.com/wall${item.from_id}_${item.id}`}>К посту</a></div>
                        <div className = "content">
                            {hasAttachments(item) ? this.renderImg(item) : null}
                        </div>
                    </div>
                );
            }
    }
}