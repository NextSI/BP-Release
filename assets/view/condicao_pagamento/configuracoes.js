define([],function(){return function(o){"use strict";var t=this;this.html_id=o,this.dialog=$("#"+this.html_id),this.modal=this.dialog.find(".modal"),this.modal.attr("id",this.html_id+"_modal"),this.onselect=null,this.onclose=null,this.chk_gerar_codigo=this.dialog.find(".chk_gerar_codigo"),this.chk_somente_consulta=this.dialog.find(".chk_somente_consulta"),this.btn_cancelar=this.dialog.find(".btn_cancelar"),this.btn_salvar=this.dialog.find(".btn_salvar"),this.show=function(o){t.preencher(),show_modal(t.modal.attr("id"))},this.preencher=function(){WS.get("condicao_pagamento/get_parametros/",null,function(o){t.chk_gerar_codigo.bootstrapSwitch("state",o.condicao_pagamento_codigo_automatico),t.chk_somente_consulta.bootstrapSwitch("state","N"!=o.somente_consulta_condicao_pagamento)})},this.close=function(){close_modal(t.modal.attr("id")),void 0!==t.onclose&&t.onclose&&t.onclose()},this.unload=function(){t.close(),View.unload(this.html_id)},this.btn_cancelar.unbind("click"),this.btn_cancelar.click(function(){t.unload()}),this.btn_salvar.unbind("click"),this.btn_salvar.click(function(){WS.post("condicao_pagamento/salvar_configuracoes_condicao_pagamento",{condicao_pagamento_codigo_automatico:t.chk_gerar_codigo.prop("checked"),somente_consulta_condicao_pagamento:t.chk_somente_consulta.prop("checked")},function(o){alert_saved("Configurações salvas com sucesso"),t.unload()})})}});