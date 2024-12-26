"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}define(["react","react-dom"],function(e,t){return function(t){function o(e,t){var a;return _classCallCheck(this,o),(a=_possibleConstructorReturn(this,_getPrototypeOf(o).call(this,e,t))).props.objEntidade={},a.props.mainExterno=null,a.props.listar=function(e,t){a.listar(e,t)},a.state={arr_condicao_pagamento:[],arr_condicao_pagamento_filtrados:[],html_body:[]},a}return _inherits(o,e.Component),_createClass(o,[{key:"componentDidMount",value:function(){this.criarCombobox()}},{key:"listar",value:function(e,t){var o=this;WS.get("condicao_pagamento_entidade/listar_condicao_pagamento/",{tipo_entidade:t,entidade_id:e},function(e){o.setState({arr_condicao_pagamento:e}),o.props.mainExterno.arr_condicao_pagamento=o.state.arr_condicao_pagamento})}},{key:"criarCombobox",value:function(){create_combobox($(this.refs.cbo_condicao_pagamento),this.listarDadosCombobox,null,null,this)}},{key:"listarDadosCombobox",value:function(e,t,o){var a=t.parent().find(".edt_combobox"),n=new Object;n.descricao=a.val(),n.bloqueado="N",WS.get("condicao_pagamento/listar/",n,function(a){limpar_combobox(t),$(a).each(function(e,o){var a=[];a["Descrição"]=o.descricao,add_option_combobox(t,e,o.condicao_pagamento_id,a)}),a.length>0&&e(!0),$(t.parent()).find(".ul_row").click(function(e){o.addCondicaoPagamento(e,e.target.textContent)})})}},{key:"addCondicaoPagamento",value:function(e,t){var o=null,a=[];o=void 0===$(e.target).parent().parent().attr("id_registro")?JSON.parse($(e.target).parent().parent().parent().attr("id_registro")):JSON.parse($(e.target).parent().parent().attr("id_registro")),this.state.arr_condicao_pagamento.map(function(e){return e.condicao_pagamento_id}).indexOf(o)<0&&((a=this.state.arr_condicao_pagamento).push({condicao_pagamento_id:o,descricao:t,entidade_id:this.props.objEntidade.id,entidade_tipo:this.props.objEntidade.tipo}),this.setState({arr_condicao_pagamento:a}),this.props.mainExterno.arr_condicao_pagamento=this.state.arr_condicao_pagamento)}},{key:"excluirCondicaoPagamento",value:function(e,t){alert_modal("Atenção","Deseja remover essa condição de pagamento?","Remover",function(){var o=Object.assign({},t.state).arr_condicao_pagamento;o.splice(e,1),t.setState({arr_condicao_pagamento:o}),t.props.mainExterno.arr_condicao_pagamento=t.state.arr_condicao_pagamento})}},{key:"render",value:function(){var t=this;return e.createElement("div",null,e.createElement("br",null),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("label",null,"Incluir Condição de Pagamento"),e.createElement("select",{ref:"cbo_condicao_pagamento",className:"form-control select-multi-column cbo_condicao_pagamento",placeholder:"Digite o nome"}))),e.createElement("br",null),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-12"},e.createElement("div",{className:"div_tabela_preco form-group",id:"div_condicao_pagamento"},e.createElement("table",{className:"tab_listagem_condicao_pagamento table",ref:"tab_listagem_condicao_pagamento"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Nome"),e.createElement("th",null,e.createElement("div",{className:"pull-right"},e.createElement("button",{type:"button",className:"btn_incluir_condicao_pagamento hidden btn btn-default"},e.createElement("span",{className:"glyphicon glyphicon-plus"})))))),e.createElement("tbody",null,this.state.arr_condicao_pagamento.map(function(o,a){return e.createElement("tr",{"template-row":!0,key:a},e.createElement("td",{"template-field":"descricao"},o.descricao),e.createElement("td",{"template-buttons":"actions"},e.createElement("div",{className:"btn-group pull-right"},e.createElement("button",{type:"button",className:"btn_deletar_tabela_preco btn btn-default",onClick:function(e){return t.excluirCondicaoPagamento(a,t)}},e.createElement("span",{className:"glyphicon glyphicon-trash"})))))})))))))}}]),o}()});