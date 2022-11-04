!function(){"use strict";var global$5=tinymce.util.Tools.resolve("tinymce.PluginManager"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}var call,id,isType=function(type){return function(value){return t=typeof(x=value),(null===x?"null":"object"===t&&(Array.prototype.isPrototypeOf(x)||x.constructor&&"Array"===x.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(x)||x.constructor&&"String"===x.constructor.name)?"string":t)===type;var x,t}},isString=isType("string"),isObject=isType("object"),isArray=isType("array"),noop=function(){},constant=function(value){return function(){return value}},identity=function(x){return x},never=constant(!1),always=constant(!0),none=function(){return NONE},NONE={fold:function(n,_s){return n()},isSome:never,isNone:always,getOr:id=identity,getOrThunk:call=function(thunk){return thunk()},getOrDie:function(msg){throw new Error(msg||"error: getOrDie called on none.")},getOrNull:constant(null),getOrUndefined:constant(void 0),or:id,orThunk:call,map:none,each:noop,bind:none,exists:never,forall:always,filter:function(){return none()},toArray:function(){return[]},toString:constant("none()")},some=function(a){var constant_a=constant(a),self=function(){return me},bind=function(f){return f(a)},me={fold:function(n,s){return s(a)},isSome:always,isNone:never,getOr:constant_a,getOrThunk:constant_a,getOrDie:constant_a,getOrNull:constant_a,getOrUndefined:constant_a,or:self,orThunk:self,map:function(f){return some(f(a))},each:function(f){f(a)},bind,exists:bind,forall:bind,filter:function(f){return f(a)?me:NONE},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return me},Optional={some,none,from:function(value){return null==value?NONE:some(value)}},nativeSlice=Array.prototype.slice,nativeIndexOf=Array.prototype.indexOf,contains=function(xs,x){return ts=xs,t=x,nativeIndexOf.call(ts,t)>-1;var ts,t},map=function(xs,f){for(var len=xs.length,r=new Array(len),i=0;i<len;i++){var x=xs[i];r[i]=f(x,i)}return r},each=function(xs,f){for(var i=0,len=xs.length;i<len;i++){f(xs[i],i)}},filter=function(xs,pred){for(var r=[],i=0,len=xs.length;i<len;i++){var x=xs[i];pred(x,i)&&r.push(x)}return r},foldr=function(xs,f,acc){return function(xs,f){for(var i=xs.length-1;i>=0;i--)f(xs[i],i)}(xs,(function(x,i){acc=f(acc,x,i)})),acc},find=function(xs,pred){return function(xs,pred,until){for(var i=0,len=xs.length;i<len;i++){var x=xs[i];if(pred(x,i))return Optional.some(x);if(until(x,i))break}return Optional.none()}(xs,pred,never)},forall=function(xs,pred){for(var i=0,len=xs.length;i<len;++i){if(!0!==pred(xs[i],i))return!1}return!0},head=function(xs){return function(xs,i){return i>=0&&i<xs.length?Optional.some(xs[i]):Optional.none()}(xs,0)},keys=Object.keys,hasOwnProperty=Object.hasOwnProperty,Adt_generate=function(cases){if(!isArray(cases))throw new Error("cases must be an array");if(0===cases.length)throw new Error("there must be at least one case");var constructors=[],adt={};return each(cases,(function(acase,count){var keys$1=keys(acase);if(1!==keys$1.length)throw new Error("one and only one name per case");var key=keys$1[0],value=acase[key];if(void 0!==adt[key])throw new Error("duplicate key detected:"+key);if("cata"===key)throw new Error("cannot have a case named cata (sorry)");if(!isArray(value))throw new Error("case arguments must be an array");constructors.push(key),adt[key]=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var argLength=args.length;if(argLength!==value.length)throw new Error("Wrong number of arguments to case "+key+". Expected "+value.length+" ("+value+"), got "+argLength);var match=function(branches){var branchKeys=keys(branches);if(constructors.length!==branchKeys.length)throw new Error("Wrong number of arguments to match. Expected: "+constructors.join(",")+"\nActual: "+branchKeys.join(","));if(!forall(constructors,(function(reqKey){return contains(branchKeys,reqKey)})))throw new Error("Not all branches were specified when using match. Specified: "+branchKeys.join(", ")+"\nRequired: "+constructors.join(", "));return branches[key].apply(null,args)};return{fold:function(){for(var foldArgs=[],_i=0;_i<arguments.length;_i++)foldArgs[_i]=arguments[_i];if(foldArgs.length!==cases.length)throw new Error("Wrong number of arguments to fold. Expected "+cases.length+", got "+foldArgs.length);var target=foldArgs[count];return target.apply(null,args)},match,log:function(label){console.log(label,{constructors,constructor:key,params:args})}}}})),adt};Adt_generate([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]);var partition=function(results){var errors=[],values=[];return each(results,(function(result){result.fold((function(err){errors.push(err)}),(function(value){values.push(value)}))})),{errors,values}},value=function(o){return{isValue:always,isError:never,getOr:constant(o),getOrThunk:constant(o),getOrDie:constant(o),or:function(_opt){return value(o)},orThunk:function(_f){return value(o)},fold:function(_,onValue){return onValue(o)},map:function(f){return value(f(o))},mapError:function(_f){return value(o)},each:function(f){f(o)},bind:function(f){return f(o)},exists:function(f){return f(o)},forall:function(f){return f(o)},toOptional:function(){return Optional.some(o)}}},error$1=function(message){return{isValue:never,isError:always,getOr:identity,getOrThunk:function(f){return f()},getOrDie:function(){return(msg=String(message),function(){throw new Error(msg)})();var msg},or:identity,orThunk:function(f){return f()},fold:function(onError,_){return onError(message)},map:function(_f){return error$1(message)},mapError:function(f){return error$1(f(message))},each:noop,bind:function(_f){return error$1(message)},exists:never,forall:always,toOptional:Optional.none}},Result={value,error:error$1,fromOption:function(opt,err){return opt.fold((function(){return error$1(err)}),value)}},isInlinePattern=function(pattern){return"inline-command"===pattern.type||"inline-format"===pattern.type},isBlockPattern=function(pattern){return"block-command"===pattern.type||"block-format"===pattern.type},sortPatterns=function(patterns){return xs=patterns,comparator=function(a,b){return a.start.length===b.start.length?0:a.start.length>b.start.length?-1:1},(copy=nativeSlice.call(xs,0)).sort(comparator),copy;var xs,comparator,copy},normalizePattern=function(pattern){var err=function(message){return Result.error({message,pattern})},formatOrCmd=function(name,onFormat,onCommand){if(void 0!==pattern.format){var formats=void 0;if(isArray(pattern.format)){if(!forall(pattern.format,isString))return err(name+" pattern has non-string items in the `format` array");formats=pattern.format}else{if(!isString(pattern.format))return err(name+" pattern has non-string `format` parameter");formats=[pattern.format]}return Result.value(onFormat(formats))}return void 0!==pattern.cmd?isString(pattern.cmd)?Result.value(onCommand(pattern.cmd,pattern.value)):err(name+" pattern has non-string `cmd` parameter"):err(name+" pattern is missing both `format` and `cmd` parameters")};if(!isObject(pattern))return err("Raw pattern is not an object");if(!isString(pattern.start))return err("Raw pattern is missing `start` parameter");if(void 0!==pattern.end){if(!isString(pattern.end))return err("Inline pattern has non-string `end` parameter");if(0===pattern.start.length&&0===pattern.end.length)return err("Inline pattern has empty `start` and `end` parameters");var start_1=pattern.start,end_1=pattern.end;return 0===end_1.length&&(end_1=start_1,start_1=""),formatOrCmd("Inline",(function(format){return{type:"inline-format",start:start_1,end:end_1,format}}),(function(cmd,value){return{type:"inline-command",start:start_1,end:end_1,cmd,value}}))}return void 0!==pattern.replacement?isString(pattern.replacement)?0===pattern.start.length?err("Replacement pattern has empty `start` parameter"):Result.value({type:"inline-command",start:"",end:pattern.start,cmd:"mceInsertContent",value:pattern.replacement}):err("Replacement pattern has non-string `replacement` parameter"):0===pattern.start.length?err("Block pattern has empty `start` parameter"):formatOrCmd("Block",(function(formats){return{type:"block-format",start:pattern.start,format:formats[0]}}),(function(command,commandValue){return{type:"block-command",start:pattern.start,cmd:command,value:commandValue}}))},denormalizePattern=function(pattern){return"block-command"===pattern.type?{start:pattern.start,cmd:pattern.cmd,value:pattern.value}:"block-format"===pattern.type?{start:pattern.start,format:pattern.format}:"inline-command"===pattern.type?"mceInsertContent"===pattern.cmd&&""===pattern.start?{start:pattern.end,replacement:pattern.value}:{start:pattern.start,end:pattern.end,cmd:pattern.cmd,value:pattern.value}:"inline-format"===pattern.type?{start:pattern.start,end:pattern.end,format:1===pattern.format.length?pattern.format[0]:pattern.format}:void 0},createPatternSet=function(patterns){return{inlinePatterns:filter(patterns,isInlinePattern),blockPatterns:sortPatterns(filter(patterns,isBlockPattern))}},Global="undefined"!=typeof window?window:Function("return this;")(),error=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var console=Global.console;console&&(console.error?console.error.apply(console,args):console.log.apply(console,args))},defaultPatterns=[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}],getForcedRootBlock=function(editor){var block=editor.getParam("forced_root_block","p");return!1===block?"":!0===block?"p":block},global$4=tinymce.util.Tools.resolve("tinymce.util.Delay"),global$3=tinymce.util.Tools.resolve("tinymce.util.VK"),global$2=tinymce.util.Tools.resolve("tinymce.util.Tools"),global$1=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),global=tinymce.util.Tools.resolve("tinymce.dom.TextSeeker"),point=function(container,offset){return{container,offset}},isText=function(node){return node.nodeType===Node.TEXT_NODE},cleanEmptyNodes=function(dom,node,isRoot){if(node&&dom.isEmpty(node)&&!isRoot(node)){var parent_1=node.parentNode;dom.remove(node),cleanEmptyNodes(dom,parent_1,isRoot)}},deleteRng=function(dom,rng,isRoot,clean){void 0===clean&&(clean=!0);var startParent=rng.startContainer.parentNode,endParent=rng.endContainer.parentNode;rng.deleteContents(),clean&&!isRoot(rng.startContainer)&&(isText(rng.startContainer)&&0===rng.startContainer.data.length&&dom.remove(rng.startContainer),isText(rng.endContainer)&&0===rng.endContainer.data.length&&dom.remove(rng.endContainer),cleanEmptyNodes(dom,startParent,isRoot),startParent!==endParent&&cleanEmptyNodes(dom,endParent,isRoot))},isBlockFormatName=function(name,formatter){var formatSet=formatter.get(name);return isArray(formatSet)&&head(formatSet).exists((function(format){return obj=format,key="block",hasOwnProperty.call(obj,key);var obj,key}))},isReplacementPattern=function(pattern){return 0===pattern.start.length},getParentBlock=function(editor,rng){var parentBlockOpt=Optional.from(editor.dom.getParent(rng.startContainer,editor.dom.isBlock));return""===getForcedRootBlock(editor)?parentBlockOpt.orThunk((function(){return Optional.some(editor.getBody())})):parentBlockOpt},DOM=global$1.DOM,alwaysNext=function(startNode){return function(node){return startNode===node?-1:0}},textBefore=function(node,offset,rootNode){if(isText(node)&&offset>=0)return Optional.some(point(node,offset));var textSeeker=global(DOM);return Optional.from(textSeeker.backwards(node,offset,alwaysNext(node),rootNode)).map((function(prev){return point(prev.container,prev.container.data.length)}))},scanLeft=function(node,offset,rootNode){if(!isText(node))return Optional.none();var text=node.textContent;if(offset>=0&&offset<=text.length)return Optional.some(point(node,offset));var textSeeker=global(DOM);return Optional.from(textSeeker.backwards(node,offset,alwaysNext(node),rootNode)).bind((function(prev){var prevText=prev.container.data;return scanLeft(prev.container,offset+prevText.length,rootNode)}))},scanRight=function(node,offset,rootNode){if(!isText(node))return Optional.none();var text=node.textContent;if(offset<=text.length)return Optional.some(point(node,offset));var textSeeker=global(DOM);return Optional.from(textSeeker.forwards(node,offset,alwaysNext(node),rootNode)).bind((function(next){return scanRight(next.container,offset-text.length,rootNode)}))},repeatLeft=function(dom,node,offset,process,rootNode){var search=global(dom,function(dom){return function(node){return dom.isBlock(node)||contains(["BR","IMG","HR","INPUT"],node.nodeName)||"false"===dom.getContentEditable(node)}}(dom));return Optional.from(search.backwards(node,offset,process,rootNode))},generatePath=function(root,node,offset){if(isText(node)&&(offset<0||offset>node.data.length))return[];for(var p=[offset],current=node;current!==root&&current.parentNode;){for(var parent_1=current.parentNode,i=0;i<parent_1.childNodes.length;i++)if(parent_1.childNodes[i]===current){p.push(i);break}current=parent_1}return current===root?p.reverse():[]},generatePathRange=function(root,startNode,startOffset,endNode,endOffset){return{start:generatePath(root,startNode,startOffset),end:generatePath(root,endNode,endOffset)}},resolvePath=function(root,path){var xs,f,acc,nodePath=path.slice(),offset=nodePath.pop();return(xs=nodePath,f=function(optNode,index){return optNode.bind((function(node){return Optional.from(node.childNodes[index])}))},acc=Optional.some(root),each(xs,(function(x,i){acc=f(acc,x,i)})),acc).bind((function(node){return isText(node)&&(offset<0||offset>node.data.length)?Optional.none():Optional.some({node,offset})}))},resolvePathRange=function(root,range){return resolvePath(root,range.start).bind((function(_a){var startNode=_a.node,startOffset=_a.offset;return resolvePath(root,range.end).map((function(_a){var endNode=_a.node,endOffset=_a.offset,rng=document.createRange();return rng.setStart(startNode,startOffset),rng.setEnd(endNode,endOffset),rng}))}))},stripPattern=function(dom,block,pattern){(function(node,offset,rootNode){if(isText(node)&&offset>=node.length)return Optional.some(point(node,offset));var textSeeker=global(DOM);return Optional.from(textSeeker.forwards(node,offset,alwaysNext(node),rootNode)).map((function(prev){return point(prev.container,0)}))})(block,0,block).each((function(spot){var node=spot.container;scanRight(node,pattern.start.length,block).each((function(end){var rng=dom.createRng();rng.setStart(node,0),rng.setEnd(end.container,end.offset),deleteRng(dom,rng,(function(e){return e===block}))}))}))},findPatterns$1=function(editor,patterns){var dom=editor.dom,rng=editor.selection.getRng();return getParentBlock(editor,rng).filter((function(block){var forcedRootBlock=getForcedRootBlock(editor),matchesForcedRootBlock=""===forcedRootBlock&&dom.is(block,"body")||dom.is(block,forcedRootBlock);return null!==block&&matchesForcedRootBlock})).bind((function(block){var blockText=block.textContent,matchedPattern=function(patterns,text){var nuText=text.replace(" "," ");return find(patterns,(function(pattern){return 0===text.indexOf(pattern.start)||0===nuText.indexOf(pattern.start)}))}(patterns,blockText);return matchedPattern.map((function(pattern){return global$2.trim(blockText).length===pattern.start.length?[]:[{pattern,range:generatePathRange(dom.getRoot(),block,0,block,0)}]}))})).getOr([])},applyMatches$1=function(editor,matches){if(0!==matches.length){var bookmark=editor.selection.getBookmark();each(matches,(function(match){return function(editor,match){var dom=editor.dom,pattern=match.pattern,rng=resolvePathRange(dom.getRoot(),match.range).getOrDie("Unable to resolve path range");return getParentBlock(editor,rng).each((function(block){"block-format"===pattern.type?isBlockFormatName(pattern.format,editor.formatter)&&editor.undoManager.transact((function(){stripPattern(editor.dom,block,pattern),editor.formatter.apply(pattern.format)})):"block-command"===pattern.type&&editor.undoManager.transact((function(){stripPattern(editor.dom,block,pattern),editor.execCommand(pattern.cmd,!1,pattern.value)}))})),!0}(editor,match)})),editor.selection.moveToBookmark(bookmark)}},unique=0,newMarker=function(dom,id){return dom.create("span",{"data-mce-type":"bookmark",id})},rangeFromMarker=function(dom,marker){var rng=dom.createRng();return rng.setStartAfter(marker.start),rng.setEndBefore(marker.end),rng},createMarker=function(dom,markerPrefix,pathRange){var rng=resolvePathRange(dom.getRoot(),pathRange).getOrDie("Unable to resolve path range"),startNode=rng.startContainer,endNode=rng.endContainer,textEnd=0===rng.endOffset?endNode:endNode.splitText(rng.endOffset),textStart=0===rng.startOffset?startNode:startNode.splitText(rng.startOffset);return{prefix:markerPrefix,end:textEnd.parentNode.insertBefore(newMarker(dom,markerPrefix+"-end"),textEnd),start:textStart.parentNode.insertBefore(newMarker(dom,markerPrefix+"-start"),textStart)}},removeMarker=function(dom,marker,isRoot){cleanEmptyNodes(dom,dom.get(marker.prefix+"-end"),isRoot),cleanEmptyNodes(dom,dom.get(marker.prefix+"-start"),isRoot)},findPatternStartFromSpot=function(dom,pattern,block,spot){var patternContent,startPattern=pattern.start;return repeatLeft(dom,spot.container,spot.offset,(patternContent=startPattern,function(element,offset){var searchText=element.data.substring(0,offset),startEndIndex=searchText.lastIndexOf(patternContent.charAt(patternContent.length-1)),startIndex=searchText.lastIndexOf(patternContent);return-1!==startIndex?startIndex+patternContent.length:-1!==startEndIndex?startEndIndex+1:-1}),block).bind((function(spot){if(spot.offset>=startPattern.length){var rng=dom.createRng();return rng.setStart(spot.container,spot.offset-startPattern.length),rng.setEnd(spot.container,spot.offset),Optional.some(rng)}var offset=spot.offset-startPattern.length;return scanLeft(spot.container,offset,block).map((function(nextSpot){var rng=dom.createRng();return rng.setStart(nextSpot.container,nextSpot.offset),rng.setEnd(spot.container,spot.offset),rng})).filter((function(rng){return rng.toString()===startPattern})).orThunk((function(){return findPatternStartFromSpot(dom,pattern,block,point(spot.container,0))}))}))},findPattern=function(editor,block,details){var dom=editor.dom,root=dom.getRoot(),pattern=details.pattern,endNode=details.position.container,endOffset=details.position.offset;return scanLeft(endNode,endOffset-details.pattern.end.length,block).bind((function(spot){var endPathRng=generatePathRange(root,spot.container,spot.offset,endNode,endOffset);if(isReplacementPattern(pattern))return Optional.some({matches:[{pattern,startRng:endPathRng,endRng:endPathRng}],position:spot});var resultsOpt=findPatternsRec(editor,details.remainingPatterns,spot.container,spot.offset,block),results_1=resultsOpt.getOr({matches:[],position:spot}),pos=results_1.position,start=function(dom,pattern,node,offset,block,requireGap){if(void 0===requireGap&&(requireGap=!1),0===pattern.start.length&&!requireGap){var rng=dom.createRng();return rng.setStart(node,offset),rng.setEnd(node,offset),Optional.some(rng)}return textBefore(node,offset,block).bind((function(spot){return findPatternStartFromSpot(dom,pattern,block,spot).bind((function(startRange){if(requireGap){if(startRange.endContainer===spot.container&&startRange.endOffset===spot.offset)return Optional.none();if(0===spot.offset&&startRange.endContainer.textContent.length===startRange.endOffset)return Optional.none()}return Optional.some(startRange)}))}))}(dom,pattern,pos.container,pos.offset,block,resultsOpt.isNone());return start.map((function(startRng){var startPathRng=function(root,range){return generatePathRange(root,range.startContainer,range.startOffset,range.endContainer,range.endOffset)}(root,startRng);return{matches:results_1.matches.concat([{pattern,startRng:startPathRng,endRng:endPathRng}]),position:point(startRng.startContainer,startRng.startOffset)}}))}))},findPatternsRec=function(editor,patterns,node,offset,block){var dom=editor.dom;return textBefore(node,offset,dom.getRoot()).bind((function(endSpot){var rng=dom.createRng();rng.setStart(block,0),rng.setEnd(node,offset);for(var str,suffix,text=rng.toString(),i=0;i<patterns.length;i++){var pattern=patterns[i];if(str=text,suffix=pattern.end,function(str,substr,start){return""===substr||str.length>=substr.length&&str.substr(start,start+substr.length)===substr}(str,suffix,str.length-suffix.length)){var patternsWithoutCurrent=patterns.slice();patternsWithoutCurrent.splice(i,1);var result=findPattern(editor,block,{pattern,remainingPatterns:patternsWithoutCurrent,position:endSpot});if(result.isSome())return result}}return Optional.none()}))},applyPattern=function(editor,pattern,patternRange){editor.selection.setRng(patternRange),"inline-format"===pattern.type?each(pattern.format,(function(format){editor.formatter.apply(format)})):editor.execCommand(pattern.cmd,!1,pattern.value)},addMarkers=function(dom,matches){var prefix,time,markerPrefix=(prefix="mce_textpattern",time=(new Date).getTime(),prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)),matchesWithEnds=foldr(matches,(function(acc,match){var endMarker=createMarker(dom,markerPrefix+"_end"+acc.length,match.endRng);return acc.concat([__assign(__assign({},match),{endMarker})])}),[]);return foldr(matchesWithEnds,(function(acc,match){var idx=matchesWithEnds.length-acc.length-1,startMarker=isReplacementPattern(match.pattern)?match.endMarker:createMarker(dom,markerPrefix+"_start"+idx,match.startRng);return acc.concat([__assign(__assign({},match),{startMarker})])}),[])},findPatterns=function(editor,patterns,space){var rng=editor.selection.getRng();return!1===rng.collapsed?[]:getParentBlock(editor,rng).bind((function(block){var offset=rng.startOffset-(space?1:0);return findPatternsRec(editor,patterns,rng.startContainer,offset,block)})).fold((function(){return[]}),(function(result){return result.matches}))},applyMatches=function(editor,matches){if(0!==matches.length){var dom=editor.dom,bookmark=editor.selection.getBookmark(),matchesWithMarkers=addMarkers(dom,matches);each(matchesWithMarkers,(function(match){var block=dom.getParent(match.startMarker.start,dom.isBlock),isRoot=function(node){return node===block};isReplacementPattern(match.pattern)?function(editor,pattern,marker,isRoot){var markerRange=rangeFromMarker(editor.dom,marker);deleteRng(editor.dom,markerRange,isRoot),applyPattern(editor,pattern,markerRange)}(editor,match.pattern,match.endMarker,isRoot):function(editor,pattern,startMarker,endMarker,isRoot){var dom=editor.dom,markerEndRange=rangeFromMarker(dom,endMarker),markerStartRange=rangeFromMarker(dom,startMarker);deleteRng(dom,markerStartRange,isRoot),deleteRng(dom,markerEndRange,isRoot);var patternMarker={prefix:startMarker.prefix,start:startMarker.end,end:endMarker.start},patternRange=rangeFromMarker(dom,patternMarker);applyPattern(editor,pattern,patternRange)}(editor,match.pattern,match.startMarker,match.endMarker,isRoot),removeMarker(dom,match.endMarker,isRoot),removeMarker(dom,match.startMarker,isRoot)})),editor.selection.moveToBookmark(bookmark)}},handleInlineKey=function(editor,patternSet){var inlineMatches=findPatterns(editor,patternSet.inlinePatterns,!0);inlineMatches.length>0&&editor.undoManager.transact((function(){applyMatches(editor,inlineMatches)}))},checkKeyEvent=function(codes,event,predicate){for(var i=0;i<codes.length;i++)if(predicate(codes[i],event))return!0;return!1},setup=function(editor,patternsState){var charCodes=[",",".",";",":","!","?"],keyCodes=[32];editor.on("keydown",(function(e){13!==e.keyCode||global$3.modifierPressed(e)||function(editor,patternSet){if(!editor.selection.isCollapsed())return!1;var inlineMatches=findPatterns(editor,patternSet.inlinePatterns,!1),blockMatches=findPatterns$1(editor,patternSet.blockPatterns);return(blockMatches.length>0||inlineMatches.length>0)&&(editor.undoManager.add(),editor.undoManager.extra((function(){editor.execCommand("mceInsertNewLine")}),(function(){editor.insertContent("\ufeff"),applyMatches(editor,inlineMatches),applyMatches$1(editor,blockMatches);var range=editor.selection.getRng(),spot=textBefore(range.startContainer,range.startOffset,editor.dom.getRoot());editor.execCommand("mceInsertNewLine"),spot.each((function(s){var node=s.container;"\ufeff"===node.data.charAt(s.offset-1)&&(node.deleteData(s.offset-1,1),cleanEmptyNodes(editor.dom,node.parentNode,(function(e){return e===editor.dom.getRoot()})))}))})),!0)}(editor,patternsState.get())&&e.preventDefault()}),!0),editor.on("keyup",(function(e){checkKeyEvent(keyCodes,e,(function(code,event){return code===event.keyCode&&!1===global$3.modifierPressed(event)}))&&handleInlineKey(editor,patternsState.get())})),editor.on("keypress",(function(e){checkKeyEvent(charCodes,e,(function(chr,event){return chr.charCodeAt(0)===event.charCode}))&&global$4.setEditorTimeout(editor,(function(){handleInlineKey(editor,patternsState.get())}))}))};!function Plugin(){global$5.add("textpattern",(function(editor){var patternsState=function(initial){var value=initial;return{get:function(){return value},set:function(v){value=v}}}(function(editor){var patterns=editor.getParam("textpattern_patterns",defaultPatterns,"array");if(!isArray(patterns))return error("The setting textpattern_patterns should be an array"),{inlinePatterns:[],blockPatterns:[]};var normalized=partition(map(patterns,normalizePattern));return each(normalized.errors,(function(err){return error(err.message,err.pattern)})),createPatternSet(normalized.values)}(editor));return setup(editor,patternsState),function(patternsState){return{setPatterns:function(newPatterns){var normalized=partition(map(newPatterns,normalizePattern));if(normalized.errors.length>0){var firstError=normalized.errors[0];throw new Error(firstError.message+":\n"+JSON.stringify(firstError.pattern,null,2))}patternsState.set(createPatternSet(normalized.values))},getPatterns:function(){return __spreadArray(__spreadArray([],map(patternsState.get().inlinePatterns,denormalizePattern),!0),map(patternsState.get().blockPatterns,denormalizePattern),!0)}}}(patternsState)}))}()}();