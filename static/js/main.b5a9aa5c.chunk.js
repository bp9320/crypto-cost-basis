(this["webpackJsonpcrypto-cost-basis"]=this["webpackJsonpcrypto-cost-basis"]||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),s=t(1),i=t(4),o=t(5),m=function(){Object(n.useEffect)((function(){var e=document.querySelector(".datepicker");M.Datepicker.init(e,{autoClose:!0});var a=document.querySelector("#type");M.FormSelect.init(a)}));var e=Object(n.useState)({service:"",type:"sale",asset:"",transdate:"",qty:"",amount:"",fee:""}),a=Object(o.a)(e,2),t=a[0],c=a[1],r=t.service,m=t.type,u=t.asset,p=t.transdate,d=t.qty,E=t.amount,v=t.fee,h=function(e){c(Object(i.a)({},t,Object(s.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"row section"},l.a.createElement("form",{action:"",className:"col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"service",id:"service",value:r,placeholder:"e.g. Coinbase",className:"validate",onChange:h}),l.a.createElement("label",{htmlFor:"service"},"Trading Service")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("select",{name:"type",id:"type",value:m,onChange:h},l.a.createElement("option",{value:"purchase"},"Purchase"),l.a.createElement("option",{value:"sale"},"Sale")),l.a.createElement("label",{htmlFor:"type"},"Transaction Type")),l.a.createElement("div",{className:"input-field col s1"},l.a.createElement("input",{type:"text",name:"asset",id:"asset",placeholder:"e.g. BTC, ETH, LTC",className:"validate",value:u,onChange:h}),l.a.createElement("label",{htmlFor:"asset"},"Asset")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"transdate",id:"transdate",placeholder:"Click to pick date",className:"datepicker",value:p,onChange:h}),l.a.createElement("label",{htmlFor:"transdate"},"Transaction Date")),l.a.createElement("div",{className:"input-field col s1"},l.a.createElement("input",{type:"text",name:"qty",id:"qty",placeholder:"Quantity",value:d,onChange:h}),l.a.createElement("label",{htmlFor:"qty"},"Quantity")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"amount",id:"amount",placeholder:"Dollar Amount",value:E,onChange:h}),l.a.createElement("label",{htmlFor:"amount"},"Transaction Amount")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{type:"text",name:"fee",id:"fee",placeholder:"Fees",value:v,onChange:h}),l.a.createElement("label",{htmlFor:"fee"},"Transaction Fee"))),l.a.createElement("div",{className:"row center-align"},l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"submit"},"Add Transaction",l.a.createElement("i",{className:"material-icons right"},"send")))))},u=function(){return l.a.createElement("fragment",null,l.a.createElement("h1",{className:"center-align"},"Crypto Capital Gains Calculator"),l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"flow-text center"},"This app was built mainly to get practice designing and building React apps. I am not an accountant and make no guarantees that the calculations performed within this app are accurate. I encourage you to seek the help of an accountant or tax expert with any questions regarding tax obligations for crypto transactions.")),l.a.createElement("div",{className:"divider"}),l.a.createElement(m,null))};r.a.render(l.a.createElement(u,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.b5a9aa5c.chunk.js.map