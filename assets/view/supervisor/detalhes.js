var isMobile=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),define(["react","react-dom","./../componentes_react/CboUsuarios"],function(o,i,a){return function(e){"use strict";var s=this;this.html_id=e,this.dialog=$("#"+this.html_id),this.title="Detalhe Supervisor",this.tipo=null,this.onclose=null,this.onselect=null,this.onsave=null,this.ondelete=null,this.tab_listagem=this.dialog.find(".tab_listagem"),this.btn_add_usuario=this.dialog.find(".btn_add_usuario"),this.btn_add_grupo_usuario=this.dialog.find(".btn_add_grupo_usuario"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.btn_excluir=this.dialog.find(".btn_excluir"),this.th_agenda=this.dialog.find(".th_agenda"),this.th_tarefa=this.dialog.find(".th_tarefa"),this.th_chamados=this.dialog.find(".th_chamados"),this.th_documentos=this.dialog.find(".th_documentos"),this.th_processos=this.dialog.find(".th_processos"),this.th_projetos=this.dialog.find(".th_projetos"),this.th_crm=this.dialog.find(".th_crm"),this.th_social=this.dialog.find(".th_social"),this.th_inovacao=this.dialog.find(".th_inovacao"),this.th_empenho=this.dialog.find(".th_empenho"),this.th_superior_imediato=this.dialog.find(".th_superior_imediato"),this.div_componente_usuario=this.dialog.find(".div_componente_usuario"),this.cboUsuarios=o.createElement(a,null,null),this.supervisor_usuario_id=null,this.supervisor_usuario_nome=null,this.supervisor_grupo_usuarios_id=null,this.supervisor_grupo_usuarios_nome=null,this.arr_supervisionados=[],this.show=function(o,a,e,t,n){switch(s.supervisor_usuario_id=o,s.supervisor_usuario_nome=a,s.supervisor_grupo_usuarios_id=e,s.supervisor_grupo_usuarios_nome=t,s.tipo=n,i.render(s.cboUsuarios,s.div_componente_usuario[0]),s.cboUsuarios.props.setObjParam({EquipeInterna:!0,EmpresaId:App.temp.empresa,LabelCampo:"Supervisor",ExibirGrupos:!0}),n){case FORMULARIO.NOVO:s.btn_salvar.show(),s.btn_excluir.hide(),App.titulo_aba(s.html_id,"Novo supervisor");break;case FORMULARIO.EDITAR:s.btn_salvar.show(),s.btn_excluir.hide();break;case FORMULARIO.VISUALIZAR:s.btn_salvar.hide(),s.btn_excluir.hide();break;case FORMULARIO.EXCLUIR:s.btn_salvar.hide(),s.btn_excluir.show()}void 0!==o&&o?(s.cboUsuarios.props.setUsuario({usuario_id:o,usuario_nome:a}),App.titulo_aba(s.html_id,"Supervisor "+a),s.preencher()):void 0!==e&&e?(s.cboUsuarios.props.setUsuario({usuario_id:e,usuario_nome:t}),App.titulo_aba(s.html_id,"Supervisor "+t),s.preencher()):s.cboUsuarios.props.setFunctionSelect(s.evt_alterar_supervisor)},this.close=function(){void 0!==s.onclose&&s.onclose&&s.onclose()},this.unload=function(){s.close(),View.unload(this.html_id)},this.permite_alterar=function(o){s.tab_listagem.find("button").prop("disabled",!o),s.tipo!=FORMULARIO.NOVO&&s.cboUsuarios.props.setCampoUsuarioLeitura(!0)},this.preencher=function(){""!=s.supervisor_usuario_id&&WS.get("supervisor/objeto/",{usuario_id:s.supervisor_usuario_id,grupo_usuarios_id:s.supervisor_grupo_usuarios_id},function(o){switch(s.arr_supervisionados=o.supervisionados,s.render_supervisionados(),s.tipo){case FORMULARIO.NOVO:case FORMULARIO.EDITAR:s.permite_alterar(!0);break;case FORMULARIO.VISUALIZAR:case FORMULARIO.EXCLUIR:s.permite_alterar(!1)}})},this.evt_alterar_supervisor=function(){"usuarios"==s.cboUsuarios.props.UsuarioSelecionado.tipo?(s.supervisor_usuario_id=s.cboUsuarios.props.UsuarioSelecionado.id,s.supervisor_grupo_usuarios_id=null):"grupo_usuarios"==s.cboUsuarios.props.UsuarioSelecionado.tipo&&(s.supervisor_grupo_usuarios_id=s.cboUsuarios.props.UsuarioSelecionado.id,s.supervisor_usuario_id=null),s.tipo==FORMULARIO.NOVO&&""==s.supervisor_usuario_id&&(s.permite_alterar(!1),s.tab_listagem.find("tr:gt(1)").remove()),s.preencher()},this.render_supervisionados=function(){var o=s.tab_listagem.find("tbody"),i=o.find("tr:first");$(s.arr_supervisionados).each(function(o,i){void 0===s.arr_supervisionados[o].removido&&(s.arr_supervisionados[o].removido=!1)});var a=s.arr_supervisionados.filter(function(o){var i=!0;return!0===o.removido&&(i=!1),i});s.tab_listagem.find("tr:gt(1)").remove(),$(a).each(function(a,e){!function(a,e){var t=i.clone();t.removeAttr("template-row"),t.css("display","");var n=$('<span class="label lb_tipo" style="margin: 5px;"></span>');e.nome_usuario?(n.addClass("tipo_executor label-info"),n.attr("title","Usuário"),n.attr("data-original-title","Usuário"),n.text("U"),n.attr("tipo","usuario")):e.nome_grupo_usuarios&&(n.addClass("tipo_executor label-warning"),n.attr("title","Grupo de Usuários"),n.attr("data-original-title","Grupo de Usuários"),n.text("GU"),n.attr("tipo","grupo_usuarios")),n.tooltip();var r=$(t.find("[template-field='nome']"));r.html(n),r.append(e.nome_usuario?e.nome_usuario:e.nome_grupo_usuarios?e.nome_grupo_usuarios:""),$(t.find("[template-field='email']")).text(e.email?e.email:"");var c=$(t.find(".btn_usuario_remover"));c.unbind("click"),c.click(function(){s.arr_supervisionados[a].removido=!0,t.remove()});var p=$(t.find("[template-field='chk_agenda']"));p.removeClass("template_switch"),p.prop("checked",e.agenda),p.unbind("change"),p.change(function(){s.arr_supervisionados[a].agenda=$(this).prop("checked")});var d=$(t.find("[template-field='chk_tarefa']"));d.removeClass("template_switch"),d.prop("checked",e.tarefa),d.unbind("change"),d.change(function(){s.arr_supervisionados[a].tarefa=$(this).prop("checked")});var h=$(t.find("[template-field='chk_chamados']"));h.removeClass("template_switch"),h.prop("checked",e.chamado),h.unbind("change"),h.change(function(){s.arr_supervisionados[a].chamado=$(this).prop("checked")});var u=$(t.find("[template-field='chk_documentos']"));u.removeClass("template_switch"),u.prop("checked",e.documento),u.unbind("change"),u.change(function(){s.arr_supervisionados[a].documento=$(this).prop("checked")});var l=$(t.find("[template-field='chk_processos']"));l.removeClass("template_switch"),l.prop("checked",e.processo),l.unbind("change"),l.change(function(){s.arr_supervisionados[a].processo=$(this).prop("checked")});var _=$(t.find("[template-field='chk_projetos']"));_.removeClass("template_switch"),_.prop("checked",e.projeto),_.unbind("change"),_.change(function(){s.arr_supervisionados[a].projeto=$(this).prop("checked")});var m=$(t.find("[template-field='chk_crm']"));m.removeClass("template_switch"),m.prop("checked",e.atendimento_relacionamento),m.unbind("change"),m.change(function(){s.arr_supervisionados[a].atendimento_relacionamento=$(this).prop("checked")});var v=$(t.find("[template-field='chk_social']"));v.removeClass("template_switch"),v.prop("checked",e.rede_social),v.unbind("change"),v.change(function(){s.arr_supervisionados[a].rede_social=$(this).prop("checked")});var g=$(t.find("[template-field='chk_inovacao']"));g.removeClass("template_switch"),g.prop("checked",e.inovacao),g.unbind("change"),g.change(function(){s.arr_supervisionados[a].inovacao=$(this).prop("checked")});var f=$(t.find("[template-field='chk_empenho']"));f.removeClass("template_switch"),f.prop("checked",e.empenho),f.unbind("change"),f.change(function(){s.arr_supervisionados[a].empenho=$(this).prop("checked")});var k=$(t.find("[template-field='chk_superior_imediato']"));k.removeClass("template_switch"),k.prop("checked",e.superior_imediato),k.unbind("change"),k.change(function(){s.arr_supervisionados[a].superior_imediato=$(this).prop("checked")}),s.supervisor_grupo_usuarios_id>0&&k.prop({checked:!1,disabled:!0}),t.appendTo(o)}(a,e)}),App.aplicar_checkbox(o)},this.th_agenda.unbind("click"),this.th_agenda.click(function(){var o=s.tab_listagem.find("[template-field='chk_agenda']");s.th_agenda.find(".up").remove(),s.th_agenda.find(".down").remove(),s.th_agenda.hasClass("ativo")?(s.th_agenda.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_agenda.addClass("inativo"),s.th_agenda.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_agenda.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_agenda.addClass("ativo"),s.th_agenda.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_tarefa.unbind("click"),this.th_tarefa.click(function(){var o=s.tab_listagem.find("[template-field='chk_tarefa']");s.th_tarefa.find(".up").remove(),s.th_tarefa.find(".down").remove(),s.th_tarefa.hasClass("ativo")?(s.th_tarefa.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_tarefa.addClass("inativo"),s.th_tarefa.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_tarefa.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_tarefa.addClass("ativo"),s.th_tarefa.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_chamados.unbind("click"),this.th_chamados.click(function(){var o=s.tab_listagem.find("[template-field='chk_chamados']");s.th_chamados.find(".up").remove(),s.th_chamados.find(".down").remove(),s.th_chamados.hasClass("ativo")?(s.th_chamados.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_chamados.addClass("inativo"),s.th_chamados.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_chamados.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_chamados.addClass("ativo"),s.th_chamados.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_documentos.unbind("click"),this.th_documentos.click(function(){var o=s.tab_listagem.find("[template-field='chk_documentos']");s.th_documentos.find(".up").remove(),s.th_documentos.find(".down").remove(),s.th_documentos.hasClass("ativo")?(s.th_documentos.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_documentos.addClass("inativo"),s.th_documentos.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_documentos.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_documentos.addClass("ativo"),s.th_documentos.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_processos.unbind("click"),this.th_processos.click(function(){var o=s.tab_listagem.find("[template-field='chk_processos']");s.th_processos.find(".up").remove(),s.th_processos.find(".down").remove(),s.th_processos.hasClass("ativo")?(s.th_processos.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_processos.addClass("inativo"),s.th_processos.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_processos.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_processos.addClass("ativo"),s.th_processos.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_projetos.unbind("click"),this.th_projetos.click(function(){var o=s.tab_listagem.find("[template-field='chk_projetos']");s.th_projetos.find(".up").remove(),s.th_projetos.find(".down").remove(),s.th_projetos.hasClass("ativo")?(s.th_projetos.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_projetos.addClass("inativo"),s.th_projetos.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_projetos.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_projetos.addClass("ativo"),s.th_projetos.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_crm.unbind("click"),this.th_crm.click(function(){var o=s.tab_listagem.find("[template-field='chk_crm']");s.th_crm.find(".up").remove(),s.th_crm.find(".down").remove(),s.th_crm.hasClass("ativo")?(s.th_crm.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_crm.addClass("inativo"),s.th_crm.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_crm.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_crm.addClass("ativo"),s.th_crm.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_social.unbind("click"),this.th_social.click(function(){var o=s.tab_listagem.find("[template-field='chk_social']");s.th_social.find(".up").remove(),s.th_social.find(".down").remove(),s.th_social.hasClass("ativo")?(s.th_social.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_social.addClass("inativo"),s.th_social.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_social.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_social.addClass("ativo"),s.th_social.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_empenho.unbind("click"),this.th_empenho.click(function(){var o=s.tab_listagem.find("[template-field='chk_empenho']");s.th_empenho.find(".up").remove(),s.th_empenho.find(".down").remove(),s.th_empenho.hasClass("ativo")?(s.th_empenho.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_empenho.addClass("inativo"),s.th_empenho.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_empenho.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_empenho.addClass("ativo"),s.th_empenho.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.th_superior_imediato.unbind("click"),this.th_superior_imediato.click(function(){if(!(s.supervisor_grupo_usuarios_id>0)){var o=s.tab_listagem.find("[template-field='chk_superior_imediato']");s.th_superior_imediato.find(".up").remove(),s.th_superior_imediato.find(".down").remove(),s.th_superior_imediato.hasClass("ativo")?(s.th_superior_imediato.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_superior_imediato.addClass("inativo"),s.th_superior_imediato.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_superior_imediato.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_superior_imediato.addClass("ativo"),s.th_superior_imediato.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}}),this.th_inovacao.unbind("click"),this.th_inovacao.click(function(){var o=s.tab_listagem.find("[template-field='chk_inovacao']");s.th_inovacao.find(".up").remove(),s.th_inovacao.find(".down").remove(),s.th_inovacao.hasClass("ativo")?(s.th_inovacao.append('<span class="glyphicon glyphicon-remove down"></span>'),s.th_inovacao.addClass("inativo"),s.th_inovacao.removeClass("ativo"),$(o).each(function(o,i){$(i).prop("checked",!1).change()})):(s.th_inovacao.append('<span class="glyphicon glyphicon-ok up"></span>'),s.th_inovacao.addClass("ativo"),s.th_inovacao.removeClass("inativo"),$(o).each(function(o,i){$(i).prop("checked",!0).change()}))}),this.btn_add_usuario.unbind("click"),this.btn_add_usuario.click(function(){View.load("usuario/selecionar",function(o,i){i.show(function(o){var i=!1;o.usuario_id==s.supervisor_usuario_id&&(i=!0);var a=!1;if($(s.arr_supervisionados).each(function(i,e){e.usuario_id==o.usuario_id&&(a=!0,s.arr_supervisionados[i].removido=!1)}),!a&&!i){var e={agenda:!1,tarefa:!1,chamado:!1,documento:!1,processo:!1,projeto:!1,atendimento_relacionamento:!1,inovacao:!1,empenho:!1,rede_social:!1};e.usuario_id=o.usuario_id,e.nome_usuario=o.nome,e.email=o.email,s.arr_supervisionados.push(e)}s.render_supervisionados()})})}),this.btn_add_grupo_usuario.unbind("click"),this.btn_add_grupo_usuario.click(function(){View.load("grupo_usuarios/selecionar",function(o,i){i.show(function(o){var i=!1;if($(s.arr_supervisionados).each(function(a,e){e.hasOwnProperty("grupo_usuarios_id")&&e.grupo_usuarios_id==o.grupo_usuarios_id&&(i=!0,s.arr_supervisionados[a].removido=!1)}),!i){var a={agenda:!1,tarefa:!1,chamado:!1,documento:!1,processo:!1,projeto:!1,atendimento_relacionamento:!1,inovacao:!1,empenho:!1,rede_social:!1};a.grupo_usuarios_id=o.grupo_usuarios_id,a.nome_grupo_usuarios=o.nome,s.arr_supervisionados.push(a)}s.render_supervisionados()})})}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){s.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){if(0==s.arr_supervisionados.length){var o=new Validation;return o.add(new ValidationMessage(Validation.CODES.ERR_FIELD,"Informe os supervisionados")),void alert_modal("Validação",o)}var i={usuario_id:s.supervisor_usuario_id,grupo_usuarios_id:s.supervisor_grupo_usuarios_id,supervisionados:s.arr_supervisionados};WS.post("supervisor/salvar",i,function(o){s.supervisor_usuario_id=o.id,alert_saved((o.nome_usuario?o.nome_usuario:o.nome_grupo_usuarios)+" salvo com sucesso"),s.vincular_supervisionados_filtro_agenda(),s.unload()})}),this.vincular_supervisionados_filtro_agenda=function(){WS.get("parametro_usuario/get/",{nome:"agenda",usuario_id:s.supervisor_usuario_id},function(o){if(null!==o&&void 0!==o.supervisionados){o.supervisionados=[];for(var i=0;i<s.arr_supervisionados.length;i++)!s.arr_supervisionados[i].removido&&s.arr_supervisionados[i].agenda&&o.supervisionados.push(s.arr_supervisionados[i].usuario_id);WS.post("parametro_usuario/set/",{nome:"agenda",usuario_id:s.supervisor_usuario_id,valor:JSON.stringify(o)},function(o){})}})},this.btn_excluir.unbind("click"),this.btn_excluir.click(function(){WS.post("supervisor/excluir",{usuario_id:s.supervisor_usuario_id,grupo_usuarios_id:s.supervisor_grupo_usuarios_id},function(o){alert_saved((o.nome_usuario?o.nome_usuario:o.nome_grupo_usuarios)+" excluido com sucesso"),s.unload()})})}});