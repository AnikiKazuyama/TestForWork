import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Block from './block';

$.ajax({
    url: 'https://api.vk.com/method/wall.get?domain=extrawebdev&access_token=3195e9e93195e9e93115aff35931c30219331953195e9e9697cc67864e1f0c35fe7c074&count=20',
    method: 'GET',
    dataType: 'JSONP',
    success: callback,
});


function callback(data){
    let elems = data.response;
    console.log(elems);
    ReactDOM.render(<Page data = {elems}/>, document.getElementById('root'));
}  



class Page extends React.Component{
    constructor(){
        super();
        this.state = {
            currentElement: 1,
        }
    }

    componentWillMount(){
        this.blocks = this.renderBlocks();
    }

    handleNext = () => {
        
            this.setState((prevState) => {
                if(prevState.currentElement < this.blocks.length - 1 )
                    return {currentElement: prevState.currentElement + 1}
            });
    }

    handlePrev = () => {
            this.setState((prevState) => {
                if(prevState.currentElement > 1)
                    return {currentElement: prevState.currentElement - 1}
            });
    }


    renderBlocks(){
           return this.props.data.map(item => {
            //    return <div className = "blocks" key = {item.id}>{this.rederBlock(item)}</div>
                return <Block className = "blocks" key = {item.id} item = {item}/>
           })
    }

    render(){
        console.log(this.state.currentElement);
        return(
            <div>
                <div>{this.blocks[this.state.currentElement]}</div>
                <div className = "menu">
                    <div className = "prev" onClick = {this.handlePrev}>Prev</div>
                    <div className = "next" onClick = {this.handleNext}>Next</div>
                </div>
            </div>
        );
    }

}


