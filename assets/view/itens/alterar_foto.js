define([],function(){return function(i){"use strict";var t=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.item_id=null,this.btn_cancelar=this.modal.find(".btn_cancelar"),this.btn_salvar=this.modal.find(".btn_salvar"),this.thumbnail=this.modal.find(".thumbnail"),this.descricao_item=this.modal.find(".caption h4"),this.ipt_anexo=null,this.show=function(i){t.ipt_anexo=new InputFileNext({elem:this.modal.find(".div_input_file"),placeholder:"Alterar Imagem",atualizar_texto:!1,apenas_imagem:!0,evento:[{nome:"change",func:t.selecionar_anexo}]}),void 0!==i.item_id&&i.item_id&&(t.item_id=i.item_id,t.preencher()),show_modal(t.modal.attr("id"))},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose()},this.unload=function(){t.close(),View.unload(this.html_id)},this.preencher=function(){WS.get({route:"itens/dados_basicos/",data:{item_id:t.item_id},func_response:function(i){i&&(t.descricao_item.text(i.descricao),null!=i.foto_id&&"S"==i.foto_id.midia&&t.thumbnail.find("img").attr("src",WS_URI+"documento/midia/?tipo=v&tamanho=160&documento_id="+i.foto_id.id+"&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime()))}})},this.btn_cancelar.unbind("click").click(function(i){t.unload()}),this.selecionar_anexo=function(i){var n=t.ipt_anexo[0].files,e=new FileReader;e.onloadend=function(){t.thumbnail.find("img").get(0).src=e.result},n.length>0?e.readAsDataURL(n[0]):t.thumbnail.find("img").get(0).src=""},this.btn_salvar.unbind("click").click(function(i){t.ipt_anexo[0].files.length>0&&(t.foto_id=t.ipt_anexo[0].files[0]);var n={item_id:t.item_id,arquivo:t.foto_id};WS.post("itens/alterar_foto",n,function(i){alert_saved(i.descricao+" salvo com sucesso"),t.unload()},[],null,!0)})}});