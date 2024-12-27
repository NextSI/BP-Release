define([],function(){return function(i){"use strict";var e,a=this;this.html_id=i,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.title=this.modal.find(".modal-title"),this.tipo=null,this.onclose=null,this.edt_inicio_email=this.dialog.find(".edt_inicio_email"),this.edt_fim_email=this.dialog.find(".edt_fim_email"),this.edt_email_agenda=this.dialog.find(".edt_email_agenda"),this.edt_emails=this.dialog.find(".edt_emails"),this.li_edt_emails=this.dialog.find(".li_edt_emails"),this.ul_usuarios=this.dialog.find(".ul_usuarios"),this.emails_adicionais=this.dialog.find(".emails_adicionais"),this.edt_mensagem=this.dialog.find(".edt_mensagem"),this.edt_mensagem_count=this.dialog.find(".edt_mensagem_count"),this.cbo_cliente=this.dialog.find(".cbo_cliente"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_visualizar=this.dialog.find(".btn_visualizar"),this.btn_enviar=this.dialog.find(".btn_enviar"),this.btn_drop=this.dialog.find(".btn_drop"),this.div_btn_drop=this.dialog.find(".div_btn_drop"),this.arr_clientes=[],this.show=function(){set_datepicker(a.edt_inicio_email),set_datepicker(a.edt_fim_email),create_combobox(a.cbo_cliente,a.listar_clientes),a.criar_events_cliente(a.cbo_cliente),a.preencher(),show_modal(a.modal.attr("id")),a.edt_emails.unbind("keyup"),a.edt_emails.keyup($.debounce(500,a.pesquisar_email_adicionais))},this.listar_clientes=function(i,e){var t=e.parent(),n=t.find(".edt_combobox");WS.get("cliente/listar/",{nome_fantasia:n.val(),limite:0},function(n){limpar_combobox(e),$(n).each(function(i,a){var t=[];t.Nome=a.nome_fantasia,t["E-mail"]=a.email_agenda?a.email_agenda:"",add_option_combobox(e,i,a.cliente_id>0?a.cliente_id:null,t,null,JSON.stringify(a))}),i(!0),t.find(".ul_row").click(function(){var i=$(this).parent();a.cliente_id=i.attr("id_registro");var e=i.attr("dados-adicionais")?JSON.parse(i.attr("dados-adicionais")):null;a.edt_email_agenda.val(e.email_agenda?e.email_agenda:"")})})},this.criar_events_cliente=function(i){var e=i.parent().find(".edt_combobox");e.keypress(function(t){if(13==t.keyCode)setTimeout(function(){var t=i.parent().find(".ncbo_scroll").find(".row_selected");if(""==e.val().trim())a.cliente_id=null;else{var n=t.attr("id_registro");if(n>0){a.cliente_id=n;var l=t.attr("dados-adicionais")?JSON.parse(t.attr("dados-adicionais")):null;a.edt_email_agenda.val(l.email_agenda?l.email_agenda:"")}}set_focus(e)},150);else if(13==t.tecla_value){a.cliente_id=$(this).attr("selected-value");var n=$(this).attr("dados-adicionais")?JSON.parse($(this).attr("dados-adicionais")):null;a.edt_email_agenda.val(n.email_agenda?n.email_agenda:"")}})},this.enviar_email=function(i){void 0===i&&(i=!1),WS.post("agenda_evento/agenda_email_cliente",{mensagem:a.edt_mensagem.val(),emails:a.edt_email_agenda.val(),cliente_id:a.cliente_id,data_inicio:get_datepicker(a.edt_inicio_email),data_fim:get_datepicker(a.edt_fim_email),preview:i},function(e){0==i?(alert_saved("Agenda enviada com sucesso"),a.unload()):a.visualizar_agenda(e)},[a.btn_enviar,a.btn_cancelar,a.btn_visualizar])},this.count_msg=function(){msg_count(a.edt_mensagem,a.edt_mensagem_count,500)},this.drop_click=function(){a.ul_usuarios.find("li:gt()").remove(),a.edt_emails.val(""),a.edt_emails.click(function(i){i.stopPropagation()}),a.li_edt_emails.click(function(){a.div_btn_drop.find("dropdown").remove().appendTo(a.btn_drop.find("dropdown").text($(this).text())),document.getElementByClass(".dropdown-menu").style.position="fixed"})},this.pesquisar_email_adicionais=function(){var i=a.edt_emails.val(),t=function(i){a.ul_usuarios.append($('<li class="li_click"><a href="#">'+i.nome+" [ "+i.email+" ]</a></li>").click(function(){""==a.edt_email_agenda.val()?(e=i.email,a.edt_email_agenda.val(e)):-1==a.edt_email_agenda.val().indexOf(i.email)&&(e=i.email+";"+a.edt_email_agenda.val(),a.edt_email_agenda.val(e))}))};WS.get("usuario/listar/",{nome:i},function(i){a.ul_usuarios.find("li:gt()").remove();for(var e=0;e<i.length;e++){var n=i[e];t(n)}})},this.preencher=function(){WS.get("projeto/get_parametros/",null,function(i){a.edt_mensagem.val(i.agenda_email_cliente_mensagem),a.count_msg();var e="";i.edt_email_agenda&&$.each(i.edt_email_agenda,function(i,a){e=""==e?a.email:e+";"+a.email}),a.edt_email_agenda.val(e)})},this.visualizar_agenda=function(i){View.load("agenda/preview_email_cliente",function(e,a){a.show(i)})},this.close=function(){close_modal(a.modal.attr("id")),void 0!==a.onclose&&a.onclose&&a.onclose()},this.unload=function(){a.close(),View.unload(this.html_id)},this.edt_mensagem.keyup(function(){a.count_msg()}),this.btn_enviar.unbind("click"),this.btn_enviar.click(function(){a.enviar_email()}),this.btn_visualizar.unbind("click"),this.btn_visualizar.click(function(){a.enviar_email(!0)}),this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){a.unload()}),this.btn_drop.unbind("click"),this.btn_drop.click(function(){a.drop_click()})}});