(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),i=(n(14),n(6)),o=n(2),u=n(3),b=n(5),h=n(4),l=(n(15),n(0)),d=Object(a.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(l.jsxs)("form",{ref:e,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&t.onAdd(c),e.current.reset()},children:[Object(l.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),Object(l.jsx)("button",{className:"add-button",children:"Add"})]})})),j=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("li",{className:"habit",children:[Object(l.jsx)("span",{className:"habit-name",children:e}),Object(l.jsx)("span",{className:"habit-count",children:n}),Object(l.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(l.jsx)("i",{className:"fas fa-plus-square"})}),Object(l.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(l.jsx)("i",{className:"fas fa-minus-square"})}),Object(l.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(l.jsx)("i",{className:"fas fa-trash"})})]})})}}]),n}(a.PureComponent),p=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{className:"habits",children:[Object(l.jsx)(d,{onAdd:this.props.onAdd}),Object(l.jsx)("ul",{children:this.props.habits.map((function(e){return Object(l.jsx)(j,{habit:e,onIncrement:t.props.onIncrement,onDecrement:t.props.onDecrement,onDelete:t.props.onDelete},e.id)}))}),Object(l.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(l.jsx)("span",{children:"Habit Tracker"}),Object(l.jsx)("span",{className:"navbar-count habit-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Swimming",count:0},{id:3,name:"Climbing",count:0}]},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count<1?0:e.count-1}):t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits;t.setState({habits:n.filter((function(t){return t.id!==e.id}))})},t.handleAdd=function(e){var n=t.state.habits;n.push({id:Date.now(),name:e,count:0}),t.setState({habits:n})},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(i.a)(Object(i.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(l.jsx)(p,{habits:this.state.habits,updateState:this.updateState,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(a.Component);n(17);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ab456abc.chunk.js.map