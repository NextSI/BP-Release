"use strict";function _typeof(a){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var e=0,t=new Array(a.length);e<a.length;e++)t[e]=a[e];return t}}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}function _createClass(a,e,t){return e&&_defineProperties(a.prototype,e),t&&_defineProperties(a,t),a}function _possibleConstructorReturn(a,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(a):e}function _getPrototypeOf(a){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&_setPrototypeOf(a,e)}function _setPrototypeOf(a,e){return(_setPrototypeOf=Object.setPrototypeOf||function(a,e){return a.__proto__=e,a})(a,e)}define(["react","react-dom"],function(a,e){return function(e){function t(a){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,a))).state={clearState:!1},e.props.setParams=function(a){var t=void 0===a.fullscreen||a.fullscreen,o=a.data.projeto?a.data.projeto.arr_sequencias_baseline:[],i=a.data.projeto?a.data.projeto.controle_baseline:0,n=void 0!==a.listar_somente_analiticas&&a.listar_somente_analiticas,r=_assertThisInitialized(e),d=null,s=null,l=null,c=null,p=set_format_date(!1),_=document.createElement("div");_.className="div_listagem_atividade_projeto",_.style="min-width: 100%;",a.div.find(".div_listagem_atividade_projeto").remove(),a.div[0].appendChild(_);var u=detectmob()?"select":"dragAndDrop",v=get_icon_class();a.diferenca_altura&&(a.obter_tamanho_div_pai?a.div.find(".div_listagem_atividade_projeto").css("height","100%"):a.div.find(".div_listagem_atividade_projeto").css("height","calc(100vh - "+a.diferenca_altura+"px)"));var f=[{ID:TIPO_PREVISAO_INICIO.O_MAIS_BREVE_POSSIVEL,Tipo:"O mais breve possível"},{ID:TIPO_PREVISAO_INICIO.DEVE_INICIAR_EM,Tipo:"Deve iniciar em"}],m=function(){for(var e=I.getController("editing").getChanges(),t=!1,o=0;o<e.length;o++){var i=e[o];if(i.data&&Object.keys(i.data).length){t=!0;break}}t?alert_modal("Aviso","Você possui alterações não salvas que serão perdidas ao atualizar a listagem <br /> Deseja atualizar mesmo assim?","Sim",function(){a.fn_listar()},!0,"Cancelar",null,function(){}):a.fn_listar()},h=function a(e){var t="000:00";return e&&e.hasChildren&&e.children.forEach(function(e){(!1===e.data.cancelada||!0===e.data.cancelada&&!1===e.data.tipo_cancelamento_ignorar_prev_real)&&(t=somar_horas(t,qtd_str_ocorrencias(e.data.horas_previstas,":")?e.data.horas_previstas:e.data.horas_previstas.substr(0,e.data.horas_previstas.length-2)+":"+e.data.horas_previstas.substr(e.data.horas_previstas.length-2,2)),t=somar_horas(t,a(e)))}),t},w=function a(e){var t="000:00";return e&&e.hasChildren&&e.children.forEach(function(e){(!1===e.data.cancelada||!0===e.data.cancelada&&!1===e.data.tipo_cancelamento_ignorar_prev_real)&&(t=somar_horas(t,qtd_str_ocorrencias(e.data.horas_trabalhadas,":")?e.data.horas_trabalhadas:e.data.horas_trabalhadas.substr(0,e.data.horas_trabalhadas.length-2)+":"+e.data.horas_trabalhadas.substr(e.data.horas_trabalhadas.length-2,2)),t=somar_horas(t,a(e)))}),t},g=function a(e,t){if(t==e.key)s=!0,c=e;else if(e.hasChildren)for(var o=0;o<e.children.length;o++){var i=e.children[o];if(s)break;a(i,t)}},j=function a(e){var t=[];return t.push(e.key),e.children.forEach(function(e){t=t.concat(a(e))}),t},b=function(a){if(a){2==qtd_str_ocorrencias(a,":")&&(a=a.substring(0,a.lastIndexOf(":")));var e=a.indexOf("-");return e>-1&&(a=a.replaceAll("-","")),a=(a=pad(a.replaceAll(":",""),6)).substring(0,4)+":"+a.substring(4,6),e>-1&&(a="-"+a),a}},A=function(a,e,t){var o={atividade_projeto_id:a.id,cancelada:e,tipo_cancelamento_ignorar_prev_real:void 0!==t?t:""};WS.post({route:"atividade_projeto/cancelar/",data:o,func_response:function(a){m()}})},I=null,y=null,O=null,S={},C=null,x=null,E=null;a.somente_leitura?a.dropdown?(C={mode:"single"},x=function(e){if(e.selectedRowsData.length&&"A"==e.selectedRowsData[0].tipo_atividade&&("N"==a.data.projeto.bloquear_apontamento_atividade_concluida||e.selectedRowsData[0].status!=ATIVIDADE_SITUACAO.CONCLUIDO)){a.div_porcentagem&&(a.div_porcentagem.val(e.selectedRowsData[0].porcentagem),e.selectedRowsData[0].tarefas.length>0?a.div_porcentagem.addClass("disabled").attr("disabled","disabled"):a.div_porcentagem.removeClass("disabled").removeAttr("disabled")),y.component._$element.attr("id",e.selectedRowsData[0].id);var t=e.selectedRowKeys,o=t.length;y.component.option("value",o?t[0]:null),a.ao_selecionar&&a.ao_selecionar(t[0],e.selectedRowsData[0]),y.component.close()}}):C={mode:"multiple"}:(O={type:"buttons",buttons:[{hint:"Adicionar uma atividade analítica",icon:"fa fa-plus",cssClass:v,visible:function(e){return("S"==e.row.data.tipo_atividade||"P"==e.row.data.tipo_atividade)&&(a.planejamento_atividade||a.gerente_projeto||App.sessao.dados.admin)},onClick:function(a){"S"!=a.row.data.tipo_atividade&&"P"!=a.row.data.tipo_atividade||I.addRow(a.row.key)}},{hint:"Edição",icon:"fa fa-pencil-alt",cssClass:v,visible:function(e){return("S"==e.row.data.tipo_atividade||"A"==e.row.data.tipo_atividade)&&(a.planejamento_atividade||a.planejamento_datas||a.planejamento_financeiro||a.planejamento_recursos||a.gerente_projeto||App.sessao.dados.admin)},onClick:function(e){"A"==e.row.data.tipo_atividade?View.load("atividade_projeto/detalhes",function(t,o){var i={projeto_id:a.projeto.id,projeto_atividade_id:e.row.data.id,tipo:FORMULARIO.EDITAR,template:a.template,equipe:a.projeto.equipe_toda,nome:e.row.data.atividade_simplificada,grupo_usuarios_equipe:a.projeto.grupo_usuarios_equipe,cliente_nome:a.projeto.cliente_nome,equipe_toda:a.projeto.equipe_toda,permitir_apontamento_projeto_concluido:a.permitir_apontamento_projeto_concluido,status_projeto:a.projeto.status_projeto,projeto_apontamento_por:a.projeto_apontamento_por,utiliza_peso_atividades:a.projeto.utiliza_peso_atividades};o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})},o.show(i)},View.ABA.MULTIPLAS,null,null,{projetoAtividadeId:e.row.data.id}):"S"==e.row.data.tipo_atividade&&View.load("atividade_projeto/atividade_sintetica_detalhes",function(t,o){o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})};var i={atividade_sintetica_id:e.row.data.id,tipo:FORMULARIO.EDITAR,projeto_id:a.projeto.id,gerente_projeto:a.gerente_projeto,planejamento_datas:a.planejamento_datas};o.show(i)})}},{hint:"Visualizar",icon:"fa fa-eye",cssClass:v,visible:function(e){return!(a.gerente_projeto||a.planejamento_atividade||App.sessao.dados.admin||a.planejamento_datas||a.planejamento_financeiro||a.planejamento_recursos||"P"==e.row.data.tipo_atividade)},onClick:function(e){"A"==e.row.data.tipo_atividade?View.load("atividade_projeto/detalhes",function(t,o){var i={projeto_id:a.projeto.id,projeto_atividade_id:e.row.data.id,tipo:FORMULARIO.VISUALIZAR,template:a.template,equipe:a.projeto.equipe_toda,nome:e.row.data.atividade_simplificada,grupo_usuarios_equipe:a.projeto.grupo_usuarios_equipe,cliente_nome:a.projeto.cliente_nome,equipe_toda:a.projeto.equipe_toda,permitir_apontamento_projeto_concluido:a.permitir_apontamento_projeto_concluido,status_projeto:a.projeto.status_projeto,projeto_apontamento_por:a.projeto_apontamento_por,utiliza_peso_atividades:a.projeto.utiliza_peso_atividades};o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})},o.show(i)},View.ABA.MULTIPLAS,null,null,{projetoAtividadeId:e.row.data.id}):"S"==e.row.data.tipo_atividade&&View.load("atividade_projeto/atividade_sintetica_detalhes",function(t,o){o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})};var i={atividade_sintetica_id:e.row.data.id,tipo:FORMULARIO.VISUALIZAR,projeto_id:a.projeto.id,gerente_projeto:a.gerente_projeto,planejamento_datas:a.planejamento_datas};o.show(i)})}},{hint:"Criar Baseline",icon:"fa fa-magic",cssClass:v,visible:function(e){return(a.gerente_projeto||App.sessao.dados.admin)&&"P"==e.row.data.tipo_atividade},onClick:function(e){alert_modal("Atenção","Deseja criar uma baseline para todas as atividades deste projeto? ","Sim",function(){WS.post("atividade_projeto/criar_baseline/",{projeto_id:a.projeto.id,projeto_atividade_id:null,tipo_controle_baseline:i},function(){m(),alert_tooltip("Baseline criada com sucesso","success",800)})},!0,"Não",function(){}),e.event.preventDefault()}},{hint:"Histórico Baseline (Projeto)",icon:"fa fa-history",cssClass:v,visible:function(e){return a.projeto.controle_baseline==window.PROJETO_CONTROLE_BASELINE.PROJETO&&"P"==e.row.data.tipo_atividade&&(a.gerente_projeto||App.sessao.dados.admin)},onClick:function(e){View.loadReact(window.views.projeto.HistoricoBaseline.default,{projeto_id:a.data.projeto.id,abaTitulo:"Baseline - ".concat(a.data.projeto.nome)})}},{hint:"Apontamento",icon:"fa fa-clock",cssClass:v,visible:function(e){return"A"==e.row.data.tipo_atividade&&App.verifica_permissao(App.temp.empresa,"apontamento_atividade")&&(a.projeto.status_projeto!=PROJETO_STATUS.CONCLUIDO||a.permitir_apontamento_projeto_concluido)},onClick:function(e){View.load("apontamento_projeto/detalhes",function(t,o){var i={projeto_id:a.projeto.id,projeto_nome:a.projeto.nome,cliente_id:a.projeto.cliente_id,cliente_nome:a.projeto.cliente_nome||a.projeto.cliente_razao_social,projeto_atividade_id:e.row.data.id};o.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})},o.show(i)},View.ABA.MULTIPLAS)}},{hint:"Novo chamado",icon:"fa fa-comments",cssClass:v,visible:function(e){return"A"==e.row.data.tipo_atividade&&(a.planejamento_atividade||a.gerente_projeto||App.sessao.dados.admin)},onClick:function(e){WS.get({route:"atividade_projeto/get_detalhes_atividade/",data:{atividade_id:e.row.data.id,extra_info:!0},func_response:function(t){var o=t[0].atividade_nome,i="";for(var n in a.projeto.equipe_toda)if("clean"!=n){var r=a.projeto.equipe_toda[n];!0!==r.gerente_projeto&&"S"!=r.gerente_projeto||(i=""===i&&null!==r.email&&""!==r.email&&"null"!==r.email?r.email:i+";"+r.email)}var d=e.row.data.email_executores?e.row.data.email_executores:"",s=i+(""!==d?";"+d:"")+(null!==e.row.data.email_responsavel&&""!==e.row.data.email_responsavel?";"+e.row.data.email_responsavel:""),l="";s.split(";"),s=$.unique(s.split(";")),$(s).each(function(a,e){""===l&&null!==e&&""!==e&&"null"!==e?l=e:";"!=e&&-1==l.indexOf(e)&&(l=l+";"+e)});null!==e.row.data.prazo&&null===e.row.data.conclusao&&e.row.data.prazo,View.loadReact(window.views.chamado.Detalhes.default,{projetoAtividadeId:e.row.data.id,projetoId:a.projeto.id,entidadeId:a.projeto.cliente_id,entidadeTipo:TIPO_ENTIDADE.CLIENTE,assunto:o,emails:l},function(a,e){},View.ABA.MULTIPLAS)}})}},{hint:"Nova solicitação",cssClass:"icon_solicitacao",visible:function(e){return"A"==e.row.data.tipo_atividade&&(a.planejamento_atividade||a.gerente_projeto||App.sessao.dados.admin)},onClick:function(e){View.load("solicitacao/nova",function(t,o){o.onclose=m(),o.show(null,e.row.data.id,a.projeto.id)})}},{hint:"Criar Baseline",icon:"fa fa-magic",cssClass:v,visible:function(e){return a.projeto.controle_baseline==window.PROJETO_CONTROLE_BASELINE.ATIVIDADE&&"A"==e.row.data.tipo_atividade&&(a.gerente_projeto||App.sessao.dados.admin)},onClick:function(a){alert_modal("Atenção","Deseja criar uma baseline para esta atividade? ","Sim",function(){WS.post("atividade_projeto/criar_baseline/",{projeto_id:a.row.data.projeto_id,projeto_atividade_id:a.row.data.id,tipo_controle_baseline:i},function(){m(),alert_tooltip("Baseline criada com sucesso","success",800)})},!0,"Não",function(){})}},{hint:"Histórico Baseline",icon:"fa fa-history",cssClass:v,visible:function(e){return a.projeto.controle_baseline==window.PROJETO_CONTROLE_BASELINE.ATIVIDADE&&"A"==e.row.data.tipo_atividade&&(a.gerente_projeto||App.sessao.dados.admin)},onClick:function(a){View.load("atividade_projeto/historico_baseline",function(e,t){t.show(a.row.data)},View.ABA.NAO)}},{hint:"Favoritar",icon:"far fa-star",cssClass:v,visible:function(a){return!verifica_favorito("atividades",a.row.data.id)&&!a.row.removed&&"A"==a.row.data.tipo_atividade&&"raiz"!=a.row.data.id},onClick:function(a){favoritar_item("atividades",a.row.data.id,!0),m()}},{hint:"Desfavoritar",icon:"fas fa-star",cssClass:v,visible:function(a){return verifica_favorito("atividades",a.row.data.id)&&!a.row.removed&&"A"==a.row.data.tipo_atividade&&"raiz"!=a.row.data.id},onClick:function(a){favoritar_item("atividades",a.row.data.id,!1),m()}},{hint:"Apagar registro",icon:"fa fa-trash",cssClass:v,visible:function(e){return!e.row.removed&&"P"!=e.row.data.tipo_atividade&&a.gerente_projeto},onClick:function(e){"S"==e.row.node.data.tipo_atividade?View.load("atividade_projeto/atividade_sintetica_detalhes",function(t,o){o.onsave=function(){m()};var i={atividade_sintetica_id:e.row.data.id,tipo:FORMULARIO.EXCLUIR,projeto_id:a.projeto.id,gerente_projeto:a.gerente_projeto,planejamento_datas:a.planejamento_datas};o.show(i)}):(I.deleteRow(e.row.rowIndex),e.component.focus(e.component.getCellElement(0,0)))}}]},S={mode:"batch",allowUpdating:!0,useIcons:!0});var T={dataField:"porcentagem_peso",caption:"(%) Peso",dataType:"number",width:120,visibleIndex:9,allowFiltering:!1,allowFixing:!1,allowGrouping:!1,allowHeaderFiltering:!1,allowHiding:!1,allowReordering:!1,allowResizing:!1,allowSearch:!1,allowSorting:!1,cellTemplate:function(a,e){"raiz"==e.key?e.data.total_peso_atividades&&(e.data.total_peso_atividades=Number(e.data.total_peso_atividades),Number.isInteger(e.data.total_peso_atividades)&&(e.data.total_peso_atividades=+e.data.total_peso_atividades),100!==e.data.total_peso_atividades?a.append($("<i>",{class:"text-warning fas fa-exclamation-triangle"})).append("&nbsp;").append($("<span>",{class:"text-warning",text:e.data.total_peso_atividades})).attr("title","A soma dos pesos das atividades deve resultar em 100%"):$(a).text(e.data.total_peso_atividades)):"S"==e.data.tipo_atividade&&e.data.total_peso_atividades_filhas?(e.data.total_peso_atividades_filhas=Number(e.data.total_peso_atividades_filhas),Number.isInteger(e.data.total_peso_atividades_filhas)&&(e.data.total_peso_atividades_filhas=+e.data.total_peso_atividades_filhas),$(a).append($("<span>",{text:e.data.total_peso_atividades_filhas})).text(e.data.total_peso_atividades_filhas).attr("title","Soma dos pesos das atividades filhas")):$(a).text(e.value)}},R=[{dataField:"atividade_simplificada",caption:"Nome da atividade",fixed:!0,validationRules:[{type:"required"}],width:200},{dataField:"codigo",width:100}];if(t){if(R=[].concat(_toConsumableArray(R),[{dataField:"sequencia",caption:"Sequência",dataType:"string",allowEditing:!1,width:100},{dataField:"marco",dataType:"boolean",width:100},{dataField:"arr_atividades_predecessoras",caption:"Atividades Predecessoras",visible:!a.somente_leitura,editorType:"dxTagBox",calculateCellValue:function(a){return a.arr_atividades_predecessoras?Array.isArray(a.arr_atividades_predecessoras)?a.arr_atividades_predecessoras:JSON.parse(a.arr_atividades_predecessoras):null},calculateDisplayValue:function(e){if(e.arr_atividades_predecessoras){if(Array.isArray(e.arr_atividades_predecessoras))return converterLookup(e.arr_atividades_predecessoras,a.data.atividades,"id","atividade_simplificada");var t=JSON.parse(e.arr_atividades_predecessoras);return converterLookup(t,a.data.atividades,"id","atividade_simplificada")}return null},editorOptions:{dataSource:function(a){if(a){var e=JSON.parse(JSON.stringify(a));return e.splice(e.length-1,1),e}return[]}(a.data.atividades),showSelectionControls:!0,applyValueMode:"useButtons",displayExpr:"atividade_simplificada",valueExpr:"id"},width:200},{dataField:"projeto_atividade_sintetica_pai_id",caption:"Atividade Pai",visible:!a.somente_leitura,lookup:{dataSource:a.data.atividades_sinteticas,displayExpr:"nome",valueExpr:"id"},width:100},{dataField:"assunto_projetos_id",caption:"Assunto",lookup:{dataSource:a.data.assuntos,displayExpr:"descricao",valueExpr:"assunto_projeto_id"},width:120},{dataField:"classificacao_projeto_atividade_id",caption:"Classificação",lookup:{dataSource:a.data.classificacoes,displayExpr:"nome",valueExpr:"projeto_atividade_classificacao_id"},width:120,visible:!1},{dataField:"status",lookup:{dataSource:[{ID:"1",Status:"Programado"},{ID:"2",Status:"Andamento"},{ID:"3",Status:"Concluído"},{ID:"4",Status:"Não iniciado"},{ID:"5",Status:"Atrasado"},{ID:"6",Status:"Cancelada"}],displayExpr:"Status",valueExpr:"ID"},width:120,cellTemplate:function(a,e){var t="default";+e.value===ATIVIDADE_SITUACAO.ANDAMENTO&&(t="info"),+e.value===ATIVIDADE_SITUACAO.CONCLUIDO&&(t="success"),+e.value===ATIVIDADE_SITUACAO.NAO_INICIADO&&(t="warning"),+e.value!==ATIVIDADE_SITUACAO.ATRASADO&&+e.value!==ATIVIDADE_SITUACAO.PROGRAMADO||(t="danger"),$('<div class="label label-'.concat(t,'">')).text(e.displayValue).appendTo(a)}},{dataField:"porcentagem",filterOperations:[],caption:"% Conclusão",dataType:"number",calculateDisplayValue:function(a){var e="0";if("P"==a.tipo_atividade)e=a.projeto_porcentagem_concluido,a.porcentagem_total=e;else if("S"==a.tipo_atividade){s=!1,c=null,d=0,g(l,a.id);var t=function a(e){var t=0;if(e&&e.hasChildren)for(var o=0;o<e.children.length;o++){var i=e.children[o];!1===i.data.cancelada&&(t+=parseInt(i.data.porcentagem?i.data.porcentagem:0),t+=a(i),"A"==i.data.tipo_atividade&&d++)}return t}(c);e=parseInt(a.porcentagem)<0||0==t?"0":parseInt(a.porcentagem)>100?"100":Number(t/d).toFixed(2),a.porcentagem_total=e}else e=parseInt(a.porcentagem)<0||null==a.porcentagem?"0":parseInt(a.porcentagem)>100?"100":Number(a.porcentagem).toFixed(2);return e},cellTemplate:function(e,t){var o=t.data.porcentagem||t.data.porcentagem_total||null;if(o){var i=function(e){for(var t=0;t<a.data.cores_atividades.length;t++){var o=a.data.cores_atividades[t];if(parseInt(e)>=parseInt(o.inicio)&&parseInt(e)<=parseInt(o.fim))return o}return!1}(o),n=i.cor_fonte||"",r=i.cor||"";$(e).css({color:n,background:r}).text(t.displayValue)}},width:100},{dataField:"tarefas",caption:"Checklist",allowEditing:!1,customizeText:function(a){if(void 0!==a.value&&void 0!==a.target&&("filterPanel"==a.target||"row"==a.target))return a.value.length>0?"".concat(a.value.filter(function(a){return a.realizado}).length," / ").concat(a.value.length):" - "},width:100},{dataField:"horas_previstas",filterOperations:[],editCellTemplate:function(a,e){var t={valor:e.value,aoAlterar:function(a){e.setValue(a)}};ReactDOM.render(React.createElement(window.components.TextBoxHora.default,t),a[0])},calculateDisplayValue:function(a){var e="00:00";return"S"==a.tipo_atividade||"P"==a.tipo_atividade?(s=!1,c=null,g(l,a.id),e=(e=h(c)).substr(0,e.length-3)):e=a.horas_previstas,e},width:100},{dataField:"horas_trabalhadas",filterOperations:[],format:"decimal fixedPoint",customizeText:function(a){return b(a.value)},calculateSortValue:function(a){var e="000:00";return"S"==a.tipo_atividade||"P"==a.tipo_atividade?(s=!1,c=null,g(l,a.id),e=w(c)):(void 0!==a.horas_trabalhadas&&null!==a.horas_trabalhadas&&""!==a.horas_trabalhadas||(a.horas_trabalhadas="000:00"),e=b(a.horas_trabalhadas)),e?fn_converter_horas_para_segundos(e):null},calculateDisplayValue:function(a){var e="000:00";return"S"==a.tipo_atividade||"P"==a.tipo_atividade?(s=!1,c=null,g(l,a.id),e=w(c)):(void 0!==a.horas_trabalhadas&&null!==a.horas_trabalhadas&&""!==a.horas_trabalhadas||(a.horas_trabalhadas="000:00"),e=b(a.horas_trabalhadas)),e},width:100},{dataField:"saldo_horas",filterOperations:[],format:"decimal fixedPoint",customizeText:function(a){return b(a.value)},calculateSortValue:function(a){var e="000:00";return"S"==a.tipo_atividade||"P"==a.tipo_atividade?(s=!1,c=null,g(l,a.id),e=subtrair_horas(h(c),w(c))):(void 0!==a.saldo_horas&&null!==a.saldo_horas&&""!==a.saldo_horas||(a.saldo_horas="000:00"),e=b(a.saldo_horas)),e?fn_converter_horas_para_segundos(e):null},calculateDisplayValue:function(a){var e="000:00";return"S"==a.tipo_atividade||"P"==a.tipo_atividade?(s=!1,c=null,g(l,a.id),e=subtrair_horas(h(c),w(c))):(void 0!==a.saldo_horas&&null!==a.saldo_horas&&""!==a.saldo_horas||(a.saldo_horas="000:00"),e=b(a.saldo_horas)),e},width:100},{dataField:"tipo_cancelamento_ignorar_prev_real",caption:"Ignorar Prev./Realiz. Quando Cancelada",dataType:"boolean",width:170,visible:!1},{dataField:"nome_executores",caption:"Executores",filterOperations:[],width:150},{dataField:"responsavel_nome",caption:"Responsável",filterOperations:[],width:150,visible:!1},{dataField:"tipo_previsao_inicio",caption:"Tipo Prev. Ini",lookup:{dataSource:f,displayExpr:"Tipo",valueExpr:"ID"},width:120},{dataField:"previsao_inicio",caption:"Prev. Ini",dataType:"date",format:p,width:100,setCellValue:function(a,e){a.tipo_previsao_inicio!=TIPO_PREVISAO_INICIO.DEVE_INICIAR_EM&&(a.tipo_previsao_inicio=TIPO_PREVISAO_INICIO.DEVE_INICIAR_EM),this.defaultSetCellValue(a,e)},allowHeaderFiltering:!1},{dataField:"inicio",caption:"Início real",dataType:"date",format:p,width:100,allowHeaderFiltering:!1},{dataField:"prazo",caption:"Prev. Conclusão",dataType:"date",format:p,width:100,allowHeaderFiltering:!1},{dataField:"conclusao",caption:"Conclusão",dataType:"date",format:p,width:100,allowHeaderFiltering:!1},O]),i==PROJETO_CONTROLE_BASELINE.PROJETO)for(var P=function(a){var e={dataField:"inicio_previsto_baseline_"+a,caption:"Inicio Previsto Baseline ("+a+")",dataType:"date",format:p,width:100,allowEditing:!1,allowHeaderFiltering:!1},t={dataField:"termino_previsto_baseline_"+a,caption:"Término Previsto Baseline ("+a+")",dataType:"date",format:p,width:100,allowEditing:!1,allowHeaderFiltering:!1},o={dataField:"trabalho_previsto_baseline_"+a,caption:"Trabalho Previsto Baseline ("+a+")",dataType:"string",width:100,allowEditing:!1};R.push(e,t,o)},D=0;D<o.length;D++){P(o[D])}else i==PROJETO_CONTROLE_BASELINE.ATIVIDADE&&R.push({dataField:"inicio_previsto_baseline",caption:"Início Previsto Baseline",dataType:"date",format:p,allowEditing:!1,width:100,allowHeaderFiltering:!1},{dataField:"termino_previsto_baseline",caption:"Termino Previsto Baseline",dataType:"date",format:p,allowEditing:!1,width:100,allowHeaderFiltering:!1},{dataField:"trabalho_previsto_baseline",caption:"Trabalho Previsto Baseline",format:"decimal fixedPoint",allowEditing:!1,customizeText:function(a){if(void 0===a.value||void 0===a.target||"filterPanel"!=a.target&&"row"!=a.target||!a.value)return"000:00";var e=a.value.indexOf(":");return a.value=a.value.replaceAll(":",""),a.value.substring(0,e)+":"+a.value.substring(e,e+2)},width:100});!a.projeto||"S"!=a.projeto.utiliza_peso_atividades&&!0!==a.projeto.utiliza_peso_atividades||R.push(T)}var V=R.filter(function(a){return a&&"string"==typeof a.dataField}).map(function(a){return a.dataField}),F=["apontamento_projeto","projeto_predecessora"].includes(a.parametro_usuario)?null:window.components.DataGridPadrao.stateStoring(a.parametro_usuario,V),k={dataSource:n?a.data.atividades.filter(function(a){return"A"===a.tipo_atividade}).map(function(a){return a.projeto_atividade_sintetica_pai_id=null,a}):a.data.atividades,keyExpr:"id",parentIdExpr:"projeto_atividade_sintetica_pai_id",showBorders:!0,expandedRowKeys:["raiz"],columnResizingMode:"widget",rowAlternationEnabled:!1,searchPanel:{visible:!detectmob(),width:200,placeholder:"Pesquisa geral"},onRowPrepared:function(a){"data"==a.rowType&&("S"!=a.data.tipo_atividade&&"P"!=a.data.tipo_atividade||a.rowElement.css("font-weight","bold"))},onToolbarPreparing:function(e){var t=null;a.obj_solicitacao&&(t={widget:"dxButton",options:{icon:"assets/img/icones_bp/processos.svg",hint:a.obj_solicitacao.entrega?"S"==a.obj_solicitacao.cancelada?"Atividade da solicitação #"+a.obj_solicitacao.id+" cancelada":"Atividade da solicitação #"+a.obj_solicitacao.id+" concluída":"Dar continuidade no processo "+a.obj_solicitacao.solicitacao.versao_processo.nome,text:a.obj_solicitacao.entrega?"S"==a.obj_solicitacao.cancelada?"Atividade da solicitação #"+a.obj_solicitacao.id+" cancelada":"Atividade da solicitação #"+a.obj_solicitacao.id+" concluída":"Dar continuidade no processo "+a.obj_solicitacao.solicitacao.versao_processo.nome,onClick:function(){View.load("solicitacao/detalhes",function(e,t){t.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})},t.show(a.obj_solicitacao.id,FORMULARIO.EDITAR)},View.ABA.MULTIPLAS,null,null,{solicitacaoAtividadeId:a.obj_solicitacao.id})},onInitialized:function(e){e.component.element().addClass("S"==a.obj_solicitacao.cancelada?"bg-danger":"bg-success")},visible:parseInt(a.projeto.porcentagem_concluido)>=parseInt(a.obj_solicitacao.projeto_conclusao)},showText:"inMenu",location:"after",name:"BtnSolicitacao",locateInMenu:"auto"});var o=[{widget:"dxButton",options:{text:"Gerar sequência das atividades",hint:"Gerar sequência das atividades",icon:"orderedlist",onClick:function(e){WS.post("/atividade_projeto/gerar_sequencia_atividades/",{projeto_id:a.projeto.id,atividades:l&&l.children&&l.children.length?window.CircularJSON.stringify(l.children[0]):[]},function(a){!0===a?(window.alert_saved("Operação concluída com sucesso"),m()):window.alert_fail("Ocorreu uma falha na operação")})}},visible:!a.somente_leitura&&(a.planejamento_atividade||a.gerente_projeto||App.sessao.dados.admin),location:"after",name:"BtnEnumerarTopicos",locateInMenu:"auto",showText:"inMenu"},{widget:"dxDropDownButton",options:{text:"Adicionar",icon:"plus",displayExpr:"name",keyExpr:"id",onItemClick:function(e){"analitica"===e.itemData.tipo_atividade?I.addRow("raiz"):"sintetica"===e.itemData.tipo_atividade&&View.load("atividade_projeto/atividade_sintetica_detalhes",function(e,t){var o={projeto_id:a.projeto.id,gerente_projeto:a.gerente_projeto,planejamento_datas:a.planejamento_datas};t.onclose=function(){setTimeout(function(){View.get_md5_tela_ativa()==a.html_id&&m()})},t.show(o)},View.ABA.NAO)},items:[{id:1,name:"Atividade Analítica",tipo_atividade:"analitica"},{id:2,name:"Atividade Sintética",tipo_atividade:"sintetica"}]},visible:!a.somente_leitura&&(a.planejamento_atividade||a.gerente_projeto||App.sessao.dados.admin),location:"after",name:"BtnGroupAdd",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"fa fa-sync",hint:"Recarregar listagem de atividades",text:"Recarregar listagem de atividades",onClick:function(){m()},visible:!a.somente_leitura},showText:"inMenu",location:"after",name:"BtnRefresh",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"fa fa-expand-alt",hint:"Expandir todas as atividades",text:"Expandir todas as atividades",onClick:function(){var a=j(l);I.beginUpdate(),a.forEach(function(a){I.expandRow(a)}),I.endUpdate()}},showText:"inMenu",location:"after",name:"BtnExpandAll",locateInMenu:"auto"},{widget:"dxButton",options:{icon:"fa fa-compress-alt",hint:"Recolher todas as atividades",text:"Recolher todas as atividades",onClick:function(){var a=j(l);I.beginUpdate(),a.forEach(function(a){I.collapseRow(a)}),I.endUpdate()}},showText:"inMenu",location:"after",name:"BtnCollapseAll",locateInMenu:"auto"},t];e.toolbarOptions.items=add_botao_dx_toolbar(o,e.toolbarOptions.items);for(var i=0;i<e.toolbarOptions.items.length;i++){var n=e.toolbarOptions.items[i];"saveButton"===n.name&&(n.options.onClick=function(t){var o=e.component.getController("validating")._validationState,i=!1;if(o.length)for(var n=0;n<o.length;n++){if(!1===o[n].isValid){i=!0;break}}if(i)return window.alertaPopUp("Validação","Realize os ajustes dos valores inválidos antes de continuar."),!1;WS.post("atividade_projeto/salvar_dxtreelist/",{projeto_id:a.projeto.id,data:CircularJSON.stringify(I.getController("editing").getChanges())},function(a){alert_tooltip(!0===a?"Todas as atividades foram salvas":"Falha ao salvar as atividades",!0===a?"success":"error"),!0===a&&(I.saveEditData(),setTimeout(function(){m()}))})})}},onContentReady:function(e){add_filtro_cor_tema(e);var t=I.getCellElement(0,"porcentagem");if(t&&a.projeto&&(a.projeto.cor_execucao&&t.css("background",a.projeto.cor_execucao),a.projeto.cor_execucao_fonte&&t.css("color",a.projeto.cor_execucao_fonte)),r.state.clearState&&(I.state({}),r.setState({clearState:!1})),l=e.component.getRootNode(),I.getDataSource().sort())I.option("rowDragging.allowReordering",!1);else if(!a.somente_leitura){I.option("rowDragging.allowReordering",!0);var o=[];!function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(a.somente_leitura)return!1;t.data.id&&o.push({id:t.data.id,tipo_atividade:t.data.tipo_atividade,ordem:i}),t.hasChildren&&t.children.forEach(function(a,t){return e(a,t+1)})}(l.children[0]);var i={projeto_id:a.projeto.id,atividades:o};WS.post({route:"atividade_projeto/salvar_ordem/",data:i,func_response:function(a){}})}},onEditorPreparing:function(e){if(!a.somente_leitura){var t=!1,o=!1,i=!1,n=!1;switch(a.planejamento_atividade||a.gerente_projeto||App.sessao.dados.admin||(i=!0),e.dataField){case"assunto_projetos_id":case"classificacao_projeto_atividade_id":case"tipo_cancelamento_ignorar_prev_real":case"inicio":case"conclusao":o=!0;break;case"status":t=!0,o=!0;break;case"porcentagem":case"horas_previstas":o=!0,n=!0;break;case"horas_trabalhadas":case"saldo_horas":case"nome_executores":case"responsavel_nome":t=!0,o=!0,n=!0;break;case"codigo":"S"==a.projeto.bloquear_codigo&&(t=!0,o=!0)}"dataRow"==e.parentType&&("A"==e.row.data.tipo_atividade&&t||"S"==e.row.data.tipo_atividade&&o||null==e.row.data.tipo_atividade&&t||"P"==e.row.data.tipo_atividade||i)&&(e.editorOptions.disabled=!0),"filterRow"==e.parentType&&n&&(e.cancel=!0),"dxSelectBox"==e.editorName&&(e.editorOptions.onOpened=function(a){a.component._popup.option("resizeEnabled",!0),a.component._popup.option("width",300)});var r=e.editorOptions.onValueChanged;e.editorOptions.onValueChanged=function(t){if(r.apply(this,arguments),"previsao_inicio"==e.dataField){var o=e.row.rowIndex;if(t.value&&e.row.data.prazo_dias>0){var i=t.value,n=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),s=String(i.getDate()).padStart(2,"0"),l="".concat(n,"-").concat(d,"-").concat(s),c=fn_dias_uteis(a.data.projeto.calendario_trabalho_id,l,e.row.data.prazo_dias);e.component.cellValue(o,"prazo",c)}}}}},selection:C,filterRow:{visible:!0,applyFilter:"auto"},headerFilter:{visible:!0,texts:{emptyValue:"(Vazio)"}},filterPanel:{visible:!0},sorting:{mode:"multiple"},allowColumnReordering:!0,allowColumnResizing:!0,columnChooser:{enabled:!0,allowSearch:!0,mode:u},columnFixing:{enabled:!0},stateStoring:F,focusedRowEnabled:!1,editing:S,columns:R,onInitNewRow:function(e){e.data.marco=!1,e.data.status="4",e.data.tipo_cancelamento_ignorar_prev_real="S"===a.projeto.tipo_cancelamento_ignorar_prev_real,e.data.nova_atividade_analitica=!0},onEditingStart:function(e){e.data.tipo_previsao_inicio!=TIPO_PREVISAO_INICIO.O_MAIS_BREVE_POSSIVEL||"previsao_inicio"!=e.column.dataField&&"prazo"!=e.column.dataField||(e.cancel=!0),"A"==e.data.tipo_atividade&&"porcentagem"==e.column.dataField&&e.data.tarefas.length>0&&(e.cancel=!0),"S"!=e.data.tipo_atividade&&"P"!=e.data.tipo_atividade||"horas_previstas"!=e.column.dataField||(e.cancel=!0),"porcentagem_peso"==e.column.dataField&&("A"===e.data.tipo_atividade||e.data.nova_atividade_analitica||"S"===a.projeto.utiliza_peso_atividades||!0===a.projeto.utiliza_peso_atividades||(e.cancel=!0))},onEditorPrepared:function(a){if("horas_previstas"==a.dataField){var e={mask:"999:59",definitions:{5:{validator:"[0-5]"}}};a.editorElement.find("input").last().inputmask(e),a.editorElement.find("input").last().on("blur",function(){var a=$(this).val(),t=Inputmask.isValid($(this).val(),e);a.trim().length>0&&!t&&(alert_warning(a+" não é um valor válido!"),$(this).val("000:00").trigger("change"))})}else"previsao_inicio"!=a.dataField&&"inicio"!=a.dataField&&"prazo"!=a.dataField&&"conclusao"!=a.dataField||a.editorElement.find("input").last().mask("99/99/99")},selectedRowKeys:E?[E]:[],onSelectionChanged:x,onNodesInitialized:function(a){l=a.root},onContextMenuPreparing:function(e){if("header"==e.target&&Array.isArray(e.items)&&e.items.push({text:"Restaurar estado das colunas",visible:!0,beginGroup:!0,onItemClick:function(a){DevExpress.ui.dialog.confirm("Os filtros, ordenações, agrupamentos, posição, tamanho, e visibilidade das colunas desta listagem serão restauradas ao estado padrão. <b>Deseja continuar?</b>","Restaurar estado das colunas").done(function(a){a&&(r.setState({clearState:!0}),m())})}}),e.row&&"data"===e.row.rowType&&((a.gerente_projeto||App.sessao.dados.admin)&&"A"==e.row.data.tipo_atividade&&(e.row.data.cancelada?e.items=[{text:"Desfazer cancelamento da atividade",visible:!0,onItemClick:function(){A(e.row.data,!1)}}]:e.items=[{text:"Cancelar atividade",visible:!0,onItemClick:function(){A(e.row.data,!0,"S"===a.projeto.tipo_cancelamento_ignorar_prev_real)}},{text:"Mais opções",items:[{text:"Cancelar atividade e considerar previsto/realizado"+("N"==a.projeto.tipo_cancelamento_ignorar_prev_real?" (Padrão)":""),visible:!0,onItemClick:function(){A(e.row.data,!0,!1)}},{text:"Cancelar atividade e ignorar previsto/realizado"+("S"==a.projeto.tipo_cancelamento_ignorar_prev_real?" (Padrão)":""),visible:!0,onItemClick:function(){A(e.row.data,!0,!0)}}]}]),l&&l.children&&l.children.length)){var t=[];if(function a(e,t){if(e.hasOwnProperty("level")){var o=e.level;!t.includes(o)&&e.hasChildren&&t.push(o)}if(e.hasOwnProperty("children")&&Array.isArray(e.children)){var i=!0,n=!1,r=void 0;try{for(var d,s=e.children[Symbol.iterator]();!(i=(d=s.next()).done);i=!0)a(d.value,t)}catch(a){n=!0,r=a}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}}}(l.children[0],t),t.length){void 0!==e.items&&e.items.length||(e.items=[]),e.items.push({text:"Estrutura de tópicos",items:[]});for(var o=e.items.length-1,i=0;i<t.length;i++){var n=t[i];e.items[o].items.push({text:"Nível ".concat(n),level:n,onItemClick:function(a){function e(a,t,o){if(a.hasOwnProperty("key")&&(o.includes(a.key)||a.level!=t||o.push(a.key)),a.hasOwnProperty("children")&&Array.isArray(a.children)){var i=!0,n=!1,r=void 0;try{for(var d,s=a.children[Symbol.iterator]();!(i=(d=s.next()).done);i=!0){e(d.value,t,o)}}catch(a){n=!0,r=a}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}}}for(var t=[],o=0;o<=a.itemData.level;o++)e(l.children[0],o,t);if(t.length){var i=j(l);(function(a,e){return new Promise(function(t){a.beginUpdate();var o=!0,i=!1,n=void 0;try{for(var r,d=e[Symbol.iterator]();!(o=(r=d.next()).done);o=!0){var s=r.value;a.collapseRow(s)}}catch(a){i=!0,n=a}finally{try{o||null==d.return||d.return()}finally{if(i)throw n}}t()})})(I,i).then(function(){return function(a,e){return new Promise(function(t){var o=!0,i=!1,n=void 0;try{for(var r,d=e[Symbol.iterator]();!(o=(r=d.next()).done);o=!0){var s=r.value;a.expandRow(s)}}catch(a){i=!0,n=a}finally{try{o||null==d.return||d.return()}finally{if(i)throw n}}a.endUpdate(),t()})}(I,t)}).catch(function(a){console.error("Erro na estrutura de tópicos. Verifique o erro abaixo."),console.error(a)})}}})}}}},rowDragging:a.somente_leitura?null:{allowDropInsideItem:!1,allowReordering:!a.somente_leitura,onReorder:function(e){var t=e.component.getVisibleRows(),o=e.itemData,i=e.fromIndex>e.toIndex?e.toIndex-1:e.toIndex,n=i>=0?t[i].node.data:null,r=a.data.atividades.indexOf(o);a.data.atividades.splice(r,1);var d=a.data.atividades.indexOf(n)+1;a.data.atividades.splice(d,0,o),e.component.refresh()}}};a.dropdown?a.div.find(".div_listagem_atividade_projeto").dxDropDownBox({value:a.atividade_selecionada?a.atividade_selecionada.toString():null,valueExpr:"id",displayExpr:function(a){return a&&a.atividade_simplificada},placeholder:"Escolha...",disabled:0===a.data.length||void 0!==a.dropdown_disabled&&!0===a.dropdown_disabled,showClearButton:!0,dataSource:a.data.atividades,contentTemplate:function(a){y=a,E=a.component.option("value");var e=document.createElement("div");e.className="div_listagem_atividade_projeto_popup",e.style="min-width: 100%;",$(e).css("height",t?"calc(100vh - 76px)":"100%");var o=$(e).dxTreeList(k);return I=o.dxTreeList("instance"),a.component.on("valueChanged",function(a){I.selectRows(a.value,!1)}),o},onFocusIn:function(a){$("html,body").scrollTop(0),setTimeout(function(){a.component.open()},100)},onOpened:function(a){t?(a.component._popup.option("fullScreen",!0),a.component._popup.option("showTitle",!0),a.component._popup.option("showCloseButton",!0),a.component._popup.content().parents(".dx-popup-fullscreen").css("max-height","none").css("overflow-y","scroll"),a.component._popup.content().parents(".dx-popup-wrapper").css("width","100%").css("max-height","100vh").css("height","100%")):(a.component._popup.content().parents(".dx-popup-normal").css("width","50vw"),I.updateDimensions())},onInitialized:function(e){a.atividade_selecionada&&e.component._$element.attr("id",a.atividade_selecionada)}}):(I=a.div.find(".div_listagem_atividade_projeto").dxTreeList(k).dxTreeList("instance"),e.props.treeList=I)},e}return _inherits(t,a.Component),_createClass(t,[{key:"render",value:function(){return!1}}]),t}()});