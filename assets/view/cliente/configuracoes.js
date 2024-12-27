define([],function(){return function(i){"use strict";var o=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.chk_gerar_codigo=this.dialog.find(".chk_gerar_codigo"),this.edt_codigo_zeros_esquerda=this.dialog.find(".edt_codigo_zeros_esquerda"),this.chk_codigo_unidade_repetidos=this.dialog.find(".chk_codigo_unidade_repetidos"),this.chk_razao_social=this.dialog.find(".chk_razao_social"),this.chk_nome_fantasia=this.dialog.find(".chk_nome_fantasia"),this.chk_tipo=this.dialog.find(".chk_tipo"),this.chk_cep=this.dialog.find(".chk_cep"),this.chk_endereco=this.dialog.find(".chk_endereco"),this.chk_numero=this.dialog.find(".chk_numero"),this.chk_bairro=this.dialog.find(".chk_bairro"),this.chk_municipio=this.dialog.find(".chk_municipio"),this.chk_pais=this.dialog.find(".chk_pais"),this.chk_inscricao_estadual=this.dialog.find(".chk_inscricao_estadual"),this.chk_cnpj=this.dialog.find(".chk_cnpj"),this.chk_cnpj_repetidos=this.dialog.find(".chk_cnpj_repetidos"),this.chk_somente_consulta=this.dialog.find(".chk_somente_consulta"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.div_cbo_vincular_form=this.dialog.find(".div_cbo_vincular_form"),this.cbo_vincular_form=this.dialog.find(".cbo_vincular_form"),this.arr_botoes=[],this.id_count=0,this.formulario_id=null,this.formulario_alterado_id=null,this.tipo_formulario=1,this.show=function(i){o.preencher(),show_modal(o.modal.attr("id"))},this.preencher=function(){WS.get("cliente/get_parametros/",null,function(i){o.chk_gerar_codigo.prop("checked","S"==i.cliente_codigo_automatico).change(),o.edt_codigo_zeros_esquerda.val(i.cliente_codigo_zeros_esquerda),o.chk_codigo_unidade_repetidos.prop("checked","S"==i.cliente_codigo_unidade_repetidos).change(),o.chk_razao_social.prop("checked","S"==i.cliente_obrig_razao_social).change(),o.chk_nome_fantasia.prop("checked","S"==i.cliente_obrig_nome_fantasia).change(),o.chk_tipo.prop("checked","S"==i.cliente_obrig_tipo).change(),o.chk_cep.prop("checked","S"==i.cliente_obrig_cep).change(),o.chk_endereco.prop("checked","S"==i.cliente_obrig_endereco).change(),o.chk_numero.prop("checked","S"==i.cliente_obrig_numero).change(),o.chk_bairro.prop("checked","S"==i.cliente_obrig_bairro).change(),o.chk_municipio.prop("checked","S"==i.cliente_obrig_municipio).change(),o.chk_pais.prop("checked","S"==i.cliente_obrig_pais).change(),o.chk_cnpj.prop("checked","S"==i.cliente_obrig_cnpj).change(),o.chk_cnpj_repetidos.prop("checked","S"==i.cliente_cnpj_repetidos).change(),o.chk_inscricao_estadual.prop("checked","S"==i.cliente_obrig_inscricao_estadual).change(),o.chk_somente_consulta.prop("checked","S"==i.somente_consulta_cliente).change(),o.formulario_id=i.formulario_cliente_id,o.formulario_alterado_id=i.formulario_cliente_id,o.render_formulario(o.formulario_id)})},this.render_formulario=function(i){WS.get("formulario/listar/",{tipo_formulario:o.tipo_formulario},function(e){o.cbo_vincular_form.find("option").remove(),add_option(o.cbo_vincular_form,"0","Nenhum"),$(e).each(function(e,c){add_option(o.cbo_vincular_form,c.formulario_id,c.nome),o.formulario_id==c.formulario_id&&c.nome,i&&setTimeout(()=>{o.cbo_vincular_form.val(i).trigger("change")}),o.cbo_vincular_form.selectpicker("refresh")})})},o.cbo_vincular_form.unbind("change"),o.cbo_vincular_form.change(function(i){o.formulario_alterado_id=o.cbo_vincular_form.val()}),this.close=function(){close_modal(o.modal.attr("id")),void 0!==o.onclose&&o.onclose&&o.onclose()},this.unload=function(){o.close(),View.unload(this.html_id)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){o.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){o.formulario_alterado_id!=o.formulario_id&&null!=o.formulario_alterado_id?(o.formulario_id=o.formulario_alterado_id,alert_modal("Atenção","Tem certeza que deseja alterar o formulário vinculado ao Cadastro de Cliente ?","Confirmar",o.salvar,!0,"Cancelar",null,null,"modal-lg")):o.salvar()}),this.salvar=function(){WS.post("cliente/salvar_configuracoes_cliente",{cliente_codigo_automatico:o.chk_gerar_codigo.prop("checked"),cliente_codigo_zeros_esquerda:o.edt_codigo_zeros_esquerda.val(),cliente_codigo_unidade_repetidos:o.chk_codigo_unidade_repetidos.prop("checked"),cliente_obrig_razao_social:o.chk_razao_social.prop("checked"),cliente_obrig_nome_fantasia:o.chk_nome_fantasia.prop("checked"),cliente_obrig_tipo:o.chk_tipo.prop("checked"),cliente_obrig_cep:o.chk_cep.prop("checked"),cliente_obrig_endereco:o.chk_endereco.prop("checked"),cliente_obrig_numero:o.chk_numero.prop("checked"),cliente_obrig_bairro:o.chk_bairro.prop("checked"),cliente_obrig_municipio:o.chk_municipio.prop("checked"),cliente_obrig_pais:o.chk_pais.prop("checked"),cliente_obrig_cnpj:o.chk_cnpj.prop("checked"),cliente_cnpj_repetidos:o.chk_cnpj_repetidos.prop("checked"),cliente_obrig_inscricao_estadual:o.chk_inscricao_estadual.prop("checked"),somente_consulta_cliente:o.chk_somente_consulta.prop("checked"),formulario_cliente_id:o.formulario_id},function(i){alert_saved("Configurações salvas com sucesso"),o.unload()})},this.chk_gerar_codigo.unbind("change"),this.chk_gerar_codigo.change(function(i){o.edt_codigo_zeros_esquerda.prop("readonly",!o.chk_gerar_codigo.prop("checked"))})}});