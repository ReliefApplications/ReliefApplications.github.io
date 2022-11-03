!function(){"use strict";var call,id,global$1=tinymce.util.Tools.resolve("tinymce.PluginManager"),isSimpleType=function(type){return function(value){return typeof value===type}},isString=function(type){return function(value){return t=typeof(x=value),(null===x?"null":"object"===t&&(Array.prototype.isPrototypeOf(x)||x.constructor&&"Array"===x.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(x)||x.constructor&&"String"===x.constructor.name)?"string":t)===type;var x,t}}("string"),isBoolean=isSimpleType("boolean"),isNumber=isSimpleType("number"),noop=function(){},constant=function(value){return function(){return value}},identity=function(x){return x},never=constant(!1),always=constant(!0),none=function(){return NONE},NONE={fold:function(n,_s){return n()},isSome:never,isNone:always,getOr:id=identity,getOrThunk:call=function(thunk){return thunk()},getOrDie:function(msg){throw new Error(msg||"error: getOrDie called on none.")},getOrNull:constant(null),getOrUndefined:constant(void 0),or:id,orThunk:call,map:none,each:noop,bind:none,exists:never,forall:always,filter:function(){return none()},toArray:function(){return[]},toString:constant("none()")},some=function(a){var constant_a=constant(a),self=function(){return me},bind=function(f){return f(a)},me={fold:function(n,s){return s(a)},isSome:always,isNone:never,getOr:constant_a,getOrThunk:constant_a,getOrDie:constant_a,getOrNull:constant_a,getOrUndefined:constant_a,or:self,orThunk:self,map:function(f){return some(f(a))},each:function(f){f(a)},bind,exists:bind,forall:bind,filter:function(f){return f(a)?me:NONE},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return me},Optional_from=function(value){return null==value?NONE:some(value)},each$1=function(xs,f){for(var i=0,len=xs.length;i<len;i++){f(xs[i],i)}},keys=Object.keys,each=function(obj,f){for(var props=keys(obj),k=0,len=props.length;k<len;k++){var i=props[k];f(obj[i],i)}};"undefined"!=typeof window?window:Function("return this;")();var t,value=function(element){return element.dom.nodeValue},isText=(t=3,function(element){return function(element){return element.dom.nodeType}(element)===t}),set=function(element,key,value){!function(dom,key,value){if(!(isString(value)||isBoolean(value)||isNumber(value)))throw console.error("Invalid call to Attribute.set. Key ",key,":: Value ",value,":: Element ",dom),new Error("Attribute value was not simple");dom.setAttribute(key,value+"")}(element.dom,key,value)},remove$3=function(element,key){element.dom.removeAttribute(key)},read=function(element,attr){var value=function(element,key){var v=element.dom.getAttribute(key);return null===v?void 0:v}(element,attr);return void 0===value||""===value?[]:value.split(" ")},supports=function(element){return void 0!==element.dom.classList},add$1=function(element,clazz){return function(element,attr,id){var nu=read(element,attr).concat([id]);return set(element,attr,nu.join(" ")),!0}(element,"class",clazz)},remove$1=function(element,clazz){return function(element,attr,id){var nu=function(xs,pred){for(var r=[],i=0,len=xs.length;i<len;i++){var x=xs[i];pred(x,i)&&r.push(x)}return r}(read(element,attr),(function(v){return v!==id}));return nu.length>0?set(element,attr,nu.join(" ")):remove$3(element,attr),!1}(element,"class",clazz)},cleanClass=function(element){var classList=supports(element)?element.dom.classList:function(element){return read(element,"class")}(element);0===classList.length&&remove$3(element,"class")},fromDom=function(node){if(null==node)throw new Error("Node cannot be null or undefined");return{dom:node}},SugarElement={fromHtml:function(html,scope){var div=(scope||document).createElement("div");if(div.innerHTML=html,!div.hasChildNodes()||div.childNodes.length>1)throw console.error("HTML does not have a single root node",html),new Error("HTML must have a single root node");return fromDom(div.childNodes[0])},fromTag:function(tag,scope){var node=(scope||document).createElement(tag);return fromDom(node)},fromText:function(text,scope){var node=(scope||document).createTextNode(text);return fromDom(node)},fromDom,fromPoint:function(docElm,x,y){return Optional_from(docElm.dom.elementFromPoint(x,y)).map(fromDom)}},charMap={" ":"nbsp","­":"shy"},charMapToRegExp=function(charMap,global){var regExp="";return each(charMap,(function(_value,key){regExp+=key})),new RegExp("["+regExp+"]",global?"g":"")},regExp=charMapToRegExp(charMap),regExpGlobal=charMapToRegExp(charMap,!0),selector=function(charMap){var selector="";return each(charMap,(function(value){selector&&(selector+=","),selector+="span.mce-"+value})),selector}(charMap),wrapCharWithSpan=function(value){return'<span data-mce-bogus="1" class="mce-'+charMap[value]+'">'+value+"</span>"},isMatch=function(n){var value$1=value(n);return isText(n)&&void 0!==value$1&&regExp.test(value$1)},filterDescendants=function(scope,predicate){var result=[],children=function(xs,f){for(var len=xs.length,r=new Array(len),i=0;i<len;i++){var x=xs[i];r[i]=f(x,i)}return r}(scope.dom.childNodes,SugarElement.fromDom);return each$1(children,(function(x){predicate(x)&&(result=result.concat([x])),result=result.concat(filterDescendants(x,predicate))})),result},isWrappedNbsp=function(node){return"span"===node.nodeName.toLowerCase()&&node.classList.contains("mce-nbsp-wrap")},show=function(editor,rootElm){var nodeList=filterDescendants(SugarElement.fromDom(rootElm),isMatch);each$1(nodeList,(function(n){var element,clazz,parent=n.dom.parentNode;if(isWrappedNbsp(parent))element=SugarElement.fromDom(parent),clazz="mce-nbsp",supports(element)?element.dom.classList.add(clazz):add$1(element,clazz);else{for(var withSpans=editor.dom.encode(value(n)).replace(regExpGlobal,wrapCharWithSpan),div=editor.dom.create("div",null,withSpans),node=void 0;node=div.lastChild;)editor.dom.insertAfter(node,n.dom);editor.dom.remove(n.dom)}}))},hide=function(editor,rootElm){var nodeList=editor.dom.select(selector,rootElm);each$1(nodeList,(function(node){var element,clazz;isWrappedNbsp(node)?(element=SugarElement.fromDom(node),clazz="mce-nbsp",supports(element)?element.dom.classList.remove(clazz):remove$1(element,clazz),cleanClass(element)):editor.dom.remove(node,!0)}))},toggle=function(editor){var body=editor.getBody(),bookmark=editor.selection.getBookmark(),parentNode=function(elm,rootElm){for(;elm.parentNode;){if(elm.parentNode===rootElm)return elm;elm=elm.parentNode}}(editor.selection.getNode(),body);hide(editor,parentNode=void 0!==parentNode?parentNode:body),show(editor,parentNode),editor.selection.moveToBookmark(bookmark)},applyVisualChars=function(editor,toggleState){!function(editor,state){editor.fire("VisualChars",{state})}(editor,toggleState.get());var body=editor.getBody();!0===toggleState.get()?show(editor,body):hide(editor,body)},register$1=function(editor,toggleState){editor.addCommand("mceVisualChars",(function(){!function(editor,toggleState){toggleState.set(!toggleState.get());var bookmark=editor.selection.getBookmark();applyVisualChars(editor,toggleState),editor.selection.moveToBookmark(bookmark)}(editor,toggleState)}))},global=tinymce.util.Tools.resolve("tinymce.util.Delay"),toggleActiveState=function(editor,enabledStated){return function(api){api.setActive(enabledStated.get());var editorEventCallback=function(e){return api.setActive(e.state)};return editor.on("VisualChars",editorEventCallback),function(){return editor.off("VisualChars",editorEventCallback)}}};!function Plugin(){global$1.add("visualchars",(function(editor){var toggleState=function(initial){var value=initial;return{get:function(){return value},set:function(v){value=v}}}(function(editor){return editor.getParam("visualchars_default_state",!1)}(editor));return register$1(editor,toggleState),function(editor,toggleState){var onAction=function(){return editor.execCommand("mceVisualChars")};editor.ui.registry.addToggleButton("visualchars",{tooltip:"Show invisible characters",icon:"visualchars",onAction,onSetup:toggleActiveState(editor,toggleState)}),editor.ui.registry.addToggleMenuItem("visualchars",{text:"Show invisible characters",icon:"visualchars",onAction,onSetup:toggleActiveState(editor,toggleState)})}(editor,toggleState),function(editor,toggleState){var debouncedToggle=global.debounce((function(){toggle(editor)}),300);(function(editor){return!1!==editor.getParam("forced_root_block")})(editor)&&editor.on("keydown",(function(e){!0===toggleState.get()&&(13===e.keyCode?toggle(editor):debouncedToggle())})),editor.on("remove",debouncedToggle.stop)}(editor,toggleState),function(editor,toggleState){editor.on("init",(function(){applyVisualChars(editor,toggleState)}))}(editor,toggleState),function(toggleState){return{isEnabled:function(){return toggleState.get()}}}(toggleState)}))}()}();