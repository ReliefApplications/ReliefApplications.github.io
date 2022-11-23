!function(){"use strict";var global$6=tinymce.util.Tools.resolve("tinymce.PluginManager"),global$5=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),global$4=tinymce.util.Tools.resolve("tinymce.EditorManager"),global$3=tinymce.util.Tools.resolve("tinymce.Env"),global$2=tinymce.util.Tools.resolve("tinymce.util.Delay"),global$1=tinymce.util.Tools.resolve("tinymce.util.Tools"),global=tinymce.util.Tools.resolve("tinymce.util.VK"),DOM=global$5.DOM,tabCancel=function(e){e.keyCode!==global.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()};!function Plugin(){global$6.add("tabfocus",(function(editor){!function(editor){var tabHandler=function(e){var x;if(!(e.keyCode!==global.TAB||e.ctrlKey||e.altKey||e.metaKey||e.isDefaultPrevented())){var el,find=function(direction){var el=DOM.select(":input:enabled,*[tabindex]:not(iframe)"),canSelectRecursive=function(e){var castElem=e;return"BODY"===e.nodeName||"hidden"!==castElem.type&&"none"!==castElem.style.display&&"hidden"!==castElem.style.visibility&&canSelectRecursive(e.parentNode)},canSelect=function(el){return/INPUT|TEXTAREA|BUTTON/.test(el.tagName)&&global$4.get(e.id)&&-1!==el.tabIndex&&canSelectRecursive(el)};if(global$1.each(el,(function(e,i){if(e.id===editor.id)return x=i,!1})),direction>0){for(var i=x+1;i<el.length;i++)if(canSelect(el[i]))return el[i]}else for(i=x-1;i>=0;i--)if(canSelect(el[i]))return el[i];return null},v=global$1.explode(function(editor){return editor.getParam("tab_focus",function(editor){return editor.getParam("tabfocus_elements",":prev,:next")}(editor))}(editor));if(1===v.length&&(v[1]=v[0],v[0]=":prev"),el=e.shiftKey?":prev"===v[0]?find(-1):DOM.get(v[0]):":next"===v[1]?find(1):DOM.get(v[1])){var focusEditor=global$4.get(el.id||el.name);el.id&&focusEditor?focusEditor.focus():global$2.setTimeout((function(){global$3.webkit||window.focus(),el.focus()}),10),e.preventDefault()}}};editor.on("init",(function(){editor.inline&&DOM.setAttrib(editor.getBody(),"tabIndex",null),editor.on("keyup",tabCancel),global$3.gecko?editor.on("keypress keydown",tabHandler):editor.on("keydown",tabHandler)}))}(editor)}))}()}();