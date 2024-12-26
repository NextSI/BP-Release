define([],function(){return function(a){"use strict";var e=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.title="Agenda (Antigo)",this.tbl_agenda=this.dialog.find(".tbl_agenda"),this.tbl_agenda_head=this.tbl_agenda.find("thead tr"),this.tbl_agenda_body=this.tbl_agenda.find("tbody"),this.ul_context_menu_agenda=this.dialog.find(".ul_context_menu_agenda"),this.context_menu_dia=this.dialog.find(".context_menu_dia"),this.context_menu_oportunidade=this.dialog.find(".context_menu_oportunidade"),this.opt_realizado=this.dialog.find(".opt_realizado"),this.btn_filtro=this.dialog.find(".btn_filtro"),this.btn_email_cliente=this.dialog.find(".btn_email_cliente"),this.btn_refresh=this.dialog.find(".btn_refresh"),this.wrapper=this.dialog.find(".wrapper"),this.area_transferencia=null,this.dias_semana=new Array(App.lang.dia_semana.domingo,App.lang.dia_semana.segunda,App.lang.dia_semana.terca,App.lang.dia_semana.quarta,App.lang.dia_semana.quinta,App.lang.dia_semana.sexta,App.lang.dia_semana.sabado),this.data_inicio=null,this.data_fim=null,this.qtd_dias=null,this.grupo_usuarios_id=null,this.tipo_agenda=null,this.usuarios_id=null,this.exibir_endereco=!0,this.grupos_ativos_id=null,this.ativos_id=null,this.show=function(){e.wrapper.css("height","calc(100vh - 59px)");var a=App.get_parametro_usuario("agenda");if("string"==typeof a&&(a=JSON.parse(a)),e.data_inicio=a.data_inicio,e.data_fim=a.data_fim,e.qtd_dias=a.qtd_dias,e.tipo_agenda=a.tipo_agenda,e.grupo_usuarios_id=a.grupo_usuarios,e.usuarios_id=a.usuarios,e.exibir_endereco=a.exibir_endereco,e.grupos_ativos_id=a.grupos_ativos,e.ativos_id=a.ativos,e.tipo_agenda!=FILTRO_AGENDA.POR_SEMANA&&e.tipo_agenda)e.tipo_agenda==FILTRO_AGENDA.POR_DATA&&(e.data_inicio=a.data_inicio,e.data_fim=a.data_fim);else{if(1==App.temp.abertura_inicial_agenda||(new Date).getWeek()>parseInt(a.semana_atual))e.data_inicio=formatDate(getSegundaFeira(new Date),!0),e.data_fim=formatDate(AddDays(getSegundaFeira(new Date),7),!0),App.set_parametro_usuario("agenda",{semana_atual:(new Date).getWeek()});else if(null==e.data_inicio){var i=getDateNow(!0);e.data_inicio=i}else e.data_inicio=a.data_inicio;null==e.qtd_dias&&(e.qtd_dias=7)}e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},this.listar=function(a,i,t,o,n){var d={menuSelector:e.context_menu_oportunidade,menuSelected:function(a,i){var t=i,o=a.attr("template-oportunidade");void 0===o&&(o=a.parent().attr("template-oportunidade"));var n=a.attr("template-dia");void 0===n&&(n=a.parent().attr("template-dia")),void 0===n&&(n=a.parent().parent().attr("template-dia"));var d=a.attr("template-usuario");switch(void 0===d&&(d=a.parent().attr("template-usuario")),void 0===d&&(d=a.parent().parent().attr("template-usuario")),t){case"editar_oportunidade":void 0!==n&&void 0!==d&&void 0!==o&&View.load("oportunidade/detalhes",function(a,i){i.onclose=function(){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},i.show(o,FORMULARIO.EDITAR)},View.ABA.MULTIPLAS,null,null,{oportunidadeId:o})}}},r={menuSelector:e.context_menu_dia,menuSelected:function(a,i){var t=function(a,e,i,t){var o=null,n=void 0,d=null,r=a.closest("[template-evento]").attr("template-evento");return o=t?"["+e+"]":e,0==(d=a.parents().closest(i).find(o)).length&&(d=a.closest(i).find(o)),d.length>0?n=null!=r&&void 0!==r&&d.length>1?d.parent().find("[template-evento="+r+"]").attr(e):d.attr(e):void 0===(n=a.attr(e))&&(n=a.closest(o).attr(e)),n},o=i,n=t(a,"template-evento","td",!0),d=t(a,"dia-evento","td",!0),r=t(a,"template-dia","td",!0),s=t(a,"template-usuario","td",!0),l=t(a,"descricao-evento","td",!0),p=t(a,"convidado-evento","td",!0),_=t(a,"agenda-ativo-id","td",!0),c=t(a,"permissao-manutencao-agenda-ativo","td",!0),u=$(a).filter(".agenda_evento");0==u.length&&(u=$(a).parents(".agenda_evento"));var v=0,m=$(a).filter(".agenda_dia");0==m.length&&(m=$(a).parents(".agenda_dia"));try{v=$(u)&&+$(u).get(0).criado_por?+$(u).get(0).criado_por:0}catch(a){v=0}isNaN(_)&&(_=null);var g=a.parents("tr").find(".user_name").text(),f=u.attr("nome-ativo")||"";switch(""!=f&&(g=f+" - "+u.attr("insert-usuario-nome")),"null"===s&&(f=""),o){case"novo":void 0!==r&&void 0!==s&&((_=+$(m).attr("agenda-ativo-id"))<=0&&(g=a.parents("tr").find(".user_name").text()),View.load("agenda/agenda_evento",function(a,i){var t={evento_id:null,usuario_id:s,dia:r,usuario_nome:g,obj_dados_projeto:null,agenda_ativo_id:_,permissao_manutencao_agenda_ativo:c};i.onclose=function(){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},i.show(t)}));break;case"editar":void 0!==n?View.load("agenda/agenda_evento",function(a,i){var t={evento_id:n,usuario_id:s,dia:d,usuario_nome:g+(f.length>0?" - "+f:""),obj_dados_projeto:null,agenda_ativo_id:_,criado_por:v,convidado_evento:p,permissao_manutencao_agenda_ativo:c};i.onclose=function(){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},i.show(t)}):alert_modal(App.lang.gestao_agenda.editar_evento,App.lang.gestao_agenda.nenhum_evento_selecionado);break;case"copiar":void 0!==n?WS.get("agenda_evento/objeto/",{agenda_evento_id:n},function(a){e.area_transferencia={agenda_evento_id:a.id,agenda_evento_origem:a.id,usuario_id:a.usuario_id,dia:a.dia,hora_inicio:a.hora_inicio,hora_fim:a.hora_fim,agenda_tipo_id:a.agenda_tipo_id,agenda_local_id:a.agenda_local_id,cliente_id:a.cliente_id,projeto_id:a.projeto_id,projeto_atividade_id:a.projeto_atividade_id,descricao:a.descricao,descricao_detalhada:a.descricao_detalhada,prospect_id:a.prospect_id,empresa_id:a.empresa_id,fornecedor_id:a.fornecedor_id,agenda_ativo_id:a.agenda_ativo_id,evento_pessoal:a.evento_pessoal}}):alert_modal(App.lang.ctrl_ccp.copiar,App.lang.gestao_agenda.nenhum_evento_selecionado);break;case"colar":if(e.area_transferencia){if(void 0!==r&&void 0!==s){var h="";e.area_transferencia.usuario_id>0?h="usuario":e.area_transferencia.agenda_ativo_id>0&&(h="ativo");var b="";if("null"!==s&&parseInt(s,10)>0?b="usuario":"null"!==_&&parseInt(_,10)>0&&(b="ativo"),h!=b){alert_modal(App.lang.ctrl_ccp.colar,"Não é possível colar eventos de ativo em usuários e vice-versa.");break}(0==e.area_transferencia.agenda_ativo_id||"null"!==s&&parseInt(s,10)>0)&&parseInt(_,10)<=0&&(_=null),WS.post("agenda_evento/salvar/",{agenda_evento_id:null,usuario_id:s,dia:r,hora_inicio:e.area_transferencia.hora_inicio,hora_fim:e.area_transferencia.hora_fim,agenda_tipo_id:e.area_transferencia.agenda_tipo_id,agenda_local_id:e.area_transferencia.agenda_local_id,cliente_id:e.area_transferencia.cliente_id,projeto_id:e.area_transferencia.projeto_id,projeto_atividade_id:e.area_transferencia.projeto_atividade_id,descricao:e.area_transferencia.descricao,descricao_detalhada:e.area_transferencia.descricao_detalhada,prospect_id:e.area_transferencia.prospect_id,empresa_id:e.area_transferencia.empresa_id,fornecedor_id:e.area_transferencia.fornecedor_id,agenda_ativo_id:e.area_transferencia.agenda_ativo_id,agenda_evento_origem:e.area_transferencia.agenda_evento_origem,evento_pessoal:e.area_transferencia.evento_pessoal},function(a){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},null,null,null,null,null,e.html_id)}}else alert_modal(App.lang.ctrl_ccp.colar,App.lang.gestao_agenda.copie_evento);break;case"realizado":alert_modal("Evento Agenda",'Deseja realmente marcar "'+decodeURI(l)+'" como realizado ?',"Sim",function(){WS.post("agenda_evento/alterar_agenda_realizado/",{agenda_evento_id:n},function(a){alert_saved('O evento "'+decodeURI(l)+'" foi realizado'),e.btn_refresh.trigger("click")})},!0,"Não",function(){})}},menuShow:function(a,i){var t=$(a.target).filter(".agenda_dia");if(0==t.length&&0==(t=$(a.target).filter(".agenda_evento")).length&&0==(t=$(a.target).parents(".agenda_evento")).length&&(t=$(a.target).parents(".agenda_dia")),t.length>0){$(i.menuSelector).find(".opt_copiar").removeClass("hidden"),$(i.menuSelector).find(".opt_colar").removeClass("hidden"),$(i.menuSelector).find(".divider").removeClass("hidden"),$(i.menuSelector).find(".opt_editar").removeClass("hidden"),$(i.menuSelector).find(".opt_novo").removeClass("hidden"),$(i.menuSelector).removeClass("hidden");var o=parseInt($(t).attr("agenda-ativo-id"),10)||+$(t).parents(".agenda_dia").attr("agenda-ativo-id"),n="S"==$(t).attr("permissao-manutencao-agenda-ativo")||"P"==$(t).attr("permissao-manutencao-agenda-ativo")||"S"==$(t).parents(".agenda_dia").attr("permissao-manutencao-agenda-ativo")||"P"==$(t).parents(".agenda_dia").attr("permissao-manutencao-agenda-ativo"),d=+$(t).attr("template-evento"),r=+$(t).attr("template-usuario"),s=$(t).attr("evento-realizado"),l=$(t).attr("convidado-evento"),p="true"==$(t).attr("evento-particular"),_=+$(t).get(0).criado_por?+$(t).get(0).criado_por:null;"N"==s?e.opt_realizado.removeClass("hidden"):e.opt_realizado.addClass("hidden")}var c={usuario:r,evento_id:d,ativo_id:o,criado_por:_,evento_realizado:s,convidado_evento:l,evento_particular:p},u={manutencao:App.verifica_permissao(App.temp.empresa,"manutencao_agenda"),propria:App.verifica_permissao(App.temp.empresa,"manutencao_propria_agenda"),manutencao_de_ativo:App.verifica_permissao(App.temp.empresa,"manutencao_agenda_ativo"),manutencao_de_proprio_ativo:!!n},v={copiar:!1,colar:!1,novo:!1,editar:!1};"S"!=l||u.manutencao?(e.opt_realizado.parent().css("cursor","pointer"),e.opt_realizado.css("pointer-events","click")):(e.opt_realizado.parent().css("cursor","not-allowed"),e.opt_realizado.css("pointer-events","none")),function(a,e,i){var t=[];for(var o in a)a[o]&&(i=!0,t.push(o));if(i)for(var o in e)e[o]=!0}(u,v,!1),function(a,e,i){e.novo=a.propria&&i.usuario==App.sessao.dados.usuario_id||a.manutencao_de_proprio_ativo&&i.ativo_id>-1&&!i.usuario&&(i.evento_id||!i.evento_id)||a.manutencao_de_ativo&&i.ativo_id>-1&&!i.usuario||a.manutencao&&(!a.manutencao_de_ativo&&!a.manutencao_de_proprio_ativo&&-1==i.ativo_id||a.manutencao_de_ativo||a.manutencao_de_proprio_ativo),e.copiar=(a.propria&&!!i.evento_id&&((a.manutencao_de_ativo||a.manutencao_de_proprio_ativo)&&-1==i.ativo_id||!a.manutencao_de_ativo&&!a.manutencao_de_proprio_ativo&&-1==i.ativo_id)||a.manutencao_de_proprio_ativo&&i.criado_por==App.sessao.dados.usuario_id&&i.ativo_id>-1&&!i.usuario&&!!i.evento_id||a.manutencao_de_ativo&&i.ativo_id>-1&&!!i.evento_id||a.manutencao&&!!i.evento_id&&(!a.manutencao_de_ativo&&!a.manutencao_de_proprio_ativo&&-1==i.ativo_id||a.manutencao_de_ativo||a.manutencao_de_proprio_ativo))&&(!p||p&&App.sessao.usuario_id==i.usuario),e.colar=a.propria&&i.usuario==App.sessao.dados.usuario_id&&(!i.evento_id||!!i.evento_id&&!!i.usuario)||a.manutencao_de_proprio_ativo&&i.ativo_id>-1&&!i.usuario&&!i.evento_id||a.manutencao_de_ativo&&i.ativo_id>-1&&!i.evento_id||a.manutencao&&(!a.manutencao_de_ativo&&!a.manutencao_de_proprio_ativo&&-1==i.ativo_id||a.manutencao_de_ativo||a.manutencao_de_proprio_ativo),e.editar=a.propria&&!!i.evento_id&&App.sessao.usuario_id==i.usuario||a.manutencao_de_proprio_ativo&&i.criado_por==App.sessao.dados.usuario_id&&(i.ativo_id>-1&&!!i.evento_id||-1==i.ativo_id&&!!i.evento_id)||a.manutencao_de_ativo&&i.ativo_id>-1&&!!i.evento_id||a.manutencao&&!!i.evento_id&&(!a.manutencao_de_ativo&&!a.manutencao_de_proprio_ativo&&-1==i.ativo_id||a.manutencao_de_ativo||a.manutencao_de_proprio_ativo)&&(!p||p&&App.sessao.usuario_id==i.usuario),e.realizado=(e.editar||i.usuario==App.sessao.dados.usuario_id)&&(!p||p&&App.sessao.usuario_id==i.usuario)}(u,v,c),function(a){for(var e in a)0==a[e]&&$(i.menuSelector).find(".opt_"+e).addClass("hidden");(a.copiar||a.colar)&&(a.novo||a.editar)||$(i.menuSelector).find(".divider").addClass("hidden"),a.copiar||a.colar||a.novo||a.editar||a.realizado||$(i.menuSelector).addClass("hidden")}(v)}},s=parseInt(e.tbl_agenda_head.parent().parent().parent().scrollTop()),l=parseInt(e.tbl_agenda_head.parent().parent().parent().scrollLeft()),p=[{x:(l>0?l-1:l)+"px",y:(s>0?s-1:s)+"px"}];WS.post("agenda_evento/agenda_calendario/",{data_inicio:a,qtd_dias:t,grupo_usuarios_id:JSON.stringify(o),usuarios_id:JSON.stringify(n),data_fim:i,tipo_agenda:e.tipo_agenda,ativos_id:JSON.stringify(e.ativos_id)},function(a){e.tbl_agenda_head.find("th:gt(0)").remove(),e.tbl_agenda_body.empty(),$.each(a.dias,function(a,i){var t=i.slice(0,4),o=parseInt(i.slice(5,7),10)-1,n=i.slice(8,10),d=new Date(t,o,n);e.tbl_agenda_head.append("<th>"+e.dias_semana[d.getDay()]+"<br>"+i.format_date()+"</th>"),d.getDay()}),e.wrapper.find("th").css("transform","translateY("+p[0].y+")"),e.wrapper.find(".menu_header").css("transform","translate("+p[0].x+", "+p[0].y+")"),$.each(a.usuarios,function(i,t){var o=t.calendario_trabalho_id,n=$("<li><a href='#'>Gerar URL ics</a></li>");n.click(function(){View.load("agenda/ics_url_info",function(a,e){e.show(t.usuario_id)})});var s=$("<tr>");App.sessao.dados.usuario_id==t.usuario_id?(s.append("<td class='usuario_agenda col_fix'>                                 <div class='dropdown'>                                     <button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'><span class='user_name' style='background: inherit'>"+t.nome+"</span>                                     <span class='caret'></span></button>                                     <ul class='ddm_opcoes_usuario dropdown-menu'>                                     </ul>                                 </div>                             </td>"),s.find(".ddm_opcoes_usuario").append(n)):s.append('<td class="usuario_agenda col_fix user_name">'+t.nome+"</td>"),$(a.dias).each(function(a,e){var i=e.slice(0,4),n=parseInt(e.slice(5,7),10)-1,d=e.slice(8,10),l=new Date(i,n,d),p=void 0!==t.agenda_ativo_id&&t.agenda_ativo_id?t.agenda_ativo_id:-1,_=s.append('<td class="agenda_dia" template-dia="'+e+'" template-usuario="'+t.usuario_id+'" agenda-ativo-id="'+p+'" permissao-manutencao-agenda-ativo="'+t.permissao_manutencao_agenda_ativo+'"></td>'),c=$(_).find('td[template-dia="'+e+'"][template-usuario="'+t.usuario_id+'"]');$(t.feriados).each(function(a,i){if(i.data_feriado==e){var t='<div class="agenda_feriado small" dia-evento="'+e+'" style="background: #d9534f;color: #fff;margin-bottom: 2px;padding-left: 2px;padding-right: 2px;">';i.hora_inicio&&i.hora_fim&&(t+='<span style="padding-top:5px;" class="pull-right hora_evento small"><b>'+i.hora_inicio.substr(0,5)+"</b> ~ "+i.hora_fim.substr(0,5)+"</span>"),t+='<div class="titulo_agenda" style="padding-top:5px; pointer-events:none;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">'+i.nome+"</div>",t+='<div class="row"><div class="col-md-12" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><button type="button" style="border: 0px;background-color: rgba(0,0,0,0);" class="btn-xs btn_descricao_completa"><i class="fa fa-info-circle" aria-hidden="true" style="font-size: 15px;"></i></button><button type="button" data-toggle="collapse" data-target="#endereco_cliente" style="border: 0px;background-color: rgba(0,0,0,0); padding-left: 0;" class="btn-xs btn_endereco hidden"><i class="fa fa-map-marker z" aria-hidden="true" style="font-size: 15px;"></i></button>'+i.descricao+"</div></div>",t+='<div class="row" style="padding-top: 3px; padding-bottom: 3px;">',t+='<div class="col-md-9 pull-right"><span class="pull-right label label-default" style="max-width: 120px;text-overflow: ellipsis;overflow:  hidden;white-space: nowrap;">Feriado</span></div></div>',$(c).append(t)}}),c.get(0).calendario_trabalho_id=o,s.contextMenu(r),l.getDay()}),$(t.eventos).each(function(a,i){var o=void 0!==i.agenda_ativo_id&&i.agenda_ativo_id?i.agenda_ativo_id:-1;if(i.entidade_nome){var n=s.find('[template-dia="'+i.data+'"]'),l="";null!=i.hora_inicio&&""!=i.hora_inicio&&(l+='<span class="pull-right small" style="pointer-events:none;"><b>'+i.hora_inicio.substr(0,5)+"</b><br>"),null!=i.duracao&&""!=i.duracao&&(l+=i.duracao.substr(0,5)),l+="</span>","C"==i.entidade_tipo&&(l+='<div><span class="label label-info lb_tipo" title data-original-title="Cliente">C</span> '+i.entidade_nome,l+="</div>"),"O"==i.entidade_tipo&&(l+='<div style="pointer-events:none;"><span class="label label-danger lb_tipo" title data-original-title="Organização">O</span> '+i.entidade_nome,l+="</div>"),l+='<div class="col-md-12" style="padding-left: 0;">'+i.descricao+"</div>",l+='<div class="col-md-12" style="padding-left: 0; padding-bottom: 5px;"><span class="label label-default">'+i.tipo_agenda_oportunidade_descricao+"</span></div>","O"!=i.entidade_tipo&&"C"!=i.entidade_tipo||(l+='<div class="row" style="padding-top: 3px; padding-bottom: 3px; margin-left: 0;">',"S"==i.atividade_realizada?(l+='<span class="pull-left label label-success" data-toggle="tooltip" title="Realizado">',l+='<span class="fa fa-check"></span>',l+="</span>"):"N"==i.atividade_realizada&&(l+='<span class="pull-left label label-warning" data-toggle="tooltip" title="Planejado">',l+='<span class="glyphicon glyphicon-pushpin"></span>',l+="</span>"),l+="</div>");var p='<div class="oportunidade_agenda small " template-oportunidade_agenda="'+i.oportunidade_agenda_id+'" template-oportunidade="'+i.oportunidade_id+'" representante-oportunidade="'+i.representante_usuario_id+'" style="background: #33CCFF; color: #000;">'+l+"</div>";n.append(p),1!=App.sessao.dados.admin&&"S"!=App.sessao.dados.supervisor_agenda&&i.representante_usuario_id!=App.sessao.dados.usuario_id||n.find(".oportunidade_agenda").contextMenu(d)}else{var _=!1;if(null==i.agenda_ativo_id&&(_=("S"==i.agenda_tipo_particular||1==i.agenda_tipo_particular)&&"S"!=i.convidado_evento&&i.usuario_id!=App.sessao.dados.usuario_id),n=s.find('[template-dia="'+i.dia+'"]'),l="","S"==i.convidado&&null==i.agenda_ativo_id&&(l+='<span class="pull-right fa fa-users" style="padding-top:5px;pointer-events:none;"></span>'),null!=i.agenda_ativo_id&&(l+='<span class="pull-right fa fa-bookmark" style="padding-top:5px;pointer-events:none;"></span>'),null!=i.hora_fim&&null!=i.hora_inicio&&(l+='<div class="row"><div class="col-md-12"><span style="padding-top:2px;" class="pull-right hora_evento small"><b>'+i.hora_inicio.substr(0,5)+" ~ ",l+=i.hora_fim.substr(0,5)+"</b></span></div></div>"),_)l+='<div style="pointer-events:none;"><span class=descricao_completa"fa fa-lock"></span> '+App.lang.gestao_agenda.evento_particular+"</div>";else{i.cliente_nome&&(l+='<div class="titulo_agenda" style="padding-top:2px; pointer-events:none;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="label label-info lb_tipo" title data-original-title="Cliente">C</span> '+i.cliente_nome+"</div>"),i.fornecedor_nome&&(l+='<div class="titulo_agenda" style="padding-top:2px; pointer-events:none;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="label label-warning lb_tipo" title data-original-title="Fornecedor">F</span> '+i.fornecedor_nome+"</div>"),i.prospect_nome&&(l+='<div class="titulo_agenda" style="padding-top:2px; pointer-events:none;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="label label-danger lb_tipo" title data-original-title="Organização">O</span> '+i.prospect_nome+"</div>"),i.empresa_nome&&(l+='<div class="titulo_agenda" style="padding-top:2px; pointer-events:none;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><span class="label label-primary lb_tipo" title data-original-title="Empresa">E</span> '+i.empresa_nome+"</div>");var c="";i.projeto_nome?c+=i.projeto_codigo+" - "+i.projeto_nome:i.atividade_projeto_nome?c+=i.atividade_projeto_codigo+" - "+i.atividade_projeto_nome:i.cliente_nome&&i.projeto_nome||(c+=i.descricao),l+='<div class="row"><div class="col-md-12" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; padding-top: 3px; padding-left: 10px;"><button type="button" style="border: 0px;background-color: rgba(0,0,0,0);" class="btn-xs btn_descricao_completa"><i class="fa fa-info-circle" aria-hidden="true" style="font-size: 15px;"></i></button><button type="button" data-toggle="collapse" data-target="#endereco_cliente" style="border: 0px;background-color: rgba(0,0,0,0); padding-left: 0;" class="btn-xs btn_endereco hidden"><i class="fa fa-map-marker" aria-hidden="true" style="font-size: 15px;"></i></button>'+c+"</div></div>"}if("N"!=i.agenda_tipo_exibir_endereco_cliente){var u=!!(i.cliente_endereco||i.cliente_bairro||i.cliente_cidade||i.fornecedor_endereco||i.fornecedor_bairro||i.fornecedor_cidade||i.prospect_endereco||i.prospect_bairro||i.prospect_cidade);if(u){var v=i.cliente_cidade?i.cliente_cidade:i.fornecedor_cidade?i.fornecedor_cidade:i.prospect_cidade?i.prospect_cidade:"",m=i.cliente_endereco?i.cliente_endereco:i.fornecedor_endereco?i.fornecedor_endereco:i.prospect_endereco?i.prospect_endereco:"",g=i.cliente_bairro?i.cliente_bairro:i.fornecedor_bairro?i.fornecedor_bairro:i.prospect_bairro?i.prospect_bairro:"",f=i.cliente_numero?i.cliente_numero:i.fornecedor_numero?i.fornecedor_numero:i.prospect_numero?i.prospect_numero:"";l+="<div id='endereco_cliente' class='collapse "+(e.exibir_endereco?"in":"")+"'>",v&&(l+="<small><b>Cidade:</b> "+v+"</small><br>"),m&&(l+="<small><b>Endereço:</b> "+m+" "+(f?"- "+f+"</small>":"</small>")),g&&(l+="<br><small><b>Bairro:</b> "+g+"</small>"),l+="</div>"}}l+='<div class="row" style="padding-top: 3px; padding-bottom: 3px;">',"S"!=i.agenda_tipo_particular&&1!=i.agenda_tipo_particular||i.usuario_id!=App.sessao.dados.usuario_id&&"S"!=i.convidado_evento||(l+='<div class="col-md-12" style="padding-bottom: 2px;"><span class="pull-left label label-danger" style="max-width: 120px;text-overflow: ellipsis;overflow:  hidden;white-space: nowrap;" data-toggle="tooltip" title="Particular">',l+='<span class="fa fa-lock"></span>',l+="</span></div>"),_||(l+='<div class="col-md-12"><span class="pull-left label label-default" style="max-width: 120px;text-overflow: ellipsis;overflow:  hidden;white-space: nowrap;">'+i.agenda_tipo_nome+"</span></div>"),"S"===i.realizado&&(l+='<div class="col-md-12" style="padding-top: 5px;"><span class="pull-left label label-success" data-toggle="tooltip" title="Realizado">',l+='<span class="fa fa-check"></span>',l+="</span></div>"),l+="</div>",p='<div class="agenda_evento small '+("S"==i.convidado?"convidado":"")+'" template-evento="'+i.agenda_evento_id+'" dia-evento="'+i.dia+'" evento-realizado="'+i.realizado+'"descricao-evento="'+encodeURI(i.descricao)+'" template-usuario="'+t.usuario_id+'" convidado-evento="'+i.convidado_evento+'" evento-particular="'+_+'" style="background: '+(_?"#bababa":i.agenda_tipo_cor)+"; color: "+(_?"#000000":i.agenda_tipo_cor_texto)+"; ",-1!=o&&0==App.sessao.dados.admin&&0==App.verifica_permissao(App.temp.empresa,"manutencao_agenda_ativo")&&("N"==i.permissao_manutencao_agenda_ativo||"P"==i.permissao_manutencao_agenda_ativo&&parseInt(i.insert_usuario_id,10)!==App.sessao.dados.usuario_id)&&(p+="cursor: default;"),p+='" agenda-ativo-id="'+o+'" permissao-manutencao-agenda-ativo="'+i.permissao_manutencao_agenda_ativo+'">'+l+"</div>",u&&(p=$(p)).find(".btn_endereco").removeClass("hidden"),n.append(p),void 0!==i.nome_ativo_reservado&&null!=i.nome_ativo_reservado&&$(n).find('[template-evento="'+i.agenda_evento_id+'"]').attr("title","Ativo/Recurso - "+i.nome_ativo_reservado+" reservado por "+i.insert_usuario_nome+".").tooltip().attr("nome-ativo",i.nome_ativo_reservado).attr("insert-usuario-id",i.insert_usuario_id).attr("insert-usuario-nome",i.insert_usuario_nome),$(n).find('[template-evento="'+i.agenda_evento_id+'"]').get(0).criado_por=i.insert_usuario_id,n.contextMenu(r)}}),$(t.atividades).each(function(a,e){var i=s.find('[template-dia="'+e.prazo.substr(0,10)+'"]'),o="";o+='<span class="glyphicon glyphicon-tasks pull-right"></span>',e.cliente_nome&&(o+='<div class="titulo_agenda" style="padding-top:5px; pointer-events:none;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">'+e.cliente_nome+"</div>");var n="";e.projeto_codigo&&(n+=e.projeto_codigo+"&nbsp;"),e.atividade_simplificada&&(n+=e.atividade_simplificada),o+='<div class="row"><div class="col-md-12" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; padding-left: 10px;"><button type="button" style="border: 0px;background-color: rgba(0,0,0,0);" class="btn-xs btn_descricao_completa"><i class="fa fa-info-circle" aria-hidden="true" style="font-size: 15px;"></i></button>'+n+"</div></div>";var d=str_identifica_status(e.inicio,e.prazo,e.conclusao);o+='<div class="row" style="padding-top: 3px; padding-bottom: 3px;pointer-events:none;"><div class="col-md-12"><span class="pull-left label '+str_cor_status(d)+'">'+str_nome_status(d)+"</span></div></div>";var l='<div  class="projeto_atividade projeto_atividade_evento small" template-atividade="'+e.id+'" template-projeto="'+e.projeto_id+'" template-projeto-template="'+e.projeto_template+'" template-descricao_atividade = "'+e.atividade_simplificada.substr(0,10)+'" template-usuario="'+t.usuario_id+'" style="background: #D3D3D3; color: black;">'+o+"</div>";i.append(l),App.verifica_permissao(App.temp.empresa,"manutencao_agenda")?i.contextMenu(r):App.verifica_permissao(App.temp.empresa,"manutencao_propria_agenda")&&i.attr("template-usuario")==App.sessao.dados.usuario_id&&i.contextMenu(r)}),e.tbl_agenda_body.append(s)}),e.wrapper.find(".col_fix").css("transform","translateX("+p[0].x+")"),$.each(a.dias,function(a,e){var i=e.slice(0,4),t=parseInt(e.slice(5,7),10)-1,o=e.slice(8,10);new Date(i,t,o).getDay()});var i=$(".agenda_dia");i.unbind("click"),i.click(function(a){a.stopPropagation();var i=$(this).attr("template-dia"),t=$(this).attr("template-usuario"),o=$(this).parent().find(".user_name").text(),n=parseInt($(this).attr("agenda-ativo-id"),10),d=$(this).attr("permissao-manutencao-agenda-ativo");if(void 0===i||void 0===t)return!1;if(n>-1&&"S"!=d&&"P"!=d&&!App.sessao.dados.admin&&!App.verifica_permissao(App.temp.empresa,"manutencao_agenda_ativo"))return!1;if((isNaN(+n)||n<=0)&&!App.verifica_permissao(App.temp.empresa,"manutencao_agenda")&&!App.verifica_permissao(App.temp.empresa,"manutencao_propria_agenda"))return!1;if((isNaN(+n)||n<=0)&&!App.verifica_permissao(App.temp.empresa,"manutencao_agenda")&&App.verifica_permissao(App.temp.empresa,"manutencao_propria_agenda")&&t!=App.sessao.dados.usuario_id)return!1;var r=($(this).hasClass("agenda_dia")?$(this).get(0).calendario_trabalho_id:$(this).parents(".agenda_dia").get(0).calendario_trabalho_id)||0;View.load("agenda/agenda_evento",function(a,s){var l={evento_id:null,usuario_id:t,dia:i,usuario_nome:o,obj_dados_projeto:null,agenda_ativo_id:n,calendario_trabalho_id:r,permissao_manutencao_agenda_ativo:d};s.onclose=function(){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},s.show(l)})});var t=$(".agenda_evento");t.unbind("click"),t.click(function(a){a.stopPropagation();var i=$(this).attr("template-evento"),t=+$(this).attr("template-usuario"),o=parseInt($(this).attr("agenda-ativo-id")),n=$(this).attr("permissao-manutencao-agenda-ativo"),d=($(this).hasClass("convidado"),$(this).attr("nome-ativo")||""),r=$(this).attr("insert-usuario-nome"),s=($(this).attr("insert-usuario-id"),$(this).attr("dia-evento")),l=$(this).hasClass("agenda_dia")?$(this).get(0).calendario_trabalho_id:$(this).parents(".agenda_dia").get(0).calendario_trabalho_id,p="S"==$(this).attr("convidado-evento"),_="true"===$(this).attr("evento-particular"),c=$(this).parents("tr").find(".user_name").text()||"";""!=d&&(c=d+" - "+r),"null"==t&&(c="");var u=+$(this).get(0).criado_por;void 0!==i&&(_||View.load("agenda/agenda_evento",function(a,d){var r={evento_id:i,usuario_id:t,dia:s,usuario_nome:c,obj_dados_projeto:null,agenda_ativo_id:o,calendario_trabalho_id:l,criado_por:u,convidado_evento:p,permissao_manutencao_agenda_ativo:n};d.onclose=function(){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)},d.show(r)}))});var o=$(".projeto_atividade");o.unbind("click"),o.click(function(a){a.stopPropagation();var i=$(this).attr("template-projeto"),t=$(this).attr("template-atividade"),o=$(this).attr("template-projeto-template"),n=$(this).attr("template-descricao_atividade");void 0!==i&&View.load("atividade_projeto/detalhes",function(a,d){d.onclose=e.carrega_topo,WS.get("projeto/objeto/",{projeto_id:i},function(a){var e=FORMULARIO.VISUALIZAR;App.sessao.dados.admin?Object.keys(a.equipe_toda).map(function(i){var t=a.equipe_toda[i];t.usuario_id!=App.sessao.dados.usuario_id||"S"!=t.planejamento_atividade&&"S"!=t.planejamento_datas&&"S"!=t.planejamento_financeiro&&"S"!=t.planejamento_recursos&&"S"!=t.gerente_projeto||(e=FORMULARIO.EDITAR)}):e=FORMULARIO.EDITAR;var r={projeto_id:i,projeto_atividade_id:t,tipo:e,template:o,equipe:a.equipe_toda,nome:n,grupo_usuarios_equipe:a.grupo_usuarios_equipe,cliente_nome:a.cliente_nome,equipe_toda:a.equipe_toda,status_projeto:a.status_projeto};d.onclose=onclose,d.show(r)})},View.ABA.MULTIPLAS,null,null,{projetoAtividadeId:t})});var n=$(".oportunidade_agenda");n.unbind("click"),n.click(function(a){a.stopPropagation();var i=$(this).attr("template-oportunidade_agenda"),t=$(this).attr("representante-oportunidade"),o=$(this).attr("template-oportunidade"),n=t!=App.sessao.dados.usuario_id;void 0!==i&&View.load("oportunidade/atividade",function(a,t){t.show(i,FORMULARIO.EDITAR,null,o,null,n),t.onclose=function(){e.listar(e.data_inicio,e.data_fim,e.qtd_dias,e.grupo_usuarios_id,e.usuarios_id)}})});var s=$(".agenda_feriado"),l=function(a){a.stopPropagation();var i=$(this).parent().text(),t=$($(this).parents()[2]).find(".titulo_agenda").html()?$($(this).parents()[2]).find(".titulo_agenda").html():"",o=$($(this).parents()[2]).attr("dia-evento")?$($(this).parents()[2]).attr("dia-evento").format_date():"",n=$($(this).parents()[2]).find(".hora_evento").html()?$($(this).parents()[2]).find(".hora_evento").html():"",d="";o&&n&&(d='<small><div class="row"><div class="col-md-6"><i class="fa fa-calendar" aria-hidden="true"></i> '+o+'</div><div class="col-md-6 text-right"><i class="fa fa-clock" aria-hidden="true"></i> '+n+"</div></div></small>"),$(this).popover({title:'<div class="col-md-12"><h4 style="padding-top:5px; pointer-events:none;">'+t+"</h4></div>"+d,content:i,html:!0,width:"300px",container:e.tbl_agenda_body,placement:"bottom",trigger:"focus"}).unbind("focus").focus()};t.find(".btn_descricao_completa").unbind("click").click(l),o.find(".btn_descricao_completa").unbind("click").click(l),s.find(".btn_descricao_completa").unbind("click").click(l);var _=function(a){a.stopPropagation(),$($(this).parents()[2]).find("#endereco_cliente").collapse("toggle")};t.find(".btn_endereco").unbind("click").click(_),o.find(".btn_endereco").unbind("click").click(_)},null,null,null,null,null,e.html_id)},detectmob()||e.wrapper.scroll(function(){e.tbl_agenda_body.find(".popover").remove();var a=parseInt(this.scrollTop.toString())>0?"2px solid #C0C8CF":"2px solid #C0C8CF ";$(this).find("th").css("border-top",a.toString());var i="translate(0,"+(parseInt(this.scrollTop.toString())>0?parseInt(this.scrollTop.toString())-1:parseInt(this.scrollTop.toString()))+"px)",t="translate("+(parseInt(this.scrollLeft.toString())>0?parseInt(this.scrollLeft.toString())-1:parseInt(this.scrollLeft.toString()))+"px,0)",o="translate("+(parseInt(this.scrollLeft.toString())>0?parseInt(this.scrollLeft.toString())-1:parseInt(this.scrollLeft.toString()))+"px, "+(parseInt(this.scrollTop.toString())>0?parseInt(this.scrollTop.toString())-1:parseInt(this.scrollTop.toString()))+"px)";$(this).find(".menu_header").css("transform",o),$(this).find("th:not(.menu_header)").css({transform:i}),$(this).find(".col_fix").css("transform",t)}),this.btn_filtro.unbind("click"),this.btn_filtro.click(function(){View.load("agenda/filtro_agenda",function(a,i){i.aoConfirmar=function(){e.show()},i.show()})}),this.btn_email_cliente.unbind("click"),this.btn_email_cliente.click(function(){View.load("agenda/email_cliente",function(a,e){e.show()})}),this.btn_refresh.unbind("click"),this.btn_refresh.click(function(){e.show()}),this.unload=function(){View.unload(this.html_id)}}});