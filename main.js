/*

<div id="parent">
  <div id="child1">
  </div>
  <div id="child2">
    <div id="subchild">
      subchild!
    </div>
  </div>
</div>



*/
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
