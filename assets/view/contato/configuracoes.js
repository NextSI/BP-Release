define([],function(){return function(o){"use strict";var i=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.chk_email_obrigatorio=this.dialog.find(".chk_email_obrigatorio"),this.chk_telefone_obrigatorio=this.dialog.find(".chk_telefone_obrigatorio"),this.chk_area_obrigatorio=this.dialog.find(".chk_area_obrigatorio"),this.chk_funcao_obrigatorio=this.dialog.find(".chk_funcao_obrigatorio"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.div_cbo_vincular_form=this.dialog.find(".div_cbo_vincular_form"),this.cbo_vincular_form=this.dialog.find(".cbo_vincular_form"),this.formulario_id=null,this.formulario_alterado_id=null,this.tipo_formulario=1,this.show=function(o){i.preencher(),show_modal(i.modal.attr("id"))},this.get_nome_formulario=function(o,a,r){o>0?(i.cbo_vincular_form.parent().find("button").removeClass("bs-placeholder"),i.cbo_vincular_form.parent().find("button").find(".filter-option").html(r),i.cbo_vincular_form.parent().find('[data-original-index="'+a+'"]').addClass("selected"),i.cbo_vincular_form.parent().find('[data-original-index="'+a+'"]').addClass("active")):0==o&&(i.cbo_vincular_form.parent().find("button").removeClass("bs-placeholder"),i.cbo_vincular_form.parent().find("button").find(".filter-option").html("Nenhum"),i.cbo_vincular_form.parent().find('[data-original-index="1"]').addClass("selected"),i.cbo_vincular_form.parent().find('[data-original-index="1"]').addClass("active"))},this.render_formulario=function(o){WS.get("formulario/listar/",{tipo_formulario:i.tipo_formulario},function(a){var r=!1,t="";i.cbo_vincular_form.find("option").remove(),add_option(i.cbo_vincular_form,"0","Nenhum"),$(a).each(function(a,n){add_option(i.cbo_vincular_form,n.formulario_id,n.nome),i.formulario_id==n.formulario_id&&(r=a,t=n.nome),o&&i.cbo_vincular_form.val(o).trigger("change"),i.cbo_vincular_form.selectpicker("refresh")}),i.get_nome_formulario(i.formulario_id,r+2,t)})},i.cbo_vincular_form.unbind("change"),i.cbo_vincular_form.change(function(o){i.formulario_alterado_id=i.cbo_vincular_form.val()}),this.preencher=function(){WS.get("contato/get_parametros/",null,function(o){i.chk_email_obrigatorio.prop("checked","S"==o.contato_configuracoes_email_obrigatorio).change(),i.chk_telefone_obrigatorio.prop("checked","S"==o.contato_configuracoes_telefone_obrigatorio).change(),i.chk_area_obrigatorio.prop("checked","S"==o.contato_configuracoes_area_obrigatorio).change(),i.chk_funcao_obrigatorio.prop("checked","S"==o.contato_configuracoes_funcao_obrigatorio).change(),i.formulario_id=o.formulario_contato_id,i.formulario_alterado_id=o.formulario_contato_id,i.render_formulario()})},this.close=function(){close_modal(i.modal.attr("id")),void 0!==i.onclose&&i.onclose&&i.onclose()},this.unload=function(){i.close(),View.unload(this.html_id)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){i.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){i.formulario_alterado_id!=i.formulario_id&&null!=i.formulario_alterado_id?(i.formulario_id=i.formulario_alterado_id,alert_modal("Atenção","Tem certeza que deseja alterar o formulário vinculado ao Cadastro de Contato ?","Confirmar",i.salvar,!0,"Cancelar",null,null,"modal-lg")):i.salvar()}),this.salvar=function(){WS.post("contato/salvar_configuracoes_contato",{contato_configuracoes_email_obrigatorio:i.chk_email_obrigatorio.prop("checked"),contato_configuracoes_telefone_obrigatorio:i.chk_telefone_obrigatorio.prop("checked"),contato_configuracoes_area_obrigatorio:i.chk_area_obrigatorio.prop("checked"),contato_configuracoes_funcao_obrigatorio:i.chk_funcao_obrigatorio.prop("checked"),formulario_contato_id:i.formulario_id},function(o){alert_saved("Configurações salvas com sucesso"),i.unload()})}}});