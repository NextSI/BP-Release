var t;define([],function(){return function(a){"use strict";var i=this;this.html_id=a,this.dialog=$("#"+this.html_id),this.title="Lista de Discussão",this.floating=this.dialog.find(".floating-menu"),this.div_nova_mensagem=this.dialog.find(".div_nova_mensagem"),this.div_nova_mensagem_mobile=this.dialog.find(".div_nova_mensagem_mobile"),this.btn_nova_msg=this.dialog.find(".btn_nova_msg"),this.titulo_lista=this.dialog.find(".titulo_lista"),this.descricao_lista=this.dialog.find(".descricao_lista"),this.nome_autor_lista=this.dialog.find(".nome_autor_lista"),this.status_lista=this.dialog.find(".status_lista"),this.autor=this.dialog.find(".autor"),this.carrega_img_topo=this.dialog.find(".carrega_img_topo"),this.div_data_criacao=this.dialog.find(".div_data_criacao"),this.div_data_fechamento=this.dialog.find(".div_data_fechamento"),this.lbl_data_criacao=this.dialog.find(".lbl_data_criacao"),this.lbl_data_fechamento=this.dialog.find(".lbl_data_fechamento"),this.div_btn_publicacao=this.dialog.find(".div_btn_publicacao"),this.btn_cancelar_publicacao=this.dialog.find(".btn_cancelar_publicacao"),this.btn_publicacao=this.dialog.find(".btn_publicacao"),this.edt_mensagem_lista=this.dialog.find(".edt_mensagem_lista"),this.div_publicacao=this.dialog.find(".div_publicacao"),this.painel_mensagem_mural=this.dialog.find(".painel_mensagem_mural"),this.list_mural=this.dialog.find(".list_mural"),this.div_load=this.dialog.find(".div_load"),this.lbl_count_seguindo=this.dialog.find(".lbl_count_seguindo"),this.btn_todos_seguindo=this.dialog.find(".btn_todos_seguindo"),this.lbl_count_seguidores=this.dialog.find(".lbl_count_seguidores"),this.lbl_count_grupo=this.dialog.find(".lbl_count_grupo"),this.btn_todos_seguidores=this.dialog.find(".btn_todos_seguidores"),this.cbo_pesquisa_perfil=this.dialog.find(".cbo_pesquisa_perfil"),this.btn_todos_grupos=this.dialog.find(".btn_todos_grupos"),this.edt_pesquisa_perfil=null,this.link_perfil=this.dialog.find(".link_perfil"),this.btn_refresh=this.dialog.find(".btn_refresh"),this.div_mostar_mais_mensagens=this.dialog.find(".div_mostar_mais_mensagens"),this.btn_mostrar_mais_mensagens=this.dialog.find(".btn_mostrar_mais_mensagens"),this.btn_anexo_perfil=this.dialog.find(".btn_anexo_perfil"),this.div_anexos_publicacao=this.dialog.find(".div_anexos_publicacao"),this.div_anexos_row=this.dialog.find(".div_anexos_row"),this.panel_anexos=this.dialog.find(".panel_anexos"),this.div_mostrar_anexo=this.dialog.find(".div_mostrar_anexo"),this.arr_mural=[],this.arr_mural_comentario=[],this.arr_time_line=[],this.ultima_mensagem_mural_id=null,this.nova_mensagem_mural=!1,this.maior_id=null,this.mensagem_id=null,this.usuario_id_param=null,this.usuario_nome=null,this.flag=null,this.token=null,this.arquivo=null,this.lista_id=null,this.numero_anexo=null,this.anexo_array=[],this.anexo_fotos=[],this.anexo=[],this.grupo_id=null,this.status_discussao=null,this.flag=null,this.count_mensagem=null,this.limite_comentario=null,this.show=function(a,e){i.lista_id=a,i.grupo_id=e,i.edt_mensagem_lista.attr("id",md5(i.html_id+Math.random())),i.carregar_mensagens_lista(),i.edt_mensagem_lista.unbind("click"),i.edt_mensagem_lista.click(function(){i.div_btn_publicacao.removeClass("hidden"),i.div_mostrar_anexo.removeClass("hidden"),set_tinymce(i.edt_mensagem_lista,""),i.limpar_anexo(),$("html, body").animate({scrollBottom:0},"slow")}),i.btn_cancelar_publicacao.unbind("click"),i.btn_cancelar_publicacao.click(function(){set_tinymce(i.edt_mensagem_lista,""),tinymce.remove(),i.div_btn_publicacao.addClass("hidden"),i.div_mostrar_anexo.addClass("hidden")}),i.listar_info_lista()},this.listar_info_lista=function(){i.list_mural.find(".class-rows").remove(),WS.get("listas_discussao/lista_discussao/",{lista_id:i.lista_id},function(a){var e=a;i.titulo_lista.text(e.titulo),e.descricao?i.descricao_lista.html(e.descricao).find("img").css("max-width","100%"):i.descricao_lista.html(""),i.nome_autor_lista.append(e.nome_autor+" <b>(Autor)</b>");var n,s,t=null,o=null,d=null,m=null;n=e.insert_hora.format_date(),s=e.insert_hora.split(" ",2),i.lbl_data_criacao.text(n+" "+s[1]),i.status_discussao=e.topico_fechado,"S"==i.status_discussao?i.div_publicacao.hasClass("hidden")||i.div_publicacao.addClass("hidden"):i.div_publicacao.hasClass("hidden")&&i.div_publicacao.removeClass("hidden"),"N"==e.topico_fechado?(i.status_lista.addClass("label-success"),o="Aberta",t="Aberta",i.div_data_fechamento.hasClass("hidden")||i.div_data_fechamento.addClass("hidden")):(i.status_lista.addClass("label-danger"),o="Fechada",t="Fechada",i.div_data_fechamento.hasClass("hidden")&&i.div_data_fechamento.removeClass("hidden"),d=e.fechamento_hora.format_date(),m=e.fechamento_hora.split(" ",2),i.lbl_data_fechamento.text(d+" "+m[1])),i.status_lista.tooltip({title:o,placement:"right",html:!0}),i.status_lista.tooltip(),i.status_lista.text(t),null!=e.foto_id?i.carrega_img_topo.attr("src",WS_URI+"documento/midia_imagens_menores/?documento_id="+e.foto_id+"&tamanho=30&token_midia="+App.sessao.token_midia):i.carrega_img_topo.attr("src","assets/img/imagem_usuario_padrao.svg")})},this.carregar_mensagens_lista=function(a,e){WS.get({route:"mensagem_listas_discussao/listar_mensagens_lista/",data:{ultima_mensagem_mural_id:i.ultima_mensagem_mural_id,parametro_limitador:!0,usuario_id:i.usuario_id_param,maior_id:i.maior_id,lista_id:i.lista_id,grupo_id:i.grupo_id,nova_mensagem_mural:i.nova_mensagem_mural,limite_comentario:i.limite_comentario},func_response:function(a){a&&(e&&i.list_mural.find(".class-rows").remove(),i.arr_mural=a,i.render_mural(),i.flag=!0)},ignore_error:a})},this.incAnexo=function(){if(App.is_nativo()){var a=i.div_anexos_row.clone();i.numero_anexo=1+i.numero_anexo;var e=a.find(".btn_input");a.find('input[type="file"]').addClass("hidden"),a.find(".capture_photo").removeClass("hidden").addClass("text-primary");var n=a.find(".capture_photo");e.attr("id_localizacao",i.numero_anexo-1),n.attr("id_localizacao",i.numero_anexo-1),e.unbind("click"),e.bind("click",function(){var a=$(this),n=parseInt($(a).attr("id_localizacao"));PhoneGapFile.getFile(function(a){a.state==PhoneGapFile.STATE.SUCCESS?(void 0!==i.anexo[n]&&null!=i.anexo[n]&&""!=i.anexo[n]?i.anexo[n]=a.file:i.anexo.push(a.file),e.find("*:contains('text')").next().next().text("Arquivo selecionado!").addClass("text-success")):a.state==PhoneGapFile.STATE.FAIL&&(null==i.anexo[n]&&""==i.anexo[n]?e.find("*:contains('text')").next().next().text("Nenhum Arquivo selecionado!").removeClass("text-success"):null!=i.anexo[n]&&""!=i.anexo[n]&&e.find("*:contains('text')").next().next().text("Arquivo selecionado!").addClass("text-success"))})}),n.unbind("click"),n.bind("click",function(){var a=$(this),e=parseInt($(a).attr("id_localizacao"));PhoneGapFile.camera(function(a){a.state==PhoneGapFile.STATE.SUCCESS?(void 0!==i.anexo[e]&&null!=i.anexo[e]&&""!=i.anexo[e]?i.anexo[e]=a.file:i.anexo.push(a.file),n.find("*:contains('text')").next().next().text("Arquivo selecionado!").addClass("text-success")):a.state==PhoneGapFile.STATE.FAIL&&(null==i.anexo[e]&&""==i.anexo[e]?n.find("*:contains('text')").next().next().text("Nenhum Arquivo selecionado!").removeClass("text-success"):null!=i.anexo[e]&&""!=i.anexo[e]&&n.find("*:contains('text')").next().next().text("Arquivo selecionado!").addClass("text-success"))})}),a.find(".anexo_base_label").text("Anexo #"+i.numero_anexo),a.removeClass("hidden"),a.appendTo(i.div_anexos_publicacao)}else a=i.div_anexos_row.clone(),i.numero_anexo=1+i.numero_anexo,a.find(".anexo_base_label").text("Anexo #"+i.numero_anexo),e=a.find(".mobile_inputfile"),a.removeClass("hidden"),a.appendTo(i.div_anexos_publicacao),e.unbind("change"),e.change(function(){0===$(this).get(0).files.length?$(this).next().next().find(".anexo_base_input_text").text("Nenhum arquivo selecionado!"):$(this).next().next().find(".anexo_base_input_text").text($(this).val().split("fakepath\\").length>1?$(this).val().split("fakepath\\")[1].toString():$(this).val().split("fakepath\\")[0].toString())})},this.limpar_anexo=function(){i.anexo_fotos=[],i.anexo=[],i.numero_anexo=0,i.anexo_array=[],i.div_anexos_publicacao.find(".div_anexos_row").remove(),i.incAnexo()},this.var_mural_mensagem_id=null,this.render_mural=function(a){var e=i.dialog.find("[template-mensagem]"),n=function(a){var n=e.clone();n.removeAttr("template-mensagem"),n.css("display",""),n.addClass("class-rows"),n.attr("id",a.id_mensagem_lista);var s=!0,t=$(n.find(".lbl_mensagem"));t.html(a.mensagem).find("img").css("max-width","100%");var o=$(n.find(".imagens_mensagem"));a.anexos.length>0&&$.each(a.anexos,function(a,i){if(cripto(WS.token),"image/png"==i.mime_type||"image/bmp"==i.mime_type||"image/jpeg"==i.mime_type||"image/jpg"==i.mime_type||"image/gif"==i.mime_type){var e=WS_URI+"documento/midia_social/?documento_id="+i.documento_id+"&tipo=v&tamanho=400&token_midia="+App.sessao.token_midia,n=$("<img />",{id:i.documento_id}).attr("data-original",e).addClass("text-center row-mensagem-img");n.lazyload(),n.appendTo(o),n.css("max-width","100%"),o.css("text-align","left"),$("<p/>").appendTo(o)}}),a.count_mensagem_lista>15?i.div_mostar_mais_mensagens.hasClass("hidden")&&i.div_mostar_mais_mensagens.removeClass("hidden"):i.div_mostar_mais_mensagens.hasClass("hidden")||i.div_mostar_mais_mensagens.addClass("hidden");var d=$(n.find(".lbl_data_publicacao"));null==a.update_hora?d.text(a.insert_hora?a.insert_hora.format_date_time():""):d.text(a.update_hora?a.update_hora.format_date_time():"");var m=$(n.find(".carrega_img_mensagem"));null!=a.foto_id?(m.attr("data-original",WS_URI+"documento/midia_imagens_menores/?documento_id="+a.foto_id+"&tamanho=30&token_midia="+App.sessao.token_midia),m.lazyload()):m.attr("src","assets/img/imagem_usuario_padrao.svg");var _=$(n.find(".btn_menu_editar_mensagem"));$(n.find(".lbl_autor")).text(a.autor_nome),$(n.find(".div_enviar_comentario")),$(n.find(".edt_enviar_comentario"));var l=$('<div class="form-inline">'),r=$(n.find(".mensagem_lista_curtir")),c=$(n.find(".mensagem_lista_descurtir")),u=$(n.find(".mensagem_lista_comentar")),p=($(n.find(".div_comentario")),$(n.find(".div_mostar_mais_comentarios"))),g=$(n.find(".btn_mostrar_mais_comentarios")),h=$(n.find(".btn_menu_editar")),f=$(n.find(".btn_menu_excluir")),v=$(n.find(".btn_perfil_usuario")),b=2;"S"==i.status_discussao?(r.hasClass("disabled")||r.addClass("disabled"),c.hasClass("disabled")||c.addClass("disabled"),u.hasClass("disabled")||u.addClass("disabled"),_.hasClass("hidden")||_.addClass("hidden")):(r.hasClass("disabled")&&r.removeClass("disabled"),c.hasClass("disabled")&&c.removeClass("disabled"),u.hasClass("disabled")&&u.removeClass("disabled"),a.autor_id!=App.sessao.usuario_id&&1!=App.sessao.dados.admin&&1!=a.admin_logado||_.hasClass("hidden")&&_.removeClass("hidden")),a.autor_id!=i.usuario_id_param&&(v.unbind("click"),v.click(function(){View.load("perfil/listar",function(i,e){e.show(a.autor_id,a.autor_nome,!0)},View.ABA.MULTIPLAS)})),function(a){var e=function(t,o,d,m,_){if(a.id_mensagem_lista==t.id_mensagem_lista){var l=$(n.find("[template-comentario]")).clone();l.removeAttr("template-comentario"),l.removeClass("hidden"),l.attr("id_comentario",t.comentario_id),l.attr("id_mural_mensagem",t.id_mensagem_lista),l.addClass("div_comentario_remover");var r=$(l.find(".lbl_mensagem_curtir_comentario")),c=$(l.find(".div_mensagem_curtir_comentario")),u=$(l.find(".btn_excluir")),p=$(l.find(".imagens_mensagem_comentario")),h=$(l.find(".lbl_data_publicacao_comentario")),f=$(l.find(".div_mostrar_respostas")),v=($(l.find(".btn_mostrar_respostas")),$(l.find(".btn_menu_editar_comentario"))),x=$(l.find(".btn_menu_excluir_comentario")),C=$('<div class="form-inline">'),k=$(l.find(".carrega_img_comentario")),y=$(l.find(".mensagem_lista_comentar_comentario")),w=$(l.find(".btn_menu_editar_mensagem_comentario"));$(l.find(".lbl_comentario_autor")).text(t.usuario_autor_nome);var A=$(l.find(".lbl_comentario_comentarios"));A.html(t.comentario).find("img").css("max-width","100%");var S=$(l.find(".btn_mural_curtir_comentario")),R=$(l.find(".btn_mural_descurtir_comentario")),T=$(l.find(".mural_comentar_comentario")),I=$(l.find(".div_enviar_comentario_resposta")),F=$(l.find(".edt_enviar_comentario_resposta")),W=$(l.find(".btn_perfil_usuario_comentario"));"S"==i.status_discussao?(R.hasClass("disabled")||R.addClass("disabled"),S.hasClass("disabled")||S.addClass("disabled"),y.hasClass("disabled")||y.addClass("disabled")):(R.hasClass("disabled")&&R.removeClass("disabled"),S.hasClass("disabled")&&S.removeClass("disabled"),y.hasClass("disabled")&&y.removeClass("disabled")),null==t.update_hora?h.text(t.insert_hora?t.insert_hora.format_date_time():""):h.text(t.update_hora?t.update_hora.format_date_time():""),t.usuario_autor_comentario!=App.sessao.usuario_id&&App.sessao.usuario_id!=a.autor_id&&1!=App.sessao.dados.admin&&1!=a.admin_logado||"N"!=i.status_discussao?w.hasClass("hidden")||w.addClass("hidden"):(w.hasClass("hidden")&&w.removeClass("hidden"),App.sessao.dados.admin&&1!=!a.admin_logado||App.sessao.usuario_id!=a.autor_id||w.parent().find(".btn_menu_editar_comentario").hasClass("hidden")||w.parent().find(".btn_menu_editar_comentario").addClass("hidden")),y.unbind("click"),y.click(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(n,s){$(document).trigger("scroll"),s.onsave=function(a){e(a,!1)},s.onclose=function(){i.nova_mensagem_mural=!1},s.show(a.id_mensagem_lista,FORMULARIO.NOVO,!0,null,null)})}),(t.anexos.length>0||t.anexos!=[])&&$.each(t.anexos,function(a,i){if(cripto(WS.token),"image/png"==i.mime_type||"image/bmp"==i.mime_type||"image/jpeg"==i.mime_type||"image/jpg"==i.mime_type||"image/gif"==i.mime_type){var e=WS_URI+"documento/midia_social/?documento_id="+i.documento_id+"&tipo=v&tamanho=300&token_midia="+App.sessao.token_midia,n=$("<img />",{id:i.documento_id}).attr("data-original",e).addClass("text-center row-mensagem-img-comentario");n.lazyload(),n.appendTo(p),n.css("max-width","100%"),p.css("text-align","left"),$("<p/>").appendTo(p)}}),null!=t.foto_id?(k.attr("data-original",WS_URI+"documento/midia_imagens_menores/?documento_id="+t.foto_id+"&tamanho=30&token_midia="+App.sessao.token_midia),k.lazyload()):k.attr("src","assets/img/imagem_usuario_padrao.svg"),t.usuario_autor_comentario!=i.usuario_id_param&&(W.unbind("click"),W.click(function(){View.load("perfil/listar",function(a,i){i.show(t.usuario_autor_comentario,t.usuario_autor_nome,!0)},View.ABA.MULTIPLAS)})),S.unbind("click"),S.click(function(){var a=t.comentario_id;WS.post("mensagem_listas_discussao/salvar_curtida_comentario",{id_mensagem_lista:t.id_mensagem_lista,usuario_id:App.sessao.usuario_id,comentario_id:t.comentario_id},function(i){$.each(i,function(i,e){var n;a==e.comentario_id&&(1==(n=null!=e.count_curtida_comentario?e.count_curtida_comentario:0)?(c.removeClass("hidden"),r.html(n+" pessoa curtiu essa mensagem")):(c.removeClass("hidden"),r.html(n+" pessoas curtiram essa mensagem")),S.addClass("hidden"),R.removeClass("hidden"))})},[S])}),R.unbind("click"),R.click(function(){var a=t.comentario_id;WS.post("mensagem_listas_discussao/descurtir_comentario",{id_mensagem_lista:t.id_mensagem_lista,usuario_id:App.sessao.usuario_id,comentario_id:t.comentario_id},function(i){-1!=i?$.each(i,function(i,e){var n;a==e.comentario_id&&(1==(n=null!=e.count_curtida_comentario?e.count_curtida_comentario:0)?(c.removeClass("hidden"),r.html(n+" pessoa curtiu essa mensagem")):(c.removeClass("hidden"),r.html(n+" pessoas curtiram essa mensagem"))),S.removeClass("hidden"),R.addClass("hidden")}):(r.text(""),S.removeClass("hidden"),R.addClass("hidden"),r.removeClass("text-info"))},[R])});var U="",V=t.mensagem_curtida.length;V-=10,""==t.mensagem_curtida&&null==t.mensagem_curtida||$.each(t.mensagem_curtida,function(a,i){1==t.usuario_logado_curtida_comentario?(S.hasClass("hidden")||S.addClass("hidden"),R.hasClass("hidden")&&R.removeClass("hidden")):r.removeClass("text-info"),a<9?U=""!=U?U+"<br>"+i.usuario_curtida_nome:i.usuario_curtida_nome:10==a&&(U+="<br>e mais "+V+" ...")}),t.mensagem_curtida.length>0&&(c.removeClass("hidden"),t.count_curtida_comentario>1?r.html(t.count_curtida_comentario+" pessoas curtiram esse comentário"):r.html(t.count_curtida_comentario+" pessoa curtiu esse comentário")),r.tooltip({title:U,placement:"top",html:!0}),r.unbind("click"),r.click(function(){s=!1,View.load("grupo_rede_social_pagina/usuario_curtida_lista",function(a,i){i.show(t.comentario_id,s)})}),T.unbind("click"),T.click(function(){I.removeClass("hidden"),F.val(""),F.unbind("keypress"),F.keydown(function(n){if(13==n.which){var s=F.val();F.prop("disabled",!0),null==s&&""==s||WS.post("mural_mensagem/comentar",{mural_mensagem_id:a.mural_mensagem_id,usuario_id:App.sessao.usuario_id,comentario:s,predecessor_id:t.comentario_id},function(a){alert_saved("comentário salvo com sucesso"),F.val(""),i.list_mural.find('[id_mural_mensagem="'+a[0].mural_mensagem_id+'"]').remove(),$.each(a,function(a,i){e(i)}),$(document).trigger("scroll")})}else 27==n.which&&I.addClass("hidden")})}),(App.sessao.dados.admin||1==a.admin_logado||(App.sessao.usuario_id==t.usuario_autor_comentario||App.sessao.usuario_id==a.autor_id)&&"N"==i.status_discussao)&&(A.dblclick(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(n,s){s.onsave=function(a){if(i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').remove(),i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').find(".div_comentario_remover").remove(),i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').addClass(".div_comentario_remover"),i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').find(".lbl_comentario_comentarios").html(a.lbl_comentario_comentarios),"image/png"==a.mime_type||"image/bmp"==a.mime_type||"image/jpeg"==a.mime_type||"image/jpg"==a.mime_type||"image/gif"==a.mime_type){var n=WS_URI+"documento/midia_social/?documento_id="+a.documento_id+"&tipo=v&tamanho=300&token_midia="+App.sessao.token_midia,s=$("<img />",{id:value.documento_id}).attr("data-original",n).addClass("text-center row-mensagem-img-comentario");s.lazyload(),s.appendTo(p),s.css("max-width","100%"),p.css("text-align","center"),$("<p/>").appendTo(p)}else i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').find(".row-mensagem-img-comentario").remove(),i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".remove_anexo_comentario").remove();e(a,!1),$(document).trigger("scroll")},s.onclose=function(){i.nova_mensagem_mural=!1},s.show(a.id_mensagem_lista,FORMULARIO.EDITAR,!0,null,t.comentario_id)})}),v.unbind("click"),v.click(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(n,s){s.onsave=function(a){if(i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').remove(),i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').find(".div_comentario_remover").remove(),i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').addClass(".div_comentario_remover"),i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').find(".lbl_comentario_comentarios").html(a.lbl_comentario_comentarios),"image/png"==a.mime_type||"image/bmp"==a.mime_type||"image/jpeg"==a.mime_type||"image/jpg"==a.mime_type||"image/gif"==a.mime_type){var n=WS_URI+"documento/midia_social/?documento_id="+a.documento_id+"&tipo=v&tamanho=300&token_midia="+App.sessao.token_midia,s=$("<img />",{id:value.documento_id}).attr("data-original",n).addClass("text-center row-mensagem-img-comentario");s.lazyload(),s.appendTo(p),s.css("max-width","100%"),p.css("text-align","center"),$("<p/>").appendTo(p)}else i.list_mural.find('[id_comentario="'+a.comentario_id+'"]').find(".row-mensagem-img-comentario").remove(),i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".remove_anexo_comentario").remove();e(a,!1),$(document).trigger("scroll")},s.onclose=function(){i.nova_mensagem_mural=!1},s.show(a.id_mensagem_lista,FORMULARIO.EDITAR,!0,null,t.comentario_id)})}),x.unbind("click"),x.click(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(e,n){n.onsave=function(a){l.remove()},n.show(a.id_mensagem_lista,FORMULARIO.EXCLUIR,!0,i.lista_id,t.comentario_id)})}));var O=t.comentario.length;App.sessao.dados.admin||1==a.admin_logado||App.sessao.usuario_id==t.usuario_autor_comentario||App.sessao.usuario_id==a.autor_id?(u.removeClass("hidden"),u.unbind("click"),u.click(function(){t.comentario_id,alert_modal("Validação","Deseja excluir comentário?","Ok",function(){WS.post("mural_mensagem/excluir_comentario",{mural_mensagem_id:a.mural_mensagem_id,comentario_id:t.comentario_id},function(a){(O-=1)>1?i.list_mural.find(".btn_mostrar_respostas").html('<span class="small span_mostrar_resposta">Mostrar respostas ('+O+")</span>"):1==O?i.list_mural.find(".btn_mostrar_respostas").html('<span class="small span_mostrar_resposta">Mostrar resposta ('+O+")</span>"):i.list_mural.find(".div_mostrar_respostas").addClass("hidden"),a.length>0&&(a[0].count_comentario>2?i.list_mural.find(".div_mostar_mais_comentarios").removeClass("hidden"):i.list_mural.find(".div_mostar_mais_comentarios").addClass("hidden")),l.remove(),i.listar_info_lista()})},!0)})):u.hasClass("hidden")||u.addClass("hidden"),!t.predecessor_id&&O>0&&f.removeClass("hidden"),l.appendTo(n.find(".comentario"))}g.unbind("click"),g.click(function(){var a=t.comentario_id;b+=25,WS.get("mensagem_listas_discussao/listar_comentario/",{id_mensagem_lista:t.id_mensagem_lista,limite_comentario:b,ultimo_comentario_id:a},function(a){$(a).each(function(a,i){e(i,!1)}),$(document).trigger("scroll")})}),t.anexos.length>0&&$.each(t.anexos,function(a,i){var e=i.documento_revisao_id;$(l.find(".div_anexos_comentario")).removeClass("hidden");var n=$('<div class="input-group" style="margin-top: 10px; margin-right: 5px;">');if("application/pdf"==i.mime_type)(s=$("<button>")).addClass("btn btn-default btn-sm"),s.text(FileShortName(i.revisao_nome)),i.revisao_nome,s.unbind("click"),s.click(function(){View.load("central_documentos/visualizar_pdf",function(a,i){i.show(e)})}),(o=$("<a>")).attr("type","button"),o.addClass("btn btn-default btn-sm"),o.attr("title",i.revisao_nome),o.attr("value",i.documento_revisao_id),(t=$("<span>")).addClass("glyphicon glyphicon-download-alt"),o.append(t),n.append(s),n.append(o);else if("video/mp4"==i.mime_type||"video/ogg"==i.mime_type)(s=$("<button>")).addClass("btn btn-default btn-sm"),s.text(FileShortName(i.revisao_nome)),i.revisao_nome,s.unbind("click"),s.click(function(){View.load("central_documentos/visualizar_video",function(a,i){i.show(e)})}),(o=$("<a>")).attr("type","button"),o.addClass("btn btn-default btn-sm"),o.attr("title",i.revisao_nome),o.attr("value",i.documento_revisao_id),(t=$("<span>")).addClass("glyphicon glyphicon-download-alt"),o.append(t),n.append(s),n.append(o);else if("image/png"==i.mime_type||"image/bmp"==i.mime_type||"image/jpeg"==i.mime_type||"image/jpg"==i.mime_type||"image/gif"==i.mime_type){var s,t;(s=$("<button>")).addClass("btn btn-default btn-sm"),s.text(FileShortName(i.revisao_nome)),i.revisao_nome,s.unbind("click"),s.click(function(){View.load("central_documentos/visualizar_documento",function(a,i){i.show(e)})}),(o=$("<a>")).attr("type","button"),o.addClass("btn btn-default btn-sm"),o.attr("title",i.revisao_nome),o.attr("value",i.documento_revisao_id),(t=$("<span>")).addClass("glyphicon glyphicon-download-alt"),o.append(t),n.append(s),n.append(o)}else{var o;(o=$("<a>")).attr("type","button"),o.addClass("btn btn-default btn-sm"),o.attr("title",i.revisao_nome),o.text(FileShortName(i.revisao_nome)),o.attr("value",i.documento_revisao_id),n.append(o)}C.append(n),C.append("&nbsp;&nbsp;&nbsp;"),i.revisao_nome,o.unbind("click"),o.click(function(){App.obter_token_publico(function(a){App.download(WS_URI+"documento/download/?documento_revisao_id="+e+"&token_publico="+a)})}),(i=$(l.find(".anexos_comentario"))).addClass("remove_anexo_comentario"),i.append(C)})};u.unbind("click"),u.click(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(n,s){s.onsave=function(a){e(a,!1),$(document).trigger("scroll")},s.onclose=function(){i.nova_mensagem_mural=!1},s.show(a.id_mensagem_lista,FORMULARIO.NOVO,!0,null,null)})}),a.count_comentario>2&&p.removeClass("hidden"),$(a.comentario).each(function(a,i){e(i,!1)}),$(document).trigger("scroll")}(a);var x="",C=a.count_curtida;C-=10,""==a.mensagem_curtida&&null==a.mensagem_curtida||$.each(a.mensagem_curtida,function(i,e){1==a.usuario_logado_curtida&&(r.hasClass("hidden")||r.addClass("hidden"),c.hasClass("hidden")&&c.removeClass("hidden")),i<9?x=""!=x?x+"<br>"+e.usuario_curtida_nome:e.usuario_curtida_nome:x+="<br>e mais "+C+" ..."});var k=$(n.find(".lbl_mensagem_curtir")),y=$(n.find(".div_mensagem_curtir"));a.mensagem_curtida.length>0&&(y.removeClass("hidden"),a.count_curtida>1?k.html(a.count_curtida+" pessoas curtiram essa mensagem"):k.html(a.count_curtida+" pessoa curtiu essa mensagem")),k.tooltip({title:x,placement:"top",html:!0}),k.unbind("click"),k.click(function(){s=!0,View.load("grupo_rede_social_pagina/usuario_curtida_lista",function(i,e){e.show(a.id_mensagem_lista,s)})}),r.unbind("click"),r.click(function(){WS.post("mensagem_listas_discussao/salvar_curtida",{id_mensagem_lista:a.id_mensagem_lista,usuario_id:App.sessao.usuario_id},function(a){var i;1==(i=null!=a.count_curtida?a.count_curtida:0)?(y.removeClass("hidden"),k.html(i+" pessoa curtiu essa mensagem")):(y.removeClass("hidden"),k.html(i+" pessoas curtiram essa mensagem")),r.addClass("hidden"),c.removeClass("hidden")},[r])}),c.unbind("click"),c.click(function(){WS.post("mensagem_listas_discussao/descurtir",{id_mensagem_lista:a.id_mensagem_lista,usuario_id:App.sessao.usuario_id},function(a){var i;1==(i=null!=a.count_curtida?a.count_curtida:0)?(y.removeClass("hidden"),k.html(i+" pessoa curtiu essa mensagem")):i>1?(y.removeClass("hidden"),k.html(i+" pessoas curtiram essa mensagem")):y.addClass("hidden"),r.removeClass("hidden"),c.addClass("hidden")},[c])}),null!=a.anexos&&$.each(a.anexos,function(a,i){var e=i.documento_revisao_id;$(n.find(".div_anexos")).removeClass("hidden");var s=$('<div class="input-group" style="margin-top: 10px; margin-right: 5px;">');if("application/pdf"==i.mime_type)(t=$("<button>")).addClass("btn btn-default btn-sm"),t.text(FileShortName(i.revisao_nome)),i.revisao_nome,t.unbind("click"),t.click(function(){View.load("central_documentos/visualizar_pdf",function(a,i){i.show(e)})}),(d=$("<a>")).attr("type","button"),d.addClass("btn btn-default btn-sm"),d.attr("title",i.revisao_nome),d.attr("value",i.documento_revisao_id),(o=$("<span>")).addClass("glyphicon glyphicon-download-alt"),d.append(o),s.append(t),s.append(d);else if("video/mp4"==i.mime_type||"video/ogg"==i.mime_type)(t=$("<button>")).addClass("btn btn-default btn-sm"),t.text(FileShortName(i.revisao_nome)),i.revisao_nome,t.unbind("click"),t.click(function(){View.load("central_documentos/visualizar_video",function(a,i){i.show(e)})}),(d=$("<a>")).attr("type","button"),d.addClass("btn btn-default btn-sm"),d.attr("title",i.revisao_nome),d.attr("value",i.documento_revisao_id),(o=$("<span>")).addClass("glyphicon glyphicon-download-alt"),d.append(o),s.append(t),s.append(d);else if("image/png"==i.mime_type||"image/bmp"==i.mime_type||"image/jpeg"==i.mime_type||"image/jpg"==i.mime_type||"image/gif"==i.mime_type){var t,o;(t=$("<button>")).addClass("btn btn-default btn-sm"),t.text(FileShortName(i.revisao_nome)),i.revisao_nome,t.unbind("click"),t.click(function(){View.load("central_documentos/visualizar_documento",function(a,i){i.show(e)})}),(d=$("<a>")).attr("type","button"),d.addClass("btn btn-default btn-sm"),d.attr("title",i.revisao_nome),d.attr("value",i.documento_revisao_id),(o=$("<span>")).addClass("glyphicon glyphicon-download-alt"),d.append(o),s.append(t),s.append(d)}else{var d;(d=$("<a>")).attr("type","button"),d.addClass("btn btn-default btn-sm"),d.attr("title",i.revisao_nome),d.text(FileShortName(i.revisao_nome)),d.attr("value",i.documento_revisao_id),s.append(d)}l.append(s),l.append("&nbsp;&nbsp;&nbsp;"),i.revisao_nome,d.unbind("click"),d.click(function(){App.obter_token_publico(function(a){App.download(WS_URI+"documento/download/?documento_revisao_id="+e+"&token_publico="+a)})}),(i=$(n.find(".anexos"))).addClass("remove_anexo"),i.append(l)}),0==i.nova_mensagem_mural?n.appendTo(i.list_mural):(i.nova_mensagem_mural=!1,i.list_mural.find('[id="'+a.segundo_maior_id+'"]').before(n)),!App.sessao.dados.admin&&1!=a.admin_logado&&App.sessao.usuario_id!=a.autor_id||"N"!=i.status_discussao||(t.unbind("dblclick"),t.dblclick(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(e,n){n.onsave=function(a){i.list_mural.find('[id="'+a.id+'"]').find(".class-rows").remove(),i.list_mural.find('[id="'+a.id+'"]').addClass(".class-rows"),i.list_mural.find('[id="'+a.id+'"]').find(".lbl_mensagem").html(a.mensagem).find("img").css("max-width","100%"),i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".row-mensagem-img").remove(),a.anexos.length>0?$.each(a.anexos,function(e,n){if("image/png"==n.mime_type||"image/bmp"==n.mime_type||"image/jpeg"==n.mime_type||"image/jpg"==n.mime_type||"image/gif"==n.mime_type){var s=WS_URI+"documento/midia_social/?documento_id="+n.documento_id+"&tipo=v&tamanho=400&token_midia="+App.sessao.token_midia,t=$("<img />",{id:n.documento_id}).attr("data-original",s).addClass("text-center row-mensagem-img");t.lazyload(),t.appendTo(i.list_mural.find('[id="'+a.id+'"]').find(".imagens_mensagem")),t.css("max-width","100%"),o.css("text-align","center"),$("<p/>").appendTo(i.list_mural.find('[id="'+a.id+'"]').find(".imagens_mensagem"))}}):(i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".row-mensagem-img").remove(),i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".remove_anexo").remove())},n.onclose=function(){i.nova_mensagem_mural=!1},n.show(a.id_mensagem_lista,FORMULARIO.EDITAR,!1,i.lista_id)})}),h.unbind("click"),h.click(function(){View.load("grupo_rede_social_pagina/editar_mensagem",function(e,n){n.onsave=function(a){i.list_mural.find('[id="'+a.id+'"]').find(".class-rows").remove(),i.list_mural.find('[id="'+a.id+'"]').addClass(".class-rows"),i.list_mural.find('[id="'+a.id+'"]').find(".lbl_mensagem").html(a.mensagem).find("img").css("max-width","100%"),a.anexos.length>0?$.each(a.anexos,function(e,n){if("image/png"==n.mime_type||"image/bmp"==n.mime_type||"image/jpeg"==n.mime_type||"image/jpg"==n.mime_type||"image/gif"==n.mime_type){var s=WS_URI+"documento/midia_social/?documento_id="+n.documento_id+"&tipo=v&tamanho=400&token_midia="+App.sessao.token_midia,t=$("<img />",{id:n.documento_id}).attr("data-original",s).addClass("text-center row-mensagem-img");t.lazyload(),t.appendTo(i.list_mural.find('[id="'+a.id+'"]').find(".imagens_mensagem")),t.css("max-width","100%"),o.css("text-align","center"),$("<p/>").appendTo(i.list_mural.find('[id="'+a.id+'"]').find(".imagens_mensagem"))}}):(i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".row-mensagem-img").remove(),i.list_mural.find('[id="'+a.id_mensagem_lista+'"]').find(".remove_anexo").remove())},n.show(a.id_mensagem_lista,FORMULARIO.EDITAR,!1,i.lista_id)})})),f.unbind("click"),f.click(function(){a.autor_id!=App.sessao.usuario_id&&1!=App.sessao.dados.admin&&1!=a.admin_logado||View.load("grupo_rede_social_pagina/editar_mensagem",function(e,n){n.onsave=function(a){i.list_mural.find('[id="'+a.id+'"]').remove()},n.show(a.id_mensagem_lista,FORMULARIO.EXCLUIR,!1,i.lista_id)})})};a?(i.maior_id=a.maior_id,n(a),$(document).trigger("scroll")):($(i.arr_mural).each(function(a,e){n(e),a==i.arr_mural.length-1&&0==i.nova_mensagem_mural&&(i.ultima_mensagem_mural_id=e.id_mensagem_lista,i.maior_id=e.maior_id)}),$(document).trigger("scroll"))},i.btn_publicacao.unbind("click"),i.btn_publicacao.click(function(){if(App.is_nativo())App.obter_token_publico(function(a){if(i.anexo.length>0){var e={route:"documento/salvar_anexoGP",disable_buttons:[i.btn_cancelar_publicacao,i.btn_publicacao],data:{token_publico:a,documento_key:"documentos",documentos:i.anexo}};new PhoneGapWS(e,function(e){e.state==PhoneGapWS.STATE.SUCCESS?WS.post("mensagem_listas_discussao/salvar",{token_publico:a,mural_mensagem_id:i.mensagem_id,mensagem:get_tinymce(i.edt_mensagem_lista),files_names:e.return_value,mobile:App.is_nativo()?"sim":"nao",lista_id:i.lista_id},function(a){alert_saved("Mensagem publicada com sucesso"),a&&(i.ultima_mensagem_mural_id=null,i.maior_id=null,set_tinymce(i.edt_mensagem_lista,""),tinymce.remove(),i.limpar_anexo(),i.list_mural.find(".class-rows").remove(),i.div_btn_publicacao.addClass("hidden"),i.div_mostrar_anexo.addClass("hidden"),i.listar_info_lista())},[i.btn_cancelar_publicacao,i.btn_publicacao],null,!0):(i.btn_publicacao.removeClass("disabled"),i.btn_cancelar_publicacao.removeClass("disabled"))})}else WS.post("mensagem_listas_discussao/salvar",{token_publico:a,mural_mensagem_id:i.mensagem_id,mensagem:get_tinymce(i.edt_mensagem_lista),mobile:App.is_nativo()?"sim":"nao",lista_id:i.lista_id},function(a){alert_saved("Mensagem publicada com sucesso"),a&&(i.ultima_mensagem_mural_id=null,i.maior_id=null,set_tinymce(i.edt_mensagem_lista,""),tinymce.remove(),i.limpar_anexo(),i.list_mural.find(".class-rows").remove(),i.div_btn_publicacao.addClass("hidden"),i.div_mostrar_anexo.addClass("hidden"),i.listar_info_lista())},[i.btn_cancelar_publicacao,i.btn_publicacao],null,!0)});else{var a=i.div_anexos_publicacao.find('input[type="file"]');$.each(a,function(a,e){e.files[0]&&(i.anexo_array[a]=e.files[0])}),WS.post("mensagem_listas_discussao/salvar",{mural_mensagem_id:i.mensagem_id,mensagem:get_tinymce(i.edt_mensagem_lista),documentos:i.anexo_array,mobile:App.is_nativo()?"sim":"nao",lista_id:i.lista_id},function(a){alert_saved("Mensagem publicada com sucesso"),a&&(i.ultima_mensagem_mural_id=null,i.maior_id=null,set_tinymce(i.edt_mensagem_lista,""),tinymce.remove(),i.limpar_anexo(),i.list_mural.find(".class-rows").remove(),i.div_btn_publicacao.addClass("hidden"),i.div_mostrar_anexo.addClass("hidden"),i.carregar_mensagens_lista(!0,!0),i.flag=!1)},[i.btn_cancelar_publicacao,i.btn_publicacao],null,!0)}}),i.btn_mostrar_mais_mensagens.unbind("click"),i.btn_mostrar_mais_mensagens.click(function(){i.limite_comentario=i.limite_comentario+15,i.carregar_mensagens_lista(!0,!1)}),i.btn_refresh.unbind("click"),i.btn_refresh.click(function(){i.ultima_mensagem_mural_id=null,i.maior_id=null,i.nova_mensagem_mural=!1,i.carregar_mensagens_lista(!0,!0)}),this.unload=function(){View.unload(this.html_id)}}});