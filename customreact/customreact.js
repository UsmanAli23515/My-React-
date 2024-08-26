function customRender(reactElement,container) {
    const domElement =document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (prop in reactElement.props){

    domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

let reactElement ={
    type : 'a',
    props: {
        href: "https://google.com",
        target: '_blank'   
     },
        children: "click to visit google"
};
const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)