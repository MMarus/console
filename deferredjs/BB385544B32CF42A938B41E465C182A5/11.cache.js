$wnd.hal.runAsyncCallback11("defineClass(994, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_Attribute_0(){\n  $clinit_Attribute_0 = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Attribute_0(name_0){\n  $clinit_Attribute_0();\n  Attribute_1.call(this, name_0, ($clinit_Attribute$Scope() , BOTH));\n}\n\nfunction Attribute_1(name_0, scope_0){\n  $clinit_Attribute_0();\n  Object_0.call(this);\n  this.$init_890();\n  this.name_0 = name_0;\n  this.scope_0 = scope_0;\n}\n\ndefineClass(40, 1, {1:1, 40:1}, Attribute_0, Attribute_1);\n_.$init_890 = function $init_890(){\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'Attribute', 40, Ljava_lang_Object_2_classLit);\nfunction $clinit_Attribute$Scope(){\n  $clinit_Attribute$Scope = emptyMethod;\n  $clinit_Enum();\n  BOTH = new Attribute$Scope('BOTH', 0);\n  NON_XA = new Attribute$Scope('NON_XA', 1);\n  XA = new Attribute$Scope('XA', 2);\n}\n\nfunction Attribute$Scope(enum$name, enum$ordinal){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.$init_891();\n}\n\nfunction valueOf_52(name_0){\n  $clinit_Attribute$Scope();\n  return valueOf_0(($clinit_Attribute$Scope$Map() , $MAP_34), name_0);\n}\n\nfunction values_49(){\n  $clinit_Attribute$Scope();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute$Scope_2_classLit, 1), {4:1, 19:1, 1:1, 5:1}, 374, 0, [BOTH, NON_XA, XA]);\n}\n\ndefineClass(374, 8, {4:1, 10:1, 8:1, 1:1, 374:1}, Attribute$Scope);\n_.$init_891 = function $init_891(){\n}\n;\nvar BOTH, NON_XA, XA;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute$Scope_2_classLit = createForEnum('org.jboss.hal.client.configuration.subsystem.datasource', 'Attribute/Scope', 374, Ljava_lang_Enum_2_classLit, values_49, valueOf_52);\nfunction $clinit_Attribute$Scope$Map(){\n  $clinit_Attribute$Scope$Map = emptyMethod;\n  $MAP_34 = createValueOfMap(values_49());\n}\n\nvar $MAP_34;\nfunction $clinit_DataSourcePresenter(){\n  $clinit_DataSourcePresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction DataSourcePresenter(eventBus, view, proxy, finder, finderPathFactory, resources, dispatcher, statementContext){\n  $clinit_DataSourcePresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_896();\n  this.finderPathFactory = finderPathFactory;\n  this.resources = resources;\n  this.dispatcher = dispatcher;\n  this.statementContext = statementContext;\n  this.operationFactory = new OperationFactory;\n}\n\ndefineClass(486, 105, {57:1, 47:1, 1:1, 32:1, 30:1, 486:1, 157:1, 104:1}, DataSourcePresenter);\n_.$init_896 = function $init_896(){\n}\n;\n_.lambda$0_48 = function lambda$0_91(result_0){\n  $clinit_DataSourcePresenter();\n  castTo(this.getView(), 619).update_8(new DataSource(this.name_0, result_0, this.xa));\n}\n;\n_.lambda$1_27 = function lambda$1_47(op_0, failure_1){\n  $clinit_DataSourcePresenter();\n  {\n    castTo(this.getView(), 619).clear_1(this.xa);\n    fire_18(this.getEventBus(), error_7(this.resources.messages_0().resourceNotFound(this.type_7(), this.name_0), failure_1));\n  }\n}\n;\n_.lambda$2_17 = function lambda$2_37(op_0, exception_1){\n  $clinit_DataSourcePresenter();\n  {\n    castTo(this.getView(), 619).clear_1(this.xa);\n    this.dispatcher.defaultExceptionCallback().onException(op_0, exception_1);\n  }\n}\n;\n_.lambda$3_16 = function lambda$3_25(result_0){\n  $clinit_DataSourcePresenter();\n  {\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().modifyResourceSuccess(this.type_7(), this.name_0)));\n    this.loadDataSource();\n  }\n}\n;\n_.finderPath = function finderPath_3(){\n  return this.finderPathFactory.subsystemPath('datasources').append_17('data-source-driver', 'datasources', 'Datasources & Drivers', 'Datasources').append_17('data-source-configuration', dataSourceConfiguration(this.name_0, this.xa), 'Datasource', this.name_0);\n}\n;\n_.loadDataSource = function loadDataSource(){\n  var operation;\n  operation = (new Operation$Builder('read-resource', this.template_0().resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.name_0])))).build_15();\n  this.dispatcher.execute_14(operation, new DataSourcePresenter$lambda$0$Type(this), new DataSourcePresenter$lambda$1$Type(this), new DataSourcePresenter$lambda$2$Type(this));\n}\n;\n_.onBind = function onBind_6(){\n  getClassPrototype(91).onBind.call(this);\n  castTo(this.getView(), 619).setPresenter(this);\n}\n;\n_.onReset = function onReset_7(){\n  getClassPrototype(105).onReset.call(this);\n  this.loadDataSource();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_5(request){\n  getClassPrototype(154).prepareFromRequest.call(this, request);\n  this.name_0 = request.getParameter_0('name', null);\n  this.xa = booleanValue__Z__devirtual$(valueOf_19(request.getParameter_0('xa', valueOf_30(false))));\n}\n;\n_.resourceAddress = function resourceAddress_2(){\n  return this.xa?($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.name_0])):($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.name_0]));\n}\n;\n_.saveDataSource = function saveDataSource(changedValues){\n  var composite, resourceAddress;\n  resourceAddress = this.template_0().resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.name_0]));\n  composite = this.operationFactory.fromChangeSet(resourceAddress, changedValues);\n  this.dispatcher.execute_10(composite, new DataSourcePresenter$lambda$3$Type(this));\n}\n;\n_.template_0 = function template_0(){\n  return this.xa?($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE):($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE);\n}\n;\n_.type_7 = function type_8(){\n  return this.xa?'Datasource':'XA Datasource';\n}\n;\n_.xa = false;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter', 486, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_DataSourcePresenter$MyView(){\n  $clinit_DataSourcePresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/MyView');\nfunction $clinit_DataSourcePresenter$lambda$0$Type(){\n  $clinit_DataSourcePresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$lambda$0$Type($$outer_0){\n  $clinit_DataSourcePresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1194, 1, {1:1, 25:1}, DataSourcePresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_79(arg0){\n  this.$$outer_0.lambda$0_48(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/lambda$0$Type', 1194, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourcePresenter$lambda$1$Type(){\n  $clinit_DataSourcePresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$lambda$1$Type($$outer_0){\n  $clinit_DataSourcePresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1195, 1, {1:1}, DataSourcePresenter$lambda$1$Type);\n_.onFailed = function onFailed_4(arg0, arg1){\n  this.$$outer_0.lambda$1_27(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/lambda$1$Type', 1195, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourcePresenter$lambda$2$Type(){\n  $clinit_DataSourcePresenter$lambda$2$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$lambda$2$Type($$outer_0){\n  $clinit_DataSourcePresenter$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1196, 1, {1:1}, DataSourcePresenter$lambda$2$Type);\n_.onException = function onException_2(arg0, arg1){\n  this.$$outer_0.lambda$2_17(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/lambda$2$Type', 1196, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourcePresenter$lambda$3$Type(){\n  $clinit_DataSourcePresenter$lambda$3$Type = emptyMethod;\n}\n\nfunction DataSourcePresenter$lambda$3$Type($$outer_0){\n  $clinit_DataSourcePresenter$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1197, 1, {1:1, 74:1}, DataSourcePresenter$lambda$3$Type);\n_.onSuccess_0 = function onSuccess_80(arg0){\n  this.$$outer_0.lambda$3_16(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourcePresenter$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourcePresenter/lambda$3$Type', 1197, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView(){\n  $clinit_DataSourceView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n  CONSTANTS_13 = castTo(new Constants_, 126);\n  attributes_0 = create_0();\n  {\n    attributes_0.putAll(CONSTANTS_13.attributes_1(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_0('jndi-name'), new Attribute_0('driver-name'), new Attribute_0('enabled'), new Attribute_0('statistics-enabled')])));\n    attributes_0.putAll(CONSTANTS_13.connection(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_1('connection-url', ($clinit_Attribute$Scope() , XA)), new Attribute_0('url-delimiter'), new Attribute_0('url-selector-strategy-class-name'), new Attribute_0('new-connection-sql'), new Attribute_0('connection-listener-class'), new Attribute_0('connection-listener-property'), new Attribute_0('transaction-isolation'), new Attribute_1('jta', ($clinit_Attribute$Scope() , NON_XA)), new Attribute_0('use-ccm'), new Attribute_1('same-rm-override', ($clinit_Attribute$Scope() , XA)), new Attribute_1('interleaving', ($clinit_Attribute$Scope() , XA)), new Attribute_1('pad-xid', ($clinit_Attribute$Scope() , XA)), new Attribute_1('wrap-xa-resource', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_13.pool_0(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_0('min-pool-size'), new Attribute_0('initial-pool-size'), new Attribute_0('max-pool-size'), new Attribute_0('pool-prefill'), new Attribute_0('flush-strategy'), new Attribute_0('pool-use-strict-min'), new Attribute_0('pool-fair'), new Attribute_0('use-fast-fail'), new Attribute_0('capacity-decrementer-class'), new Attribute_0('capacity-decrementer-properties'), new Attribute_0('capacity-incrementer-class'), new Attribute_0('capacity-incrementer-properties'), new Attribute_1('no-recovery', ($clinit_Attribute$Scope() , XA)), new Attribute_1('tx-separate-pool', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_13.security(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_0('user-name'), new Attribute_0('password'), new Attribute_0('security-domain'), new Attribute_0('allow-multiple-users'), new Attribute_0('reauth-plugin-class-name'), new Attribute_0('reauth-plugin-properties'), new Attribute_1('recovery-username', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-password', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-security-domain', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-plugin-class-name', ($clinit_Attribute$Scope() , XA)), new Attribute_1('recovery-plugin-properties', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_13.validation(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_0('valid-connection-checker-class-name'), new Attribute_0('valid-connection-checker-properties'), new Attribute_0('check-valid-connection-sql'), new Attribute_0('validate-on-match'), new Attribute_0('background-validation'), new Attribute_0('background-validation-millis'), new Attribute_0('stale-connection-checker-class-name'), new Attribute_0('stale-connection-checker-properties'), new Attribute_0('exception-sorter-class-name'), new Attribute_0('exception-sorter-properties')])));\n    attributes_0.putAll(CONSTANTS_13.timeouts(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_0('use-try-lock'), new Attribute_0('blocking-timeout-wait-millis'), new Attribute_0('idle-timeout-minutes'), new Attribute_0('set-tx-query-timeout'), new Attribute_0('query-timeout'), new Attribute_0('allocation-retry'), new Attribute_0('allocation-retry-wait-millis'), new Attribute_1('xa-resource-timeout', ($clinit_Attribute$Scope() , XA))])));\n    attributes_0.putAll(CONSTANTS_13.statements() + ' / ' + CONSTANTS_13.tracking(), asList_2(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_client_configuration_subsystem_datasource_Attribute_2_classLit, 1), {4:1, 1:1, 5:1}, 40, 0, [new Attribute_0('spy'), new Attribute_0('tracking'), new Attribute_0('track-statements'), new Attribute_0('share-prepared-statements'), new Attribute_0('prepared-statements-cache-size'), new Attribute_0('enlistment-trace')])));\n  }\n}\n\nfunction DataSourceView(metadataRegistry, resources){\n  $clinit_DataSourceView();\n  var form_0, layoutBuilder, nonXaMeta, nonXaNames, root, saveCallback, section, section$iterator, sectionAttributes, sectionId, xaMeta, xaNames;\n  HalViewImpl.call(this);\n  this.$init_903();\n  this.resources = resources;\n  nonXaMeta = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_1() , DATA_SOURCE_TEMPLATE)), 27);\n  xaMeta = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_1() , XA_DATA_SOURCE_TEMPLATE)), 27);\n  this.nonXaInfo = castTo(castTo(castTo((new Elements$Builder).p(), 3).textContent_0(nonXaMeta.getDescription_0().getDescription()), 3).end(), 3).build_2();\n  this.xaInfo = castTo(castTo(castTo((new Elements$Builder).p(), 3).textContent_0(xaMeta.getDescription_0().getDescription()), 3).end(), 3).build_2();\n  this.nonXaForms = new ArrayList;\n  this.xaForms = new ArrayList;\n  this.nonXaTabs = new Tabs;\n  this.xaTabs = new Tabs;\n  saveCallback = new DataSourceView$lambda$0$Type(this);\n  for (section$iterator = attributes_0.keySet_0().iterator_0(); section$iterator.hasNext_0();) {\n    section = castToString(section$iterator.next_1());\n    sectionId = asId(section);\n    sectionAttributes = attributes_0.get_5(section);\n    nonXaNames = castTo(sectionAttributes.stream().filter_0(new DataSourceView$lambda$1$Type).map_3(new DataSourceView$lambda$2$Type).collect_0(toList()), 13);\n    form_0 = (new ModelNodeForm$Builder(build_19('data-source-configuration', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['form', sectionId])), nonXaMeta)).include_0(nonXaNames).onSave_0(saveCallback).build_14();\n    this.nonXaForms.add_0(form_0);\n    this.nonXaTabs.add_13(build_19('data-source-configuration', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['tab', sectionId])), section, form_0.asElement_0(), stampJavaTypeInfo(getClassLiteralForArray(Lelemental_dom_Element_2_classLit, 1), {4:1, 1:1, 5:1}, 0, 2, []));\n    xaNames = castTo(sectionAttributes.stream().filter_0(new DataSourceView$lambda$3$Type).map_3(new DataSourceView$lambda$4$Type).collect_0(toList()), 13);\n    form_0 = (new ModelNodeForm$Builder(build_19('xa-data-source', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['form', sectionId])), xaMeta)).include_0(xaNames).onSave_0(saveCallback).build_14();\n    this.xaForms.add_0(form_0);\n    this.xaTabs.add_13(build_19('xa-data-source', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['tab', sectionId])), section, form_0.asElement_0(), stampJavaTypeInfo(getClassLiteralForArray(Lelemental_dom_Element_2_classLit, 1), {4:1, 1:1, 5:1}, 0, 2, []));\n  }\n  layoutBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().header_1('Datasource').rememberAs('headerElement'), 9).end(), 9).add_10(this.nonXaInfo), 9).add_10(this.xaInfo), 9).add_10(this.nonXaTabs.asElement_0()), 9).add_10(this.xaTabs.asElement_0()), 9).end(), 9).end(), 9);\n  root = layoutBuilder.build_2();\n  this.header = layoutBuilder.referenceFor('headerElement');\n  this.registerAttachables(this.nonXaForms);\n  this.registerAttachables(this.xaForms);\n  this.initElement(root);\n}\n\nfunction lambda$1_49(attribute_0){\n  $clinit_DataSourceView();\n  return jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , BOTH)) || jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , NON_XA));\n}\n\nfunction lambda$2_38(attribute_0){\n  $clinit_DataSourceView();\n  return attribute_0.name_0;\n}\n\nfunction lambda$3_26(attribute_0){\n  $clinit_DataSourceView();\n  return jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , BOTH)) || jsEquals(attribute_0.scope_0, ($clinit_Attribute$Scope() , XA));\n}\n\nfunction lambda$4_22(attribute_0){\n  $clinit_DataSourceView();\n  return attribute_0.name_0;\n}\n\ndefineClass(1565, 71, {1:1, 32:1, 30:1, 619:1, 52:1}, DataSourceView);\n_.$init_903 = function $init_903(){\n}\n;\n_.lambda$0_49 = function lambda$0_93(f_0, changedValues_1){\n  $clinit_DataSourceView();\n  this.presenter.saveDataSource(changedValues_1);\n}\n;\n_.setPresenter = function setPresenter_1(presenter){\n  this.setPresenter_1(castTo(presenter, 486));\n}\n;\n_.clear_1 = function clear_43(xa){\n  var form_0, form$iterator;\n  this.showHide(xa);\n  if (xa) {\n    $setTextContent(this.header, 'XA Datasource');\n    for (form$iterator = this.xaForms.iterator_0(); form$iterator.hasNext_0();) {\n      form_0 = castTo(form$iterator.next_1(), 188);\n      form_0.clear_0();\n    }\n  }\n   else {\n    $setTextContent(this.header, 'Datasource');\n    for (form$iterator = this.nonXaForms.iterator_0(); form$iterator.hasNext_0();) {\n      form_0 = castTo(form$iterator.next_1(), 188);\n      form_0.clear_0();\n    }\n  }\n}\n;\n_.setPresenter_1 = function setPresenter_2(presenter){\n  this.presenter = presenter;\n}\n;\n_.showHide = function showHide(xa){\n  setVisible(this.nonXaInfo, !xa);\n  setVisible(this.xaInfo, xa);\n  setVisible(this.nonXaTabs.asElement_0(), !xa);\n  setVisible(this.xaTabs.asElement_0(), xa);\n}\n;\n_.update_8 = function update_14(dataSource){\n  var form_0, form$iterator;\n  this.showHide(dataSource.isXa());\n  $setInnerHTML_0(this.header, (new SafeHtmlBuilder).appendEscaped(dataSource.getName()).appendHtmlConstant('<small>').appendEscaped(' (').appendEscaped(dataSource.isEnabled()?this.resources.constants_0().enabled_1():this.resources.constants_0().disabled_1()).appendEscaped(')').appendHtmlConstant('<\\/small>').toSafeHtml().asString());\n  if (dataSource.isXa()) {\n    for (form$iterator = this.xaForms.iterator_0(); form$iterator.hasNext_0();) {\n      form_0 = castTo(form$iterator.next_1(), 188);\n      form_0.view_0(dataSource);\n    }\n  }\n   else {\n    for (form$iterator = this.nonXaForms.iterator_0(); form$iterator.hasNext_0();) {\n      form_0 = castTo(form$iterator.next_1(), 188);\n      form_0.view_0(dataSource);\n    }\n  }\n}\n;\nvar CONSTANTS_13, attributes_0;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView', 1565, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_DataSourceView$lambda$0$Type(){\n  $clinit_DataSourceView$lambda$0$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$0$Type($$outer_0){\n  $clinit_DataSourceView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1566, 1, {1:1}, DataSourceView$lambda$0$Type);\n_.onSave = function onSave_7(arg0, arg1){\n  this.$$outer_0.lambda$0_49(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$0$Type', 1566, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$1$Type(){\n  $clinit_DataSourceView$lambda$1$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$1$Type(){\n  $clinit_DataSourceView$lambda$1$Type();\n}\n\ndefineClass(1567, 1, {1:1, 23:1}, DataSourceView$lambda$1$Type);\n_.and = function and_30(other){\n  return $and(this, other);\n}\n;\n_.negate_1 = function negate_37(){\n  return $negate(this);\n}\n;\n_.or_0 = function or_35(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_29(arg0){\n  return lambda$1_49(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$1$Type', 1567, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$2$Type(){\n  $clinit_DataSourceView$lambda$2$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$2$Type(){\n  $clinit_DataSourceView$lambda$2$Type();\n}\n\ndefineClass(1568, 1, {1:1}, DataSourceView$lambda$2$Type);\n_.apply_2 = function apply_88(arg0){\n  return lambda$2_38(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$2$Type', 1568, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$3$Type(){\n  $clinit_DataSourceView$lambda$3$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$3$Type(){\n  $clinit_DataSourceView$lambda$3$Type();\n}\n\ndefineClass(1569, 1, {1:1, 23:1}, DataSourceView$lambda$3$Type);\n_.and = function and_31(other){\n  return $and(this, other);\n}\n;\n_.negate_1 = function negate_38(){\n  return $negate(this);\n}\n;\n_.or_0 = function or_36(other){\n  return $or(this, other);\n}\n;\n_.test_0 = function test_30(arg0){\n  return lambda$3_26(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$3$Type', 1569, Ljava_lang_Object_2_classLit);\nfunction $clinit_DataSourceView$lambda$4$Type(){\n  $clinit_DataSourceView$lambda$4$Type = emptyMethod;\n}\n\nfunction DataSourceView$lambda$4$Type(){\n  $clinit_DataSourceView$lambda$4$Type();\n}\n\ndefineClass(1570, 1, {1:1}, DataSourceView$lambda$4$Type);\n_.apply_2 = function apply_89(arg0){\n  return lambda$4_22(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_datasource_DataSourceView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.datasource', 'DataSourceView/lambda$4$Type', 1570, Ljava_lang_Object_2_classLit);\ndefineClass(1028, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection__________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new DataSourcePresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection = function org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_org$jboss$hal$client$configuration$subsystem$datasource$DataSourceView_methodInjection(_0, _1){\n  return new DataSourceView(_0, _1);\n}\n;\ndefineClass(1030, 1, {58:1, 1:1});\n_.onSuccess_1 = function onSuccess_87(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$datasource$DataSourcePresenter$_annotation$$none$$());\n}\n;\ndefineClass(895, 1, {100:1, 1:1, 4011:1});\n_.defaultExceptionCallback = function defaultExceptionCallback(){\n  return this.exceptionCallback;\n}\n;\ndefineClass(121, 1, {1:1, 126:1});\n_.security = function security(){\n  return 'Security';\n}\n;\n_.statements = function statements(){\n  return 'Statements';\n}\n;\n_.timeouts = function timeouts(){\n  return 'Timeouts';\n}\n;\n_.tracking = function tracking(){\n  return 'Tracking';\n}\n;\n_.validation = function validation(){\n  return 'Validation';\n}\n;\ndefineClass(228, 1, {1:1, 258:1});\n_.resourceNotFound = function resourceNotFound(arg0, arg1){\n  return (new SafeHtmlBuilder).appendHtmlConstant('Unable to load ').appendEscaped(arg0).appendHtmlConstant(' <strong>').appendEscaped(arg1).appendHtmlConstant('<\\/strong>.').toSafeHtml();\n}\n;\n$entry(onLoad)(11);\n\n//# sourceURL=hal-11.js\n")
