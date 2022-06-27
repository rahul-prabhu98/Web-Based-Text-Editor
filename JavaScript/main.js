const textArea = document.getElementById("textEditor");
const btnBold = document.getElementById("btnBold");
const btnItalic = document.getElementById("btnItalic");
const btnUnderline = document.getElementById("btnUnderline");
const btnLog = document.getElementById("btnLog");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const btnCenter = document.getElementById("btnCenter");
var divNodeName = document.getElementById("textEditor").cloneNode();



function addClassToSelectedNodes(event){

    let cssClass =  event.currentTarget.getAttribute('fontType');
    let sel = window.getSelection();
    if (sel.isCollapsed){
        return;
    }
    if (!sel.anchorNode.isSameNode(sel.focusNode)) {
        console.log("In different tags");
        let selRange = sel.getRangeAt(0);
        try {
            var frag = selRange.cloneContents()
        } catch (e) {
            return (false);
        }
        abc = frag.childNodes;

        let output = '';
        /*for(let i=0;i<abc.length;i++){
            console.log(abc.);
            console.log(abc[i].tagName);
            let abcc = abc[i];
            abcc.classList.add(cssClass);

        }*/
        let todo = false;
        let false_counter = 0;
        let true_counter= 0;

        abc.forEach(function (item) {
            if(item.classList.contains(cssClass)){
                true_counter++;
            }else{
                false_counter++;
            }
            console.log(item.parentElement);
        });
        if(false_counter == 0){
            todo= false;
        }else{
            todo=true;
        }

        abc.forEach(function (item) {
            if(todo){item.classList.add(cssClass);}else{item.classList.remove(cssClass);}
            // item.classList.toggle(cssClass);
            console.log(item.parentElement);
        });

        selRange.deleteContents();
        selRange.insertNode(frag);

        

        sel.removeAllRanges();
        return (output);
    }
    else
    {
        let selected = document.getSelection();
        let selectionRange = document.getSelection().getRangeAt(0);

        console.log(selectionRange);
        let classSelected = selected.anchorNode.parentElement.classList.value;
        console.log(classSelected);

        let anchorData = selected.anchorNode.textContent.substring(0, selected.anchorOffset);
        console.log(anchorData);
        let anchorElement = document.createElement('span');
        anchorElement.classList.value = classSelected;
        anchorElement.innerHTML = anchorData;

        let focusData = selected.focusNode.textContent.substring(selected.focusOffset,);
        console.log(focusData);
        let focusElement = document.createElement('span');
        focusElement.classList.value = classSelected;
        focusElement.innerHTML = focusData;

        let selectedData = selectionRange.cloneContents();

        let selectElement = document.createElement('span');
        selectElement.classList.value = classSelected;
        selectElement.classList.toggle(cssClass);
        selectElement.innerHTML = selectedData.textContent;
        console.log(selectedData);


        //var replaceableElement = anchorElement.selectlement);

        console.log(anchorElement);
        console.log(typeof replaceableElement);
        let mysomenode = selected.anchorNode.parentElement;
        mysomenode.insertAdjacentElement('afterend', focusElement);
        mysomenode.insertAdjacentElement('afterend', selectElement);
        mysomenode.insertAdjacentElement('afterend', anchorElement);
        mysomenode.remove();
        selected.removeAllRanges();

        // mysomenode.parentElement.replaceChild(replaceableElement, mysomenode);
        console.log(mysomenode);


      /*  let anchorClone = selected.anchorNode.cloneNode();
        //anchorClone.textContent = ;
        let anchorSpan = document.createElement("span");
        anchorSpan.innerHTML = anchorData;


        let focusClone = selected.focusNode.cloneNode();
        focusClone.textContent = focusData;
        let focusSpan = document.createElement("span");
        aSpan.innerHTML = anchorData;

        selectionRange.deleteContents();
        selectionRange.insertNode(anchorClone);
        selectionRange.insertNode(focusClone);*/

/*        let span= document.createElement("span");
        span.classList.add("italic");
        span.appendChild(anchorData);
        selection.insertNode(span);
        selectionRange.deleteContents();*/
    }
    deleteExtraSpans();

}

function addIntendation(event){



    let intendation =  event.currentTarget.getAttribute('intendation');
    let sel = window.getSelection();
    if (sel.isCollapsed){
        return;
    }
    let selRange = sel.getRangeAt(0);
    let newFrag = selRange.cloneContents();
   let abcd = getSelectedNodes();
console.log(abcd);
    //console.log(getCHildNodes.item(0));
    if (sel.anchorNode.isSameNode(sel.focusNode)) {
        sel.anchorNode.parentElement.parentElement.classList.value = intendation;
    } else
    {
        if(sel.anchorNode.parentElement.closest('div') === sel.focusNode.parentElement.closest('div')){
            sel.anchorNode.parentElement.parentElement.classList.value = intendation;
            return;
        }else {

            for (let i = 0; i < abcd.length; i++) {
                console.log(i);
                console.log(abcd[i]);
                if (abcd[i].nodeName == 'DIV') {
                    console.log(abcd[i].parentElement);
                abcd[i].classList.value = (intendation);
            }
            }
            /*selRange.deleteContents();
            selRange.insertNode(newFrag);
            sel.removeAllRanges();*/


        }
        deleteExtraSpans();

    }


/*    abcd.forEach(function (item) {
        console.log(item.);
        item.parentElement.parentElement.classList.value = intendation;
        console.log(item.parentElement);
    });*/
 /*   console.log(intendation);
    let selectedPara = document.getSelection();

    let divElement = selectedPara.anchorNode.parentElement.parentElement;
    divElement.classList.value = intendation;
    console.log(divElement.classList);*/
}

let wrapText  = function(){
    if (textArea.innerHTML.length == 1){
        let text = textArea.innerHTML;
        let wrap = document.createElement('span');
        wrap.innerHTML = text;
        let tempDiv = document.createElement('div');
        tempDiv.appendChild(wrap);
        textArea.innerHTML = "";
        textArea.appendChild(tempDiv);
        let range = document.createRange();
        let sel = window.getSelection();

        range.setStart(textArea.childNodes.item(0).childNodes.item(0), 1);

        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    deleteExtraSpans();
}


btnBold.setAttribute('fontType', 'bold');
btnItalic.setAttribute('fontType', 'italic');
btnUnderline.setAttribute('fontType', 'underline');
btnLeft.setAttribute('intendation', 'left');
btnRight.setAttribute('intendation', 'right');
btnCenter.setAttribute('intendation', 'center');


textArea.addEventListener('input', wrapText);
btnBold.addEventListener('click', addClassToSelectedNodes);
btnItalic.addEventListener('click', addClassToSelectedNodes);
btnUnderline.addEventListener('click', addClassToSelectedNodes);
btnLeft.addEventListener('click', addIntendation);
btnRight.addEventListener('click', addIntendation);
btnCenter.addEventListener('click', addIntendation);
//btnLog.addEventListener('click', splitData);




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
    var node = range.startContainer;
    var endNode = range.endContainer;


    if (node == endNode) {
        return [node];
    }


    var rangeNodes = [];
    while (node && node != endNode) {
        rangeNodes.push( node = nextNode(node) );
    }


    node = range.startContainer;
    while (node && node != range.commonAncestorContainer) {
        rangeNodes.unshift(node);
        node = node.parentNode;
    }

    return rangeNodes;
}

function getSelectedNodes() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (!sel.isCollapsed) {
            return getRangeSelectedNodes(sel.getRangeAt(0));
        }
    }
    return [];
}



function deleteExtraSpans(){
 let allSpans =    document.querySelectorAll('span');

 allSpans.forEach(function(item,index){

     if(item.innerText == ""){
         item.remove();
     }

 });
}