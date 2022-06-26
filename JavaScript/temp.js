let textArea = document.getElementById("textEditor");
const btnBold = document.getElementById("btnBold");
const btnItalic = document.getElementById("btnItalic");
const btnUnderline = document.getElementById("btnUnderline");
const btnLog = document.getElementById("btnLog");


let alertt = function () {
    let selectionText = window.getSelection();
    if (selectionText.focusNode.isSameNode(selectionText.anchorNode))
    {let selection= window.getSelection().getRangeAt(0);
        let selectedText = selection.extractContents();
        let span= document.createElement("span");
        span.classList.add("bold");
        span.appendChild(selectedText);
        selection.insertNode(span);}
}

let italic = function () {

    let selection= window.getSelection().getRangeAt(0);
    let selectedText = selection.extractContents();
    let span= document.createElement("span");
    span.classList.add("italic");
    span.appendChild(selectedText);
    selection.insertNode(span);
}

let logData = function(){
    let t1 = window.getSelection();
    console.log(t1.anchorNode);
    console.log(t1.anchorNode.parentElement);
    console.log(t1.anchorNode.nodeName);
    console.log(t1.focusNode);
    console.log(t1.focusNode.parentElement);
    console.log(t1.focusNode.nodeName);
    // console.log(t1.classList.contains("bold"));
    console.log("***************************");
    let range = t1.getRangeAt(0);
    console.log(range);
    let allWithinRangeParent = range.commonAncestorContainer.nextSibling;
    console.log(allWithinRangeParent);

}

function nextNode(node) {
    if (node.hasChildNodes()) {
        return node.firstChild;
    } else {
        while (node && !node.nextSibling) {
            node = node.parentNode;
        }
        if (!node) {
            return null;
        }
        return node.nextSibling;
    }
}

function getRangeSelectedNodes(range) {
    let node = range.startContainer;
    let endNode = range.endContainer;

    // Special case for a range that is contained within a single node
    if (node == endNode) {
        return [node];
    }

    // Iterate nodes until we hit the end container
    let rangeNodes = [];
    while (node && node != endNode) {
        rangeNodes.push( node = nextNode(node) );
    }

    // Add partially selected nodes at the start of the range
    node = range.startContainer;
    while (node && node != range.commonAncestorContainer) {
        rangeNodes.unshift(node);
        node = node.parentNode;
    }

    return rangeNodes;
}

function getNextNode(node)
{
    if (node.firstChild)
        return node.firstChild;
    while (node)
    {
        if (node.nextSibling)
            return node.nextSibling;
        node = node.parentNode;
    }
}

function getNodesInRange(range)
{
    let start = range.startContainer;
    let end = range.endContainer;
    let commonAncestor = range.commonAncestorContainer;
    let nodes = [];
    let node;

    // walk parent nodes from start to common ancestor
    for (node = start.parentNode; node; node = node.parentNode)
    {
        nodes.push(node);
        if (node == commonAncestor)
            break;
    }
    nodes.reverse();

    // walk children and siblings from start until end is found
    for (node = start; node; node = getNextNode(node))
    {
        nodes.push(node);
        if (node == end)
            break;
    }

    return nodes;
}

let logData1 = function(){
    let mySelection = window.getSelection();
    let myRange = mySelection.getRangeAt(0);
    console.log(getRangeSelectedNodes(myRange));
}

let splitData = function(){
    let selection= window.getSelection().getRangeAt(0);
    let sel = window.getSelection();
    //  let selectedText = selection.extractContents();
    let selector = sel.anchorNode.textContent.substring(sel.anchorOffset, selection.startOffset);
    console.log(selection);
    console.log(sel.anchorOffset);
    console.log(selection.startOffset);
    console.log(selector);
    /* let span= document.createElement("span");
     span.classList.add("italic");
     span.appendChild(selectedText);
     selection.insertNode(span);*/
}


btnBold.addEventListener('click', alertt);
btnItalic.addEventListener('click', italic);
btnUnderline.addEventListener('click', logData);
btnLog.addEventListener('click', splitData);
