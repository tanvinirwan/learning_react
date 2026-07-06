
function addElement(customElement,rootContainer){
    const domElement = document.createElement(customElement.type) ;
    domElement.innerHTML = customElement.childern ;
    domElement.setAttribute('href',customElement.props.href) ;
    domElement.setAttribute('target',customElement.props.target) ;

    rootContainer.appendChild(domElement) ;
}

const customElement={
    type:'a' ,
    props:{
        href:'https://www.google.com/',
        target : '_blank'
    },
    childern : 'click me to visit google' 
};


const rootContainer = document.getElementById("root") ;

addElement(customElement,rootContainer) ;