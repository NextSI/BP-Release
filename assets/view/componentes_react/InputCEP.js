"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,o){return!o||"object"!==_typeof(o)&&"function"!=typeof o?_assertThisInitialized(e):o}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&_setPrototypeOf(e,o)}function _setPrototypeOf(e,o){return(_setPrototypeOf=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}define(["react","react-dom","react-input-mask"],function(e,o,t){return function(o){function r(e){var o;return _classCallCheck(this,r),(o=_possibleConstructorReturn(this,_getPrototypeOf(r).call(this,e))).state={CampoCep:null,CampoCepLeitura:!1,cep_obrigatorio:!1},o.handleBuscarCep=o.handleBuscarCep.bind(_assertThisInitialized(o)),o.props.objEndereco={},o.props.CampoCep=null,o.props.CampoEndereco=null,o.props.CampoBairro=null,o.props.CampoCidade=null,o.props.CampoUF=null,o.props.CampoPais=null,o.props.CodigoMunicipio=null,o.props.CodigoPais=null,o.props.FuncCodigoMunicipio=null,o.props.FuncCodigoPais=null,o.props.setCampoBairro=function(e){o.props.CampoBairro=e},o.props.setCampoCidade=function(e,t,r){o.props.CampoCidade=e,o.props.CampoUF=t,o.props.FuncCodigoMunicipio=r},o.props.setCampoEndereco=function(e){o.props.CampoEndereco=e},o.props.setCampoPais=function(e,t){o.props.CampoPais=e,o.props.FuncCodigoPais=t},o.props.setCampoCep=function(e){o.props.CampoCep=e,o.setState({CampoCep:e})},o.props.setCampoCepLeitura=function(e){o.setState({CampoCepLeitura:e})},o.props.set_cepObrigatorio=function(e){o.setState({cep_obrigatorio:e})},o}return _inherits(r,e.Component),_createClass(r,[{key:"buscar_cep",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=this;WS.get("consulta/cep/",{cep:e},function(e){if(e)try{t.props.objEndereco=JSON.parse(e),parseInt(t.props.objEndereco.resultado)?(!o&&t.props.CampoEndereco&&t.props.CampoEndereco.val(t.props.objEndereco.tipo_logradouro+" "+t.props.objEndereco.logradouro),!o&&t.props.CampoBairro&&t.props.CampoBairro.val(t.props.objEndereco.bairro),t.props.CampoCidade&&WS.get("municipio/listar/",{municipio:t.props.objEndereco.cidade,uf_sigla:t.props.objEndereco.uf},function(e){if(1==e.length){var o=e[0];t.props.CodigoMunicipio=o.cod_municipio,t.props.CampoCidade.val(o.municipio),t.props.CampoUF&&t.props.CampoUF.text(o.uf_sigla),t.props.FuncCodigoMunicipio()}}),t.props.CampoPais&&(t.props.CodigoPais=1058,t.props.CampoPais.val("BRASIL"),t.props.FuncCodigoPais())):alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Atenção !',"Cep Inválido !")}catch(e){window.alert_fail("Ocorreu uma falha na consulta de CEP. Verifique o erro no Console do Inspetor Web."),console.log("Erro na consulta de CEP"),console.log(e)}else alert_modal('<i class="fa fa-exclamation-triangle pull-left" aria-hidden="true"></i> Atenção !',"Tempo limite excedido, Deseja tentar novamente ?",'<i class="fa fa-redo-alt" aria-hidden="true"></i> Tentar Novamente',function(){t.buscar_cep(t.props.CampoCep)},!0)})}},{key:"handleBuscarCep",value:function(e){this.buscar_cep(null==this.props.CampoCep?"":this.props.CampoCep.substring(0,10),e.currentTarget.classList.contains("origem_input_cnpj")),e.currentTarget.classList.remove("origem_input_cnpj")}},{key:"handleAlterarCep",value:function(e){this.setState({CampoCep:e.target.value}),this.props.CampoCep=e.target.value}},{key:"render",value:function(){var o=e.createElement("button",{type:"button",disabled:this.state.CampoCepLeitura,className:"btn btn-default btn_pesquisar",onClick:this.handleBuscarCep},e.createElement("span",{className:"glyphicon glyphicon-search"})),r=e.createElement("span",{className:"text-danger"},"*");return e.createElement("div",null,e.createElement("label",null,"CEP: ",this.state.cep_obrigatorio?r:""),e.createElement("div",{className:"input-group"},e.createElement(t,{mask:"99.999-999",disabled:this.state.CampoCepLeitura,value:this.state.CampoCep,className:"form-control",onChangeCapture:this.handleAlterarCep.bind(this)}),e.createElement("div",{className:"input-group-btn"},o)))}}]),r}()});