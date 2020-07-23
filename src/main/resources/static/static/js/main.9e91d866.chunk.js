(this["webpackJsonpmanagement-tool-client"]=this["webpackJsonpmanagement-tool-client"]||[]).push([[0],{45:function(e,t,a){e.exports=a(82)},50:function(e,t,a){},51:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),o=a.n(c),s=(a(50),a(51),a(3)),l=a(4),i=a(6),m=a(5),u=a(7),p=a(1),d=a(8),h=a.n(d),v=a(16),f=a(12),b=a.n(f),E=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},j=a(26),g=a.n(j),y=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e({type:"SET_CURRENT_USER",payload:{}})}},N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link ",to:"/dashboard"},n.a.createElement("i",{className:"fa fa-user-circle-o"})," ",r.fullname)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link ",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/login"},"Login")));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Project Management Tool"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),a}(r.Component),O=Object(p.b)((function(e){return{security:e.security}}),{logout:y})(N),k=a(9),C=a.n(k),S=function(e,t){return function(){var a=Object(v.a)(h.a.mark((function a(r){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.post("/api/project/",e);case 3:t.push("/dashboard"),r({type:"GET_ERRORS",payload:{}}),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.response.data),r({type:"GET_ERRORS",payload:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).onDeleteClick=function(t){e.props.delete_Project(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(u.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Project Board "))),n.a.createElement(u.b,{to:"/UpdateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Project Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Project")))))))}}]),a}(r.Component),w=Object(p.b)(null,{delete_Project:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure, You want to delete the Project?")){t.next=5;break}return t.next=3,b.a.delete("/api/project/".concat(e));case 3:t.sent,a({type:"DELETE_PROJECT",payload:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.b,{to:"/addProject",className:"btn btn-lg btn-info"},"Create a Project"))},P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjectList()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},"Projects"),n.a.createElement("br",null),n.a.createElement(T,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(w,{key:e.id,project:e})}))))))}}]),a}(r.Component),x=Object(p.b)((function(e){return{project:e.project}}),{getProjectList:function(){return function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/project/all");case 2:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(P),R=(a(76),a(10)),D=a(14),I=a(11),U=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e.state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",error:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error})}},{key:"render",value:function(){var e=this.state.error;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:C()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),G=Object(p.b)((function(e){return{error:e.error}}),{createProject:S})(U),A=a(21),B=a(43),L={},M=a(13),q={projects:[],project:{}},J={projectTasks:[],projectTask:{}},W={validToken:!1,user:{}},K=function(e){return!!e},H=Object(A.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(M.a)(Object(M.a)({},e),{},{projects:t.payload});case"GET_PROJECT":return Object(M.a)(Object(M.a)({},e),{},{project:t.payload});case"DELETE_PROJECT":return Object(M.a)(Object(M.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return console.log(t.payload),Object(M.a)(Object(M.a)({},e),{},{projectTasks:t.payload});case"GET_PROJECT_TASK":return Object(M.a)(Object(M.a)({},e),{},{projectTask:t.payload});case"DELETE_PROJECT_TASK":return Object(M.a)(Object(M.a)({},e),{},{projectTasks:e.projectTasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(M.a)(Object(M.a)({},e),{},{validToken:K(t.payload),user:t.payload});default:return e}}}),X={},F=[B.a],V=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),z=window.navigator.userAgent.includes("Chrome")&&V?Object(A.e)(H,X,Object(A.d)(A.a.apply(void 0,F),V)):Object(A.e)(H,X,Object(A.d)(A.a.apply(void 0,F))),Y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={id:e.state.id,projectName:e.state.projectName,projectIdentifier:e.state.projectIdentifier,description:e.state.description,start_date:e.state.start_date,end_date:e.state.end_date};e.props.createProject(a,e.props.history)},e.state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",error:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"render",value:function(){var e=this.state.error;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:C()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),$=Object(p.b)((function(e){return{project:e.project.project,error:e.error}}),{getProject:function(e,t){return function(){var a=Object(v.a)(h.a.mark((function a(r){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:S})(Y),Q=(a(77),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var r;Object(s.a)(this,a),(r=t.call(this,e)).onChange=function(e){r.setState(Object(D.a)({},e.target.name,e.target.value))},r.onSubmit=function(e){e.preventDefault();var t={summary:r.state.summary,acceptableCriteria:r.state.acceptableCriteria,status:r.state.status,priority:r.state.priority,dueDate:r.state.dueDate};console.log(t),r.props.addProjectTask(r.state.projectIdentifier,t,r.props.history)};var n=r.props.match.params.id;return r.state={summary:"",acceptableCriteria:"",status:"",priority:0,dueDate:null,projectIdentifier:n,error:{}},r.onChange=r.onChange.bind(Object(I.a)(r)),r.onSubmit=r.onSubmit.bind(Object(I.a)(r)),r}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error})}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.error;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(u.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg ",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptableCriteria",value:this.state.acceptableCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component)),Z=Object(p.b)((function(e){return{error:e.error}}),{addProjectTask:function(e,t,a){return function(){var r=Object(v.a)(h.a.mark((function r(n){return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.response.data),n({type:"GET_ERRORS",payload:r.t0.response.data});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(Q),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.DeleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority:",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptableCriteria),n.a.createElement(u.b,{to:"/UpdateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),a}(r.Component),te=Object(p.b)(null,{DeleteProjectTask:function(e,t,a){return function(){var a=Object(v.a)(h.a.mark((function a(r){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure, You want to delete the Project?")){a.next=5;break}return a.next=3,b.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:a.sent,r({type:"DELETE_PROJECT_TASK",payload:t});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(ee),ae=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(te,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"==e[c].props.project_task.status&&t.push(e[c]),"IN_PROGRESS"==e[c].props.project_task.status&&a.push(e[c]),"DONE"==e[c].props.project_task.status&&r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),a}(r.Component),re=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.GetBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.projectTasks;return e=function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(ae,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(u.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fa fa-plus-square"}," Create Project Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),a}(r.Component),ne=Object(p.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{GetBacklog:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Entered the action"),t.prev=1,console.log(e),t.next=5,b.a.get("/api/backlog/".concat(e));case 5:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:"GET_ERRORS",payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})(re),ce=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={id:e.state.id,projectSequence:e.state.projectSequence,summary:e.state.summary,acceptableCriteria:e.state.acceptableCriteria,status:e.state.status,projectIdentifier:e.state.projectIdentifier,priority:e.state.priority,dueDate:e.state.dueDate,created_At:e.state.created_At,updated_At:e.state.updated_At};e.props.Update_ProjectTask(e.state.projectIdentifier,e.state.projectSequence,a,e.props.history)},e.state={id:"",projectSequence:"",summary:"",acceptableCriteria:"",status:"",projectIdentifier:"",priority:"",dueDate:"",created_At:"",updated_At:"",error:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.GetProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error});var t=e.projectTask,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptableCriteria,o=t.status,s=t.priority,l=t.dueDate,i=t.projectIdentifier,m=t.create_At;this.setState({id:a,projectSequence:r,summary:n,acceptableCriteria:c,status:o,priority:s,dueDate:l,projectIdentifier:i,create_At:m})}},{key:"render",value:function(){var e=this.props.match.params,t=e.backlog_id,a=(e.pt_id,this.state.error);return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(u.b,{to:"/projectBoard/".concat(t),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg ",{"is-invalid":a.summary}),name:"summary",value:this.state.summary,placeholder:"Project Task summary",onChange:this.onChange}),a.summary&&n.a.createElement("div",{className:"invalid-feedback"},a.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",value:this.state.acceptableCriteria,name:"acceptanceCriteria",onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),a}(r.Component),oe=Object(p.b)((function(e){return{projectTask:e.backlog.projectTask,error:e.error}}),{GetProjectTask:function(e,t,a){return function(){var r=Object(v.a)(h.a.mark((function r(n){var c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},Update_ProjectTask:function(e,t,a,r){return function(){var n=Object(v.a)(h.a.mark((function n(c){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:n.sent,r.push("/projectBoard/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}})(ce),se=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",{className:"light-overlay landing-inner text-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Personal Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start your own"),n.a.createElement("hr",null),n.a.createElement(u.b,{to:"/register",className:"btn btn-lg btn-primary mr-2"},"Sign Up"),n.a.createElement(u.b,{to:"/login",className:"btn btn-lg btn-secondary mr-2"},"Login"))))))}}]),a}(r.Component),le=Object(p.b)((function(e){return{security:e.security}}))(se),ie=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,fullname:e.state.fullname,password:e.state.password,confirmPassword:e.state.confirmPassword};e.props.createUser(a,e.props.history)},e.state={username:"",fullname:"",password:"",confirmPassword:"",error:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error})}},{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state.error;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg ",{"is-invalid":e.fullname}),placeholder:"Name",name:"fullname",value:this.state.fullname,onChange:this.onChange}),e.fullname&&n.a.createElement("div",{className:"invalid-feedback"},e.fullname)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:C()("form-control form-control-lg ",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:C()("form-control form-control-lg ",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:C()("form-control form-control-lg ",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(r.Component),me=Object(p.b)((function(e){return{error:e.error,security:e.security}}),{createUser:function(e,t){return function(){var a=Object(v.a)(h.a.mark((function a(r){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.post("/api/User/register",e);case 3:t.push("/login"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(ie),ue=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.loginUser(a)},e.onChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.state={username:"",password:"",error:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.error&&this.setState({error:e.error}),e.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state.error;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:C()("form-control form-control-lg ",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:C()("form-control form-control-lg ",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(r.Component),pe=Object(p.b)((function(e){return{error:e.error,security:e.security}}),{loginUser:function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a){var r,n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.post("/api/User/login",e);case 3:r=t.sent,console.log(r),n=r.data.token,localStorage.setItem("jwtToken",n),console.log("stored in local storage"),E(n),console.log("header is set"),c=g()(n),console.log("header is decoded"),a({type:"SET_CURRENT_USER",payload:c}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()}})(ue),de=a(44),he=Object(p.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(de.a)(e,["component","security"]);return n.a.createElement(R.b,Object.assign({},r,{render:function(e){return a.validToken?n.a.createElement(t,e):n.a.createElement(R.a,{to:"/login"})}}))})),ve=localStorage.jwtToken;if(console.log(ve),ve){E(ve);var fe=g()(ve);z.dispatch({type:"SET_CURRENT_USER",payload:fe});var be=Date.now()/1e3;fe.exp<be&&(z.dispatch(y()),window.location.href="/")}var Ee=function(){return n.a.createElement(p.a,{store:z},n.a.createElement(u.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(O,null),n.a.createElement(R.b,{exact:!0,path:"/",component:le}),n.a.createElement(R.b,{exact:!0,path:"/register",component:me}),n.a.createElement(R.b,{exact:!0,path:"/login",component:pe}),n.a.createElement(R.d,null,n.a.createElement(he,{exact:!0,path:"/dashboard",component:x}),n.a.createElement(he,{exact:!0,path:"/addProject",component:G}),n.a.createElement(he,{exact:!0,path:"/UpdateProject/:id",component:$}),n.a.createElement(he,{exact:!0,path:"/projectBoard/:id",component:ne}),n.a.createElement(he,{exact:!0,path:"/addProjectTask/:id",component:Z}),n.a.createElement(he,{exact:!0,path:"/UpdateProjectTask/:backlog_id/:pt_id",component:oe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.9e91d866.chunk.js.map