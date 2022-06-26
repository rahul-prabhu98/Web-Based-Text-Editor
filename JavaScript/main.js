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
    if (!sel.anchorNode.isSameNode(sel.focusNode)) {
        console.log("In different tags");
        let selRange = sel.getRangeAt(0);
        try {
            var frag = selRange.cloneContents()
        } catch (e) {
            return (false);
        }
        abc = frag.childNodes;

        console.log(abc);
        console.log(abc.length);
        let output = '';
        /*for(let i=0;i<abc.length;i++){
            console.log(abc.);
            console.log(abc[i].tagName);
            let abcc = abc[i];
            abcc.classList.add(cssClass);

        }*/

        abc.forEach(function (item) {
            item.classList.add(cssClass);
        });

        selRange.deleteContents();
        selRange.insertNode(frag);
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
}

function addIntendation(event){
    let intendation =  event.currentTarget.getAttribute('intendation');
    console.log(intendation);
    let selectedPara = document.getSelection();
   
    let divElement = selectedPara.anchorNode.parentElement.parentElement;
    divElement.classList.value = intendation;
    console.log(divElement.classList);
}


btnBold.setAttribute('fontType', 'bold');
btnItalic.setAttribute('fontType', 'italic');
btnUnderline.setAttribute('fontType', 'underline');
btnLeft.setAttribute('intendation', 'left');
btnRight.setAttribute('intendation', 'right');
btnCenter.setAttribute('intendation', 'center');

btnBold.addEventListener('click', addClassToSelectedNodes);
btnItalic.addEventListener('click', addClassToSelectedNodes);
btnUnderline.addEventListener('click', addClassToSelectedNodes);
btnLeft.addEventListener('click', addIntendation);
btnRight.addEventListener('click', addIntendation);
btnCenter.addEventListener('click', addIntendation);
//btnLog.addEventListener('click', splitData);

