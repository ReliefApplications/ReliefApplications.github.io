!function(){"use strict";var global$2=tinymce.util.Tools.resolve("tinymce.PluginManager"),global$1=tinymce.util.Tools.resolve("tinymce.Env"),global=tinymce.util.Tools.resolve("tinymce.util.Tools"),open=function(editor){var content=function(editor){var headHtml="",encode=editor.dom.encode,contentStyle=function(editor){return editor.getParam("content_style","","string")}(editor);headHtml+='<base href="'+encode(editor.documentBaseURI.getURI())+'">';var cors=function(editor){return editor.getParam("content_css_cors",!1,"boolean")}(editor)?' crossorigin="anonymous"':"";global.each(editor.contentCSS,(function(url){headHtml+='<link type="text/css" rel="stylesheet" href="'+encode(editor.documentBaseURI.toAbsolute(url))+'"'+cors+">"})),contentStyle&&(headHtml+='<style type="text/css">'+contentStyle+"</style>");var bodyId=function(editor){var bodyId=editor.getParam("body_id","tinymce","string");return-1===bodyId.indexOf("=")?bodyId:function(editor){var bodyId=editor.getParam("body_id","","hash");return bodyId[editor.id]||bodyId}(editor)}(editor),bodyClass=function(editor){var bodyClass=editor.getParam("body_class","","string");return-1===bodyClass.indexOf("=")?bodyClass:function(editor){return editor.getParam("body_class","","hash")[editor.id]||""}(editor)}(editor),preventClicksOnLinksScript='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(global$1.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",directionality=editor.getBody().dir,dirAttr=directionality?' dir="'+encode(directionality)+'"':"";return"<!DOCTYPE html><html><head>"+headHtml+'</head><body id="'+encode(bodyId)+'" class="mce-content-body '+encode(bodyClass)+'"'+dirAttr+">"+editor.getContent()+preventClicksOnLinksScript+"</body></html>"}(editor);editor.windowManager.open({title:"Preview",size:"large",body:{type:"panel",items:[{name:"preview",type:"iframe",sandboxed:!0}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{preview:content}}).focus("close")};!function Plugin(){global$2.add("preview",(function(editor){!function(editor){editor.addCommand("mcePreview",(function(){open(editor)}))}(editor),function(editor){var onAction=function(){return editor.execCommand("mcePreview")};editor.ui.registry.addButton("preview",{icon:"preview",tooltip:"Preview",onAction}),editor.ui.registry.addMenuItem("preview",{icon:"preview",text:"Preview",onAction})}(editor)}))}()}();