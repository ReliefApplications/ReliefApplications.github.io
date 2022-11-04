!function(){"use strict";var call,id,global$1=tinymce.util.Tools.resolve("tinymce.PluginManager"),applyListFormat=function(editor,listName,styleValue){var cmd="UL"===listName?"InsertUnorderedList":"InsertOrderedList";editor.execCommand(cmd,!1,!1===styleValue?null:{"list-style-type":styleValue})},global=tinymce.util.Tools.resolve("tinymce.util.Tools"),noop=function(){},constant=function(value){return function(){return value}},identity=function(x){return x},never=constant(!1),always=constant(!0),none=function(){return NONE},NONE={fold:function(n,_s){return n()},isSome:never,isNone:always,getOr:id=identity,getOrThunk:call=function(thunk){return thunk()},getOrDie:function(msg){throw new Error(msg||"error: getOrDie called on none.")},getOrNull:constant(null),getOrUndefined:constant(void 0),or:id,orThunk:call,map:none,each:noop,bind:none,exists:never,forall:always,filter:function(){return none()},toArray:function(){return[]},toString:constant("none()")},some=function(a){var constant_a=constant(a),self=function(){return me},bind=function(f){return f(a)},me={fold:function(n,s){return s(a)},isSome:always,isNone:never,getOr:constant_a,getOrThunk:constant_a,getOrDie:constant_a,getOrNull:constant_a,getOrUndefined:constant_a,or:self,orThunk:self,map:function(f){return some(f(a))},each:function(f){f(a)},bind,exists:bind,forall:bind,filter:function(f){return f(a)?me:NONE},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return me},Optional_from=function(value){return null==value?NONE:some(value)},isTableCellNode=function(node){return node&&/^(TH|TD)$/.test(node.nodeName)},makeSetupHandler=function(editor,nodeName){return function(api){var nodeChangeHandler=function(e){api.setActive(function(editor,e,nodeName){var tableCellIndex=function(list,predicate){for(var index=0;index<list.length;index++)if(predicate(list[index]))return index;return-1}(e.parents,isTableCellNode),parents=-1!==tableCellIndex?e.parents.slice(0,tableCellIndex):e.parents,lists=global.grep(parents,function(editor){return function(node){return node&&/^(OL|UL|DL)$/.test(node.nodeName)&&function(editor,elm){return editor.$.contains(editor.getBody(),elm)}(editor,node)}}(editor));return lists.length>0&&lists[0].nodeName===nodeName}(editor,e,nodeName))};return editor.on("NodeChange",nodeChangeHandler),function(){return editor.off("NodeChange",nodeChangeHandler)}}},addSplitButton=function(editor,id,tooltip,cmd,nodeName,styles){editor.ui.registry.addSplitButton(id,{tooltip,icon:"OL"===nodeName?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:function(callback){callback(global.map(styles,(function(styleValue){var iconStyle="OL"===nodeName?"num":"bull",iconName="disc"===styleValue||"decimal"===styleValue?"default":styleValue,itemValue="default"===styleValue?"":styleValue,displayText=function(styleValue){return styleValue.replace(/\-/g," ").replace(/\b\w/g,(function(chr){return chr.toUpperCase()}))}(styleValue);return{type:"choiceitem",value:itemValue,icon:"list-"+iconStyle+"-"+iconName,text:displayText}})))},onAction:function(){return editor.execCommand(cmd)},onItemAction:function(_splitButtonApi,value){applyListFormat(editor,nodeName,value)},select:function(value){var listStyleType=function(editor){var listElm=editor.dom.getParent(editor.selection.getNode(),"ol,ul"),style=editor.dom.getStyle(listElm,"listStyleType");return Optional_from(style)}(editor);return listStyleType.map((function(listStyle){return value===listStyle})).getOr(!1)},onSetup:makeSetupHandler(editor,nodeName)})},addControl=function(editor,id,tooltip,cmd,nodeName,styles){styles.length>1?addSplitButton(editor,id,tooltip,cmd,nodeName,styles):function(editor,id,tooltip,cmd,nodeName,_styles){editor.ui.registry.addToggleButton(id,{active:!1,tooltip,icon:"OL"===nodeName?"ordered-list":"unordered-list",onSetup:makeSetupHandler(editor,nodeName),onAction:function(){return editor.execCommand(cmd)}})}(editor,id,tooltip,cmd,nodeName)};!function Plugin(){global$1.add("advlist",(function(editor){editor.hasPlugin("lists")?(function(editor){addControl(editor,"numlist","Numbered list","InsertOrderedList","OL",function(editor){var styles=editor.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return styles?styles.split(/[ ,]/):[]}(editor)),addControl(editor,"bullist","Bullet list","InsertUnorderedList","UL",function(editor){var styles=editor.getParam("advlist_bullet_styles","default,circle,square");return styles?styles.split(/[ ,]/):[]}(editor))}(editor),function(editor){editor.addCommand("ApplyUnorderedListStyle",(function(ui,value){applyListFormat(editor,"UL",value["list-style-type"])})),editor.addCommand("ApplyOrderedListStyle",(function(ui,value){applyListFormat(editor,"OL",value["list-style-type"])}))}(editor)):console.error("Please use the Lists plugin together with the Advanced List plugin.")}))}()}();