define(["react","react-dom","./ListarAtividadeProjeto"],function(t,e,a){return function(o){"use strict";var i=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.title="Atividade de Projeto",this.btn_email=this.dialog.find(".btn_email"),this.btn_projeto=this.dialog.find(".btn_editar_projeto"),this.btn_importar_template=this.dialog.find(".btn_importar_template"),this.btn_exportar=this.dialog.find(".btn_exportar"),this.btn_exportar_marco=this.dialog.find(".btn_exportar_marco"),this.btn_importar=this.dialog.find(".btn_importar"),this.btn_importar_msproject=this.dialog.find(".btn_importar_msproject"),this.btn_exportar_msproject=this.dialog.find(".btn_exportar_msproject"),this.info_importacao_pendente=this.dialog.find(".info_importacao_pendente"),this.dx_listagem_atividade_projeto=this.dialog.find(".dx_listagem_atividade_projeto"),this.ListarAtividadeProjeto=t.createElement(a,null,null),this.obj_solicitacao={},this.template="N",this.projeto_id=null,this.email_cliente="",this.projeto=null,this.porcentagem_concluido=null,this.grupo_usuarios_equipe=[],this.sugere_codigo=!1,this.executores_selecionados=[],this.grupo_usuarios_executores_selecionados=[],this.arr_atividades_geradas=[],this.projeto_atividade_classificacoes=!1,this.permitir_apontamento_projeto_concluido=null,this.apontamento_por=null,this.qtde_atividades=null,this.atividades=null,this.aux=null,this.atividade=null,this.qtde_atv_filhos=null,this.gerente_projeto=!1,this.planejamento_atividade=!1,this.planejamento_recursos=!1,this.planejamento_financeiro=!1,this.planejamento_datas=!1,this.show=function(t,e){i.projeto_id=t,i.template=e,i.listar()},this.listar=function(){WS.get({route:"atividade_projeto/listar/",data:{projeto_id:i.projeto_id},func_response:function(t){i.qtde_atividades=t.atividades.length,t.atividades.unshift({atividade_simplificada:t.projeto.nome,id:"raiz",projeto_atividade_sintetica_pai_id:null,tipo_atividade:"P",marco:!1,horas_previstas:"000:00",previsao_inicio:t.projeto.menor_previsao_inicio.substr(0,10),prazo:t.projeto.maior_prazo.substr(0,10),inicio:t.projeto.menor_inicio.substr(0,10),conclusao:t.projeto.maior_conclusao.substr(0,10),total_peso_atividades:t.projeto.total_peso_atividades,projeto_porcentagem_concluido:t.projeto.porcentagem_concluido,sequencia:1}),i.projeto=t.projeto,i.permitir_apontamento_projeto_concluido=!!t.permitir_apontamento_projeto_concluido,i.apontamento_por=t.projeto.apontamento_por,i.obj_solicitacao=t.solicitacao,i.carregar_permissoes(),i.preencher(t)},html_id:i.html_id})},this.carregar_permissoes=function(){Object.keys(i.projeto.equipe_toda).map(function(t){var e=i.projeto.equipe_toda[t];e.usuario_id==App.sessao.dados.usuario_id&&(App.sessao.dados.admin||"S"===e.gerente_projeto?i.gerente_projeto=!0:(i.planejamento_atividade="S"==e.planejamento_atividade,i.planejamento_recursos="S"==e.planejamento_recursos,i.planejamento_financeiro="S"==e.planejamento_financeiro,i.planejamento_datas="S"==e.planejamento_datas))})},this.preencher=function(t){if(e.render(i.ListarAtividadeProjeto,i.dx_listagem_atividade_projeto[0]),i.ListarAtividadeProjeto.props.setParams({div:i.dx_listagem_atividade_projeto,html_id:i.html_id,data:t,dialog:i.dialog,parametro_usuario:"projeto_"+i.projeto_id,somente_leitura:!1,diferenca_altura:76,gerente_projeto:i.gerente_projeto,planejamento_atividade:i.planejamento_atividade,planejamento_recursos:i.planejamento_recursos,planejamento_financeiro:i.planejamento_financeiro,planejamento_datas:i.planejamento_datas,projeto:i.projeto,template:i.template,grupo_usuarios_equipe:i.grupo_usuarios_equipe,permitir_apontamento_projeto_concluido:i.permitir_apontamento_projeto_concluido,projeto_apontamento_por:i.apontamento_por,fn_listar:i.listar,obj_solicitacao:i.obj_solicitacao}),i.projeto.importacao_template_pendente){const t=i.projeto.dados_importacao_pendente;i.info_importacao_pendente.removeClass("hidden"),i.info_importacao_pendente.on("click",()=>{window.alertaPopUp("Importação de Template Pendente","Há uma importação de template pendente para este Projeto. A importação é realizada pelo Job <strong>Fila_Evento.job.php</strong>.<br><br><span>Dados da importação:</span><br><br><ul><li><strong>ID</strong>: "+t.id+"</li><li><strong>Solicitado em</strong>: "+t.data.format_date_time()+"</li><li><strong>Solicitado por</strong>: "+t.usuario+"</li></ul>")})}},this.btn_email.unbind("click").click(function(){View.load("atividade_projeto/email_atividade",function(t,e){e.onclose=i.refresh,e.show(i.projeto_id,i.email_cliente,i.projeto.equipe)})}),this.btn_projeto.unbind("click").click(function(){View.load("projeto/detalhes",function(t,e){e.onconfirm=function(t){i.sugere_codigo="S"==t.sugerir_codigo},e.onclose=i.listar,e.show(i.projeto_id,FORMULARIO.EDITAR,null,null)},View.ABA.MULTIPLAS)}),this.btn_importar_template.unbind("click").click(function(){View.load("atividade_projeto/importar_template",function(t,e){e.onclose=function(){i.listar()},e.show(i.projeto_id)})}),this.btn_exportar.unbind("click").click(function(){App.obter_token_publico(function(t){App.download(WS_URI+"projeto/gera_excel/?projeto_id="+i.projeto_id+"&token_publico="+t)})}),this.btn_exportar_marco.unbind("click").click(function(){App.obter_token_publico(function(t){App.download(WS_URI+"projeto/gera_excel/?projeto_id="+i.projeto_id+"&exibir_apenas_marco=true&token_publico="+t)})}),this.btn_importar.unbind("click").click(function(){View.load("atividade_projeto/importar_excel",function(t,e){e.onclose=function(){i.listar()},e.show(i.projeto_id,i.projeto.cliente_id)})}),this.btn_importar_msproject.unbind("click").click(function(){View.load("atividade_projeto/importacao_msproject",function(t,e){e.onclose=function(){i.listar()},e.show(i.projeto_id,i.qtde_atividades)})}),this.btn_exportar_msproject.unbind("click").click(function(){App.obter_token_publico(function(t){App.download(WS_URI+"projeto/gera_msproject/?projeto_id="+i.projeto_id+"&token_publico="+t+"&exporta_msproject=true")})}),this.gerar_detalhes=function(t,e){var a=md5("view_"+i.html_id+"_descricao_"+t),o=i.table_body.find("[id="+a+"]");if(o.length>0)return $(o).toggle("slow"),void $(e).find(".mais_detalhes span").toggleClass("text-info text-danger");WS.get({route:"atividade_projeto/get_detalhes_atividade/",data:{atividade_id:t},func_response:function(t){if(t)for(var o,r=0;r<t.length;r++)!function(t){var r=16;"S"!=i.mostrar_percentual_conclusao&&(i.ocultar_coluna("percentual_conclusao"),r--),"S"!=i.mostrar_horas_previstas&&(i.ocultar_coluna("horas_previstas"),r--),"S"!=i.mostrar_horas_trabalhadas&&(i.ocultar_coluna("horas_trabalhadas"),r--),"S"!=i.mostrar_saldo_horas&&(i.ocultar_coluna("saldo_horas"),r--);var n="<tr style='background:#f5f5f5;' template-field='descricao' id='"+a+"' reference-id='"+$(e).attr("id")+"'>";n+="   <td colspan='"+r+"'>",n+="   \t<div>",n+="   \t\t<b>Descrição da Atividade: <b>",n+="   \t\t<span>"+t+"</span>",n+="   \t</div>",n+="   </td>",n+="</tr>",o=$.parseHTML(n),$(o).show("slow",function(){$(this).css("display","table-row")});var d=$(e).attr("data-details-show");if("false"==d){try{$(o).removeClass("hidden")}catch(t){}d="true"}else"true"==d&&($(o).addClass("hidden"),d="false");var s=i.table_body.find("[id="+a+"]");0===s.length?$(e).after(o):($(s).detach(),$(e).after(o)),$(e).find(".mais_detalhes span").toggleClass("text-info text-danger"),$(e).attr("data-details-show",d)}(t[r].atividade)},html_id:i.html_id})},this.retrair=function(t,e){void 0===e&&(e=!1),i.fix_scroll();var a=parseInt($(t).attr("data-nivel"),10),o=parseInt($(t).attr("raiz"),10),r=$(t).find('[template-field="nome_atividade"] span:nth-of-type(1)'),n=$(t).nextAll('[raiz="'+o+'"]');$(t).attr("data-parent-retraido",e);for(var d=0;d<n.length;d++){if(!(a<parseInt($(n[d]).attr("data-nivel"),10)))return;if(e){if($(r).removeClass("glyphicon-triangle-bottom"),$(r).addClass("glyphicon-triangle-right"),$(n[d]).attr("data-retraido","true"),void 0!==$(n[d]).attr("data-retraido-by")&&null!==$(n[d]).attr("data-retraido-by")&&""!==$(n[d]).attr("data-retraido-by")||$(n[d]).attr("data-retraido-by",md5($(t).attr("data-id"))),$(n[d]).animate({opacity:0},{duration:200,complete:function(){$(this).addClass("hidden")}}),"simples"==$(n[d]).attr("data-tipo")){var s=$(n[d]).attr("id");i.table_body.find('[template-field="descricao"][reference-id="'+s+'"]').animate({opacity:0},{duration:200,complete:function(){$(this).addClass("hidden")}})}}else{$(r).addClass("glyphicon-triangle-bottom"),$(r).removeClass("glyphicon-triangle-right");var l=md5($(t).attr("data-id"));$(n[d]).attr("data-retraido-by")==l&&($(n[d]).attr("data-retraido-by",""),$(n[d]).removeClass("hidden").animate({opacity:1},200),"simples"==$(n[d]).attr("data-tipo"))&&(s=$(n[d]).attr("id"),i.table_body.find('[template-field="descricao"][reference-id="'+s+'"]').removeClass("hidden").animate({opacity:1},200)),"simples"==$(n[d]).attr("data-tipo")?$(n[d]).attr("data-retraido","false"):"sintetica"==$(n[d]).attr("data-tipo")&&($(n[d]).attr("data-retraido","false"),$(n[d]).attr("data-parent-retraido","false"))}}},this.realocamento_descricao=function(){for(var t=i.table_body.find('[template-field="descricao"]'),e=0;e<t.length;e++){var a=$(t[e]).attr("reference-id");i.table_body.find('[id="'+a+'"]').after(t[e])}},event_salvar(i.dialog,i.dx_listagem_atividade_projeto),event_desfazer(i.dialog,i.dx_listagem_atividade_projeto),i.unload=function(){View.unload(this.html_id)}}});