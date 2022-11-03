!function(){"use strict";var global$1=tinymce.util.Tools.resolve("tinymce.PluginManager"),global=tinymce.util.Tools.resolve("tinymce.Env"),shouldSplitBlock=function(editor){return editor.getParam("pagebreak_split_block",!1)},getPlaceholderHtml=function(shouldSplitBlock){var html='<img src="'+global.transparentSrc+'" class="mce-pagebreak" data-mce-resize="false" data-mce-placeholder />';return shouldSplitBlock?"<p>"+html+"</p>":html};!function Plugin(){global$1.add("pagebreak",(function(editor){!function(editor){editor.addCommand("mcePageBreak",(function(){editor.insertContent(getPlaceholderHtml(shouldSplitBlock(editor)))}))}(editor),function(editor){var onAction=function(){return editor.execCommand("mcePageBreak")};editor.ui.registry.addButton("pagebreak",{icon:"page-break",tooltip:"Page break",onAction}),editor.ui.registry.addMenuItem("pagebreak",{text:"Page break",icon:"page-break",onAction})}(editor),function(editor){var separatorHtml=function(editor){return editor.getParam("pagebreak_separator","\x3c!-- pagebreak --\x3e")}(editor),shouldSplitBlock$1=function(){return shouldSplitBlock(editor)},pageBreakSeparatorRegExp=new RegExp(separatorHtml.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,(function(a){return"\\"+a})),"gi");editor.on("BeforeSetContent",(function(e){e.content=e.content.replace(pageBreakSeparatorRegExp,getPlaceholderHtml(shouldSplitBlock$1()))})),editor.on("PreInit",(function(){editor.serializer.addNodeFilter("img",(function(nodes){for(var node,className,i=nodes.length;i--;)if((className=(node=nodes[i]).attr("class"))&&-1!==className.indexOf("mce-pagebreak")){var parentNode=node.parent;if(editor.schema.getBlockElements()[parentNode.name]&&shouldSplitBlock$1()){parentNode.type=3,parentNode.value=separatorHtml,parentNode.raw=!0,node.remove();continue}node.type=3,node.value=separatorHtml,node.raw=!0}}))}))}(editor),function(editor){editor.on("ResolveName",(function(e){"IMG"===e.target.nodeName&&editor.dom.hasClass(e.target,"mce-pagebreak")&&(e.name="pagebreak")}))}(editor)}))}()}();