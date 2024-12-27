define([],function(){return function(a){"use strict";var o=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.edt_nome=this.dialog.find(".edt_nome"),this.edt_diretorio=this.dialog.find(".edt_diretorio"),this.chk_padrao_chamados=this.dialog.find(".chk_padrao_chamados"),this.chk_padrao_sistema=this.dialog.find(".chk_padrao_sistema"),this.chk_padrao_processos=this.dialog.find(".chk_padrao_processos"),this.chk_padrao_documentos=this.dialog.find(".chk_padrao_documentos"),this.chk_padrao_projeto=this.dialog.find(".chk_padrao_projeto"),this.chk_padrao_atendimento_relacionamento=this.dialog.find(".chk_padrao_atendimento_relacionamento"),this.div_diretorio_ok=this.dialog.find(".div_diretorio_ok"),this.div_diretorio=this.dialog.find(".div_diretorio"),this.cbo_tipo=this.dialog.find(".cbo_tipo"),this.tipo_ftp=this.dialog.find(".tipo_ftp"),this.status_conexao=this.dialog.find("[conexao]"),this.edt_endereco=this.dialog.find(".edt_endereco"),this.edt_porta=this.dialog.find(".edt_porta"),this.edt_usuario=this.dialog.find(".edt_usuario"),this.edt_senha=this.dialog.find(".edt_senha"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.btn_testar=this.dialog.find(".btn_testar"),this.btn_exibir_senha=this.dialog.find(".btn_exibir_senha"),this.local_armazenamento_id=null,this.show=function(a,e){switch(o.chk_padrao_chamados.removeClass("template_switch"),o.chk_padrao_sistema.removeClass("template_switch"),o.chk_padrao_processos.removeClass("template_switch"),o.chk_padrao_documentos.removeClass("template_switch"),o.chk_padrao_projeto.removeClass("template_switch"),o.chk_padrao_atendimento_relacionamento.removeClass("template_switch"),e){case FORMULARIO.NOVO:o.btn_salvar.show(),o.btn_excluir.hide(),o.permite_alterar(!0),o.cbo_tipo.val("D").selectpicker("refresh");break;case FORMULARIO.EDITAR:o.btn_salvar.show(),o.btn_excluir.hide(),o.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:o.btn_salvar.hide(),o.btn_excluir.hide(),o.permite_alterar(!1);break;case FORMULARIO.EXCLUIR:o.btn_salvar.hide(),o.btn_excluir.show(),o.permite_alterar(!1)}o.tipo=e,void 0!==a&&a&&(o.local_armazenamento_id=a,o.preencher()),show_modal(o.modal.attr("id")),set_focus(o.edt_nome)},this.close=function(){close_modal(o.modal.attr("id")),void 0!==o.onclose&&o.onclose&&o.onclose()},this.unload=function(){o.close(),View.unload(this.html_id)},this.permite_alterar=function(a){o.edt_nome.prop("readonly",!a),o.edt_diretorio.prop("readonly",!a),o.chk_padrao_chamados.prop("disabled",!a).change(),o.chk_padrao_sistema.prop("disabled",!a).change(),o.chk_padrao_processos.prop("disabled",!a).change(),o.chk_padrao_documentos.prop("disabled",!a).change(),o.chk_padrao_projeto.prop("disabled",!a).change(),o.chk_padrao_atendimento_relacionamento.prop("disabled",!a).change(),o.cbo_tipo.prop("disabled",!a)},this.preencher=function(){WS.get("local_armazenamento/objeto/",{local_armazenamento_id:o.local_armazenamento_id},function(a){o.edt_nome.val(a.nome),o.edt_diretorio.val(a.diretorio);var e=o.chk_padrao_chamados.prop("disabled");o.chk_padrao_chamados.prop("checked","true"===a.padrao_chamados.toString()).change(),o.chk_padrao_chamados.prop("disabled",e),o.chk_padrao_sistema.prop("checked","true"===a.padrao_sistema.toString()).change(),o.chk_padrao_sistema.prop("disabled",e),o.chk_padrao_processos.prop("checked","true"===a.padrao_processos.toString()).change(),o.chk_padrao_processos.prop("disabled",e),o.chk_padrao_documentos.prop("checked","true"===a.padrao_documentos.toString()).change(),o.chk_padrao_documentos.prop("disabled",e),o.chk_padrao_projeto.prop("checked","true"===a.padrao_projeto.toString()).change(),o.chk_padrao_projeto.prop("disabled",e),o.chk_padrao_atendimento_relacionamento.prop("checked","true"===a.padrao_atendimento_relacionamento.toString()).change(),o.chk_padrao_atendimento_relacionamento.prop("disabled",e),o.cbo_tipo.val(tipo_local_armazenamento(a.tipo)).selectpicker("refresh"),o.edt_usuario.val(a.usuario),o.edt_senha.val(a.senha),o.edt_porta.val(a.porta),o.edt_endereco.val(a.endereco),"F"==o.cbo_tipo.val()?(o.tipo_ftp.removeClass("hidden"),o.edt_diretorio.val("/"),o.chk_padrao_sistema.prop("checked",!1).change(),o.chk_padrao_sistema.prop("disabled",!0),o.btn_testar.removeClass("hidden")):(o.tipo_ftp.addClass("hidden"),o.btn_testar.addClass("hidden")),o.validar_diretorio()})},this.validar_diretorio=function(){WS.get("local_armazenamento/validar_diretorio/",{diretorio:o.edt_diretorio.val()},function(a){o.div_diretorio_ok.hide(),o.div_diretorio.removeClass("col-sm-11"),o.div_diretorio.removeClass("col-sm-12"),o.div_diretorio.addClass("col-sm-12"),1!=a&&(o.div_diretorio_ok.show(),o.div_diretorio.removeClass("col-sm-12"),o.div_diretorio.addClass("col-sm-11"))})},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){o.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){var a={local_armazenamento_id:o.local_armazenamento_id,nome:o.edt_nome.val(),diretorio:o.edt_diretorio.val(),padrao_chamados:o.chk_padrao_chamados.prop("checked"),padrao_sistema:o.chk_padrao_sistema.prop("checked"),padrao_processos:o.chk_padrao_processos.prop("checked"),padrao_documentos:o.chk_padrao_documentos.prop("checked"),padrao_projeto:o.chk_padrao_projeto.prop("checked"),padrao_atendimento_relacionamento:o.chk_padrao_atendimento_relacionamento.prop("checked"),tipo:o.cbo_tipo.val()};"F"==o.cbo_tipo.val()&&(a.endereco=o.edt_endereco.val(),a.porta=o.edt_porta.val(),a.usuario=o.edt_usuario.val(),a.senha=o.edt_senha.val(),a.padrao_sistema=!1),WS.post("local_armazenamento/salvar",a,function(a){o.local_armazenamento_id=a.id,alert_saved(a.nome+" salvo com sucesso"),o.unload()},[o.btn_testar,o.btn_salvar])}),this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("local_armazenamento/excluir",{local_armazenamento_id:o.local_armazenamento_id},function(a){alert_saved(a.nome+" excluido com sucesso"),o.unload()})}),this.edt_diretorio.unbind("keyup"),this.edt_diretorio.keyup($.debounce(500,o.validar_diretorio)),this.cbo_tipo.unbind("change").change(function(a){"F"==$(this).val()?alert_modal("Aviso!","Deseja alterar o destino para a raíz do FTP?","Sim",function(){o.tipo_ftp.removeClass("hidden"),o.edt_diretorio.val("/"),o.chk_padrao_sistema.prop("checked",!1).change(),o.chk_padrao_sistema.prop("disabled",!0),o.btn_testar.removeClass("hidden")},!0,"Não",null,function(){}):(o.tipo_ftp.addClass("hidden"),o.btn_testar.addClass("hidden"),o.chk_padrao_sistema.prop("disabled",!1))}),this.btn_exibir_senha.unbind("click").click(function(a){var e="true"==$(this).attr("data-show-password");e=!e,$(this).attr("data-show-password",e),e?o.edt_senha.attr("type","text"):o.edt_senha.attr("type","password")}),this.btn_testar.unbind("click").click(function(a){var e=function(){o.status_conexao.find("label small").text(o.status_conexao.find("label small").attr("data-original")),o.status_conexao.find("i").removeClass("fa-check").addClass("fa-spinner fa-pulse"),o.status_conexao.removeClass("alert-success alert-warning alert-danger"),o.status_conexao.addClass("alert-warning"),o.status_conexao.addClass("hidden")};e(),o.status_conexao.removeClass("hidden");var t={endereco:o.edt_endereco.val(),porta:o.edt_porta.val(),usuario:o.edt_usuario.val(),senha:o.edt_senha.val(),diretorio:o.edt_diretorio.val()};WS.post({route:"local_armazenamento/validar_ftp",data:t,type:"POST",func_response:function(a){var t=a;o.div_diretorio_ok.hide(),o.div_diretorio.removeClass("col-sm-11"),o.div_diretorio.removeClass("col-sm-12"),o.div_diretorio.addClass("col-sm-12"),a||(o.div_diretorio_ok.show(),o.div_diretorio.removeClass("col-sm-12"),o.div_diretorio.addClass("col-sm-11")),setTimeout(function(){o.status_conexao.addClass("hidden"),clearTimeout(this),t&&(o.status_conexao.removeClass("hidden"),o.status_conexao.find("i").removeClass("fa-spinner fa-pulse fa-fan").addClass("fa-check"),o.status_conexao.find("label small").text("Conexão estabelecida."),o.status_conexao.removeClass("alert-success alert-warning alert-danger"),o.status_conexao.addClass("alert-success"),setTimeout(function(){e(),clearTimeout(this)},1600))},1500)},func_fail:function(){setTimeout(function(){o.status_conexao.addClass("hidden"),clearTimeout(this),o.status_conexao.removeClass("hidden"),o.status_conexao.find("i").removeClass("fa-spinner fa-pulse").addClass("fa-ban"),o.status_conexao.find("label small").text("Não foi possivel estabelecer conexão."),o.status_conexao.removeClass("alert-success alert-warning alert-danger"),o.status_conexao.addClass("alert-danger"),setTimeout(function(){e(),clearTimeout(this)},1600)},1500)},disable_buttons:[o.btn_salvar,o.btn_testar]})})}});