define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.btn_confirmar=this.dialog.find(".btn_confirmar"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_restaurar=this.dialog.find(".btn_restaurar"),this.dx_html_editor_observacoes=this.dialog.find(".dx_html_editor_observacoes"),this.lbl_oportunidade_id=this.dialog.find(".lbl_oportunidade_id"),this.lbl_item_id=this.dialog.find(".lbl_item_id"),this.onsave=null,this.item=null,this.observacoes=null,this.show=function(i,e){t.item=i,t.preencher(e)},this.preencher=function(i){t.title=(t.item.codigo+" "+t.item.item_descricao).substr(0,45),App.titulo_aba(t.html_id,t.title),t.lbl_oportunidade_id.text(t.item.oportunidade_id),t.lbl_item_id.text(t.item.codigo+" "+t.item.item_descricao),t.observacoes=t.dx_html_editor_observacoes.dxHtmlEditor({height:550,value:i,readOnly:!1,toolbar:{items:["undo","redo","separator",{formatName:"size",formatValues:["8pt","10pt","12pt","14pt","18pt","24pt","36pt"]},{formatName:"font",formatValues:["Arial","Courier New","Georgia","Impact","Lucida Console","Tahoma","Times New Roman","Verdana"]},"separator","bold","italic","strike","underline","separator","alignLeft","alignCenter","alignRight","alignJustify","separator","orderedList","bulletList","separator",{formatName:"header",formatValues:[!1,1,2,3,4,5]},"separator","color","separator","link","image","separator","clear","codeBlock","blockquote"]},mediaResizing:{enabled:!0}}).dxHtmlEditor("instance")},this.confirmar=function(){t.item.observacoes=t.observacoes.option("value"),void 0!==t.onsave&&t.onsave&&t.onsave(t),t.unload()},this.btn_restaurar.unbind("click").click(function(){""!=t.item.item_observacoes?alertaPopUp("Restaurar observações","Deseja restaurar as observações originais do item?","Restaurar",function(){t.observacoes.option("value",nl2br(t.item.item_observacoes))},"Cancelar",function(){},null,"200px"):alertaPopUp("Nenhuma observação","O item não possui observação predefinida","OK",function(){},null,null,null,"200px")}),this.btn_confirmar.unbind("click").click(function(){t.confirmar()}),this.btn_cancelar.unbind("click").click(function(){t.unload()}),this.unload=function(){View.unload(this.html_id)}}});