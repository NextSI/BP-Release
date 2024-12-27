define([],function(){return function(i){"use strict";var a=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title="Histórico Documentos - Clicksign",this.onclose=null,this.onsave=null,this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_refresh=this.dialog.find(".btn_refresh"),this.btn_solicitar_assinaturas=this.dialog.find(".btn_solicitar_assinaturas"),this.treelist_historico_documento_clicksign=this.dialog.find(".treelist_historico_documento_clicksign"),this.documento_revisao_id=null,this.usuario_permissao_escrita=null,this.grupo_usuario_permissao_escrita=null,this.show=function(i,o){a.documento_revisao_id=i,void 0!==o&&(a.usuario_permissao_escrita=o.usuario_permissao_escrita||"S",a.grupo_usuario_permissao_escrita=o.grupo_usuario_permissao_escrita||"S"),a.listar(),show_modal(a.modal.attr("id"))},this.listar=function(){WS.get("documento_revisao_assinatura/listar_eventos_por_revisao/",{documento_revisao_id:a.documento_revisao_id},function(i){a.montaTreeList(i)})},this.montaTreeList=function(i){a.treelist_historico_documento_clicksign.dxTreeList({dataSource:i,showBorders:!0,keyExpr:"id",parentIdExpr:"pai_id",editing:{useIcons:!0},rowAlternationEnabled:!1,onRowPrepared:function(i){"data"===i.rowType&&"C"===i.data.situacao&&i.rowElement.find("td").css("background","#ffcdd2")},columns:[{dataField:"solicitante_nome",caption:"Solicitante"},{dataField:"data_envio",caption:"Data de Envio",dataType:"datetime",format:"dd/MM/yyyy HH:mm:ss"},{dataField:"situacao",caption:"Situação",alignment:"center",cellTemplate:function(i,a){var o="",t="";switch(a.data.situacao){case"A":t="Aguardando",o="label label-warning";break;case"F":t="Finalizado",o="label label-success";break;case"C":t="Cancelado",o="label label-danger"}$("<span class='"+o+"'>"+t+"</span>").appendTo(i)}},{dataField:"nome_arquivo",caption:"Nome do Arquivo"},{dataField:"nome_completo",caption:"Signatário"},{dataField:"event_occurred_at",caption:"Data Assinatura",width:130,dataType:"datetime",format:"dd/MM/yyyy HH:mm:ss"},{type:"buttons",buttons:[{hint:"Download",icon:"fa fa-download",visible:function(i){return 0===i.row.level&&"A"!==i.row.data.situacao&&parseInt(i.row.data.signed_document_tamanho,10)>0},onClick:function(i){var o=i.row.data.documento_revisao_assinatura_id;App.obter_token_publico(function(i){App.download(WS_URI+"documento/download/?documento_revisao_id="+a.documento_revisao_id+"&documento_revisao_assinatura_id="+o+"&token_publico="+i)})}},{hint:"Cancelar Assinatura",icon:"fa fa-thumbs-down",cssClass:"icon_red",visible:function(i){return 0===i.row.level&&("S"===a.usuario_permissao_escrita||"S"===a.grupo_usuario_permissao_escrita)&&"F"!==i.row.data.situacao&&"C"!==i.row.data.situacao},onClick:function(i){a.cancelar_documento_assinado(i.row.data.clicksign_document_key)}}]}],showRowLines:!0})},this.cancelar_documento_assinado=function(i){alert_modal("Aviso","Deseja cancelar esta solicitação de assinatura?","Sim",function(){WS.get("clicksign/cancelar_assinatura/",{clicksign_document_key:i},function(i){alert_modal("Atenção","Solicitação de cancelamento enviado com sucesso! <br><br> A situação será atualizada automaticamente após o Clicksing confirmar o cancelamento.","OK")})},!0,"Não")},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.btn_refresh.unbind("click"),this.btn_refresh.click(function(){a.listar()}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()}),this.btn_solicitar_assinaturas.unbind("click"),this.btn_solicitar_assinaturas.click(function(){View.load("clicksign/configurar_signatarios",function(i,o){o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&a.listar()})},o.show(a.documento_revisao_id,!0)},View.ABA.SIM)})}});