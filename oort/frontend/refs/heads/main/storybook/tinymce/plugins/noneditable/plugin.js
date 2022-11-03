!function(){"use strict";var global$1=tinymce.util.Tools.resolve("tinymce.PluginManager"),global=tinymce.util.Tools.resolve("tinymce.util.Tools"),getNonEditableClass=function(editor){return editor.getParam("noneditable_noneditable_class","mceNonEditable")},hasClass=function(checkClassName){return function(node){return-1!==(" "+node.attr("class")+" ").indexOf(checkClassName)}},replaceMatchWithSpan=function(editor,content,cls){return function(match){var args=arguments,index=args[args.length-2],prevChar=index>0?content.charAt(index-1):"";if('"'===prevChar)return match;if(">"===prevChar){var findStartTagIndex=content.lastIndexOf("<",index);if(-1!==findStartTagIndex){var tagHtml=content.substring(findStartTagIndex,index);if(-1!==tagHtml.indexOf('contenteditable="false"'))return match}}return'<span class="'+cls+'" data-mce-content="'+editor.dom.encode(args[0])+'">'+editor.dom.encode("string"==typeof args[1]?args[1]:args[0])+"</span>"}},setup=function(editor){var editClass=" "+global.trim(function(editor){return editor.getParam("noneditable_editable_class","mceEditable")}(editor))+" ",nonEditClass=" "+global.trim(getNonEditableClass(editor))+" ",hasEditClass=hasClass(editClass),hasNonEditClass=hasClass(nonEditClass),nonEditableRegExps=function(editor){var nonEditableRegExps=editor.getParam("noneditable_regexp",[]);return nonEditableRegExps&&nonEditableRegExps.constructor===RegExp?[nonEditableRegExps]:nonEditableRegExps}(editor);editor.on("PreInit",(function(){nonEditableRegExps.length>0&&editor.on("BeforeSetContent",(function(e){!function(editor,nonEditableRegExps,e){var i=nonEditableRegExps.length,content=e.content;if("raw"!==e.format){for(;i--;)content=content.replace(nonEditableRegExps[i],replaceMatchWithSpan(editor,content,getNonEditableClass(editor)));e.content=content}}(editor,nonEditableRegExps,e)})),editor.parser.addAttributeFilter("class",(function(nodes){for(var node,i=nodes.length;i--;)node=nodes[i],hasEditClass(node)?node.attr("contenteditable","true"):hasNonEditClass(node)&&node.attr("contenteditable","false")})),editor.serializer.addAttributeFilter("contenteditable",(function(nodes){for(var node,i=nodes.length;i--;)node=nodes[i],(hasEditClass(node)||hasNonEditClass(node))&&(nonEditableRegExps.length>0&&node.attr("data-mce-content")?(node.name="#text",node.type=3,node.raw=!0,node.value=node.attr("data-mce-content")):node.attr("contenteditable",null))}))}))};!function Plugin(){global$1.add("noneditable",(function(editor){setup(editor)}))}()}();