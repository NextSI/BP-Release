"use strict";define(["react","react-dom"],function(e,t){return class extends e.Component{constructor(e){super(e),this.state={Representante:null,isDashboard:!1},this.props.ObjParam={DataInicial:null,DataFinal:null,ObjRepresentante:null,isDashboard:!1},this.props.setParams=(e=>{for(let t in e)e.hasOwnProperty(t)&&this.props.ObjParam.hasOwnProperty(t)&&(this.props.ObjParam[t]=e[t],"ObjRepresentante"==t&&this.setState({Representante:e[t]}),"isDashboard"==t&&this.setState({isDashboard:e[t]}))}),this.handleClick=this.handleClick.bind(this)}handleClick(e,t){View.load("oportunidade/oportunidades_representante",function(a,n){n.onclose=null,n.show(e.state.Representante,t,e.props.ObjParam.DataInicial,e.props.ObjParam.DataFinal)},View.ABA.NAO)}render(){if(this.state.Representante){let t=null;return t=this.state.Representante.logo_id?WS_URI+"documento/midia/?tamanho=28&documento_id="+this.state.Representante.logo_id+"&token_midia="+App.sessao.token_midia:this.state.Representante.foto_id?WS_URI+"documento/midia/?tamanho=28&documento_id="+this.state.Representante.foto_id+"&token_midia="+App.sessao.token_midia:"assets/img/icones_bp/imagem_usuario_padrao.svg",e.createElement("div",{className:"row",style:{boxSizing:"border-box",borderRadius:"10px"}},e.createElement("div",{style:!0===this.state.isDashboard&&this.state.Representante.metas_eventos.length>0?{}:{height:"270px"}},e.createElement("div",{style:{paddingLeft:"5px",paddingTop:"5px"}},e.createElement("img",{src:t,width:"28px",height:"28px"})," ",e.createElement("span",{style:{fontWeight:"bold"}},this.state.Representante.nome?this.state.Representante.nome:this.state.Representante.nome_fantasia),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{style:{fontWeight:"bold",textDecoration:"underline",fontSize:16}},"Metas de Vendas"),e.createElement("br",null),e.createElement("br",null),e.createElement("p",null,"Eficiência: ",e.createElement("span",null,(this.state.Representante.eficiencia?this.state.Representante.eficiencia.format_number(2,!0):0)+"%"))),e.createElement("div",null,e.createElement("div",{style:{marginTop:"10px",marginLeft:"5px"}},e.createElement("ul",{style:{listStyle:"none",margin:"0",padding:"0",lineHeight:"25px"}},e.createElement("li",{style:{borderBottom:"1px solid #eee"}},e.createElement("span",{className:"glyphicon glyphicon-briefcase text-muted"})," ",e.createElement("strong",{className:"btn-link",style:{cursor:"pointer"},onClick:()=>this.handleClick(this,"AP")},"Abertas no período:")," ",e.createElement("span",null,this.state.Representante.qtd_abertas_periodo),"  |  ",e.createElement("span",{className:"fa fa-money-bill"})," ",e.createElement("span",null,(this.state.Representante.valor_abertas_periodo?this.state.Representante.valor_abertas_periodo:0).format_number(2,!0))),e.createElement("li",{style:{borderBottom:"1px solid #eee"}},e.createElement("span",{className:"glyphicon glyphicon-briefcase text-muted"})," ",e.createElement("strong",{className:"btn-link",style:{cursor:"pointer"},onClick:()=>this.handleClick(this,"A")},"Em aberto:")," ",e.createElement("span",null,this.state.Representante.qtd_andamento),"  |  ",e.createElement("span",{className:"fa fa-money-bill"})," ",e.createElement("span",null,(this.state.Representante.valor_andamento?this.state.Representante.valor_andamento:0).format_number(2,!0))),e.createElement("li",{style:{borderBottom:"1px solid #eee"}},e.createElement("span",{className:"glyphicon glyphicon-briefcase text-danger"})," ",e.createElement("strong",{className:"btn-link",style:{cursor:"pointer"},onClick:()=>this.handleClick(this,"AT")},"Atrasadas:")," ",e.createElement("span",null,this.state.Representante.qtd_atrasados),"  |  ",e.createElement("span",{className:"fa fa-money-bill"})," ",e.createElement("span",null,(this.state.Representante.valor_atrasados?this.state.Representante.valor_atrasados:0).format_number(2,!0))),e.createElement("li",{style:{borderBottom:"1px solid #eee"}},e.createElement("span",{className:"glyphicon glyphicon-briefcase text-info"})," ",e.createElement("strong",{className:"btn-link",style:{cursor:"pointer"},onClick:()=>this.handleClick(this,"E")},"Estagnadas:")," ",e.createElement("span",null,this.state.Representante.qtd_estagnados),"  |  ",e.createElement("span",{className:"fa fa-money-bill"})," ",e.createElement("span",null,(this.state.Representante.valor_estagnados?this.state.Representante.valor_estagnados:0).format_number(2,!0))),e.createElement("li",{style:{borderBottom:"1px solid #eee"}},e.createElement("span",{className:"glyphicon glyphicon-briefcase text-success"})," ",e.createElement("strong",{className:"btn-link",style:{cursor:"pointer"},onClick:()=>this.handleClick(this,"G")},"Ganhas:")," ",e.createElement("span",null,this.state.Representante.qtd_ganho),"  |  ",e.createElement("span",{className:"fa fa-money-bill"})," ",e.createElement("span",null,(this.state.Representante.valor_ganho?this.state.Representante.valor_ganho:0).format_number(2,!0))),e.createElement("li",null,e.createElement("span",{className:"glyphicon glyphicon-briefcase text-warning"})," ",e.createElement("strong",{className:"btn-link",style:{cursor:"pointer"},onClick:()=>this.handleClick(this,"P")},"Perdidas:")," ",e.createElement("span",null,this.state.Representante.qtd_perdido),"  |  ",e.createElement("span",{className:"fa fa-money-bill"})," ",e.createElement("span",null,(this.state.Representante.valor_perdido?this.state.Representante.valor_perdido:0).format_number(2,!0)))))),!0===this.state.isDashboard&&e.createElement(e.Fragment,null,e.createElement("br",null),e.createElement("div",{style:{marginLeft:"5px"}},this.state.Representante.metas_eventos.length>0&&e.createElement("span",{style:{fontWeight:"bold",textDecoration:"underline",fontSize:16,display:"block"}},"Metas de Eventos"),this.state.Representante.metas_eventos.length>0&&this.state.Representante.metas_eventos.map(t=>e.createElement(e.Fragment,null,e.createElement("span",{style:{fontWeight:"bold",fontSize:12,display:"block",marginTop:15}},t.meta_eventos_nome),e.createElement("ul",{style:{listStyle:"none",marginTop:10,padding:"0",lineHeight:"25px"}},e.createElement("li",{style:{borderBottom:"1px solid #eee"}},e.createElement("span",{className:"fas fa-calendar"})," ",e.createElement("strong",null,t.tipo_evento,":")," ",e.createElement("span",null,t.realizado),"  |   Previsto: ",e.createElement("span",null,t.previsto)))))))))}return null}}});