define([],function(){return function(a){"use strict";var i=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.title="Atividades por Usuário",this.template_atividades=this.dialog.find('[template-row="atividades"]'),this.template_usuarios=this.dialog.find('[template-row="usuarios"]'),this.div_usuarios=this.dialog.find(".div_usuarios"),this.div_supervisionados=this.dialog.find(".div_supervisionados"),this.filtro_descricao_atividade=this.dialog.find(".filtro_descricao_atividade"),this.btn_pesquisar=this.dialog.find(".btn_pesquisar"),this.cbo_supervisionados=this.dialog.find(".cbo_supervisionados"),this.cbo_grupo_usuario=this.dialog.find(".cbo_grupo_usuario"),this.btn_refresh=this.dialog.find(".btn_refresh"),this.radio_usuario=this.dialog.find(".radio_usuario"),this.usuario_id=App.sessao.usuario_id,this.varios_apontamentos_pendentes,this.desmarcado=!1,this.show=function(){WS.get("apontamento_projeto/get_parametros/",null,function(a){i.varios_apontamentos_pendentes=a.varios_apontamentos_pendentes}),("S"==App.sessao.dados.supervisor_projeto||App.sessao.dados.admin)&&(i.radio_usuario.removeClass("hidden"),$(i.radio_usuario).each(function(a,i){2==parseInt($(i).attr("value"))&&$(i).trigger("click")}),i.div_supervisionados.removeClass("hidden")),i.listar_usuarios(),i.listar_filtro_grupo()},this.listar_filtro_grupo=function(a){i.cbo_grupo_usuario.find("option").remove(),WS.get("grupo_usuarios/listar/",{modulo:MODULOS.PROJETO,usuario_id:cripto(App.sessao.usuario_id.toString())},function(o){for(var e=0;e<o.length;e++){var t=o[e];add_option(i.cbo_grupo_usuario,t.grupo_usuarios_id,t.nome)}a&&i.cbo_grupo_usuario.val(a).trigger("change"),i.cbo_grupo_usuario.selectpicker("refresh")},null,null,null,null,i.html_id)},this.listar_usuarios=function(){i.div_usuarios.find("div").remove(),i.cbo_supervisionados.find("option").remove();var a=0;WS.get("usuario/usuarios_grupo_usuario_logado/",{grupo_usuarios_id:JSON.stringify(i.cbo_grupo_usuario.val()),modulo:MODULOS.PROJETO},function(o){for(var e=0;e<o.length;e++){var t=o[e];t.usuario_id==App.sessao.usuario_id?(i.desmarcado?add_option(i.cbo_supervisionados,t.usuario_id,t.nome,' foto_id="'+(t.foto_id>0?t.foto_id:null)+'" email="'+t.email+'"'):add_option(i.cbo_supervisionados,t.usuario_id,t.nome,' selected foto_id="'+(t.foto_id>0?t.foto_id:null)+'" email="'+t.email+'"'),a=e):add_option(i.cbo_supervisionados,t.usuario_id,t.nome,'foto_id="'+(t.foto_id>0?t.foto_id:null)+'" email="'+t.email+'"'+(null!=i.cbo_grupo_usuario.val()&&i.cbo_grupo_usuario.val().length>0?" selected ":""))}null==i.cbo_grupo_usuario.val()?i.desmarcado||i.cbo_supervisionados.val(i.usuario_id).trigger("change"):i.cbo_supervisionados.change(),i.cbo_supervisionados.selectpicker("refresh")},null,null,null,null,i.html_id),setTimeout(function(){i.cbo_supervisionados.parent().find('[data-original-index="'+a+'"]').click(function(){i.desmarcado=!i.desmarcado})},300)},this.render_usuarios=function(){i.div_usuarios.find("div").remove();var a=i.template_usuarios;$(i.cbo_supervisionados.val()).each(function(o,e){!function(o){var e=a.clone();e.removeAttr("template-row"),e.css("display",""),e.find("[template-field='nome']").text(o.nome),e.find("[template-field='email']").text(o.email);var t=e.find("[template-img='img_usuario']");void 0!==o.foto_id&&"null"!=o.foto_id&&null!=o.foto_id?t.attr("src",WS_URI+"documento/midia/?documento_id="+o.foto_id+"&token_midia="+App.sessao.token_midia+"&anticache="+(new Date).getTime()):t.attr("src","assets/img/imagem_usuario_padrao.svg"),e.find("[template-row='atividades_usuario']").attr("div_usuario_id",o.usuario_id);var s=e.find("[template-button='btn_excluir']");s.unbind("click"),s.click(function(){e.remove();for(var a=[],t=i.cbo_supervisionados.val(),s=0;s<t.length;s++){var n=t[s];n!=o.usuario_id&&a.push(n)}i.cbo_supervisionados.val(a),i.cbo_supervisionados.selectpicker("refresh")}),e.appendTo(i.div_usuarios)}({usuario_id:e,foto_id:i.cbo_supervisionados.find('option[value="'+e+'"]').attr("foto_id"),nome:i.cbo_supervisionados.find('option[value="'+e+'"]').text(),email:i.cbo_supervisionados.find('option[value="'+e+'"]').attr("email")})}),i.listar()},this.sortable_div=function(a){$(a).find(".atividade").remove(),$(a).sortable({start:function(a,i){},change:function(a,i){},update:function(i,o){$(i.target.children).each(function(a,i){$(i).find(".numerador").text(parseInt(a,10)),$(i).removeClass("panel-primary"),$(i).removeClass("panel-default"),1==parseInt(a,10)?$(i).addClass("panel-primary"):$(i).addClass("panel-default")});var e=[];$(a).find(".atividade").each(function(a,i){e[a]={projeto_atividade_id:$(i).attr("id"),usuario_id:$(i).attr("usuario_id")}}),WS.post("atividade_projeto/change_order_consultor/",{new_order:JSON.stringify(e)},function(i){$(i).each(function(i,o){$(a).find(".atividade").each(function(a,i){if($(i).attr("id")==o.atividade_id){var e=$(i).find(".prazo_estimado");e.removeClass("text-danger"),e.removeClass("text-warning"),e.removeClass("text-info");var t=$(i).find(".prazo_estimado_icone"),s=e.attr("prazo");if("null"==s&&(s=null),t.removeClass("text-danger"),t.removeClass("text-warning"),t.removeClass("text-info"),t.removeClass("glyphicon-alert"),null==o.prazo_estimado)e.remove();else if("Sem Calendário"==o.prazo_estimado)e.text("Sem calendário");else if("Saldo Esgotado"==o.prazo_estimado)e.text(o.prazo_estimado),e.addClass("label label-danger");else{var n=o.prazo_estimado.substring(0,10),d=new Date;d=d.getFullYear().toString()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2),n>s?(e.addClass("text-danger"),t.addClass("text-danger"),t.addClass("glyphicon-alert")):n==d?(e.addClass("text-warning"),t.addClass("text-warning"),t.addClass("glyphicon-calendar")):n<d||n<s?(e.addClass("text-info"),t.addClass("text-info"),t.addClass("glyphicon-calendar")):(e.addClass("text-default"),t.addClass("text-default"),t.addClass("glyphicon-calendar")),e.text("Entrega Estimada: "+o.prazo_estimado.format_date_time())}}})})})}})},this.listar=function(a,o){var e=i.template_atividades,t=function(a,o,t,s){var n=e.clone();n.removeAttr("template-row"),n.css("display",""),n.attr("style","margin-left: 15px; margin-right: 15px;"),n.attr("id",a.id),n.attr("ordem-consultor",a.ordem_consultor),n.attr("usuario_id",t),n.addClass("atividade"),n.css("cursor","move"),1==o?n.addClass("panel-primary"):n.addClass("panel-default");var d="",r="";if(null!=a.prazo_estimado&&"Saldo Esgotado"!=a.prazo_estimado&&"Sem Calendário"!=a.prazo_estimado){var l="",u=a.prazo_estimado.substring(0,10),c=new Date;c=c.getFullYear().toString()+"-"+("0"+(c.getMonth()+1)).slice(-2)+"-"+("0"+c.getDate()).slice(-2),u>a.prazo?(d='<span class="prazo_estimado_icone text-danger glyphicon glyphicon-alert"> </span>',l="text-danger"):u==c?(d='<span class="prazo_estimado_icone text-warning glyphicon glyphicon-calendar"> </span>',l="text-warning"):u<c||u<a.prazo?(d='<span class="prazo_estimado_icone text-info glyphicon glyphicon-calendar"> </span>',l="text-info"):d='<span class="prazo_estimado_icone glyphicon glyphicon-calendar"> </span>',r='<span class=" prazo_estimado '+l+'" prazo="'+a.prazo+'"> Entrega Estimada: '+a.prazo_estimado.format_date_time()+"</span>"}else"Saldo Esgotado"==a.prazo_estimado?r='<span class="prazo_estimado label label-danger" prazo="'+a.prazo+'" >'+a.prazo_estimado+"</span>":"Sem Calendário"==a.prazo_estimado&&(r='<span class="prazo_estimado" prazo="'+a.prazo+'" >'+a.prazo_estimado+"</span>");n.find("[template-field='cliente']").text(a.cliente_nome),n.find("[template-field='projeto']").text(a.projeto_nome);var p=n.find("[template-field='numerador']");p.addClass("numerador"),p.text(o),n.find("[template-field='atividade']").text(a.codigo+" - "+a.atividade_simplificada);var _=str_identifica_status(a.inicio,a.prazo,a.conclusao,a.entregue),m=n.find("[template-field='status']");m.text(str_nome_status(_)),m.addClass(str_cor_status(_)),n.find("[template-row='informacoes']").html('<div class="col-md-12 col-lg-12 small text-muted">'+d+r+"&nbsp;"+(null!=a.data_solicitacao?'<span class=" glyphicon glyphicon-calendar"></span><span>Solicitação: '+a.data_solicitacao.format_date()+"</span>":"")+"&nbsp;"+(null!=a.inicio?'<span class=" glyphicon glyphicon-calendar"></span> <span>Inicio: '+a.inicio.format_date():"")+"</span> &nbsp;"+(null!=a.prazo?'<span class=" glyphicon glyphicon-calendar"> </span><span>Prazo Entrega: '+a.prazo.format_date():"")+"</span> &nbsp;"+(null!=a.consultor_nome?'<span class=" glyphicon glyphicon-user "></span><span>Executor: '+a.consultor_nome+"</span>":"")+"</div>");var v=n.find("[template-button='btn_entregar']"),f=n.find("[template-button='btn_pause']"),g=n.find("[template-button='btn_inicio']"),h=n.find("[template-button='btn_detalhe']");if(a.predecessoras.length>0){n.find(".div_atividade_predecessora").removeClass("hidden");var b=n.find("[template-row='div_predecessora']");$(b).find(".predecessoras").remove();var C=n.find("[template-row='predecessoras']");$(a.predecessoras).each(function(a,i){!function(a){var i=C.clone();i.removeAttr("template-row"),i.css("display","");var o=i.find("[template-field='atividade_predecessora']"),e="",t=str_identifica_status(a.inicio,a.prazo,a.conclusao),s=i.find("[template-icone='icone']");100==parseInt(a.porcentagem,10)&&null!=a.conclusao?(s.addClass("glyphicon glyphicon-check text-success"),o.addClass("text-success")):"Andamento"==str_nome_status(t)?(s.addClass("glyphicon glyphicon-record text-warning"),o.addClass("text-warning")):"Não Iniciado"==str_nome_status(t)||"Programado"==str_nome_status(t)?(s.addClass("glyphicon glyphicon-unchecked text-muted"),o.addClass("text-muted")):"Atrasado"==str_nome_status(t)&&(s.addClass("glyphicon glyphicon-alert text-danger"),o.addClass("text-danger")),a.tipo==ATIVIDADE_PREDECESSORA_TIPO.FINISH_TO_START?(e=" - FS",null!=a.conclusao&&""!=a.conclusao||g.addClass("hidden")):a.tipo==ATIVIDADE_PREDECESSORA_TIPO.START_TO_START?(e=" - SS",null!=a.inicio&&""!=a.inicio||g.addClass("hidden")):a.tipo==ATIVIDADE_PREDECESSORA_TIPO.FINISH_TO_FINISH?(e=" - FF",null!=a.conclusao&&""!=a.conclusao||v.addClass("hidden esconder")):a.tipo==ATIVIDADE_PREDECESSORA_TIPO.START_TO_FINISH&&(e=" - SF",null!=a.inicio&&""!=a.inicio||v.addClass("hidden esconder")),o.text(a.codigo+" - "+a.atividade_simplificada.substring(0,20)+e),i.appendTo(b)}(i)})}h.unbind("click"),h.click(function(){View.load("atividade_projeto/detalhes",function(o,e){e.onclose=i.listar,e.show(a.projeto_id,a.id,FORMULARIO.EDITAR,i.template,i.equipe,a.atividade_simplificada.substring(0,10),null,null,null,null,null,null,null,a.projeto_apontamento_por)},View.ABA.MULTIPLAS)}),null!=a.apontamento_pendente&&"S"==a.iniciado&&(g.addClass("hidden"),f.removeClass("hidden"),v.hasClass("esconder")||v.removeClass("hidden")),v.unbind("click"),v.click(function(){alertaPopUp("Validação","Deseja realmente alterar o status da atividade para concluído?","OK",function(){WS.get("apontamento_projeto/objeto/",{apontamento_id:a.apontamento_pendente},function(o){var e={},n=[],d=new Date,r=d.getHours()+":"+d.getMinutes();e.atividade_id=a.id,e.descricao=a.atividade_simplificada,e.horas_atividade=null,e.porcentagem_atividade=100,n[0]=e;var l={apontamento_id:o.id,usuario_id:t,projeto_id:o.projeto_id,atividade:JSON.stringify(n),cliente_id:o.cliente_id,dia:o.dia,hora_inicial:o.hora_inicial,hora_final:r,apontamento_dinamico:!0,atividade_iniciada:!0,entregue:!0,apontamento_dinamico_acao:APONTAMENTO_DINAMICO_ACAO.ENTREGAR};WS.post("apontamento_projeto/salvar",l,function(o){a.apontamento_pendente=o.id,alert_saved("Apontamento salvo com sucesso"),i.listar(t,s)},[g,f],null,!0)})},"Cancelar",function(){},null,"200px")}),g.unbind("click"),g.click(function(){var o={},e=[],n=new Date,d=n.getFullYear()+"-"+(parseInt(n.getMonth(),10)+1)+"-"+n.getDate(),r=n.getHours()+":"+n.getMinutes();o.atividade_id=a.id,o.descricao=a.atividade_simplificada,o.horas_atividade=null,o.porcentagem_atividade=a.porcentagem,e[0]=o;var l={apontamento_id:null,usuario_id:t,projeto_id:a.projeto_id,atividade:JSON.stringify(e),cliente_id:a.cliente_id,dia:d,hora_inicial:r,hora_final:"",apontamento_dinamico:!0,atividade_iniciada:!0,entregue:!1,apontamento_dinamico_acao:APONTAMENTO_DINAMICO_ACAO.INICIAR};WS.post("apontamento_projeto/salvar",l,function(o){a.apontamento_pendente=o.id,alert_saved("Apontamento salvo com sucesso"),g.addClass("hidden"),f.removeClass("hidden"),v.hasClass("esconder")||v.removeClass("hidden"),i.listar(t,s)},[g],null,!0)}),f.unbind("click"),f.click(function(){WS.get("apontamento_projeto/objeto/",{apontamento_id:a.apontamento_pendente},function(o){var e={},n=[],d=new Date,r=d.getHours()+":"+(d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes());e.atividade_id=a.id,e.descricao=a.atividade_simplificada,e.horas_atividade=null,e.porcentagem_atividade=a.porcentagem,n[0]=e;var l={apontamento_id:o.id,usuario_id:t,projeto_id:o.projeto_id,atividade:JSON.stringify(n),cliente_id:o.cliente_id,dia:o.dia,hora_inicial:o.hora_inicial,hora_final:r,apontamento_dinamico:!0,atividade_iniciada:!1,entregue:!1,apontamento_dinamico_acao:APONTAMENTO_DINAMICO_ACAO.PAUSAR};WS.post("apontamento_projeto/salvar",l,function(o){a.apontamento_pendente=o.id,alert_saved("Apontamento salvo com sucesso"),g.removeClass("hidden"),f.addClass("hidden"),v.hasClass("esconder")||v.removeClass("hidden"),i.listar(t,s)},[f],null,!0)})}),n.appendTo(s)};a||o?WS.get("atividade_projeto/get_atividade_projeto_usuarios/",{usuario_id:a},function(e){i.sortable_div(o);var s=$(o).find("[template-row='alert']");if(s.attr("style","margin-left: 15px; margin-right: 15px;"),0==e.length)s.removeClass("hidden");else{s.addClass("hidden");for(var n=0;n<e.length;n++){var d=e[n];t(d,parseInt(n,10)+1,a,o)}}},null,null,null,null,i.html_id):WS.get("atividade_projeto/get_atividade_projeto_usuarios/",{arr_usuarios_id:JSON.stringify(i.cbo_supervisionados.val()),descricao_atividade:i.filtro_descricao_atividade.val()},function(a){$(i.cbo_supervisionados.val()).each(function(o,e){var s=i.div_usuarios.find('[div_usuario_id="'+e+'"]');i.sortable_div(s);var n=$(s).find("[template-row='alert']");if(n.attr("style","margin-left: 15px; margin-right: 15px;"),a)if(!a[e]||a[e]&&0==a[e].length)n.removeClass("hidden");else if(n.addClass("hidden"),a[e])for(o=0;o<a[e].length;o++){var d=a[e][o];t(d,parseInt(o,10)+1,e,s)}})},null,null,null,null,i.html_id)},this.radio_usuario.unbind("click"),this.radio_usuario.click(function(){1==parseInt($(this).val())?(i.cbo_supervisionados.prop("disabled",!0),i.cbo_grupo_usuario.prop("disabled",!1),i.cbo_grupo_usuario.val(""),i.cbo_supervisionados.val("")):2==parseInt($(this).val())&&(i.cbo_supervisionados.prop("disabled",!1),i.cbo_grupo_usuario.prop("disabled",!0),i.cbo_grupo_usuario.val(""),i.cbo_supervisionados.val(App.sessao.usuario_id)),i.cbo_grupo_usuario.selectpicker("refresh"),i.cbo_supervisionados.selectpicker("refresh")}),this.btn_refresh.unbind("click"),this.btn_refresh.click(function(){i.render_usuarios()}),this.cbo_supervisionados.unbind("change"),this.cbo_supervisionados.change(function(){i.render_usuarios()}),this.cbo_grupo_usuario.unbind("change"),this.cbo_grupo_usuario.change(function(){i.listar_usuarios()}),this.filtro_descricao_atividade.on("keyup",function(a){"enter"===a.originalEvent.key.toLowerCase()&&i.listar()}),this.btn_pesquisar.on("click",function(){i.listar()}),this.unload=function(){View.unload(this.html_id)}}});