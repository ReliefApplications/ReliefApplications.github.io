!function(){"use strict";var call,id,global=tinymce.util.Tools.resolve("tinymce.PluginManager"),isSimpleType=function(type){return function(value){return typeof value===type}},isString=function(type){return function(value){return t=typeof(x=value),(null===x?"null":"object"===t&&(Array.prototype.isPrototypeOf(x)||x.constructor&&"Array"===x.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(x)||x.constructor&&"String"===x.constructor.name)?"string":t)===type;var x,t}}("string"),isBoolean=isSimpleType("boolean"),isFunction=isSimpleType("function"),isNumber=isSimpleType("number"),noop=function(){},constant=function(value){return function(){return value}},identity=function(x){return x},never=constant(!1),always=constant(!0),none=function(){return NONE},NONE={fold:function(n,_s){return n()},isSome:never,isNone:always,getOr:id=identity,getOrThunk:call=function(thunk){return thunk()},getOrDie:function(msg){throw new Error(msg||"error: getOrDie called on none.")},getOrNull:constant(null),getOrUndefined:constant(void 0),or:id,orThunk:call,map:none,each:noop,bind:none,exists:never,forall:always,filter:function(){return none()},toArray:function(){return[]},toString:constant("none()")},some=function(a){var constant_a=constant(a),self=function(){return me},bind=function(f){return f(a)},me={fold:function(n,s){return s(a)},isSome:always,isNone:never,getOr:constant_a,getOrThunk:constant_a,getOrDie:constant_a,getOrNull:constant_a,getOrUndefined:constant_a,or:self,orThunk:self,map:function(f){return some(f(a))},each:function(f){f(a)},bind,exists:bind,forall:bind,filter:function(f){return f(a)?me:NONE},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return me},Optional={some,none,from:function(value){return null==value?NONE:some(value)}},each=function(xs,f){for(var i=0,len=xs.length;i<len;i++){f(xs[i],i)}},fromDom=function(node){if(null==node)throw new Error("Node cannot be null or undefined");return{dom:node}},SugarElement={fromHtml:function(html,scope){var div=(scope||document).createElement("div");if(div.innerHTML=html,!div.hasChildNodes()||div.childNodes.length>1)throw console.error("HTML does not have a single root node",html),new Error("HTML must have a single root node");return fromDom(div.childNodes[0])},fromTag:function(tag,scope){var node=(scope||document).createElement(tag);return fromDom(node)},fromText:function(text,scope){var node=(scope||document).createTextNode(text);return fromDom(node)},fromDom,fromPoint:function(docElm,x,y){return Optional.from(docElm.dom.elementFromPoint(x,y)).map(fromDom)}},is=function(element,selector){var dom=element.dom;if(1!==dom.nodeType)return!1;var elem=dom;if(void 0!==elem.matches)return elem.matches(selector);if(void 0!==elem.msMatchesSelector)return elem.msMatchesSelector(selector);if(void 0!==elem.webkitMatchesSelector)return elem.webkitMatchesSelector(selector);if(void 0!==elem.mozMatchesSelector)return elem.mozMatchesSelector(selector);throw new Error("Browser lacks native selectors")};"undefined"!=typeof window?window:Function("return this;")();var tag,isType=function(t){return function(element){return function(element){return element.dom.nodeType}(element)===t}},isElement=isType(1),isText=isType(3),isDocument=isType(9),isDocumentFragment=isType(11),children$2=function(element){return function(xs,f){for(var len=xs.length,r=new Array(len),i=0;i<len;i++){var x=xs[i];r[i]=f(x,i)}return r}(element.dom.childNodes,SugarElement.fromDom)},set=function(element,key,value){!function(dom,key,value){if(!(isString(value)||isBoolean(value)||isNumber(value)))throw console.error("Invalid call to Attribute.set. Key ",key,":: Value ",value,":: Element ",dom),new Error("Attribute value was not simple");dom.setAttribute(key,value+"")}(element.dom,key,value)},remove=function(element,key){element.dom.removeAttribute(key)},getRootNode=isFunction(Element.prototype.attachShadow)&&isFunction(Node.prototype.getRootNode)?function(e){return SugarElement.fromDom(e.dom.getRootNode())}:function(dos){return isDocument(dos)?dos:(element=dos,SugarElement.fromDom(element.dom.ownerDocument));var element},getShadowRoot=function(e){var dos,r=getRootNode(e);return isDocumentFragment(dos=r)&&null!=dos.dom.host?Optional.some(r):Optional.none()},getShadowHost=function(e){return SugarElement.fromDom(e.dom.host)},inBody=function(element){var dom=isText(element)?element.dom.parentNode:element.dom;if(null==dom||null===dom.ownerDocument)return!1;var fbc,fab,doc=dom.ownerDocument;return getShadowRoot(SugarElement.fromDom(dom)).fold((function(){return doc.body.contains(dom)}),(fbc=inBody,fab=getShadowHost,function(a){return fbc(fab(a))}))},ancestor=function(scope,selector,isRoot){return function(scope,predicate,isRoot){for(var element=scope.dom,stop=isFunction(isRoot)?isRoot:never;element.parentNode;){element=element.parentNode;var el=SugarElement.fromDom(element);if(predicate(el))return Optional.some(el);if(stop(el))break}return Optional.none()}(scope,(function(e){return is(e,selector)}),isRoot)},getUnsafeProperty=function(dom,property){return function(dom){return void 0!==dom.style&&isFunction(dom.style.getPropertyValue)}(dom)?dom.style.getPropertyValue(property):""},getDirection=function(element){return"rtl"===function(element,property){var dom=element.dom,r=window.getComputedStyle(dom).getPropertyValue(property);return""!==r||inBody(element)?r:getUnsafeProperty(dom,property)}(element,"direction")?"rtl":"ltr"},children=function(scope,selector){return function(scope,predicate){return function(xs,pred){for(var r=[],i=0,len=xs.length;i<len;i++){var x=xs[i];pred(x,i)&&r.push(x)}return r}(children$2(scope),predicate)}(scope,(function(e){return is(e,selector)}))},getParentElement=function(element){return function(element){return Optional.from(element.dom.parentNode).map(SugarElement.fromDom)}(element).filter(isElement)},isListItem=(tag="li",function(e){return isElement(e)&&e.dom.nodeName.toLowerCase()===tag}),setDir=function(editor,dir){var selectedBlocks=editor.selection.getSelectedBlocks();selectedBlocks.length>0&&(each(selectedBlocks,(function(block){var blockElement=SugarElement.fromDom(block),isBlockElementListItem=isListItem(blockElement),normalizedBlock=function(element,isListItem){return(isListItem?ancestor(element,"ol,ul"):Optional.some(element)).getOr(element)}(blockElement,isBlockElementListItem);getParentElement(normalizedBlock).each((function(parent){if(getDirection(parent)!==dir?set(normalizedBlock,"dir",dir):getDirection(normalizedBlock)!==dir&&remove(normalizedBlock,"dir"),isBlockElementListItem){var listItems=children(normalizedBlock,"li[dir]");each(listItems,(function(listItem){return remove(listItem,"dir")}))}}))})),editor.nodeChanged())},getNodeChangeHandler=function(editor,dir){return function(api){var nodeChangeHandler=function(e){var element=SugarElement.fromDom(e.element);api.setActive(getDirection(element)===dir)};return editor.on("NodeChange",nodeChangeHandler),function(){return editor.off("NodeChange",nodeChangeHandler)}}};!function Plugin(){global.add("directionality",(function(editor){!function(editor){editor.addCommand("mceDirectionLTR",(function(){setDir(editor,"ltr")})),editor.addCommand("mceDirectionRTL",(function(){setDir(editor,"rtl")}))}(editor),function(editor){editor.ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return editor.execCommand("mceDirectionLTR")},onSetup:getNodeChangeHandler(editor,"ltr")}),editor.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return editor.execCommand("mceDirectionRTL")},onSetup:getNodeChangeHandler(editor,"rtl")})}(editor)}))}()}();