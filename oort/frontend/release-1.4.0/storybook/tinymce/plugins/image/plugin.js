!function(){"use strict";var t,call,id,global$6=tinymce.util.Tools.resolve("tinymce.PluginManager"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},isType=function(type){return function(value){return t=typeof(x=value),(null===x?"null":"object"===t&&(Array.prototype.isPrototypeOf(x)||x.constructor&&"Array"===x.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(x)||x.constructor&&"String"===x.constructor.name)?"string":t)===type;var x,t}},isSimpleType=function(type){return function(value){return typeof value===type}},isString=isType("string"),isObject=isType("object"),isArray=isType("array"),isNull=(t=null,function(a){return t===a}),isBoolean=isSimpleType("boolean"),isNonNullable=function(a){return!function(a){return null==a}(a)},isFunction=isSimpleType("function"),isNumber=isSimpleType("number"),noop=function(){},constant=function(value){return function(){return value}},identity=function(x){return x},never=constant(!1),always=constant(!0),none=function(){return NONE},NONE={fold:function(n,_s){return n()},isSome:never,isNone:always,getOr:id=identity,getOrThunk:call=function(thunk){return thunk()},getOrDie:function(msg){throw new Error(msg||"error: getOrDie called on none.")},getOrNull:constant(null),getOrUndefined:constant(void 0),or:id,orThunk:call,map:none,each:noop,bind:none,exists:never,forall:always,filter:function(){return none()},toArray:function(){return[]},toString:constant("none()")},some=function(a){var constant_a=constant(a),self=function(){return me},bind=function(f){return f(a)},me={fold:function(n,s){return s(a)},isSome:always,isNone:never,getOr:constant_a,getOrThunk:constant_a,getOrDie:constant_a,getOrNull:constant_a,getOrUndefined:constant_a,or:self,orThunk:self,map:function(f){return some(f(a))},each:function(f){f(a)},bind,exists:bind,forall:bind,filter:function(f){return f(a)?me:NONE},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return me},Optional={some,none,from:function(value){return null==value?NONE:some(value)}},keys=Object.keys,hasOwnProperty=Object.hasOwnProperty,internalFilter=function(obj,pred,onTrue,onFalse){return function(obj,f){for(var props=keys(obj),k=0,len=props.length;k<len;k++){var i=props[k];f(obj[i],i)}}(obj,(function(x,i){(pred(x,i)?onTrue:onFalse)(x,i)})),{}},has=function(obj,key){return hasOwnProperty.call(obj,key)},nativePush=Array.prototype.push,flatten=function(xs){for(var r=[],i=0,len=xs.length;i<len;++i){if(!isArray(xs[i]))throw new Error("Arr.flatten item "+i+" was not an array, input: "+xs);nativePush.apply(r,xs[i])}return r},head=function(xs){return function(xs,i){return i>=0&&i<xs.length?Optional.some(xs[i]):Optional.none()}(xs,0)};"undefined"!=typeof window?window:Function("return this;")();var merger,set=function(element,key,value){!function(dom,key,value){if(!(isString(value)||isBoolean(value)||isNumber(value)))throw console.error("Invalid call to Attribute.set. Key ",key,":: Value ",value,":: Element ",dom),new Error("Attribute value was not simple");dom.setAttribute(key,value+"")}(element.dom,key,value)},fromDom=function(node){if(null==node)throw new Error("Node cannot be null or undefined");return{dom:node}},SugarElement={fromHtml:function(html,scope){var div=(scope||document).createElement("div");if(div.innerHTML=html,!div.hasChildNodes()||div.childNodes.length>1)throw console.error("HTML does not have a single root node",html),new Error("HTML must have a single root node");return fromDom(div.childNodes[0])},fromTag:function(tag,scope){var node=(scope||document).createElement(tag);return fromDom(node)},fromText:function(text,scope){var node=(scope||document).createTextNode(text);return fromDom(node)},fromDom,fromPoint:function(docElm,x,y){return Optional.from(docElm.dom.elementFromPoint(x,y)).map(fromDom)}},global$5=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),global$4=tinymce.util.Tools.resolve("tinymce.util.Promise"),global$3=tinymce.util.Tools.resolve("tinymce.util.URI"),global$2=tinymce.util.Tools.resolve("tinymce.util.XHR"),hasDimensions=function(editor){return editor.getParam("image_dimensions",!0,"boolean")},parseIntAndGetMax=function(val1,val2){return Math.max(parseInt(val1,10),parseInt(val2,10))},removePixelSuffix=function(value){return value&&(value=value.replace(/px$/,"")),value},addPixelSuffix=function(value){return value.length>0&&/^[0-9]+$/.test(value)&&(value+="px"),value},mergeMargins=function(css){if(css.margin){var splitMargin=String(css.margin).split(" ");switch(splitMargin.length){case 1:css["margin-top"]=css["margin-top"]||splitMargin[0],css["margin-right"]=css["margin-right"]||splitMargin[0],css["margin-bottom"]=css["margin-bottom"]||splitMargin[0],css["margin-left"]=css["margin-left"]||splitMargin[0];break;case 2:css["margin-top"]=css["margin-top"]||splitMargin[0],css["margin-right"]=css["margin-right"]||splitMargin[1],css["margin-bottom"]=css["margin-bottom"]||splitMargin[0],css["margin-left"]=css["margin-left"]||splitMargin[1];break;case 3:css["margin-top"]=css["margin-top"]||splitMargin[0],css["margin-right"]=css["margin-right"]||splitMargin[1],css["margin-bottom"]=css["margin-bottom"]||splitMargin[2],css["margin-left"]=css["margin-left"]||splitMargin[1];break;case 4:css["margin-top"]=css["margin-top"]||splitMargin[0],css["margin-right"]=css["margin-right"]||splitMargin[1],css["margin-bottom"]=css["margin-bottom"]||splitMargin[2],css["margin-left"]=css["margin-left"]||splitMargin[3]}delete css.margin}return css},isPlaceholderImage=function(imgElm){return"IMG"===imgElm.nodeName&&(imgElm.hasAttribute("data-mce-object")||imgElm.hasAttribute("data-mce-placeholder"))},isSafeImageUrl=function(editor,src){return global$3.isDomSafe(src,"img",editor.settings)},DOM=global$5.DOM,getHspace=function(image){return image.style.marginLeft&&image.style.marginRight&&image.style.marginLeft===image.style.marginRight?removePixelSuffix(image.style.marginLeft):""},getVspace=function(image){return image.style.marginTop&&image.style.marginBottom&&image.style.marginTop===image.style.marginBottom?removePixelSuffix(image.style.marginTop):""},getBorder=function(image){return image.style.borderWidth?removePixelSuffix(image.style.borderWidth):""},getAttrib=function(image,name){return image.hasAttribute(name)?image.getAttribute(name):""},getStyle=function(image,name){return image.style[name]?image.style[name]:""},hasCaption=function(image){return null!==image.parentNode&&"FIGURE"===image.parentNode.nodeName},updateAttrib=function(image,name,value){""===value?image.removeAttribute(name):image.setAttribute(name,value)},toggleCaption=function(image){hasCaption(image)?function(image){var figureElm=image.parentNode;DOM.insertAfter(image,figureElm),DOM.remove(figureElm)}(image):function(image){var figureElm=DOM.create("figure",{class:"image"});DOM.insertAfter(figureElm,image),figureElm.appendChild(image),figureElm.appendChild(DOM.create("figcaption",{contentEditable:"true"},"Caption")),figureElm.contentEditable="false"}(image)},normalizeStyle=function(image,normalizeCss){var attrValue=image.getAttribute("style"),value=normalizeCss(null!==attrValue?attrValue:"");value.length>0?(image.setAttribute("style",value),image.setAttribute("data-mce-style",value)):image.removeAttribute("style")},setSize=function(name,normalizeCss){return function(image,name,value){image.style[name]?(image.style[name]=addPixelSuffix(value),normalizeStyle(image,normalizeCss)):updateAttrib(image,name,value)}},getSize=function(image,name){return image.style[name]?removePixelSuffix(image.style[name]):getAttrib(image,name)},setHspace=function(image,value){var pxValue=addPixelSuffix(value);image.style.marginLeft=pxValue,image.style.marginRight=pxValue},setVspace=function(image,value){var pxValue=addPixelSuffix(value);image.style.marginTop=pxValue,image.style.marginBottom=pxValue},setBorder=function(image,value){var pxValue=addPixelSuffix(value);image.style.borderWidth=pxValue},setBorderStyle=function(image,value){image.style.borderStyle=value},isFigure=function(elm){return"FIGURE"===elm.nodeName},getIsDecorative=function(image){return 0===DOM.getAttrib(image,"alt").length&&"presentation"===DOM.getAttrib(image,"role")},getAlt=function(image){return getIsDecorative(image)?"":getAttrib(image,"alt")},getStyleValue=function(normalizeCss,data){var image=document.createElement("img");return updateAttrib(image,"style",data.style),(getHspace(image)||""!==data.hspace)&&setHspace(image,data.hspace),(getVspace(image)||""!==data.vspace)&&setVspace(image,data.vspace),(getBorder(image)||""!==data.border)&&setBorder(image,data.border),(function(image){return getStyle(image,"borderStyle")}(image)||""!==data.borderStyle)&&setBorderStyle(image,data.borderStyle),normalizeCss(image.getAttribute("style"))},read=function(normalizeCss,image){return{src:getAttrib(image,"src"),alt:getAlt(image),title:getAttrib(image,"title"),width:getSize(image,"width"),height:getSize(image,"height"),class:getAttrib(image,"class"),style:normalizeCss(getAttrib(image,"style")),caption:hasCaption(image),hspace:getHspace(image),vspace:getVspace(image),border:getBorder(image),borderStyle:getStyle(image,"borderStyle"),isDecorative:getIsDecorative(image)}},updateProp=function(image,oldData,newData,name,set){newData[name]!==oldData[name]&&set(image,name,newData[name])},setAlt=function(image,alt,isDecorative){if(isDecorative){DOM.setAttrib(image,"role","presentation");var sugarImage=SugarElement.fromDom(image);set(sugarImage,"alt","")}else{if(isNull(alt)){sugarImage=SugarElement.fromDom(image);key="alt",sugarImage.dom.removeAttribute(key)}else{sugarImage=SugarElement.fromDom(image);set(sugarImage,"alt",alt)}"presentation"===DOM.getAttrib(image,"role")&&DOM.setAttrib(image,"role","")}var key},normalized=function(set,normalizeCss){return function(image,name,value){set(image,value),normalizeStyle(image,normalizeCss)}},write=function(normalizeCss,newData,image){var oldData=read(normalizeCss,image);updateProp(image,oldData,newData,"caption",(function(image,_name,_value){return toggleCaption(image)})),updateProp(image,oldData,newData,"src",updateAttrib),updateProp(image,oldData,newData,"title",updateAttrib),updateProp(image,oldData,newData,"width",setSize(0,normalizeCss)),updateProp(image,oldData,newData,"height",setSize(0,normalizeCss)),updateProp(image,oldData,newData,"class",updateAttrib),updateProp(image,oldData,newData,"style",normalized((function(image,value){return updateAttrib(image,"style",value)}),normalizeCss)),updateProp(image,oldData,newData,"hspace",normalized(setHspace,normalizeCss)),updateProp(image,oldData,newData,"vspace",normalized(setVspace,normalizeCss)),updateProp(image,oldData,newData,"border",normalized(setBorder,normalizeCss)),updateProp(image,oldData,newData,"borderStyle",normalized(setBorderStyle,normalizeCss)),function(image,oldData,newData){newData.alt===oldData.alt&&newData.isDecorative===oldData.isDecorative||setAlt(image,newData.alt,newData.isDecorative)}(image,oldData,newData)},normalizeCss$1=function(editor,cssText){var css=editor.dom.styles.parse(cssText),mergedCss=mergeMargins(css),compressed=editor.dom.styles.parse(editor.dom.styles.serialize(mergedCss));return editor.dom.styles.serialize(compressed)},getSelectedImage=function(editor){var imgElm=editor.selection.getNode(),figureElm=editor.dom.getParent(imgElm,"figure.image");return figureElm?editor.dom.select("img",figureElm)[0]:imgElm&&("IMG"!==imgElm.nodeName||isPlaceholderImage(imgElm))?null:imgElm},splitTextBlock=function(editor,figure){var dom=editor.dom,textBlockElements=function(obj,pred){var r,t={};return internalFilter(obj,pred,(r=t,function(x,i){r[i]=x}),noop),t}(editor.schema.getTextBlockElements(),(function(_,parentElm){return!editor.schema.isValidChild(parentElm,"figure")})),textBlock=dom.getParent(figure.parentNode,(function(node){return obj=textBlockElements,key=node.nodeName,has(obj,key)&&void 0!==obj[key]&&null!==obj[key];var obj,key}),editor.getBody());return textBlock?dom.split(textBlock,figure):figure},insertImageAtCaret=function(editor,data){var elm=function(normalizeCss,data){var image=document.createElement("img");if(write(normalizeCss,__assign(__assign({},data),{caption:!1}),image),setAlt(image,data.alt,data.isDecorative),data.caption){var figure=DOM.create("figure",{class:"image"});return figure.appendChild(image),figure.appendChild(DOM.create("figcaption",{contentEditable:"true"},"Caption")),figure.contentEditable="false",figure}return image}((function(css){return normalizeCss$1(editor,css)}),data);editor.dom.setAttrib(elm,"data-mce-id","__mcenew"),editor.focus(),editor.selection.setContent(elm.outerHTML);var insertedElm=editor.dom.select('*[data-mce-id="__mcenew"]')[0];if(editor.dom.setAttrib(insertedElm,"data-mce-id",null),isFigure(insertedElm)){var figure=splitTextBlock(editor,insertedElm);editor.selection.select(figure)}else editor.selection.select(insertedElm)},writeImageDataToSelection=function(editor,data){var image=getSelectedImage(editor);if(write((function(css){return normalizeCss$1(editor,css)}),data,image),function(editor,image){editor.dom.setAttrib(image,"src",image.getAttribute("src"))}(editor,image),isFigure(image.parentNode)){var figure=image.parentNode;splitTextBlock(editor,figure),editor.selection.select(image.parentNode)}else editor.selection.select(image),function(editor,data,imgElm){var selectImage=function(){imgElm.onload=imgElm.onerror=null,editor.selection&&(editor.selection.select(imgElm),editor.nodeChanged())};imgElm.onload=function(){data.width||data.height||!hasDimensions(editor)||editor.dom.setAttribs(imgElm,{width:String(imgElm.clientWidth),height:String(imgElm.clientHeight)}),selectImage()},imgElm.onerror=selectImage}(editor,data,image)},insertOrUpdateImage=function(editor,partialData){var image=getSelectedImage(editor);if(image){var selectedImageData=read((function(css){return normalizeCss$1(editor,css)}),image),data=__assign(__assign({},selectedImageData),partialData),sanitizedData=function(editor,data){var src=data.src;return __assign(__assign({},data),{src:isSafeImageUrl(editor,src)?src:""})}(editor,data);data.src?writeImageDataToSelection(editor,sanitizedData):function(editor,image){if(image){var elm=editor.dom.is(image.parentNode,"figure.image")?image.parentNode:image;editor.dom.remove(elm),editor.focus(),editor.nodeChanged(),editor.dom.isEmpty(editor.getBody())&&(editor.setContent(""),editor.selection.setCursorLocation())}}(editor,image)}else partialData.src&&insertImageAtCaret(editor,__assign(__assign({},{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}),partialData))},deepMerge=(merger=function(old,nu){return isObject(old)&&isObject(nu)?deepMerge(old,nu):nu},function(){for(var objects=[],_i=0;_i<arguments.length;_i++)objects[_i]=arguments[_i];if(0===objects.length)throw new Error("Can't merge zero objects");for(var ret={},j=0;j<objects.length;j++){var curObject=objects[j];for(var key in curObject)has(curObject,key)&&(ret[key]=merger(ret[key],curObject[key]))}return ret}),global$1=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),global=tinymce.util.Tools.resolve("tinymce.util.Tools"),getValue=function(item){return isString(item.value)?item.value:""},sanitizeList=function(list,extractValue){var out=[];return global.each(list,(function(item){var text=function(item){return isString(item.text)?item.text:isString(item.title)?item.title:""}(item);if(void 0!==item.menu){var items=sanitizeList(item.menu,extractValue);out.push({text,items})}else{var value=extractValue(item);out.push({text,value})}})),out},sanitizer=function(extractor){return void 0===extractor&&(extractor=getValue),function(list){return list?Optional.from(list).map((function(list){return sanitizeList(list,extractor)})):Optional.none()}},findEntryDelegate=function(list,value){return function(arr,f){for(var i=0;i<arr.length;i++){var r=f(arr[i],i);if(r.isSome())return r}return Optional.none()}(list,(function(item){return function(item){return has(item,"items")}(item)?findEntryDelegate(item.items,value):item.value===value?Optional.some(item):Optional.none()}))},ListUtils_sanitizer=sanitizer,ListUtils_sanitize=function(list){return sanitizer(getValue)(list)},ListUtils_findEntry=function(optList,value){return optList.bind((function(list){return findEntryDelegate(list,value)}))},AdvTab_makeTab=function(_info){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},collect=function(editor){var urlListSanitizer=ListUtils_sanitizer((function(item){return editor.convertURL(item.value||item.url,"src")})),futureImageList=new global$4((function(completer){!function(editor,callback){var imageList=function(editor){return editor.getParam("image_list",!1)}(editor);isString(imageList)?global$2.send({url:imageList,success:function(text){callback(JSON.parse(text))}}):isFunction(imageList)?imageList(callback):callback(imageList)}(editor,(function(imageList){completer(urlListSanitizer(imageList).map((function(items){return flatten([[{text:"None",value:""}],items])})))}))})),classList=ListUtils_sanitize(function(editor){return editor.getParam("image_class_list")}(editor)),hasAdvTab$1=function(editor){return editor.getParam("image_advtab",!1,"boolean")}(editor),hasUploadTab$1=function(editor){return editor.getParam("image_uploadtab",!0,"boolean")}(editor),hasUploadUrl$1=function(editor){return isNonNullable(editor.getParam("images_upload_url"))}(editor),hasUploadHandler$1=function(editor){return isNonNullable(editor.getParam("images_upload_handler"))}(editor),image=function(editor){var image=getSelectedImage(editor);return image?read((function(css){return normalizeCss$1(editor,css)}),image):{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}}(editor),hasDescription$1=function(editor){return editor.getParam("image_description",!0,"boolean")}(editor),hasImageTitle$1=function(editor){return editor.getParam("image_title",!1,"boolean")}(editor),hasDimensions$1=hasDimensions(editor),hasImageCaption$1=function(editor){return editor.getParam("image_caption",!1,"boolean")}(editor),hasAccessibilityOptions=function(editor){return editor.getParam("a11y_advanced_options",!1,"boolean")}(editor),automaticUploads=function(editor){return editor.getParam("automatic_uploads",!0,"boolean")}(editor),prependURL=Optional.some(function(editor){return editor.getParam("image_prepend_url","","string")}(editor)).filter((function(preUrl){return isString(preUrl)&&preUrl.length>0}));return futureImageList.then((function(imageList){return{image,imageList,classList,hasAdvTab:hasAdvTab$1,hasUploadTab:hasUploadTab$1,hasUploadUrl:hasUploadUrl$1,hasUploadHandler:hasUploadHandler$1,hasDescription:hasDescription$1,hasImageTitle:hasImageTitle$1,hasDimensions:hasDimensions$1,hasImageCaption:hasImageCaption$1,prependURL,hasAccessibilityOptions,automaticUploads}}))},makeItems=function(info){var useColumns,imageList=info.imageList.map((function(items){return{name:"images",type:"listbox",label:"Image list",items}})),imageDescription={name:"alt",type:"input",label:"Alternative description",disabled:info.hasAccessibilityOptions&&info.image.isDecorative},classList=info.classList.map((function(items){return{name:"classes",type:"listbox",label:"Class",items}}));return flatten([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],imageList.toArray(),info.hasAccessibilityOptions&&info.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],info.hasDescription?[imageDescription]:[],info.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],info.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[__assign(__assign({},(useColumns=info.classList.isSome()&&info.hasImageCaption,useColumns?{type:"grid",columns:2}:{type:"panel"})),{items:flatten([classList.toArray(),info.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])})]])},MainTab_makeTab=function(info){return{title:"General",name:"general",items:makeItems(info)}},MainTab_makeItems=makeItems,UploadTab_makeTab=function(_info){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},fromImageData=function(image){return{src:{value:image.src,meta:{}},images:image.src,alt:image.alt,title:image.title,dimensions:{width:image.width,height:image.height},classes:image.class,caption:image.caption,style:image.style,vspace:image.vspace,border:image.border,hspace:image.hspace,borderstyle:image.borderStyle,fileinput:[],isDecorative:image.isDecorative}},toImageData=function(data,removeEmptyAlt){return{src:data.src.value,alt:0===data.alt.length&&removeEmptyAlt?null:data.alt,title:data.title,width:data.dimensions.width,height:data.dimensions.height,class:data.classes,style:data.style,caption:data.caption,hspace:data.hspace,vspace:data.vspace,border:data.border,borderStyle:data.borderstyle,isDecorative:data.isDecorative}},addPrependUrl=function(info,api){var data=api.getData();(function(info,srcURL){return/^(?:[a-zA-Z]+:)?\/\//.test(srcURL)?Optional.none():info.prependURL.bind((function(prependUrl){return srcURL.substring(0,prependUrl.length)!==prependUrl?Optional.some(prependUrl+srcURL):Optional.none()}))})(info,data.src.value).each((function(srcURL){api.setData({src:{value:srcURL,meta:data.src.meta}})}))},formFillFromMeta=function(info,api){var data=api.getData(),meta=data.src.meta;if(void 0!==meta){var newData=deepMerge({},data);!function(info,data,meta){info.hasDescription&&isString(meta.alt)&&(data.alt=meta.alt),info.hasAccessibilityOptions&&(data.isDecorative=meta.isDecorative||data.isDecorative||!1),info.hasImageTitle&&isString(meta.title)&&(data.title=meta.title),info.hasDimensions&&(isString(meta.width)&&(data.dimensions.width=meta.width),isString(meta.height)&&(data.dimensions.height=meta.height)),isString(meta.class)&&ListUtils_findEntry(info.classList,meta.class).each((function(entry){data.classes=entry.value})),info.hasImageCaption&&isBoolean(meta.caption)&&(data.caption=meta.caption),info.hasAdvTab&&(isString(meta.style)&&(data.style=meta.style),isString(meta.vspace)&&(data.vspace=meta.vspace),isString(meta.border)&&(data.border=meta.border),isString(meta.hspace)&&(data.hspace=meta.hspace),isString(meta.borderstyle)&&(data.borderstyle=meta.borderstyle))}(info,newData,meta),api.setData(newData)}},changeSrc=function(helpers,info,state,api){addPrependUrl(info,api),formFillFromMeta(info,api),function(helpers,info,state,api){var data=api.getData(),url=data.src.value,meta=data.src.meta||{};meta.width||meta.height||!info.hasDimensions||(url.length>0?helpers.imageSize(url).then((function(size){state.open&&api.setData({dimensions:size})})).catch((function(e){return console.error(e)})):api.setData({dimensions:{width:"",height:""}}))}(helpers,info,state,api),function(info,state,api){var data=api.getData(),image=ListUtils_findEntry(info.imageList,data.src.value);state.prevImage=image,api.setData({images:image.map((function(entry){return entry.value})).getOr("")})}(info,state,api)},changeStyle2=function(parseStyle,serializeStyle,data){var css=mergeMargins(parseStyle(data.style)),dataCopy=deepMerge({},data);return dataCopy.vspace=function(css){return css["margin-top"]&&css["margin-bottom"]&&css["margin-top"]===css["margin-bottom"]?removePixelSuffix(String(css["margin-top"])):""}(css),dataCopy.hspace=function(css){return css["margin-right"]&&css["margin-left"]&&css["margin-right"]===css["margin-left"]?removePixelSuffix(String(css["margin-right"])):""}(css),dataCopy.border=function(css){return css["border-width"]?removePixelSuffix(String(css["border-width"])):""}(css),dataCopy.borderstyle=function(css){return css["border-style"]?String(css["border-style"]):""}(css),dataCopy.style=function(parseStyle,serializeStyle,css){return serializeStyle(parseStyle(serializeStyle(css)))}(parseStyle,serializeStyle,css),dataCopy},changeFileInput=function(helpers,info,state,api){var data=api.getData();api.block("Uploading image"),head(data.fileinput).fold((function(){api.unblock()}),(function(file){var blob,blobUri=URL.createObjectURL(file),finalize=function(){api.unblock(),URL.revokeObjectURL(blobUri)},updateSrcAndSwitchTab=function(url){api.setData({src:{value:url,meta:{}}}),api.showTab("general"),changeSrc(helpers,info,state,api)};(blob=file,new global$4((function(resolve,reject){var reader=new FileReader;reader.onload=function(){resolve(reader.result)},reader.onerror=function(){reject(reader.error.message)},reader.readAsDataURL(blob)}))).then((function(dataUrl){var blobInfo=helpers.createBlobCache(file,blobUri,dataUrl);info.automaticUploads?helpers.uploadImage(blobInfo).then((function(result){updateSrcAndSwitchTab(result.url),finalize()})).catch((function(err){finalize(),helpers.alertErr(err)})):(helpers.addToBlobCache(blobInfo),updateSrcAndSwitchTab(blobInfo.blobUri()),api.unblock())}))}))},changeHandler=function(helpers,info,state){return function(api,evt){"src"===evt.name?changeSrc(helpers,info,state,api):"images"===evt.name?function(helpers,info,state,api){var data=api.getData(),image=ListUtils_findEntry(info.imageList,data.images);image.each((function(img){var updateAlt=""===data.alt||state.prevImage.map((function(image){return image.text===data.alt})).getOr(!1);updateAlt?""===img.value?api.setData({src:img,alt:state.prevAlt}):api.setData({src:img,alt:img.text}):api.setData({src:img})})),state.prevImage=image,changeSrc(helpers,info,state,api)}(helpers,info,state,api):"alt"===evt.name?state.prevAlt=api.getData().alt:"style"===evt.name?function(helpers,api){var data=api.getData(),newData=changeStyle2(helpers.parseStyle,helpers.serializeStyle,data);api.setData(newData)}(helpers,api):"vspace"===evt.name||"hspace"===evt.name||"border"===evt.name||"borderstyle"===evt.name?function(helpers,info,api){var data=deepMerge(fromImageData(info.image),api.getData()),style=getStyleValue(helpers.normalizeCss,toImageData(data,!1));api.setData({style})}(helpers,info,api):"fileinput"===evt.name?changeFileInput(helpers,info,state,api):"isDecorative"===evt.name&&(api.getData().isDecorative?api.disable("alt"):api.enable("alt"))}},closeHandler=function(state){return function(){state.open=!1}},makeDialogBody=function(info){return info.hasAdvTab||info.hasUploadUrl||info.hasUploadHandler?{type:"tabpanel",tabs:flatten([[MainTab_makeTab(info)],info.hasAdvTab?[AdvTab_makeTab(info)]:[],info.hasUploadTab&&(info.hasUploadUrl||info.hasUploadHandler)?[UploadTab_makeTab(info)]:[]])}:{type:"panel",items:MainTab_makeItems(info)}},makeDialog=function(helpers){return function(info){var state=function(info){return{prevImage:ListUtils_findEntry(info.imageList,info.image.src),prevAlt:info.image.alt,open:!0}}(info);return{title:"Insert/Edit Image",size:"normal",body:makeDialogBody(info),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:fromImageData(info.image),onSubmit:helpers.onSubmit(info),onChange:changeHandler(helpers,info,state),onClose:closeHandler(state)}}},submitHandler=function(editor){return function(info){return function(api){var data=deepMerge(fromImageData(info.image),api.getData());editor.execCommand("mceUpdateImage",!1,toImageData(data,info.hasAccessibilityOptions)),editor.editorUpload.uploadImagesAuto(),api.close()}}},imageSize=function(editor){return function(url){return isSafeImageUrl(editor,url)?function(url){return new global$4((function(callback){var img=document.createElement("img"),done=function(dimensions){img.onload=img.onerror=null,img.parentNode&&img.parentNode.removeChild(img),callback(dimensions)};img.onload=function(){var dimensions={width:parseIntAndGetMax(img.width,img.clientWidth),height:parseIntAndGetMax(img.height,img.clientHeight)};done(global$4.resolve(dimensions))},img.onerror=function(){done(global$4.reject("Failed to get image dimensions for: "+url))};var style=img.style;style.visibility="hidden",style.position="fixed",style.bottom=style.left="0px",style.width=style.height="auto",document.body.appendChild(img),img.src=url}))}(editor.documentBaseURI.toAbsolute(url)).then((function(dimensions){return{width:String(dimensions.width),height:String(dimensions.height)}})):global$4.resolve({width:"",height:""})}},createBlobCache=function(editor){return function(file,blobUri,dataUrl){return editor.editorUpload.blobCache.create({blob:file,blobUri,name:file.name?file.name.replace(/\.[^\.]+$/,""):null,filename:file.name,base64:dataUrl.split(",")[1]})}},addToBlobCache=function(editor){return function(blobInfo){editor.editorUpload.blobCache.add(blobInfo)}},alertErr=function(editor){return function(message){editor.windowManager.alert(message)}},normalizeCss=function(editor){return function(cssText){return normalizeCss$1(editor,cssText)}},parseStyle=function(editor){return function(cssText){return editor.dom.parseStyle(cssText)}},serializeStyle=function(editor){return function(stylesArg,name){return editor.dom.serializeStyle(stylesArg,name)}},uploadImage=function(editor){return function(blobInfo){return global$1(editor).upload([blobInfo],!1).then((function(results){return 0===results.length?global$4.reject("Failed to upload image"):!1===results[0].status?global$4.reject(results[0].error.message):results[0]}))}},Dialog=function(editor){var helpers={onSubmit:submitHandler(editor),imageSize:imageSize(editor),addToBlobCache:addToBlobCache(editor),createBlobCache:createBlobCache(editor),alertErr:alertErr(editor),normalizeCss:normalizeCss(editor),parseStyle:parseStyle(editor),serializeStyle:serializeStyle(editor),uploadImage:uploadImage(editor)};return{open:function(){collect(editor).then(makeDialog(helpers)).then(editor.windowManager.open)}}},hasImageClass=function(node){var className=node.attr("class");return className&&/\bimage\b/.test(className)},toggleContentEditableState=function(state){return function(nodes){for(var i=nodes.length,toggleContentEditable=function(node){node.attr("contenteditable",state?"true":null)};i--;){var node=nodes[i];hasImageClass(node)&&(node.attr("contenteditable",state?"false":null),global.each(node.getAll("figcaption"),toggleContentEditable))}}};!function Plugin(){global$6.add("image",(function(editor){!function(editor){editor.on("PreInit",(function(){editor.parser.addNodeFilter("figure",toggleContentEditableState(!0)),editor.serializer.addNodeFilter("figure",toggleContentEditableState(!1))}))}(editor),function(editor){editor.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:Dialog(editor).open,onSetup:function(buttonApi){return buttonApi.setActive(isNonNullable(getSelectedImage(editor))),editor.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",buttonApi.setActive).unbind}}),editor.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:Dialog(editor).open}),editor.ui.registry.addContextMenu("image",{update:function(element){return isFigure(element)||"IMG"===element.nodeName&&!isPlaceholderImage(element)?["image"]:[]}})}(editor),function(editor){editor.addCommand("mceImage",Dialog(editor).open),editor.addCommand("mceUpdateImage",(function(_ui,data){editor.undoManager.transact((function(){return insertOrUpdateImage(editor,data)}))}))}(editor)}))}()}();