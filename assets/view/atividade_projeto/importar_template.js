define([],function(){return function(t){"use strict";var o=this;this.html_id=t,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.cbo_projetos_template=this.dialog.find(".cbo_projetos_template"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_confirmar=this.dialog.find(".btn_confirmar"),this.projeto_id,this.show=function(t){o.projeto_id=t,o.listar_templates(),show_modal(o.modal.attr("id"))},this.listar_templates=function(){o.cbo_projetos_template.find("option").remove(),add_option(o.cbo_projetos_template,"","-- Selecione --"),WS.get("projeto/get_projeto_template/",null,function(t){for(var i=0;i<t.length;i++){var e=t[i];add_option(o.cbo_projetos_template,e.id,e.nome,"id="+(null!=e.total_horas?e.total_horas:"000:00"))}o.cbo_projetos_template.selectpicker("refresh")})},this.close=function(){close_modal(o.modal.attr("id")),void 0!==o.onclose&&o.onclose&&o.onclose()},this.unload=function(){o.close(),View.unload(this.html_id)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){o.unload()}),this.btn_confirmar.unbind("click"),this.btn_confirmar.click(function(){WS.post("projeto/salvar",{projeto_id:o.projeto_id,template_id:o.cbo_projetos_template.val(),importa_template:!0},function(t){o.projeto_id=t.id,alert_saved(t.nome+" salvo com sucesso"),void 0!==o.onconfirm&&o.onconfirm&&o.onconfirm(t),o.unload()})})}});