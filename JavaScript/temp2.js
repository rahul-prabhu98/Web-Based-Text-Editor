const textArea = document.getElementById("textEditor");
const btnBold = document.getElementById("btnBold");
const btnItalic = document.getElementById("btnItalic");
const btnUnderline = document.getElementById("btnUnderline");
const btnLog = document.getElementById("btnLog");
var divNodeName = document.getElementById("textEditor").cloneNode();

let addFirstSpan  = function(){
    let text = textArea.innerHTML;
    console.log(textArea.children);


}

let bold = function(){
    let selection= window.getSelection().getRangeAt(0);
    let selection1= window.getSelection();
    console.log(selection1.anchorNode);
    console.log(selection1.anchorOffset);
    console.log(selection1.anchorNode.innerHTML);
    let selectedText = selection.extractContents();
    console.log(selectedText);
    let span= document.createElement("span");
    span.classList.add("italic");
    span.appendChild(selectedText);
    selection.insertNode(span);
}

let italic = function(){
    let selection= window.getSelection().getRangeAt(0);
    let selection1= window.getSelection();
    let selectedText = selection.extractContents();
    let span= document.createElement("span");
    span.classList.add("italic");
    span.appendChild(selectedText);
    selection.insertNode(span);
}

function addClassToSelectedNodes(cssClass){
    console.log("going - IN - getselectednodes");
    var sel = window.getSelection();
    var selRange = sel.getRangeAt(0);
    try{var frag=selRange.cloneContents()}catch(e){return(false);}
//var tempspan = document.createElement("span");
//tempspan.appendChild(frag);
//console.log(tempspan);
//tempspan.classList.add(cssClass);

    //window.selnodes = frag.childNodes;
    abc = frag.childNodes;
    var output = '';
    for(var i=0;i<abc.length;i++){
        /*if (typeof selnodes[i].tagName !== 'undefined'){
        output += "A "+selnodes[i].tagName+" was found\n"
        }
        else {*/
// output += "Some text was found: '"+selnodes[i].textContent+"'\n";
        abc[i].classList.add('bold');
        console.log("thissss");
        console.log(" ------------ " + abc[i]);
        /* }*/
//do something cool with each element here...
    }
    selRange.deleteContents();
    selRange.insertNode(frag);
    console.log("going - OUT - getselectednodes");
    return(output);
}

let splitData = function(){
    let selected = document.getSelection();
    let selectionRange = document.getSelection().getRangeAt(0);
    console.log(selectionRange);
    let anchorData = selected.anchorNode.textContent.substring(0, selected.anchorOffset);
    console.log(anchorData);
    let focusData = selected.focusNode.textContent.substring(selected.focusOffset,);
    console.log(focusData);
}


textArea.addEventListener('input', addFirstSpan);

btnBold.addEventListener('click', bold);
btnItalic.addEventListener('click', italic);
btnUnderline.addEventListener('click', addClassToSelectedNodes);
btnLog.addEventListener('click', splitData);
