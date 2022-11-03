!function(){"use strict";var global=tinymce.util.Tools.resolve("tinymce.PluginManager"),toggleVisualBlocks=function(editor,pluginUrl,enabledState){editor.dom.toggleClass(editor.getBody(),"mce-visualblocks"),enabledState.set(!enabledState.get()),function(editor,state){editor.fire("VisualBlocks",{state})}(editor,enabledState.get())},toggleActiveState=function(editor,enabledState){return function(api){api.setActive(enabledState.get());var editorEventCallback=function(e){return api.setActive(e.state)};return editor.on("VisualBlocks",editorEventCallback),function(){return editor.off("VisualBlocks",editorEventCallback)}}};!function Plugin(){global.add("visualblocks",(function(editor,pluginUrl){var value,enabledState=(value=!1,{get:function(){return value},set:function(v){value=v}});!function(editor,pluginUrl,enabledState){editor.addCommand("mceVisualBlocks",(function(){toggleVisualBlocks(editor,0,enabledState)}))}(editor,0,enabledState),function(editor,enabledState){var onAction=function(){return editor.execCommand("mceVisualBlocks")};editor.ui.registry.addToggleButton("visualblocks",{icon:"visualblocks",tooltip:"Show blocks",onAction,onSetup:toggleActiveState(editor,enabledState)}),editor.ui.registry.addToggleMenuItem("visualblocks",{text:"Show blocks",icon:"visualblocks",onAction,onSetup:toggleActiveState(editor,enabledState)})}(editor,enabledState),function(editor,pluginUrl,enabledState){editor.on("PreviewFormats AfterPreviewFormats",(function(e){enabledState.get()&&editor.dom.toggleClass(editor.getBody(),"mce-visualblocks","afterpreviewformats"===e.type)})),editor.on("init",(function(){(function(editor){return editor.getParam("visualblocks_default_state",!1,"boolean")})(editor)&&toggleVisualBlocks(editor,0,enabledState)}))}(editor,0,enabledState)}))}()}();