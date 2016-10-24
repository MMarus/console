$wnd.hal.runAsyncCallback27("defineClass(994, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_ServerGroupDeploymentPresenter(){\n  $clinit_ServerGroupDeploymentPresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction ServerGroupDeploymentPresenter(eventBus, view, proxy, environment, finder, finderPathFactory, dispatcher, placeManager, places, progress, resources){\n  $clinit_ServerGroupDeploymentPresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_1055();\n  this.environment = environment;\n  this.finderPathFactory = finderPathFactory;\n  this.dispatcher = dispatcher;\n  this.placeManager = placeManager;\n  this.places = places;\n  this.progress = progress;\n  this.resources = resources;\n}\n\ndefineClass(490, 105, {57:1, 47:1, 1:1, 32:1, 30:1, 490:1, 104:1}, ServerGroupDeploymentPresenter);\n_.$init_1055 = function $init_1055(){\n}\n;\n_.lambda$0_82 = function lambda$0_151(deployment_1, result_1){\n  $clinit_ServerGroupDeploymentPresenter();\n  {\n    castTo(this.progress.get_8(), 55).finish_0();\n    this.loadDeployment();\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().deploymentEnabledSuccess(deployment_1)));\n  }\n}\n;\n_.enable_4 = function enable_2(deployment){\n  var address, operation;\n  address = (new ResourceAddress).add_35('server-group', this.serverGroup).add_35('deployment', deployment);\n  castTo(this.progress.get_8(), 55).reset_0();\n  castTo(this.progress.get_8(), 55).tick();\n  operation = (new Operation$Builder('deploy', address)).build_15();\n  this.dispatcher.execute_12(operation, new ServerGroupDeploymentPresenter$lambda$0$Type(this, deployment));\n}\n;\n_.finderPath = function finderPath_14(){\n  return this.finderPathFactory.deployment_2(this.deployment);\n}\n;\n_.goToServerGroup = function goToServerGroup(){\n  var serverGroupPlaceRequest;\n  serverGroupPlaceRequest = this.places.finderPlace('runtime', (new FinderPath).append_16('domain-browse-by', asId('Server Groups')).append_16('server-group', serverGroup_4(this.serverGroup))).build_1();\n  this.placeManager.revealPlace(serverGroupPlaceRequest);\n}\n;\n_.loadDeployment = function loadDeployment(){\n  var functions;\n  functions = stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_gwt_flow_Function_2_classLit, 1), {4:1, 1:1, 5:1, 73:1}, 43, 0, [new DeploymentFunctions$ReadServerGroupDeployments_0(this.environment, this.dispatcher, this.serverGroup, this.deployment), new TopologyFunctions$RunningServersQuery(this.environment, this.dispatcher, (new ModelNode).set_10('server-group', this.serverGroup)), new DeploymentFunctions$LoadDeploymentsFromRunningServer(this.environment, this.dispatcher)]);\n  (new Async_0(castTo(this.progress.get_8(), 55))).waterfall(new FunctionContext, new ServerGroupDeploymentPresenter$1(this), functions);\n}\n;\n_.onBind = function onBind_17(){\n  getClassPrototype(91).onBind.call(this);\n  castTo(this.getView(), 3227).setPresenter(this);\n}\n;\n_.onReset = function onReset_11(){\n  getClassPrototype(105).onReset.call(this);\n  this.loadDeployment();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_9(request){\n  getClassPrototype(154).prepareFromRequest.call(this, request);\n  this.serverGroup = request.getParameter_0('server-group', null);\n  this.deployment = request.getParameter_0('deployment', null);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentPresenter_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentPresenter', 490, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_ServerGroupDeploymentPresenter$1(){\n  $clinit_ServerGroupDeploymentPresenter$1 = emptyMethod;\n  $clinit_Object();\n}\n\nfunction ServerGroupDeploymentPresenter$1(this$0){\n  $clinit_ServerGroupDeploymentPresenter$1();\n  this.this$01 = this$0;\n  Object_0.call(this);\n  this.$init_1056();\n}\n\ndefineClass(1233, 1, {1:1}, ServerGroupDeploymentPresenter$1);\n_.$init_1056 = function $init_1056(){\n}\n;\n_.onFailure_0 = function onFailure_64(context){\n  this.onFailure_5(castTo(context, 20));\n}\n;\n_.onSuccess_0 = function onSuccess_176(context){\n  this.onSuccess_6(castTo(context, 20));\n}\n;\n_.onFailure_5 = function onFailure_65(context){\n  fire_18(this.this$01.getEventBus(), error_6(this.this$01.resources.messages_0().deploymentReadError(this.this$01.deployment)));\n}\n;\n_.onSuccess_6 = function onSuccess_177(context){\n  var serverGroupDeployment, serverGroupDeployments;\n  serverGroupDeployments = castTo(context.get_11('deploymentFunctions.serverGroupDeployments'), 13);\n  if (!serverGroupDeployments.isEmpty()) {\n    serverGroupDeployment = castTo(serverGroupDeployments.get_0(0), 187);\n    castTo(this.this$01.getView(), 3227).update_13(this.this$01.serverGroup, serverGroupDeployment);\n  }\n   else {\n    fire_18(this.this$01.getEventBus(), error_6(this.this$01.resources.messages_0().deploymentReadError(this.this$01.deployment)));\n  }\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentPresenter$1_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentPresenter/1', 1233, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupDeploymentPresenter$MyView(){\n  $clinit_ServerGroupDeploymentPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.deployment', 'ServerGroupDeploymentPresenter/MyView');\nfunction $clinit_ServerGroupDeploymentPresenter$lambda$0$Type(){\n  $clinit_ServerGroupDeploymentPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction ServerGroupDeploymentPresenter$lambda$0$Type($$outer_0, deployment_1){\n  $clinit_ServerGroupDeploymentPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.deployment_1 = deployment_1;\n}\n\ndefineClass(1234, 1, {1:1, 25:1}, ServerGroupDeploymentPresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_178(arg0){\n  this.$$outer_0.lambda$0_82(this.deployment_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentPresenter/lambda$0$Type', 1234, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupDeploymentView(){\n  $clinit_ServerGroupDeploymentView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n}\n\nfunction ServerGroupDeploymentView(modelBrowser, resources){\n  $clinit_ServerGroupDeploymentView();\n  var elements;\n  HalViewImpl.call(this);\n  this.$init_1060();\n  this.deploymentModel = new DeploymentModelElement(modelBrowser, resources);\n  this.resources = resources;\n  this.noReferenceServer = (new EmptyState$Builder(resources.constants_0().noReferenceServer_0())).icon_0(pfIcon('server')).build_3();\n  $add($getClassList(this.noReferenceServer.asElement_0()), 'margin-top-large');\n  setVisible(this.noReferenceServer.asElement_0(), false);\n  elements = newArrayList_0(this.deploymentModel.asElements());\n  elements.add_0(this.noReferenceServer.asElement_0());\n  this.initElements(elements);\n}\n\nfunction lambda$0_153(element_0){\n  $clinit_ServerGroupDeploymentView();\n  setVisible(element_0, false);\n}\n\ndefineClass(1610, 71, {1:1, 32:1, 30:1, 3227:1, 52:1}, ServerGroupDeploymentView);\n_.$init_1060 = function $init_1060(){\n}\n;\n_.lambda$1_52 = function lambda$1_88(){\n  $clinit_ServerGroupDeploymentView();\n  this.presenter.goToServerGroup();\n}\n;\n_.lambda$2_40 = function lambda$2_70(deployment_1){\n  $clinit_ServerGroupDeploymentView();\n  this.presenter.enable_4(deployment_1.getName());\n}\n;\n_.setPresenter = function setPresenter_11(presenter){\n  this.setPresenter_6(castTo(presenter, 490));\n}\n;\n_.handleActive = function handleActive(deployment){\n  this.deploymentModel.update_12(deployment, new ServerGroupDeploymentView$lambda$2$Type(this, deployment));\n}\n;\n_.setPresenter_6 = function setPresenter_12(presenter){\n  this.presenter = presenter;\n}\n;\n_.update_13 = function update_27(serverGroup, sgd){\n  if (isNull_0(sgd.getDeployment())) {\n    setVisible(this.noReferenceServer.asElement_0(), true);\n    this.deploymentModel.asElements().forEach(new ServerGroupDeploymentView$lambda$0$Type);\n    this.noReferenceServer.setDescription(this.resources.messages_0().noReferenceServerEmptyState(sgd.getName(), serverGroup));\n    this.noReferenceServer.setPrimaryAction(this.resources.messages_0().goTo_1('Server Group'), new ServerGroupDeploymentView$lambda$1$Type(this));\n  }\n   else {\n    setVisible(this.noReferenceServer.asElement_0(), false);\n    this.handleActive(sgd.getDeployment());\n  }\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentView_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentView', 1610, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_ServerGroupDeploymentView$lambda$0$Type(){\n  $clinit_ServerGroupDeploymentView$lambda$0$Type = emptyMethod;\n}\n\nfunction ServerGroupDeploymentView$lambda$0$Type(){\n  $clinit_ServerGroupDeploymentView$lambda$0$Type();\n}\n\ndefineClass(1611, 1, {1:1, 24:1}, ServerGroupDeploymentView$lambda$0$Type);\n_.accept = function accept_66(arg0){\n  lambda$0_153(arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentView/lambda$0$Type', 1611, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupDeploymentView$lambda$1$Type(){\n  $clinit_ServerGroupDeploymentView$lambda$1$Type = emptyMethod;\n}\n\nfunction ServerGroupDeploymentView$lambda$1$Type($$outer_0){\n  $clinit_ServerGroupDeploymentView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1612, 1, {1:1}, ServerGroupDeploymentView$lambda$1$Type);\n_.execute_0 = function execute_163(){\n  this.$$outer_0.lambda$1_52();\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentView/lambda$1$Type', 1612, Ljava_lang_Object_2_classLit);\nfunction $clinit_ServerGroupDeploymentView$lambda$2$Type(){\n  $clinit_ServerGroupDeploymentView$lambda$2$Type = emptyMethod;\n}\n\nfunction ServerGroupDeploymentView$lambda$2$Type($$outer_0, deployment_1){\n  $clinit_ServerGroupDeploymentView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.deployment_1 = deployment_1;\n}\n\ndefineClass(1613, 1, {1:1}, ServerGroupDeploymentView$lambda$2$Type);\n_.execute_0 = function execute_164(){\n  this.$$outer_0.lambda$2_40(this.deployment_1);\n}\n;\nvar Lorg_jboss_hal_client_deployment_ServerGroupDeploymentView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'ServerGroupDeploymentView/lambda$2$Type', 1613, Ljava_lang_Object_2_classLit);\ndefineClass(1068, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter_org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_config().get_Key$type$org$jboss$hal$config$Environment$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_com_gwtplatform_mvp_client_proxy().get_Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_mvp().get_Key$type$org$jboss$hal$core$mvp$Places$_annotation$$none$$(), this.injector.getFragment_org_jboss_gwt_flow().get_Key$type$com$google$inject$Provider$org$jboss$gwt$flow$Progress$$_annotation$$org$jboss$hal$spi$Footer$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$deployment$ServerGroupDeploymentView_org$jboss$hal$client$deployment$ServerGroupDeploymentView_methodInjection(this.injector.getFragment_org_jboss_hal_core_modelbrowser().get_Key$type$org$jboss$hal$core$modelbrowser$ModelBrowser$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection______________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter_org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter_methodInjection = function org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter_org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10){\n  return new ServerGroupDeploymentPresenter(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10);\n}\n;\n_.org$jboss$hal$client$deployment$ServerGroupDeploymentView_org$jboss$hal$client$deployment$ServerGroupDeploymentView_methodInjection = function org$jboss$hal$client$deployment$ServerGroupDeploymentView_org$jboss$hal$client$deployment$ServerGroupDeploymentView_methodInjection(_0, _1){\n  return new ServerGroupDeploymentView(_0, _1);\n}\n;\ndefineClass(1073, 1, {58:1, 1:1});\n_.onSuccess_1 = function onSuccess_189(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$deployment$ServerGroupDeploymentPresenter$_annotation$$none$$());\n}\n;\ndefineClass(228, 1, {1:1, 258:1});\n_.deploymentReadError = function deploymentReadError(arg0){\n  return (new SafeHtmlBuilder).appendHtmlConstant('Unable to read information for deployment <strong>').appendEscaped(arg0).appendHtmlConstant('<\\/strong>.').toSafeHtml();\n}\n;\n_.goTo_1 = function goTo_1(arg0){\n  return 'Go to ' + arg0;\n}\n;\n_.noReferenceServerEmptyState = function noReferenceServerEmptyState(arg0, arg1){\n  return (new SafeHtmlBuilder).appendHtmlConstant('No runtime information available for deployment <strong>').appendEscaped(arg0).appendHtmlConstant('<\\/strong>. The server group ').appendEscaped(arg1).appendHtmlConstant(' does not contain a running server, which contains this deployment. Goto server group ').appendEscaped(arg1).appendHtmlConstant(' and start a server in order to see runtime related information.').toSafeHtml();\n}\n;\n$entry(onLoad)(27);\n\n//# sourceURL=hal-27.js\n")
