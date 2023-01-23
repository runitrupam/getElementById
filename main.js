function getElementById(id) {
    const result = [];

    function getEachIDNode(node) {
        if(node.id === id) {
            result.push(node);
        }
        for(let i=0; i<node.childNodes.length; i++) {
            getEachIDNode(node.childNodes[i]);
        }
    }
    getEachIDNode(document.body);
    return result;
}
console.log(getElementById('subchild')[0].innerHTML);
