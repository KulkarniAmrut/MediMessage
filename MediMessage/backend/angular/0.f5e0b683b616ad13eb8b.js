(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{cAcB:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),e=function(){},i=a("NcP4"),r=a("t68o"),o=a("pMnS"),t=a("NvT6"),d=a("Blfk"),s=a("dWZg"),c=a("Ip0R"),m=a("wFw1"),p=a("seP3"),f=a("bujt"),g=a("UodH"),h=a("lLAP"),Y=a("gIcY"),b=a("dJrM"),_=a("Wf4p"),v=a("Fzqc"),C=a("b716"),y=a("/VYK"),N=a("lzlj"),w=a("FVSy"),q=a("qXBG"),F=function(){function l(l){this.authService=l,this.isLoading=!1}return l.prototype.ngOnInit=function(){var l=this;this.authStatusSub=this.authService.getAuthStatusListener().subscribe(function(n){l.isLoading=!1})},l.prototype.onLogin=function(l){l.invalid||(this.isLoading=!0,this.authService.login(l.value.email,l.value.password))},l.prototype.ngOnDestroy=function(){this.authStatusSub.unsubscribe()},l}(),I=u.Ma({encapsulation:0,styles:[["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]],data:{}});function W(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,t.b,t.a)),u.Na(1,49152,null,0,d.d,[u.k,s.a,[2,c.d],[2,m.a],d.a],null,null)],null,function(l,n){l(n,0,0,u.Ya(n,1)._noopAnimations,u.Ya(n,1).diameter,u.Ya(n,1).diameter)})}function S(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),u.Na(1,16384,[[4,4]],0,p.b,[],null,null),(l()(),u.fb(-1,null,["Please enter a valid email."]))],null,function(l,n){l(n,0,0,u.Ya(n,1).id)})}function k(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),u.Na(1,16384,[[11,4]],0,p.b,[],null,null),(l()(),u.fb(-1,null,["Please enter a valid password."]))],null,function(l,n){l(n,0,0,u.Ya(n,1).id)})}function O(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,f.d,f.b)),u.Na(1,180224,null,0,g.b,[u.k,s.a,h.d,[2,m.a]],{color:[0,"color"]},null),(l()(),u.fb(-1,0,["Login"]))],function(l,n){l(n,1,0,"accent")},function(l,n){l(n,0,0,u.Ya(n,1).disabled||null,"NoopAnimations"===u.Ya(n,1)._animationMode)})}function P(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,49,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,a){var e=!0,i=l.component;return"submit"===n&&(e=!1!==u.Ya(l,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==u.Ya(l,2).onReset()&&e),"submit"===n&&(e=!1!==i.onLogin(u.Ya(l,2))&&e),e},null,null)),u.Na(1,16384,null,0,Y.v,[],null,null),u.Na(2,4210688,[["loginForm",4]],0,Y.p,[[8,null],[8,null]],null,null),u.cb(2048,null,Y.b,null,[Y.p]),u.Na(4,16384,null,0,Y.o,[[4,Y.b]],null,null),(l()(),u.Oa(5,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),u.Na(6,7389184,null,7,p.c,[u.k,u.h,[2,_.f],[2,v.b],[2,p.a],s.a,u.x,[2,m.a]],null,null),u.db(335544320,1,{_control:0}),u.db(335544320,2,{_placeholderChild:0}),u.db(335544320,3,{_labelChild:0}),u.db(603979776,4,{_errorChildren:1}),u.db(603979776,5,{_hintChildren:1}),u.db(603979776,6,{_prefixChildren:1}),u.db(603979776,7,{_suffixChildren:1}),(l()(),u.Oa(14,0,null,1,10,"input",[["class","mat-input-element mat-form-field-autofill-control"],["email",""],["matInput",""],["name","email"],["ngModel",""],["placeholder","E-Mail"],["required",""],["type","email"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var e=!0;return"input"===n&&(e=!1!==u.Ya(l,18)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,18).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Ya(l,18)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Ya(l,18)._compositionEnd(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,22)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==u.Ya(l,22)._focusChanged(!0)&&e),"input"===n&&(e=!1!==u.Ya(l,22)._onInput()&&e),e},null,null)),u.Na(15,16384,null,0,Y.s,[],{required:[0,"required"]},null),u.Na(16,16384,null,0,Y.d,[],{email:[0,"email"]},null),u.cb(1024,null,Y.k,function(l,n){return[l,n]},[Y.s,Y.d]),u.Na(18,16384,null,0,Y.c,[u.C,u.k,[2,Y.a]],null,null),u.cb(1024,null,Y.l,function(l){return[l]},[Y.c]),u.Na(20,671744,[["emailInput",4]],0,Y.q,[[2,Y.b],[6,Y.k],[8,null],[6,Y.l]],{name:[0,"name"],model:[1,"model"]},null),u.cb(2048,null,Y.m,null,[Y.q]),u.Na(22,999424,null,0,C.a,[u.k,s.a,[6,Y.m],[2,Y.p],[2,Y.i],_.b,[8,null],y.a,u.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),u.Na(23,16384,null,0,Y.n,[[4,Y.m]],null,null),u.cb(2048,[[1,4]],p.d,null,[C.a]),(l()(),u.Fa(16777216,null,5,1,null,S)),u.Na(26,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.Oa(27,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),u.Na(28,7389184,null,7,p.c,[u.k,u.h,[2,_.f],[2,v.b],[2,p.a],s.a,u.x,[2,m.a]],null,null),u.db(335544320,8,{_control:0}),u.db(335544320,9,{_placeholderChild:0}),u.db(335544320,10,{_labelChild:0}),u.db(603979776,11,{_errorChildren:1}),u.db(603979776,12,{_hintChildren:1}),u.db(603979776,13,{_prefixChildren:1}),u.db(603979776,14,{_suffixChildren:1}),(l()(),u.Oa(36,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var e=!0;return"input"===n&&(e=!1!==u.Ya(l,39)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,39).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Ya(l,39)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Ya(l,39)._compositionEnd(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,43)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==u.Ya(l,43)._focusChanged(!0)&&e),"input"===n&&(e=!1!==u.Ya(l,43)._onInput()&&e),e},null,null)),u.Na(37,16384,null,0,Y.s,[],{required:[0,"required"]},null),u.cb(1024,null,Y.k,function(l){return[l]},[Y.s]),u.Na(39,16384,null,0,Y.c,[u.C,u.k,[2,Y.a]],null,null),u.cb(1024,null,Y.l,function(l){return[l]},[Y.c]),u.Na(41,671744,[["passwordInput",4]],0,Y.q,[[2,Y.b],[6,Y.k],[8,null],[6,Y.l]],{name:[0,"name"],model:[1,"model"]},null),u.cb(2048,null,Y.m,null,[Y.q]),u.Na(43,999424,null,0,C.a,[u.k,s.a,[6,Y.m],[2,Y.p],[2,Y.i],_.b,[8,null],y.a,u.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),u.Na(44,16384,null,0,Y.n,[[4,Y.m]],null,null),u.cb(2048,[[8,4]],p.d,null,[C.a]),(l()(),u.Fa(16777216,null,5,1,null,k)),u.Na(47,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.Fa(16777216,null,null,1,null,O)),u.Na(49,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,15,0,""),l(n,16,0,""),l(n,20,0,"email",""),l(n,22,0,"E-Mail","","email"),l(n,26,0,u.Ya(n,20).invalid),l(n,37,0,""),l(n,41,0,"password",""),l(n,43,0,"Password","","password"),l(n,47,0,u.Ya(n,41).invalid),l(n,49,0,!a.isLoading)},function(l,n){l(n,0,0,u.Ya(n,4).ngClassUntouched,u.Ya(n,4).ngClassTouched,u.Ya(n,4).ngClassPristine,u.Ya(n,4).ngClassDirty,u.Ya(n,4).ngClassValid,u.Ya(n,4).ngClassInvalid,u.Ya(n,4).ngClassPending),l(n,5,1,["standard"==u.Ya(n,6).appearance,"fill"==u.Ya(n,6).appearance,"outline"==u.Ya(n,6).appearance,"legacy"==u.Ya(n,6).appearance,u.Ya(n,6)._control.errorState,u.Ya(n,6)._canLabelFloat,u.Ya(n,6)._shouldLabelFloat(),u.Ya(n,6)._hideControlPlaceholder(),u.Ya(n,6)._control.disabled,u.Ya(n,6)._control.autofilled,u.Ya(n,6)._control.focused,"accent"==u.Ya(n,6).color,"warn"==u.Ya(n,6).color,u.Ya(n,6)._shouldForward("untouched"),u.Ya(n,6)._shouldForward("touched"),u.Ya(n,6)._shouldForward("pristine"),u.Ya(n,6)._shouldForward("dirty"),u.Ya(n,6)._shouldForward("valid"),u.Ya(n,6)._shouldForward("invalid"),u.Ya(n,6)._shouldForward("pending"),!u.Ya(n,6)._animationsEnabled]),l(n,14,1,[u.Ya(n,15).required?"":null,u.Ya(n,22)._isServer,u.Ya(n,22).id,u.Ya(n,22).placeholder,u.Ya(n,22).disabled,u.Ya(n,22).required,u.Ya(n,22).readonly,u.Ya(n,22)._ariaDescribedby||null,u.Ya(n,22).errorState,u.Ya(n,22).required.toString(),u.Ya(n,23).ngClassUntouched,u.Ya(n,23).ngClassTouched,u.Ya(n,23).ngClassPristine,u.Ya(n,23).ngClassDirty,u.Ya(n,23).ngClassValid,u.Ya(n,23).ngClassInvalid,u.Ya(n,23).ngClassPending]),l(n,27,1,["standard"==u.Ya(n,28).appearance,"fill"==u.Ya(n,28).appearance,"outline"==u.Ya(n,28).appearance,"legacy"==u.Ya(n,28).appearance,u.Ya(n,28)._control.errorState,u.Ya(n,28)._canLabelFloat,u.Ya(n,28)._shouldLabelFloat(),u.Ya(n,28)._hideControlPlaceholder(),u.Ya(n,28)._control.disabled,u.Ya(n,28)._control.autofilled,u.Ya(n,28)._control.focused,"accent"==u.Ya(n,28).color,"warn"==u.Ya(n,28).color,u.Ya(n,28)._shouldForward("untouched"),u.Ya(n,28)._shouldForward("touched"),u.Ya(n,28)._shouldForward("pristine"),u.Ya(n,28)._shouldForward("dirty"),u.Ya(n,28)._shouldForward("valid"),u.Ya(n,28)._shouldForward("invalid"),u.Ya(n,28)._shouldForward("pending"),!u.Ya(n,28)._animationsEnabled]),l(n,36,1,[u.Ya(n,37).required?"":null,u.Ya(n,43)._isServer,u.Ya(n,43).id,u.Ya(n,43).placeholder,u.Ya(n,43).disabled,u.Ya(n,43).required,u.Ya(n,43).readonly,u.Ya(n,43)._ariaDescribedby||null,u.Ya(n,43).errorState,u.Ya(n,43).required.toString(),u.Ya(n,44).ngClassUntouched,u.Ya(n,44).ngClassTouched,u.Ya(n,44).ngClassPristine,u.Ya(n,44).ngClassDirty,u.Ya(n,44).ngClassValid,u.Ya(n,44).ngClassInvalid,u.Ya(n,44).ngClassPending])})}function L(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,5,"mat-card",[["class","mat-card"]],null,null,null,N.b,N.a)),u.Na(1,49152,null,0,w.a,[],null,null),(l()(),u.Fa(16777216,null,0,1,null,W)),u.Na(3,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.Fa(16777216,null,0,1,null,P)),u.Na(5,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,3,0,a.isLoading),l(n,5,0,!a.isLoading)},null)}var x=u.Ka("ng-component",F,function(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,1,"ng-component",[],null,null,null,L,I)),u.Na(1,245760,null,0,F,[q.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=function(){function l(l){this.authService=l,this.isLoading=!1}return l.prototype.ngOnInit=function(){var l=this;this.authStatusSub=this.authService.getAuthStatusListener().subscribe(function(n){l.isLoading=!1})},l.prototype.onSignup=function(l){l.invalid||(this.isLoading=!0,this.authService.createUser(l.value.email,l.value.password))},l.prototype.ngOnDestroy=function(){this.authStatusSub.unsubscribe()},l}(),D=u.Ma({encapsulation:0,styles:[["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]],data:{}});function K(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,t.b,t.a)),u.Na(1,49152,null,0,d.d,[u.k,s.a,[2,c.d],[2,m.a],d.a],null,null)],null,function(l,n){l(n,0,0,u.Ya(n,1)._noopAnimations,u.Ya(n,1).diameter,u.Ya(n,1).diameter)})}function E(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),u.Na(1,16384,[[4,4]],0,p.b,[],null,null),(l()(),u.fb(-1,null,["Please enter a valid email."]))],null,function(l,n){l(n,0,0,u.Ya(n,1).id)})}function T(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),u.Na(1,16384,[[11,4]],0,p.b,[],null,null),(l()(),u.fb(-1,null,["Please enter a valid password."]))],null,function(l,n){l(n,0,0,u.Ya(n,1).id)})}function j(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,f.d,f.b)),u.Na(1,180224,null,0,g.b,[u.k,s.a,h.d,[2,m.a]],{color:[0,"color"]},null),(l()(),u.fb(-1,0,["Signup"]))],function(l,n){l(n,1,0,"accent")},function(l,n){l(n,0,0,u.Ya(n,1).disabled||null,"NoopAnimations"===u.Ya(n,1)._animationMode)})}function A(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,49,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,a){var e=!0,i=l.component;return"submit"===n&&(e=!1!==u.Ya(l,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==u.Ya(l,2).onReset()&&e),"submit"===n&&(e=!1!==i.onSignup(u.Ya(l,2))&&e),e},null,null)),u.Na(1,16384,null,0,Y.v,[],null,null),u.Na(2,4210688,[["signupForm",4]],0,Y.p,[[8,null],[8,null]],null,null),u.cb(2048,null,Y.b,null,[Y.p]),u.Na(4,16384,null,0,Y.o,[[4,Y.b]],null,null),(l()(),u.Oa(5,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),u.Na(6,7389184,null,7,p.c,[u.k,u.h,[2,_.f],[2,v.b],[2,p.a],s.a,u.x,[2,m.a]],null,null),u.db(335544320,1,{_control:0}),u.db(335544320,2,{_placeholderChild:0}),u.db(335544320,3,{_labelChild:0}),u.db(603979776,4,{_errorChildren:1}),u.db(603979776,5,{_hintChildren:1}),u.db(603979776,6,{_prefixChildren:1}),u.db(603979776,7,{_suffixChildren:1}),(l()(),u.Oa(14,0,null,1,10,"input",[["class","mat-input-element mat-form-field-autofill-control"],["email",""],["matInput",""],["name","email"],["ngModel",""],["placeholder","E-Mail"],["required",""],["type","email"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var e=!0;return"input"===n&&(e=!1!==u.Ya(l,18)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,18).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Ya(l,18)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Ya(l,18)._compositionEnd(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,22)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==u.Ya(l,22)._focusChanged(!0)&&e),"input"===n&&(e=!1!==u.Ya(l,22)._onInput()&&e),e},null,null)),u.Na(15,16384,null,0,Y.s,[],{required:[0,"required"]},null),u.Na(16,16384,null,0,Y.d,[],{email:[0,"email"]},null),u.cb(1024,null,Y.k,function(l,n){return[l,n]},[Y.s,Y.d]),u.Na(18,16384,null,0,Y.c,[u.C,u.k,[2,Y.a]],null,null),u.cb(1024,null,Y.l,function(l){return[l]},[Y.c]),u.Na(20,671744,[["emailInput",4]],0,Y.q,[[2,Y.b],[6,Y.k],[8,null],[6,Y.l]],{name:[0,"name"],model:[1,"model"]},null),u.cb(2048,null,Y.m,null,[Y.q]),u.Na(22,999424,null,0,C.a,[u.k,s.a,[6,Y.m],[2,Y.p],[2,Y.i],_.b,[8,null],y.a,u.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),u.Na(23,16384,null,0,Y.n,[[4,Y.m]],null,null),u.cb(2048,[[1,4]],p.d,null,[C.a]),(l()(),u.Fa(16777216,null,5,1,null,E)),u.Na(26,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.Oa(27,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),u.Na(28,7389184,null,7,p.c,[u.k,u.h,[2,_.f],[2,v.b],[2,p.a],s.a,u.x,[2,m.a]],null,null),u.db(335544320,8,{_control:0}),u.db(335544320,9,{_placeholderChild:0}),u.db(335544320,10,{_labelChild:0}),u.db(603979776,11,{_errorChildren:1}),u.db(603979776,12,{_hintChildren:1}),u.db(603979776,13,{_prefixChildren:1}),u.db(603979776,14,{_suffixChildren:1}),(l()(),u.Oa(36,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var e=!0;return"input"===n&&(e=!1!==u.Ya(l,39)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,39).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Ya(l,39)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Ya(l,39)._compositionEnd(a.target.value)&&e),"blur"===n&&(e=!1!==u.Ya(l,43)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==u.Ya(l,43)._focusChanged(!0)&&e),"input"===n&&(e=!1!==u.Ya(l,43)._onInput()&&e),e},null,null)),u.Na(37,16384,null,0,Y.s,[],{required:[0,"required"]},null),u.cb(1024,null,Y.k,function(l){return[l]},[Y.s]),u.Na(39,16384,null,0,Y.c,[u.C,u.k,[2,Y.a]],null,null),u.cb(1024,null,Y.l,function(l){return[l]},[Y.c]),u.Na(41,671744,[["passwordInput",4]],0,Y.q,[[2,Y.b],[6,Y.k],[8,null],[6,Y.l]],{name:[0,"name"],model:[1,"model"]},null),u.cb(2048,null,Y.m,null,[Y.q]),u.Na(43,999424,null,0,C.a,[u.k,s.a,[6,Y.m],[2,Y.p],[2,Y.i],_.b,[8,null],y.a,u.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),u.Na(44,16384,null,0,Y.n,[[4,Y.m]],null,null),u.cb(2048,[[8,4]],p.d,null,[C.a]),(l()(),u.Fa(16777216,null,5,1,null,T)),u.Na(47,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.Fa(16777216,null,null,1,null,j)),u.Na(49,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,15,0,""),l(n,16,0,""),l(n,20,0,"email",""),l(n,22,0,"E-Mail","","email"),l(n,26,0,u.Ya(n,20).invalid),l(n,37,0,""),l(n,41,0,"password",""),l(n,43,0,"Password","","password"),l(n,47,0,u.Ya(n,41).invalid),l(n,49,0,!a.isLoading)},function(l,n){l(n,0,0,u.Ya(n,4).ngClassUntouched,u.Ya(n,4).ngClassTouched,u.Ya(n,4).ngClassPristine,u.Ya(n,4).ngClassDirty,u.Ya(n,4).ngClassValid,u.Ya(n,4).ngClassInvalid,u.Ya(n,4).ngClassPending),l(n,5,1,["standard"==u.Ya(n,6).appearance,"fill"==u.Ya(n,6).appearance,"outline"==u.Ya(n,6).appearance,"legacy"==u.Ya(n,6).appearance,u.Ya(n,6)._control.errorState,u.Ya(n,6)._canLabelFloat,u.Ya(n,6)._shouldLabelFloat(),u.Ya(n,6)._hideControlPlaceholder(),u.Ya(n,6)._control.disabled,u.Ya(n,6)._control.autofilled,u.Ya(n,6)._control.focused,"accent"==u.Ya(n,6).color,"warn"==u.Ya(n,6).color,u.Ya(n,6)._shouldForward("untouched"),u.Ya(n,6)._shouldForward("touched"),u.Ya(n,6)._shouldForward("pristine"),u.Ya(n,6)._shouldForward("dirty"),u.Ya(n,6)._shouldForward("valid"),u.Ya(n,6)._shouldForward("invalid"),u.Ya(n,6)._shouldForward("pending"),!u.Ya(n,6)._animationsEnabled]),l(n,14,1,[u.Ya(n,15).required?"":null,u.Ya(n,22)._isServer,u.Ya(n,22).id,u.Ya(n,22).placeholder,u.Ya(n,22).disabled,u.Ya(n,22).required,u.Ya(n,22).readonly,u.Ya(n,22)._ariaDescribedby||null,u.Ya(n,22).errorState,u.Ya(n,22).required.toString(),u.Ya(n,23).ngClassUntouched,u.Ya(n,23).ngClassTouched,u.Ya(n,23).ngClassPristine,u.Ya(n,23).ngClassDirty,u.Ya(n,23).ngClassValid,u.Ya(n,23).ngClassInvalid,u.Ya(n,23).ngClassPending]),l(n,27,1,["standard"==u.Ya(n,28).appearance,"fill"==u.Ya(n,28).appearance,"outline"==u.Ya(n,28).appearance,"legacy"==u.Ya(n,28).appearance,u.Ya(n,28)._control.errorState,u.Ya(n,28)._canLabelFloat,u.Ya(n,28)._shouldLabelFloat(),u.Ya(n,28)._hideControlPlaceholder(),u.Ya(n,28)._control.disabled,u.Ya(n,28)._control.autofilled,u.Ya(n,28)._control.focused,"accent"==u.Ya(n,28).color,"warn"==u.Ya(n,28).color,u.Ya(n,28)._shouldForward("untouched"),u.Ya(n,28)._shouldForward("touched"),u.Ya(n,28)._shouldForward("pristine"),u.Ya(n,28)._shouldForward("dirty"),u.Ya(n,28)._shouldForward("valid"),u.Ya(n,28)._shouldForward("invalid"),u.Ya(n,28)._shouldForward("pending"),!u.Ya(n,28)._animationsEnabled]),l(n,36,1,[u.Ya(n,37).required?"":null,u.Ya(n,43)._isServer,u.Ya(n,43).id,u.Ya(n,43).placeholder,u.Ya(n,43).disabled,u.Ya(n,43).required,u.Ya(n,43).readonly,u.Ya(n,43)._ariaDescribedby||null,u.Ya(n,43).errorState,u.Ya(n,43).required.toString(),u.Ya(n,44).ngClassUntouched,u.Ya(n,44).ngClassTouched,u.Ya(n,44).ngClassPristine,u.Ya(n,44).ngClassDirty,u.Ya(n,44).ngClassValid,u.Ya(n,44).ngClassInvalid,u.Ya(n,44).ngClassPending])})}function V(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,5,"mat-card",[["class","mat-card"]],null,null,null,N.b,N.a)),u.Na(1,49152,null,0,w.a,[],null,null),(l()(),u.Fa(16777216,null,0,1,null,K)),u.Na(3,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.Fa(16777216,null,0,1,null,A)),u.Na(5,16384,null,0,c.k,[u.N,u.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,3,0,a.isLoading),l(n,5,0,!a.isLoading)},null)}var U=u.Ka("ng-component",M,function(l){return u.hb(0,[(l()(),u.Oa(0,0,null,null,1,"ng-component",[],null,null,null,V,D)),u.Na(1,245760,null,0,M,[q.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),B=a("eDkP"),G=a("uGex"),J=a("M2Lx"),R=a("v9Dh"),Z=a("4epT"),z=a("o3x0"),H=a("8mMr"),X=a("YhbO"),Q=a("4c35"),$=a("jlZm"),ll=a("qAlS"),nl=a("rhD1"),al=a("ZYCi"),ul=function(){};a.d(n,"AuthModuleNgFactory",function(){return el});var el=u.La(e,[],function(l){return u.Va([u.Wa(512,u.j,u.Aa,[[8,[i.a,r.a,o.a,x,U]],[3,u.j],u.v]),u.Wa(4608,c.m,c.l,[u.s,[2,c.v]]),u.Wa(4608,_.b,_.b,[]),u.Wa(4608,B.c,B.c,[B.i,B.e,u.j,B.h,B.f,u.p,u.x,c.d,v.b]),u.Wa(5120,B.j,B.k,[B.c]),u.Wa(5120,G.a,G.b,[B.c]),u.Wa(4608,J.a,J.a,[]),u.Wa(5120,R.b,R.c,[B.c]),u.Wa(5120,Z.c,Z.a,[[3,Z.c]]),u.Wa(5120,z.c,z.d,[B.c]),u.Wa(4608,z.e,z.e,[B.c,u.p,[2,c.g],[2,z.b],z.c,[3,z.e],B.e]),u.Wa(4608,Y.w,Y.w,[]),u.Wa(1073742336,c.c,c.c,[]),u.Wa(1073742336,s.b,s.b,[]),u.Wa(1073742336,y.c,y.c,[]),u.Wa(1073742336,p.e,p.e,[]),u.Wa(1073742336,C.b,C.b,[]),u.Wa(1073742336,v.a,v.a,[]),u.Wa(1073742336,_.j,_.j,[[2,_.c]]),u.Wa(1073742336,w.c,w.c,[]),u.Wa(1073742336,_.s,_.s,[]),u.Wa(1073742336,g.c,g.c,[]),u.Wa(1073742336,H.b,H.b,[]),u.Wa(1073742336,X.c,X.c,[]),u.Wa(1073742336,Q.f,Q.f,[]),u.Wa(1073742336,$.b,$.b,[]),u.Wa(1073742336,d.c,d.c,[]),u.Wa(1073742336,ll.a,ll.a,[]),u.Wa(1073742336,B.g,B.g,[]),u.Wa(1073742336,_.q,_.q,[]),u.Wa(1073742336,_.o,_.o,[]),u.Wa(1073742336,G.d,G.d,[]),u.Wa(1073742336,J.b,J.b,[]),u.Wa(1073742336,h.a,h.a,[]),u.Wa(1073742336,R.e,R.e,[]),u.Wa(1073742336,Z.d,Z.d,[]),u.Wa(1073742336,z.k,z.k,[]),u.Wa(1073742336,nl.a,nl.a,[]),u.Wa(1073742336,Y.u,Y.u,[]),u.Wa(1073742336,Y.j,Y.j,[]),u.Wa(1073742336,al.n,al.n,[[2,al.t],[2,al.k]]),u.Wa(1073742336,ul,ul,[]),u.Wa(1073742336,e,e,[]),u.Wa(1024,al.i,function(){return[[{path:"login",component:F},{path:"signup",component:M}]]},[])])})}}]);