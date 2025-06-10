// window
// console.dir(document);
// console.dir(document.all);

// console.dir(document.all(8));
// (document.all(8).innerText)='peter parker';
// console.dir(document.all(8).innerText)

// document.getElementById("mainImg")
// ye sirf hame object return karta hai text ya image  nhi
// let imgObj = document.getElementById('mainImg');
// console.log(imgObj);
// console.dir(imgObj);
// console.dir(imgObj);

// imgObj.src
// imgObj.tagName
// imgObj.id
// imgObj.src = "assets/creation_1.png";
// console.log(document.getElementById('description'));
// console.dir(document.getElementById('description'));

// getElementByClassName('')  property

// let smallImages = document.getElementsByClassName("oldImg")

// smallImages[0];
// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//      console.log(`value of image no ${i} is changed`) 
// }


// document.getElementsByTagName('p')
// document.getElementsByTagName('p')[1]
// document.getElementsByTagName('p')[1].innerText = 'yash'

// console.dir(document.querySelector('p'))
// console.dir(document.querySelector('#discription'))
// console.dir(document.querySelector('.oldImg'))
// console.dir(document.querySelector('div a'))


// para.innerText='abc'
// 'abc'
// para.innerText='hi i am peter parker'
// 'hi i am peter parker'
// para.innerText='hi i am <b>peter parker</b>'
// 'hi i am <b>peter parker</b>'
// para.innerHTML='hi i am <b>peter parker</b>'
// 'hi i am <b>peter parker</b>'
// let heading = document.querySelector('h1');
// undefined
// heading.innerHTML='<u>Spider Man<u/>'
// '<u>Spider Man<u/>'


// // with help of backtik (``)
// let heading = document.querySelector('h1');
// undefined
// heading.innerHTML
// 'Spider Man'
// heading.innerHTML = `<b>${heading.innerText}  </b>`
// '<b>Spider Man  </b>'


// img = document.querySelector('img')
// <img src=​"assets/​spiderman_img.png" id=​"mainImg" class=​"abc xyz">​
// img.getAttribute('id')
// 'mainImg'
// img.setAttribute('id','spiderImage');
// undefined
// img.setAttribute('id','mainImg');
// undefined
// img.setAttribute('src',"assets/creation_3.jpeg");
// undefined
// img.getAttribute('class')
// 'abc xyz'
// img.setAttribute('class','images');
// undefined
// img.getAttribute('class')
// 'images'


img = document.querySelector('img')
console.dir(img)
img.style
let heading = document.querySelector('h1');
heading.style
heading.style.color
heading.style.color = 'purple'
heading.style.backgroundColor = 'yellow'

let links = document.querySelectorAll('.box a')
undefined
for(link of links) {
    link.style.color = 'purple'
}
// 'purple'
for(let i=0; i<links.length;i++){
    links[i].style.color = 'green'
}
// 'green  

// style (style property se wahi chize dikhti hai jo inline style ho )
// style property me external css nhi dikhti isliye hum style property \
// se jayda styling set nhi karte


//jab humne h1 me do classes add ki classList ki madat se and jab 
// green class remove ki classList.remove se and setattribute se set
// ki green class to purple hat gayi 
// becoz setattribute me ek time pe ek hi class ki value ho sakti hai
// that's why we don't use setAttribute regularly

// let heading = document.querySelector('h1');
// undefined
// heading.classList.add('green')
// undefined
// heading.classList
// DOMTokenList ['green', value: 'green']
// heading.classList.contains('underline')
// false
// heading.classList.contains('green')
// true
// heading.classList.toggle('green')
// false
// heading.classList.toggle('underline')
// true
// heading.classList.toggle('green')
// true
// heading.classList.remove('green')
// undefined
// heading.classList.contains('green')
// false

// toggle ka kaam hota hai agar koi class exist karti hai to usse remove kar doo agar  exist nhi karti hai to usse add kar doo

// let box = document.querySelector('.box')
// undefined
// box.classList.add('yellowbg')
// undefined
// box.classList.add('yellowBg')




// let h4 = document.querySelector('h4')
// undefined
// h4.parentElement
// <div class=​"box">​…​</div>​
// h4.children
// HTMLCollection []
// let box = document.querySelector('.box')


// undefined
// box.children
// HTMLCollection(2) [h4, ul]
// box.childElementCount
// 2
// let ul  = document.querySelector('ul')
// undefined
// ul.childElementCount
// 3
// ul.children
// HTMLCollection(3) [li, li, li]
// ul.children[0];
// <li>​…​</li>​
// ul.children[1];
// <li>​…​</li>​
// ul.children[2];
// <li>​…​</li>​
// ul.children[1].previousElementSibling
// <li>​…​</li>​
// ul.children[1].nextElementSibling
// <li>​…​</li>​
// let img = document.querySelector('img')
// undefined
// img.previousElementSibling
// <h1>​Spider Man​</h1>​
// img.previousElementSibling.style
// CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// img.previousElementSibling.style.color= 'green'
// 'green'


/* CREATING A NEW ELEMENT IN HTML WITH HELP OF JS*/
/* AFTER CREATING A NEW ELEMENT WE HAVE TO INSERT IT INTO OUR DOCUMENT */

// document.createElement('p')
// <p>​</p>​
// let newP = document.createElement('p')
// undefined
// console.dir(newP)
// VM1094:1 p
// undefined
// newP.innerText = 'hi , i am new p'
// 'hi , i am new p'
// console.dir(newP)
// VM1254:1 paccessKey: ""align: ""ariaActiveDescendantElement: nullariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColIndexText: nullariaColSpan: nullariaControlsElements: nullariaCurrent: nullariaDescribedByElements: nullariaDescription: nullariaDetailsElements: nullariaDisabled: nullariaErrorMessageElements: nullariaExpanded: nullariaFlowToElements: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLabelledByElements: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowIndexText: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "file:///C:/Users/Asus/OneDrive/Desktop/Yash/JavaScript/module_09/index%20(1).html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 0clientLeft: 0clientTop: 0clientWidth: 0contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}dir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""inert: falseinnerHTML: "hi , i am new p"innerText: "hi , i am new p"inputMode: ""isConnected: falseisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: nullnodeName: "P"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 0offsetLeft: 0offsetParent: nulloffsetTop: 0offsetWidth: 0onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncommand: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonscrollsnapchange: nullonscrollsnapchanging: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<p>hi , i am new p</p>"outerText: "hi , i am new p"ownerDocument: documentparentElement: nullparentNode: nullpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: nullrole: nullscrollHeight: 0scrollLeft: 0scrollTop: 0scrollWidth: 0shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "P"textContent: "hi , i am new p"title: ""translate: truevirtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLParagraphElement
// undefined
// let body = document.querySelector('body');
// undefined
// body.appendChild(newP)
// <p>​hi , i am new p​</p>​

/* HUM APPENDCHILD SE KISI ELEMENT KE CHILD KE ANDAR CHANGE KAR SAKTE HAI BUT 
YA KOI NAYA CHILD APPEND KAR SAKTE HAI  */

/* PAR APPEND KI HELP SE HUM USSI EXISTING ELEMENT ME JAKAR CHANGES KAR SAKTE HAI */ 

// let btn = document.createElement('button')
// btn.innerText = 'click me'
// box.appendChild(btn)
//  <button>click me</button> 

/* REFRESH THE PAGE  */
// let btn = document.createElement('button')
// btn.innerHTML = 'NEW Button'
// let p = document.querySelector('p')
// p
// btn
// <button>​NEW Button​</button>​
// p
// <p>​…​</p>​
// p.insertAdjacentElement('beforebegin',btn);
// <button>​NEW Button​</button>​
// p.insertAdjacentElement('afterbegin',btn);
// <button>​NEW Button​</button>​
// p.insertAdjacentElement('beforeend',btn);
// <button>​NEW Button​</button>​
// p.insertAdjacentElement('afterend',btn);
// <button>​NEW Button​</button>​


/** INSERTaDJACENTeLEMENT SE HUM DEFINE KAR SAKTE HAI KI HAME 
 * EXACTLY ELEMENT KO KAHA insert  KARNA  HAI */