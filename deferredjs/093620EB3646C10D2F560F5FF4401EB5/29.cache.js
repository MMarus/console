$wnd.hal.runAsyncCallback29("function Pag(){Oag()}\nfunction Ncg(){Mcg()}\nfunction Qcg(){Pcg()}\nfunction Tcg(){Scg()}\nfunction Mcg(){Mcg=_zc}\nfunction Pcg(){Pcg=_zc}\nfunction Scg(){Scg=_zc}\nfunction Oag(){Oag=_zc}\nfunction abg(){abg=_zc}\nfunction dbg(){dbg=_zc}\nfunction gbg(){gbg=_zc}\nfunction jbg(){jbg=_zc}\nfunction mbg(){mbg=_zc}\nfunction pbg(){pbg=_zc}\nfunction sbg(){sbg=_zc}\nfunction Eag(){Eag=_zc;Ese()}\nfunction Gcg(){Gcg=_zc;fre()}\nfunction Rag(){Rag=_zc;pb();Inj()}\nfunction kbg(a){jbg();this.a=a}\nfunction nbg(a){mbg();this.a=a}\nfunction bbg(a,b){abg();this.b=a;this.a=b}\nfunction hbg(a,b,d){gbg();this.a=a;this.b=b;this.c=d}\nfunction tbg(a,b,d,e){sbg();this.b=a;this.d=b;this.c=d;this.a=e}\nfunction ebg(a,b,d,e,g){dbg();this.c=a;this.d=b;this.e=d;this.a=e;this.b=g}\nfunction qbg(a,b,d,e,g){pbg();this.e=a;this.b=b;this.c=d;this.d=e;this.a=g}\nfunction Tag(a,b,d,e){Rag();this.a=a;this.c=b;this.b=d;this.d=e;wb.call(this);this.Zrb()}\nfunction Aag(a){xag();BLe.call(this,a);this.Trb()}\nfunction Kag(a,b){Eag();return new Icg(b,a)}\nfunction Kcg(a){Gcg();return new Ooj(qdd('imap')+' '+'Socket Binding',a.Urb('imap'))}\nfunction Jcg(a){Gcg();return new Ooj(qdd('smtp')+' '+'Socket Binding',a.Urb('smtp'))}\nfunction Lcg(a){Gcg();return new Ooj(qdd('pop3')+' '+'Socket Binding',a.Urb('pop3'))}\nfunction Nag(a,b,d,e,g){Eag();{iPk(a,LOk(b.IOc().iHc('Mail Session',d)));e.H$(d)}}\nfunction Lag(a,b){Eag();var d;{d=K4(b.B3('mail-session').u3().td().NL(new Pag).GL(tDd()),22);a.Xj(d)}}\nfunction Hag(a,b,d,e){Eag();var g,h;{g=(wag(),sag).gyc(a,j3(X2(aib,1),{4:1,1:1,5:1,6:1},2,6,[]));h=(new Cfk('read-resource',g)).Nxc('recursive',true).Ixc();b.tvc(h,new nbg(e))}}\nfunction Mag(a,b,d,e,g,h,i){Eag();var j,k;{if(k5(i)){j=(wag(),rag).gyc(a,j3(X2(aib,1),{4:1,1:1,5:1,6:1},2,6,[h]));k=(new Cfk('add',j)).Lxc('mail-session',h).Oxc(i).Ixc();b.tvc(k,new tbg(d,e,h,g))}}}\nfunction Iag(a,b,d,e,g,h){Eag();var i,j;{j=K4(a.Yxc((wag(),rag)),12);i=new Nrj((ZAk(),Qxk),b.IOc().jHc('Mail Session'),j,Wkd(j3(X2(aib,1),{4:1,1:1,5:1,6:1},2,6,['jndi-name','from','debug'])),new qbg(d,e,g,b,h));i.Ky()}}\nfunction Gag(a,b,d,e,g,h,i,j,k){Eag();Gse.call(this,(new pjj(a,'mail-session','Mail Session')).Nic().Mic());this.Xrb();this.T$(new bbg(h,g));this.f$(b.zhc((ZAk(),Pxk),'Mail Session',new ebg(i,k,h,g,e)));this.f$(b.Fhc((ZAk(),Txk)));this.Q$(new hbg(this,d,j));this.V$(new kbg(k))}\nfunction Icg(a,b){Gcg();var d;kre.call(this,a.Qj(),a.Vrb().md()?b.GOc().oEc():b.IOc().HHc(Ug(', ').Wc(a.Vrb())).uu());this.qsb();d=new noj(a);d.okc('jndi-name');if(a.Wrb('smtp')){d.qkc(new Ncg)}if(a.Wrb('imap')){d.qkc(new Qcg)}if(a.Wrb('pop3')){d.qkc(new Tcg)}d.rkc();this.JZ().zM(d)}\nZzc(852,11,{1:1,17:1,11:1},Aag);_.Urb=function Bag(a){var b;b=k3j(this,'server'+'/'+a+'/'+'outbound-socket-binding-ref');return b.G3()?b.uu():'n/a'};_.Vrb=function Cag(){var a;a=new rkd;if(this.Wrb('smtp')){a.ed(qdd('smtp'))}if(this.Wrb('imap')){a.ed(qdd('imap'))}if(this.Wrb('pop3')){a.ed(qdd('pop3'))}return a};_.Wrb=function Dag(a){return this.F3('server')&&this.B3('server').F3(a)};Zzc(3257,36,{1:1,13:1,36:1},Gag);_.Xrb=function Fag(){};_.Yrb=function Jag(a,b,d){Eag();return new Tag(this,d,a,b)};var uNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn',3257,Lmc);Zzc(3258,1,{1:1},Pag);_.Rc=function Qag(a){return new Aag(K4(a,45))};var lNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/0methodref$ctor$Type',3258,Vhb);Zzc(3264,1,{1:1,13:1},Tag);_.Zrb=function Sag(){};_.j_=function Xag(){return Mnj(this)};_.am=function Yag(){return Nnj(this)};_.k_=function $ag(){return Onj(this)};_.o_=function _ag(){return Pnj(this)};_.ZV=function Uag(){var a;a=new rkd;a.ed(this.b.fkc(this.d.Gpc('mail-session').QE('name',this.c.Qj()).NE()));a.ed(this.b.ekc('Mail Session',this.c.Qj(),(wag(),rag),this.a));return a};_.vN=function Vag(){if(!this.c.Vrb().md()){return Qnj(this.c.Qj(),Ug(', ').Wc(this.c.Vrb()))}return null};_.i_=function Wag(){var a;a=new rkd;a.ed(this.c.Qj());a.fd(this.c.Vrb());return Scd(' ',a)};_.bm=function Zag(){return this.c.Qj()};var mNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/1',3264,Vhb);Zzc(3260,1,{1:1},bbg);_.v_=function cbg(a,b){Hag(this.b,this.a,a,b)};var nNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$0$Type',3260,Vhb);Zzc(3263,1,{1:1},ebg);_.x_=function fbg(a){Iag(this.c,this.d,this.e,this.a,this.b,a)};var oNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$1$Type',3263,Vhb);Zzc(3265,1,{1:1},hbg);_.w_=function ibg(a){return this.a.Yrb(this.b,this.c,a)};var pNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$2$Type',3265,Vhb);Zzc(3266,1,{1:1},kbg);_.u_=function lbg(a){return Kag(this.a,a)};var qNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$3$Type',3266,Vhb);Zzc(3259,1,{1:1,34:1},nbg);_.Xj=function obg(a){Lag(this.a,a)};var rNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$4$Type',3259,Vhb);Zzc(3262,1,{1:1},qbg);_.C0=function rbg(a,b){Mag(this.e,this.b,this.c,this.d,this.a,a,b)};var sNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$5$Type',3262,Vhb);Zzc(3261,1,{1:1,34:1},tbg);_.Xj=function ubg(a){Nag(this.b,this.d,this.c,this.a,a)};var tNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$6$Type',3261,Vhb);Zzc(4496,35,{1:1,8:1,35:1},Icg);_.qsb=function Hcg(){};var ONb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview',4496,Enc);Zzc(4497,1,{1:1,120:1},Ncg);_.wab=function Ocg(a){return Jcg(a)};var LNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$0$Type',4497,Vhb);Zzc(4498,1,{1:1,120:1},Qcg);_.wab=function Rcg(a){return Kcg(a)};var MNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$1$Type',4498,Vhb);Zzc(4499,1,{1:1,120:1},Tcg);_.wab=function Ucg(a){return Lcg(a)};var NNb=B8c('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$2$Type',4499,Vhb);Zzc(1260,1,{1:1});_.Csb=function Ldg(){var a;a=this.Lsb(this.a.FA().Okc(),this.a.FA().Mkc(),this.a.FA().Qkc(),this.a.Ez().Ow(),this.a.PA().Bwc(),this.a.RA().Zyc(),this.a.RA().Yyc(),this.a.JA().Kpc(),this.a.XA().VOc());this.Hsb(a);return a};_.Hsb=function Rdg(a){};_.Lsb=function Vdg(a,b,d,e,g,h,i,j,k){return new Gag(a,b,d,e,g,h,i,j,k)};Zzc(1264,1,{48:1,1:1});_.vk=function neg(){this.b.Xj(this.a.a.Csb())};Zzc(155,1,{1:1,161:1});_.oEc=function zrk(){return 'No configured mail servers found.'};Zzc(239,1,{1:1,280:1});_.HHc=function TCk(a){return (new ODc).Au('Configured mail servers: ').zu(a).Bu()};RQk(XI)(29);\n//# sourceURL=hal-29.js\n")
