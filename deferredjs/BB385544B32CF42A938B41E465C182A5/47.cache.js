$wnd.hal.runAsyncCallback47("defineClass(994, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___________________________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___________________________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_JpaPresenter(){\n  $clinit_JpaPresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction JpaPresenter(eventBus, view, myProxy, finder, finderPathFactory, dispatcher, statementContext, resources){\n  $clinit_JpaPresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, myProxy, finder);\n  this.$init_1266();\n  this.finderPathFactory = finderPathFactory;\n  this.dispatcher = dispatcher;\n  this.statementContext = statementContext;\n  this.resources = resources;\n}\n\ndefineClass(499, 105, {57:1, 47:1, 1:1, 32:1, 30:1, 499:1, 104:1}, JpaPresenter);\n_.$init_1266 = function $init_1266(){\n}\n;\n_.lambda$0_107 = function lambda$0_202(address_1, result_1){\n  $clinit_JpaPresenter();\n  castTo(this.getView(), 3229).update_17(new JpaStatistic(address_1, result_1));\n}\n;\n_.finderPath = function finderPath_23(){\n  return this.finderPathFactory.runtimeServerPath().append_17('server-monitor', asId('JPA'), this.resources.constants_0().monitor(), 'JPA').append_17('jpa-runtime', jpaStatistic_0(this.deployment, this.persistenceUnit), 'JPA', this.persistenceUnit);\n}\n;\n_.load_5 = function load_5(){\n  var address, operation;\n  address = ($clinit_AddressTemplates_10() , JPA_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.deployment, this.resourceName]));\n  operation = (new Operation$Builder('read-resource', address)).param_2('include-runtime', true).param_2('recursive', true).build_15();\n  this.dispatcher.execute_12(operation, new JpaPresenter$lambda$0$Type(this, address));\n}\n;\n_.onBind = function onBind_26(){\n  getClassPrototype(91).onBind.call(this);\n  castTo(this.getView(), 3229).setPresenter(this);\n}\n;\n_.onReset = function onReset_17(){\n  getClassPrototype(105).onReset.call(this);\n  this.load_5();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_12(request){\n  getClassPrototype(154).prepareFromRequest.call(this, request);\n  this.persistenceUnit = request.getParameter_0('name', null);\n  this.deployment = request.getParameter_0('deployment', null);\n  this.resourceName = this.deployment + '#' + this.persistenceUnit;\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaPresenter_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaPresenter', 499, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_JpaPresenter$MyView(){\n  $clinit_JpaPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaPresenter/MyView');\nfunction $clinit_JpaPresenter$lambda$0$Type(){\n  $clinit_JpaPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction JpaPresenter$lambda$0$Type($$outer_0, address_1){\n  $clinit_JpaPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.address_1 = address_1;\n}\n\ndefineClass(1253, 1, {1:1, 25:1}, JpaPresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_245(arg0){\n  this.$$outer_0.lambda$0_107(this.address_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaPresenter/lambda$0$Type', 1253, Ljava_lang_Object_2_classLit);\nfunction $clinit_JpaView(){\n  $clinit_JpaView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n  CONSTANTS_15 = castTo(new Constants_, 126);\n  mainAttributes = create_0();\n  {\n    mainAttributes.putAll(CONSTANTS_15.attributes_1(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['hibernate-persistence-unit', 'enabled', 'statistics-enabled'])));\n    mainAttributes.putAll(CONSTANTS_15.counter(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['session-open-count', 'session-close-count', 'completed-transaction-count', 'successful-transaction-count', 'prepared-statement-count', 'close-statement-count', 'flush-count', 'connect-count', 'optimistic-failure-count'])));\n    mainAttributes.putAll('Entity', asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['entity-delete-count', 'entity-fetch-count', 'entity-insert-count', 'entity-load-count', 'entity-update-count'])));\n    mainAttributes.putAll('Connection', asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['collection-fetch-count', 'collection-load-count', 'collection-recreated-count', 'collection-remove-count', 'collection-update-count'])));\n    mainAttributes.putAll('Query', asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['query-cache-hit-count', 'query-cache-miss-count', 'query-cache-put-count', 'query-execution-count', 'query-execution-max-time', 'query-execution-max-time-query-string'])));\n    mainAttributes.putAll('Second Level Cache', asList_2(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['second-level-cache-hit-count', 'second-level-cache-miss-count', 'second-level-cache-put-count'])));\n  }\n}\n\nfunction JpaView(metadataRegistry, resources){\n  $clinit_JpaView();\n  var baseId, builder, form_0, layoutBuilder, mainAttributesTabs, metadata, root, section, section$iterator, sectionAttributes, sectionId;\n  HalViewImpl.call(this);\n  this.$init_1271();\n  this.metadataRegistry = metadataRegistry;\n  this.resources = resources;\n  this.mainForms = new ArrayList;\n  this.childForms = new HashMap;\n  this.childTables = new HashMap;\n  mainAttributesTabs = new Tabs;\n  baseId = build_19('jpa-runtime', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  metadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_10() , JPA_TEMPLATE)), 27);\n  for (section$iterator = mainAttributes.keySet_0().iterator_0(); section$iterator.hasNext_0();) {\n    section = castToString(section$iterator.next_1());\n    sectionId = asId(section);\n    sectionAttributes = mainAttributes.get_5(section);\n    form_0 = (new ModelNodeForm$Builder(build_19(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['form', sectionId])), metadata)).viewOnly_0().includeRuntime_0().include_0(sectionAttributes).unsorted_0().build_14();\n    this.registerAttachable(form_0, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 11, 0, []));\n    this.mainForms.add_0(form_0);\n    mainAttributesTabs.add_13(build_19(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['tab', sectionId])), section, form_0.asElement_0(), stampJavaTypeInfo(getClassLiteralForArray(Lelemental_dom_Element_2_classLit, 1), {4:1, 1:1, 5:1}, 0, 2, []));\n  }\n  builder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).section(), 3).h_1(1), 3).rememberAs('headerElement'), 3).end(), 3).p(), 3).css_0('lead'), 3).rememberAs('leadElement'), 3).end(), 3).p(), 3).css_0('clearfix'), 3).span_0(), 3).textContent_0(metadata.getDescription_0().getDescription()), 3).end(), 3).a(), 3).css_1('clickable', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['pull-right'])), 3).on_0(($clinit_EventType() , click_0), new JpaView$lambda$0$Type(this)), 3).span_0(), 3).css_1(fontAwesome('refresh'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['margin-right-5'])), 3).end(), 3).span_0(), 3).textContent_0(resources.constants_0().refresh_13()), 3).end(), 3).end(), 3).end(), 3).add_12(mainAttributesTabs), 3).end(), 3);\n  this.headerElement = builder.referenceFor('headerElement');\n  this.leadElement = builder.referenceFor('leadElement');\n  this.navigation = new VerticalNavigation;\n  this.registerAttachable(this.navigation, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 11, 0, []));\n  this.navigation.addPrimary_0(($clinit_Ids() , JPA_RUNTIME_MAIN_ATTRIBUTES_ENTRY), resources.constants_0().mainAttributes_0(), fontAwesome('list-ul'), builder.build_2());\n  this.buildChildPanel(baseId, ($clinit_AddressTemplates_10() , ENTITY_TEMPLATE), 'entity');\n  this.navigation.addPrimary_0(($clinit_Ids() , JPA_RUNTIME_ENTITY_ENTRY), 'Entity', fontAwesome('cubes'), this.buildChildPanel(baseId, ($clinit_AddressTemplates_10() , ENTITY_TEMPLATE), 'Entity'));\n  this.navigation.addPrimary_0(($clinit_Ids() , JPA_RUNTIME_ENTITY_CACHE_ENTRY), 'Entity Cache', fontAwesome('database'), this.buildChildPanel(baseId, ($clinit_AddressTemplates_10() , ENTITY_CACHE_TEMPLATE), 'Entity Cache'));\n  this.navigation.addPrimary_0(($clinit_Ids() , JPA_RUNTIME_QUERY_CACHE_ENTRY), 'Query Cache', pfIcon('storage-domain'), this.buildChildPanel(baseId, ($clinit_AddressTemplates_10() , QUERY_CACHE_TEMPLATE), 'Query Cache'));\n  this.navigation.addPrimary_0(($clinit_Ids() , JPA_RUNTIME_COLLECTION_ENTRY), 'Collection', fontAwesome('tasks'), this.buildChildPanel(baseId, ($clinit_AddressTemplates_10() , COLLECTION_TEMPLATE), 'Collection'));\n  layoutBuilder = castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().addAll_0(this.navigation.panes_0()), 9).end(), 9).end(), 9);\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$1_124(cell_0, t_1, row_2, meta_3){\n  $clinit_JpaView();\n  return row_2.getName();\n}\n\nfunction lambda$3_73(statistic_0, form_1){\n  $clinit_JpaView();\n  form_1.view_0(statistic_0);\n}\n\ndefineClass(1638, 71, {1:1, 32:1, 30:1, 3229:1, 52:1}, JpaView);\n_.$init_1271 = function $init_1271(){\n}\n;\n_.lambda$0_108 = function lambda$0_205(event_0){\n  $clinit_JpaView();\n  this.refresh_5();\n}\n;\n_.lambda$2_54 = function lambda$2_98(event_0){\n  $clinit_JpaView();\n  this.refresh_5();\n}\n;\n_.setPresenter = function setPresenter_23(presenter){\n  this.setPresenter_12(castTo(presenter, 499));\n}\n;\n_.attach = function attach_33(){\n  getClassPrototype(71).attach.call(this);\n  this.bindFormToTable('entity');\n  this.bindFormToTable('entity-cache');\n  this.bindFormToTable('query-cache');\n  this.bindFormToTable('collection');\n}\n;\n_.bindFormToTable = function bindFormToTable(resource){\n  var table;\n  table = castTo(this.childTables.get_2(resource), 202);\n  $bindForm(table.api_0(), castTo(this.childForms.get_2(resource), 188));\n}\n;\n_.buildChildPanel = function buildChildPanel(baseId, template, title_0){\n  var form_0, metadata, options, resource, table;\n  resource = template.lastKey();\n  metadata = castTo(this.metadataRegistry.lookup_1(template), 27);\n  options = castTo((new ModelNodeTable$Builder(metadata)).column_8('name', makeLambdaFunction(JpaView$lambda$1$Type.prototype.render_2, JpaView$lambda$1$Type, [])), 16).build_8();\n  table = new ModelNodeTable(build_19(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [resource, 'table'])), options);\n  form_0 = (new ModelNodeForm$Builder(build_19(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [resource, 'form'])), metadata)).viewOnly_0().includeRuntime_0().build_14();\n  this.registerAttachable(table, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 11, 0, []));\n  this.registerAttachable(form_0, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 11, 0, []));\n  this.childTables.put_0(resource, table);\n  this.childForms.put_0(resource, form_0);\n  return castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).section(), 3).h_1(1), 3).textContent_0(title_0), 3).end(), 3).p(), 3).css_0('clearfix'), 3).span_0(), 3).textContent_0(metadata.getDescription_0().getDescription()), 3).end(), 3).a(), 3).css_1('clickable', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['pull-right'])), 3).on_0(($clinit_EventType() , click_0), new JpaView$lambda$2$Type(this)), 3).span_0(), 3).css_1(fontAwesome('refresh'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['margin-right-5'])), 3).end(), 3).span_0(), 3).textContent_0(this.resources.constants_0().refresh_13()), 3).end(), 3).end(), 3).end(), 3).add_10(table.asElement_0()), 3).add_10(form_0.asElement_0()), 3).end(), 3).build_2();\n}\n;\n_.refresh_5 = function refresh_5(){\n  if (isNotNull(this.presenter)) {\n    this.presenter.load_5();\n  }\n}\n;\n_.setPresenter_12 = function setPresenter_24(presenter){\n  this.presenter = presenter;\n}\n;\n_.update_17 = function update_44(statistic){\n  $setTextContent(this.headerElement, statistic.getName());\n  $setTextContent(this.leadElement, statistic.getDeployment_0());\n  this.mainForms.forEach(new JpaView$lambda$3$Type(statistic));\n  this.updateChildResource(statistic, 'entity');\n  this.updateChildResource(statistic, 'entity-cache');\n  this.updateChildResource(statistic, 'query-cache');\n  this.updateChildResource(statistic, 'collection');\n}\n;\n_.updateChildResource = function updateChildResource(statistic, childResource){\n  var childResources, form_0, table;\n  if (statistic.hasDefined(childResource)) {\n    childResources = asNamedNodes(statistic.get_17(childResource).asPropertyList());\n    form_0 = castTo(this.childForms.get_2(childResource), 188);\n    table = castTo(this.childTables.get_2(childResource), 202);\n    $refresh_1($add_0(table.api_0().clear(), childResources), ($clinit_Api$RefreshMode() , RESET_0));\n    form_0.clear_0();\n  }\n}\n;\nvar CONSTANTS_15, mainAttributes;\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaView_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaView', 1638, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_JpaView$lambda$0$Type(){\n  $clinit_JpaView$lambda$0$Type = emptyMethod;\n}\n\nfunction JpaView$lambda$0$Type($$outer_0){\n  $clinit_JpaView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1639, 1, {1:1}, JpaView$lambda$0$Type);\n_.handleEvent_0 = function handleEvent_101(arg0){\n  this.$$outer_0.lambda$0_108(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaView/lambda$0$Type', 1639, Ljava_lang_Object_2_classLit);\nfunction $clinit_JpaView$lambda$1$Type(){\n  $clinit_JpaView$lambda$1$Type = emptyMethod;\n}\n\nfunction JpaView$lambda$1$Type(){\n  $clinit_JpaView$lambda$1$Type();\n}\n\ndefineClass(4141, $wnd.Function, {1:1}, JpaView$lambda$1$Type);\n_.render_2 = function render_69(arg0, arg1, arg2, arg3){\n  return lambda$1_124(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_JpaView$lambda$2$Type(){\n  $clinit_JpaView$lambda$2$Type = emptyMethod;\n}\n\nfunction JpaView$lambda$2$Type($$outer_0){\n  $clinit_JpaView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1640, 1, {1:1}, JpaView$lambda$2$Type);\n_.handleEvent_0 = function handleEvent_102(arg0){\n  this.$$outer_0.lambda$2_54(arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaView/lambda$2$Type', 1640, Ljava_lang_Object_2_classLit);\nfunction $clinit_JpaView$lambda$3$Type(){\n  $clinit_JpaView$lambda$3$Type = emptyMethod;\n}\n\nfunction JpaView$lambda$3$Type(statistic_0){\n  $clinit_JpaView$lambda$3$Type();\n  this.statistic_0 = statistic_0;\n}\n\ndefineClass(1641, 1, {1:1, 24:1}, JpaView$lambda$3$Type);\n_.accept = function accept_92(arg0){\n  lambda$3_73(this.statistic_0, arg0);\n}\n;\nvar Lorg_jboss_hal_client_runtime_subsystem_jpa_JpaView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.runtime.subsystem.jpa', 'JpaView/lambda$3$Type', 1641, Ljava_lang_Object_2_classLit);\ndefineClass(1133, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter_org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$runtime$subsystem$jpa$JpaView_org$jboss$hal$client$runtime$subsystem$jpa$JpaView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection___________________________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter_org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter_methodInjection = function org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter_org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new JpaPresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$runtime$subsystem$jpa$JpaView_org$jboss$hal$client$runtime$subsystem$jpa$JpaView_methodInjection = function org$jboss$hal$client$runtime$subsystem$jpa$JpaView_org$jboss$hal$client$runtime$subsystem$jpa$JpaView_methodInjection(_0, _1){\n  return new JpaView(_0, _1);\n}\n;\ndefineClass(1135, 1, {58:1, 1:1});\n_.onSuccess_1 = function onSuccess_247(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$runtime$subsystem$jpa$JpaPresenter$_annotation$$none$$());\n}\n;\ndefineClass(121, 1, {1:1, 126:1});\n_.counter = function counter_0(){\n  return 'Counter';\n}\n;\n$entry(onLoad)(47);\n\n//# sourceURL=hal-47.js\n")
