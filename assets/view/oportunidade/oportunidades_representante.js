define([],function(){return function(t){"use strict";var a=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.tab_listagem=this.dialog.find(".tabela_oportunidades_representante"),this.grid_oportunidades_representante=this.dialog.find(".grid_oportunidades_representante"),this.show=function(t,i,e,o){a.listar(t,i,e,o),show_modal(a.modal.attr("id"))},this.listar=function(t,i,e,o){var n={representante_usuario_id:t.usuario_id,situacao:i,dt_ini:e,dt_fim:o},d=new DevExpress.data.CustomStore.default({loadMode:"raw",cacheRawData:!1,load:function(t){var a=$.Deferred();return WS.get("oportunidade/oportunidade_representante/",n,function(t){$(t).each(function(i,e){a.resolve(t.data)})}),a.promise()},remove:function(t){},update:function(t){},insert:function(t){}});a.grid_oportunidades_representante.dxDataGrid({dataSource:d,rowAlternationEnabled:!1,showRowLines:!0,showBorders:!0,noDataText:App.lang.dxDataGrid.noDataText,filterRow:{visible:!0},columns:[{caption:"ID",dataField:"id",cellTemplate:function(t,i){$("<a/>").addClass("dx-link").text(i.value).on("dxclick",function(t){View.load("oportunidade/detalhes",function(a,i){i.show(parseInt($(t.target).text()),FORMULARIO.VISUALIZAR)},View.ABA.MULTIPLAS,null,null,{oportunidadeId:parseInt($(t.target).text())}),a.unload()}).appendTo(t)}},{caption:"Nome Oportunidade",dataField:"nome"},{caption:"Prospect",dataField:"razao_social"},{caption:"Valor Negócio",dataField:"valor_negocio",customizeText:function(t){return void 0===t.value||void 0===t.target||"filterPanel"!=t.target&&"row"!=t.target?"R$ 0,00":"R$ "+t.value.format_number(2,!0)}},{dataField:"data_situacao",caption:"Data "+("G"==i?"Ganha":"Perda"),dataType:"date",format:"dd/MM/yyyy"}]})},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()})}});