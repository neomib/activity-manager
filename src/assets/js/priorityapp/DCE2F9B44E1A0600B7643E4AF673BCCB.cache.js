var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.priorityapp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'DCE2F9B44E1A0600B7643E4AF673BCCB';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {1:1}, $intern_1 = 2147483647, $intern_2 = {3:1, 1:1, 5:1}, $intern_3 = 65536, $intern_4 = {3:1, 1:1, 9:1}, $intern_5 = {3:1, 7:1, 1:1, 8:1, 9:1}, $intern_6 = {3:1, 18:1, 15:1, 1:1}, $intern_7 = {3:1, 1:1}, $intern_8 = {10:1, 3:1, 7:1, 1:1, 9:1}, $intern_9 = {1:1, 35:1}, $intern_10 = 4194304, $intern_11 = 4294967296, $intern_12 = 4194303, $intern_13 = 1048575, $intern_14 = 17592186044416, $intern_15 = {1:1, 34:1}, $intern_16 = {236:1, 1:1}, $intern_17 = 1.3407807929942597E154, $intern_18 = 1.157920892373162E77, $intern_19 = 3.4028236692093846E38, $intern_20 = 1.8446744073709552E19, $intern_21 = 7.458340731200207E-155, $intern_22 = 8.636168555094445E-78, $intern_23 = 2.9387358770557188E-39, $intern_24 = 5.421010862427522E-20, $intern_25 = 2.3283064365386963E-10, $intern_26 = 1.52587890625E-5, $intern_27 = 2.2250738585072014E-308, $intern_28 = 3.141592653589793, $intern_29 = {1:1, 53:1}, $intern_30 = {1:1, 23:1}, $intern_31 = {1:1, 25:1}, $intern_32 = {3:1, 1:1, 23:1, 54:1}, $intern_33 = {3:1, 1:1, 53:1}, $intern_34 = {3:1, 1:1, 35:1}, $intern_35 = {3:1, 1:1, 23:1};
var cggl = {};
var jl = {};
var cggcc = {};
var ji = {};
var jlr = {};
var ju = {};
var cggcci = {};
var cggccp = {};
var cggcs = {};
var cggcsi = {};
var cggdc = {};
var cggels = {};
var cgges = {};
var cgwbes = {};
var cgggc = {};
var cgghc = {};
var cgguc = {};
var cggic = {};
var cggici = {};
var cggjc = {};
var jul = {};
var cgglc = {};
var cggli = {};
var cggrc = {};
var cggtc = {};
var cggts = {};
var cgguci = {};
var cgguc2 = {};
var cggxc = {};
var cpac = {};
var cpaf = {};
var cpam = {};
var cpap = {};
var jla = {};
var _;
cggl.prototypesByTypeId_0 = {};
cggl.permutationId = 0;
function getPermutationId(){
  return cggl.permutationId;
}

cggl.$clinit_CollapsedPropertyHolder = function $clinit_CollapsedPropertyHolder(){
}
;
function typeMarkerFn(){
  cggl.$clinit_JavaClassHierarchySetupUtil();
}

function trampolineBridgeMethod(o, bridgeRef, nonbridgeRef){
  return isJavaScriptObject(o)?bridgeRef:nonbridgeRef;
}

function provide(namespace){
  var cur = this;
  if (namespace == '$wnd') {
    return $wnd;
  }
   else if (namespace === '') {
    return cur;
  }
  if (namespace.substring(0, 5) == '$wnd.') {
    cur = $wnd;
    namespace = namespace.substring(5);
  }
  var parts = namespace.split('.');
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }
  for (var part; parts.length && (part = parts.shift());) {
    if (cur[part]) {
      cur = cur[part];
    }
     else {
      cur = cur[part] = {};
    }
  }
  return cur;
}

cggl.portableObjCreate = function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}
;
function modernizeBrowser(){
  if (!Array.isArray) {
    Array.isArray = function(vArg){
      return Object.prototype.toString.call(vArg) === '[object Array]';
    }
    ;
  }
}

cggl.maybeGetClassLiteralFromPlaceHolder_0 = function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}
;
cggl.maybeCoerceToLong = function maybeCoerceToLong(o, isLong){
  if (!isLong) {
    return o;
  }
  if (typeof o == 'number') {
    return fromDouble(o);
  }
  return o;
}
;
cggl.maybeCoerceFromLong = function maybeCoerceFromLong(o, isLong){
  if (!isLong) {
    return o;
  }
  return toDouble(o);
}
;
function makeBridgeMethod(methodRef, returnsLong, longParams){
  return function(){
    var args = [];
    for (var i_0 = 0; i_0 < arguments.length; i_0++) {
      var maybeCoerced = cggl.maybeCoerceToLong(arguments[i_0], longParams[i_0]);
      args.push(maybeCoerced);
    }
    var result = methodRef.apply(this, args);
    return returnsLong?cggl.maybeCoerceFromLong(result, returnsLong):result;
  }
  ;
}

function getClassPrototype(typeId){
  var prototypeForTypeId = cggl.prototypesByTypeId_0[typeId];
  return prototypeForTypeId;
}

function emptyMethod(){
}

function defineClassWithPrototype(typeId, jsSuperClass, castableTypeMap){
  var prototypesByTypeId = cggl.prototypesByTypeId_0;
  var maybeGetClassLiteralFromPlaceHolder = cggl.maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    var superPrototype = jsSuperClass && jsSuperClass.prototype || {};
    _ = prototypesByTypeId[typeId] = cggl.portableObjCreate(superPrototype);
    _.castableTypeMap$ = castableTypeMap;
  }
  for (var i_0 = 3; i_0 < arguments.length; ++i_0) {
    arguments[i_0].prototype = _;
  }
  if (clazz) {
    _.___clazz$ = clazz;
  }
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = cggl.prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = cggl.maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    if (!superTypeId) {
      _.typeMarker$ = typeMarkerFn;
    }
  }
  for (var i_0 = 3; i_0 < arguments.length; ++i_0) {
    arguments[i_0].prototype = _;
  }
  if (clazz) {
    _.___clazz$ = clazz;
  }
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = cggl.prototypesByTypeId_0;
  return cggl.portableObjCreate(prototypesByTypeId[superTypeId]);
}

cggl.$clinit_JavaClassHierarchySetupUtil = function $clinit_JavaClassHierarchySetupUtil(){
}
;
function setGwtProperty(propertyName, propertyValue){
  if (typeof window === 'object' && typeof window['$gwt'] === 'object') {
    window['$gwt'][propertyName] = propertyValue;
  }
}

function registerEntry_0(){
  return registerEntry();
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  cggl.ensureModuleInit();
  var initFnList = cggl.initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  cggl.$clinit_CollapsedPropertyHolder() , cggl.permutationId = softPermutationId;
  function initializeModules(){
    for (var i_0 = 0; i_0 < initFnList.length; i_0++) {
      initFnList[i_0]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

cggl.ensureModuleInit = function ensureModuleInit(){
  if (cggl.initFnList_0 == null) {
    cggl.initFnList_0 = [];
  }
}
;
function addInitFunctions(){
  cggl.ensureModuleInit();
  var initFnList = cggl.initFnList_0;
  for (var i_0 = 0; i_0 < arguments.length; i_0++) {
    initFnList.push(arguments[i_0]);
  }
}

cggl.$clinit_ModuleUtils = function $clinit_ModuleUtils(){
}
;
jl.$clinit_Object = function $clinit_Object(){
  jl.$clinit_Object = emptyMethod;
}
;
jl.$$init = function $$init(this$static){
}
;
jl.$equals = function $equals(this$static, other){
  return this$static === other;
}
;
jl.$finalize = function $finalize(this$static){
}
;
jl.$getClass = function $getClass(this$static){
  return this$static.___clazz$;
}
;
jl.$hashCode = function $hashCode(this$static){
  return getHashCode(this$static);
}
;
jl.$init__V__devirtual$ = function $init__V__devirtual$(this$static){
  return isJavaString(this$static)?jl.$$init(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.$init():jl.$$init(this$static);
}
;
jl.$toString = function $toString(this$static){
  return jl.getClass__Ljava_lang_Class___devirtual$(this$static).getName() + '@' + toHexString(jl.hashCode__I__devirtual$(this$static));
}
;
function Object_0(){
  jl.$clinit_Object();
  jl.$init__V__devirtual$(this);
}

jl.equals_Ljava_lang_Object__Z__devirtual$ = function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  jl.$clinit_Object();
  return isJavaString(this$static)?jl.$equals_1(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?jl.$equals(this$static, other):cggcc.$equals_0(this$static, other);
}
;
jl.finalize__V__devirtual$ = function finalize__V__devirtual$(this$static){
  return isJavaString(this$static)?jl.$finalize(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.finalize$():jl.$finalize(this$static);
}
;
jl.getClass__Ljava_lang_Class___devirtual$ = function getClass__Ljava_lang_Class___devirtual$(this$static){
  jl.$clinit_Object();
  return isJavaString(this$static)?jl.$getClass_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?jl.$getClass(this$static):cggcc.$getClass_0(this$static);
}
;
jl.hashCode__I__devirtual$ = function hashCode__I__devirtual$(this$static){
  jl.$clinit_Object();
  return isJavaString(this$static)?jl.$hashCode_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?jl.$hashCode(this$static):cggcc.$hashCode_0(this$static);
}
;
jl.toString__Ljava_lang_String___devirtual$ = function toString__Ljava_lang_String___devirtual$(this$static){
  return isJavaString(this$static)?jl.$toString_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.toString$():isJavaArray(this$static)?jl.$toString(this$static):cggcc.$toString_0(this$static);
}
;
defineClass(1, null, $intern_0, Object_0);
_.$init = function $init(){
  jl.$$init(this);
}
;
_.equals$ = function equals(other){
  return jl.$equals(this, other);
}
;
_.finalize$ = function finalize(){
  jl.$finalize(this);
}
;
_.getClass$ = function getClass_0(){
  return jl.$getClass(this);
}
;
_.hashCode$ = function hashCode_0(){
  return jl.$hashCode(this);
}
;
_.toString$ = function toString_0(){
  return jl.$toString(this);
}
;
_.toString = function(){
  return this.toString$();
}
;
cggl.stringCastMap = {3:1, 236:1, 18:1, 1:1, 2:1};
modernizeBrowser();
cggcc.$clinit_JavaScriptObject = function $clinit_JavaScriptObject(){
  cggcc.$clinit_JavaScriptObject = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.$cast = function $cast(this$static){
  cggcc.$clinit_JavaScriptObject();
  return this$static;
}
;
cggcc.$equals_0 = function $equals_0(this$static, other){
  cggcc.$clinit_JavaScriptObject();
  return getClassPrototype(1).equals$.call(this$static, other);
}
;
cggcc.$getClass_0 = function $getClass_0(this$static){
  cggcc.$clinit_JavaScriptObject();
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggcc.$hashCode_0 = function $hashCode_0(this$static){
  cggcc.$clinit_JavaScriptObject();
  return getHashCode(this$static);
}
;
cggcc.$toString_0 = function $toString_0(this$static){
  cggcc.$clinit_JavaScriptObject();
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit.desiredAssertionStatus()?cggcc.toStringVerbose(this$static):cggcc.toStringSimple(this$static);
}
;
cggcc.createArray = function createArray(){
  cggcc.$clinit_JavaScriptObject();
  return [];
}
;
function createObject(){
  cggcc.$clinit_JavaScriptObject();
  return {};
}

cggcc.toStringSimple = function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}
;
cggcc.toStringVerbose = function toStringVerbose(obj){
  var defined = function(m){
    return typeof m != 'undefined';
  }
  ;
  var strip = function(s){
    return s.replace(/\r\n/g, '');
  }
  ;
  if (defined(obj.outerHTML))
    return strip(obj.outerHTML);
  if (defined(obj.innerHTML) && obj.cloneNode) {
    $doc.createElement('div').appendChild(obj.cloneNode(true)).innerHTML;
  }
  if (defined(obj.nodeType) && obj.nodeType == 3) {
    return "'" + obj.data.replace(/ /g, '\u25AB').replace(/\u00A0/, '\u25AA') + "'";
  }
  if (typeof defined(obj.htmlText) && obj.collapse) {
    var html = obj.htmlText;
    if (html) {
      return 'IETextRange [' + strip(html) + ']';
    }
     else {
      var dup = obj.duplicate();
      dup.pasteHTML('|');
      var out = 'IETextRange ' + strip(obj.parentElement().outerHTML);
      dup.moveStart('character', -1);
      dup.pasteHTML('');
      return out;
    }
  }
  return obj.toString?obj.toString():'[JavaScriptObject]';
}
;
cggl.$clinit_Cast = function $clinit_Cast(){
  cggl.$clinit_Cast = emptyMethod;
  jl.$clinit_Object();
}
;
function Cast(){
  Object_0.call(this);
  this.$init_59();
}

function canCast(src_0, dstId){
  cggl.$clinit_Cast();
  return isJavaString(src_0) && !!cggl.stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function canCastClass(srcClazz, dstClass){
  var srcTypeId = srcClazz.typeId;
  var dstTypeId = dstClass.typeId;
  var prototype_0 = (cggl.$clinit_JavaClassHierarchySetupUtil() , cggl.prototypesByTypeId_0)[srcTypeId];
  return canCast(prototype_0, dstTypeId);
}

function charToString(x_0){
  cggl.$clinit_Cast();
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (jsNotEquals(src_0, null) && !canCast(src_0, dstId)) {
    throw new jl.ClassCastException;
  }
  return src_0;
}

function dynamicCastAllowJso(src_0, dstId){
  if (jsNotEquals(src_0, null) && !isJavaScriptObject(src_0) && !canCast(src_0, dstId)) {
    throw new jl.ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (jsNotEquals(src_0, null) && !isJavaScriptObject(src_0)) {
    throw new jl.ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (jsNotEquals(src_0, null) && !isJavaString(src_0)) {
    throw new jl.ClassCastException;
  }
  return src_0;
}

function dynamicCastWithPrototype(src_0, dstId, jsType){
  if (jsNotEquals(src_0, null) && !canCast(src_0, dstId) && !jsInstanceOf(src_0, jsType)) {
    throw new jl.ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  cggl.$clinit_Cast();
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && canCast(src_0, dstId);
}

function instanceOfJsType(src_0, dstId, jsType){
  return instanceOf(src_0, dstId) || jsInstanceOf(src_0, jsType);
}

function instanceOfJso(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && isJavaScriptObject(src_0);
}

function instanceOfOrJso(src_0, dstId){
  return jsNotEquals(src_0, null) && (isJavaScriptObject(src_0) || canCast(src_0, dstId));
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  cggl.$clinit_Cast();
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaScriptObject(src_0){
  cggl.$clinit_Cast();
  return !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function isJavaScriptObjectOrString(src_0){
  return !hasTypeMarker(src_0);
}

function isJavaString(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'string';
}

function isNotNull(src_0){
  cggl.$clinit_Cast();
  return !!src_0;
}

function isNull(src_0){
  cggl.$clinit_Cast();
  return !src_0;
}

function jsEquals(a, b){
  cggl.$clinit_Cast();
  return a == b;
}

function jsInstanceOf(obj, jsTypeStr){
  if (!obj) {
    return false;
  }
  var jsType = window[jsTypeStr];
  if (typeof jsType === 'function' && obj instanceof jsType) {
    return true;
  }
  if (typeof obj === 'string' || hasTypeMarker(obj)) {
    return false;
  }
  if (obj.constructor && obj.constructor.name == jsTypeStr) {
    return true;
  }
  if (obj.constructor) {
    var isMainWindow = jsTypeStr.substring(0, 5) == '$wnd.';
    var jsFunction = obj.constructor;
    var jsTypeInContext = $wnd;
    if (!isMainWindow) {
      while (jsFunction != jsFunction.constructor) {
        jsFunction = jsFunction.constructor;
      }
      var jsTypeInContext = jsFunction('return window || self;')();
    }
     else {
      jsTypeStr = jsTypeStr.substring(5);
    }
    for (var parts = jsTypeStr.split('.'), i_0 = 0, l = parts.length; i_0 < l && jsTypeInContext; i_0++) {
      jsTypeInContext = jsTypeInContext[parts[i_0]];
    }
    return obj instanceof jsTypeInContext;
  }
  return false;
}

function jsNotEquals(a, b){
  cggl.$clinit_Cast();
  return a != b;
}

function maskUndefined(src_0){
  cggl.$clinit_Cast();
  return src_0 == null?null:src_0;
}

function narrow_byte(x_0){
  cggl.$clinit_Cast();
  return x_0 << 24 >> 24;
}

function narrow_char(x_0){
  cggl.$clinit_Cast();
  return x_0 & 65535;
}

function narrow_int(x_0){
  cggl.$clinit_Cast();
  return ~~x_0;
}

function narrow_short(x_0){
  cggl.$clinit_Cast();
  return x_0 << 16 >> 16;
}

function round_byte(x_0){
  cggl.$clinit_Cast();
  return narrow_byte(round_int(x_0));
}

function round_char(x_0){
  return narrow_char(round_int(x_0));
}

function round_int(x_0){
  cggl.$clinit_Cast();
  return ~~Math.max(Math.min(x_0, $intern_1), -2147483648);
}

function round_short(x_0){
  cggl.$clinit_Cast();
  return narrow_short(round_int(x_0));
}

function throwClassCastExceptionUnlessNull(o){
  if (jsNotEquals(o, null)) {
    throw new jl.ClassCastException;
  }
  return o;
}

defineClass(237, 1, $intern_0);
_.$init_59 = function $init_59(){
}
;
cggl.$clinit_Util = function $clinit_Util(){
  cggl.$clinit_Util = emptyMethod;
  jl.$clinit_Object();
}
;
function Util(){
  Object_0.call(this);
  this.$init_66();
}

function getCastableTypeMap(o){
  cggl.$clinit_Util();
  return o.castableTypeMap$;
}

function hasTypeMarker(o){
  cggl.$clinit_Util();
  return o.typeMarker$ === typeMarkerFn;
}

function makeEnumName(enumName){
  return enumName;
}

function setCastableTypeMap(o, castableTypeMap){
  cggl.$clinit_Util();
  o.castableTypeMap$ = castableTypeMap;
}

function setTypeMarker(o){
  cggl.$clinit_Util();
  o.typeMarker$ = typeMarkerFn;
}

defineClass(245, 1, $intern_0);
_.$init_66 = function $init_66(){
}
;
ji.$clinit_Serializable = function $clinit_Serializable(){
  ji.$clinit_Serializable = emptyMethod;
}
;
jl.$clinit_CharSequence = function $clinit_CharSequence(){
  jl.$clinit_CharSequence = emptyMethod;
}
;
jl.$clinit_Class = function $clinit_Class(){
  jl.$clinit_Class = emptyMethod;
  jl.$clinit_Object();
}
;
function Class(){
  Object_0.call(this);
  this.$init_159();
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

jl.createClassObject = function createClassObject(packageName, compoundClassName, typeId){
  var clazz;
  clazz = new Class;
  if (isClassMetadataEnabled()) {
    clazz.packageName = packageName;
    clazz.compoundName = compoundClassName;
  }
   else {
    synthesizeClassNamesFromTypeId(clazz, typeId);
  }
  return clazz;
}
;
function createForClass(packageName, compoundClassName, typeId, superclass){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, typeId);
  jl.maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc, enumValueOfFunc){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, typeId);
  jl.maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = isNotNull(enumConstantsFunc)?8:0;
  clazz.superclass = clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  clazz.enumValueOfFunc = enumValueOfFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, null);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject('', className, primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

jl.getClassLiteralForArray_0 = function getClassLiteralForArray_0(leafClass, dimensions){
  jl.$clinit_Class();
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}
;
function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = (cggl.$clinit_JavaClassHierarchySetupUtil() , cggl.prototypesByTypeId_0)[typeId];
  return prototype_0;
}

jl.initializeNames = function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    if (componentType.isPrimitive()) {
      clazz.typeName = '[' + componentType.typeId;
    }
     else if (!componentType.isArray_0()) {
      clazz.typeName = '[L' + componentType.getName() + ';';
    }
     else {
      clazz.typeName = '[' + componentType.getName();
    }
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = jl.join_0('.', [packageName, jl.join_0('$', compoundName)]);
  clazz.canonicalName = jl.join_0('.', [packageName, jl.join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}
;
function isClassMetadataEnabled(){
  return true;
}

jl.join_0 = function join_0(separator, strings){
  var i_0 = 0;
  while (!strings[i_0] || strings[i_0] == '') {
    i_0++;
  }
  var result = strings[i_0++];
  for (; i_0 < strings.length; i_0++) {
    if (!strings[i_0] || strings[i_0] == '') {
      continue;
    }
    result += separator + strings[i_0];
  }
  return result;
}
;
jl.maybeSetClassLiteral = function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    (cggl.$clinit_JavaClassHierarchySetupUtil() , cggl.prototypesByTypeId_0)[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}
;
function synthesizeClassNamesFromTypeId(clazz, typeId){
  clazz.typeName = 'Class$' + (!!typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
}

defineClass(78, 1, $intern_0, Class);
_.$init_159 = function $init_159(){
  this.sequentialId = jl.nextSequentialId++;
}
;
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  clazz.superclass = cggl.Ljava_lang_Object_2_classLit;
  if (dimensions > 1) {
    clazz.componentType = jl.getClassLiteralForArray_0(this, dimensions - 1);
  }
   else {
    clazz.componentType = this;
  }
  return clazz;
}
;
_.desiredAssertionStatus = function desiredAssertionStatus(){
  return false;
}
;
_.ensureNamesAreInitialized = function ensureNamesAreInitialized(){
  if (jsNotEquals(this.typeName, null)) {
    return;
  }
  jl.initializeNames(this);
}
;
_.getCanonicalName = function getCanonicalName(){
  this.ensureNamesAreInitialized();
  return this.canonicalName;
}
;
_.getName = function getName_1(){
  this.ensureNamesAreInitialized();
  return this.typeName;
}
;
_.getSimpleName = function getSimpleName(){
  this.ensureNamesAreInitialized();
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isInterface = function isInterface(){
  return (this.modifiers & 2) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_18(){
  return (this.isInterface()?'interface ':this.isPrimitive()?'':'class ') + this.getName();
}
;
_.modifiers = 0;
_.sequentialId = 0;
jl.ARRAY = 4;
jl.ENUM = 8;
jl.INTERFACE = 2;
jl.PRIMITIVE = 1;
jl.nextSequentialId = 1;
jl.$clinit_Comparable = function $clinit_Comparable(){
  jl.$clinit_Comparable = emptyMethod;
}
;
jl.$clinit_String = function $clinit_String(){
  jl.$clinit_String = emptyMethod;
  jl.$clinit_Object();
  jl.CASE_INSENSITIVE_ORDER = new jl.String$1;
}
;
jl.$charAt = function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}
;
jl.$concat = function $concat(this$static, str){
  return this$static + str;
}
;
jl.$contains = function $contains(this$static, s){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this$static, jl.toString__Ljava_lang_String___devirtual$_0(s)) != -1;
}
;
jl.$endsWith = function $endsWith(this$static, suffix){
  var suffixlength;
  suffixlength = jl.length__I__devirtual$_0(suffix);
  return jl.equals_Ljava_lang_Object__Z__devirtual$_0(__substr(this$static, jl.length__I__devirtual$_0(this$static) - suffixlength, suffixlength), suffix);
}
;
jl.$equals_1 = function $equals_1(this$static, other){
  return this$static === other;
}
;
jl.$getClass_1 = function $getClass_1(this$static){
  return cggl.Ljava_lang_String_2_classLit;
}
;
jl.$hashCode_1 = function $hashCode_1(this$static){
  return jl.getHashCode_0(this$static);
}
;
jl.$indexOf = function $indexOf(this$static, codePoint){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this$static, jl.fromCodePoint(codePoint));
}
;
jl.$indexOf_0 = function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}
;
jl.$indexOf_1 = function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}
;
jl.$isEmpty = function $isEmpty(this$static){
  return !this$static.length;
}
;
jl.$lastIndexOf = function $lastIndexOf(this$static, codePoint){
  return jl.lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, jl.fromCodePoint(codePoint));
}
;
jl.$lastIndexOf_0 = function $lastIndexOf_0(this$static, codePoint, startIndex){
  return jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, jl.fromCodePoint(codePoint), startIndex);
}
;
jl.$lastIndexOf_1 = function $lastIndexOf_1(this$static, str){
  return this$static.lastIndexOf(str);
}
;
jl.$lastIndexOf_2 = function $lastIndexOf_2(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}
;
jl.$length_9 = function $length_9(this$static){
  return this$static.length;
}
;
jl.$replace = function $replace(this$static, from, to){
  var hex = toHexString(from);
  var regex = '\\u' + '0000'.substring(hex.length) + hex;
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}
;
jl.$split = function $split(this$static, regex){
  return jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(this$static, regex, 0);
}
;
jl.$split_0 = function $split_0(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || (trail == '' || count == maxMatch - 1 && maxMatch > 0)) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    if (lastNonEmpty < out.length) {
      out.splice(lastNonEmpty, out.length - lastNonEmpty);
    }
  }
  var jr = __createArray(out.length);
  for (var i_0 = 0; i_0 < out.length; ++i_0) {
    jr[i_0] = out[i_0];
  }
  return jr;
}
;
jl.$startsWith = function $startsWith(this$static, prefix){
  return jl.startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, 0);
}
;
jl.$startsWith_0 = function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && jl.equals_Ljava_lang_Object__Z__devirtual$_0(__substr(this$static, toffset, jl.length__I__devirtual$_0(prefix)), prefix);
}
;
jl.$substring = function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, jl.length__I__devirtual$_0(this$static) - beginIndex);
}
;
jl.$substring_0 = function $substring_0(this$static, beginIndex, endIndex){
  return __substr(this$static, beginIndex, endIndex - beginIndex);
}
;
jl.$toLowerCase = function $toLowerCase(this$static){
  return this$static.toLowerCase();
}
;
jl.$toString_1 = function $toString_1(this$static){
  return this$static;
}
;
jl.$toUpperCase = function $toUpperCase(this$static){
  return this$static.toUpperCase();
}
;
jl.$trim = function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}
;
function __createArray(numElements){
  return initDim(cggl.Ljava_lang_String_2_classLit, $intern_2, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

jl.charAt_I_C__devirtual$ = function charAt_I_C__devirtual$(this$static, index_0){
  return isJavaString(this$static)?jl.$charAt(this$static, index_0):this$static.charAt(index_0);
}
;
jl.charAt_I_C__devirtual$_0 = function charAt_I_C__devirtual$_0(this$static, index_0){
  jl.$clinit_String();
  return jl.$charAt(this$static, index_0);
}
;
jl.concat_Ljava_lang_String__Ljava_lang_String___devirtual$ = function concat_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$concat(this$static, str);
}
;
jl.contains_Ljava_lang_CharSequence__Z__devirtual$ = function contains_Ljava_lang_CharSequence__Z__devirtual$(this$static, s){
  jl.$clinit_String();
  return jl.$contains(this$static, s);
}
;
jl.endsWith_Ljava_lang_String__Z__devirtual$ = function endsWith_Ljava_lang_String__Z__devirtual$(this$static, suffix){
  jl.$clinit_String();
  return jl.$endsWith(this$static, suffix);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_0 = function equals_Ljava_lang_Object__Z__devirtual$_0(this$static, other){
  jl.$clinit_String();
  return jl.$equals_1(this$static, other);
}
;
jl.fromCodePoint = function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_3) {
    hiSurrogate = getHighSurrogate(codePoint);
    loSurrogate = getLowSurrogate(codePoint);
    return jl.valueOf_18(hiSurrogate) + jl.valueOf_18(loSurrogate);
  }
   else {
    return jl.valueOf_18(narrow_char(codePoint));
  }
}
;
jl.getClass__Ljava_lang_Class___devirtual$_0 = function getClass__Ljava_lang_Class___devirtual$_0(this$static){
  return jl.$getClass_1(this$static);
}
;
jl.hashCode__I__devirtual$_0 = function hashCode__I__devirtual$_0(this$static){
  jl.$clinit_String();
  return jl.$hashCode_1(this$static);
}
;
jl.indexOf_I_I__devirtual$ = function indexOf_I_I__devirtual$(this$static, codePoint){
  jl.$clinit_String();
  return jl.$indexOf(this$static, codePoint);
}
;
jl.indexOf_Ljava_lang_String_I_I__devirtual$ = function indexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, startIndex){
  jl.$clinit_String();
  return jl.$indexOf_1(this$static, str, startIndex);
}
;
jl.indexOf_Ljava_lang_String__I__devirtual$ = function indexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$indexOf_0(this$static, str);
}
;
jl.isEmpty__Z__devirtual$ = function isEmpty__Z__devirtual$(this$static){
  jl.$clinit_String();
  return jl.$isEmpty(this$static);
}
;
jl.lastIndexOf_II_I__devirtual$ = function lastIndexOf_II_I__devirtual$(this$static, codePoint, startIndex){
  jl.$clinit_String();
  return jl.$lastIndexOf_0(this$static, codePoint, startIndex);
}
;
jl.lastIndexOf_I_I__devirtual$ = function lastIndexOf_I_I__devirtual$(this$static, codePoint){
  jl.$clinit_String();
  return jl.$lastIndexOf(this$static, codePoint);
}
;
jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$ = function lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, start_0){
  jl.$clinit_String();
  return jl.$lastIndexOf_2(this$static, str, start_0);
}
;
jl.lastIndexOf_Ljava_lang_String__I__devirtual$ = function lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$lastIndexOf_1(this$static, str);
}
;
jl.length__I__devirtual$ = function length__I__devirtual$(this$static){
  return isJavaString(this$static)?jl.$length_9(this$static):this$static.length_0();
}
;
jl.length__I__devirtual$_0 = function length__I__devirtual$_0(this$static){
  jl.$clinit_String();
  return jl.$length_9(this$static);
}
;
jl.replace_CC_Ljava_lang_String___devirtual$ = function replace_CC_Ljava_lang_String___devirtual$(this$static, from, to){
  jl.$clinit_String();
  return jl.$replace(this$static, from, to);
}
;
jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$ = function split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(this$static, regex, maxMatch){
  jl.$clinit_String();
  return jl.$split_0(this$static, regex, maxMatch);
}
;
jl.split_Ljava_lang_String___Ljava_lang_String___devirtual$ = function split_Ljava_lang_String___Ljava_lang_String___devirtual$(this$static, regex){
  jl.$clinit_String();
  return jl.$split(this$static, regex);
}
;
jl.startsWith_Ljava_lang_String_I_Z__devirtual$ = function startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, toffset){
  return jl.$startsWith_0(this$static, prefix, toffset);
}
;
jl.startsWith_Ljava_lang_String__Z__devirtual$ = function startsWith_Ljava_lang_String__Z__devirtual$(this$static, prefix){
  jl.$clinit_String();
  return jl.$startsWith(this$static, prefix);
}
;
jl.substring_II_Ljava_lang_String___devirtual$ = function substring_II_Ljava_lang_String___devirtual$(this$static, beginIndex, endIndex){
  jl.$clinit_String();
  return jl.$substring_0(this$static, beginIndex, endIndex);
}
;
jl.substring_I_Ljava_lang_String___devirtual$ = function substring_I_Ljava_lang_String___devirtual$(this$static, beginIndex){
  jl.$clinit_String();
  return jl.$substring(this$static, beginIndex);
}
;
jl.toLowerCase__Ljava_lang_String___devirtual$ = function toLowerCase__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$toLowerCase(this$static);
}
;
jl.toString__Ljava_lang_String___devirtual$_0 = function toString__Ljava_lang_String___devirtual$_0(this$static){
  return isJavaString(this$static)?jl.$toString_1(this$static):this$static.toString$();
}
;
jl.toString__Ljava_lang_String___devirtual$_1 = function toString__Ljava_lang_String___devirtual$_1(this$static){
  return jl.$toString_1(this$static);
}
;
jl.toUpperCase__Ljava_lang_String___devirtual$ = function toUpperCase__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$toUpperCase(this$static);
}
;
jl.trim__Ljava_lang_String___devirtual$ = function trim__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$trim(this$static);
}
;
jl.valueOf_18 = function valueOf_18(x_0){
  jl.$clinit_String();
  return String.fromCharCode(x_0);
}
;
jl.valueOf_19 = function valueOf_19(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_20 = function valueOf_20(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_21 = function valueOf_21(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_22 = function valueOf_22(x_0){
  jl.$clinit_String();
  return '' + toString_11(x_0);
}
;
function valueOf_23(x_0){
  jl.$clinit_String();
  return '' + x_0;
}

jl.valueOf_24 = function valueOf_24(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.CHARSET_8859_1 = 'ISO-8859-1';
jl.CHARSET_LATIN1 = 'ISO-LATIN-1';
jl.CHARSET_UTF8 = 'UTF-8';
jl.$clinit_String$1 = function $clinit_String$1(){
  jl.$clinit_String$1 = emptyMethod;
  jl.$clinit_Object();
}
;
jl.String$1 = function String$1(){
  jl.$clinit_String$1();
  Object_0.call(this);
  this.$init_171();
}
;
defineClass(117, 1, $intern_0, jl.String$1);
_.$init_171 = function $init_171(){
}
;
jlr.$clinit_Type = function $clinit_Type(){
  jlr.$clinit_Type = emptyMethod;
}
;
ju.$clinit_Comparator = function $clinit_Comparator(){
  ju.$clinit_Comparator = emptyMethod;
}
;
cggl.Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null);
cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Cast_2_classLit = createForClass('com.google.gwt.lang', 'Cast', 237, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Util_2_classLit = createForClass('com.google.gwt.lang', 'Util', 245, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 78, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 117, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Callback = function $clinit_Callback(){
  cggcc.$clinit_Callback = emptyMethod;
}
;
jl.$clinit_Throwable = function $clinit_Throwable(){
  jl.$clinit_Throwable = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Throwable = function Throwable(){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.fillInStackTrace();
}
;
jl.Throwable_0 = function Throwable_0(message){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.detailMessage = message;
  this.fillInStackTrace();
}
;
jl.Throwable_1 = function Throwable_1(message, cause){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.cause = cause;
  this.detailMessage = message;
  this.fillInStackTrace();
}
;
function Throwable_2(message, cause, enableSuppression, writetableStackTrace){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.cause = cause;
  this.detailMessage = message;
  this.disableSuppression = !enableSuppression;
  if (writetableStackTrace) {
    this.fillInStackTrace();
  }
}

jl.Throwable_3 = function Throwable_3(cause){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.detailMessage = isNull(cause)?null:cause.toString$();
  this.cause = cause;
  this.fillInStackTrace();
}
;
defineClass(9, 1, $intern_4);
_.$init_0 = function $init_0(){
}
;
_.addSuppressed = function addSuppressed(exception){
  cggcsi.checkNotNull_0(exception, 'Cannot suppress a null exception.');
  cggcsi.checkCriticalArgument(jsNotEquals(exception, this), 'Exception can not suppress itself.');
  if (this.disableSuppression) {
    return;
  }
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = initValues(getClassLiteralForArray(cggl.Ljava_lang_Throwable_2_classLit, 1), $intern_2, 9, 0, [exception]);
  }
   else {
    this.suppressedExceptions[this.suppressedExceptions.length] = exception;
  }
}
;
_.fillInStackTrace = function fillInStackTrace(){
  this.stackTrace = null;
  cggcci.captureStackTrace(this, this.detailMessage);
  return this;
}
;
_.getCause = function getCause(){
  return this.cause;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getStackTrace = function getStackTrace(){
  if (jsEquals(this.stackTrace, null)) {
    this.stackTrace = cggcci.constructJavaStackTrace(this);
  }
  return this.stackTrace;
}
;
_.initCause = function initCause(cause){
  cggcsi.checkState_0(isNull(this.cause), "Can't overwrite cause");
  cggcsi.checkCriticalArgument(jsNotEquals(cause, this), 'Self-causation not permitted');
  this.cause = cause;
  return this;
}
;
_.printStackTrace = function printStackTrace(out){
  var element, element$array, element$index, element$max, t;
  for (t = this; isNotNull(t); t = t.getCause()) {
    if (jsNotEquals(t, this)) {
      out.print_0('Caused by: ');
    }
    out.println(t);
    for (element$array = t.getStackTrace() , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      out.println_0('\tat ' + element);
    }
  }
}
;
_.toString$ = function toString_1(){
  var className, msg;
  className = this.___clazz$.getName();
  msg = this.getMessage();
  if (jsNotEquals(msg, null)) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}
;
_.disableSuppression = false;
cggl.Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 9, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Exception = function $clinit_Exception(){
  jl.$clinit_Exception = emptyMethod;
  jl.$clinit_Throwable();
}
;
jl.Exception = function Exception(){
  jl.$clinit_Exception();
  jl.Throwable.call(this);
  this.$init_1();
}
;
jl.Exception_0 = function Exception_0(message){
  jl.$clinit_Exception();
  jl.Throwable_0.call(this, message);
  this.$init_1();
}
;
jl.Exception_1 = function Exception_1(message, cause){
  jl.$clinit_Exception();
  jl.Throwable_1.call(this, message, cause);
  this.$init_1();
}
;
jl.Exception_2 = function Exception_2(message, cause, enableSuppression, writableStackTrace){
  jl.$clinit_Exception();
  Throwable_2.call(this, message, cause, enableSuppression, writableStackTrace);
  this.$init_1();
}
;
jl.Exception_3 = function Exception_3(cause){
  jl.$clinit_Exception();
  jl.Throwable_3.call(this, cause);
  this.$init_1();
}
;
defineClass(7, 9, {3:1, 7:1, 1:1, 9:1});
_.$init_1 = function $init_1(){
}
;
cggl.Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 7, cggl.Ljava_lang_Throwable_2_classLit);
jl.$clinit_RuntimeException = function $clinit_RuntimeException(){
  jl.$clinit_RuntimeException = emptyMethod;
  jl.$clinit_Exception();
}
;
jl.RuntimeException = function RuntimeException(){
  jl.$clinit_RuntimeException();
  jl.Exception.call(this);
  this.$init_2();
}
;
jl.RuntimeException_0 = function RuntimeException_0(message){
  jl.$clinit_RuntimeException();
  jl.Exception_0.call(this, message);
  this.$init_2();
}
;
jl.RuntimeException_1 = function RuntimeException_1(message, cause){
  jl.$clinit_RuntimeException();
  jl.Exception_1.call(this, message, cause);
  this.$init_2();
}
;
jl.RuntimeException_2 = function RuntimeException_2(message, cause, enableSuppression, writableStackTrace){
  jl.$clinit_RuntimeException();
  jl.Exception_2.call(this, message, cause, enableSuppression, writableStackTrace);
  this.$init_2();
}
;
jl.RuntimeException_3 = function RuntimeException_3(cause){
  jl.$clinit_RuntimeException();
  jl.Exception_3.call(this, cause);
  this.$init_2();
}
;
defineClass(8, 7, $intern_5, jl.RuntimeException_0);
_.$init_2 = function $init_2(){
}
;
cggl.Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8, cggl.Ljava_lang_Exception_2_classLit);
cggcc.$clinit_CodeDownloadException = function $clinit_CodeDownloadException(){
  cggcc.$clinit_CodeDownloadException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcc.CodeDownloadException = function CodeDownloadException(message){
  cggcc.$clinit_CodeDownloadException();
  jl.RuntimeException_0.call(this, message);
  this.$init_3();
  this.reason = (cggcc.$clinit_CodeDownloadException$Reason() , cggcc.TERMINATED);
}
;
defineClass(252, 8, $intern_5, cggcc.CodeDownloadException);
_.$init_3 = function $init_3(){
}
;
cggl.Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 252, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Enum = function $clinit_Enum(){
  jl.$clinit_Enum = emptyMethod;
  jl.$clinit_Object();
}
;
function Enum(name_0, ordinal){
  jl.$clinit_Enum();
  Object_0.call(this);
  this.$init_4();
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  jl.$clinit_Enum();
  var result, value_0, value$array, value$index, value$max;
  result = createObject();
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    jl.put0(result, ':' + value_0.name_1(), value_0);
  }
  return result;
}

jl.get0 = function get0(map_0, name_0){
  return map_0[name_0];
}
;
jl.put0 = function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}
;
function valueOf(map_0, name_0){
  jl.$clinit_Enum();
  var result;
  cggcsi.checkNotNull(name_0);
  result = jl.get0(map_0, ':' + name_0);
  cggcsi.checkCriticalArgument_0(isNotNull(result), 'Enum constant undefined: %s', initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [name_0]));
  return result;
}

defineClass(15, 1, $intern_6);
_.$init_4 = function $init_4(){
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getClassPrototype(1).hashCode$.call(this);
}
;
_.name_1 = function name_1(){
  return jsNotEquals(this.name_0, null)?this.name_0:'' + this.ordinal;
}
;
_.ordinal_0 = function ordinal_0(){
  return this.ordinal;
}
;
_.toString$ = function toString_2(){
  return this.name_1();
}
;
_.ordinal = 0;
cggl.Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 15, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_CodeDownloadException$Reason = function $clinit_CodeDownloadException$Reason(){
  cggcc.$clinit_CodeDownloadException$Reason = emptyMethod;
  jl.$clinit_Enum();
  cggcc.TERMINATED = new cggcc.CodeDownloadException$Reason('TERMINATED', 0);
}
;
cggcc.CodeDownloadException$Reason = function CodeDownloadException$Reason(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_5();
}
;
cggcc.valueOf_0 = function valueOf_0(name_0){
  cggcc.$clinit_CodeDownloadException$Reason();
  return valueOf((cggcc.$clinit_CodeDownloadException$Reason$Map() , cggcc.$MAP), name_0);
}
;
cggcc.values_0 = function values_0(){
  cggcc.$clinit_CodeDownloadException$Reason();
  return initValues(getClassLiteralForArray(cggl.Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit, 1), $intern_2, 73, 0, [cggcc.TERMINATED]);
}
;
defineClass(73, 15, {73:1, 3:1, 18:1, 15:1, 1:1}, cggcc.CodeDownloadException$Reason);
_.$init_5 = function $init_5(){
}
;
cggl.Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit = createForEnum('com.google.gwt.core.client', 'CodeDownloadException/Reason', 73, cggl.Ljava_lang_Enum_2_classLit, cggcc.values_0, cggcc.valueOf_0);
cggcc.$clinit_CodeDownloadException$Reason$Map = function $clinit_CodeDownloadException$Reason$Map(){
  cggcc.$clinit_CodeDownloadException$Reason$Map = emptyMethod;
  cggcc.$MAP = createValueOfMap(cggcc.values_0());
}
;
defineClass(439, 1, $intern_0);
cggcc.$clinit_Duration = function $clinit_Duration(){
  cggcc.$clinit_Duration = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.Duration = function Duration(){
  cggcc.$clinit_Duration();
  Object_0.call(this);
  this.$init_6();
}
;
cggcc.currentTimeMillis = function currentTimeMillis(){
  cggcc.$clinit_Duration();
  return cggcc.now_1();
}
;
cggcc.uncheckedConversion = function uncheckedConversion(elapsed){
  return elapsed;
}
;
defineClass(203, 1, $intern_0, cggcc.Duration);
_.$init_6 = function $init_6(){
  this.start_0 = cggcc.currentTimeMillis();
}
;
_.elapsedMillis = function elapsedMillis(){
  return cggcc.uncheckedConversion(cggcc.currentTimeMillis() - this.start_0);
}
;
_.start_0 = 0;
cggl.Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 203, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_EntryPoint = function $clinit_EntryPoint(){
  cggcc.$clinit_EntryPoint = emptyMethod;
}
;
cggcc.$clinit_GWT = function $clinit_GWT(){
  cggcc.$clinit_GWT = emptyMethod;
  jl.$clinit_Object();
}
;
function getModuleName(){
  cggcc.$clinit_GWT();
  return getModuleName_0();
}

function getUncaughtExceptionHandler(){
  cggcc.$clinit_GWT();
  return cggcc.uncaughtExceptionHandler;
}

function isClient(){
  cggcc.$clinit_GWT();
  return true;
}

function isScript(){
  cggcc.$clinit_GWT();
  return true;
}

cggcc.log_1 = function log_1(message){
  cggcc.$clinit_GWT();
  cggcs.log_3(message);
}
;
function log_2(message, e){
  cggcc.$clinit_GWT();
  cggcs.log_4(message, e);
}

function reportUncaughtException(e){
  cggcc.$clinit_GWT();
  reportUncaughtException_0(e);
}

function setUncaughtExceptionHandler(handler){
  cggcc.$clinit_GWT();
  cggcc.uncaughtExceptionHandler = handler;
}

defineClass(255, 1, $intern_0);
cggcc.HOSTED_MODE_PERMUTATION_STRONG_NAME = 'HostedMode';
cggcc.uncaughtExceptionHandler = null;
cggcc.$clinit_GWT$1 = function $clinit_GWT$1(){
  cggcc.$clinit_GWT$1 = emptyMethod;
}
;
defineClass(258, 1, $intern_0);
cggcc.$clinit_GWT$DefaultUncaughtExceptionHandler = function $clinit_GWT$DefaultUncaughtExceptionHandler(){
  cggcc.$clinit_GWT$DefaultUncaughtExceptionHandler = emptyMethod;
}
;
defineClass(257, 1, $intern_0);
cggcc.$clinit_GWT$UncaughtExceptionHandler = function $clinit_GWT$UncaughtExceptionHandler(){
  cggcc.$clinit_GWT$UncaughtExceptionHandler = emptyMethod;
}
;
cggcci.$clinit_JavaScriptExceptionBase = function $clinit_JavaScriptExceptionBase(){
  cggcci.$clinit_JavaScriptExceptionBase = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.JavaScriptExceptionBase = function JavaScriptExceptionBase(){
  cggcci.$clinit_JavaScriptExceptionBase();
  jl.RuntimeException_2.call(this, null, null, true, false);
  this.$init_7();
}
;
defineClass(118, 8, $intern_5);
_.$init_7 = function $init_7(){
}
;
cggl.Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 118, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcc.$clinit_JavaScriptException = function $clinit_JavaScriptException(){
  cggcc.$clinit_JavaScriptException = emptyMethod;
  cggcci.$clinit_JavaScriptExceptionBase();
  cggcc.NOT_SET = new Object_0;
}
;
cggcc.JavaScriptException = function JavaScriptException(e){
  cggcc.$clinit_JavaScriptException();
  cggcc.JavaScriptException_0.call(this, e, '');
}
;
cggcc.JavaScriptException_0 = function JavaScriptException_0(e, description){
  cggcci.JavaScriptExceptionBase.call(this);
  this.$init_8();
  this.e = e;
  this.description = description;
}
;
cggcc.getExceptionDescription = function getExceptionDescription(e){
  if (instanceOfJso(e)) {
    return cggcc.getExceptionDescription0(e);
  }
   else {
    return e + '';
  }
}
;
cggcc.getExceptionDescription0 = function getExceptionDescription0(e){
  return e == null?null:e.message;
}
;
cggcc.getExceptionName = function getExceptionName(e){
  if (jsEquals(e, null)) {
    return 'null';
  }
   else if (instanceOfJso(e)) {
    return cggcc.getExceptionName0(e);
  }
   else if (isJavaString(e)) {
    return 'String';
  }
   else {
    return jl.getClass__Ljava_lang_Class___devirtual$(e).getName();
  }
}
;
cggcc.getExceptionName0 = function getExceptionName0(e){
  return e == null?null:e.name;
}
;
defineClass(24, 118, {24:1, 3:1, 7:1, 1:1, 8:1, 9:1}, cggcc.JavaScriptException);
_.$init_8 = function $init_8(){
  this.description = '';
}
;
_.ensureInit = function ensureInit(){
  var exception;
  if (jsEquals(this.message_0, null)) {
    exception = this.getThrown();
    this.name_0 = cggcc.getExceptionName(exception);
    this.description = this.description + ': ' + cggcc.getExceptionDescription(exception);
    this.message_0 = '(' + this.name_0 + ') ' + this.description;
  }
}
;
_.getMessage = function getMessage_0(){
  this.ensureInit();
  return this.message_0;
}
;
_.getName = function getName(){
  this.ensureInit();
  return this.name_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(cggcc.NOT_SET)?null:this.e;
}
;
_.isThrownSet = function isThrownSet(){
  return maskUndefined(this.e) !== maskUndefined(cggcc.NOT_SET);
}
;
cggl.Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 24, cggl.Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
cggcc.$clinit_JsArray = function $clinit_JsArray(){
  cggcc.$clinit_JsArray = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$get = function $get(this$static, index_0){
  cggcc.$clinit_JsArray();
  return this$static[index_0];
}
;
cggcc.$length = function $length(this$static){
  cggcc.$clinit_JsArray();
  return this$static.length;
}
;
cggcc.$push = function $push(this$static, value_0){
  cggcc.$clinit_JsArray();
  this$static[this$static.length] = value_0;
}
;
cggcc.$set = function $set(this$static, index_0, value_0){
  cggcc.$clinit_JsArray();
  this$static[index_0] = value_0;
}
;
cggcc.$clinit_JsArrayString = function $clinit_JsArrayString(){
  cggcc.$clinit_JsArrayString = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$get_0 = function $get_0(this$static, index_0){
  cggcc.$clinit_JsArrayString();
  return this$static[index_0];
}
;
cggcc.$length_0 = function $length_0(this$static){
  cggcc.$clinit_JsArrayString();
  return this$static.length;
}
;
cggcc.$clinit_JsDate = function $clinit_JsDate(){
  cggcc.$clinit_JsDate = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$getDate = function $getDate(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getDate();
}
;
cggcc.$getDay = function $getDay(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getDay();
}
;
cggcc.$getFullYear = function $getFullYear(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getFullYear();
}
;
cggcc.$getHours = function $getHours(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getHours();
}
;
cggcc.$getMinutes = function $getMinutes(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getMinutes();
}
;
cggcc.$getMonth = function $getMonth(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getMonth();
}
;
cggcc.$getSeconds = function $getSeconds(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getSeconds();
}
;
cggcc.$getTime = function $getTime(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getTime();
}
;
cggcc.$getTimezoneOffset = function $getTimezoneOffset(this$static){
  cggcc.$clinit_JsDate();
  return this$static.getTimezoneOffset();
}
;
cggcc.create = function create(milliseconds){
  cggcc.$clinit_JsDate();
  return new Date(milliseconds);
}
;
cggcc.now_1 = function now_1(){
  cggcc.$clinit_JsDate();
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}
;
cggcc.$clinit_JsonUtils = function $clinit_JsonUtils(){
  cggcc.$clinit_JsonUtils = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.escapeChar = function escapeChar(c, escapeTable){
  var lookedUp = cggcc.escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}
;
cggcc.escapeJsonForEval = function escapeJsonForEval(toEscape){
  cggcc.$clinit_JsonUtils();
  var escapeTable = cggcc.getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return cggcc.escapeChar(x_0, escapeTable);
  }
  );
  return s;
}
;
cggcc.escapeValue = function escapeValue(toEscape){
  cggcc.$clinit_JsonUtils();
  var escapeTable = cggcc.getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return cggcc.escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}
;
cggcc.getEscapeTable = function getEscapeTable(){
  if (isNull(cggcc.escapeTable_0)) {
    cggcc.escapeTable_0 = cggcc.initEscapeTable();
  }
  return cggcc.escapeTable_0;
}
;
cggcc.initEscapeTable = function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}
;
cggcc.safeEval = function safeEval(json){
  cggcc.$clinit_JsonUtils();
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return cggcc.throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}
;
cggcc.throwIllegalArgumentException = function throwIllegalArgumentException(message, data_0){
  throw new jl.IllegalArgumentException_0(message + '\n' + data_0);
}
;
defineClass(446, 1, $intern_0);
cggcc.$clinit_RunAsyncCallback = function $clinit_RunAsyncCallback(){
  cggcc.$clinit_RunAsyncCallback = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback', 100, null);
cggcc.$clinit_Scheduler = function $clinit_Scheduler(){
  cggcc.$clinit_Scheduler = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.Scheduler = function Scheduler(){
  cggcc.$clinit_Scheduler();
  Object_0.call(this);
  this.$init_9();
}
;
cggcc.get_0 = function get_0(){
  cggcc.$clinit_Scheduler();
  return cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE;
}
;
defineClass(99, 1, $intern_0);
_.$init_9 = function $init_9(){
}
;
cggl.Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 99, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Scheduler$RepeatingCommand = function $clinit_Scheduler$RepeatingCommand(){
  cggcc.$clinit_Scheduler$RepeatingCommand = emptyMethod;
}
;
cggcc.$clinit_Scheduler$ScheduledCommand = function $clinit_Scheduler$ScheduledCommand(){
  cggcc.$clinit_Scheduler$ScheduledCommand = emptyMethod;
}
;
cggcc.$clinit_ScriptInjector = function $clinit_ScriptInjector(){
  cggcc.$clinit_ScriptInjector = emptyMethod;
  jl.$clinit_Object();
  cggcc.TOP_WINDOW = cggcc.nativeTopWindow();
}
;
cggcc.attachListeners = function attachListeners(scriptElement, callback, removeTag){
  cggcc.$clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    if (removeTag) {
      cggcc.nativeRemove(scriptElement);
    }
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    if (callback) {
      callback.onSuccess_0(null);
    }
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new cggcc.CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    if (/loaded|complete/.test(scriptElement.readyState)) {
      scriptElement.onload();
    }
  }
  );
}
;
cggcc.fromUrl = function fromUrl(scriptUrl){
  cggcc.$clinit_ScriptInjector();
  return new cggcc.ScriptInjector$FromUrl(scriptUrl);
}
;
cggcc.nativeAttachToHead = function nativeAttachToHead(doc, scriptElement){
  cggcc.$clinit_ScriptInjector();
  (doc.head || doc.getElementsByTagName('head')[0]).appendChild(scriptElement);
}
;
cggcc.nativeDefaultWindow = function nativeDefaultWindow(){
  cggcc.$clinit_ScriptInjector();
  return window;
}
;
cggcc.nativeGetDocument = function nativeGetDocument(wnd){
  cggcc.$clinit_ScriptInjector();
  return wnd.document;
}
;
cggcc.nativeMakeScriptElement = function nativeMakeScriptElement(doc){
  cggcc.$clinit_ScriptInjector();
  return doc.createElement('script');
}
;
cggcc.nativeRemove = function nativeRemove(scriptElement){
  scriptElement.parentNode.removeChild(scriptElement);
}
;
cggcc.nativeSetSrc = function nativeSetSrc(element, url_0){
  cggcc.$clinit_ScriptInjector();
  element.src = url_0;
}
;
cggcc.nativeTopWindow = function nativeTopWindow(){
  return $wnd;
}
;
defineClass(423, 1, $intern_0);
cggcc.$clinit_ScriptInjector$FromString = function $clinit_ScriptInjector$FromString(){
  cggcc.$clinit_ScriptInjector$FromString = emptyMethod;
}
;
defineClass(424, 1, $intern_0);
cggcc.$clinit_ScriptInjector$FromUrl = function $clinit_ScriptInjector$FromUrl(){
  cggcc.$clinit_ScriptInjector$FromUrl = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.ScriptInjector$FromUrl = function ScriptInjector$FromUrl(scriptUrl){
  cggcc.$clinit_ScriptInjector$FromUrl();
  Object_0.call(this);
  this.$init_10();
  this.scriptUrl = scriptUrl;
}
;
defineClass(221, 1, $intern_0, cggcc.ScriptInjector$FromUrl);
_.$init_10 = function $init_10(){
  this.removeTag = false;
}
;
_.inject = function inject(){
  var doc, scriptElement, wnd;
  wnd = isNull(this.window_0)?cggcc.nativeDefaultWindow():this.window_0;
  doc = cggcc.nativeGetDocument(wnd);
  scriptElement = cggcc.nativeMakeScriptElement(doc);
  if (isNotNull(this.callback) || this.removeTag) {
    cggcc.attachListeners(scriptElement, this.callback, this.removeTag);
  }
  cggcc.nativeSetSrc(scriptElement, this.scriptUrl);
  cggcc.nativeAttachToHead(doc, scriptElement);
  return scriptElement;
}
;
_.setCallback = function setCallback(callback){
  this.callback = callback;
  return this;
}
;
_.setRemoveTag = function setRemoveTag(removeTag){
  this.removeTag = removeTag;
  return this;
}
;
_.removeTag = false;
cggl.Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 221, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader = function $clinit_AsyncFragmentLoader(){
  cggcci.$clinit_AsyncFragmentLoader = emptyMethod;
  jl.$clinit_Object();
  cggcci.BROWSER_LOADER = cggcci.makeBrowserLoader(1, initValues(getClassLiteralForArray(cggl.I_classLit, 1), $intern_7, 0, 7, []));
}
;
function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy, logger, executor){
  var numEntriesPlusOne;
  Object_0.call(this);
  this.$init_11();
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  this.logger = logger;
  this.onSuccessExecutor = executor;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initDim(cggl.Ljava_lang_Object_2_classLit, $intern_2, 5, numEntriesPlusOne, 0, 2);
  this.requestedExclusives = new cggcci.AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initDim(cggl.Z_classLit, $intern_7, 0, numEntriesPlusOne, 8, 1);
  this.pendingDownloadErrorHandlers = initDim(cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_2, 55, numEntriesPlusOne, 0, 1);
}

cggcci.makeBrowserLoader = function makeBrowserLoader(numFragments, initialLoad){
  if (isClient()) {
    return new AsyncFragmentLoader(numFragments, initialLoad, new cggcci.ScriptTagLoadingStrategy, new cggcci.AsyncFragmentLoader$StandardLogger, new cggcci.OnSuccessExecutor);
  }
   else {
    return null;
  }
}
;
function onLoad(fragment){
  cggcci.BROWSER_LOADER.onLoadImpl(fragment);
}

function runAsync(fragment, callback){
  cggcci.BROWSER_LOADER.runAsyncImpl(fragment, callback);
}

defineClass(104, 1, $intern_0, AsyncFragmentLoader);
_.$init_11 = function $init_11(){
  this.fragmentLoading = -1;
  this.prefetching = false;
  this.prefetchQueue = null;
  this.remainingInitialFragments = null;
}
;
_.anyPrefetchesRequested = function anyPrefetchesRequested(){
  return this.prefetching && isNotNull(this.prefetchQueue) && this.prefetchQueue.size_1() > 0;
}
;
_.clearRequestsAlreadyLoaded = function clearRequestsAlreadyLoaded(){
  var offset;
  while (this.requestedExclusives.size_1() > 0 && this.isLoaded[this.requestedExclusives.peek()]) {
    offset = this.requestedExclusives.remove();
    if (offset < this.pendingDownloadErrorHandlers.length) {
      this.pendingDownloadErrorHandlers[offset] = null;
    }
  }
  if (isNotNull(this.prefetchQueue)) {
    while (this.prefetchQueue.size_1() > 0 && this.isLoaded[this.prefetchQueue.peek()]) {
      this.prefetchQueue.remove();
    }
  }
}
;
_.downloadGroup = function downloadGroup(fragment){
  return fragment == this.leftoversFragment()?'leftoversDownload':cggcci.downloadGroupForExclusive(fragment);
}
;
_.executeOnSuccess0 = function executeOnSuccess0(callback){
  callback.onSuccess_1();
}
;
_.fragmentHasLoaded = function fragmentHasLoaded(fragment){
  this.logFragmentLoaded(fragment);
  if (fragment < this.pendingDownloadErrorHandlers.length) {
    this.pendingDownloadErrorHandlers[fragment] = null;
  }
  if (this.isInitial(fragment)) {
    this.remainingInitialFragments.remove();
  }
  this.fragmentLoading = -1;
  this.isLoaded[fragment] = true;
  this.startLoadingNextFragment();
}
;
_.haveInitialFragmentsLoaded = function haveInitialFragmentsLoaded(){
  return isNotNull(this.remainingInitialFragments) && this.remainingInitialFragments.size_1() == 0;
}
;
_.initializeRemainingInitialFragments = function initializeRemainingInitialFragments(){
  var sp, sp$array, sp$index, sp$max;
  if (isNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments = new cggcci.AsyncFragmentLoader$BoundedIntQueue(this.initialLoadSequence.length + 1);
    for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      this.remainingInitialFragments.add_0(sp);
    }
    this.remainingInitialFragments.add_0(this.leftoversFragment());
  }
}
;
_.inject_0 = function inject_0(splitPoint, loadErrorHandler){
  this.pendingDownloadErrorHandlers[splitPoint] = loadErrorHandler;
  if (!this.isInitial(splitPoint)) {
    this.requestedExclusives.add_0(splitPoint);
  }
  this.startLoadingNextFragment();
}
;
_.isEmpty = function isEmpty(array){
  var i_0;
  for (i_0 = 0; i_0 < array.length; i_0++) {
    if (jsNotEquals(array[i_0], null)) {
      return false;
    }
  }
  return true;
}
;
_.isInitial = function isInitial(splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this.leftoversFragment()) {
    return true;
  }
  for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}
;
_.isLoading = function isLoading(splitPoint){
  return isNotNull(this.pendingDownloadErrorHandlers[splitPoint]);
}
;
_.leftoversFragment = function leftoversFragment(){
  return this.numEntries;
}
;
_.logDownloadStart = function logDownloadStart(fragment){
  this.logEventProgress_0(this.downloadGroup(fragment), 'begin', fragment, -1);
}
;
_.logEventProgress = function logEventProgress(eventGroup, type_0){
  this.logEventProgress_0(eventGroup, type_0, -1, -1);
}
;
_.logEventProgress_0 = function logEventProgress_0(eventGroup, type_0, fragment, size_0){
  this.logger.logEventProgress_1(eventGroup, type_0, fragment, size_0);
}
;
_.logFragmentLoaded = function logFragmentLoaded(fragment){
  var logGroup;
  logGroup = this.downloadGroup(fragment);
  this.logEventProgress_0(logGroup, 'end', fragment, -1);
}
;
_.onLoadImpl = function onLoadImpl(fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t;
  this.fragmentHasLoaded(fragment);
  callbacks = this.allCallbacks[fragment];
  if (jsNotEquals(callbacks, null)) {
    this.logEventProgress('runCallbacks' + fragment, 'begin');
    this.allCallbacks[fragment] = null;
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        callback.onSuccess_1();
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 9)) {
          t = $e0;
          reportUncaughtException(t);
        }
         else 
          throw unwrap_5($e0);
      }
    }
    this.logEventProgress('runCallbacks' + fragment, 'end');
  }
}
;
_.runAsyncImpl = function runAsyncImpl(fragment, callback){
  var callbacks;
  if (this.isLoaded[fragment]) {
    this.onSuccessExecutor.execute_1(this, callback);
    return;
  }
  callbacks = this.allCallbacks[fragment];
  if (jsEquals(callbacks, null)) {
    callbacks = this.allCallbacks[fragment] = initDim(cggl.Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, $intern_2, 100, 0, 0, 1);
  }
  callbacks[callbacks.length] = callback;
  if (!this.isLoading(fragment)) {
    this.inject_0(fragment, new cggcci.AsyncFragmentLoader$1(this, fragment));
  }
}
;
_.startLoadingFragment = function startLoadingFragment(fragment){
  this.fragmentLoading = fragment;
  this.logDownloadStart(fragment);
  this.loadingStrategy.startLoadingFragment_0(fragment, new cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure(this, fragment));
}
;
_.startLoadingNextFragment = function startLoadingNextFragment(){
  if (this.fragmentLoading >= 0) {
    return;
  }
  this.initializeRemainingInitialFragments();
  this.clearRequestsAlreadyLoaded();
  if (this.isEmpty(this.pendingDownloadErrorHandlers) && !this.anyPrefetchesRequested()) {
    return;
  }
  if (this.remainingInitialFragments.size_1() > 0) {
    this.startLoadingFragment(this.remainingInitialFragments.peek());
    return;
  }
  if (this.requestedExclusives.size_1() > 0) {
    this.startLoadingFragment(this.requestedExclusives.remove());
    return;
  }
  if (this.anyPrefetchesRequested()) {
    this.startLoadingFragment(this.prefetchQueue.remove());
    return;
  }
}
;
_.fragmentLoading = 0;
_.numEntries = 0;
_.prefetching = false;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 104, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$1 = function $clinit_AsyncFragmentLoader$1(){
  cggcci.$clinit_AsyncFragmentLoader$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$1 = function AsyncFragmentLoader$1(this$0, val$fragment){
  cggcci.$clinit_AsyncFragmentLoader$1();
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
  Object_0.call(this);
  this.$init_12();
}
;
defineClass(105, 1, {55:1, 1:1}, cggcci.AsyncFragmentLoader$1);
_.$init_12 = function $init_12(){
}
;
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$array, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (jsNotEquals(callbacks, null)) {
    this.this$01.allCallbacks[this.val$fragment2] = null;
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      callback.onFailure_0(reason);
    }
  }
}
;
_.val$fragment2 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 105, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue = function $clinit_AsyncFragmentLoader$BoundedIntQueue(){
  cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$BoundedIntQueue = function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue();
  Object_0.call(this);
  this.$init_13();
  this.array = initDim(cggl.I_classLit, $intern_7, 0, maxPuts, 7, 1);
}
;
defineClass(77, 1, $intern_0, cggcci.AsyncFragmentLoader$BoundedIntQueue);
_.$init_13 = function $init_13(){
  this.read = 0;
  this.write_0 = 0;
}
;
_.add_0 = function add_1(x_0){
  this.array[this.write_0++] = x_0;
}
;
_.clear_0 = function clear_0(){
  this.read = 0;
  this.write_0 = 0;
}
;
_.peek = function peek(){
  return this.array[this.read];
}
;
_.remove = function remove_0(){
  return this.array[this.read++];
}
;
_.size_1 = function size_1(){
  return this.write_0 - this.read;
}
;
_.read = 0;
_.write_0 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 77, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure = function $clinit_AsyncFragmentLoader$HttpDownloadFailure(){
  cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.AsyncFragmentLoader$HttpDownloadFailure = function AsyncFragmentLoader$HttpDownloadFailure(url_0, statusCode, statusText){
  cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure();
  jl.RuntimeException_0.call(this, 'Download of ' + url_0 + ' failed with status ' + statusCode + '(' + statusText + ')');
  this.$init_14();
  this.statusCode = statusCode;
}
;
defineClass(107, 8, $intern_5, cggcci.AsyncFragmentLoader$HttpDownloadFailure);
_.$init_14 = function $init_14(){
}
;
_.getStatusCode = function getStatusCode(){
  return this.statusCode;
}
;
_.statusCode = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 107, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure = function $clinit_AsyncFragmentLoader$HttpInstallFailure(){
  cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.AsyncFragmentLoader$HttpInstallFailure = function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure();
  jl.RuntimeException_1.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
  this.$init_15();
}
;
defineClass(108, 8, $intern_5, cggcci.AsyncFragmentLoader$HttpInstallFailure);
_.$init_15 = function $init_15(){
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 108, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$LoadTerminatedHandler = function $clinit_AsyncFragmentLoader$LoadTerminatedHandler(){
  cggcci.$clinit_AsyncFragmentLoader$LoadTerminatedHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler', 55, null);
cggcci.$clinit_AsyncFragmentLoader$LoadingStrategy = function $clinit_AsyncFragmentLoader$LoadingStrategy(){
  cggcci.$clinit_AsyncFragmentLoader$LoadingStrategy = emptyMethod;
}
;
cggcci.$clinit_AsyncFragmentLoader$Logger = function $clinit_AsyncFragmentLoader$Logger(){
  cggcci.$clinit_AsyncFragmentLoader$Logger = emptyMethod;
}
;
cggcci.$clinit_AsyncFragmentLoader$LwmLabels = function $clinit_AsyncFragmentLoader$LwmLabels(){
  cggcci.$clinit_AsyncFragmentLoader$LwmLabels = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.downloadGroupForExclusive = function downloadGroupForExclusive(splitPoint){
  cggcci.$clinit_AsyncFragmentLoader$LwmLabels();
  return 'download' + splitPoint;
}
;
defineClass(263, 1, $intern_0);
cggcci.BEGIN = 'begin';
cggcci.END = 'end';
cggcci.LEFTOVERS_DOWNLOAD = 'leftoversDownload';
cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = function $clinit_AsyncFragmentLoader$ResetAfterDownloadFailure(){
  cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure = function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_16();
  this.fragment_0 = myFragment;
}
;
defineClass(106, 1, {55:1, 1:1}, cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure);
_.$init_16 = function $init_16(){
}
;
_.loadTerminated = function loadTerminated_0(reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this.this$01.fragmentLoading != this.fragment_0) {
    return;
  }
  handlersToRun = this.this$01.pendingDownloadErrorHandlers;
  this.this$01.pendingDownloadErrorHandlers = initDim(cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, $intern_2, 55, this.this$01.numEntries + 1, 0, 1);
  this.this$01.requestedExclusives.clear_0();
  this.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (isNotNull(handler)) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 8)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw unwrap_5($e0);
      }
    }
  }
  if (isNotNull(lastException)) {
    throw unwrap_5(lastException);
  }
}
;
_.fragment_0 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 106, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$StandardLogger = function $clinit_AsyncFragmentLoader$StandardLogger(){
  cggcci.$clinit_AsyncFragmentLoader$StandardLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$StandardLogger = function AsyncFragmentLoader$StandardLogger(){
  cggcci.$clinit_AsyncFragmentLoader$StandardLogger();
  Object_0.call(this);
  this.$init_17();
}
;
cggcci.stats = function stats(data_0){
  return $stats(data_0);
}
;
defineClass(102, 1, $intern_0, cggcci.AsyncFragmentLoader$StandardLogger);
_.$init_17 = function $init_17(){
}
;
_.createStatsEvent = function createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:getModuleName(), sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  if (fragment >= 0) {
    evt.fragment = fragment;
  }
  if (size_0 >= 0) {
    evt.size = size_0;
  }
  return evt;
}
;
_.isStatsAvailable = function isStatsAvailable(){
  return !!$stats;
}
;
_.logEventProgress_1 = function logEventProgress_1(eventGroup, type_0, fragment, size_0){
  var toss;
  toss = this.isStatsAvailable() && cggcci.stats(this.createStatsEvent(eventGroup, type_0, fragment, size_0));
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/StandardLogger', 102, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_Coercions = function $clinit_Coercions(){
  cggcci.$clinit_Coercions = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.ensureInt = function ensureInt(value_0){
  cggcci.$clinit_Coercions();
  return ~~value_0;
}
;
defineClass(349, 1, $intern_0);
cggcci.$clinit_Impl = function $clinit_Impl(){
  cggcci.$clinit_Impl = emptyMethod;
  jl.$clinit_Object();
  cggcci.watchdogEntryDepthTimerId = -1;
}
;
cggcci.apply_0 = function apply_0(jsFunction, thisObj, args){
  if (isScript()) {
    return jsFunction.apply(thisObj, args);
  }
   else {
    var __0 = jsFunction.apply(thisObj, args);
    if (__0 != null) {
      __0 = {val:__0};
    }
    return __0;
  }
}
;
cggcci.enter = function enter(){
  var now_0;
  if (isScript() && cggcci.entryDepth != 0) {
    now_0 = cggcc.currentTimeMillis();
    if (now_0 - cggcci.watchdogEntryDepthLastScheduled > 2000) {
      cggcci.watchdogEntryDepthLastScheduled = now_0;
      cggcci.watchdogEntryDepthTimerId = cggcci.watchdogEntryDepthSchedule();
    }
  }
  if (cggcci.entryDepth++ == 0) {
    (cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE).flushEntryCommands();
    return true;
  }
  return false;
}
;
function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return cggcci.entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = cggcci.entry0(jsFunction, this, arguments);
      if (__0 != null) {
        __0 = __0.val;
      }
      return __0;
    }
  }
  ;
}

cggcci.entry0 = function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = cggcci.enter();
  try {
    if (isNotNull(getUncaughtExceptionHandler())) {
      try {
        return cggcci.apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 9)) {
          t = $e0;
          reportUncaughtException_0(t);
          return cggcci.undefined_0();
        }
         else 
          throw unwrap_5($e0);
      }
    }
     else {
      return cggcci.apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    cggcci.exit_0(initialEntry);
  }
}
;
cggcci.exit_0 = function exit_0(initialEntry){
  if (initialEntry) {
    (cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE).flushFinallyCommands();
  }
  cggcci.entryDepth--;
  if (initialEntry) {
    if (isScript() && cggcci.watchdogEntryDepthTimerId != -1) {
      cggcci.watchdogEntryDepthCancel(cggcci.watchdogEntryDepthTimerId);
      cggcci.watchdogEntryDepthTimerId = -1;
    }
  }
}
;
function getHashCode(o){
  cggcci.$clinit_Impl();
  return o.$H || (o.$H = cggcci.getNextHashId());
}

function getModuleName_0(){
  cggcci.$clinit_Impl();
  return $moduleName;
}

cggcci.getNextHashId = function getNextHashId(){
  return ++cggcci.sNextHashId;
}
;
function registerEntry(){
  cggcci.$clinit_Impl();
  if (isScript()) {
    return entry_0;
  }
   else {
    return $entry = entry_0;
  }
}

cggcci.reportToBrowser = function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}
;
cggcci.reportToBrowser_0 = function reportToBrowser_0(e){
  cggcci.reportToBrowser(instanceOf(e, 24)?e.getThrown():e);
}
;
function reportUncaughtException_0(e){
  cggcci.$clinit_Impl();
  var handler;
  if (isNotNull(cggcci.uncaughtExceptionHandlerForTest)) {
    cggcci.uncaughtExceptionHandlerForTest.onUncaughtException(e);
  }
  handler = getUncaughtExceptionHandler();
  if (isNotNull(handler)) {
    if (jsEquals(handler, cggcci.uncaughtExceptionHandlerForTest)) {
      return;
    }
    handler.onUncaughtException(e);
    return;
  }
  if (isClient()) {
    cggcci.reportToBrowser_0(e);
  }
   else {
    (jl.$clinit_System() , jl.err_0).print_0('Uncaught exception ');
    e.printStackTrace((jl.$clinit_System() , jl.err_0));
  }
}

cggcci.undefined_0 = function undefined_0(){
  return;
}
;
cggcci.watchdogEntryDepthCancel = function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}
;
cggcci.watchdogEntryDepthRun = function watchdogEntryDepthRun(){
  if (isScript() && cggcci.entryDepth != 0) {
    cggcci.entryDepth = 0;
  }
  cggcci.watchdogEntryDepthTimerId = -1;
}
;
cggcci.watchdogEntryDepthSchedule = function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(cggcci.watchdogEntryDepthRun, 10);
}
;
defineClass(264, 1, $intern_0);
cggcci.WATCHDOG_ENTRY_DEPTH_CHECK_INTERVAL_MS = 2000;
cggcci.entryDepth = 0;
cggcci.sNextHashId = 0;
cggcci.watchdogEntryDepthLastScheduled = 0;
cggcci.watchdogEntryDepthTimerId = 0;
cggcci.$clinit_LoadingStrategyBase = function $clinit_LoadingStrategyBase(){
  cggcci.$clinit_LoadingStrategyBase = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.LoadingStrategyBase = function LoadingStrategyBase(downloadStrategy){
  cggcci.$clinit_LoadingStrategyBase();
  Object_0.call(this);
  this.$init_18();
  this.downloadStrategy = downloadStrategy;
}
;
cggcci.gwtInstallCode = function gwtInstallCode(text_0){
  cggcci.$clinit_LoadingStrategyBase();
  __gwtInstallCode(text_0);
}
;
cggcci.gwtStartLoadingFragment = function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}
;
defineClass(128, 1, $intern_0);
_.$init_18 = function $init_18(){
  this.manualRetryNumbers = cggcci.create_0();
}
;
_.getManualRetryNum = function getManualRetryNum(fragment){
  var ser;
  ser = cggcci.$get_1(this.manualRetryNumbers, fragment);
  cggcci.$put(this.manualRetryNumbers, fragment, ser + 1);
  return ser;
}
;
_.getMaxAutoRetryCount = function getMaxAutoRetryCount(){
  return cggcci.MAX_AUTO_RETRY_COUNT;
}
;
_.startLoadingFragment_0 = function startLoadingFragment_0(fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0;
  url_0 = cggcci.gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (jsEquals(url_0, null)) {
    return;
  }
  manualRetry = this.getManualRetryNum(fragment);
  if (manualRetry > 0) {
    connector = jl.contains_Ljava_lang_CharSequence__Z__devirtual$(url_0, '?')?38:63;
    url_0 += charToString(connector) + 'manualRetry=' + manualRetry;
  }
  request = new cggcci.LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, this.downloadStrategy, this.getMaxAutoRetryCount());
  request.tryDownload_0();
}
;
cggcci.MAX_AUTO_RETRY_COUNT = 3;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 128, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_LoadingStrategyBase$DownloadStrategy = function $clinit_LoadingStrategyBase$DownloadStrategy(){
  cggcci.$clinit_LoadingStrategyBase$DownloadStrategy = emptyMethod;
}
;
cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker = function $clinit_LoadingStrategyBase$FragmentReloadTracker(){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcci.$get_1 = function $get_1(this$static, x_0){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  return this$static[x_0]?this$static[x_0]:0;
}
;
cggcci.$put = function $put(this$static, x_0, y_0){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  this$static[x_0] = y_0;
}
;
cggcci.create_0 = function create_0(){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  return cggcc.createArray();
}
;
cggcci.$clinit_LoadingStrategyBase$RequestData = function $clinit_LoadingStrategyBase$RequestData(){
  cggcci.$clinit_LoadingStrategyBase$RequestData = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.LoadingStrategyBase$RequestData = function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, downloadStrategy, maxRetryCount){
  cggcci.$clinit_LoadingStrategyBase$RequestData();
  Object_0.call(this);
  this.$init_19();
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
  this.downloadStrategy = downloadStrategy;
}
;
defineClass(131, 1, $intern_0, cggcci.LoadingStrategyBase$RequestData);
_.$init_19 = function $init_19(){
  this.errorHandler = null;
}
;
_.getFragment = function getFragment(){
  return this.fragment_0;
}
;
_.getUrl = function getUrl(){
  return this.url_0;
}
;
_.onLoadError = function onLoadError(e, mayRetry){
  var connector;
  if (mayRetry) {
    this.retryCount++;
    if (this.retryCount <= this.maxRetryCount) {
      connector = jl.contains_Ljava_lang_CharSequence__Z__devirtual$(this.originalUrl, '?')?38:63;
      this.url_0 = this.originalUrl + charToString(connector) + 'autoRetry=' + this.retryCount;
      this.downloadStrategy.tryDownload(this);
      return;
    }
  }
  this.errorHandler.loadTerminated(e);
}
;
_.tryDownload_0 = function tryDownload(){
  this.downloadStrategy.tryDownload(this);
}
;
_.tryInstall = function tryInstall(code_0){
  var e, textIntro;
  try {
    cggcci.gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      textIntro = code_0;
      if (jsNotEquals(textIntro, null) && jl.length__I__devirtual$_0(textIntro) > 200) {
        textIntro = jl.substring_II_Ljava_lang_String___devirtual$(textIntro, 0, 200) + '...';
      }
      this.onLoadError(new cggcci.AsyncFragmentLoader$HttpInstallFailure(this.url_0, textIntro, e), false);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
cggcci.MAX_LOG_LENGTH = 200;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 131, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_OnSuccessExecutor = function $clinit_OnSuccessExecutor(){
  cggcci.$clinit_OnSuccessExecutor = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.OnSuccessExecutor = function OnSuccessExecutor(){
  cggcci.$clinit_OnSuccessExecutor();
  Object_0.call(this);
  this.$init_20();
}
;
defineClass(103, 1, $intern_0, cggcci.OnSuccessExecutor);
_.$init_20 = function $init_20(){
}
;
_.execute_1 = function execute(fragmentLoader, callback){
  cggcc.get_0().scheduleDeferred(new cggcci.OnSuccessExecutor$1(this, fragmentLoader, callback));
}
;
cggl.Lcom_google_gwt_core_client_impl_OnSuccessExecutor_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor', 103, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_OnSuccessExecutor$1 = function $clinit_OnSuccessExecutor$1(){
  cggcci.$clinit_OnSuccessExecutor$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.OnSuccessExecutor$1 = function OnSuccessExecutor$1(this$0, val$fragmentLoader, val$callback){
  cggcci.$clinit_OnSuccessExecutor$1();
  this.this$01 = this$0;
  this.val$fragmentLoader2 = val$fragmentLoader;
  this.val$callback3 = val$callback;
  Object_0.call(this);
  this.$init_21();
}
;
defineClass(132, 1, $intern_0, cggcci.OnSuccessExecutor$1);
_.$init_21 = function $init_21(){
}
;
_.execute_0 = function execute_0(){
  this.val$fragmentLoader2.executeOnSuccess0(this.val$callback3);
}
;
cggl.Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 132, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl = function $clinit_SchedulerImpl(){
  cggcci.$clinit_SchedulerImpl = emptyMethod;
  cggcc.$clinit_Scheduler();
  cggcci.INSTANCE = new cggcci.SchedulerImpl;
}
;
cggcci.SchedulerImpl = function SchedulerImpl(){
  cggcc.Scheduler.call(this);
  this.$init_22();
}
;
cggcci.createQueue = function createQueue(){
  return cggcc.$cast(cggcc.createArray());
}
;
cggcci.execute_1 = function execute_1(cmd){
  return cmd.execute();
}
;
cggcci.push_0 = function push_0(queue, task){
  if (isNull(queue)) {
    queue = cggcci.createQueue();
  }
  cggcc.$push(queue, task);
  return queue;
}
;
cggcci.runScheduledTasks = function runScheduledTasks(tasks, rescheduled){
  var e, i_0, j, t;
  for (i_0 = 0 , j = cggcc.$length(tasks); i_0 < j; i_0++) {
    t = cggcc.$get(tasks, i_0);
    try {
      if (cggcci.$isRepeating(t)) {
        if (cggcci.$executeRepeating(t)) {
          rescheduled = cggcci.push_0(rescheduled, t);
        }
      }
       else {
        cggcci.$executeScheduled(t);
      }
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  return rescheduled;
}
;
cggcci.scheduleFixedDelayImpl = function scheduleFixedDelayImpl(cmd, delayMs){
  function callback(){
    var ret = $entry(cggcci.execute_1)(cmd);
    if (!isScript()) {
      ret = ret == true;
    }
    if (ret) {
      $wnd.setTimeout(callback, delayMs);
    }
  }

  $wnd.setTimeout(callback, delayMs);
}
;
defineClass(161, 99, $intern_0, cggcci.SchedulerImpl);
_.$init_22 = function $init_22(){
  this.flushRunning = false;
  this.shouldBeRunning = false;
}
;
_.createDuration = function createDuration(){
  return new cggcc.Duration;
}
;
_.flushEntryCommands = function flushEntryCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.entryCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.entryCommands;
      this.entryCommands = null;
      rescheduled = cggcci.runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.entryCommands));
    this.entryCommands = rescheduled;
  }
}
;
_.flushFinallyCommands = function flushFinallyCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.finallyCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.finallyCommands;
      this.finallyCommands = null;
      rescheduled = cggcci.runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.finallyCommands));
    this.finallyCommands = rescheduled;
  }
}
;
_.flushPostEventPumpCommands = function flushPostEventPumpCommands(){
  var oldDeferred;
  if (isNotNull(this.deferredCommands)) {
    oldDeferred = this.deferredCommands;
    this.deferredCommands = null;
    if (isNull(this.incrementalCommands)) {
      this.incrementalCommands = cggcci.createQueue();
    }
    cggcci.runScheduledTasks(oldDeferred, this.incrementalCommands);
  }
  if (isNotNull(this.incrementalCommands)) {
    this.incrementalCommands = this.runRepeatingTasks(this.incrementalCommands);
  }
}
;
_.isWorkQueued = function isWorkQueued(){
  return isNotNull(this.deferredCommands) || isNotNull(this.incrementalCommands);
}
;
_.maybeSchedulePostEventPumpCommands = function maybeSchedulePostEventPumpCommands(){
  if (!this.shouldBeRunning) {
    this.shouldBeRunning = true;
    if (isNull(this.flusher)) {
      this.flusher = new cggcci.SchedulerImpl$Flusher(this);
    }
    cggcci.scheduleFixedDelayImpl(this.flusher, 1);
    if (isNull(this.rescue)) {
      this.rescue = new cggcci.SchedulerImpl$Rescuer(this);
    }
    cggcci.scheduleFixedDelayImpl(this.rescue, 50);
  }
}
;
_.runRepeatingTasks = function runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i_0, length_0, newTasks, t;
  length_0 = cggcc.$length(tasks);
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = this.createDuration();
  while (duration.elapsedMillis() < 16) {
    executedSomeTask = false;
    for (i_0 = 0; i_0 < length_0; i_0++) {
      t = cggcc.$get(tasks, i_0);
      if (isNull(t)) {
        continue;
      }
      executedSomeTask = true;
      if (!cggcci.$executeRepeating(t)) {
        cggcc.$set(tasks, i_0, null);
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = cggcci.createQueue();
    for (i_0 = 0; i_0 < length_0; i_0++) {
      if (isNotNull(cggcc.$get(tasks, i_0))) {
        cggcc.$push(newTasks, cggcc.$get(tasks, i_0));
      }
    }
    return cggcc.$length(newTasks) == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}
;
_.scheduleDeferred = function scheduleDeferred(cmd){
  this.deferredCommands = cggcci.push_0(this.deferredCommands, cggcci.create_1(cmd));
  this.maybeSchedulePostEventPumpCommands();
}
;
_.scheduleFixedDelay = function scheduleFixedDelay(cmd, delayMs){
  cggcci.scheduleFixedDelayImpl(cmd, delayMs);
}
;
_.flushRunning = false;
_.shouldBeRunning = false;
cggcci.FLUSHER_DELAY = 1;
cggcci.RESCUE_DELAY = 50;
cggcci.TIME_SLICE = 16;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 161, cggl.Lcom_google_gwt_core_client_Scheduler_2_classLit);
cggcci.$clinit_SchedulerImpl$Flusher = function $clinit_SchedulerImpl$Flusher(){
  cggcci.$clinit_SchedulerImpl$Flusher = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.SchedulerImpl$Flusher = function SchedulerImpl$Flusher(this$0){
  cggcci.$clinit_SchedulerImpl$Flusher();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_23();
}
;
defineClass(162, 1, $intern_0, cggcci.SchedulerImpl$Flusher);
_.$init_23 = function $init_23(){
}
;
_.execute = function execute_2(){
  this.this$01.flushRunning = true;
  this.this$01.flushPostEventPumpCommands();
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = this.this$01.isWorkQueued();
}
;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 162, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl$Rescuer = function $clinit_SchedulerImpl$Rescuer(){
  cggcci.$clinit_SchedulerImpl$Rescuer = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.SchedulerImpl$Rescuer = function SchedulerImpl$Rescuer(this$0){
  cggcci.$clinit_SchedulerImpl$Rescuer();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_24();
}
;
defineClass(163, 1, $intern_0, cggcci.SchedulerImpl$Rescuer);
_.$init_24 = function $init_24(){
}
;
_.execute = function execute_3(){
  if (this.this$01.flushRunning) {
    this.this$01.scheduleFixedDelay(this.this$01.flusher, 1);
  }
  return this.this$01.shouldBeRunning;
}
;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 163, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl$Task = function $clinit_SchedulerImpl$Task(){
  cggcci.$clinit_SchedulerImpl$Task = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcci.$executeRepeating = function $executeRepeating(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  return cggcci.$getRepeating(this$static).execute();
}
;
cggcci.$executeScheduled = function $executeScheduled(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  cggcci.$getScheduled(this$static).execute_0();
}
;
cggcci.$getRepeating = function $getRepeating(this$static){
  return this$static[0];
}
;
cggcci.$getScheduled = function $getScheduled(this$static){
  return this$static[0];
}
;
cggcci.$isRepeating = function $isRepeating(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  return this$static[1];
}
;
cggcci.create_1 = function create_1(cmd){
  cggcci.$clinit_SchedulerImpl$Task();
  return [cmd, false];
}
;
cggcci.$clinit_ScriptTagLoadingStrategy = function $clinit_ScriptTagLoadingStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy = emptyMethod;
  cggcci.$clinit_LoadingStrategyBase();
}
;
cggcci.ScriptTagLoadingStrategy = function ScriptTagLoadingStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy();
  cggcci.LoadingStrategyBase.call(this, new cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy);
  this.$init_25();
}
;
cggcci.asyncCallback = function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = cggcci.clearAsyncCallback(request.getFragment());
  if (firstTimeCalled) {
    request.tryInstall(code_0);
  }
}
;
cggcci.cleanup = function cleanup(request){
  cggcci.$clinit_ScriptTagLoadingStrategy();
  var neverCalled;
  neverCalled = cggcci.clearAsyncCallback(request.getFragment());
  if (neverCalled) {
    request.onLoadError(new cggcci.AsyncFragmentLoader$HttpDownloadFailure(request.getUrl(), 404, 'Script Tag Failure - no status available'), true);
  }
}
;
cggcci.clearAsyncCallback = function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}
;
cggcci.setAsyncCallback = function setAsyncCallback(fragment, request){
  cggcci.$clinit_ScriptTagLoadingStrategy();
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    cggcci.asyncCallback(request, code_0);
  }
  );
}
;
defineClass(101, 128, $intern_0, cggcci.ScriptTagLoadingStrategy);
_.$init_25 = function $init_25(){
}
;
cggl.Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 101, cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit);
cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = function $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy();
  Object_0.call(this);
  this.$init_26();
}
;
defineClass(129, 1, $intern_0, cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy);
_.$init_26 = function $init_26(){
}
;
_.tryDownload = function tryDownload_0(request){
  cggcci.setAsyncCallback(request.getFragment(), request);
  cggcc.fromUrl(request.getUrl()).setRemoveTag(true).setCallback(new cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this, request)).inject();
}
;
cggl.Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy', 129, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = function $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$1, val$request){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1();
  this.this$11 = this$1;
  this.val$request2 = val$request;
  Object_0.call(this);
  this.$init_27();
}
;
defineClass(130, 1, $intern_0, cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.$init_27 = function $init_27(){
}
;
_.onFailure_1 = function onFailure(reason){
  cggcci.cleanup(this.val$request2);
}
;
_.onFailure = function onFailure_0(reason){
  this.onFailure_1(reason);
}
;
_.onSuccess_0 = function onSuccess_1(result){
  this.onSuccess_2(result);
}
;
_.onSuccess_2 = function onSuccess_2(result){
  cggcci.cleanup(this.val$request2);
}
;
cggl.Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 130, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_StackTraceCreator = function $clinit_StackTraceCreator(){
  cggcci.$clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  jl.$clinit_Object();
  cggcci.LINE_NUMBER_UNKNOWN = -1;
  {
    enforceLegacy = !cggcci.supportsErrorStack();
    c = new cggcci.StackTraceCreator$CollectorModernNoSourceMap;
    cggcci.collector = instanceOf(c, 59) && enforceLegacy?new cggcci.StackTraceCreator$CollectorLegacy:c;
  }
}
;
cggcci.captureStackTrace = function captureStackTrace(throwable, reference){
  cggcci.$clinit_StackTraceCreator();
  cggcci.collector.collect(throwable, reference);
}
;
cggcci.constructJavaStackTrace = function constructJavaStackTrace(thrown){
  cggcci.$clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = cggcci.collector.getStackTrace_0(thrown);
  return cggcci.dropInternalFrames(stackTrace);
}
;
cggcci.dropInternalFrames = function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i_0, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = jl.min_0(stackTrace.length, 5);
  for (i_0 = 0; i_0 < numberOfFrameToSearch; i_0++) {
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(stackTrace[i_0].getMethodName(), dropFrameUntilFnName)) {
      return cggcci.splice(stackTrace, i_0 + 1);
    }
  }
  return stackTrace;
}
;
cggcci.extractFunctionName = function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}
;
cggcci.getFnStack = function getFnStack(e){
  cggcci.$clinit_StackTraceCreator();
  return e && (e.fnStack && e.fnStack instanceof Array)?e.fnStack:[];
}
;
cggcci.getFunctionName = function getFunctionName(fn){
  cggcci.$clinit_StackTraceCreator();
  return fn.name || (fn.name = cggcci.extractFunctionName(fn.toString()));
}
;
cggcci.parseInt_0 = function parseInt_0(number){
  cggcci.$clinit_StackTraceCreator();
  return parseInt(number) || -1;
}
;
cggcci.splice = function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}
;
cggcci.split_0 = function split_0(t){
  cggcci.$clinit_StackTraceCreator();
  var e = t.__gwt$backingJsError;
  return e && e.stack?e.stack.split('\n'):[];
}
;
cggcci.supportsErrorStack = function supportsErrorStack(){
  return !!Error.stackTraceLimit || 'stack' in new Error;
}
;
defineClass(327, 1, $intern_0);
cggcci.ANONYMOUS = 'anonymous';
cggcci.DROP_FRAME_LIMIT = 5;
cggcci.LINE_NUMBER_UNKNOWN = 0;
cggcci.UNKNOWN = 'Unknown';
cggcci.$clinit_StackTraceCreator$Collector = function $clinit_StackTraceCreator$Collector(){
  cggcci.$clinit_StackTraceCreator$Collector = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.StackTraceCreator$Collector = function StackTraceCreator$Collector(){
  cggcci.$clinit_StackTraceCreator$Collector();
  Object_0.call(this);
  this.$init_28();
}
;
defineClass(79, 1, $intern_0);
_.$init_28 = function $init_28(){
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 79, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorEmulated = function $clinit_StackTraceCreator$CollectorEmulated(){
  cggcci.$clinit_StackTraceCreator$CollectorEmulated = emptyMethod;
}
;
defineClass(328, 79, $intern_0);
cggcci.$clinit_StackTraceCreator$CollectorLegacy = function $clinit_StackTraceCreator$CollectorLegacy(){
  cggcci.$clinit_StackTraceCreator$CollectorLegacy = emptyMethod;
  cggcci.$clinit_StackTraceCreator$Collector();
}
;
cggcci.StackTraceCreator$CollectorLegacy = function StackTraceCreator$CollectorLegacy(){
  cggcci.$clinit_StackTraceCreator$CollectorLegacy();
  cggcci.StackTraceCreator$Collector.call(this);
  this.$init_29();
}
;
defineClass(119, 79, $intern_0, cggcci.StackTraceCreator$CollectorLegacy);
_.$init_29 = function $init_29(){
}
;
_.collect = function collect(t, thrownIgnored){
  var seen = {};
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = cggcci.getFunctionName(callee);
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i_0, j;
      for (i_0 = 0 , j = withThisName.length; i_0 < j; i_0++) {
        if (withThisName[i_0] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace_0 = function getStackTrace_0(t){
  var i_0, length_0, stack_0, stackTrace;
  stack_0 = cggcci.getFnStack(t);
  length_0 = cggcc.$length_0(stack_0);
  stackTrace = initDim(cggl.Ljava_lang_StackTraceElement_2_classLit, $intern_2, 37, length_0, 0, 1);
  for (i_0 = 0; i_0 < length_0; i_0++) {
    stackTrace[i_0] = new jl.StackTraceElement('Unknown', cggcc.$get_0(stack_0, i_0), null, -1);
  }
  return stackTrace;
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 119, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorModern = function $clinit_StackTraceCreator$CollectorModern(){
  cggcci.$clinit_StackTraceCreator$CollectorModern = emptyMethod;
  cggcci.$clinit_StackTraceCreator$Collector();
  {
    cggcci.increaseStackTraceLimit();
  }
}
;
cggcci.StackTraceCreator$CollectorModern = function StackTraceCreator$CollectorModern(){
  cggcci.$clinit_StackTraceCreator$CollectorModern();
  cggcci.StackTraceCreator$Collector.call(this);
  this.$init_30();
}
;
cggcci.increaseStackTraceLimit = function increaseStackTraceLimit(){
  Error.stackTraceLimit = 64;
}
;
defineClass(59, 79, {59:1, 1:1});
_.$init_30 = function $init_30(){
}
;
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  if (typeof jsThrown == 'string') {
    backingJsError = fixIE(new Error(jsThrown));
  }
   else if (jsThrown instanceof Object && 'stack' in jsThrown) {
    backingJsError = jsThrown;
  }
   else {
    backingJsError = fixIE(new Error);
  }
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new jl.StackTraceElement('Unknown', method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace_0 = function getStackTrace_1(t){
  var addIndex, i_0, length_0, stack_0, stackTrace, ste;
  stack_0 = cggcci.split_0(t);
  stackTrace = initDim(cggl.Ljava_lang_StackTraceElement_2_classLit, $intern_2, 37, 0, 0, 1);
  addIndex = 0;
  length_0 = cggcc.$length_0(stack_0);
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = this.parse_0(cggcc.$get_0(stack_0, 0));
  if (!jl.equals_Ljava_lang_Object__Z__devirtual$_0(ste.getMethodName(), 'anonymous')) {
    stackTrace[addIndex++] = ste;
  }
  for (i_0 = 1; i_0 < length_0; i_0++) {
    stackTrace[addIndex++] = this.parse_0(cggcc.$get_0(stack_0, i_0));
  }
  return stackTrace;
}
;
_.parse_0 = function parse_0(stString){
  var closeParen, col, endFileUrlIndex, fileName, ieAnonymousFunctionName, index_0, lastColonIndex, line, location_0, toReturn;
  location_0 = '';
  if (jl.isEmpty__Z__devirtual$(stString)) {
    return this.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = jl.trim__Ljava_lang_String___devirtual$(stString);
  if (jl.startsWith_Ljava_lang_String__Z__devirtual$(toReturn, 'at ')) {
    toReturn = jl.substring_I_Ljava_lang_String___devirtual$(toReturn, 3);
  }
  toReturn = this.stripSquareBrackets(toReturn);
  index_0 = jl.indexOf_Ljava_lang_String__I__devirtual$(toReturn, '(');
  if (index_0 == -1) {
    index_0 = jl.indexOf_Ljava_lang_String__I__devirtual$(toReturn, '@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = jl.trim__Ljava_lang_String___devirtual$(jl.substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1));
      toReturn = jl.trim__Ljava_lang_String___devirtual$(jl.substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
    }
  }
   else {
    closeParen = jl.indexOf_Ljava_lang_String_I_I__devirtual$(toReturn, ')', index_0);
    location_0 = jl.substring_II_Ljava_lang_String___devirtual$(toReturn, index_0 + 1, closeParen);
    toReturn = jl.trim__Ljava_lang_String___devirtual$(jl.substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
  }
  index_0 = jl.indexOf_I_I__devirtual$(toReturn, 46);
  if (index_0 != -1) {
    toReturn = jl.substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1);
  }
  ieAnonymousFunctionName = 'Anonymous function';
  if (jl.isEmpty__Z__devirtual$(toReturn) || jl.equals_Ljava_lang_Object__Z__devirtual$_0(toReturn, 'Anonymous function')) {
    toReturn = 'anonymous';
  }
  lastColonIndex = jl.lastIndexOf_I_I__devirtual$(location_0, 58);
  endFileUrlIndex = jl.lastIndexOf_II_I__devirtual$(location_0, 58, lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = jl.substring_II_Ljava_lang_String___devirtual$(location_0, 0, endFileUrlIndex);
    line = cggcci.parseInt_0(jl.substring_II_Ljava_lang_String___devirtual$(location_0, endFileUrlIndex + 1, lastColonIndex));
    col = cggcci.parseInt_0(jl.substring_I_Ljava_lang_String___devirtual$(location_0, lastColonIndex + 1));
  }
  return this.createSte(fileName, toReturn, line, col);
}
;
_.stripSquareBrackets = function stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 59, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap = function $clinit_StackTraceCreator$CollectorModernNoSourceMap(){
  cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap = emptyMethod;
  cggcci.$clinit_StackTraceCreator$CollectorModern();
}
;
cggcci.StackTraceCreator$CollectorModernNoSourceMap = function StackTraceCreator$CollectorModernNoSourceMap(){
  cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap();
  cggcci.StackTraceCreator$CollectorModern.call(this);
  this.$init_31();
}
;
defineClass(120, 59, {59:1, 1:1}, cggcci.StackTraceCreator$CollectorModernNoSourceMap);
_.$init_31 = function $init_31(){
}
;
_.createSte = function createSte_0(fileName, method, line, col){
  return new jl.StackTraceElement('Unknown', method, fileName, -1);
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 120, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorNull = function $clinit_StackTraceCreator$CollectorNull(){
  cggcci.$clinit_StackTraceCreator$CollectorNull = emptyMethod;
}
;
defineClass(329, 79, $intern_0);
cggccp.$clinit_PrefetchableResource = function $clinit_PrefetchableResource(){
  cggccp.$clinit_PrefetchableResource = emptyMethod;
}
;
cggccp.$clinit_RunAsyncCode = function $clinit_RunAsyncCode(){
  cggccp.$clinit_RunAsyncCode = emptyMethod;
}
;
defineClass(265, 1, $intern_0);
cggcs.$clinit_GWT_0 = function $clinit_GWT_0(){
  cggcs.$clinit_GWT_0 = emptyMethod;
  jl.$clinit_Object();
  {
    if (cggcs.isScript_0()) {
      cggcs.logger_0 = new cggcsi.JsLogger;
    }
     else {
      cggcs.logger_0 = null;
    }
  }
}
;
cggcs.isScript_0 = function isScript_0(){
  return true;
}
;
cggcs.log_3 = function log_3(message){
  cggcs.$clinit_GWT_0();
  cggcs.log_4(message, null);
}
;
cggcs.log_4 = function log_4(message, e){
  cggcs.$clinit_GWT_0();
  if (isNotNull(cggcs.sGWTBridge)) {
    cggcs.sGWTBridge.log_0(message, e);
  }
   else if (isNotNull(cggcs.logger_0)) {
    cggcs.logger_0.log_0(message, e);
  }
}
;
defineClass(366, 1, $intern_0);
cggcs.sGWTBridge = null;
cggcs.$clinit_GWTBridge = function $clinit_GWTBridge(){
  cggcs.$clinit_GWTBridge = emptyMethod;
}
;
defineClass(373, 1, $intern_0);
cggcsi.$clinit_InternalPreconditions = function $clinit_InternalPreconditions(){
  cggcsi.$clinit_InternalPreconditions = emptyMethod;
  jl.$clinit_Object();
}
;
cggcsi.checkCriticalArgument = function checkCriticalArgument(expression, errorMessage){
  cggcsi.$clinit_InternalPreconditions();
  if (!expression) {
    throw new jl.IllegalArgumentException_0(valueOf_23(errorMessage));
  }
}
;
cggcsi.checkCriticalArgument_0 = function checkCriticalArgument_0(expression, errorMessageTemplate, errorMessageArgs){
  cggcsi.$clinit_InternalPreconditions();
  if (!expression) {
    throw new jl.IllegalArgumentException_0(cggcsi.format_0(errorMessageTemplate, errorMessageArgs));
  }
}
;
cggcsi.checkCriticalElement = function checkCriticalElement(expression){
  if (!expression) {
    throw new ju.NoSuchElementException;
  }
}
;
cggcsi.checkCriticalPositionIndexes = function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0) {
    throw new jl.IndexOutOfBoundsException('fromIndex: ' + start_0 + ' < 0');
  }
  if (end > size_0) {
    throw new jl.IndexOutOfBoundsException('toIndex: ' + end + ' > size ' + size_0);
  }
  if (start_0 > end) {
    throw new jl.IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end);
  }
}
;
cggcsi.checkElement = function checkElement(expression){
  cggcsi.$clinit_InternalPreconditions();
  cggcsi.checkCriticalElement(expression);
}
;
cggcsi.checkElementIndex = function checkElementIndex(index_0, size_0){
  cggcsi.$clinit_InternalPreconditions();
  if (index_0 < 0 || index_0 >= size_0) {
    throw new jl.IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0);
  }
}
;
cggcsi.checkNotNull = function checkNotNull(reference){
  cggcsi.$clinit_InternalPreconditions();
  if (jsEquals(reference, null)) {
    throw new jl.NullPointerException;
  }
  return reference;
}
;
cggcsi.checkNotNull_0 = function checkNotNull_0(reference, errorMessage){
  cggcsi.$clinit_InternalPreconditions();
  if (jsEquals(reference, null)) {
    throw new jl.NullPointerException_0(valueOf_23(errorMessage));
  }
}
;
cggcsi.checkPositionIndex = function checkPositionIndex(index_0, size_0){
  cggcsi.$clinit_InternalPreconditions();
  if (index_0 < 0 || index_0 > size_0) {
    throw new jl.IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0);
  }
}
;
cggcsi.checkPositionIndexes = function checkPositionIndexes(start_0, end, size_0){
  cggcsi.$clinit_InternalPreconditions();
  cggcsi.checkCriticalPositionIndexes(start_0, end, size_0);
}
;
cggcsi.checkState = function checkState(expression){
  cggcsi.$clinit_InternalPreconditions();
  if (!expression) {
    throw new jl.IllegalStateException;
  }
}
;
cggcsi.checkState_0 = function checkState_0(expression, errorMessage){
  cggcsi.$clinit_InternalPreconditions();
  if (!expression) {
    throw new jl.IllegalStateException_0(valueOf_23(errorMessage));
  }
}
;
cggcsi.format_0 = function format_0(template, args){
  var builder, i_0, placeholderStart, templateStart;
  template = valueOf_23(template);
  builder = new jl.StringBuilder_0(jl.length__I__devirtual$_0(template) + 16 * args.length);
  templateStart = 0;
  i_0 = 0;
  while (i_0 < args.length) {
    placeholderStart = jl.indexOf_Ljava_lang_String_I_I__devirtual$(template, '%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    builder.append_2(jl.substring_II_Ljava_lang_String___devirtual$(template, templateStart, placeholderStart));
    builder.append_1(args[i_0++]);
    templateStart = placeholderStart + 2;
  }
  builder.append_2(jl.substring_I_Ljava_lang_String___devirtual$(template, templateStart));
  if (i_0 < args.length) {
    builder.append_2(' [');
    builder.append_1(args[i_0++]);
    while (i_0 < args.length) {
      builder.append_2(', ');
      builder.append_1(args[i_0++]);
    }
    builder.append_0(93);
  }
  return builder.toString$();
}
;
defineClass(334, 1, $intern_0);
cggcsi.$clinit_JsLogger = function $clinit_JsLogger(){
  cggcsi.$clinit_JsLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cggcsi.JsLogger = function JsLogger(){
  cggcsi.$clinit_JsLogger();
  Object_0.call(this);
  this.$init_32();
}
;
defineClass(165, 1, $intern_0, cggcsi.JsLogger);
_.$init_32 = function $init_32(){
}
;
_.log_0 = function log_5(message, e){
}
;
cggl.Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit = createForClass('com.google.gwt.core.shared.impl', 'JsLogger', 165, cggl.Ljava_lang_Object_2_classLit);
cggcsi.$clinit_StringCase = function $clinit_StringCase(){
  cggcsi.$clinit_StringCase = emptyMethod;
  jl.$clinit_Object();
}
;
cggcsi.toUpper = function toUpper(string){
  cggcsi.$clinit_StringCase();
  return jl.toUpperCase__Ljava_lang_String___devirtual$(string);
}
;
defineClass(421, 1, $intern_0);
cggdc.$clinit_Node = function $clinit_Node(){
  cggdc.$clinit_Node = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggdc.DOCUMENT_NODE = 9;
cggdc.ELEMENT_NODE = 1;
cggdc.TEXT_NODE = 3;
cggdc.$clinit_Document = function $clinit_Document(){
  cggdc.$clinit_Document = emptyMethod;
  cggdc.$clinit_Node();
}
;
cggdc.$getCompatMode = function $getCompatMode(this$static){
  cggdc.$clinit_Document();
  return this$static.compatMode;
}
;
cggdc.get_1 = function get_1(){
  cggdc.$clinit_Document();
  if (isScript()) {
    return cggdc.nativeGet();
  }
  if (isNull(cggdc.doc_0)) {
    cggdc.doc_0 = cggdc.nativeGet();
  }
  return cggdc.doc_0;
}
;
cggdc.nativeGet = function nativeGet(){
  return $doc;
}
;
cggels.$clinit_HasCloseHandlers = function $clinit_HasCloseHandlers(){
  cggels.$clinit_HasCloseHandlers = emptyMethod;
}
;
cggels.$clinit_HasResizeHandlers = function $clinit_HasResizeHandlers(){
  cggels.$clinit_HasResizeHandlers = emptyMethod;
}
;
cgges.$clinit_EventHandler = function $clinit_EventHandler(){
  cgges.$clinit_EventHandler = emptyMethod;
}
;
cgwbes.$clinit_Event = function $clinit_Event(){
  cgwbes.$clinit_Event = emptyMethod;
}
;
defineClass(397, 1, $intern_0);
cgges.$clinit_GwtEvent = function $clinit_GwtEvent(){
  cgges.$clinit_GwtEvent = emptyMethod;
}
;
defineClass(395, 397, $intern_0);
cgwbes.$clinit_Event$Type = function $clinit_Event$Type(){
  cgwbes.$clinit_Event$Type = emptyMethod;
}
;
defineClass(398, 1, $intern_0);
cgges.$clinit_GwtEvent$Type = function $clinit_GwtEvent$Type(){
  cgges.$clinit_GwtEvent$Type = emptyMethod;
}
;
defineClass(396, 398, $intern_0);
cgges.$clinit_HandlerManager = function $clinit_HandlerManager(){
  cgges.$clinit_HandlerManager = emptyMethod;
}
;
defineClass(400, 1, $intern_0);
cgwbes.$clinit_EventBus = function $clinit_EventBus(){
  cgwbes.$clinit_EventBus = emptyMethod;
}
;
defineClass(408, 1, $intern_0);
cgwbes.$clinit_SimpleEventBus = function $clinit_SimpleEventBus(){
  cgwbes.$clinit_SimpleEventBus = emptyMethod;
}
;
defineClass(403, 408, $intern_0);
cgges.$clinit_HandlerManager$Bus = function $clinit_HandlerManager$Bus(){
  cgges.$clinit_HandlerManager$Bus = emptyMethod;
}
;
defineClass(401, 403, $intern_0);
cgges.$clinit_HasHandlers = function $clinit_HasHandlers(){
  cgges.$clinit_HasHandlers = emptyMethod;
}
;
cgggc.$clinit_Position = function $clinit_Position(){
  cgggc.$clinit_Position = emptyMethod;
}
;
cgggc.$clinit_Position$Coordinates = function $clinit_Position$Coordinates(){
  cgggc.$clinit_Position$Coordinates = emptyMethod;
}
;
cgggc.$clinit_PositionImpl = function $clinit_PositionImpl(){
  cgggc.$clinit_PositionImpl = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cgggc.$clinit_PositionImpl$CoordinatesImpl = function $clinit_PositionImpl$CoordinatesImpl(){
  cgggc.$clinit_PositionImpl$CoordinatesImpl = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cgghc.$clinit_Header = function $clinit_Header(){
  cgghc.$clinit_Header = emptyMethod;
}
;
defineClass(420, 1, $intern_0);
cgghc.$clinit_Request = function $clinit_Request(){
  cgghc.$clinit_Request = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.Request = function Request(xmlHttpRequest, timeoutMillis, callback){
  cgghc.$clinit_Request();
  Object_0.call(this);
  this.$init_33();
  if (isNull(xmlHttpRequest)) {
    throw new jl.NullPointerException;
  }
  if (isNull(callback)) {
    throw new jl.NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new jl.IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  if (timeoutMillis > 0) {
    this.timer.schedule(timeoutMillis);
  }
}
;
cgghc.createResponse = function createResponse(xmlHttpRequest){
  return cgghc.get_2().createResponse(xmlHttpRequest);
}
;
defineClass(215, 1, $intern_0, cgghc.Request);
_.$init_33 = function $init_33(){
  this.timer = new cgghc.Request$1(this);
}
;
_.cancel_0 = function cancel(){
  var xhr;
  if (isNull(this.xmlHttpRequest)) {
    return;
  }
  this.timer.cancel_0();
  xhr = this.xmlHttpRequest;
  this.xmlHttpRequest = null;
  cggxc.$clearOnReadyStateChange(xhr);
  cggxc.$abort(xhr);
}
;
_.fireOnResponseReceived = function fireOnResponseReceived(callback){
  var response, xhr;
  if (isNull(this.xmlHttpRequest)) {
    return;
  }
  this.timer.cancel_0();
  xhr = this.xmlHttpRequest;
  this.xmlHttpRequest = null;
  response = cgghc.createResponse(xhr);
  callback.onResponseReceived(this, response);
}
;
_.fireOnTimeout = function fireOnTimeout(){
  cgghc.$clinit_Request();
  if (isNull(this.xmlHttpRequest)) {
    return;
  }
  this.cancel_0();
  this.callback.onError_0(this, new cgghc.RequestTimeoutException(this, this.timeoutMillis));
}
;
_.timeoutMillis = 0;
cggl.Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 215, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_Timer = function $clinit_Timer(){
  cgguc.$clinit_Timer = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.Timer = function Timer(){
  cgguc.$clinit_Timer();
  Object_0.call(this);
  this.$init_34();
}
;
cgguc.clearInterval_0 = function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}
;
cgguc.clearTimeout_0 = function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}
;
cgguc.createCallback = function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}
;
cgguc.setTimeout_0 = function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}
;
defineClass(218, 1, $intern_0);
_.$init_34 = function $init_34(){
  this.timerId = null;
  this.cancelCounter = 0;
}
;
_.cancel_0 = function cancel_0(){
  if (!this.isRunning()) {
    return;
  }
  this.cancelCounter++;
  if (this.isRepeating) {
    cgguc.clearInterval_0(this.timerId.intValue_0());
  }
   else {
    cgguc.clearTimeout_0(this.timerId.intValue_0());
  }
  this.timerId = null;
}
;
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  if (!this.isRepeating) {
    this.timerId = null;
  }
  this.run();
}
;
_.isRunning = function isRunning(){
  return isNotNull(this.timerId);
}
;
_.schedule = function schedule(delayMillis){
  if (delayMillis < 0) {
    throw new jl.IllegalArgumentException_0('must be non-negative');
  }
  if (this.isRunning()) {
    this.cancel_0();
  }
  this.isRepeating = false;
  this.timerId = jl.valueOf_15(cgguc.setTimeout_0(cgguc.createCallback(this, this.cancelCounter), delayMillis));
}
;
_.cancelCounter = 0;
_.isRepeating = false;
cggl.Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 218, cggl.Ljava_lang_Object_2_classLit);
cgghc.$clinit_Request$1 = function $clinit_Request$1(){
  cgghc.$clinit_Request$1 = emptyMethod;
  cgguc.$clinit_Timer();
}
;
cgghc.Request$1 = function Request$1(this$0){
  cgghc.$clinit_Request$1();
  this.this$01 = this$0;
  cgguc.Timer.call(this);
  this.$init_35();
}
;
defineClass(219, 218, $intern_0, cgghc.Request$1);
_.$init_35 = function $init_35(){
}
;
_.run = function run(){
  this.this$01.fireOnTimeout();
}
;
cggl.Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 219, cggl.Lcom_google_gwt_user_client_Timer_2_classLit);
cgghc.$clinit_Request$ImplHolder = function $clinit_Request$ImplHolder(){
  cgghc.$clinit_Request$ImplHolder = emptyMethod;
  jl.$clinit_Object();
  cgghc.impl_0 = new cgghc.Request$RequestImpl;
}
;
cgghc.get_2 = function get_2(){
  cgghc.$clinit_Request$ImplHolder();
  return cgghc.impl_0;
}
;
defineClass(418, 1, $intern_0);
cgghc.$clinit_Request$RequestImpl = function $clinit_Request$RequestImpl(){
  cgghc.$clinit_Request$RequestImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.Request$RequestImpl = function Request$RequestImpl(){
  cgghc.$clinit_Request$RequestImpl();
  Object_0.call(this);
  this.$init_36();
}
;
defineClass(95, 1, $intern_0, cgghc.Request$RequestImpl);
_.$init_36 = function $init_36(){
}
;
_.createResponse = function createResponse_0(xmlHttpRequest){
  return new cgghc.ResponseImpl(xmlHttpRequest);
}
;
cggl.Lcom_google_gwt_http_client_Request$RequestImpl_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImpl', 95, cggl.Ljava_lang_Object_2_classLit);
cgghc.$clinit_Request$RequestImplIE8And9 = function $clinit_Request$RequestImplIE8And9(){
  cgghc.$clinit_Request$RequestImplIE8And9 = emptyMethod;
  cgghc.$clinit_Request$RequestImpl();
}
;
cgghc.Request$RequestImplIE8And9 = function Request$RequestImplIE8And9(){
  cgghc.Request$RequestImpl.call(this);
  this.$init_37();
}
;
defineClass(250, 95, $intern_0);
_.$init_37 = function $init_37(){
}
;
_.createResponse = function createResponse_1(xmlHttpRequest){
  return new cgghc.Request$RequestImplIE8And9$1(this, xmlHttpRequest);
}
;
cggl.Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9', 250, cggl.Lcom_google_gwt_http_client_Request$RequestImpl_2_classLit);
cgghc.$clinit_Response = function $clinit_Response(){
  cgghc.$clinit_Response = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.Response = function Response(){
  cgghc.$clinit_Response();
  Object_0.call(this);
  this.$init_38();
}
;
defineClass(216, 1, $intern_0);
_.$init_38 = function $init_38(){
}
;
cgghc.SC_ACCEPTED = 202;
cgghc.SC_BAD_GATEWAY = 502;
cgghc.SC_BAD_REQUEST = 400;
cgghc.SC_CONFLICT = 409;
cgghc.SC_CONTINUE = 100;
cgghc.SC_CREATED = 201;
cgghc.SC_EXPECTATION_FAILED = 417;
cgghc.SC_FORBIDDEN = 403;
cgghc.SC_GATEWAY_TIMEOUT = 504;
cgghc.SC_GONE = 410;
cgghc.SC_HTTP_VERSION_NOT_SUPPORTED = 505;
cgghc.SC_INTERNAL_SERVER_ERROR = 500;
cgghc.SC_LENGTH_REQUIRED = 411;
cgghc.SC_METHOD_NOT_ALLOWED = 405;
cgghc.SC_MOVED_PERMANENTLY = 301;
cgghc.SC_MOVED_TEMPORARILY = 302;
cgghc.SC_MULTIPLE_CHOICES = 300;
cgghc.SC_NON_AUTHORITATIVE_INFORMATION = 203;
cgghc.SC_NOT_ACCEPTABLE = 406;
cgghc.SC_NOT_FOUND = 404;
cgghc.SC_NOT_IMPLEMENTED = 501;
cgghc.SC_NOT_MODIFIED = 304;
cgghc.SC_NO_CONTENT = 204;
cgghc.SC_OK = 200;
cgghc.SC_PARTIAL_CONTENT = 206;
cgghc.SC_PAYMENT_REQUIRED = 402;
cgghc.SC_PRECONDITION_FAILED = 412;
cgghc.SC_PROXY_AUTHENTICATION_REQUIRED = 407;
cgghc.SC_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
cgghc.SC_REQUEST_ENTITY_TOO_LARGE = 413;
cgghc.SC_RESET_CONTENT = 205;
cgghc.SC_SEE_OTHER = 303;
cgghc.SC_SERVICE_UNAVAILABLE = 503;
cgghc.SC_SWITCHING_PROTOCOLS = 101;
cgghc.SC_TEMPORARY_REDIRECT = 307;
cgghc.SC_UNAUTHORIZED = 401;
cgghc.SC_UNSUPPORTED_MEDIA_TYPE = 415;
cgghc.SC_USE_PROXY = 305;
cggl.Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 216, cggl.Ljava_lang_Object_2_classLit);
cgghc.$clinit_ResponseImpl = function $clinit_ResponseImpl(){
  cgghc.$clinit_ResponseImpl = emptyMethod;
  cgghc.$clinit_Response();
}
;
cgghc.ResponseImpl = function ResponseImpl(xmlHttpRequest){
  cgghc.$clinit_ResponseImpl();
  cgghc.Response.call(this);
  this.$init_39();
  this.xmlHttpRequest = xmlHttpRequest;
}
;
defineClass(70, 216, $intern_0, cgghc.ResponseImpl);
_.$init_39 = function $init_39(){
}
;
_.getStatusCode = function getStatusCode_0(){
  return cggxc.$getStatus(this.xmlHttpRequest);
}
;
_.getStatusText = function getStatusText(){
  return cggxc.$getStatusText(this.xmlHttpRequest);
}
;
_.getText = function getText(){
  return cggxc.$getResponseText(this.xmlHttpRequest);
}
;
_.isResponseReady = function isResponseReady(){
  return cggxc.$getReadyState(this.xmlHttpRequest) == 4;
}
;
cggl.Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 70, cggl.Lcom_google_gwt_http_client_Response_2_classLit);
cgghc.$clinit_Request$RequestImplIE8And9$1 = function $clinit_Request$RequestImplIE8And9$1(){
  cgghc.$clinit_Request$RequestImplIE8And9$1 = emptyMethod;
  cgghc.$clinit_ResponseImpl();
}
;
cgghc.Request$RequestImplIE8And9$1 = function Request$RequestImplIE8And9$1(this$1, $anonymous0){
  cgghc.$clinit_Request$RequestImplIE8And9$1();
  this.this$11 = this$1;
  cgghc.ResponseImpl.call(this, $anonymous0);
  this.$init_40();
}
;
defineClass(217, 70, $intern_0, cgghc.Request$RequestImplIE8And9$1);
_.$init_40 = function $init_40(){
}
;
_.getStatusCode = function getStatusCode_1(){
  var statusCode;
  statusCode = getClassPrototype(70).getStatusCode.call(this);
  return statusCode == 1223?204:statusCode;
}
;
cggl.Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 217, cggl.Lcom_google_gwt_http_client_ResponseImpl_2_classLit);
cgghc.$clinit_RequestBuilder = function $clinit_RequestBuilder(){
  cgghc.$clinit_RequestBuilder = emptyMethod;
  jl.$clinit_Object();
  cgghc.DELETE = new cgghc.RequestBuilder$Method('DELETE');
  cgghc.GET = new cgghc.RequestBuilder$Method('GET');
  cgghc.HEAD = new cgghc.RequestBuilder$Method('HEAD');
  cgghc.POST = new cgghc.RequestBuilder$Method('POST');
  cgghc.PUT = new cgghc.RequestBuilder$Method('PUT');
}
;
cgghc.RequestBuilder = function RequestBuilder(httpMethod, url_0){
  cgghc.$clinit_RequestBuilder();
  cgghc.RequestBuilder_0.call(this, isNull(httpMethod)?null:httpMethod.toString$(), url_0);
}
;
cgghc.RequestBuilder_0 = function RequestBuilder_0(httpMethod, url_0){
  Object_0.call(this);
  this.$init_41();
  cgghc.throwIfEmptyOrNull('httpMethod', httpMethod);
  cgghc.throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}
;
defineClass(83, 1, $intern_0);
_.$init_41 = function $init_41(){
}
;
_.doSend = function doSend(requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = cggxc.create_6();
  try {
    if (jsNotEquals(this.user, null) && jsNotEquals(this.password_0, null)) {
      cggxc.$open_1(xmlHttpRequest, this.httpMethod, this.url_0, this.user, this.password_0);
    }
     else if (jsNotEquals(this.user, null)) {
      cggxc.$open_0(xmlHttpRequest, this.httpMethod, this.url_0, this.user);
    }
     else {
      cggxc.$open(xmlHttpRequest, this.httpMethod, this.url_0);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 24)) {
      e = $e0;
      requestPermissionException = new cgghc.RequestPermissionException(this.url_0);
      requestPermissionException.initCause(new cgghc.RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap_5($e0);
  }
  this.setHeaders(xmlHttpRequest);
  if (this.includeCredentials) {
    cggxc.$setWithCredentials(xmlHttpRequest, true);
  }
  request = new cgghc.Request(xmlHttpRequest, this.timeoutMillis, callback);
  cggxc.$setOnReadyStateChange(xmlHttpRequest, new cgghc.RequestBuilder$1(this, request, callback));
  try {
    cggxc.$send(xmlHttpRequest, requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 24)) {
      e = $e1;
      throw new cgghc.RequestException(e.getMessage());
    }
     else 
      throw unwrap_5($e1);
  }
  return request;
}
;
_.getPassword = function getPassword(){
  return this.password_0;
}
;
_.getUrl = function getUrl_0(){
  return this.url_0;
}
;
_.sendRequest = function sendRequest(requestData, callback){
  cgghc.throwIfNull('callback', callback);
  return this.doSend(requestData, callback);
}
;
_.setHeader = function setHeader(header, value_0){
  cgghc.throwIfEmptyOrNull('header', header);
  cgghc.throwIfEmptyOrNull('value', value_0);
  if (isNull(this.headers)) {
    this.headers = new ju.HashMap;
  }
  this.headers.put_0(header, value_0);
}
;
_.setHeaders = function setHeaders(xmlHttpRequest){
  var e, header, header$iterator;
  if (isNotNull(this.headers) && this.headers.size_1() > 0) {
    for (header$iterator = this.headers.entrySet_0().iterator(); header$iterator.hasNext();) {
      header = header$iterator.next_0();
      try {
        cggxc.$setRequestHeader(xmlHttpRequest, header.getKey_0(), header.getValue_1());
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 24)) {
          e = $e0;
          throw new cgghc.RequestException(e.getMessage());
        }
         else 
          throw unwrap_5($e0);
      }
    }
  }
   else {
    cggxc.$setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}
;
_.includeCredentials = false;
_.timeoutMillis = 0;
cggl.Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 83, cggl.Ljava_lang_Object_2_classLit);
cgghc.$clinit_RequestBuilder$1 = function $clinit_RequestBuilder$1(){
  cgghc.$clinit_RequestBuilder$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.RequestBuilder$1 = function RequestBuilder$1(this$0, val$request, val$callback){
  cgghc.$clinit_RequestBuilder$1();
  this.this$01 = this$0;
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
  Object_0.call(this);
  this.$init_42();
}
;
defineClass(135, 1, $intern_0, cgghc.RequestBuilder$1);
_.$init_42 = function $init_42(){
}
;
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (cggxc.$getReadyState(xhr) == 4) {
    cggxc.$clearOnReadyStateChange(xhr);
    this.val$request2.fireOnResponseReceived(this.val$callback3);
  }
}
;
cggl.Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 135, cggl.Ljava_lang_Object_2_classLit);
cgghc.$clinit_RequestBuilder$Method = function $clinit_RequestBuilder$Method(){
  cgghc.$clinit_RequestBuilder$Method = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.RequestBuilder$Method = function RequestBuilder$Method(name_0){
  cgghc.$clinit_RequestBuilder$Method();
  Object_0.call(this);
  this.$init_43();
  this.name_0 = name_0;
}
;
defineClass(50, 1, $intern_0, cgghc.RequestBuilder$Method);
_.$init_43 = function $init_43(){
}
;
_.toString$ = function toString_3(){
  return this.name_0;
}
;
cggl.Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 50, cggl.Ljava_lang_Object_2_classLit);
cgghc.$clinit_RequestCallback = function $clinit_RequestCallback(){
  cgghc.$clinit_RequestCallback = emptyMethod;
}
;
cgghc.$clinit_RequestException = function $clinit_RequestException(){
  cgghc.$clinit_RequestException = emptyMethod;
  jl.$clinit_Exception();
}
;
cgghc.RequestException = function RequestException(message){
  cgghc.$clinit_RequestException();
  jl.Exception_0.call(this, message);
  this.$init_44();
}
;
defineClass(10, 7, $intern_8, cgghc.RequestException);
_.$init_44 = function $init_44(){
}
;
cggl.Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 10, cggl.Ljava_lang_Exception_2_classLit);
cgghc.$clinit_RequestPermissionException = function $clinit_RequestPermissionException(){
  cgghc.$clinit_RequestPermissionException = emptyMethod;
  cgghc.$clinit_RequestException();
}
;
cgghc.RequestPermissionException = function RequestPermissionException(url_0){
  cgghc.$clinit_RequestPermissionException();
  cgghc.RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
  this.$init_45();
  this.url_0 = url_0;
}
;
defineClass(225, 10, $intern_8, cgghc.RequestPermissionException);
_.$init_45 = function $init_45(){
}
;
cggl.Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 225, cggl.Lcom_google_gwt_http_client_RequestException_2_classLit);
cgghc.$clinit_RequestTimeoutException = function $clinit_RequestTimeoutException(){
  cgghc.$clinit_RequestTimeoutException = emptyMethod;
  cgghc.$clinit_RequestException();
}
;
cgghc.RequestTimeoutException = function RequestTimeoutException(request, timeoutMillis){
  cgghc.$clinit_RequestTimeoutException();
  cgghc.RequestException.call(this, cgghc.formatMessage(timeoutMillis));
  this.$init_46();
  this.request = request;
  this.timeoutMillis = timeoutMillis;
}
;
cgghc.formatMessage = function formatMessage(timeoutMillis){
  return 'A request timeout has expired after ' + timeoutMillis + ' ms';
}
;
defineClass(230, 10, $intern_8, cgghc.RequestTimeoutException);
_.$init_46 = function $init_46(){
}
;
_.timeoutMillis = 0;
cggl.Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 230, cggl.Lcom_google_gwt_http_client_RequestException_2_classLit);
cgghc.$clinit_ResponseImpl$1 = function $clinit_ResponseImpl$1(){
  cgghc.$clinit_ResponseImpl$1 = emptyMethod;
}
;
defineClass(419, 420, $intern_0);
cgghc.$clinit_StringValidator = function $clinit_StringValidator(){
  cgghc.$clinit_StringValidator = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.throwIfEmptyOrNull = function throwIfEmptyOrNull(name_0, value_0){
  cgghc.$clinit_StringValidator();
  cgghc.throwIfNull(name_0, value_0);
  if (0 == jl.length__I__devirtual$_0(jl.trim__Ljava_lang_String___devirtual$(value_0))) {
    throw new jl.IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}
;
cgghc.throwIfNull = function throwIfNull(name_0, value_0){
  cgghc.$clinit_StringValidator();
  if (jsEquals(null, value_0)) {
    throw new jl.NullPointerException_0(name_0 + ' cannot be null');
  }
}
;
defineClass(422, 1, $intern_0);
cgghc.$clinit_URL = function $clinit_URL(){
  cgghc.$clinit_URL = emptyMethod;
  jl.$clinit_Object();
}
;
cgghc.decodeQueryString = function decodeQueryString(encodedURLComponent){
  cgghc.$clinit_URL();
  cgghc.throwIfNull('encodedURLComponent', encodedURLComponent);
  return cgghc.decodeQueryStringImpl(encodedURLComponent);
}
;
cgghc.decodeQueryStringImpl = function decodeQueryStringImpl(encodedURLComponent){
  var regexp = /\+/g;
  return decodeURIComponent(encodedURLComponent.replace(regexp, '%20'));
}
;
defineClass(426, 1, $intern_0);
cggic.$clinit_CurrencyData = function $clinit_CurrencyData(){
  cggic.$clinit_CurrencyData = emptyMethod;
}
;
cggici.$clinit_CurrencyDataJso = function $clinit_CurrencyDataJso(){
  cggici.$clinit_CurrencyDataJso = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggjc.$clinit_JSONValue = function $clinit_JSONValue(){
  cggjc.$clinit_JSONValue = emptyMethod;
  jl.$clinit_Object();
}
;
cggjc.JSONValue = function JSONValue(){
  cggjc.$clinit_JSONValue();
  Object_0.call(this);
  this.$init_47();
}
;
defineClass(39, 1, $intern_0);
_.$init_47 = function $init_47(){
}
;
cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 39, cggl.Ljava_lang_Object_2_classLit);
cggjc.$clinit_JSONArray = function $clinit_JSONArray(){
  cggjc.$clinit_JSONArray = emptyMethod;
  cggjc.$clinit_JSONValue();
}
;
cggjc.JSONArray = function JSONArray(){
  cggjc.$clinit_JSONArray();
  cggjc.JSONValue.call(this);
  this.$init_48();
  this.jsArray = cggcc.createArray();
}
;
cggjc.JSONArray_0 = function JSONArray_0(arr){
  cggjc.$clinit_JSONArray();
  cggjc.JSONValue.call(this);
  this.$init_48();
  this.jsArray = arr;
}
;
cggjc.unwrap = function unwrap(value_0){
  return value_0.jsArray;
}
;
defineClass(44, 39, {44:1, 1:1}, cggjc.JSONArray, cggjc.JSONArray_0);
_.$init_48 = function $init_48(){
}
;
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 44)) {
    return false;
  }
  return cggcc.$equals_0(this.jsArray, other.jsArray);
}
;
_.get_0 = function get_3(index_0){
  var v = this.jsArray[index_0];
  var func = (cggjc.$clinit_JSONParser() , cggjc.typeMap)[typeof v];
  return func?func(v):cggjc.throwUnknownTypeException(typeof v);
}
;
_.getJavaScriptObject = function getJavaScriptObject(){
  return this.jsArray;
}
;
_.getUnwrapper = function getUnwrapper(){
  return cggjc.unwrap;
}
;
_.hashCode$ = function hashCode_2(){
  return cggcc.$hashCode_0(this.jsArray);
}
;
_.set_0 = function set_1(index_0, value_0){
  var previous;
  previous = this.get_0(index_0);
  this.set0(index_0, value_0);
  return previous;
}
;
_.set0 = function set0(index_0, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this.jsArray[index_0] = value_0;
}
;
_.size_1 = function size_2(){
  return this.jsArray.length;
}
;
_.toString$ = function toString_4(){
  var c, i_0, sb;
  sb = new jl.StringBuilder_1('[');
  for (i_0 = 0 , c = this.size_1(); i_0 < c; i_0++) {
    if (i_0 > 0) {
      sb.append_2(',');
    }
    sb.append_1(this.get_0(i_0));
  }
  sb.append_2(']');
  return sb.toString$();
}
;
cggl.Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 44, cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit);
cggjc.$clinit_JSONBoolean = function $clinit_JSONBoolean(){
  cggjc.$clinit_JSONBoolean = emptyMethod;
  cggjc.$clinit_JSONValue();
  cggjc.FALSE = new cggjc.JSONBoolean(false);
  cggjc.TRUE = new cggjc.JSONBoolean(true);
}
;
cggjc.JSONBoolean = function JSONBoolean(value_0){
  cggjc.JSONValue.call(this);
  this.$init_49();
  this.value_0 = value_0;
}
;
cggjc.getInstance = function getInstance(b){
  cggjc.$clinit_JSONBoolean();
  if (b) {
    return cggjc.TRUE;
  }
   else {
    return cggjc.FALSE;
  }
}
;
cggjc.unwrap_0 = function unwrap_0(value_0){
  return value_0.value_0;
}
;
defineClass(98, 39, $intern_0, cggjc.JSONBoolean);
_.$init_49 = function $init_49(){
}
;
_.booleanValue = function booleanValue(){
  return this.value_0;
}
;
_.getUnwrapper = function getUnwrapper_0(){
  return cggjc.unwrap_0;
}
;
_.toString$ = function toString_5(){
  return jl.toString_14(this.value_0);
}
;
_.value_0 = false;
cggl.Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 98, cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit);
cggjc.$clinit_JSONException = function $clinit_JSONException(){
  cggjc.$clinit_JSONException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggjc.JSONException = function JSONException(message){
  cggjc.$clinit_JSONException();
  jl.RuntimeException_0.call(this, message);
  this.$init_50();
}
;
cggjc.JSONException_0 = function JSONException_0(cause){
  cggjc.$clinit_JSONException();
  jl.RuntimeException_3.call(this, cause);
  this.$init_50();
}
;
defineClass(76, 8, $intern_5, cggjc.JSONException, cggjc.JSONException_0);
_.$init_50 = function $init_50(){
}
;
cggl.Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 76, cggl.Ljava_lang_RuntimeException_2_classLit);
cggjc.$clinit_JSONNull = function $clinit_JSONNull(){
  cggjc.$clinit_JSONNull = emptyMethod;
  cggjc.$clinit_JSONValue();
  cggjc.instance_0 = new cggjc.JSONNull;
}
;
cggjc.JSONNull = function JSONNull(){
  cggjc.JSONValue.call(this);
  this.$init_51();
}
;
cggjc.getInstance_0 = function getInstance_0(){
  cggjc.$clinit_JSONNull();
  return cggjc.instance_0;
}
;
cggjc.unwrap_1 = function unwrap_1(){
  return null;
}
;
defineClass(234, 39, $intern_0, cggjc.JSONNull);
_.$init_51 = function $init_51(){
}
;
_.getUnwrapper = function getUnwrapper_1(){
  return cggjc.unwrap_1;
}
;
_.toString$ = function toString_6(){
  return 'null';
}
;
cggl.Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 234, cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit);
cggjc.$clinit_JSONNumber = function $clinit_JSONNumber(){
  cggjc.$clinit_JSONNumber = emptyMethod;
  cggjc.$clinit_JSONValue();
}
;
cggjc.JSONNumber = function JSONNumber(value_0){
  cggjc.$clinit_JSONNumber();
  cggjc.JSONValue.call(this);
  this.$init_52();
  this.value_0 = value_0;
}
;
cggjc.unwrap_2 = function unwrap_2(value_0){
  return value_0.value_0;
}
;
defineClass(75, 39, {75:1, 1:1}, cggjc.JSONNumber);
_.$init_52 = function $init_52(){
}
;
_.doubleValue = function doubleValue(){
  return this.value_0;
}
;
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 75)) {
    return false;
  }
  return this.value_0 == other.value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return cggjc.unwrap_2;
}
;
_.hashCode$ = function hashCode_3(){
  return jl.valueOf_13(this.value_0).hashCode$();
}
;
_.toString$ = function toString_7(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
cggl.Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 75, cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit);
cggjc.$clinit_JSONObject = function $clinit_JSONObject(){
  cggjc.$clinit_JSONObject = emptyMethod;
  cggjc.$clinit_JSONValue();
}
;
cggjc.JSONObject = function JSONObject(){
  cggjc.$clinit_JSONObject();
  cggjc.JSONObject_0.call(this, createObject());
}
;
cggjc.JSONObject_0 = function JSONObject_0(jsValue){
  cggjc.$clinit_JSONObject();
  cggjc.JSONValue.call(this);
  this.$init_53();
  this.jsObject = jsValue;
}
;
cggjc.unwrap_3 = function unwrap_3(value_0){
  return value_0.jsObject;
}
;
defineClass(11, 39, {11:1, 1:1}, cggjc.JSONObject, cggjc.JSONObject_0);
_.$init_53 = function $init_53(){
}
;
_.addAllKeys = function addAllKeys(s){
  var jsObject = this.jsObject;
  for (var key in jsObject) {
    if (jsObject.hasOwnProperty(key)) {
      s.add_1(key);
    }
  }
}
;
_.computeKeys = function computeKeys(){
  var result;
  if (isScript()) {
    return this.computeKeys0(initDim(cggl.Ljava_lang_String_2_classLit, $intern_2, 2, 0, 4, 1));
  }
   else {
    result = new ju.ArrayList;
    this.addAllKeys(result);
    return result.toArray(initDim(cggl.Ljava_lang_String_2_classLit, $intern_2, 2, result.size_1(), 4, 1));
  }
}
;
_.computeKeys0 = function computeKeys0(result){
  var jsObject = this.jsObject;
  var i_0 = 0;
  for (var key in jsObject) {
    if (jsObject.hasOwnProperty(key)) {
      result[i_0++] = key;
    }
  }
  return result;
}
;
_.computeSize = function computeSize(){
  var jsObject = this.jsObject;
  var size_0 = 0;
  for (var key in jsObject) {
    if (jsObject.hasOwnProperty(key)) {
      ++size_0;
    }
  }
  return size_0;
}
;
_.containsKey = function containsKey(key){
  return key in this.jsObject;
}
;
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 11)) {
    return false;
  }
  return cggcc.$equals_0(this.jsObject, other.jsObject);
}
;
_.get_1 = function get_4(key){
  if (jsEquals(key, null)) {
    throw new jl.NullPointerException;
  }
  return this.get0(key);
}
;
_.get0 = function get0_0(key){
  var jsObject = this.jsObject;
  var v;
  key = String(key);
  if (jsObject.hasOwnProperty(key)) {
    v = jsObject[key];
  }
  var func = (cggjc.$clinit_JSONParser() , cggjc.typeMap)[typeof v];
  var ret = func?func(v):cggjc.throwUnknownTypeException(typeof v);
  return ret;
}
;
_.getJavaScriptObject = function getJavaScriptObject_0(){
  return this.jsObject;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return cggjc.unwrap_3;
}
;
_.hashCode$ = function hashCode_4(){
  return cggcc.$hashCode_0(this.jsObject);
}
;
_.keySet_0 = function keySet(){
  var keys_0;
  keys_0 = this.computeKeys();
  return new cggjc.JSONObject$1(this, keys_0);
}
;
_.put = function put(key, jsonValue){
  var previous;
  if (jsEquals(key, null)) {
    throw new jl.NullPointerException;
  }
  previous = this.get_1(key);
  this.put0(key, jsonValue);
  return previous;
}
;
_.put0 = function put0_0(key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this.jsObject[key] = func(value_0);
  }
   else {
    delete this.jsObject[key];
  }
}
;
_.size_1 = function size_3(){
  return this.computeSize();
}
;
_.toString$ = function toString_8(){
  var first, key, key$array, key$index, key$max, keys_0, sb;
  sb = new jl.StringBuilder_1('{');
  first = true;
  keys_0 = this.computeKeys();
  for (key$array = keys_0 , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
    key = key$array[key$index];
    if (first) {
      first = false;
    }
     else {
      sb.append_2(', ');
    }
    sb.append_2(cggcc.escapeValue(key));
    sb.append_2(':');
    sb.append_1(this.get_1(key));
  }
  sb.append_2('}');
  return sb.toString$();
}
;
cggl.Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 11, cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit);
ju.$clinit_AbstractCollection = function $clinit_AbstractCollection(){
  ju.$clinit_AbstractCollection = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractCollection = function AbstractCollection(){
  ju.$clinit_AbstractCollection();
  Object_0.call(this);
  this.$init_54();
}
;
defineClass(81, 1, $intern_0);
_.$init_54 = function $init_54(){
}
;
_.add_1 = function add_2(o){
  throw new jl.UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.advanceToFind = function advanceToFind(o, remove){
  var e, iter;
  for (iter = this.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (ju.equals_25(o, e)) {
      if (remove) {
        iter.remove_1();
      }
      return true;
    }
  }
  return false;
}
;
_.clear_0 = function clear_1(){
  var iter;
  for (iter = this.iterator(); iter.hasNext();) {
    iter.next_0();
    iter.remove_1();
  }
}
;
_.contains = function contains(o){
  return this.advanceToFind(o, false);
}
;
_.containsAll = function containsAll(c){
  var e, e$iterator;
  cggcsi.checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this.contains(e)) {
      return false;
    }
  }
  return true;
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.toArray = function toArray(a){
  var i_0, it, result, size_0;
  size_0 = this.size_1();
  if (a.length < size_0) {
    a = createFrom_0(a, size_0);
  }
  result = a;
  it = this.iterator();
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    result[i_0] = it.next_0();
  }
  if (a.length > size_0) {
    a[size_0] = null;
  }
  return a;
}
;
_.toString$ = function toString_9(){
  var comma, e, e$iterator, sb;
  sb = new jl.StringBuilder_1('[');
  comma = false;
  for (e$iterator = this.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (comma) {
      sb.append_2(', ');
    }
     else {
      comma = true;
    }
    sb.append_2(e === this?'(this Collection)':valueOf_23(e));
  }
  sb.append_2(']');
  return sb.toString$();
}
;
cggl.Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 81, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractSet = function $clinit_AbstractSet(){
  ju.$clinit_AbstractSet = emptyMethod;
  ju.$clinit_AbstractCollection();
}
;
ju.AbstractSet = function AbstractSet(){
  ju.$clinit_AbstractSet();
  ju.AbstractCollection.call(this);
  this.$init_55();
}
;
defineClass(60, 81, $intern_9);
_.$init_55 = function $init_55(){
}
;
_.equals$ = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 35)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return this.containsAll(other);
}
;
_.hashCode$ = function hashCode_5(){
  return ju.hashCode_28(this);
}
;
cggl.Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 60, cggl.Ljava_util_AbstractCollection_2_classLit);
cggjc.$clinit_JSONObject$1 = function $clinit_JSONObject$1(){
  cggjc.$clinit_JSONObject$1 = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
cggjc.JSONObject$1 = function JSONObject$1(this$0, val$keys){
  cggjc.$clinit_JSONObject$1();
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
  ju.AbstractSet.call(this);
  this.$init_56();
}
;
defineClass(220, 60, $intern_9, cggjc.JSONObject$1);
_.$init_56 = function $init_56(){
}
;
_.contains = function contains_0(o){
  return isJavaString(o) && this.this$01.containsKey(o);
}
;
_.iterator = function iterator_0(){
  return ju.asList(this.val$keys2).iterator();
}
;
_.size_1 = function size_4(){
  return this.val$keys2.length;
}
;
cggl.Lcom_google_gwt_json_client_JSONObject$1_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject/1', 220, cggl.Ljava_util_AbstractSet_2_classLit);
cggjc.$clinit_JSONParser = function $clinit_JSONParser(){
  cggjc.$clinit_JSONParser = emptyMethod;
  jl.$clinit_Object();
  cggjc.typeMap = cggjc.initTypeMap();
}
;
cggjc.createBoolean = function createBoolean(v){
  return cggjc.getInstance(v);
}
;
cggjc.createNumber = function createNumber(v){
  return new cggjc.JSONNumber(v);
}
;
cggjc.createObject_0 = function createObject_0(o){
  if (!o) {
    return cggjc.getInstance_0();
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = cggjc.typeMap[typeof v];
    return func?func(v):cggjc.throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new cggjc.JSONArray_0(o);
  }
   else {
    return new cggjc.JSONObject_0(o);
  }
}
;
cggjc.createString = function createString(v){
  return new cggjc.JSONString(v);
}
;
cggjc.createUndefined = function createUndefined(){
  return null;
}
;
cggjc.evaluate = function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return cggjc.throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = cggcc.escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return cggjc.throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = cggjc.typeMap[typeof v];
  return func?func(v):cggjc.throwUnknownTypeException(typeof v);
}
;
cggjc.initTypeMap = function initTypeMap(){
  return {'boolean':cggjc.createBoolean, number:cggjc.createNumber, string:cggjc.createString, object:cggjc.createObject_0, 'function':cggjc.createObject_0, undefined:cggjc.createUndefined};
}
;
cggjc.parse_1 = function parse_1(jsonString, strict){
  var ex;
  if (jsEquals(jsonString, null)) {
    throw new jl.NullPointerException;
  }
  if (jl.length__I__devirtual$_0(jsonString) == 0) {
    throw new jl.IllegalArgumentException_0('empty argument');
  }
  try {
    return cggjc.evaluate(jsonString, strict);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 24)) {
      ex = $e0;
      throw new cggjc.JSONException_0(ex);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
cggjc.parseStrict = function parseStrict(jsonString){
  cggjc.$clinit_JSONParser();
  return cggjc.parse_1(jsonString, true);
}
;
cggjc.throwJSONException = function throwJSONException(message){
  throw new cggjc.JSONException(message);
}
;
cggjc.throwUnknownTypeException = function throwUnknownTypeException(typeString){
  cggjc.$clinit_JSONParser();
  throw new cggjc.JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}
;
defineClass(447, 1, $intern_0);
cggjc.$clinit_JSONString = function $clinit_JSONString(){
  cggjc.$clinit_JSONString = emptyMethod;
  cggjc.$clinit_JSONValue();
}
;
cggjc.JSONString = function JSONString(value_0){
  cggjc.$clinit_JSONString();
  cggjc.JSONValue.call(this);
  this.$init_57();
  if (jsEquals(value_0, null)) {
    throw new jl.NullPointerException;
  }
  this.value_0 = value_0;
}
;
cggjc.unwrap_4 = function unwrap_4(value_0){
  return value_0.value_0;
}
;
defineClass(13, 39, {13:1, 1:1}, cggjc.JSONString);
_.$init_57 = function $init_57(){
}
;
_.equals$ = function equals_5(other){
  if (!instanceOf(other, 13)) {
    return false;
  }
  return jl.equals_Ljava_lang_Object__Z__devirtual$_0(this.value_0, other.value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return cggjc.unwrap_4;
}
;
_.hashCode$ = function hashCode_6(){
  return jl.hashCode__I__devirtual$_0(this.value_0);
}
;
_.stringValue = function stringValue(){
  return this.value_0;
}
;
_.toString$ = function toString_10(){
  return cggcc.escapeValue(this.value_0);
}
;
cggl.Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 13, cggl.Lcom_google_gwt_json_client_JSONValue_2_classLit);
cggl.$clinit_Array = function $clinit_Array(){
  cggl.$clinit_Array = emptyMethod;
  jl.$clinit_Object();
}
;
function Array_0(){
  Object_0.call(this);
  this.$init_58();
}

cggl.arraySlice = function arraySlice(array, fromIndex, toIndex){
  return array.slice(fromIndex, toIndex);
}
;
cggl.asArray = function asArray(array){
  return array;
}
;
function clone(array){
  return cloneSubrange(array, 0, array.length);
}

function cloneSubrange(array, fromIndex, toIndex){
  var result;
  result = cggl.arraySlice(array, fromIndex, toIndex);
  initValues(jl.getClass__Ljava_lang_Class___devirtual$(array), getCastableTypeMap(array), cggl.getElementTypeId(array), cggl.getElementTypeCategory(array), result);
  return cggl.asArray(result);
}

cggl.createFrom = function createFrom(array){
  return createFrom_0(array, array.length);
}
;
function createFrom_0(array, length_0){
  cggl.$clinit_Array();
  var result;
  result = cggl.initializeArrayElementsWithDefaults(0, length_0);
  initValues(jl.getClass__Ljava_lang_Class___devirtual$(array), getCastableTypeMap(array), cggl.getElementTypeId(array), cggl.getElementTypeCategory(array), result);
  return cggl.asArray(result);
}

function getClassLiteralForArray(clazz, dimensions){
  cggl.$clinit_Array();
  return cggl.getClassLiteralForArrayImpl(clazz, dimensions);
}

cggl.getClassLiteralForArrayImpl = function getClassLiteralForArrayImpl(clazz, dimensions){
  return jl.getClassLiteralForArray_0(clazz, dimensions);
}
;
cggl.getElementTypeCategory = function getElementTypeCategory(array){
  return array.__elementTypeCategory$;
}
;
cggl.getElementTypeId = function getElementTypeId(array){
  return array.__elementTypeId$;
}
;
function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  cggl.$clinit_Array();
  var result;
  result = cggl.initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initDims(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return cggl.initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

cggl.initDims_0 = function initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i_0, isLastDim, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDim = index_0 == count - 1;
  elementTypeCategory = isLastDim?leafElementTypeCategory:0;
  result = cggl.initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDim) {
    ++index_0;
    for (i_0 = 0; i_0 < length_0; ++i_0) {
      cggl.set_2(result, i_0, cggl.initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count));
    }
  }
  return result;
}
;
function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  cggl.$clinit_Array();
  cggl.setClass(array, arrayClass);
  setCastableTypeMap(array, castableTypeMap);
  setTypeMarker(array);
  cggl.setElementTypeId(array, elementTypeId);
  cggl.setElementTypeCategory(array, elementTypeCategory);
  return array;
}

cggl.initializeArrayElementsWithDefaults = function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i_0 = 0; i_0 < length_0; ++i_0) {
    array[i_0] = initValue;
  }
  return array;
}
;
function nativeArrayInsert(src_0, srcOfs, dest, destOfs, len){
  cggl.nativeArraySplice(src_0, srcOfs, dest, destOfs, len, false);
}

cggl.nativeArraySplice = function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}
;
function nativeArraycopy(src_0, srcOfs, dest, destOfs, len){
  cggl.nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

cggl.set_2 = function set_2(array, index_0, value_0){
  return array[index_0] = value_0;
}
;
function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (jsNotEquals(value_0, null)) {
    switch (cggl.getElementTypeCategory(array)) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new jl.ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = cggl.getElementTypeId(array);
          if (!canCast(value_0, elementTypeId)) {
            throw new jl.ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!isJavaScriptObject(value_0)) {
          throw new jl.ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = cggl.getElementTypeId(array);
          if (!isJavaScriptObject(value_0) && !canCast(value_0, elementTypeId)) {
            throw new jl.ArrayStoreException;
          }
          break;
        }

    }
  }
  return cggl.set_2(array, index_0, value_0);
}

cggl.setClass = function setClass(o, clazz){
  o.___clazz$ = clazz;
}
;
cggl.setElementTypeCategory = function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}
;
cggl.setElementTypeId = function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}
;
defineClass(273, 1, $intern_0);
_.$init_58 = function $init_58(){
}
;
cggl.TYPE_JAVA_LANG_OBJECT = 3;
cggl.TYPE_JAVA_LANG_STRING = 4;
cggl.TYPE_JAVA_OBJECT = 0;
cggl.TYPE_JAVA_OBJECT_OR_JSO = 1;
cggl.TYPE_JSO = 2;
cggl.TYPE_JS_INTERFACE = 5;
cggl.TYPE_PRIMITIVE_BOOLEAN = 8;
cggl.TYPE_PRIMITIVE_LONG = 6;
cggl.TYPE_PRIMITIVE_NUMBER = 7;
cggl.$clinit_Exceptions = function $clinit_Exceptions(){
  cggl.$clinit_Exceptions = emptyMethod;
  jl.$clinit_Object();
}
;
function Exceptions(){
  Object_0.call(this);
  this.$init_60();
}

cggl.cacheJavaScriptException = function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}
;
function checkNotNull_1(arg){
  if (arg == null) {
    throw new TypeError('null pointer');
  }
  return arg;
}

cggl.getCachedJavaScriptException = function getCachedJavaScriptException(e){
  return e && e.__gwt$exception;
}
;
function makeAssertionError(){
  return new jl.AssertionError;
}

function makeAssertionError_Object(message){
  return new jl.AssertionError_5(message);
}

function makeAssertionError_boolean(message){
  return new jl.AssertionError_7(message);
}

function makeAssertionError_char(message){
  return new jl.AssertionError_0(message);
}

function makeAssertionError_double(message){
  return new jl.AssertionError_1(message);
}

function makeAssertionError_float(message){
  return new jl.AssertionError_2(message);
}

function makeAssertionError_int(message){
  return new jl.AssertionError_3(message);
}

function makeAssertionError_long(message){
  return new jl.AssertionError_4(message);
}

function safeClose(resource, mainException){
  var e;
  if (isNull(resource)) {
    return mainException;
  }
  try {
    resource.close_0();
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 9)) {
      e = $e0;
      if (isNull(mainException)) {
        return e;
      }
      mainException.addSuppressed(e);
    }
     else 
      throw unwrap_5($e0);
  }
  return mainException;
}

function unwrap_5(e){
  cggl.$clinit_Exceptions();
  var jse;
  if (instanceOf(e, 24)) {
    jse = e;
    if (jse.isThrownSet()) {
      return jse.getThrown();
    }
  }
  return e;
}

function wrap(e){
  cggl.$clinit_Exceptions();
  var jse;
  if (instanceOf(e, 9)) {
    return e;
  }
  jse = cggl.getCachedJavaScriptException(e);
  if (isNull(jse)) {
    jse = new cggcc.JavaScriptException(e);
    cggcci.captureStackTrace(jse, e);
    cggl.cacheJavaScriptException(e, jse);
  }
  return jse;
}

defineClass(239, 1, $intern_0);
_.$init_60 = function $init_60(){
}
;
cggl.Lcom_google_gwt_lang_Exceptions_2_classLit = createForClass('com.google.gwt.lang', 'Exceptions', 239, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLibBase = function $clinit_LongLibBase(){
  cggl.$clinit_LongLibBase = emptyMethod;
  jl.$clinit_Object();
  cggl.instance_1 = new cggl.LongLibBase$LongEmul;
  cggl.BITS01 = 2 * 22;
  cggl.BITS2 = 64 - 44;
  cggl.MASK = (1 << 22) - 1;
  cggl.MASK_2 = (1 << 20) - 1;
  cggl.SIGN_BIT = 20 - 1;
  cggl.SIGN_BIT_VALUE = 1 << 19;
  cggl.TWO_PWR_31_DBL = $intern_3 * 32768;
  cggl.TWO_PWR_32_DBL = $intern_3 * $intern_3;
  cggl.TWO_PWR_44_DBL = $intern_10 * $intern_10;
  cggl.TWO_PWR_63_DBL = $intern_11 * 2147483648;
}
;
cggl.LongLibBase = function LongLibBase(){
  cggl.$clinit_LongLibBase();
  Object_0.call(this);
  this.$init_61();
}
;
cggl.create_2 = function create_2(){
  if (cggl.RUN_IN_JVM) {
    return new cggl.LongLibBase$LongEmul;
  }
  return cggl.create0(0, 0, 0);
}
;
cggl.create_3 = function create_3(value_0){
  cggl.$clinit_LongLibBase();
  var a, a0, a1, a2;
  a0 = value_0 & $intern_12;
  a1 = value_0 >> 22 & $intern_12;
  a2 = value_0 < 0?$intern_13:0;
  if (cggl.RUN_IN_JVM) {
    a = new cggl.LongLibBase$LongEmul;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return cggl.create0(a0, a1, a2);
}
;
cggl.create_4 = function create_4(a0, a1, a2){
  cggl.$clinit_LongLibBase();
  var a;
  if (cggl.RUN_IN_JVM) {
    a = new cggl.LongLibBase$LongEmul;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return cggl.create0(a0, a1, a2);
}
;
cggl.create_5 = function create_5(a){
  var b;
  if (cggl.RUN_IN_JVM) {
    b = new cggl.LongLibBase$LongEmul;
    b.l_0 = cggl.getL(a);
    b.m_0 = cggl.getM(a);
    b.h_0 = cggl.getH(a);
    return b;
  }
  return cggl.create0(cggl.getL(a), cggl.getM(a), cggl.getH(a));
}
;
cggl.create0 = function create0(l, m, h){
  return {l:l, m:m, h:h};
}
;
cggl.divMod = function divMod(a, b, computeRemainder){
  cggl.$clinit_LongLibBase();
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (cggl.isZero(b)) {
    throw new jl.ArithmeticException('divide by zero');
  }
  if (cggl.isZero(a)) {
    if (computeRemainder) {
      cggl.remainder = cggl.create_2();
    }
    return cggl.create_2();
  }
  if (cggl.isMinValue(b)) {
    return cggl.divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (cggl.isNegative(b)) {
    b = neg_0(b);
    negative = !negative;
  }
  bpower = cggl.powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (cggl.isMinValue(a)) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = cggl.create_5((cggl.$clinit_LongLib$Const() , cggl.MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      if (negative) {
        cggl.negate(c);
      }
      if (computeRemainder) {
        cggl.remainder = cggl.create_2();
      }
      return c;
    }
  }
   else if (cggl.isNegative(a)) {
    aIsNegative = true;
    a = neg_0(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return cggl.divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (lt(a, b)) {
    if (computeRemainder) {
      if (aIsNegative) {
        cggl.remainder = neg_0(a);
      }
       else {
        cggl.remainder = cggl.create_5(a);
      }
    }
    return cggl.create_2();
  }
  return cggl.divModHelper(aIsCopy?a:cggl.create_5(a), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}
;
cggl.divModByMinValue = function divModByMinValue(a, computeRemainder){
  if (cggl.isMinValue(a)) {
    if (computeRemainder) {
      cggl.remainder = cggl.create_2();
    }
    return cggl.create_5((cggl.$clinit_LongLib$Const() , cggl.ONE));
  }
  if (computeRemainder) {
    cggl.remainder = cggl.create_5(a);
  }
  return cggl.create_2();
}
;
cggl.divModByShift = function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  if (negative) {
    cggl.negate(c);
  }
  if (computeRemainder) {
    a = cggl.maskRight(a, bpower);
    if (aIsNegative) {
      cggl.remainder = neg_0(a);
    }
     else {
      cggl.remainder = cggl.create_5(a);
    }
  }
  return c;
}
;
cggl.divModHelper = function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0;
  shift_0 = cggl.numberOfLeadingZeros(b) - cggl.numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = cggl.create_2();
  while (shift_0 >= 0) {
    gte = cggl.trialSubtract(a, bshift);
    if (gte) {
      cggl.setBit(quotient, shift_0);
      if (cggl.isZero(a)) {
        break;
      }
    }
    cggl.toShru1(bshift);
    shift_0--;
  }
  if (negative) {
    cggl.negate(quotient);
  }
  if (computeRemainder) {
    if (aIsNegative) {
      cggl.remainder = neg_0(a);
      if (aIsMinValue) {
        cggl.remainder = sub_0(cggl.remainder, (cggl.$clinit_LongLib$Const() , cggl.ONE));
      }
    }
     else {
      cggl.remainder = cggl.create_5(a);
    }
  }
  return quotient;
}
;
cggl.getH = function getH(a){
  cggl.$clinit_LongLibBase();
  if (cggl.RUN_IN_JVM) {
    return a.h_0;
  }
  return cggl.getHNative(a);
}
;
cggl.getHNative = function getHNative(a){
  return a.h;
}
;
cggl.getL = function getL(a){
  cggl.$clinit_LongLibBase();
  if (cggl.RUN_IN_JVM) {
    return a.l_0;
  }
  return cggl.getLNative(a);
}
;
cggl.getLNative = function getLNative(a){
  return a.l;
}
;
cggl.getM = function getM(a){
  cggl.$clinit_LongLibBase();
  if (cggl.RUN_IN_JVM) {
    return a.m_0;
  }
  return cggl.getMNative(a);
}
;
cggl.getMNative = function getMNative(a){
  return a.m;
}
;
cggl.isMinValue = function isMinValue(a){
  cggl.$clinit_LongLibBase();
  return cggl.getH(a) == 524288 && cggl.getM(a) == 0 && cggl.getL(a) == 0;
}
;
cggl.isNegative = function isNegative(a){
  cggl.$clinit_LongLibBase();
  return cggl.sign_0(a) != 0;
}
;
cggl.isZero = function isZero(a){
  cggl.$clinit_LongLibBase();
  return cggl.getL(a) == 0 && cggl.getM(a) == 0 && cggl.getH(a) == 0;
}
;
cggl.maskRight = function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = cggl.getL(a) & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = cggl.getL(a);
    b1 = cggl.getM(a) & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = cggl.getL(a);
    b1 = cggl.getM(a);
    b2 = cggl.getH(a) & (1 << bits - 44) - 1;
  }
  return cggl.create_4(b0, b1, b2);
}
;
cggl.negate = function negate(a){
  cggl.$clinit_LongLibBase();
  var neg0, neg1, neg2;
  neg0 = ~cggl.getL(a) + 1 & $intern_12;
  neg1 = ~cggl.getM(a) + (neg0 == 0?1:0) & $intern_12;
  neg2 = ~cggl.getH(a) + (neg0 == 0 && neg1 == 0?1:0) & $intern_13;
  if (cggl.RUN_IN_JVM) {
    a.l_0 = neg0;
    a.m_0 = neg1;
    a.h_0 = neg2;
  }
   else {
    cggl.setL(a, neg0);
    cggl.setM(a, neg1);
    cggl.setH(a, neg2);
  }
}
;
cggl.numberOfLeadingZeros = function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(cggl.getH(a));
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(cggl.getM(a));
    if (b1 == 32) {
      return numberOfLeadingZeros_0(cggl.getL(a)) + 32;
    }
     else {
      return b1 + 20 - (32 - 22);
    }
  }
   else {
    return b2 - (32 - 20);
  }
}
;
cggl.powerOfTwo = function powerOfTwo(a){
  var h, l, m;
  l = cggl.getL(a);
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = cggl.getM(a);
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = cggl.getH(a);
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}
;
cggl.setBit = function setBit(a, bit){
  if (cggl.RUN_IN_JVM) {
    if (bit < 22) {
      a.l_0 |= 1 << bit;
    }
     else if (bit < 44) {
      a.m_0 |= 1 << bit - 22;
    }
     else {
      a.h_0 |= 1 << bit - 44;
    }
  }
   else {
    if (bit < 22) {
      cggl.setBitL(a, bit);
    }
     else if (bit < 44) {
      cggl.setBitM(a, bit - 22);
    }
     else {
      cggl.setBitH(a, bit - 44);
    }
  }
}
;
cggl.setBitH = function setBitH(a, bit){
  a.h |= 1 << bit;
}
;
cggl.setBitL = function setBitL(a, bit){
  a.l |= 1 << bit;
}
;
cggl.setBitM = function setBitM(a, bit){
  a.m |= 1 << bit;
}
;
cggl.setH = function setH(a, x_0){
  a.h = x_0;
}
;
cggl.setL = function setL(a, x_0){
  a.l = x_0;
}
;
cggl.setM = function setM(a, x_0){
  a.m = x_0;
}
;
cggl.sign_0 = function sign_0(a){
  cggl.$clinit_LongLibBase();
  return cggl.getH(a) >> 20 - 1;
}
;
cggl.toDoubleHelper = function toDoubleHelper(a){
  cggl.$clinit_LongLibBase();
  return cggl.getL(a) + cggl.getM(a) * $intern_10 + cggl.getH(a) * $intern_14;
}
;
cggl.toShru1 = function toShru1(a){
  var a0, a1, a2;
  a1 = cggl.getM(a);
  a2 = cggl.getH(a);
  a0 = cggl.getL(a);
  if (cggl.RUN_IN_JVM) {
    a.h_0 = a2 >>> 1;
    a.m_0 = a1 >>> 1 | (a2 & 1) << 22 - 1;
    a.l_0 = a0 >>> 1 | (a1 & 1) << 22 - 1;
  }
   else {
    cggl.setH(a, a2 >>> 1);
    cggl.setM(a, a1 >>> 1 | (a2 & 1) << 22 - 1);
    cggl.setL(a, a0 >>> 1 | (a1 & 1) << 22 - 1);
  }
}
;
cggl.trialSubtract = function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = cggl.getH(a) - cggl.getH(b);
  if (sum2 < 0) {
    return false;
  }
  sum0 = cggl.getL(a) - cggl.getL(b);
  sum1 = cggl.getM(a) - cggl.getM(b) + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  if (cggl.RUN_IN_JVM) {
    a.l_0 = sum0 & $intern_12;
    a.m_0 = sum1 & $intern_12;
    a.h_0 = sum2 & $intern_13;
  }
   else {
    cggl.setL(a, sum0 & $intern_12);
    cggl.setM(a, sum1 & $intern_12);
    cggl.setH(a, sum2 & $intern_13);
  }
  return true;
}
;
defineClass(109, 1, $intern_0);
_.$init_61 = function $init_61(){
}
;
cggl.BITS = 22;
cggl.BITS01 = 0;
cggl.BITS2 = 0;
cggl.MASK = 0;
cggl.MASK_2 = 0;
cggl.RUN_IN_JVM = false;
cggl.SIGN_BIT = 0;
cggl.SIGN_BIT_VALUE = 0;
cggl.TWO_PWR_15_DBL = 32768;
cggl.TWO_PWR_16_DBL = $intern_3;
cggl.TWO_PWR_22_DBL = $intern_10;
cggl.TWO_PWR_31_DBL = 0;
cggl.TWO_PWR_32_DBL = 0;
cggl.TWO_PWR_44_DBL = 0;
cggl.TWO_PWR_63_DBL = 0;
cggl.Lcom_google_gwt_lang_LongLibBase_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase', 109, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib = function $clinit_LongLib(){
  cggl.$clinit_LongLib = emptyMethod;
  cggl.$clinit_LongLibBase();
}
;
function LongLib(){
  cggl.LongLibBase.call(this);
  this.$init_62();
}

function add_3(a, b){
  var sum0, sum1, sum2;
  sum0 = cggl.getL(a) + cggl.getL(b);
  sum1 = cggl.getM(a) + cggl.getM(b) + (sum0 >> 22);
  sum2 = cggl.getH(a) + cggl.getH(b) + (sum1 >> 22);
  return cggl.create_4(sum0 & $intern_12, sum1 & $intern_12, sum2 & $intern_13);
}

function and(a, b){
  return cggl.create_4(cggl.getL(a) & cggl.getL(b), cggl.getM(a) & cggl.getM(b), cggl.getH(a) & cggl.getH(b));
}

cggl.base64Append = function base64Append(sb, digit, haveNonZero){
  var c;
  if (digit > 0) {
    haveNonZero = true;
  }
  if (haveNonZero) {
    if (digit < 26) {
      c = 65 + digit;
    }
     else if (digit < 52) {
      c = 97 + digit - 26;
    }
     else if (digit < 62) {
      c = 48 + digit - 52;
    }
     else if (digit == 62) {
      c = 36;
    }
     else {
      c = 95;
    }
    sb.append_0(narrow_char(c));
  }
  return haveNonZero;
}
;
cggl.base64Value = function base64Value(digit){
  if (digit >= 65 && digit <= 90) {
    return digit - 65;
  }
  if (digit >= 97) {
    return digit - 97 + 26;
  }
  if (digit >= 48 && digit <= 57) {
    return digit - 48 + 52;
  }
  if (digit == 36) {
    return 62;
  }
  return 63;
}
;
function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = cggl.sign_0(a);
  signB = cggl.sign_0(b);
  if (signA != signB) {
    return signB - signA;
  }
  a2 = cggl.getH(a);
  b2 = cggl.getH(b);
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = cggl.getM(a);
  b1 = cggl.getM(b);
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = cggl.getL(a);
  b0 = cggl.getL(b);
  return a0 - b0;
}

function div(a, b){
  return cggl.divMod(a, b, false);
}

function eq(a, b){
  cggl.$clinit_LongLib();
  return cggl.getL(a) == cggl.getL(b) && cggl.getM(a) == cggl.getM(b) && cggl.getH(a) == cggl.getH(b);
}

function fromDouble(value_0){
  cggl.$clinit_LongLib();
  var a0, a1, a2, negative, result;
  if (jl.isNaN_0(value_0)) {
    return cggl.$clinit_LongLib$Const() , cggl.ZERO;
  }
  if (value_0 < -9223372036854775807) {
    return cggl.$clinit_LongLib$Const() , cggl.MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return cggl.$clinit_LongLib$Const() , cggl.MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_14) {
    a2 = round_int(value_0 / $intern_14);
    value_0 -= a2 * $intern_14;
  }
  a1 = 0;
  if (value_0 >= $intern_10) {
    a1 = round_int(value_0 / $intern_10);
    value_0 -= a1 * $intern_10;
  }
  a0 = round_int(value_0);
  result = cggl.create_4(a0, a1, a2);
  if (negative) {
    cggl.negate(result);
  }
  return result;
}

function fromInt(value_0){
  cggl.$clinit_LongLib();
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    if (jsEquals(cggl.boxedValues, null)) {
      cggl.boxedValues = initDim(cggl.Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 36, 256, 0, 1);
    }
    result = cggl.boxedValues[rebase];
    if (isNull(result)) {
      result = cggl.boxedValues[rebase] = cggl.create_3(value_0);
    }
    return result;
  }
  return cggl.create_3(value_0);
}

function getAsIntArray(l){
  var a;
  a = initDim(cggl.I_classLit, $intern_7, 0, 3, 7, 1);
  a[0] = toInt(and(l, {l:$intern_12, m:0, h:0}));
  a[1] = toInt(and(shr(l, 22), {l:$intern_12, m:0, h:0}));
  a[2] = toInt(and(shr(l, 44), {l:$intern_13, m:0, h:0}));
  return a;
}

function gt(a, b){
  cggl.$clinit_LongLib();
  var signa, signb;
  signa = cggl.getH(a) >> 20 - 1;
  signb = cggl.getH(b) >> 20 - 1;
  if (signa == 0) {
    if (signb != 0 || cggl.getH(a) > cggl.getH(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) > cggl.getM(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) == cggl.getM(b) && cggl.getL(a) > cggl.getL(b)) {
      return true;
    }
     else {
      return false;
    }
  }
   else {
    if (signb == 0 || cggl.getH(a) < cggl.getH(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) < cggl.getM(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) == cggl.getM(b) && cggl.getL(a) <= cggl.getL(b)) {
      return false;
    }
     else {
      return true;
    }
  }
}

function gte_0(a, b){
  var signa, signb;
  signa = cggl.getH(a) >> 20 - 1;
  signb = cggl.getH(b) >> 20 - 1;
  if (signa == 0) {
    if (signb != 0 || cggl.getH(a) > cggl.getH(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) > cggl.getM(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) == cggl.getM(b) && cggl.getL(a) >= cggl.getL(b)) {
      return true;
    }
     else {
      return false;
    }
  }
   else {
    if (signb == 0 || cggl.getH(a) < cggl.getH(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) < cggl.getM(b) || cggl.getH(a) == cggl.getH(b) && cggl.getM(a) == cggl.getM(b) && cggl.getL(a) < cggl.getL(b)) {
      return false;
    }
     else {
      return true;
    }
  }
}

function longFromBase64(value_0){
  var len, longVal, pos;
  pos = 0;
  longVal = fromInt(cggl.base64Value(jl.charAt_I_C__devirtual$_0(value_0, pos++)));
  len = jl.length__I__devirtual$_0(value_0);
  while (pos < len) {
    longVal = shl(longVal, 6);
    longVal = or(longVal, fromInt(cggl.base64Value(jl.charAt_I_C__devirtual$_0(value_0, pos++))));
  }
  return longVal;
}

function lt(a, b){
  cggl.$clinit_LongLib();
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function mod(a, b){
  cggl.divMod(a, b, true);
  return cggl.$clinit_LongLibBase() , cggl.remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = cggl.getL(a) & 8191;
  a1 = cggl.getL(a) >> 13 | (cggl.getM(a) & 15) << 9;
  a2 = cggl.getM(a) >> 4 & 8191;
  a3 = cggl.getM(a) >> 17 | (cggl.getH(a) & 255) << 5;
  a4 = (cggl.getH(a) & 1048320) >> 8;
  b0 = cggl.getL(b) & 8191;
  b1 = cggl.getL(b) >> 13 | (cggl.getM(b) & 15) << 9;
  b2 = cggl.getM(b) >> 4 & 8191;
  b3 = cggl.getM(b) >> 17 | (cggl.getH(b) & 255) << 5;
  b4 = (cggl.getH(b) & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  if (b4 != 0) {
    p4 += a0 * b4;
  }
  c00 = p0 & $intern_12;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_12;
  c2 += c1 >> 22;
  c1 &= $intern_12;
  c2 &= $intern_13;
  return cggl.create_4(c0, c1, c2);
}

function neg_0(a){
  cggl.$clinit_LongLib();
  var neg0, neg1, neg2;
  neg0 = ~cggl.getL(a) + 1 & $intern_12;
  neg1 = ~cggl.getM(a) + (neg0 == 0?1:0) & $intern_12;
  neg2 = ~cggl.getH(a) + (neg0 == 0 && neg1 == 0?1:0) & $intern_13;
  return cggl.create_4(neg0, neg1, neg2);
}

function neq(a, b){
  return cggl.getL(a) != cggl.getL(b) || cggl.getM(a) != cggl.getM(b) || cggl.getH(a) != cggl.getH(b);
}

function not(a){
  return cggl.create_4(~cggl.getL(a) & $intern_12, ~cggl.getM(a) & $intern_12, ~cggl.getH(a) & $intern_13);
}

function or(a, b){
  return cggl.create_4(cggl.getL(a) | cggl.getL(b), cggl.getM(a) | cggl.getM(b), cggl.getH(a) | cggl.getH(b));
}

function shl(a, n){
  cggl.$clinit_LongLib();
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = cggl.getL(a) << n;
    res1 = cggl.getM(a) << n | cggl.getL(a) >> 22 - n;
    res2 = cggl.getH(a) << n | cggl.getM(a) >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = cggl.getL(a) << n - 22;
    res2 = cggl.getM(a) << n - 22 | cggl.getL(a) >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = cggl.getL(a) << n - 44;
  }
  return cggl.create_4(res0 & $intern_12, res1 & $intern_12, res2 & $intern_13);
}

function shr(a, n){
  cggl.$clinit_LongLib();
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = cggl.getH(a);
  negative = (a2 & 524288) != 0;
  if (negative) {
    a2 |= ~1048575;
  }
  if (n < 22) {
    res2 = a2 >> n;
    res1 = cggl.getM(a) >> n | a2 << 22 - n;
    res0 = cggl.getL(a) >> n | cggl.getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_13:0;
    res1 = a2 >> n - 22;
    res0 = cggl.getM(a) >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_13:0;
    res1 = negative?$intern_12:0;
    res0 = a2 >> n - 44;
  }
  return cggl.create_4(res0 & $intern_12, res1 & $intern_12, res2 & $intern_13);
}

function shru(a, n){
  cggl.$clinit_LongLib();
  var a2, res0, res1, res2;
  n &= 63;
  a2 = cggl.getH(a) & $intern_13;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = cggl.getM(a) >> n | a2 << 22 - n;
    res0 = cggl.getL(a) >> n | cggl.getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = cggl.getM(a) >> n - 22 | cggl.getH(a) << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return cggl.create_4(res0 & $intern_12, res1 & $intern_12, res2 & $intern_13);
}

function sub_0(a, b){
  cggl.$clinit_LongLib();
  var sum0, sum1, sum2;
  sum0 = cggl.getL(a) - cggl.getL(b);
  sum1 = cggl.getM(a) - cggl.getM(b) + (sum0 >> 22);
  sum2 = cggl.getH(a) - cggl.getH(b) + (sum1 >> 22);
  return cggl.create_4(sum0 & $intern_12, sum1 & $intern_12, sum2 & $intern_13);
}

function toBase64(value_0){
  var haveNonZero, high, low, sb, v;
  low = toInt(and(value_0, {l:$intern_12, m:$intern_12, h:$intern_13}));
  high = toInt(shr(value_0, 32));
  sb = new jl.StringBuilder;
  haveNonZero = cggl.base64Append(sb, high >> 28 & 15, false);
  haveNonZero = cggl.base64Append(sb, high >> 22 & 63, haveNonZero);
  haveNonZero = cggl.base64Append(sb, high >> 16 & 63, haveNonZero);
  haveNonZero = cggl.base64Append(sb, high >> 10 & 63, haveNonZero);
  haveNonZero = cggl.base64Append(sb, high >> 4 & 63, haveNonZero);
  v = (high & 15) << 2 | low >> 30 & 3;
  haveNonZero = cggl.base64Append(sb, v, haveNonZero);
  haveNonZero = cggl.base64Append(sb, low >> 24 & 63, haveNonZero);
  haveNonZero = cggl.base64Append(sb, low >> 18 & 63, haveNonZero);
  haveNonZero = cggl.base64Append(sb, low >> 12 & 63, haveNonZero);
  cggl.base64Append(sb, low >> 6 & 63, haveNonZero);
  cggl.base64Append(sb, low & 63, true);
  return sb.toString$();
}

function toDouble(a){
  cggl.$clinit_LongLib();
  if (eq(a, (cggl.$clinit_LongLib$Const() , cggl.MIN_VALUE))) {
    return -9223372036854775807;
  }
  if (lt(a, (cggl.$clinit_LongLib$Const() , cggl.ZERO))) {
    return -cggl.toDoubleHelper(neg_0(a));
  }
  return cggl.toDoubleHelper(a);
}

function toInt(a){
  cggl.$clinit_LongLib();
  return cggl.getL(a) | cggl.getM(a) << 22;
}

function toString_11(a){
  cggl.$clinit_LongLib();
  var digits, rem, res, tenPower, tenPowerLong, tenPowerZeroes, zeroesNeeded;
  if (cggl.isZero(a)) {
    return '0';
  }
  if (cggl.isMinValue(a)) {
    return '-9223372036854775808';
  }
  if (cggl.isNegative(a)) {
    return '-' + toString_11(neg_0(a));
  }
  rem = a;
  res = '';
  while (!cggl.isZero(rem)) {
    tenPowerZeroes = 9;
    tenPower = 1000000000;
    tenPowerLong = fromInt(1000000000);
    rem = cggl.divMod(rem, tenPowerLong, true);
    digits = '' + toInt((cggl.$clinit_LongLibBase() , cggl.remainder));
    if (!cggl.isZero(rem)) {
      zeroesNeeded = 9 - jl.length__I__devirtual$_0(digits);
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  cggl.$clinit_LongLib();
  return cggl.create_4(cggl.getL(a) ^ cggl.getL(b), cggl.getM(a) ^ cggl.getM(b), cggl.getH(a) ^ cggl.getH(b));
}

defineClass(241, 109, $intern_0);
_.$init_62 = function $init_62(){
}
;
cggl.Lcom_google_gwt_lang_LongLib_2_classLit = createForClass('com.google.gwt.lang', 'LongLib', 241, cggl.Lcom_google_gwt_lang_LongLibBase_2_classLit);
cggl.$clinit_LongLib$Const = function $clinit_LongLib$Const(){
  cggl.$clinit_LongLib$Const = emptyMethod;
  jl.$clinit_Object();
  cggl.MAX_VALUE = cggl.create_4($intern_12, $intern_12, $intern_13 >> 1);
  cggl.MIN_VALUE = cggl.create_4(0, 0, 524288);
  cggl.ONE = fromInt(1);
  cggl.TWO = fromInt(2);
  cggl.ZERO = fromInt(0);
}
;
defineClass(274, 1, $intern_0);
cggl.$clinit_LongLibBase$LongEmul = function $clinit_LongLibBase$LongEmul(){
  cggl.$clinit_LongLibBase$LongEmul = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLibBase$LongEmul = function LongLibBase$LongEmul(){
  cggl.$clinit_LongLibBase$LongEmul();
  Object_0.call(this);
  this.$init_63();
}
;
defineClass(36, 1, {36:1, 1:1}, cggl.LongLibBase$LongEmul);
_.$init_63 = function $init_63(){
}
;
_.h_0 = 0;
_.l_0 = 0;
_.m_0 = 0;
cggl.Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', 36, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_RuntimePropertyRegistry = function $clinit_RuntimePropertyRegistry(){
  cggl.$clinit_RuntimePropertyRegistry = emptyMethod;
  jl.$clinit_Object();
  cggl.cachedPropertyValuesByName = new ju.HashMap;
  cggl.propertyValueProvidersByName = new ju.HashMap;
}
;
function RuntimePropertyRegistry(){
  Object_0.call(this);
  this.$init_64();
}

function getPropertyValue(propertyName){
  var propertyProvider, propertyValue;
  if (cggl.cachedPropertyValuesByName.containsKey_0(propertyName)) {
    return cggl.cachedPropertyValuesByName.get_2(propertyName);
  }
  if (cggl.propertyValueProvidersByName.containsKey_0(propertyName)) {
    propertyProvider = cggl.propertyValueProvidersByName.get_2(propertyName);
    propertyValue = propertyProvider.getValue();
    cggl.cachedPropertyValuesByName.put_0(propertyName, propertyValue);
    return propertyValue;
  }
  throw new jl.RuntimeException_0("Can't get a value for property '" + propertyName + "' since it does not have a registered value generator.");
}

function registerPropertyValueProvider(propertyValueProvider){
  cggl.propertyValueProvidersByName.put_0(propertyValueProvider.getName(), propertyValueProvider);
}

defineClass(243, 1, $intern_0);
_.$init_64 = function $init_64(){
}
;
cggl.Lcom_google_gwt_lang_RuntimePropertyRegistry_2_classLit = createForClass('com.google.gwt.lang', 'RuntimePropertyRegistry', 243, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_RuntimePropertyRegistry$PropertyValueProvider = function $clinit_RuntimePropertyRegistry$PropertyValueProvider(){
  cggl.$clinit_RuntimePropertyRegistry$PropertyValueProvider = emptyMethod;
}
;
defineClass(275, 1, $intern_0);
cggl.$clinit_RuntimeRebinder = function $clinit_RuntimeRebinder(){
  cggl.$clinit_RuntimeRebinder = emptyMethod;
}
;
defineClass(276, 1, $intern_0);
cggl.$clinit_Stats = function $clinit_Stats(){
  cggl.$clinit_Stats = emptyMethod;
  jl.$clinit_Object();
}
;
function Stats(){
  Object_0.call(this);
  this.$init_65();
}

function isStatsAvailable_0(){
  return !!$stats;
}

function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

defineClass(244, 1, $intern_0);
_.$init_65 = function $init_65(){
}
;
cggl.Lcom_google_gwt_lang_Stats_2_classLit = createForClass('com.google.gwt.lang', 'Stats', 244, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_com_00046priority_00046app_00046PriorityApp__EntryMethodHolder = function $clinit_com_00046priority_00046app_00046PriorityApp__EntryMethodHolder(){
  cggl.$clinit_com_00046priority_00046app_00046PriorityApp__EntryMethodHolder = emptyMethod;
  jl.$clinit_Object();
}
;
function init(){
  cggl.$clinit_com_00046priority_00046app_00046PriorityApp__EntryMethodHolder();
  (new cgguc2.UserAgentAsserter).onModuleLoad();
  (new cgguc.DocumentModeAsserter).onModuleLoad();
  (new cgglc.LogConfiguration).onModuleLoad();
  (new cpam.PriorityApp).onModuleLoad();
}

defineClass(277, 1, $intern_0);
jul.$clinit_Handler = function $clinit_Handler(){
  jul.$clinit_Handler = emptyMethod;
  jl.$clinit_Object();
}
;
jul.Handler = function Handler(){
  jul.$clinit_Handler();
  Object_0.call(this);
  this.$init_67();
}
;
defineClass(34, 1, $intern_15);
_.$init_67 = function $init_67(){
}
;
_.getFormatter = function getFormatter(){
  return this.formatter;
}
;
_.getLevel = function getLevel(){
  if (isNotNull(this.level_0)) {
    return this.level_0;
  }
  return jul.$clinit_Level() , jul.ALL;
}
;
_.isLoggable = function isLoggable(record){
  return this.getLevel().intValue_0() <= record.getLevel().intValue_0();
}
;
_.setFormatter = function setFormatter(newFormatter){
  this.formatter = newFormatter;
}
;
_.setLevel = function setLevel(newLevel){
  this.level_0 = newLevel;
}
;
cggl.Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 34, cggl.Ljava_lang_Object_2_classLit);
cgglc.$clinit_ConsoleLogHandler = function $clinit_ConsoleLogHandler(){
  cgglc.$clinit_ConsoleLogHandler = emptyMethod;
  jul.$clinit_Handler();
}
;
cgglc.ConsoleLogHandler = function ConsoleLogHandler(){
  cgglc.$clinit_ConsoleLogHandler();
  jul.Handler.call(this);
  this.$init_68();
  this.setFormatter(new cgglc.TextLogFormatter(true));
  this.setLevel((jul.$clinit_Level() , jul.ALL));
}
;
defineClass(205, 34, $intern_15, cgglc.ConsoleLogHandler);
_.$init_68 = function $init_68(){
}
;
_.close_0 = function close_0(){
}
;
_.error_1 = function error_0(message){
  window.console.error(message);
}
;
_.info_0 = function info(message){
  window.console.info(message);
}
;
_.isSupported = function isSupported(){
  return !!window.console;
}
;
_.log_1 = function log_6(message){
  window.console.log(message);
}
;
_.publish = function publish(record){
  var msg, val;
  if (!this.isSupported() || !this.isLoggable(record)) {
    return;
  }
  msg = this.getFormatter().format_0(record);
  val = record.getLevel().intValue_0();
  if (val >= (jul.$clinit_Level() , jul.SEVERE).intValue_0()) {
    this.error_1(msg);
  }
   else if (val >= (jul.$clinit_Level() , jul.WARNING).intValue_0()) {
    this.warn_0(msg);
  }
   else if (val >= (jul.$clinit_Level() , jul.INFO).intValue_0()) {
    this.info_0(msg);
  }
   else {
    this.log_1(msg);
  }
}
;
_.warn_0 = function warn(message){
  window.console.warn(message);
}
;
cggl.Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 205, cggl.Ljava_util_logging_Handler_2_classLit);
cgglc.$clinit_DefaultLevel = function $clinit_DefaultLevel(){
  cgglc.$clinit_DefaultLevel = emptyMethod;
}
;
cgglc.$clinit_DefaultLevel$All = function $clinit_DefaultLevel$All(){
  cgglc.$clinit_DefaultLevel$All = emptyMethod;
  jl.$clinit_Object();
}
;
cgglc.DefaultLevel$All = function DefaultLevel$All(){
  cgglc.$clinit_DefaultLevel$All();
  Object_0.call(this);
  this.$init_69();
}
;
defineClass(204, 1, $intern_0, cgglc.DefaultLevel$All);
_.$init_69 = function $init_69(){
}
;
_.getLevel = function getLevel_0(){
  return jul.$clinit_Level() , jul.ALL;
}
;
cggl.Lcom_google_gwt_logging_client_DefaultLevel$All_2_classLit = createForClass('com.google.gwt.logging.client', 'DefaultLevel/All', 204, cggl.Ljava_lang_Object_2_classLit);
cgglc.$clinit_DefaultLevel$Config = function $clinit_DefaultLevel$Config(){
  cgglc.$clinit_DefaultLevel$Config = emptyMethod;
}
;
defineClass(380, 1, $intern_0);
cgglc.$clinit_DefaultLevel$Fine = function $clinit_DefaultLevel$Fine(){
  cgglc.$clinit_DefaultLevel$Fine = emptyMethod;
}
;
defineClass(381, 1, $intern_0);
cgglc.$clinit_DefaultLevel$Finer = function $clinit_DefaultLevel$Finer(){
  cgglc.$clinit_DefaultLevel$Finer = emptyMethod;
}
;
defineClass(382, 1, $intern_0);
cgglc.$clinit_DefaultLevel$Finest = function $clinit_DefaultLevel$Finest(){
  cgglc.$clinit_DefaultLevel$Finest = emptyMethod;
}
;
defineClass(383, 1, $intern_0);
cgglc.$clinit_DefaultLevel$Info = function $clinit_DefaultLevel$Info(){
  cgglc.$clinit_DefaultLevel$Info = emptyMethod;
}
;
defineClass(384, 1, $intern_0);
cgglc.$clinit_DefaultLevel$Severe = function $clinit_DefaultLevel$Severe(){
  cgglc.$clinit_DefaultLevel$Severe = emptyMethod;
}
;
defineClass(385, 1, $intern_0);
cgglc.$clinit_DefaultLevel$Warning = function $clinit_DefaultLevel$Warning(){
  cgglc.$clinit_DefaultLevel$Warning = emptyMethod;
}
;
defineClass(386, 1, $intern_0);
cgglc.$clinit_DevelopmentModeLogHandler = function $clinit_DevelopmentModeLogHandler(){
  cgglc.$clinit_DevelopmentModeLogHandler = emptyMethod;
  jul.$clinit_Handler();
}
;
cgglc.DevelopmentModeLogHandler = function DevelopmentModeLogHandler(){
  cgglc.$clinit_DevelopmentModeLogHandler();
  jul.Handler.call(this);
  this.$init_70();
  this.setFormatter(new cgglc.TextLogFormatter(false));
  this.setLevel((jul.$clinit_Level() , jul.ALL));
}
;
defineClass(206, 34, $intern_15, cgglc.DevelopmentModeLogHandler);
_.$init_70 = function $init_70(){
}
;
_.close_0 = function close_1(){
}
;
_.isSupported_0 = function isSupported_0(){
  return !isScript();
}
;
_.publish = function publish_0(record){
  var msg;
  if (!this.isSupported_0() || !this.isLoggable(record)) {
    return;
  }
  msg = this.getFormatter().format_0(record);
  log_2(msg, record.getThrown_0());
}
;
cggl.Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 206, cggl.Ljava_util_logging_Handler_2_classLit);
cgglc.$clinit_LogConfiguration = function $clinit_LogConfiguration(){
  cgglc.$clinit_LogConfiguration = emptyMethod;
  jl.$clinit_Object();
  cgglc.impl_1 = new cgglc.LogConfiguration$LogConfigurationImplRegular;
}
;
cgglc.LogConfiguration = function LogConfiguration(){
  cgglc.$clinit_LogConfiguration();
  Object_0.call(this);
  this.$init_71();
}
;
defineClass(110, 1, $intern_0, cgglc.LogConfiguration);
_.$init_71 = function $init_71(){
}
;
_.onModuleLoad = function onModuleLoad(){
  var log_0;
  cgglc.impl_1.configureClientSideLogging();
  if (cgglc.impl_1.loggingIsEnabled()) {
    if (isNull(getUncaughtExceptionHandler())) {
      log_0 = jul.getLogger_0(cggl.Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.getName());
      setUncaughtExceptionHandler(new cgglc.LogConfiguration$1(this, log_0));
    }
  }
}
;
cggl.Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', 110, cggl.Ljava_lang_Object_2_classLit);
cgglc.$clinit_LogConfiguration$1 = function $clinit_LogConfiguration$1(){
  cgglc.$clinit_LogConfiguration$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cgglc.LogConfiguration$1 = function LogConfiguration$1(this$0, val$log){
  cgglc.$clinit_LogConfiguration$1();
  this.this$01 = this$0;
  this.val$log2 = val$log;
  Object_0.call(this);
  this.$init_72();
}
;
defineClass(112, 1, $intern_0, cgglc.LogConfiguration$1);
_.$init_72 = function $init_72(){
}
;
_.onUncaughtException = function onUncaughtException(e){
  this.val$log2.log_3((jul.$clinit_Level() , jul.SEVERE), e.getMessage(), e);
}
;
cggl.Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 112, cggl.Ljava_lang_Object_2_classLit);
cgglc.$clinit_LogConfiguration$LogConfigurationImpl = function $clinit_LogConfiguration$LogConfigurationImpl(){
  cgglc.$clinit_LogConfiguration$LogConfigurationImpl = emptyMethod;
}
;
cgglc.$clinit_LogConfiguration$LogConfigurationImplNull = function $clinit_LogConfiguration$LogConfigurationImplNull(){
  cgglc.$clinit_LogConfiguration$LogConfigurationImplNull = emptyMethod;
}
;
defineClass(279, 1, $intern_0);
cgglc.$clinit_LogConfiguration$LogConfigurationImplRegular = function $clinit_LogConfiguration$LogConfigurationImplRegular(){
  cgglc.$clinit_LogConfiguration$LogConfigurationImplRegular = emptyMethod;
  jl.$clinit_Object();
}
;
cgglc.LogConfiguration$LogConfigurationImplRegular = function LogConfiguration$LogConfigurationImplRegular(){
  cgglc.$clinit_LogConfiguration$LogConfigurationImplRegular();
  Object_0.call(this);
  this.$init_73();
}
;
defineClass(111, 1, $intern_0, cgglc.LogConfiguration$LogConfigurationImplRegular);
_.$init_73 = function $init_73(){
}
;
_.addHandlerIfNotNull = function addHandlerIfNotNull(l, h){
  if (!instanceOf(h, 51)) {
    l.addHandler(h);
  }
}
;
_.configureClientSideLogging = function configureClientSideLogging(){
  this.root = jul.getLogger_0('');
  this.root.setUseParentHandlers(false);
  this.setLevels(this.root);
  this.setDefaultHandlers(this.root);
}
;
_.loggingIsEnabled = function loggingIsEnabled(){
  return true;
}
;
_.setDefaultHandlers = function setDefaultHandlers(l){
  var console_0, dev, loggingWidget, remote, system;
  console_0 = new cgglc.ConsoleLogHandler;
  this.addHandlerIfNotNull(l, console_0);
  dev = new cgglc.DevelopmentModeLogHandler;
  this.addHandlerIfNotNull(l, dev);
  system = new cgglc.NullLogHandler;
  this.addHandlerIfNotNull(l, system);
  remote = new cgglc.NullLogHandler;
  this.addHandlerIfNotNull(l, remote);
  loggingWidget = new cgglc.NullLogHandler;
  this.addHandlerIfNotNull(l, loggingWidget);
}
;
_.setLevels = function setLevels(l){
  var defaultLevel, level, levelParam;
  levelParam = cgguc.getParameter('logLevel');
  level = jsEquals(levelParam, null)?null:jul.parse_3(levelParam);
  if (isNotNull(level)) {
    l.setLevel(level);
  }
   else {
    defaultLevel = new cgglc.DefaultLevel$All;
    l.setLevel(defaultLevel.getLevel());
  }
}
;
cggl.Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 111, cggl.Ljava_lang_Object_2_classLit);
cgglc.$clinit_LogConfiguration$LogConfigurationImplSevere = function $clinit_LogConfiguration$LogConfigurationImplSevere(){
  cgglc.$clinit_LogConfiguration$LogConfigurationImplSevere = emptyMethod;
}
;
defineClass(280, 111, $intern_0);
cgglc.$clinit_LogConfiguration$LogConfigurationImplWarning = function $clinit_LogConfiguration$LogConfigurationImplWarning(){
  cgglc.$clinit_LogConfiguration$LogConfigurationImplWarning = emptyMethod;
}
;
defineClass(281, 111, $intern_0);
cgglc.$clinit_NullLogHandler = function $clinit_NullLogHandler(){
  cgglc.$clinit_NullLogHandler = emptyMethod;
  jul.$clinit_Handler();
}
;
cgglc.NullLogHandler = function NullLogHandler(){
  cgglc.$clinit_NullLogHandler();
  jul.Handler.call(this);
  this.$init_74();
}
;
defineClass(51, 34, {51:1, 1:1, 34:1}, cgglc.NullLogHandler);
_.$init_74 = function $init_74(){
}
;
_.close_0 = function close_2(){
}
;
_.publish = function publish_1(record){
}
;
cggl.Lcom_google_gwt_logging_client_NullLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'NullLogHandler', 51, cggl.Ljava_util_logging_Handler_2_classLit);
jul.$clinit_Formatter = function $clinit_Formatter(){
  jul.$clinit_Formatter = emptyMethod;
  jl.$clinit_Object();
}
;
jul.Formatter = function Formatter(){
  jul.$clinit_Formatter();
  Object_0.call(this);
  this.$init_75();
}
;
defineClass(209, 1, $intern_0);
_.$init_75 = function $init_75(){
}
;
cggl.Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 209, cggl.Ljava_lang_Object_2_classLit);
cggli.$clinit_FormatterImpl = function $clinit_FormatterImpl(){
  cggli.$clinit_FormatterImpl = emptyMethod;
  jul.$clinit_Formatter();
}
;
cggli.FormatterImpl = function FormatterImpl(){
  cggli.$clinit_FormatterImpl();
  jul.Formatter.call(this);
  this.$init_76();
}
;
defineClass(210, 209, $intern_0);
_.$init_76 = function $init_76(){
}
;
_.getRecordInfo = function getRecordInfo(event_0, newline){
  var date, s;
  date = new ju.Date_0(event_0.getMillis());
  s = new jl.StringBuilder;
  s.append_2(date.toString$());
  s.append_2(' ');
  s.append_2(event_0.getLoggerName());
  s.append_2(newline);
  s.append_2(event_0.getLevel().getName());
  s.append_2(': ');
  return s.toString$();
}
;
cggl.Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 210, cggl.Ljava_util_logging_Formatter_2_classLit);
cgglc.$clinit_TextLogFormatter = function $clinit_TextLogFormatter(){
  cgglc.$clinit_TextLogFormatter = emptyMethod;
  cggli.$clinit_FormatterImpl();
}
;
cgglc.TextLogFormatter = function TextLogFormatter(showStackTraces){
  cgglc.$clinit_TextLogFormatter();
  cggli.FormatterImpl.call(this);
  this.$init_77();
  this.showStackTraces = showStackTraces;
}
;
defineClass(94, 210, $intern_0, cgglc.TextLogFormatter);
_.$init_77 = function $init_77(){
}
;
_.format_0 = function format_1(event_0){
  var message;
  message = new jl.StringBuilder;
  message.append_2(this.getRecordInfo(event_0, '\n'));
  message.append_2(event_0.getMessage());
  if (this.showStackTraces && isNotNull(event_0.getThrown_0())) {
    event_0.getThrown_0().printStackTrace(new cggli.StackTracePrintStream(message));
  }
  return message.toString$();
}
;
_.showStackTraces = false;
cggl.Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 94, cggl.Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit);
ji.$clinit_OutputStream = function $clinit_OutputStream(){
  ji.$clinit_OutputStream = emptyMethod;
  jl.$clinit_Object();
}
;
ji.OutputStream = function OutputStream(){
  ji.$clinit_OutputStream();
  Object_0.call(this);
  this.$init_78();
}
;
defineClass(160, 1, $intern_0);
_.$init_78 = function $init_78(){
}
;
cggl.Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 160, cggl.Ljava_lang_Object_2_classLit);
ji.$clinit_FilterOutputStream = function $clinit_FilterOutputStream(){
  ji.$clinit_FilterOutputStream = emptyMethod;
  ji.$clinit_OutputStream();
}
;
ji.FilterOutputStream = function FilterOutputStream(out){
  ji.$clinit_FilterOutputStream();
  ji.OutputStream.call(this);
  this.$init_79();
}
;
defineClass(91, 160, $intern_0, ji.FilterOutputStream);
_.$init_79 = function $init_79(){
}
;
cggl.Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 91, cggl.Ljava_io_OutputStream_2_classLit);
ji.$clinit_PrintStream = function $clinit_PrintStream(){
  ji.$clinit_PrintStream = emptyMethod;
  ji.$clinit_FilterOutputStream();
}
;
ji.PrintStream = function PrintStream(out){
  ji.$clinit_PrintStream();
  ji.FilterOutputStream.call(this, out);
  this.$init_80();
}
;
defineClass(69, 91, $intern_0, ji.PrintStream);
_.$init_80 = function $init_80(){
}
;
_.print_0 = function print_0(s){
}
;
_.println = function println(x_0){
}
;
_.println_0 = function println_0(s){
}
;
cggl.Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 69, cggl.Ljava_io_FilterOutputStream_2_classLit);
cggli.$clinit_StackTracePrintStream = function $clinit_StackTracePrintStream(){
  cggli.$clinit_StackTracePrintStream = emptyMethod;
  ji.$clinit_PrintStream();
}
;
cggli.StackTracePrintStream = function StackTracePrintStream(builder){
  cggli.$clinit_StackTracePrintStream();
  ji.PrintStream.call(this, new ji.FilterOutputStream(null));
  this.$init_81();
  this.builder = builder;
}
;
defineClass(211, 69, $intern_0, cggli.StackTracePrintStream);
_.$init_81 = function $init_81(){
}
;
_.append = function append(text_0){
  this.builder.append_2(text_0);
}
;
_.newLine = function newLine(){
  this.builder.append_2('\n');
}
;
_.print_0 = function print_1(str){
  this.append(str);
}
;
_.println = function println_1(obj){
  this.append(valueOf_23(obj));
  this.newLine();
}
;
_.println_0 = function println_2(str){
  this.append(str);
  this.newLine();
}
;
cggl.Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 211, cggl.Ljava_io_PrintStream_2_classLit);
cggli.$clinit_FormatterImpl$1 = function $clinit_FormatterImpl$1(){
  cggli.$clinit_FormatterImpl$1 = emptyMethod;
}
;
defineClass(417, 211, $intern_0);
cggli.$clinit_LevelImpl = function $clinit_LevelImpl(){
  cggli.$clinit_LevelImpl = emptyMethod;
}
;
cggli.$clinit_LevelImplRegular = function $clinit_LevelImplRegular(){
  cggli.$clinit_LevelImplRegular = emptyMethod;
  jl.$clinit_Object();
}
;
cggli.LevelImplRegular = function LevelImplRegular(){
  cggli.$clinit_LevelImplRegular();
  Object_0.call(this);
  this.$init_82();
}
;
defineClass(207, 1, $intern_0, cggli.LevelImplRegular);
_.$init_82 = function $init_82(){
}
;
_.parse_1 = function parse_2(name_0){
  name_0 = cggcsi.toUpper(name_0);
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'ALL')) {
    return jul.$clinit_Level() , jul.ALL;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'CONFIG')) {
    return jul.$clinit_Level() , jul.CONFIG;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'FINE')) {
    return jul.$clinit_Level() , jul.FINE;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'FINER')) {
    return jul.$clinit_Level() , jul.FINER;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'FINEST')) {
    return jul.$clinit_Level() , jul.FINEST;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'INFO')) {
    return jul.$clinit_Level() , jul.INFO;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'OFF')) {
    return jul.$clinit_Level() , jul.OFF;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'SEVERE')) {
    return jul.$clinit_Level() , jul.SEVERE;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(name_0, 'WARNING')) {
    return jul.$clinit_Level() , jul.WARNING;
  }
  throw new jl.IllegalArgumentException_0('Invalid level "' + name_0 + '"');
}
;
cggl.Lcom_google_gwt_logging_impl_LevelImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LevelImplRegular', 207, cggl.Ljava_lang_Object_2_classLit);
cggli.$clinit_LoggerConfigurator = function $clinit_LoggerConfigurator(){
  cggli.$clinit_LoggerConfigurator = emptyMethod;
}
;
cggli.$clinit_LoggerConfiguratorNull = function $clinit_LoggerConfiguratorNull(){
  cggli.$clinit_LoggerConfiguratorNull = emptyMethod;
  jl.$clinit_Object();
}
;
cggli.LoggerConfiguratorNull = function LoggerConfiguratorNull(){
  cggli.$clinit_LoggerConfiguratorNull();
  Object_0.call(this);
  this.$init_83();
}
;
defineClass(212, 1, $intern_0, cggli.LoggerConfiguratorNull);
_.$init_83 = function $init_83(){
}
;
_.configure = function configure(logger){
}
;
cggl.Lcom_google_gwt_logging_impl_LoggerConfiguratorNull_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerConfiguratorNull', 212, cggl.Ljava_lang_Object_2_classLit);
cggli.$clinit_LoggerImpl = function $clinit_LoggerImpl(){
  cggli.$clinit_LoggerImpl = emptyMethod;
}
;
cggli.$clinit_LoggerImplNull = function $clinit_LoggerImplNull(){
  cggli.$clinit_LoggerImplNull = emptyMethod;
}
;
defineClass(254, 1, $intern_0);
cggli.$clinit_LoggerImplRegular = function $clinit_LoggerImplRegular(){
  cggli.$clinit_LoggerImplRegular = emptyMethod;
  jl.$clinit_Object();
}
;
cggli.LoggerImplRegular = function LoggerImplRegular(){
  cggli.$clinit_LoggerImplRegular();
  Object_0.call(this);
  this.$init_84();
  this.useParentHandlers = true;
  this.handlers = new ju.ArrayList;
}
;
defineClass(89, 1, $intern_0, cggli.LoggerImplRegular);
_.$init_84 = function $init_84(){
  this.level_0 = null;
}
;
_.addHandler = function addHandler(handler){
  this.handlers.add_1(handler);
}
;
_.getEffectiveLevel = function getEffectiveLevel(){
  var effectiveLevel, logger;
  if (isNotNull(this.level_0)) {
    return this.level_0;
  }
  logger = this.getParent();
  while (isNotNull(logger)) {
    effectiveLevel = logger.getLevel();
    if (isNotNull(effectiveLevel)) {
      return effectiveLevel;
    }
    logger = logger.getParent();
  }
  return jul.$clinit_Level() , jul.INFO;
}
;
_.getHandlers = function getHandlers(){
  return this.handlers.toArray(initDim(cggl.Ljava_util_logging_Handler_2_classLit, $intern_2, 34, this.handlers.size_1(), 0, 1));
}
;
_.getLevel = function getLevel_1(){
  return this.level_0;
}
;
_.getName = function getName_0(){
  return this.name_0;
}
;
_.getParent = function getParent(){
  return this.parent_0;
}
;
_.getUseParentHandlers = function getUseParentHandlers(){
  return this.useParentHandlers;
}
;
_.isLoggable_0 = function isLoggable_0(messageLevel){
  return this.getEffectiveLevel().intValue_0() <= messageLevel.intValue_0();
}
;
_.log_2 = function log_7(level, msg){
  this.log_3(level, msg, null);
}
;
_.log_3 = function log_8(level, msg, thrown){
  var record;
  if (this.isLoggable_0(level)) {
    record = new jul.LogRecord(level, msg);
    record.setThrown(thrown);
    record.setLoggerName(this.getName());
    this.log_4(record);
  }
}
;
_.log_4 = function log_9(record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if (this.isLoggable_0(record.getLevel())) {
    for (handler$array0 = this.getHandlers() , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this.getUseParentHandlers()?this.getParent():null;
    while (isNotNull(logger)) {
      for (handler$array = logger.getHandlers() , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.getUseParentHandlers()?logger.getParent():null;
    }
  }
}
;
_.setLevel = function setLevel_0(newLevel){
  this.level_0 = newLevel;
}
;
_.setName = function setName(newName){
  this.name_0 = newName;
}
;
_.setParent = function setParent(newParent){
  if (isNotNull(newParent)) {
    this.parent_0 = newParent;
  }
}
;
_.setUseParentHandlers = function setUseParentHandlers(newUseParentHandlers){
  this.useParentHandlers = newUseParentHandlers;
}
;
_.useParentHandlers = false;
cggl.Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 89, cggl.Ljava_lang_Object_2_classLit);
cggrc.$clinit_ClientBundle = function $clinit_ClientBundle(){
  cggrc.$clinit_ClientBundle = emptyMethod;
}
;
cggrc.$clinit_ClientBundle$Source = function $clinit_ClientBundle$Source(){
  cggrc.$clinit_ClientBundle$Source = emptyMethod;
}
;
cggtc.$clinit_ArrayBufferNative = function $clinit_ArrayBufferNative(){
  cggtc.$clinit_ArrayBufferNative = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggtc.$clinit_ArrayBufferViewNative = function $clinit_ArrayBufferViewNative(){
  cggtc.$clinit_ArrayBufferViewNative = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggtc.$clinit_DataViewNative = function $clinit_DataViewNative(){
  cggtc.$clinit_DataViewNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$clinit_Float32ArrayNative = function $clinit_Float32ArrayNative(){
  cggtc.$clinit_Float32ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_1 = function $length_1(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Float64ArrayNative = function $clinit_Float64ArrayNative(){
  cggtc.$clinit_Float64ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_2 = function $length_2(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Int16ArrayNative = function $clinit_Int16ArrayNative(){
  cggtc.$clinit_Int16ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_3 = function $length_3(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Int32ArrayNative = function $clinit_Int32ArrayNative(){
  cggtc.$clinit_Int32ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$get_2 = function $get_2(this$static, index_0){
  return this$static[index_0];
}
;
cggtc.$length_4 = function $length_4(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Int8ArrayNative = function $clinit_Int8ArrayNative(){
  cggtc.$clinit_Int8ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_5 = function $length_5(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Uint16ArrayNative = function $clinit_Uint16ArrayNative(){
  cggtc.$clinit_Uint16ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$get_3 = function $get_3(this$static, index_0){
  return this$static[index_0];
}
;
cggtc.$length_6 = function $length_6(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Uint32ArrayNative = function $clinit_Uint32ArrayNative(){
  cggtc.$clinit_Uint32ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_7 = function $length_7(this$static){
  return this$static.length;
}
;
cggtc.$clinit_Uint8ArrayNative = function $clinit_Uint8ArrayNative(){
  cggtc.$clinit_Uint8ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_8 = function $length_8(this$static){
  return this$static.length;
}
;
cggts.$clinit_ArrayBuffer = function $clinit_ArrayBuffer(){
  cggts.$clinit_ArrayBuffer = emptyMethod;
}
;
cggts.$clinit_ArrayBufferView = function $clinit_ArrayBufferView(){
  cggts.$clinit_ArrayBufferView = emptyMethod;
}
;
cggts.$clinit_DataView = function $clinit_DataView(){
  cggts.$clinit_DataView = emptyMethod;
}
;
cggts.$clinit_Float32Array = function $clinit_Float32Array(){
  cggts.$clinit_Float32Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT = 4;
cggts.$clinit_Float64Array = function $clinit_Float64Array(){
  cggts.$clinit_Float64Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_0 = 8;
cggts.$clinit_Int16Array = function $clinit_Int16Array(){
  cggts.$clinit_Int16Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_1 = 2;
cggts.$clinit_Int32Array = function $clinit_Int32Array(){
  cggts.$clinit_Int32Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_2 = 4;
cggts.$clinit_Int8Array = function $clinit_Int8Array(){
  cggts.$clinit_Int8Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_3 = 1;
cggts.$clinit_Uint16Array = function $clinit_Uint16Array(){
  cggts.$clinit_Uint16Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_4 = 2;
cggts.$clinit_Uint32Array = function $clinit_Uint32Array(){
  cggts.$clinit_Uint32Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_5 = 4;
cggts.$clinit_Uint8Array = function $clinit_Uint8Array(){
  cggts.$clinit_Uint8Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_6 = 1;
cggts.$clinit_Uint8ClampedArray = function $clinit_Uint8ClampedArray(){
  cggts.$clinit_Uint8ClampedArray = emptyMethod;
}
;
cgguc.$clinit_DocumentModeAsserter = function $clinit_DocumentModeAsserter(){
  cgguc.$clinit_DocumentModeAsserter = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.DocumentModeAsserter = function DocumentModeAsserter(){
  cgguc.$clinit_DocumentModeAsserter();
  Object_0.call(this);
  this.$init_85();
}
;
defineClass(113, 1, $intern_0, cgguc.DocumentModeAsserter);
_.$init_85 = function $init_85(){
}
;
_.onModuleLoad = function onModuleLoad_0(){
  var allowedModes, currentMode, i_0, impl, message, severity;
  impl = new cgguc.DocumentModeAsserter_DocumentModeProperty;
  severity = impl.getDocumentModeSeverity();
  if (jsEquals(severity, (cgguc.$clinit_DocumentModeAsserter$Severity() , cgguc.IGNORE))) {
    return;
  }
  currentMode = cggdc.$getCompatMode(cggdc.get_1());
  allowedModes = impl.getAllowedDocumentModes();
  for (i_0 = 0; i_0 < allowedModes.length; i_0++) {
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_0(allowedModes[i_0], currentMode)) {
      return;
    }
  }
  if (allowedModes.length == 1 && jl.equals_Ljava_lang_Object__Z__devirtual$_0('CSS1Compat', allowedModes[0]) && jl.equals_Ljava_lang_Object__Z__devirtual$_0('BackCompat', currentMode)) {
    message = "GWT no longer supports Quirks Mode (document.compatMode=' " + 'BackCompat' + "').<br>Make sure your application's host HTML page has a Standards Mode " + "(document.compatMode=' " + 'CSS1Compat' + "') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML " + 'page.<br><br>To continue using this unsupported rendering mode and risk layout problems, ' + 'suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>' + '&nbsp;&nbsp;&lt;extend-configuration-property name="document.compatMode" value="' + currentMode + '"/&gt;';
  }
   else {
    message = "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
  }
  if (jsEquals(severity, (cgguc.$clinit_DocumentModeAsserter$Severity() , cgguc.ERROR))) {
    throw new jl.RuntimeException_0(message);
  }
  cggcc.log_1(message);
}
;
cgguc.PROPERTY_DOCUMENT_COMPATMODE = 'document.compatMode';
cgguc.PROPERTY_DOCUMENT_COMPATMODE_SEVERITY = 'document.compatMode.severity';
cgguc.QUIRKS_MODE_BACK_COMPAT = 'BackCompat';
cgguc.STANDARDS_MODE_CSS1_COMPAT = 'CSS1Compat';
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter', 113, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_DocumentModeAsserter$DocumentModeProperty = function $clinit_DocumentModeAsserter$DocumentModeProperty(){
  cgguc.$clinit_DocumentModeAsserter$DocumentModeProperty = emptyMethod;
}
;
cgguc.$clinit_DocumentModeAsserter$Severity = function $clinit_DocumentModeAsserter$Severity(){
  cgguc.$clinit_DocumentModeAsserter$Severity = emptyMethod;
  jl.$clinit_Enum();
  cgguc.ERROR = new cgguc.DocumentModeAsserter$Severity('ERROR', 0);
  cgguc.IGNORE = new cgguc.DocumentModeAsserter$Severity('IGNORE', 1);
  cgguc.WARN = new cgguc.DocumentModeAsserter$Severity('WARN', 2);
}
;
cgguc.DocumentModeAsserter$Severity = function DocumentModeAsserter$Severity(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_86();
}
;
cgguc.valueOf_1 = function valueOf_1(name_0){
  cgguc.$clinit_DocumentModeAsserter$Severity();
  return valueOf((cgguc.$clinit_DocumentModeAsserter$Severity$Map() , cgguc.$MAP_0), name_0);
}
;
cgguc.values_1 = function values_1(){
  cgguc.$clinit_DocumentModeAsserter$Severity();
  return initValues(getClassLiteralForArray(cggl.Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit, 1), $intern_2, 45, 0, [cgguc.ERROR, cgguc.IGNORE, cgguc.WARN]);
}
;
defineClass(45, 15, {45:1, 3:1, 18:1, 15:1, 1:1}, cgguc.DocumentModeAsserter$Severity);
_.$init_86 = function $init_86(){
}
;
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForEnum('com.google.gwt.user.client', 'DocumentModeAsserter/Severity', 45, cggl.Ljava_lang_Enum_2_classLit, cgguc.values_1, cgguc.valueOf_1);
cgguc.$clinit_DocumentModeAsserter$Severity$Map = function $clinit_DocumentModeAsserter$Severity$Map(){
  cgguc.$clinit_DocumentModeAsserter$Severity$Map = emptyMethod;
  cgguc.$MAP_0 = createValueOfMap(cgguc.values_1());
}
;
defineClass(307, 1, $intern_0);
cgguc.$clinit_DocumentModeAsserter_DocumentModeProperty = function $clinit_DocumentModeAsserter_DocumentModeProperty(){
  cgguc.$clinit_DocumentModeAsserter_DocumentModeProperty = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.DocumentModeAsserter_DocumentModeProperty = function DocumentModeAsserter_DocumentModeProperty(){
  cgguc.$clinit_DocumentModeAsserter_DocumentModeProperty();
  Object_0.call(this);
  this.$init_87();
}
;
defineClass(133, 1, $intern_0, cgguc.DocumentModeAsserter_DocumentModeProperty);
_.$init_87 = function $init_87(){
}
;
_.getAllowedDocumentModes = function getAllowedDocumentModes(){
  return initValues(getClassLiteralForArray(cggl.Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['CSS1Compat']);
}
;
_.getDocumentModeSeverity = function getDocumentModeSeverity(){
  return cgguc.$clinit_DocumentModeAsserter$Severity() , cgguc.WARN;
}
;
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter_1DocumentModeProperty_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter_DocumentModeProperty', 133, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_Window = function $clinit_Window(){
  cgguc.$clinit_Window = emptyMethod;
  jl.$clinit_Object();
  cgguc.impl_2 = new cgguci.WindowImplIE;
}
;
defineClass(387, 1, $intern_0);
cgguc.$clinit_Window$ClosingEvent = function $clinit_Window$ClosingEvent(){
  cgguc.$clinit_Window$ClosingEvent = emptyMethod;
}
;
defineClass(388, 395, $intern_0);
cgguc.$clinit_Window$ClosingHandler = function $clinit_Window$ClosingHandler(){
  cgguc.$clinit_Window$ClosingHandler = emptyMethod;
}
;
cgguc.$clinit_Window$Location = function $clinit_Window$Location(){
  cgguc.$clinit_Window$Location = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.buildListParamMap = function buildListParamMap(queryString){
  var e, entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values;
  out = new ju.HashMap;
  if (jsNotEquals(queryString, null) && jl.length__I__devirtual$_0(queryString) > 1) {
    qs = jl.substring_I_Ljava_lang_String___devirtual$(queryString, 1);
    for (kvPair$array = jl.split_Ljava_lang_String___Ljava_lang_String___devirtual$(qs, '&') , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(kvPair, '=', 2);
      key = kv[0];
      if (jl.isEmpty__Z__devirtual$(key)) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = cgghc.decodeQueryString(val);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 24)) {
          e = $e0;
          log_2('Cannot decode a URL query string parameter=' + key + ' value=' + val, e);
        }
         else 
          throw unwrap_5($e0);
      }
      values = out.get_2(key);
      if (isNull(values)) {
        values = new ju.ArrayList;
        out.put_0(key, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    entry.setValue(ju.unmodifiableList(entry.getValue_1()));
  }
  out = ju.unmodifiableMap(out);
  return out;
}
;
cgguc.ensureListParameterMap = function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = cgguc.getQueryString();
  if (isNull(cgguc.listParamMap) || !jl.equals_Ljava_lang_Object__Z__devirtual$_0(cgguc.cachedQueryString, currentQueryString)) {
    cgguc.listParamMap = cgguc.buildListParamMap(currentQueryString);
    cgguc.cachedQueryString = currentQueryString;
  }
}
;
cgguc.getParameter = function getParameter(name_0){
  cgguc.$clinit_Window$Location();
  var paramsForName;
  cgguc.ensureListParameterMap();
  paramsForName = cgguc.listParamMap.get_2(name_0);
  if (isNull(paramsForName)) {
    return null;
  }
   else {
    return paramsForName.get_3(paramsForName.size_1() - 1);
  }
}
;
cgguc.getQueryString = function getQueryString(){
  return (cgguc.$clinit_Window() , cgguc.impl_2).getQueryString();
}
;
defineClass(390, 1, $intern_0);
cgguc.cachedQueryString = '';
cgguc.$clinit_Window$Navigator = function $clinit_Window$Navigator(){
  cgguc.$clinit_Window$Navigator = emptyMethod;
}
;
defineClass(391, 1, $intern_0);
cgguc.$clinit_Window$ScrollEvent = function $clinit_Window$ScrollEvent(){
  cgguc.$clinit_Window$ScrollEvent = emptyMethod;
}
;
defineClass(392, 395, $intern_0);
cgguc.$clinit_Window$ScrollHandler = function $clinit_Window$ScrollHandler(){
  cgguc.$clinit_Window$ScrollHandler = emptyMethod;
}
;
cgguc.$clinit_Window$WindowHandlers = function $clinit_Window$WindowHandlers(){
  cgguc.$clinit_Window$WindowHandlers = emptyMethod;
}
;
defineClass(394, 400, $intern_0);
cgguci.$clinit_WindowImpl = function $clinit_WindowImpl(){
  cgguci.$clinit_WindowImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cgguci.WindowImpl = function WindowImpl(){
  cgguci.$clinit_WindowImpl();
  Object_0.call(this);
  this.$init_88();
}
;
defineClass(96, 1, $intern_0);
_.$init_88 = function $init_88(){
}
;
_.getQueryString = function getQueryString_0(){
  return $wnd.location.search;
}
;
cggl.Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 96, cggl.Ljava_lang_Object_2_classLit);
cgguci.$clinit_WindowImplIE = function $clinit_WindowImplIE(){
  cgguci.$clinit_WindowImplIE = emptyMethod;
  cgguci.$clinit_WindowImpl();
}
;
cgguci.WindowImplIE = function WindowImplIE(){
  cgguci.$clinit_WindowImplIE();
  cgguci.WindowImpl.call(this);
  this.$init_89();
}
;
defineClass(227, 96, $intern_0, cgguci.WindowImplIE);
_.$init_89 = function $init_89(){
}
;
_.getQueryString = function getQueryString_1(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  if (hashLoc >= 0) {
    href_0 = href_0.substring(0, hashLoc);
  }
  var questionLoc = href_0.indexOf('?');
  return questionLoc > 0?href_0.substring(questionLoc):'';
}
;
cggl.Lcom_google_gwt_user_client_impl_WindowImplIE_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE', 227, cggl.Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit);
cgguci.$clinit_WindowImplIE$1 = function $clinit_WindowImplIE$1(){
  cgguci.$clinit_WindowImplIE$1 = emptyMethod;
}
;
defineClass(433, 1, $intern_0);
cgguci.$clinit_WindowImplIE$2 = function $clinit_WindowImplIE$2(){
  cgguci.$clinit_WindowImplIE$2 = emptyMethod;
}
;
defineClass(434, 1, $intern_0);
cgguci.$clinit_WindowImplIE$3 = function $clinit_WindowImplIE$3(){
  cgguci.$clinit_WindowImplIE$3 = emptyMethod;
}
;
defineClass(435, 1, $intern_0);
cgguci.$clinit_WindowImplIE$Resources = function $clinit_WindowImplIE$Resources(){
  cgguci.$clinit_WindowImplIE$Resources = emptyMethod;
}
;
cgguci.$clinit_WindowImplMozilla = function $clinit_WindowImplMozilla(){
  cgguci.$clinit_WindowImplMozilla = emptyMethod;
  cgguci.$clinit_WindowImpl();
}
;
cgguci.WindowImplMozilla = function WindowImplMozilla(){
  cgguci.WindowImpl.call(this);
  this.$init_90();
}
;
defineClass(251, 96, $intern_0);
_.$init_90 = function $init_90(){
}
;
cggl.Lcom_google_gwt_user_client_impl_WindowImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplMozilla', 251, cggl.Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit);
cgguc2.$clinit_UserAgent = function $clinit_UserAgent(){
  cgguc2.$clinit_UserAgent = emptyMethod;
}
;
cgguc2.$clinit_UserAgentAsserter = function $clinit_UserAgentAsserter(){
  cgguc2.$clinit_UserAgentAsserter = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentAsserter = function UserAgentAsserter(){
  cgguc2.$clinit_UserAgentAsserter();
  Object_0.call(this);
  this.$init_91();
}
;
cgguc2.assertCompileTimeUserAgent = function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = new cgguc2.UserAgentImplIe10;
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!jl.equals_Ljava_lang_Object__Z__devirtual$_0(compileTimeValue, runtimeValue)) {
    throw new cgguc2.UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue);
  }
}
;
cgguc2.scheduleUserAgentCheck = function scheduleUserAgentCheck(){
  $wnd.setTimeout($entry(cgguc2.assertCompileTimeUserAgent));
}
;
defineClass(114, 1, $intern_0, cgguc2.UserAgentAsserter);
_.$init_91 = function $init_91(){
}
;
_.onModuleLoad = function onModuleLoad_1(){
  cgguc2.scheduleUserAgentCheck();
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentAsserter_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter', 114, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentAsserter$UserAgentAsserterDisabled = function $clinit_UserAgentAsserter$UserAgentAsserterDisabled(){
  cgguc2.$clinit_UserAgentAsserter$UserAgentAsserterDisabled = emptyMethod;
}
;
defineClass(308, 1, $intern_0);
jl.$clinit_Error = function $clinit_Error(){
  jl.$clinit_Error = emptyMethod;
  jl.$clinit_Throwable();
}
;
jl.Error_0 = function Error_0(){
  jl.$clinit_Error();
  jl.Throwable.call(this);
  this.$init_92();
}
;
jl.Error_1 = function Error_1(message){
  jl.$clinit_Error();
  jl.Throwable_0.call(this, message);
  this.$init_92();
}
;
jl.Error_2 = function Error_2(message, cause){
  jl.$clinit_Error();
  jl.Throwable_1.call(this, message, cause);
  this.$init_92();
}
;
defineClass(63, 9, $intern_4);
_.$init_92 = function $init_92(){
}
;
cggl.Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 63, cggl.Ljava_lang_Throwable_2_classLit);
jl.$clinit_AssertionError = function $clinit_AssertionError(){
  jl.$clinit_AssertionError = emptyMethod;
  jl.$clinit_Error();
}
;
jl.AssertionError = function AssertionError(){
  jl.$clinit_AssertionError();
  jl.Error_0.call(this);
  this.$init_93();
}
;
jl.AssertionError_0 = function AssertionError_0(message){
  jl.$clinit_AssertionError();
  AssertionError_6.call(this, jl.valueOf_18(message));
}
;
jl.AssertionError_1 = function AssertionError_1(message){
  jl.$clinit_AssertionError();
  AssertionError_6.call(this, jl.valueOf_19(message));
}
;
jl.AssertionError_2 = function AssertionError_2(message){
  jl.$clinit_AssertionError();
  AssertionError_6.call(this, jl.valueOf_20(message));
}
;
jl.AssertionError_3 = function AssertionError_3(message){
  jl.$clinit_AssertionError();
  AssertionError_6.call(this, jl.valueOf_21(message));
}
;
jl.AssertionError_4 = function AssertionError_4(message){
  jl.$clinit_AssertionError();
  AssertionError_6.call(this, jl.valueOf_22(message));
}
;
jl.AssertionError_5 = function AssertionError_5(message){
  jl.$clinit_AssertionError();
  jl.Error_2.call(this, valueOf_23(message), instanceOf(message, 9)?message:null);
  this.$init_93();
}
;
function AssertionError_6(message){
  jl.Error_1.call(this, message);
  this.$init_93();
}

jl.AssertionError_7 = function AssertionError_7(message){
  jl.$clinit_AssertionError();
  AssertionError_6.call(this, jl.valueOf_24(message));
}
;
defineClass(22, 63, $intern_4, jl.AssertionError, jl.AssertionError_0, jl.AssertionError_1, jl.AssertionError_2, jl.AssertionError_3, jl.AssertionError_4, jl.AssertionError_5, jl.AssertionError_7);
_.$init_93 = function $init_93(){
}
;
cggl.Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 22, cggl.Ljava_lang_Error_2_classLit);
cgguc2.$clinit_UserAgentAsserter$UserAgentAssertionError = function $clinit_UserAgentAsserter$UserAgentAssertionError(){
  cgguc2.$clinit_UserAgentAsserter$UserAgentAssertionError = emptyMethod;
  jl.$clinit_AssertionError();
}
;
cgguc2.UserAgentAsserter$UserAgentAssertionError = function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  cgguc2.$clinit_UserAgentAsserter$UserAgentAssertionError();
  jl.AssertionError_5.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.');
  this.$init_94();
}
;
defineClass(115, 22, $intern_4, cgguc2.UserAgentAsserter$UserAgentAssertionError);
_.$init_94 = function $init_94(){
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 115, cggl.Ljava_lang_AssertionError_2_classLit);
cgguc2.$clinit_UserAgentImplGecko1_8 = function $clinit_UserAgentImplGecko1_8(){
  cgguc2.$clinit_UserAgentImplGecko1_8 = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplGecko1_8 = function UserAgentImplGecko1_8(){
  Object_0.call(this);
  this.$init_95();
}
;
defineClass(246, 1, $intern_0);
_.$init_95 = function $init_95(){
}
;
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 246, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentImplIe10 = function $clinit_UserAgentImplIe10(){
  cgguc2.$clinit_UserAgentImplIe10 = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplIe10 = function UserAgentImplIe10(){
  cgguc2.$clinit_UserAgentImplIe10();
  Object_0.call(this);
  this.$init_96();
}
;
defineClass(164, 1, $intern_0, cgguc2.UserAgentImplIe10);
_.$init_96 = function $init_96(){
}
;
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'ie10';
}
;
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplIe10_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe10', 164, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentImplIe8 = function $clinit_UserAgentImplIe8(){
  cgguc2.$clinit_UserAgentImplIe8 = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplIe8 = function UserAgentImplIe8(){
  Object_0.call(this);
  this.$init_97();
}
;
defineClass(249, 1, $intern_0);
_.$init_97 = function $init_97(){
}
;
_.getCompileTimeValue = function getCompileTimeValue_1(){
  return 'ie8';
}
;
_.getRuntimeValue = function getRuntimeValue_1(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplIe8_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe8', 249, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentImplIe9 = function $clinit_UserAgentImplIe9(){
  cgguc2.$clinit_UserAgentImplIe9 = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplIe9 = function UserAgentImplIe9(){
  Object_0.call(this);
  this.$init_98();
}
;
defineClass(248, 1, $intern_0);
_.$init_98 = function $init_98(){
}
;
_.getCompileTimeValue = function getCompileTimeValue_2(){
  return 'ie9';
}
;
_.getRuntimeValue = function getRuntimeValue_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplIe9_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplIe9', 248, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentImplSafari = function $clinit_UserAgentImplSafari(){
  cgguc2.$clinit_UserAgentImplSafari = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplSafari = function UserAgentImplSafari(){
  Object_0.call(this);
  this.$init_99();
}
;
defineClass(247, 1, $intern_0);
_.$init_99 = function $init_99(){
}
;
_.getCompileTimeValue = function getCompileTimeValue_3(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue_3(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 247, cggl.Ljava_lang_Object_2_classLit);
cggxc.$clinit_ReadyStateChangeHandler = function $clinit_ReadyStateChangeHandler(){
  cggxc.$clinit_ReadyStateChangeHandler = emptyMethod;
}
;
cggxc.$clinit_XMLHttpRequest = function $clinit_XMLHttpRequest(){
  cggxc.$clinit_XMLHttpRequest = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggxc.$abort = function $abort(this$static){
  cggxc.$clinit_XMLHttpRequest();
  this$static.abort();
}
;
cggxc.$clearOnReadyStateChange = function $clearOnReadyStateChange(this$static){
  cggxc.$clinit_XMLHttpRequest();
  this$static.onreadystatechange = function(){
  }
  ;
}
;
cggxc.$getReadyState = function $getReadyState(this$static){
  cggxc.$clinit_XMLHttpRequest();
  return this$static.readyState;
}
;
cggxc.$getResponseText = function $getResponseText(this$static){
  cggxc.$clinit_XMLHttpRequest();
  return this$static.responseText;
}
;
cggxc.$getStatus = function $getStatus(this$static){
  cggxc.$clinit_XMLHttpRequest();
  return this$static.status;
}
;
cggxc.$getStatusText = function $getStatusText(this$static){
  cggxc.$clinit_XMLHttpRequest();
  return this$static.statusText;
}
;
cggxc.$open = function $open(this$static, httpMethod, url_0){
  cggxc.$clinit_XMLHttpRequest();
  this$static.open(httpMethod, url_0, true);
}
;
cggxc.$open_0 = function $open_0(this$static, httpMethod, url_0, user){
  cggxc.$clinit_XMLHttpRequest();
  this$static.open(httpMethod, url_0, true, user);
}
;
cggxc.$open_1 = function $open_1(this$static, httpMethod, url_0, user, password){
  cggxc.$clinit_XMLHttpRequest();
  this$static.open(httpMethod, url_0, true, user, password);
}
;
cggxc.$send = function $send(this$static, requestData){
  cggxc.$clinit_XMLHttpRequest();
  this$static.send(requestData);
}
;
cggxc.$setOnReadyStateChange = function $setOnReadyStateChange(this$static, handler){
  cggxc.$clinit_XMLHttpRequest();
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}
;
cggxc.$setRequestHeader = function $setRequestHeader(this$static, header, value_0){
  cggxc.$clinit_XMLHttpRequest();
  this$static.setRequestHeader(header, value_0);
}
;
cggxc.$setWithCredentials = function $setWithCredentials(this$static, withCredentials){
  cggxc.$clinit_XMLHttpRequest();
  this$static.withCredentials = withCredentials;
}
;
cggxc.create_6 = function create_6(){
  cggxc.$clinit_XMLHttpRequest();
  return new $wnd.XMLHttpRequest;
}
;
cggxc.DONE = 4;
cggxc.HEADERS_RECEIVED = 2;
cggxc.LOADING = 3;
cggxc.OPENED = 1;
cggxc.UNSENT = 0;
cggxc.$clinit_XMLHttpRequest$ResponseType = function $clinit_XMLHttpRequest$ResponseType(){
  cggxc.$clinit_XMLHttpRequest$ResponseType = emptyMethod;
}
;
defineClass(430, 15, $intern_6);
cggxc.$clinit_XMLHttpRequest$ResponseType$Map = function $clinit_XMLHttpRequest$ResponseType$Map(){
  cggxc.$clinit_XMLHttpRequest$ResponseType$Map = emptyMethod;
}
;
defineClass(431, 1, $intern_0);
cgwbes.$clinit_HandlerRegistration = function $clinit_HandlerRegistration(){
  cgwbes.$clinit_HandlerRegistration = emptyMethod;
}
;
cgwbes.$clinit_SimpleEventBus$1 = function $clinit_SimpleEventBus$1(){
  cgwbes.$clinit_SimpleEventBus$1 = emptyMethod;
}
;
defineClass(405, 1, $intern_0);
cgwbes.$clinit_SimpleEventBus$2 = function $clinit_SimpleEventBus$2(){
  cgwbes.$clinit_SimpleEventBus$2 = emptyMethod;
}
;
defineClass(406, 1, $intern_0);
cgwbes.$clinit_SimpleEventBus$3 = function $clinit_SimpleEventBus$3(){
  cgwbes.$clinit_SimpleEventBus$3 = emptyMethod;
}
;
defineClass(407, 1, $intern_0);
cgwbes.$clinit_SimpleEventBus$Command = function $clinit_SimpleEventBus$Command(){
  cgwbes.$clinit_SimpleEventBus$Command = emptyMethod;
}
;
cpac.$clinit_ColumnTypes = function $clinit_ColumnTypes(){
  cpac.$clinit_ColumnTypes = emptyMethod;
  jl.$clinit_Enum();
  cpac.None = new cpac.ColumnTypes('None', 0, 0, 'text');
  cpac.Char = new cpac.ColumnTypes('Char', 1, 99, 'text');
  cpac.Str = new cpac.ColumnTypes('Str', 2, 115, 'text');
  cpac.Rstr = new cpac.ColumnTypes('Rstr', 3, 83, 'text');
  cpac.Bool = new cpac.ColumnTypes('Bool', 4, 98, 'bool');
  cpac.Real = new cpac.ColumnTypes('Real', 5, 114, 'number');
  cpac.Int = new cpac.ColumnTypes('Int', 6, 105, 'number');
  cpac.Date8 = new cpac.ColumnTypes('Date8', 7, 100, 'date');
  cpac.Date10 = new cpac.ColumnTypes('Date10', 8, 101, 'date');
  cpac.Date14 = new cpac.ColumnTypes('Date14', 9, 68, 'date');
  cpac.Time5 = new cpac.ColumnTypes('Time5', 10, 116, 'time');
  cpac.Time6 = new cpac.ColumnTypes('Time6', 11, 84, 'time');
  cpac.Day = new cpac.ColumnTypes('Day', 12, 121, 'text');
  cpac.Unsigned = new cpac.ColumnTypes('Unsigned', 13, 117, 'number');
  cpac.Operator = new cpac.ColumnTypes('Operator', 14, 111, 'text');
}
;
cpac.ColumnTypes = function ColumnTypes(enum$name, enum$ordinal, value_0, inputType){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_100();
  this.intValue = value_0;
  this.inputType = inputType;
  cpac.getMappings().put_0(jl.valueOf_15(value_0), this);
}
;
cpac.forValue = function forValue(value_0){
  cpac.$clinit_ColumnTypes();
  return cpac.getMappings().get_2(jl.valueOf_15(value_0));
}
;
cpac.getMappings = function getMappings(){
  if (isNull(cpac.mappings)) {
    {
      cggl.Lcom_priority_app_common_ColumnTypes_2_classLit;
      if (isNull(cpac.mappings)) {
        cpac.mappings = new ju.HashMap;
      }
    }
  }
  return cpac.mappings;
}
;
cpac.valueOf_2 = function valueOf_2(name_0){
  cpac.$clinit_ColumnTypes();
  return valueOf((cpac.$clinit_ColumnTypes$Map() , cpac.$MAP_1), name_0);
}
;
cpac.values_2 = function values_2(){
  cpac.$clinit_ColumnTypes();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_common_ColumnTypes_2_classLit, 1), $intern_2, 19, 0, [cpac.None, cpac.Char, cpac.Str, cpac.Rstr, cpac.Bool, cpac.Real, cpac.Int, cpac.Date8, cpac.Date10, cpac.Date14, cpac.Time5, cpac.Time6, cpac.Day, cpac.Unsigned, cpac.Operator]);
}
;
defineClass(19, 15, {19:1, 3:1, 18:1, 15:1, 1:1}, cpac.ColumnTypes);
_.$init_100 = function $init_100(){
}
;
_.getFormat = function getFormat(){
  switch (this.ordinal_0()) {
    case cpac.Date8.ordinal_0():
      return cpac.getLang() == 3?'MM/DD/YY':'DD/MM/YY';
    case cpac.Date10.ordinal_0():
      return cpac.getLang() == 3?'MM/DD/YYYY':'DD/MM/YYYY';
    case cpac.Date14.ordinal_0():
      return cpac.getLang() == 3?'MM/DD/YY HH:mm':'DD/MM/YY HH:mm';
    case cpac.Time5.ordinal_0():
    case cpac.Time6.ordinal_0():
      return 'HH:mm';
  }
  return '';
}
;
_.getInputType = function getInputType(){
  return this.inputType;
}
;
_.getValue_0 = function getValue(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_common_ColumnTypes_2_classLit = createForEnum('com.priority.app.common', 'ColumnTypes', 19, cggl.Ljava_lang_Enum_2_classLit, cpac.values_2, cpac.valueOf_2);
cpac.$clinit_ColumnTypes$Map = function $clinit_ColumnTypes$Map(){
  cpac.$clinit_ColumnTypes$Map = emptyMethod;
  cpac.$MAP_1 = createValueOfMap(cpac.values_2());
}
;
defineClass(448, 1, $intern_0);
cpac.$clinit_EntityTypes = function $clinit_EntityTypes(){
  cpac.$clinit_EntityTypes = emptyMethod;
  jl.$clinit_Enum();
  cpac.None_0 = new cpac.EntityTypes('None', 0, 0);
  cpac.Form_0 = new cpac.EntityTypes('Form', 1, 70);
  cpac.Report = new cpac.EntityTypes('Report', 2, 82);
  cpac.Wizard = new cpac.EntityTypes('Wizard', 3, 87);
  cpac.Html = new cpac.EntityTypes('Html', 4, 72);
  cpac.Movie = new cpac.EntityTypes('Movie', 5, 109);
  cpac.Gantt = new cpac.EntityTypes('Gantt', 6, 71);
  cpac.Explorer = new cpac.EntityTypes('Explorer', 7, 69);
  cpac.Dashboard = new cpac.EntityTypes('Dashboard', 8, 68);
  cpac.Olap = new cpac.EntityTypes('Olap', 9, 79);
  cpac.Procedure = new cpac.EntityTypes('Procedure', 10, 80);
  cpac.Menu = new cpac.EntityTypes('Menu', 11, 77);
  cpac.WizardMenu = new cpac.EntityTypes('WizardMenu', 12, 119);
  cpac.BPM = new cpac.EntityTypes('BPM', 13, 98);
  cpac.Generators = new cpac.EntityTypes('Generators', 14, 103);
  cpac.CompliedProg = new cpac.EntityTypes('CompliedProg', 15, 67);
  cpac.Load = new cpac.EntityTypes('Load', 16, 76);
  cpac.Interface = new cpac.EntityTypes('Interface', 17, 73);
  cpac.ExtDoc = new cpac.EntityTypes('ExtDoc', 18, 102);
  cpac.Message = new cpac.EntityTypes('Message', 19, 40);
  cpac.Frame_0 = new cpac.EntityTypes('Frame', 20, 35);
}
;
cpac.EntityTypes = function EntityTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_101();
  this.intValue = value_0;
  cpac.getMappings_0().put_0(jl.valueOf_15(value_0), this);
}
;
cpac.forValue_0 = function forValue_0(value_0){
  cpac.$clinit_EntityTypes();
  return cpac.getMappings_0().get_2(jl.valueOf_15(value_0));
}
;
cpac.getEntChar = function getEntChar(type_0){
  cpac.$clinit_EntityTypes();
  var k, k$iterator;
  for (k$iterator = cpac.getMappings_0().keySet_0().iterator(); k$iterator.hasNext();) {
    k = k$iterator.next_0().intValue_0();
    if (maskUndefined(cpac.getMappings_0().get_2(jl.valueOf_15(k))) === maskUndefined(type_0)) {
      return narrow_char(k);
    }
  }
  return 0;
}
;
cpac.getMappings_0 = function getMappings_0(){
  if (isNull(cpac.mappings_0)) {
    {
      cggl.Lcom_priority_app_common_EntityTypes_2_classLit;
      if (isNull(cpac.mappings_0)) {
        cpac.mappings_0 = new ju.HashMap;
      }
    }
  }
  return cpac.mappings_0;
}
;
cpac.valueOf_3 = function valueOf_3(name_0){
  cpac.$clinit_EntityTypes();
  return valueOf((cpac.$clinit_EntityTypes$Map() , cpac.$MAP_2), name_0);
}
;
cpac.values_3 = function values_3(){
  cpac.$clinit_EntityTypes();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_common_EntityTypes_2_classLit, 1), $intern_2, 14, 0, [cpac.None_0, cpac.Form_0, cpac.Report, cpac.Wizard, cpac.Html, cpac.Movie, cpac.Gantt, cpac.Explorer, cpac.Dashboard, cpac.Olap, cpac.Procedure, cpac.Menu, cpac.WizardMenu, cpac.BPM, cpac.Generators, cpac.CompliedProg, cpac.Load, cpac.Interface, cpac.ExtDoc, cpac.Message, cpac.Frame_0]);
}
;
defineClass(14, 15, {14:1, 3:1, 18:1, 15:1, 1:1}, cpac.EntityTypes);
_.$init_101 = function $init_101(){
}
;
_.getValue_0 = function getValue_0(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_common_EntityTypes_2_classLit = createForEnum('com.priority.app.common', 'EntityTypes', 14, cggl.Ljava_lang_Enum_2_classLit, cpac.values_3, cpac.valueOf_3);
cpac.$clinit_EntityTypes$Map = function $clinit_EntityTypes$Map(){
  cpac.$clinit_EntityTypes$Map = emptyMethod;
  cpac.$MAP_2 = createValueOfMap(cpac.values_3());
}
;
defineClass(449, 1, $intern_0);
cpac.$clinit_IConnectionHolder = function $clinit_IConnectionHolder(){
  cpac.$clinit_IConnectionHolder = emptyMethod;
}
;
cpac.$clinit_PriCommon = function $clinit_PriCommon(){
  cpac.$clinit_PriCommon = emptyMethod;
  jl.$clinit_Object();
  cpac.logger_1 = jul.getLogger_0('Pri');
}
;
cpac.IsNullOrEmpty = function IsNullOrEmpty(str){
  cpac.$clinit_PriCommon();
  return jsEquals(str, null) || jl.length__I__devirtual$_0(str) == 0;
}
;
cpac.JsonToString = function JsonToString(json){
  cpac.$clinit_PriCommon();
  return JSON.stringify(json);
}
;
cpac.Printlog = function Printlog(message){
  cpac.$clinit_PriCommon();
  if (cpac.isDebugging)
    cpac.logger_1.log_2((jul.$clinit_Level() , jul.ALL), message);
}
;
cpac.SetMailDirPath = function SetMailDirPath(path){
  cpac.$clinit_PriCommon();
  if (jl.startsWith_Ljava_lang_String__Z__devirtual$(jl.replace_CC_Ljava_lang_String___devirtual$(jl.toLowerCase__Ljava_lang_String___devirtual$(path), 92, 47), '../../system/mail')) {
    return cpac.SystemMailDir + '/' + jl.replace_CC_Ljava_lang_String___devirtual$(jl.substring_I_Ljava_lang_String___devirtual$(path, 18), 92, 47);
  }
   else if (jl.startsWith_Ljava_lang_String__Z__devirtual$(jl.replace_CC_Ljava_lang_String___devirtual$(jl.toLowerCase__Ljava_lang_String___devirtual$(path), 92, 47), '../../system/images')) {
    return cpac.SystemImagesDir + '/' + jl.replace_CC_Ljava_lang_String___devirtual$(jl.substring_I_Ljava_lang_String___devirtual$(path, 20), 92, 47);
  }
   else if (jl.startsWith_Ljava_lang_String__Z__devirtual$(jl.toLowerCase__Ljava_lang_String___devirtual$(path), 'file:///')) {
    return jl.substring_II_Ljava_lang_String___devirtual$(path, 0, 0) + jl.substring_I_Ljava_lang_String___devirtual$(path, 0 + 8);
  }
   else {
    return path;
  }
}
;
cpac.b64decode = function b64decode(str){
  cpac.$clinit_PriCommon();
  return decodeURIComponent(escape(window.atob(str)));
}
;
cpac.b64encode = function b64encode(str){
  cpac.$clinit_PriCommon();
  return window.btoa(unescape(encodeURIComponent(str)));
}
;
cpac.getHyperLinkedText = function getHyperLinkedText(obj, propertyName){
  cpac.$clinit_PriCommon();
  var h, msgtext;
  msgtext = '';
  h = obj.get_1('HyperLinkedText');
  if (isNotNull(h) && h.size_1() > 0)
    msgtext = h.get_0(0).stringValue();
  if (cpac.IsNullOrEmpty(msgtext))
    msgtext = obj.get_1(propertyName).stringValue();
  return msgtext;
}
;
cpac.getJSONNumberProperty = function getJSONNumberProperty(obj, propertyName){
  cpac.$clinit_PriCommon();
  var js;
  js = obj.get_1(propertyName);
  if (isNull(js))
    return 0;
  return js.doubleValue();
}
;
cpac.getJSONStringProperty = function getJSONStringProperty(obj, propertyName){
  cpac.$clinit_PriCommon();
  var js;
  js = obj.get_1(propertyName);
  if (isNull(js))
    return '';
  return js.stringValue();
}
;
cpac.nativeSplit = function nativeSplit(str, delim){
  return str.split(delim);
}
;
cpac.nodeItem = function nodeItem(nodes, index_0){
  return nodes[index_0];
}
;
cpac.nodesLength = function nodesLength(nodes){
  return nodes.length;
}
;
cpac.split_1 = function split_1(str, delim){
  cpac.$clinit_PriCommon();
  var i_0, jo, len, ret;
  jo = cpac.nativeSplit(str, delim);
  if (isNotNull(jo)) {
    len = cpac.nodesLength(jo);
    if (len >= 0) {
      ret = initDim(cggl.Ljava_lang_String_2_classLit, $intern_2, 2, len, 4, 1);
      for (i_0 = 0; i_0 < len; i_0++)
        ret[i_0] = cpac.nodeItem(jo, i_0);
      return ret;
    }
  }
  return initDim(cggl.Ljava_lang_String_2_classLit, $intern_2, 2, 0, 4, 1);
}
;
defineClass(341, 1, $intern_0);
cpac.SystemImagesDir = '';
cpac.SystemMailDir = '';
cpac.isDebugging = true;
cpac.$clinit_PriCommon$ChooseTypes = function $clinit_PriCommon$ChooseTypes(){
  cpac.$clinit_PriCommon$ChooseTypes = emptyMethod;
  jl.$clinit_Enum();
  cpac.Normal = new cpac.PriCommon$ChooseTypes('Normal', 0, -18);
  cpac.Zoom = new cpac.PriCommon$ChooseTypes('Zoom', 1, 0);
  cpac.Full = new cpac.PriCommon$ChooseTypes('Full', 2, 38);
  cpac.Alternate = new cpac.PriCommon$ChooseTypes('Alternate', 3, 39);
}
;
cpac.PriCommon$ChooseTypes = function PriCommon$ChooseTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_102();
  this.intValue = value_0;
  cpac.getMappings_1().put_0(jl.valueOf_15(value_0), this);
}
;
cpac.getMappings_1 = function getMappings_1(){
  if (isNull(cpac.mappings_1)) {
    {
      cggl.Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit;
      if (isNull(cpac.mappings_1)) {
        cpac.mappings_1 = new ju.HashMap;
      }
    }
  }
  return cpac.mappings_1;
}
;
cpac.valueOf_4 = function valueOf_4(name_0){
  cpac.$clinit_PriCommon$ChooseTypes();
  return valueOf((cpac.$clinit_PriCommon$ChooseTypes$Map() , cpac.$MAP_3), name_0);
}
;
cpac.values_4 = function values_4(){
  cpac.$clinit_PriCommon$ChooseTypes();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit, 1), $intern_2, 42, 0, [cpac.Normal, cpac.Zoom, cpac.Full, cpac.Alternate]);
}
;
defineClass(42, 15, {42:1, 3:1, 18:1, 15:1, 1:1}, cpac.PriCommon$ChooseTypes);
_.$init_102 = function $init_102(){
}
;
_.getValue_0 = function getValue_1(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit = createForEnum('com.priority.app.common', 'PriCommon/ChooseTypes', 42, cggl.Ljava_lang_Enum_2_classLit, cpac.values_4, cpac.valueOf_4);
cpac.$clinit_PriCommon$ChooseTypes$Map = function $clinit_PriCommon$ChooseTypes$Map(){
  cpac.$clinit_PriCommon$ChooseTypes$Map = emptyMethod;
  cpac.$MAP_3 = createValueOfMap(cpac.values_4());
}
;
defineClass(343, 1, $intern_0);
cpac.$clinit_PriCommon$MyCallback = function $clinit_PriCommon$MyCallback(){
  cpac.$clinit_PriCommon$MyCallback = emptyMethod;
}
;
cpac.$clinit_PriCommon$PriMessageType = function $clinit_PriCommon$PriMessageType(){
  cpac.$clinit_PriCommon$PriMessageType = emptyMethod;
  jl.$clinit_Enum();
  cpac.Ok = new cpac.PriCommon$PriMessageType('Ok', 0);
  cpac.OkCancel = new cpac.PriCommon$PriMessageType('OkCancel', 1);
  cpac.None_1 = new cpac.PriCommon$PriMessageType('None', 2);
  cpac.Cancel = new cpac.PriCommon$PriMessageType('Cancel', 3);
  cpac.YesNo = new cpac.PriCommon$PriMessageType('YesNo', 4);
  cpac.YesNoCancel = new cpac.PriCommon$PriMessageType('YesNoCancel', 5);
  cpac.ReadWriteCancel = new cpac.PriCommon$PriMessageType('ReadWriteCancel', 6);
}
;
cpac.PriCommon$PriMessageType = function PriCommon$PriMessageType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_103();
}
;
cpac.valueOf_5 = function valueOf_5(name_0){
  cpac.$clinit_PriCommon$PriMessageType();
  return valueOf((cpac.$clinit_PriCommon$PriMessageType$Map() , cpac.$MAP_4), name_0);
}
;
cpac.values_5 = function values_5(){
  cpac.$clinit_PriCommon$PriMessageType();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_common_PriCommon$PriMessageType_2_classLit, 1), $intern_2, 28, 0, [cpac.Ok, cpac.OkCancel, cpac.None_1, cpac.Cancel, cpac.YesNo, cpac.YesNoCancel, cpac.ReadWriteCancel]);
}
;
defineClass(28, 15, {28:1, 3:1, 18:1, 15:1, 1:1}, cpac.PriCommon$PriMessageType);
_.$init_103 = function $init_103(){
}
;
_.getValue_0 = function getValue_2(){
  return this.ordinal_0();
}
;
cggl.Lcom_priority_app_common_PriCommon$PriMessageType_2_classLit = createForEnum('com.priority.app.common', 'PriCommon/PriMessageType', 28, cggl.Ljava_lang_Enum_2_classLit, cpac.values_5, cpac.valueOf_5);
cpac.$clinit_PriCommon$PriMessageType$Map = function $clinit_PriCommon$PriMessageType$Map(){
  cpac.$clinit_PriCommon$PriMessageType$Map = emptyMethod;
  cpac.$MAP_4 = createValueOfMap(cpac.values_5());
}
;
defineClass(344, 1, $intern_0);
cpac.$clinit_SearchActions = function $clinit_SearchActions(){
  cpac.$clinit_SearchActions = emptyMethod;
  jl.$clinit_Enum();
  cpac.None_2 = new cpac.SearchActions('None', 0, -1);
  cpac.Start = new cpac.SearchActions('Start', 1, 0);
  cpac.Next = new cpac.SearchActions('Next', 2, 1);
  cpac.Prev = new cpac.SearchActions('Prev', 3, 2);
  cpac.TypeChange = new cpac.SearchActions('TypeChange', 4, 3);
  cpac.TextChange = new cpac.SearchActions('TextChange', 5, 4);
  cpac.StartChange = new cpac.SearchActions('StartChange', 6, 5);
  cpac.IgnoreCaseChanged = new cpac.SearchActions('IgnoreCaseChanged', 7, 6);
}
;
cpac.SearchActions = function SearchActions(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_104();
  this.intValue = value_0;
  cpac.getMappings_2().put_0(jl.valueOf_15(value_0), this);
}
;
cpac.getMappings_2 = function getMappings_2(){
  if (isNull(cpac.mappings_2)) {
    {
      cggl.Lcom_priority_app_common_SearchActions_2_classLit;
      if (isNull(cpac.mappings_2)) {
        cpac.mappings_2 = new ju.HashMap;
      }
    }
  }
  return cpac.mappings_2;
}
;
cpac.valueOf_6 = function valueOf_6(name_0){
  cpac.$clinit_SearchActions();
  return valueOf((cpac.$clinit_SearchActions$Map() , cpac.$MAP_5), name_0);
}
;
cpac.values_6 = function values_6(){
  cpac.$clinit_SearchActions();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_common_SearchActions_2_classLit, 1), $intern_2, 27, 0, [cpac.None_2, cpac.Start, cpac.Next, cpac.Prev, cpac.TypeChange, cpac.TextChange, cpac.StartChange, cpac.IgnoreCaseChanged]);
}
;
defineClass(27, 15, {27:1, 3:1, 18:1, 15:1, 1:1}, cpac.SearchActions);
_.$init_104 = function $init_104(){
}
;
_.getValue_0 = function getValue_3(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_common_SearchActions_2_classLit = createForEnum('com.priority.app.common', 'SearchActions', 27, cggl.Ljava_lang_Enum_2_classLit, cpac.values_6, cpac.valueOf_6);
cpac.$clinit_SearchActions$Map = function $clinit_SearchActions$Map(){
  cpac.$clinit_SearchActions$Map = emptyMethod;
  cpac.$MAP_5 = createValueOfMap(cpac.values_6());
}
;
defineClass(445, 1, $intern_0);
cpac.$clinit_WCFResponse = function $clinit_WCFResponse(){
  cpac.$clinit_WCFResponse = emptyMethod;
  jl.$clinit_Object();
}
;
cpac.WCFResponse = function WCFResponse(con){
  cpac.$clinit_WCFResponse();
  Object_0.call(this);
  this.$init_105();
  this.myWcf = con;
}
;
defineClass(6, 1, $intern_0);
_.$init_105 = function $init_105(){
}
;
_.OnPriError = function OnPriError(error, isOnServer){
}
;
_.OnPriResponse = function OnPriResponse(response){
}
;
_.getMethodName = function getMethodName(){
  return this.myWcf.curop;
}
;
_.onError_0 = function onError_1(request, exception){
}
;
_.onResponseReceived = function onResponseReceived(request, response){
  var e, res;
  try {
    if (isNotNull(this.myWcf) && isNotNull(this.myWcf.getConHolder()))
      this.myWcf.getConHolder().ServerTripCompleted(this.myWcf, this);
    if (response.getStatusCode() != 200) {
      if (response.getStatusCode() == 0) {
        this.error_0 = '@@@The server has failed to respond due to a communication error. Please try again later.\nIf this problem persists, please check your network/internet connection, and notify your system manager.\n';
      }
       else {
        this.error_0 = "@@@Can't connect to server. HTTP Response: " + response.getStatusCode() + ', ' + response.getStatusText() + '\ndetails: ' + response.getText();
      }
      this.OnPriError(this.error_0, false);
    }
     else {
      res = this.myWcf.ResponseResult(response);
      this.OnPriResponse(cpac.b64decode(res));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      if (isNotNull(this.myWcf) && isNotNull(this.myWcf.getConHolder()))
        this.myWcf.getConHolder().ServerTripCompleted(this.myWcf, this);
      this.error_0 = e.toString$();
      this.OnPriError(this.error_0, false);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
cggl.Lcom_priority_app_common_WCFResponse_2_classLit = createForClass('com.priority.app.common', 'WCFResponse', 6, cggl.Ljava_lang_Object_2_classLit);
cpac.$clinit_WCFService = function $clinit_WCFService(){
  cpac.$clinit_WCFService = emptyMethod;
  cgghc.$clinit_RequestBuilder();
}
;
cpac.GMTDates = function GMTDates(){
  return $wnd.GMTDates();
}
;
cpac.GetTimeAndPlace = function GetTimeAndPlace(){
  return cpac.JSGetTimeAndPlace();
}
;
cpac.JSGetTimeAndPlace = function JSGetTimeAndPlace(){
  return -(new Date).getTimezoneOffset() + ($wnd.GPSLocation == null?'':$wnd.GPSLocation);
}
;
cpac.WCFService = function WCFService(url_0, holder){
  cpac.$clinit_WCFService();
  cgghc.RequestBuilder.call(this, (cgghc.$clinit_RequestBuilder() , cgghc.POST), url_0);
  this.$init_106();
  this.setHeader('content-type', 'text/xml; charset=utf-8');
  this.conHolder = holder;
}
;
cpac.escapeString = function escapeString(str){
  str = str.indexOf('&') >= 0?str.replace(/&/g, '&amp;'):str;
  str = str.indexOf('<') >= 0?str.replace(/</g, '&lt;'):str;
  str = str.indexOf('>') >= 0?str.replace(/>/g, '&gt;'):str;
  return str;
}
;
defineClass(134, 83, $intern_0, cpac.WCFService);
_.$init_106 = function $init_106(){
  this.Userlang = 0;
}
;
_.EncodeString = function EncodeString(value_0){
  return cpac.escapeString(value_0);
}
;
_.EnvelopeEnd = function EnvelopeEnd(){
  return '<\/' + this.curop + '><\/s:Body><\/s:Envelope>';
}
;
_.EnvelopeStart = function EnvelopeStart(){
  return '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + jl.toString_24(this.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (jsEquals(this.Compname, null)?'':this.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (jsEquals(this.WindowsUser, null)?'':this.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + cpac.GetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (isNotNull(this.conHolder) && jsNotEquals(this.conHolder.getDname(), null)?this.conHolder.getDname():jsEquals(this.Dname, null)?'':this.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + this.OtherInfo() + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + cpac.GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this.curop + ' xmlns="http://tempuri.org/">';
}
;
_.FormActivateMobAsync = function FormActivateMobAsync(statexml, before, callback){
  var data_0, e;
  this.curop = 'FormActivateMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter_0('before', jl.valueOf_10(before)) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormExitFormMobAsync = function FormExitFormMobAsync(statexml, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormExitFormMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormHtmlMobAsync = function FormHtmlMobAsync(statexml, tstext, tsline, modified, html, comment, key, param1, param2, param3, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormHtmlMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter_1('tstext', tstext) + this.OneParameter('tsline', tsline) + this.OneParameter('modified', modified) + this.OneParameter_1('html', html) + this.OneParameter_1('comment', comment) + this.OneParameter('key', key) + this.OneParameter('param1', param1) + this.OneParameter('param2', param2) + this.OneParameter('param3', param3) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormIsAliveMobAsync = function FormIsAliveMobAsync(statexml, callback){
  var data_0, e;
  this.curop = 'FormIsAliveMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormJumpLineMobAsync = function FormJumpLineMobAsync(statexml, line, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormJumpLineMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter('line', line) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormKeyMobAsync = function FormKeyMobAsync(statexml, key, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormKeyMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter('key', key) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormQueryDlgExecuteMobAsync = function FormQueryDlgExecuteMobAsync(statexml, add_0, xml, ic, top_0, queryname, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormQueryDlgExecuteMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter_0('add', jl.valueOf_10(add_0)) + this.OneParameter_1('xml', xml) + this.OneParameter_0('ic', jl.valueOf_10(ic)) + this.OneParameter_1('queryname', queryname) + this.OneParameter('top', top_0) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormSearchMobAsync = function FormSearchMobAsync(statexml, mode, editvalue, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormSearchMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter('mode', mode) + this.OneParameter_1('editvalue', editvalue) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormSearchSetDirtyMobAsync = function FormSearchSetDirtyMobAsync(statexml, callback){
  var data_0, e;
  this.curop = 'FormSearchSetDirtyMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormStartMobAsync = function FormStartMobAsync(form_0, scrwidth, link_0, linkid, zoomcolumn, zoomname, debug, sendtitles, zoomvalue, autoRetrieveFirstRows, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormStartMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('form', form_0) + this.OneParameter('scrwidth', scrwidth) + this.OneParameter_1('link', link_0) + this.OneParameter_1('linkid', linkid) + this.OneParameter('zoomcolumn', zoomcolumn) + this.OneParameter_1('zoomname', zoomname) + this.OneParameter_0('debug', jl.valueOf_10(debug)) + this.OneParameter_0('sendtitles', jl.valueOf_10(sendtitles)) + this.OneParameter_1('zoomvalue', zoomvalue) + this.OneParameter_0('autoRetrieveFirstRows', jl.valueOf_10(autoRetrieveFirstRows)) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormSubFormMobAsync = function FormSubFormMobAsync(statexml, self_0, empty, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormSubFormMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter('self', self_0) + this.OneParameter_0('empty', jl.valueOf_10(empty)) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormUploadFileAsyncMob = function FormUploadFileAsyncMob(statexml, mode, file, base64, callback){
  var data_0, e;
  this.curop = 'FormUploadFileMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter('mode', mode) + this.OneParameter_1('file', file) + this.OneParameter_1('base64', base64) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.FormWarningMobAsync = function FormWarningMobAsync(statexml, wsql, wval, wline, wkey, wstep, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'FormWarningMob';
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('statexml', statexml) + this.OneParameter_1('wsql', wsql) + this.OneParameter('wval', wval) + this.OneParameter('wline', wline) + this.OneParameter('wkey', wkey) + this.OneParameter('wstep', wstep) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.GeneralValidPasswordMobAsync = function GeneralValidPasswordMobAsync(password, callback){
  var data_0, e;
  this.curop = 'GeneralValidPasswordMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('password', password) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.OneParameter = function OneParameter(name_0, value_0){
  return '<' + name_0 + '>' + jl.toString_26(value_0) + '<\/' + name_0 + '>';
}
;
_.OneParameter_0 = function OneParameter_0(name_0, value_0){
  return '<' + name_0 + '>' + (value_0.booleanValue()?'true':'false') + '<\/' + name_0 + '>';
}
;
_.OneParameter_1 = function OneParameter_1(name_0, value_0){
  if (jsEquals(value_0, null))
    return '';
  return '<' + name_0 + '>' + this.EncodeString(value_0) + '<\/' + name_0 + '>';
}
;
_.OtherInfo = function OtherInfo(){
  return '<OtherInfo xmlns="PriorityNS">app_' + (cpac.$clinit_WCFUtil() , cpac.AppName) + ',<\/OtherInfo>';
}
;
_.ProcAskPrintOKMobAsync = function ProcAskPrintOKMobAsync(session, mode, format, sendattach, copies, pdf, sign, quick, callback){
  var data_0, e;
  this.curop = 'ProcAskPrintOKMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.OneParameter('mode', mode) + this.OneParameter('format', format) + this.OneParameter_0('sendattach', jl.valueOf_10(sendattach)) + this.OneParameter('copies', copies) + this.OneParameter_0('pdf', jl.valueOf_10(pdf)) + this.OneParameter_0('sign', jl.valueOf_10(sign)) + this.OneParameter_0('quick', jl.valueOf_10(quick)) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcCheckExecutionMobAsync = function ProcCheckExecutionMobAsync(session, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'ProcCheckExecutionMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcChooseFieldsOKMobAsync = function ProcChooseFieldsOKMobAsync(session, field, callback){
  var data_0, e;
  this.curop = 'ProcChooseFieldsOKMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.OneParameter('field', field) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcContinueMobAsync = function ProcContinueMobAsync(session, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'ProcContinueMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcEditFieldsOKMobAsync = function ProcEditFieldsOKMobAsync(session, save, xml, callback){
  var data_0, e;
  this.curop = 'ProcEditFieldsOKMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.OneParameter_0('save', jl.valueOf_10(save)) + this.OneParameter_1('xml', xml) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcEndMobAsync = function ProcEndMobAsync(session, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'ProcEndMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcKillExecutionMobAsync = function ProcKillExecutionMobAsync(session, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'ProcKillExecutionMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcKillProcessMobAsync = function ProcKillProcessMobAsync(session, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'ProcKillProcessMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcNewReportMobAsync = function ProcNewReportMobAsync(type_0, ename, debug, mode, format, zoomvalue, callback){
  var data_0, e;
  this.curop = 'ProcNewReportMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('type', type_0) + this.OneParameter_1('ename', ename) + this.OneParameter_0('debug', jl.valueOf_10(debug)) + this.OneParameter_1('mode', mode) + this.OneParameter('format', format) + this.OneParameter_1('zoomvalue', zoomvalue) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcParamChooseMobAsync = function ProcParamChooseMobAsync(session, field, xml, callback){
  var data_0, e;
  this.curop = 'ProcParamChooseMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.OneParameter('field', field) + this.OneParameter_1('xml', xml) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcParamSearchMobAsync = function ProcParamSearchMobAsync(session, field, mode, cursor, start_0, last, editvalue, xml, callback){
  var data_0, e;
  this.curop = 'ProcParamSearchMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.OneParameter('field', field) + this.OneParameter('mode', mode) + this.OneParameter('cursor', cursor) + this.OneParameter('start', start_0) + this.OneParameter_1('last', last) + this.OneParameter_1('editvalue', editvalue) + this.OneParameter_1('xml', xml) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcStartActivateMobAsync = function ProcStartActivateMobAsync(type_0, ename, table, link_0, linkid, avoidmessages, callback){
  var data_0, e;
  this.curop = 'ProcStartActivateMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('type', type_0) + this.OneParameter_1('ename', ename) + this.OneParameter_1('table', table) + this.OneParameter_1('link', link_0) + this.OneParameter_1('linkid', linkid) + this.OneParameter_0('avoidmessages', jl.valueOf_10(avoidmessages)) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcStartMobAsync = function ProcStartMobAsync(type_0, ename, debug, repexec, avoidmessages, callback){
  var data_0, e;
  this.curop = 'ProcStartMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('type', type_0) + this.OneParameter_1('ename', ename) + this.OneParameter_0('debug', jl.valueOf_10(debug)) + this.OneParameter('repexec', repexec) + this.OneParameter_0('avoidmessages', jl.valueOf_10(avoidmessages)) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ProcWarningOKMobAsync = function ProcWarningOKMobAsync(session, warnings, callback){
  var data_0, e;
  if (isNotNull(this.conHolder) && !this.conHolder.SetIsGoneToServer(callback)) {
    if (isNotNull(callback)) {
      callback.OnPriError(null, true);
      return;
    }
  }
  this.curop = 'ProcWarningOKMob';
  if (isNotNull(this.conHolder))
    this.conHolder.SetIsGoneToServer(callback);
  this.SetHeader();
  data_0 = this.EnvelopeStart() + this.OneParameter_1('session', session) + this.OneParameter('warnings', warnings) + this.EnvelopeEnd();
  try {
    this.sendRequest(data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.ResponseResult = function ResponseResult(r){
  var a;
  a = cpac.split_1(r.getText(), this.curop + 'Result>');
  if (a.length < 2 || jl.length__I__devirtual$_0(a[1]) <= 2)
    return '';
  return jl.substring_II_Ljava_lang_String___devirtual$(a[1], 0, jl.length__I__devirtual$_0(a[1]) - 2);
}
;
_.SetComputerName = function SetComputerName(name_0){
  this.Compname = jsEquals(name_0, null)?'':name_0;
}
;
_.SetHeader = function SetHeader(){
  this.setHeader('SOAPAction', 'http://tempuri.org/IWCFService/' + this.curop);
}
;
_.SetUsernamePassword = function SetUsernamePassword(app, username, password){
  this.Username = username + '\t' + app;
  this.Password = password;
  this.Application = app;
}
;
_.SetWindowsUser = function SetWindowsUser(name_0){
  this.WindowsUser = jsEquals(name_0, null)?'':name_0;
}
;
_.getConHolder = function getConHolder(){
  return this.conHolder;
}
;
_.Userlang = 0;
cggl.Lcom_priority_app_common_WCFService_2_classLit = createForClass('com.priority.app.common', 'WCFService', 134, cggl.Lcom_google_gwt_http_client_RequestBuilder_2_classLit);
cpac.$clinit_WCFUtil = function $clinit_WCFUtil(){
  cpac.$clinit_WCFUtil = emptyMethod;
  jl.$clinit_Object();
}
;
cpac.GetWCFServiceClient = function GetWCFServiceClient(conHolder){
  cpac.$clinit_WCFUtil();
  var con;
  con = null;
  con = new cpac.WCFService(cpac.Host, conHolder);
  con.SetUsernamePassword(cpac.App, cpac.Login, cpac.Pwd);
  con.SetComputerName(cpac.ComputerName);
  con.SetWindowsUser(cpac.WindowsUser);
  con.Userlang = cpac.Lang;
  con.Dname = cpac.DName;
  return con;
}
;
cpac.SetWCFServiceClientParams = function SetWCFServiceClientParams(login, pwd, computerName, windowsUser){
  cpac.$clinit_WCFUtil();
  cpac.Login = login;
  cpac.Pwd = pwd;
  cpac.ComputerName = computerName;
  cpac.WindowsUser = windowsUser;
}
;
cpac.SetWCFServiceParams = function SetWCFServiceParams(host, app, lang_0, dname, appname){
  cpac.$clinit_WCFUtil();
  cpac.Host = host;
  cpac.App = app;
  cpac.Lang = lang_0;
  cpac.DName = dname;
  cpac.AppName = appname;
}
;
cpac.getLang = function getLang(){
  cpac.$clinit_WCFUtil();
  return cpac.Lang;
}
;
cpac.getPwd = function getPwd(){
  cpac.$clinit_WCFUtil();
  return cpac.Pwd;
}
;
defineClass(378, 1, $intern_0);
cpac.Lang = 0;
cpac.$clinit_ZoomTypes = function $clinit_ZoomTypes(){
  cpac.$clinit_ZoomTypes = emptyMethod;
  jl.$clinit_Enum();
  cpac.None_3 = new cpac.ZoomTypes('None', 0, 0);
  cpac.Attach = new cpac.ZoomTypes('Attach', 1, 1);
  cpac.Search = new cpac.ZoomTypes('Search', 2, 2);
  cpac.Choose = new cpac.ZoomTypes('Choose', 3, 3);
  cpac.Zoom_0 = new cpac.ZoomTypes('Zoom', 4, 4);
  cpac.Date14_0 = new cpac.ZoomTypes('Date14', 5, 5);
  cpac.Date8_0 = new cpac.ZoomTypes('Date8', 6, 6);
  cpac.Date10_0 = new cpac.ZoomTypes('Date10', 7, 7);
  cpac.EMail = new cpac.ZoomTypes('EMail', 8, 8);
  cpac.URL_0 = new cpac.ZoomTypes('URL', 9, 9);
  cpac.HiddenZoom = new cpac.ZoomTypes('HiddenZoom', 10, 10);
  cpac.LinkFile = new cpac.ZoomTypes('LinkFile', 11, 11);
  cpac.QEdit = new cpac.ZoomTypes('QEdit', 12, 12);
  cpac.SpecialAttach = new cpac.ZoomTypes('SpecialAttach', 13, 99);
}
;
cpac.ZoomTypes = function ZoomTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_107();
  this.intValue = value_0;
  cpac.getMappings_3().put_0(jl.valueOf_15(value_0), this);
}
;
cpac.forValue_1 = function forValue_1(value_0){
  cpac.$clinit_ZoomTypes();
  return cpac.getMappings_3().get_2(jl.valueOf_15(value_0));
}
;
cpac.getMappings_3 = function getMappings_3(){
  if (isNull(cpac.mappings_3)) {
    {
      cggl.Lcom_priority_app_common_ZoomTypes_2_classLit;
      if (isNull(cpac.mappings_3)) {
        cpac.mappings_3 = new ju.HashMap;
      }
    }
  }
  return cpac.mappings_3;
}
;
cpac.valueOf_7 = function valueOf_7(name_0){
  cpac.$clinit_ZoomTypes();
  return valueOf((cpac.$clinit_ZoomTypes$Map() , cpac.$MAP_6), name_0);
}
;
cpac.values_7 = function values_7(){
  cpac.$clinit_ZoomTypes();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_common_ZoomTypes_2_classLit, 1), $intern_2, 21, 0, [cpac.None_3, cpac.Attach, cpac.Search, cpac.Choose, cpac.Zoom_0, cpac.Date14_0, cpac.Date8_0, cpac.Date10_0, cpac.EMail, cpac.URL_0, cpac.HiddenZoom, cpac.LinkFile, cpac.QEdit, cpac.SpecialAttach]);
}
;
defineClass(21, 15, {21:1, 3:1, 18:1, 15:1, 1:1}, cpac.ZoomTypes);
_.$init_107 = function $init_107(){
}
;
_.getValue_0 = function getValue_4(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_common_ZoomTypes_2_classLit = createForEnum('com.priority.app.common', 'ZoomTypes', 21, cggl.Ljava_lang_Enum_2_classLit, cpac.values_7, cpac.valueOf_7);
cpac.$clinit_ZoomTypes$Map = function $clinit_ZoomTypes$Map(){
  cpac.$clinit_ZoomTypes$Map = emptyMethod;
  cpac.$MAP_6 = createValueOfMap(cpac.values_7());
}
;
defineClass(444, 1, $intern_0);
cpaf.$clinit_DirectAct = function $clinit_DirectAct(){
  cpaf.$clinit_DirectAct = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.DirectAct = function DirectAct(ename, exec_0, form_0, table, title_0, background, confirm_0, etype, type_0){
  cpaf.$clinit_DirectAct();
  Object_0.call(this);
  this.$init_108();
  this.ename_0 = ename;
  this.exec_0 = exec_0;
  this.form_0 = form_0;
  this.table_0 = table;
  this.title_0 = title_0;
  this.background_0 = background;
  this.confirm_0 = confirm_0;
  this.etype_0 = etype;
  this.type_0 = type_0;
}
;
defineClass(233, 1, $intern_0, cpaf.DirectAct);
_.$init_108 = function $init_108(){
}
;
_.background_0 = false;
_.confirm_0 = false;
_.exec_0 = 0;
_.form_0 = 0;
_.table_0 = 0;
cggl.Lcom_priority_app_form_DirectAct_2_classLit = createForClass('com.priority.app.form', 'DirectAct', 233, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_Form = function $clinit_Form(){
  cpaf.$clinit_Form = emptyMethod;
  jl.$clinit_Object();
  cpaf.Base64FileSize = 19 * 1024;
}
;
cpaf.ContainsError = function ContainsError(obj){
  cpaf.$clinit_Form();
  if (obj.Error != null)
    return true;
  return false;
}
;
cpaf.DateToISO = function DateToISO(dateStr){
  if (dateStr == null || dateStr == '')
    return '';
  var lang_0 = cpaf.getLang_0();
  var dateParts = dateStr.split(/\/| /);
  var year = dateParts[2];
  var month = lang_0 == '3'?Number(dateParts[0]) - 1:Number(dateParts[1]) - 1;
  var day = lang_0 == '3'?Number(dateParts[1]):Number(dateParts[0]);
  var time = dateParts[3];
  var hours = 0;
  var minutes = 0;
  var date;
  if (time !== undefined) {
    var timeParts = time.split(':');
    hours = timeParts[0];
    minutes = timeParts[1];
    hours = Number(hours);
    minutes = Number(minutes);
  }
  year = Number(year);
  if (year >= 88 && year <= 99)
    year = 1900 + year;
  else if (year < 88)
    year = 2000 + year;
  date = new Date(Date.UTC(year, month, day, hours, minutes, 0));
  return date.toISOString();
}
;
cpaf.Form_1 = function Form_1(){
  cpaf.$clinit_Form();
  Object_0.call(this);
  this.$init_109();
  this.global_forms_rows = cpaf.InitNative();
}
;
cpaf.ISOToDate = function ISOToDate(colWidth, ISODate){
  cpaf.$clinit_Form();
  var date = new Date(ISODate);
  if (isNaN(date.getTime()))
    return '';
  var dateStr = '';
  var month = date.getUTCMonth() + 1 < 10?'0' + (date.getUTCMonth() + 1):date.getUTCMonth() + 1;
  var day = date.getUTCDate();
  day = day < 10?'0' + day:day;
  var year = colWidth != 10?date.getUTCFullYear().toString().substr(2, 2):date.getUTCFullYear();
  if ((cpaf.$clinit_FormAPI() , cpaf.lang_1) != '3')
    dateStr = day + '/' + month + '/' + year;
  else 
    dateStr = month + '/' + day + '/' + year;
  if (colWidth == 14) {
    var hours = date.getUTCHours() < 10?'0' + date.getUTCHours():date.getUTCHours();
    var minutes = date.getUTCMinutes() < 10?'0' + date.getUTCMinutes():date.getUTCMinutes();
    dateStr = dateStr + ' ' + hours + ':' + minutes;
  }
  return dateStr;
}
;
cpaf.InitNative = function InitNative(){
  var global_forms_rows = [];
  return global_forms_rows;
}
;
cpaf.ParseJO = function ParseJO(jo, retObj, that, operation){
  cpaf.$clinit_Form();
  that.UpdateStarted();
  var global_forms_rows = that.global_forms_rows;
  if (jo.Form[0].FreeTable && jo.Form[0].FreeTable.length > 0) {
    for (i_0 = 0; i_0 < jo.Form[0].FreeTable.length; i_0++) {
      var table = jo.Form[0].FreeTable[i_0].table;
      global_forms_rows[table] = [];
    }
  }
  if (operation == 'FormKey_Del') {
    if (jo.Form[0].ClearLine && jo.Form[0].ClearLine.length > 0) {
      var table = jo.Form[0].ClearLine[0].table;
      if (table == jo.Form[0].Position[0].table) {
        var line = jo.Form[0].ClearLine[0].line;
        global_forms_rows[table][line] = [];
        var gform = that.GetJsTableObject(table);
        if (gform) {
          var addline = that.getRowOffset(table);
          retObj.ClearLine = {};
          retObj.ClearLine.rowindex = line + addline;
        }
      }
    }
  }
  if (jo.Form[0].NewTable && jo.Form[0].NewTable.length > 0) {
    for (var i_0 = 0; i_0 < jo.Form[0].NewTable.length; i_0++) {
      var maintable = jo.Form[0].NewTable[i_0];
      var form_0 = parseInt(maintable.form);
      var table = parseInt(maintable.table);
      var self_0 = parseInt(maintable.self);
      var title_0 = maintable.title;
      var name_0 = maintable.name;
      var level = parseInt(maintable.level);
      var rowcount = 0;
      var oneline = parseInt(maintable.oneline);
      var ishtml = parseInt(maintable.ishtml);
      var isquery = parseInt(maintable.query);
      that.AddTable(form_0, table, title_0, name_0, level, self_0, ishtml, oneline, isquery);
      var gform = that.GetJsTableObject(table);
      if (maintable.NewColumn && maintable.NewColumn.length > 0) {
        for (var j = 0; j < maintable.NewColumn.length; j++) {
          var zoomname = maintable.NewColumn[j].zoomname;
          var field = parseInt(maintable.NewColumn[j].field);
          var decimal = parseInt(maintable.NewColumn[j].decimal);
          var width_0 = parseInt(maintable.NewColumn[j].width);
          var zoom = parseInt(maintable.NewColumn[j].zoom);
          var rowcount = parseInt(maintable.NewColumn[j].height);
          var zoomstr = cpaf.getZoomType(zoom);
          var type_0 = parseInt(maintable.NewColumn[j].type);
          var bool = parseInt(maintable.NewColumn[j].bool);
          var typestr = bool == 1?'bool':cpaf.getColumnType(type_0);
          var format = cpaf.getColumnFormat(type_0);
          if (parseInt(maintable.NewColumn[j].height) > rowcount)
            rowcount = parseInt(maintable.NewColumn[j].height);
          var attachment = parseInt(maintable.NewColumn[j].attachment);
          var title_0 = maintable.NewColumn[j].title;
          that.AddColumn(self_0, zoomname, typestr, width_0, field);
          if (gform != null) {
            gform.columns[zoomname] = {};
            gform.columns[zoomname].field = field;
            gform.columns[zoomname].zoom = zoomstr;
            gform.columns[zoomname].type = typestr;
            gform.columns[zoomname].decimal = decimal;
            gform.columns[zoomname].maxLength = width_0;
            gform.columns[zoomname].format = format;
            gform.columns[zoomname].mandatory = maintable.NewColumn[j].mandatory;
            gform.columns[zoomname].readonly = maintable.NewColumn[j].readonly;
            gform.columns[zoomname].attachment = attachment;
            gform.columns[zoomname].title = title_0;
          }
        }
      }
      if (maintable.SubForm && maintable.SubForm.length > 0) {
        for (j = 0; j < maintable.SubForm.length; j++) {
          that.AddSubForm(self_0, maintable.SubForm[j].ename, maintable.SubForm[j].exec, maintable.SubForm[j].form, maintable.SubForm[j].self, maintable.SubForm[j].table, maintable.SubForm[j].title);
        }
      }
      if (maintable.Activation && maintable.Activation.length > 0) {
        for (j = 0; j < maintable.Activation.length; j++) {
          that.AddActivation(self_0, maintable.Activation[j].ename, maintable.Activation[j].exec, maintable.Activation[j].form, maintable.Activation[j].table, maintable.Activation[j].title, maintable.Activation[j].background, maintable.Activation[j].confirm, maintable.Activation[j].etype, maintable.Activation[j].type);
        }
      }
      that.SetTableRowCount(table, rowcount);
    }
  }
  if (jo.Form[0].Position && jo.Form[0].Position.length > 0) {
    if (jo.Form[0].Position[0].TableLines && jo.Form[0].Position[0].TableLines.length > 0) {
      var tableLines = jo.Form[0].Position[0].TableLines;
      for (i_0 = 0; i_0 < tableLines.length; i_0++) {
        that.SetTableLines(parseInt(tableLines[i_0].table), parseInt(tableLines[i_0].lines), parseInt(tableLines[i_0].line), parseInt(tableLines[i_0].curline));
      }
    }
    that.SetPosition(jo.Form[0].Position[0].session, jo.Form[0].Position[0].table, jo.Form[0].Position[0].field, jo.Form[0].Position[0].line, jo.Form[0].Position[0].lines, jo.Form[0].Position[0].curline, jo.Form[0].Position[0].changed, jo.Form[0].Position[0].isappend);
    if (operation == 'FormKey_Del' && jo.Form[0].Position[0].isappend == 1) {
      var table = jo.Form[0].Position[0].table;
      var gform = that.GetJsTableObject(table);
      if (gform) {
        var addline = that.getRowOffset(table);
        retObj.ClearLine = {};
        retObj.ClearLine.rowindex = jo.Form[0].Position[0].line + addline;
      }
    }
  }
  if (jo.Form[0].RT && jo.Form[0].RT.length > 0) {
    for (i_0 = 0; i_0 < jo.Form[0].RT.length; i_0++) {
      var rt = jo.Form[0].RT[i_0].FV;
      var tabId = [];
      var colIdx = [];
      var line = [];
      var value_0 = [];
      cpaf.ParseRT(rt, tabId, colIdx, line, value_0);
      if (!global_forms_rows[tabId[0]])
        global_forms_rows[tabId[0]] = [];
      if (!global_forms_rows[tabId[0]][line[0]])
        global_forms_rows[tabId[0]][line[0]] = [];
      global_forms_rows[tabId[0]][line[0]][colIdx[0]] = value_0[0];
      if (operation == 'FormKey_Return' || (operation == 'FormWarning' || (operation == 'FormKey_Tab' || (operation == 'FormKey_SaveRow' || (operation == 'FormKey_Undo' || (operation == 'FormKey_Del' || (operation == 'FormActivate' || operation == 'FormAutomaticActivate'))))))) {
        var gform = that.GetJsTableObject(tabId[0]);
        if (gform != null) {
          var colName = that.getColNameById(tabId[0], colIdx[0]);
          if (colName != null && (colName.length > 0 && (gform != null && gform.columns[colName] != null))) {
            if (!retObj.ReplaceText)
              retObj.ReplaceText = {};
            if (!retObj.ReplaceText[gform.name])
              retObj.ReplaceText[gform.name] = {};
            var addline = that.getRowOffset(tabId[0]);
            if (!retObj.ReplaceText[gform.name][line[0] + addline])
              retObj.ReplaceText[gform.name][line[0] + addline] = {};
            if (gform.columns[colName].type == 'date')
              value_0[0] = cpaf.DateToISO(value_0[0]);
            retObj.ReplaceText[gform.name][line[0] + addline][colName] = value_0[0];
          }
        }
      }
    }
  }
  if (jo.Form[0].ReplaceTextHtml && jo.Form[0].ReplaceTextHtml.length > 0) {
    var rth = jo.Form[0].ReplaceTextHtml[0];
    that.SetTableHtml(rth.table, rth.edit, rth.tsline, rth.tstext, rth.text);
    var gform = that.GetJsTableObject(rth.table);
    if (gform && gform != null)
      gform.ishtmleditable = rth.edit;
    for (var k = 0; k < 2; k++) {
      var signature = k == 0?jo.Form[0].ReplaceTextHtml[0].Signature:jo.Form[0].ReplaceTextHtml[0].SignatureEng;
      if (signature && signature.length > 0) {
        var s = signature[0];
        that.SetTableSignature(rth.table, k, s.date, s.name, s.hr, s.begin, s.position, s.email, s.phone, s.message, s.fontsize, s.cellphone, s.branch, s.dept, s.company);
      }
    }
  }
  if (jo.Form[0].Position && jo.Form[0].Position.length > 0) {
    that.SetCurFieldValue();
  }
  if (jo.Form[0].fatalerror == 1) {
    retObj.fatalerror = 1;
  }
  if (jo.Form[0].Error && jo.Form[0].Error.length > 0) {
    var msg = '';
    var err = jo.Form[0].Error[0];
    if (err.HyperLinkedText != null && err.HyperLinkedText.length > 0)
      msg = err.HyperLinkedText[0].text;
    if (msg == '')
      msg = err.message;
    retObj.Error = {};
    retObj.Error.message = msg;
    if (jo.Form[0].Error[0].messagetype)
      retObj.Error.messagetype = jo.Form[0].Error[0].messagetype;
  }
  if (jo.Form[0].Warning && jo.Form[0].Warning.length > 0) {
    var msg = '';
    var wrn = jo.Form[0].Warning[0];
    if (wrn.HyperLinkedText != null && wrn.HyperLinkedText.length > 0)
      msg = wrn.HyperLinkedText[0].text;
    if (msg == '')
      msg = wrn.message;
    var readWrite = 0;
    if (jo.Form[0].Warning[0].messagetype && (jo.Form[0].Warning[0].messagetype == 'information' && that.IsHtmlForm(jo.Form[0].Position[0].table)))
      readWrite = 1;
    that.SetWarningData(wrn.warningsql, parseInt(wrn.warningvalue), parseInt(wrn.warningline), parseInt(wrn.warningkey), parseInt(wrn.warningstep), readWrite);
    retObj.Warning = {};
    retObj.Warning.message = msg;
    if (jo.Form[0].Warning[0].messagetype)
      if (readWrite)
        retObj.Warning.messagetype = 'readWrite';
      else 
        retObj.Warning.messagetype = jo.Form[0].Warning[0].messagetype;
  }
  if (jo.Form[0].Choose && jo.Form[0].Choose.length > 0) {
    var coltype = that.getColTypeById(jo.Form[0].Position[0].table, jo.Form[0].Position[0].field);
    if (coltype == 'date') {
      var chooseobj = jo.Form[0].Choose[0];
      if (chooseobj && (chooseobj.ChooseLine && chooseobj.ChooseLine.length > 0)) {
        for (var k = 0; k < chooseobj.ChooseLine.length; k++) {
          if (chooseobj.ChooseLine[k].retval && chooseobj.ChooseLine[k].retval.length > 0) {
            var iso = cpaf.DateToISO(chooseobj.ChooseLine[k].retval);
            chooseobj.ChooseLine[k].retval = iso;
          }
        }
      }
    }
    retObj.Choose = jo.Form[0].Choose.length > 0?jo.Form[0].Choose[0]:null;
  }
  if (jo.Form[0].Search && jo.Form[0].Search.length > 0) {
    var coltype = that.getColTypeById(jo.Form[0].Position[0].table, jo.Form[0].Position[0].field);
    if (coltype == 'date') {
      var searchobj = jo.Form[0].Search[0];
      if (searchobj && (searchobj.SearchLine && searchobj.SearchLine.length > 0)) {
        for (var k = 0; k < searchobj.SearchLine.length; k++) {
          if (searchobj.SearchLine[k].retval && searchobj.SearchLine[k].retval.length > 0) {
            var iso = cpaf.DateToISO(searchobj.SearchLine[k].retval);
            searchobj.SearchLine[k].retval = iso;
          }
        }
      }
    }
    retObj.Search = jo.Form[0].Search.length > 0?jo.Form[0].Search[0]:null;
  }
  if (jo.Form[0].Activate && jo.Form[0].Activate.length > 0) {
    retObj.ActivationLink = {};
    retObj.ActivationLink.table = jo.Form[0].Activate[0].table;
    retObj.ActivationLink.link = jo.Form[0].Activate[0].link;
    retObj.ActivationLink.linkid = jo.Form[0].Activate[0].linkid;
  }
  if (jo.Form[0].UploadFile && jo.Form[0].UploadFile.length > 0) {
    retObj.UploadFile = {};
    retObj.UploadFile.file = jo.Form[0].UploadFile[0].file;
  }
}
;
cpaf.ParseRT = function ParseRT(rt, tabId, colIdx, line, value_0){
  var i_0, index_0, len, neg;
  index_0 = 0;
  tabId[0] = colIdx[0] = line[0] = 0;
  neg = false;
  for (i_0 = 0 , len = jl.length__I__devirtual$_0(rt); index_0 < 6 && i_0 < len; i_0++) {
    switch (jl.charAt_I_C__devirtual$_0(rt, i_0)) {
      case 9:
        if (neg) {
          switch (index_0) {
            case 0:
              tabId[0] = -tabId[0];
              break;
            case 1:
              colIdx[0] = -colIdx[0];
              break;
            case 2:
              line[0] = -line[0];
              break;
            case 3:
              break;
          }
        }

        index_0++;
        neg = false;
        break;
      case 45:
        neg = true;
        if (index_0 == 5 && i_0 + 1 == len)
          value_0[0] = '-';
        break;
      default:switch (index_0) {
          case 0:
            tabId[0] = tabId[0] * 10 + (jl.charAt_I_C__devirtual$_0(rt, i_0) - 48);
            break;
          case 1:
            colIdx[0] = colIdx[0] * 10 + (jl.charAt_I_C__devirtual$_0(rt, i_0) - 48);
            break;
          case 2:
            line[0] = line[0] * 10 + (jl.charAt_I_C__devirtual$_0(rt, i_0) - 48);
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            value_0[0] = neg?'-' + jl.substring_I_Ljava_lang_String___devirtual$(rt, i_0):jl.substring_I_Ljava_lang_String___devirtual$(rt, i_0);
            index_0++;
            break;
        }

        break;
    }
  }
}
;
cpaf.PrepareRetObj = function PrepareRetObj(retObj, progress, isLast, fileName){
  retObj.progress = progress;
  retObj.isLast = isLast;
  if (isLast)
    retObj.file = fileName;
}
;
cpaf.ReadFile = function ReadFile(that, file, onSuccess, onError){
  cpaf.$clinit_Form();
  var reader = new FileReader;
  reader.onload = function(event_0){
    var res = event_0.target.result;
    that.UploadFile_0(0, 'c:/' + file.name, res, onSuccess, onError);
  }
  ;
  reader.readAsDataURL(file);
}
;
cpaf.getColumnFormat = function getColumnFormat(coltype){
  var ct;
  ct = cpac.forValue(coltype);
  return ct.getFormat();
}
;
cpaf.getColumnType = function getColumnType(coltype){
  var ct;
  ct = cpac.forValue(coltype);
  return ct.getInputType();
}
;
cpaf.getEmptyObj = function getEmptyObj(){
  var jo = {};
  return jo;
}
;
cpaf.getLang_0 = function getLang_0(){
  return jl.valueOf_21((cpaf.$clinit_FormAPI() , cpaf.lang_1));
}
;
cpaf.getUploadFile = function getUploadFile(obj){
  return obj.UploadFile.file;
}
;
cpaf.getZoomType = function getZoomType(zoomtype){
  var zt;
  zt = cpac.forValue_1(zoomtype);
  return zt.toString$();
}
;
defineClass(175, 1, $intern_0, cpaf.Form_1);
_.$init_109 = function $init_109(){
  this.onSuccess = null;
  this.onError = null;
  this.fromStartForm = 0;
  this.DummyStateInited = false;
  this.onShowMessage = null;
  this.updateFieldsFunc = null;
  this.dname = null;
  this.FormTables = new ju.HashMap;
  this.ActiveTables = new ju.HashMap;
  this.RequestsQueue = new cpaf.FormAPIQueue(this);
  this._currentFormState = new cpaf.FormTableOperations;
  this.isCancelFileUpload = false;
  this.con = null;
  this.isOnServer = false;
  this.position_0 = new cpaf.Form$Position;
  this.started = 0;
  this.warningData = new cpaf.Form$WarningMessageData;
}
;
_.Activate_0 = function Activate(start_0, onSuccess, onError, ename, type_0, onProgress){
  var memento, thisForm;
  if (this.InvokeErrorIfRowChanged(onSuccess, onError))
    return;
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  this.GetConnection().FormActivateMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), start_0, new cpaf.Form$9(this, this.GetConnection(), thisForm, start_0, ename, type_0, onProgress, onSuccess, onError));
}
;
_.ActivateEnd = function ActivateEnd(onSuccess, onError, executeNow){
  cpac.Printlog('In ActivateEnd: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ActivateEnd_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  this.Activate_0(false, onSuccess, onError, null, null, null);
}
;
_.ActivateStart = function ActivateStart(onSuccess, onError, ename, type_0, onProgress, executeNow){
  cpac.Printlog('In ActivateStart: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ActivateStart_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError, ename, type_0, onProgress]))))
    return;
  this.Activate_0(true, onSuccess, onError, ename, type_0, onProgress);
}
;
_.AddActivation = function AddActivation(tabself, ename, exec_0, form_0, table, title_0, background, confirm_0, etype, type_0){
  var ft;
  ft = this.FormTables.get_2(jl.valueOf_15(tabself));
  if (isNotNull(ft))
    ft.AddActivation_0(ename, exec_0, form_0, table, title_0, background, confirm_0, etype, type_0);
}
;
_.AddColumn = function AddColumn(form_0, name_0, type_0, width_0, field){
  var ft;
  ft = this.FormTables.get_2(jl.valueOf_15(form_0));
  if (isNotNull(ft))
    ft.AddColumn_0(name_0, type_0, width_0, field);
}
;
_.AddCurrentRow = function AddCurrentRow(row, retObj){
  cpaf.$clinit_Form();
  retObj.NewRow = {};
  retObj.NewRow.rowindex = row;
}
;
_.AddHtmlToResponseObject = function AddHtmlToResponseObject(retObj, isGetRows){
  cpaf.$clinit_Form();
  var ind, styleEnd, styleStart, text_0;
  text_0 = this.getCurrentForm().htmltext;
  if (jsNotEquals(text_0, null) && jl.length__I__devirtual$_0(text_0) > 0) {
    styleStart = jl.indexOf_Ljava_lang_String__I__devirtual$(text_0, '<style>');
    styleEnd = jl.indexOf_Ljava_lang_String__I__devirtual$(text_0, '<\/style>');
    if (styleStart == 0 && styleEnd > 0)
      text_0 = jl.trim__Ljava_lang_String___devirtual$(jl.substring_I_Ljava_lang_String___devirtual$(text_0, styleEnd + 8));
    if (jl.endsWith_Ljava_lang_String__Z__devirtual$(text_0, '&nbsp;<\/P>'))
      text_0 = jl.substring_II_Ljava_lang_String___devirtual$(text_0, 0, jl.length__I__devirtual$_0(text_0) - 10) + '<\/P>';
    else {
      ind = jl.indexOf_Ljava_lang_String__I__devirtual$(text_0, '&nbsp;<\/P><timestamp:');
      if (ind >= 0)
        text_0 = jl.substring_II_Ljava_lang_String___devirtual$(text_0, 0, ind) + jl.substring_II_Ljava_lang_String___devirtual$(text_0, ind + 6, jl.length__I__devirtual$_0(text_0));
    }
  }
  this.FormHtmlRetobj(retObj, text_0, isGetRows, this.getCurrentForm().isEdit, this.getCurrentForm().table_0, this);
}
;
_.AddSubForm = function AddSubForm(tabself, ename, exec_0, form_0, self_0, table, title_0){
  var ft;
  ft = this.FormTables.get_2(jl.valueOf_15(tabself));
  if (isNotNull(ft))
    ft.AddSubForm_0(ename, exec_0, form_0, self_0, table, title_0);
}
;
_.AddTable = function AddTable(form_0, table, title_0, name_0, level, self_0, ishtml, oneline, isquery){
  var ft;
  ft = new cpaf.FormTable(this, table, form_0, title_0, name_0, level, self_0, ishtml, oneline, isquery);
  this.FormTables.put_0(jl.valueOf_15(self_0), ft);
  this.ActiveTables.put_0(jl.valueOf_15(table), ft);
}
;
_.AddText = function AddText(text_0, addFlag, commentFlag, lang2Flag, onSuccess, onError, executeNow){
  var error, errorType, memento, newtext, thisForm;
  cpac.Printlog('In AddText: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.AddText_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [text_0, jl.valueOf_15(addFlag), jl.valueOf_15(commentFlag), jl.valueOf_15(lang2Flag), onSuccess, onError]))))
    return;
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  error = null;
  errorType = null;
  newtext = null;
  if (this.getCurrentForm().ishtml_0 == 0) {
    error = 'Not an Html form.';
    errorType = 'noHtml';
  }
   else if (this.getCurrentForm().isEdit == 0) {
    error = 'This form is readonly.';
    errorType = 'readOnlyForm';
  }
   else {
    newtext = this.getCurrentForm().ComposeText(this.getCurrentForm().htmltext, text_0, addFlag == 1, commentFlag == 1, lang2Flag == 1);
  }
  if (jsNotEquals(newtext, null) && jl.length__I__devirtual$_0(newtext) >= 190000) {
    error = 'Text is too long (limited to 190000 Characters).';
    errorType = 'textTooLong';
  }
  if (jsNotEquals(error, null)) {
    cpaf.InvokeCallback(thisForm, null, null, error, errorType, onSuccess, onError, false);
    return;
  }
  if (jl.length__I__devirtual$_0(newtext) < 190000) {
    this.GetConnection().FormHtmlMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), this.getCurrentForm().tstext_0, fromInt(this.getCurrentForm().tsline_0), {l:1, m:0, h:0}, cpac.b64encode(newtext), '', fromInt(-(cpaf.$clinit_PriKeys() , cpaf.SaveHtml).getValue_0()), {l:0, m:0, h:0}, {l:0, m:0, h:0}, {l:0, m:0, h:0}, new cpaf.Form$16(this, this.GetConnection(), thisForm, onSuccess, onError));
  }
   else {
  }
}
;
_.ClearRows = function ClearRows(onSuccess, onError, executeNow){
  cpac.Printlog('In ClearRows: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ClearRows_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  if (this.getCurrentForm().level_0 > 0) {
    cpac.Printlog('Before InvokeCallback, ClearRows may be used in top level forms only (error)');
    cpaf.InvokeCallback(this, null, null, 'ClearRows may be used in top level forms only.', 'noClearOnSubForm', onSuccess, onError, false);
    return;
  }
  this.getCurrentForm().setAdd(false);
  this.FormKey((cpaf.$clinit_PriKeys() , cpaf.Clntb), onSuccess, onError);
}
;
_.ClearSearchFilter = function ClearSearchFilter(onSuccess, onError, executeNow){
  cpac.Printlog('In ClearSearchFilter: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ClearSearchFilter_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  this.getCurrentForm().ClearSearchFilter_0(onSuccess, onError);
}
;
_.Con_FormUploadFileCompleted = function Con_FormUploadFileCompleted(jo, retObj, fileName, userState, uploadFileSection, isLast, fileContents, onSuccess, onError){
  cpaf.$clinit_Form();
  var e, fn, progress, ret;
  try {
    fn = cpaf.getUploadFile(retObj);
    if (jsNotEquals(fn, null) && jl.length__I__devirtual$_0(fn) > 0)
      fileName = fn;
    if (!isLast) {
      progress = round_int((uploadFileSection + 1) * 19456 / jl.length__I__devirtual$_0(fileContents) * 100);
      if (progress > 100)
        progress = 100;
      ret = new cggjc.JSONObject;
      cpaf.PrepareRetObj(ret, progress, false, fileName);
      cpac.Printlog('Before InvokeSuccessNow, upload not last (success)');
      cpaf.InvokeSuccessNow(onSuccess, ret);
      this.UploadFile_0(uploadFileSection + 1, fileName, fileContents, onSuccess, onError, userState);
    }
     else {
      ret = new cggjc.JSONObject;
      cpaf.PrepareRetObj(ret, 100, true, fileName);
      cpac.Printlog('Before InvokeCallback, upload last (success)');
      cpaf.InvokeCallback(this, jo, ret, null, null, onSuccess, onError, false);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      return;
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.DelRow = function DelRow(onSuccess, onError, executeNow){
  cpac.Printlog('In DelRow: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.DelRow_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  this.FormKey((cpaf.$clinit_PriKeys() , cpaf.Del), onSuccess, onError);
}
;
_.EndCurrentForm = function EndCurrentForm(onSuccess, onError, executeNow){
  var memento, thisForm;
  cpac.Printlog('In EndCurrentForm: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.EndCurrentForm_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  if (this.InvokeErrorIfRowChanged(onSuccess, onError))
    return;
  if (this.getCurrentForm().ishtml_0 == 1 && this.getCurrentForm().isEdit == 1) {
    memento = this.getCurrentForm().CreateMemento();
    thisForm = this;
    this.GetConnection().FormHtmlMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), this.getCurrentForm().tstext_0, fromInt(this.getCurrentForm().tsline_0), {l:0, m:0, h:0}, cpac.b64encode(''), '', fromInt(-(cpaf.$clinit_PriKeys() , cpaf.Tab).getValue_0()), {l:0, m:0, h:0}, {l:0, m:0, h:0}, {l:0, m:0, h:0}, new cpaf.Form$10(this, this.GetConnection(), thisForm, onSuccess, onError));
  }
   else if (this.getCurrentForm().level_0 == 0) {
    memento = this.getCurrentForm().CreateMemento();
    thisForm = this;
    this.GetConnection().FormExitFormMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), new cpaf.Form$11(this, this.GetConnection(), thisForm, onSuccess, onError));
  }
   else {
    this.SaveCurrentRow(1, onSuccess, onError, 1);
  }
}
;
_.ExecuteNextRequest = function ExecuteNextRequest(){
  this.RequestsQueue.ExecuteNextRequest();
}
;
_.FormChoose = function FormChoose(fieldName, fieldValue, onSuccess, onError, executeNow){
  var col, memento, thisForm;
  cpac.Printlog('In FormChoose: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.Choose_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [fieldName, fieldValue, onSuccess, onError]))))
    return;
  col = this.getCurrentForm().getCol_0(fieldName);
  if (isNull(col)) {
    cpac.Printlog("Before InvokeCallback, FormChoose can't find column (error)");
    cpaf.InvokeFormChooseCallback(this, null, null, "Can't find column: " + fieldName, 'noSuchColumn', onSuccess, onError, false);
    return;
  }
  this.getCurrentForm().SetField(col.field_0, fieldValue);
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  this.GetConnection().FormKeyMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), fromInt((cpac.$clinit_PriCommon$ChooseTypes() , cpac.Normal).getValue_0()), new cpaf.Form$18(this, this.GetConnection(), thisForm, onSuccess, onError));
}
;
_.FormFieldUpdate = function FormFieldUpdate(fieldName, value_0, onSuccess, onError, executeNow){
  var col;
  cpac.Printlog('In FormFieldUpdate: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.FieldUpdate), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [fieldName, value_0, onSuccess, onError]))))
    return;
  col = this.getCurrentForm().getCol_0(fieldName);
  if (isNull(col)) {
    cpac.Printlog("Before InvokeCallback, FormFieldUpdate can't find column (error)");
    cpaf.InvokeCallback(this, null, null, "Can't find column: " + fieldName, 'noSuchColumn', onSuccess, onError, false);
    return;
  }
  if (jsEquals(col.type_0, 'date'))
    value_0 = cpaf.ISOToDate(col.width_0, value_0);
  this.getCurrentForm().SetField(col.field_0, value_0);
  this.FormKey((cpaf.$clinit_PriKeys() , cpaf.Return), onSuccess, onError);
}
;
_.FormGoto = function FormGoto(row, getData, onSuccess, onError){
  var firstrow, hasData, jo, lastrow, memento, retObj, thisForm;
  if (this.InvokeErrorIfRowChanged(onSuccess, onError))
    return;
  firstrow = this.getCurrentForm().line_0;
  lastrow = this.getCurrentForm().line_0 + this.getCurrentForm().rowcount;
  if (row >= firstrow && row <= lastrow + 1) {
    hasData = true;
    retObj = new cggjc.JSONObject;
    if (getData) {
      hasData = this.GetRowsData(this.getCurrentForm().table_0, row, retObj, this);
    }
     else {
      this.AddCurrentRow(row, retObj);
    }
    if (hasData) {
      this.SetRowClient(row);
      jo = cpaf.getEmptyObj();
      cpac.Printlog('Before InvokeCallback, FormGoto hasData=true (success)');
      cpaf.InvokeCallback(this, jo, retObj, null, null, onSuccess, onError, false);
      return;
    }
  }
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  this.GetConnection().FormJumpLineMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), fromInt(row), new cpaf.Form$12(this, this.GetConnection(), thisForm, getData, row, onSuccess, onError));
}
;
_.FormHtml = function FormHtml(onSuccess, onError){
  var jo, retObj;
  retObj = new cggjc.JSONObject;
  this.AddHtmlToResponseObject(retObj, true);
  jo = cpaf.getEmptyObj();
  cpaf.InvokeCallback(this, jo, retObj, null, null, onSuccess, onError, false);
}
;
_.FormHtmlRetobj = function FormHtmlRetobj(retObj, htmltext, isGetRows, edit, table, that){
  var gform = that.GetJsTableObject(table);
  if (isGetRows) {
    retObj.RowsData = {};
    retObj.RowsData[gform.name] = {};
    retObj.RowsData[gform.name][1] = {};
    retObj.RowsData[gform.name][1]['htmltext'] = htmltext;
  }
   else {
    if (!retObj.ReplaceText)
      retObj.ReplaceText = {};
    retObj.ReplaceText[gform.name] = {};
    retObj.ReplaceText[gform.name][1] = {};
    retObj.ReplaceText[gform.name][1]['htmltext'] = htmltext;
  }
}
;
_.FormKey = function FormKey(key, onSuccess, onError){
  var memento, thisForm;
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  this.GetConnection().FormKeyMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), fromInt(-key.getValue_0()), new cpaf.Form$4(this, this.GetConnection(), thisForm, key, onSuccess, onError));
}
;
_.FormQuery = function FormQuery(filter, fromRow, ignoreCase, onSuccess, onError){
  var memento, thisForm, xml;
  thisForm = this;
  if (this.started == 1 && isNull(filter) && fromRow <= 1) {
    thisForm.getCurrentForm().setAdd(true);
    this.FormGoto(1, true, onSuccess, onError);
    return;
  }
  memento = this.getCurrentForm().CreateMemento();
  xml = null;
  if (isNotNull(filter)) {
    xml = cpac.b64encode(cpac.JsonToString(filter));
  }
  this.GetConnection().FormQueryDlgExecuteMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), this.getCurrentForm().isAdd_0(), xml, ignoreCase, fromInt(fromRow + this.getCurrentForm().rowcount - 2), '', new cpaf.Form$3(this, this.GetConnection(), thisForm, onSuccess, onError, fromRow));
}
;
_.FormSearchAction = function FormSearchAction(action, searchText, onSuccess, onError, executeNow){
  var thisForm;
  cpac.Printlog('In FormSearchAction: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SearchAction), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [jl.valueOf_15(action), searchText, onSuccess, onError]))))
    return;
  thisForm = this;
  this.GetConnection().FormSearchMobAsync(this.GetDummyFormState(), fromInt(action), searchText, new cpaf.Form$17(this, this.GetConnection(), thisForm, onSuccess, onError));
}
;
_.FormStart = function FormStart(name_0, autoRetrieveFirstRows, onSuccess, onError){
  var debug, link_0, linkid, sendtitles, thisForm, zoomcolumn, zoomname, zoomvalue;
  link_0 = '';
  linkid = '';
  zoomcolumn = 0;
  zoomname = '';
  debug = false;
  sendtitles = false;
  zoomvalue = '';
  thisForm = this;
  this.GetConnection().FormStartMobAsync(name_0, fromInt(-1), link_0, linkid, fromInt(zoomcolumn), zoomname, debug, sendtitles, zoomvalue, autoRetrieveFirstRows, new cpaf.Form$1(this, this.GetConnection(), thisForm, onSuccess, onError));
}
;
_.FormWarning = function FormWarning(ok, executeNow){
  var onError, onSuccess, thisForm;
  onSuccess = this.onSuccess;
  onError = this.onError;
  cpac.Printlog('In FormWarning: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.WarningApproved), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [jl.valueOf_15(ok), onError]))))
    return;
  if (ok == 0 && this.warningData.readWrite == 0) {
    this.HandleError();
    cpaf.onWarningCancel(this, onError, 'warningCancel');
    return;
  }
  thisForm = this;
  this.GetConnection().FormWarningMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), this.getCurrentForm().CreateMemento()), this.warningData.wsql, this.warningData.wval, this.warningData.readWrite == 0?this.warningData.wline:fromInt(ok), this.warningData.wkey, this.warningData.wstep, new cpaf.Form$2(this, this.GetConnection(), thisForm, onSuccess, onError));
}
;
_.GetActivationLink = function GetActivationLink(retObj){
  cpaf.$clinit_Form();
  return retObj.ActivationLink;
}
;
_.GetConnection = function GetConnection(){
  if (isNotNull(this.con))
    return this.con;
  this.con = cpac.GetWCFServiceClient(this);
  return this.con;
}
;
_.GetDummyFormState = function GetDummyFormState(){
  this.InitDummyFormState();
  return this.dummyFormState;
}
;
_.GetFileUrl = function GetFileUrl(file){
  return cpac.SetMailDirPath(file);
}
;
_.GetJsTableObject = function GetJsTableObject(table){
  cpaf.$clinit_Form();
  var ft;
  ft = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(ft))
    return ft.GetJsTableObject_0();
  return null;
}
;
_.GetRows = function GetRows(fromRow, onSuccess, onError, executeNow){
  var filter;
  cpac.Printlog('In GetRows: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.GetRows_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [jl.valueOf_15(fromRow), onSuccess, onError]))))
    return;
  if (this.InvokeErrorIfRowChanged(onSuccess, onError))
    return;
  filter = this.getCurrentForm().GetFilter();
  if (this.getCurrentForm().ishtml_0 == 1) {
    this.FormHtml(onSuccess, onError);
  }
   else if (this.getCurrentForm().level_0 == 0) {
    this.FormQuery(filter, fromRow, true, onSuccess, onError);
  }
   else {
    this.FormGoto(fromRow, true, onSuccess, onError);
  }
}
;
_.GetRowsData = function GetRowsData(table, fromRow, retObj, that){
  cpaf.$clinit_Form();
  var gform = that.GetJsTableObject(table);
  if (gform == null)
    return false;
  var global_forms_rows = that.global_forms_rows;
  if (!global_forms_rows || (!global_forms_rows[table] || global_forms_rows[table].length <= 0)) {
    retObj.RowsData = {};
    retObj.RowsData[gform.name] = {};
    return true;
  }
  var offset = that.getRowOffset(table);
  var currow = fromRow - offset;
  var lines = that.getTableLines(table);
  var tab = global_forms_rows[table];
  var hasRows = false;
  var curlines = lines - offset;
  var rowcount = that.getTableRowCount(table);
  if (curlines > rowcount)
    curlines = rowcount;
  if (that.getIsAppend()) {
    retObj.RowsData = {};
    retObj.RowsData[gform.name] = {};
    return true;
  }
  retObj.RowsData = {};
  retObj.RowsData[gform.name] = {};
  for (var i_0 = currow; i_0 <= curlines; i_0++) {
    for (var field in tab[i_0]) {
      var colName = that.getColNameById(table, field);
      if (colName != null && (colName.length > 0 && gform.columns[colName] != null)) {
        if (!retObj.RowsData[gform.name][i_0 + offset])
          retObj.RowsData[gform.name][i_0 + offset] = {};
        var value_0 = tab[i_0][field];
        if (gform.columns[colName].type == 'date')
          value_0 = cpaf.DateToISO(value_0);
        retObj.RowsData[gform.name][i_0 + offset][colName] = value_0;
        hasRows = true;
      }
    }
  }
  return hasRows;
}
;
_.GotoSubForm = function GotoSubForm(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError, executeNow){
  var ft, memento, thisForm;
  cpac.Printlog('In GotoSubForm: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.StartSubForm), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError]))))
    return;
  if (this.InvokeErrorIfRowChanged(onSuccess, onError))
    return;
  ft = this.getCurrentForm();
  if (isNull(ft.GetSubForms()) || !ft.GetSubForms().containsKey_0(formName)) {
    cpac.Printlog("Before InvokeCallback, GotoSubForm can't find subform (error)");
    cpaf.InvokeCallback(this, null, null, "Can't find Sub Form: " + formName, 'noSuchSubForm', onSuccess, onError, false);
    return;
  }
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  this.GetConnection().FormSubFormMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), fromInt(ft.GetSubForms().get_2(formName).getSelf()), false, new cpaf.Form$13(this, this.GetConnection(), thisForm, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError));
}
;
_.HandleError = function HandleError(){
  this.RequestsQueue.HandleError();
}
;
_.InitDummyFormState = function InitDummyFormState(){
  var jop, opTable, opsTable, ses, tableState;
  if (this.DummyStateInited)
    return;
  if (jsEquals(this.getSession(), null) || jl.isEmpty__Z__devirtual$(this.getSession()))
    return;
  tableState = new cggjc.JSONObject;
  opTable = new cggjc.JSONArray;
  opsTable = new cggjc.JSONArray;
  tableState.put('Operations', opsTable);
  tableState.put('Operation', opTable);
  ses = new cggjc.JSONObject;
  ses.put('session', new cggjc.JSONString(this.getSession()));
  opsTable.set_0(opsTable.size_1(), ses);
  jop = new cggjc.JSONObject;
  jop.put('field', new cggjc.JSONString('0'));
  jop.put('line', new cggjc.JSONString('0'));
  jop.put('curtab', new cggjc.JSONString('0'));
  jop.put('value', new cggjc.JSONString(''));
  jop.put('active', new cggjc.JSONString('1'));
  jop.put('key', new cggjc.JSONString('0'));
  opTable.set_0(opTable.size_1(), jop);
  this.dummyFormState = cpac.b64encode(tableState.toString$());
}
;
_.InvokeErrorIfRowChanged = function InvokeErrorIfRowChanged(onSuccess, onError){
  if (this.position_0.changed_0 == 1) {
    cpac.Printlog('Before InvokeCallback, InvokeErrorIfRowChanged');
    cpaf.InvokeCallback(this, null, null, 'Must save/discard changes in current row first.', 'mustSaveOrDiscard', onSuccess, onError, false);
    return true;
  }
  return false;
}
;
_.IsAlive = function IsAlive(onSuccess, onError, executeNow){
  var memento, thisForm;
  cpac.Printlog('In IsAlive: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.IsAlive_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  this.GetConnection().FormIsAliveMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), new cpaf.Form$15(this, this.GetConnection(), thisForm, onSuccess, onError));
}
;
_.IsHtmlForm = function IsHtmlForm(table){
  var tab;
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab) && tab.ishtml_0 == 1)
    return true;
  return false;
}
;
_.NewRow_0 = function NewRow(onSuccess, onError, executeNow){
  var line;
  cpac.Printlog('In NewRow: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.NewRow_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  if (this.InvokeErrorIfRowChanged(onSuccess, onError))
    return;
  line = this.getCurrentForm().lines_0 + 1;
  if (this.position_0.isappend_0 == 1)
    line -= 1;
  this.FormGoto(line, false, onSuccess, onError);
}
;
_.SaveCurrentRow = function SaveCurrentRow(exit, onSuccess, onError, executeNow){
  var memento, thisForm;
  cpac.Printlog('In SaveCurrentRow: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SaveRow), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [jl.valueOf_15(exit), onSuccess, onError]))))
    return;
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  if (exit == 1 && this.getCurrentForm().level_0 > 0) {
    this.FormKey((cpaf.$clinit_PriKeys() , cpaf.Tab), onSuccess, onError);
  }
   else {
    this.GetConnection().FormKeyMobAsync(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), fromInt((cpaf.$clinit_PriKeys() , cpaf.SaveRow_0).getValue_0()), new cpaf.Form$14(this, this.GetConnection(), thisForm, onSuccess, onError));
  }
}
;
_.ServerTripCompleted = function ServerTripCompleted(sender, e){
  this.isOnServer = false;
}
;
_.SetActiveRow = function SetActiveRow(row, onSuccess, onError, executeNow){
  cpac.Printlog('In SetActiveRow: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetActiveRow_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [jl.valueOf_15(row), onSuccess, onError]))))
    return;
  this.FormGoto(row, false, onSuccess, onError);
}
;
_.SetCurFieldValue = function SetCurFieldValue(){
  var value_0;
  value_0 = this.getFieldValue(this.position_0.table_0, this.position_0.line_0, this.position_0.field_0, this);
  this.curTab.SetField(this.position_0.field_0, value_0);
}
;
_.SetIsGoneToServer = function SetIsGoneToServer(userState){
  if (this.isOnServer)
    return false;
  this.isOnServer = true;
  return true;
}
;
_.SetPosition = function SetPosition(session, table, field, line, lines, curline, changed, isappend){
  var tab;
  this.position_0.table_0 = table;
  this.position_0.field_0 = field;
  this.position_0.line_0 = line;
  this.position_0.lines_0 = lines;
  this.position_0.curline_0 = curline;
  this.position_0.changed_0 = changed;
  this.position_0.isappend_0 = isappend;
  this.setSession(session);
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab)) {
    this.curTab = tab;
    tab.SetCurRow(tab.line_0 + this.position_0.line_0 - 1);
    tab.SetCurRowInData(this.position_0.line_0);
  }
}
;
_.SetRowClient = function SetRowClient(row){
  var tab;
  tab = this.getCurrentForm();
  if (isNotNull(tab)) {
    this.position_0.field_0 = 1;
    this.position_0.line_0 = row - tab.line_0 + 1;
    this.position_0.curline_0 = row;
    tab.SetCurRow(row);
    tab.SetCurRowInData(row - tab.line_0 + 1);
    this.SetCurFieldValue();
  }
}
;
_.SetSearchFilter = function SetSearchFilter(filter, onSuccess, onError, executeNow){
  cpac.Printlog('In SetSearchFilter: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetSearchFilter_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [filter, onSuccess, onError]))))
    return;
  this.getCurrentForm().SetSearchFilter_0(filter, onSuccess, onError);
}
;
_.SetSimpleSearchFilter = function SetSimpleSearchFilter(filter, onSuccess, onError, executeNow){
  cpac.Printlog('In SetSimpleSearchFilter: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetSimpleSearchFilter_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [filter, onSuccess, onError]))))
    return;
  this.getCurrentForm().SetSimpleSearchFilter_0(filter, onSuccess, onError);
}
;
_.SetTableHtml = function SetTableHtml(table, edit, tsline, tstext, url_0){
  var ft;
  ft = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(ft))
    ft.SetHtmlValues(edit, tsline, tstext, url_0);
}
;
_.SetTableLines = function SetTableLines(table, lines, line, curline){
  var ft;
  ft = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(ft))
    ft.SetTableLines_0(lines, line, curline);
}
;
_.SetTableRowCount = function SetTableRowCount(table, rowcount){
  var ft;
  ft = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(ft))
    ft.rowcount = rowcount;
}
;
_.SetTableSignature = function SetTableSignature(table, eng, date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company){
  var ft;
  ft = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(ft))
    ft.SetSignature(eng, date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company);
}
;
_.SetWarningData = function SetWarningData(wsql, wval, wline, wkey, wstep, readWrite){
  this.warningData.SetData(wsql, fromInt(wval), fromInt(wline), fromInt(wkey), fromInt(wstep), readWrite);
}
;
_.Undo = function Undo(onSuccess, onError, executeNow){
  cpac.Printlog('In Undo: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.Undo_0), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [onSuccess, onError]))))
    return;
  this.FormKey((cpaf.$clinit_PriKeys() , cpaf.Undo_1), onSuccess, onError);
}
;
_.UpdateStarted = function UpdateStarted(){
  if (this.started == 0)
    this.started = 1;
  else if (this.started == 1)
    this.started = 2;
}
;
_.UploadDataUrl = function UploadDataUrl(dataUrl, type_0, onSuccess, onError, executeNow){
  var that;
  cpac.Printlog('In UploadFile: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.UploadFile_1), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [dataUrl, type_0, onSuccess, onError]))))
    return;
  if (jsEquals(dataUrl, '')) {
    cpac.Printlog('Before InvokeCallback, Upload data is empty (error)');
    cpaf.InvokeCallback(this, null, null, 'empty data.', 'exception', onSuccess, onError, false);
    return;
  }
  that = this;
  this.GetConnection().FormSearchSetDirtyMobAsync(this.GetDummyFormState(), new cpaf.Form$6(this, this.GetConnection(), that, type_0, dataUrl, onSuccess, onError));
}
;
_.UploadFile_0 = function UploadFile(uploadFileSection, fileName, fileContents, onSuccess, onError, userState){
  cpaf.$clinit_Form();
  var b64, contents, finished, macFileTransfer, memento, ret, thisForm, uploadmode;
  uploadmode = 0;
  if (uploadFileSection == 0) {
    b64 = jl.indexOf_Ljava_lang_String_I_I__devirtual$(fileContents, 'base64,', 0);
    if (b64 >= 0)
      fileContents = jl.substring_I_Ljava_lang_String___devirtual$(fileContents, b64 + 7);
  }
   else {
    uploadmode = 1;
  }
  if (this.isCancelFileUpload) {
    ret = new cggjc.JSONObject;
    cpaf.PrepareRetObj(ret, -1, true, '');
    cpac.Printlog('Before InvokeCallback, cancel file upload (success)');
    cpaf.InvokeCallback(this, onSuccess, ret, null, null, onSuccess, onError, false);
    this.isCancelFileUpload = false;
    return;
  }
  finished = false;
  macFileTransfer = null;
  if (cpac.IsNullOrEmpty(fileContents))
    finished = true;
  else if (uploadFileSection * 19456 >= jl.length__I__devirtual$_0(fileContents))
    finished = true;
  else {
    macFileTransfer = jl.substring_II_Ljava_lang_String___devirtual$(fileContents, uploadFileSection * 19456, (uploadFileSection + 1) * 19456);
  }
  memento = this.getCurrentForm().CreateMemento();
  thisForm = this;
  contents = fileContents;
  if (!finished) {
    this.GetConnection().FormUploadFileAsyncMob(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), fromInt(uploadmode), fileName, cpac.b64encode(macFileTransfer), new cpaf.Form$7(this, this.GetConnection(), thisForm, fileName, userState, uploadFileSection, contents, onSuccess, onError));
  }
   else {
    this.GetConnection().FormUploadFileAsyncMob(this.getCurrentFormState().ToCompressedData(this.getSession(), memento), {l:2, m:0, h:0}, fileName, cpac.b64encode(''), new cpaf.Form$8(this, this.GetConnection(), thisForm, fileName, userState, uploadFileSection, contents, onSuccess, onError));
  }
}
;
_.UploadFile_1 = function UploadFile_0(file, onSuccess, onError, executeNow){
  var that;
  cpac.Printlog('In UploadFile: executeNow=' + executeNow);
  if (executeNow == 0 && !this.RequestsQueue.CanExecuteNow(new cpaf.FormAPIRequest((cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.UploadFile_1), initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [file, onSuccess, onError]))))
    return;
  if (isNull(file)) {
    cpac.Printlog('Before InvokeCallback, UploadFile file is null (error)');
    cpaf.InvokeCallback(this, null, null, 'file is null.', 'fileIsNull', onSuccess, onError, false);
    return;
  }
  that = this;
  this.GetConnection().FormSearchSetDirtyMobAsync(this.GetDummyFormState(), new cpaf.Form$5(this, this.GetConnection(), that, file, onSuccess, onError));
}
;
_.WaitForWarningApprove = function WaitForWarningApprove(){
  this.RequestsQueue.WaitForWarningApprove();
}
;
_.getColNameById = function getColNameById(table, colId){
  var col, ret, tab;
  ret = null;
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab)) {
    col = tab.getCol(colId);
    if (isNotNull(col))
      ret = col.zoomname_0;
  }
  return ret;
}
;
_.getColTypeById = function getColTypeById(table, colId){
  var col, ret, tab;
  ret = null;
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab)) {
    col = tab.getCol(colId);
    if (isNotNull(col))
      ret = col.type_0;
  }
  return ret;
}
;
_.getCurrentForm = function getCurrentForm(){
  return this.curTab;
}
;
_.getCurrentFormState = function getCurrentFormState(){
  return this._currentFormState;
}
;
_.getCurrentTable = function getCurrentTable(){
  return isNotNull(this.getCurrentForm())?this.getCurrentForm().table_0:0;
}
;
_.getDname = function getDname(){
  return this.dname;
}
;
_.getFieldValue = function getFieldValue(table, row, field, that){
  var value_0 = '';
  var global_forms_rows = that.global_forms_rows;
  if (global_forms_rows[table] && (global_forms_rows[table][row] && global_forms_rows[table][row][field]))
    value_0 = global_forms_rows[table][row][field];
  return value_0;
}
;
_.getIsAppend = function getIsAppend(){
  return this.position_0.isappend_0;
}
;
_.getRowOffset = function getRowOffset(table){
  var offset, tab;
  offset = 0;
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab)) {
    offset = tab.line_0 - 1;
  }
  return offset;
}
;
_.getSession = function getSession(){
  return this.privateSession;
}
;
_.getTableLines = function getTableLines(table){
  var lines, tab;
  lines = 0;
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab)) {
    lines = tab.lines_0;
  }
  return lines;
}
;
_.getTableMessageFunc = function getTableMessageFunc(){
  if (isNull(this.getCurrentForm()))
    return null;
  return this.getCurrentForm().onShowMessage;
}
;
_.getTableRowCount = function getTableRowCount(table){
  var rowcount, tab;
  rowcount = 0;
  tab = this.ActiveTables.get_2(jl.valueOf_15(table));
  if (isNotNull(tab)) {
    rowcount = tab.rowcount;
  }
  return rowcount;
}
;
_.getTableUpdateFieldsFunc = function getTableUpdateFieldsFunc(){
  if (isNull(this.getCurrentForm()))
    return null;
  return this.getCurrentForm().updateFieldsFunc;
}
;
_.setSession = function setSession(value_0){
  this.privateSession = value_0;
}
;
_.DummyStateInited = false;
_.fromStartForm = 0;
_.isCancelFileUpload = false;
_.isOnServer = false;
_.started = 0;
cpaf.Base64FileSize = 0;
cpaf.ErrException = 'exception';
cpaf.ErrFailedPreviousRequest = 'failedPreviousRequest';
cpaf.ErrFileIsNull = 'fileIsNull';
cpaf.ErrInvalidFilter = 'invalidFilter';
cpaf.ErrLoginFailed = 'loginFailed';
cpaf.ErrMustSaveOrDiscard = 'mustSaveOrDiscard';
cpaf.ErrNoClearRows = 'noClearOnSubForm';
cpaf.ErrNoSuchColumn = 'noSuchColumn';
cpaf.ErrNoSuchSubForm = 'noSuchSubForm';
cpaf.ErrNotHtml = 'noHtml';
cpaf.ErrReadOnlyForm = 'readOnlyForm';
cpaf.ErrTextTooLong = 'textTooLong';
cpaf.ErrWarningCancel = 'warningCancel';
cggl.Lcom_priority_app_form_Form_2_classLit = createForClass('com.priority.app.form', 'Form', 175, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_Form$1 = function $clinit_Form$1(){
  cpaf.$clinit_Form$1 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$1 = function Form$1(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$1();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_110();
}
;
defineClass(178, 6, $intern_0, cpaf.Form$1);
_.$init_110 = function $init_110(){
}
;
_.OnPriError = function OnPriError_0(error, isOnServer){
  cpaf.InvokeFormStartCallback(null, 0, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_0(response){
  var e, ftable, jo, retObj, table;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormStart');
    table = isNotNull(this.this$01.getCurrentForm())?this.this$01.getCurrentForm().table_0:0;
    cpaf.InvokeFormStartCallback(this.val$thisForm3, table, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      ftable = isNotNull(this.this$01.getCurrentForm())?this.this$01.getCurrentForm().table_0:0;
      cpaf.InvokeFormStartCallback(this.val$thisForm3, ftable, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$1_2_classLit = createForClass('com.priority.app.form', 'Form/1', 178, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$10 = function $clinit_Form$10(){
  cpaf.$clinit_Form$10 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$10 = function Form$10(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$10();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_111();
}
;
defineClass(187, 6, $intern_0, cpaf.Form$10);
_.$init_111 = function $init_111(){
}
;
_.OnPriError = function OnPriError_1(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormExitForm (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_1(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormExitForm');
    cpac.Printlog('Before InvokeCallback, FormExitForm (success)');
    cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormExitForm (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$10_2_classLit = createForClass('com.priority.app.form', 'Form/10', 187, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$11 = function $clinit_Form$11(){
  cpaf.$clinit_Form$11 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$11 = function Form$11(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$11();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_112();
}
;
defineClass(188, 6, $intern_0, cpaf.Form$11);
_.$init_112 = function $init_112(){
}
;
_.OnPriError = function OnPriError_2(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormExitForm (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_2(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormExitForm');
    cpac.Printlog('Before InvokeCallback, FormExitForm (success)');
    cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormExitForm (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$11_2_classLit = createForClass('com.priority.app.form', 'Form/11', 188, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$12 = function $clinit_Form$12(){
  cpaf.$clinit_Form$12 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$12 = function Form$12(this$0, $anonymous0, val$thisForm, val$getData, val$row, val$onSuccess, val$onError){
  cpaf.$clinit_Form$12();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$getData4 = val$getData;
  this.val$row5 = val$row;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_113();
}
;
defineClass(189, 6, $intern_0, cpaf.Form$12);
_.$init_113 = function $init_113(){
}
;
_.OnPriError = function OnPriError_3(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormJumpLine (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess6, this.val$onError7, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_3(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormJumpLine');
    if (this.val$getData4) {
      retObj = new cggjc.JSONObject;
      this.this$01.GetRowsData(this.val$thisForm3.getCurrentForm().table_0, this.val$row5, retObj, this.val$thisForm3);
    }
     else {
      this.this$01.AddCurrentRow(this.val$row5, retObj);
    }
    cpac.Printlog('Before InvokeCallback, FormJumpLine (success)');
    cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess6, this.val$onError7, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormJumpLine (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess6, this.val$onError7, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
_.val$getData4 = false;
_.val$row5 = 0;
cggl.Lcom_priority_app_form_Form$12_2_classLit = createForClass('com.priority.app.form', 'Form/12', 189, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$13 = function $clinit_Form$13(){
  cpaf.$clinit_Form$13 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$13 = function Form$13(this$0, $anonymous0, val$thisForm, val$onMessageFunc, val$onUpdateFieldsFunc, val$onSuccess, val$onError){
  cpaf.$clinit_Form$13();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onMessageFunc4 = val$onMessageFunc;
  this.val$onUpdateFieldsFunc5 = val$onUpdateFieldsFunc;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_114();
}
;
defineClass(190, 6, $intern_0, cpaf.Form$13);
_.$init_114 = function $init_114(){
}
;
_.OnPriError = function OnPriError_4(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormSubForm (error)');
  cpaf.InvokeSubFormStartCallback(null, 0, null, null, error, 'exception', this.val$onSuccess6, this.val$onError7);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_4(response){
  var e, jo, retObj, table;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormSubForm');
    table = isNotNull(this.this$01.getCurrentForm())?this.this$01.getCurrentForm().table_0:0;
    if (isNotNull(this.this$01.getCurrentForm())) {
      this.this$01.getCurrentForm().onShowMessage = this.val$onMessageFunc4;
      this.this$01.getCurrentForm().updateFieldsFunc = this.val$onUpdateFieldsFunc5;
    }
    cpac.Printlog('Before InvokeCallback, FormSubForm (success)');
    cpaf.InvokeSubFormStartCallback(this.val$thisForm3, table, jo, retObj, null, null, this.val$onSuccess6, this.val$onError7);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormSubForm (error)');
      cpaf.InvokeSubFormStartCallback(null, 0, null, null, e.getMessage(), 'exception', this.val$onSuccess6, this.val$onError7);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$13_2_classLit = createForClass('com.priority.app.form', 'Form/13', 190, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$14 = function $clinit_Form$14(){
  cpaf.$clinit_Form$14 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$14 = function Form$14(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$14();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_115();
}
;
defineClass(191, 6, $intern_0, cpaf.Form$14);
_.$init_115 = function $init_115(){
}
;
_.OnPriError = function OnPriError_5(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormKey_SaveRow (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_5(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormKey_SaveRow');
    cpac.Printlog('Before InvokeCallback, FormKey_SaveRow (success)');
    cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormKey_SaveRow (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$14_2_classLit = createForClass('com.priority.app.form', 'Form/14', 191, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$15 = function $clinit_Form$15(){
  cpaf.$clinit_Form$15 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$15 = function Form$15(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$15();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_116();
}
;
defineClass(192, 6, $intern_0, cpaf.Form$15);
_.$init_116 = function $init_116(){
}
;
_.OnPriError = function OnPriError_6(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, IsAlive (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_6(response){
  var e, jo;
  try {
    jo = cggcc.safeEval(response);
    cpac.Printlog('Before InvokeCallback, IsAlive');
    cpaf.InvokeIsAliveCallback(this.val$thisForm3, jo, this.val$onSuccess4);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, IsAlive (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$15_2_classLit = createForClass('com.priority.app.form', 'Form/15', 192, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$16 = function $clinit_Form$16(){
  cpaf.$clinit_Form$16 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$16 = function Form$16(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$16();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_117();
}
;
defineClass(193, 6, $intern_0, cpaf.Form$16);
_.$init_117 = function $init_117(){
}
;
_.OnPriError = function OnPriError_7(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormHtml (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_7(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormHtml');
    cpac.Printlog('Before InvokeCallback, FormHtml (success)');
    this.this$01.AddHtmlToResponseObject(retObj, false);
    cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormSearch (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$16_2_classLit = createForClass('com.priority.app.form', 'Form/16', 193, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$17 = function $clinit_Form$17(){
  cpaf.$clinit_Form$17 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$17 = function Form$17(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$17();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_118();
}
;
defineClass(194, 6, $intern_0, cpaf.Form$17);
_.$init_118 = function $init_118(){
}
;
_.OnPriError = function OnPriError_8(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormSearch (error)');
  cpaf.InvokeFormSearchActionCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_8(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormSearch');
    cpac.Printlog('Before InvokeCallback, FormSearch (success)');
    cpaf.InvokeFormSearchActionCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormSearch (error)');
      cpaf.InvokeFormSearchActionCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$17_2_classLit = createForClass('com.priority.app.form', 'Form/17', 194, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$18 = function $clinit_Form$18(){
  cpaf.$clinit_Form$18 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$18 = function Form$18(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$18();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_119();
}
;
defineClass(195, 6, $intern_0, cpaf.Form$18);
_.$init_119 = function $init_119(){
}
;
_.OnPriError = function OnPriError_9(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormChoose (error)');
  cpaf.InvokeFormChooseCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_9(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormKey_Normal');
    cpac.Printlog('Before InvokeCallback, FormChoose (success)');
    cpaf.InvokeFormChooseCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormChoose (error)');
      cpaf.InvokeFormChooseCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$18_2_classLit = createForClass('com.priority.app.form', 'Form/18', 195, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$2 = function $clinit_Form$2(){
  cpaf.$clinit_Form$2 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$2 = function Form$2(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError){
  cpaf.$clinit_Form$2();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_120();
}
;
defineClass(179, 6, $intern_0, cpaf.Form$2);
_.$init_120 = function $init_120(){
}
;
_.OnPriError = function OnPriError_10(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormWarning (error)');
  if (this.val$thisForm3.fromStartForm == 1)
    cpaf.InvokeSubFormStartCallback(this.val$thisForm3, 0, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5);
  else 
    cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_10(response){
  var e, jo, retObj, table;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormWarning');
    cpac.Printlog('Before InvokeCallback, FormWarning (success)');
    if (this.val$thisForm3.fromStartForm == 1) {
      table = isNotNull(this.this$01.getCurrentForm())?this.this$01.getCurrentForm().table_0:0;
      cpaf.InvokeSubFormStartCallback(this.val$thisForm3, table, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5);
    }
     else {
      cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess4, this.val$onError5, false);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormWarning (error)');
      if (this.val$thisForm3.fromStartForm == 1)
        cpaf.InvokeSubFormStartCallback(this.val$thisForm3, 0, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5);
      else 
        cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$2_2_classLit = createForClass('com.priority.app.form', 'Form/2', 179, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$3 = function $clinit_Form$3(){
  cpaf.$clinit_Form$3 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$3 = function Form$3(this$0, $anonymous0, val$thisForm, val$onSuccess, val$onError, val$fromRow){
  cpaf.$clinit_Form$3();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  this.val$fromRow6 = val$fromRow;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_121();
}
;
defineClass(180, 6, $intern_0, cpaf.Form$3);
_.$init_121 = function $init_121(){
}
;
_.OnPriError = function OnPriError_11(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormQueryDlgExecute (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess4, this.val$onError5, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_11(response){
  var e, jo, retObj;
  try {
    this.val$thisForm3.getCurrentForm().setAdd(true);
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormQueryDlgExecute');
    if (cpaf.ContainsError(retObj))
      cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, '', null, this.val$onSuccess4, this.val$onError5, false);
    else 
      this.this$01.FormGoto(this.val$fromRow6, true, this.val$onSuccess4, this.val$onError5);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormQueryDlgExecute (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess4, this.val$onError5, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
_.val$fromRow6 = 0;
cggl.Lcom_priority_app_form_Form$3_2_classLit = createForClass('com.priority.app.form', 'Form/3', 180, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$4 = function $clinit_Form$4(){
  cpaf.$clinit_Form$4 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$4 = function Form$4(this$0, $anonymous0, val$thisForm, val$key, val$onSuccess, val$onError){
  cpaf.$clinit_Form$4();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$key4 = val$key;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_122();
}
;
defineClass(181, 6, $intern_0, cpaf.Form$4);
_.$init_122 = function $init_122(){
}
;
_.OnPriError = function OnPriError_12(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormKey_' + this.val$key4.name_1() + ' (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess5, this.val$onError6, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_12(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormKey_' + this.val$key4.name_1());
    cpac.Printlog('Before InvokeCallback, FormKey_' + this.val$key4.name_1() + ' (success)');
    cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess5, this.val$onError6, false);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormKey_' + this.val$key4.name_1() + ' (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess5, this.val$onError6, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$4_2_classLit = createForClass('com.priority.app.form', 'Form/4', 181, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$5 = function $clinit_Form$5(){
  cpaf.$clinit_Form$5 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$5 = function Form$5(this$0, $anonymous0, val$that, val$file, val$onSuccess, val$onError){
  cpaf.$clinit_Form$5();
  this.this$01 = this$0;
  this.val$that3 = val$that;
  this.val$file4 = val$file;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_123();
}
;
defineClass(182, 6, $intern_0, cpaf.Form$5);
_.$init_123 = function $init_123(){
}
;
_.OnPriError = function OnPriError_13(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, UploadFile (error)');
  cpaf.InvokeCallback(this.val$that3, null, null, error, 'exception', this.val$onSuccess5, this.val$onError6, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_13(response){
  var e;
  try {
    cpaf.ReadFile(this.val$that3, this.val$file4, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, UploadFile (error)');
      cpaf.InvokeCallback(this.val$that3, null, null, e.getMessage(), 'exception', this.val$onSuccess5, this.val$onError6, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$5_2_classLit = createForClass('com.priority.app.form', 'Form/5', 182, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$6 = function $clinit_Form$6(){
  cpaf.$clinit_Form$6 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$6 = function Form$6(this$0, $anonymous0, val$that, val$type, val$dataUrl, val$onSuccess, val$onError){
  cpaf.$clinit_Form$6();
  this.this$01 = this$0;
  this.val$that3 = val$that;
  this.val$type4 = val$type;
  this.val$dataUrl5 = val$dataUrl;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_124();
}
;
defineClass(183, 6, $intern_0, cpaf.Form$6);
_.$init_124 = function $init_124(){
}
;
_.OnPriError = function OnPriError_14(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, UploadFile (error)');
  cpaf.InvokeCallback(this.val$that3, null, null, error, 'exception', this.val$onSuccess6, this.val$onError7, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_14(response){
  var e;
  try {
    this.val$that3.UploadFile_0(0, jl.concat_Ljava_lang_String__Ljava_lang_String___devirtual$('.', this.val$type4), this.val$dataUrl5, this.val$onSuccess6, this.val$onError7, null);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, UploadFile (error)');
      cpaf.InvokeCallback(this.val$that3, null, null, e.getMessage(), 'exception', this.val$onSuccess6, this.val$onError7, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_Form$6_2_classLit = createForClass('com.priority.app.form', 'Form/6', 183, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$7 = function $clinit_Form$7(){
  cpaf.$clinit_Form$7 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$7 = function Form$7(this$0, $anonymous0, val$thisForm, val$fileName, val$userState, val$uploadFileSection, val$contents, val$onSuccess, val$onError){
  cpaf.$clinit_Form$7();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$fileName4 = val$fileName;
  this.val$userState5 = val$userState;
  this.val$uploadFileSection6 = val$uploadFileSection;
  this.val$contents7 = val$contents;
  this.val$onSuccess8 = val$onSuccess;
  this.val$onError9 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_125();
}
;
defineClass(184, 6, $intern_0, cpaf.Form$7);
_.$init_125 = function $init_125(){
}
;
_.OnPriError = function OnPriError_15(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormUploadFile (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess8, this.val$onError9, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_15(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormUploadFile');
    this.this$01.Con_FormUploadFileCompleted(jo, retObj, this.val$fileName4, this.val$userState5, this.val$uploadFileSection6, false, this.val$contents7, this.val$onSuccess8, this.val$onError9);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormUploadFile (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess8, this.val$onError9, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
_.val$uploadFileSection6 = 0;
cggl.Lcom_priority_app_form_Form$7_2_classLit = createForClass('com.priority.app.form', 'Form/7', 184, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$8 = function $clinit_Form$8(){
  cpaf.$clinit_Form$8 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$8 = function Form$8(this$0, $anonymous0, val$thisForm, val$fileName, val$userState, val$uploadFileSection, val$contents, val$onSuccess, val$onError){
  cpaf.$clinit_Form$8();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$fileName4 = val$fileName;
  this.val$userState5 = val$userState;
  this.val$uploadFileSection6 = val$uploadFileSection;
  this.val$contents7 = val$contents;
  this.val$onSuccess8 = val$onSuccess;
  this.val$onError9 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_126();
}
;
defineClass(185, 6, $intern_0, cpaf.Form$8);
_.$init_126 = function $init_126(){
}
;
_.OnPriError = function OnPriError_16(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormUploadFile2 (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess8, this.val$onError9, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_16(response){
  var e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormUploadFile');
    this.this$01.Con_FormUploadFileCompleted(jo, retObj, this.val$fileName4, this.val$userState5, this.val$uploadFileSection6, true, this.val$contents7, this.val$onSuccess8, this.val$onError9);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpac.Printlog('Before InvokeCallback, FormUploadFile2 (error)');
      cpaf.InvokeCallback(this.val$thisForm3, null, null, e.getMessage(), 'exception', this.val$onSuccess8, this.val$onError9, false);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
_.val$uploadFileSection6 = 0;
cggl.Lcom_priority_app_form_Form$8_2_classLit = createForClass('com.priority.app.form', 'Form/8', 185, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$9 = function $clinit_Form$9(){
  cpaf.$clinit_Form$9 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.Form$9 = function Form$9(this$0, $anonymous0, val$thisForm, val$start, val$ename, val$type, val$onProgress, val$onSuccess, val$onError){
  cpaf.$clinit_Form$9();
  this.this$01 = this$0;
  this.val$thisForm3 = val$thisForm;
  this.val$start4 = val$start;
  this.val$ename5 = val$ename;
  this.val$type6 = val$type;
  this.val$onProgress7 = val$onProgress;
  this.val$onSuccess8 = val$onSuccess;
  this.val$onError9 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_127();
}
;
defineClass(186, 6, $intern_0, cpaf.Form$9);
_.$init_127 = function $init_127(){
}
;
_.OnPriError = function OnPriError_17(error, isOnServer){
  cpac.Printlog('Before InvokeCallback, FormActivate (error)');
  cpaf.InvokeCallback(this.val$thisForm3, null, null, error, 'exception', this.val$onSuccess8, this.val$onError9, isOnServer);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_17(response){
  var activationLink, e, jo, retObj;
  try {
    jo = cggcc.safeEval(response);
    retObj = new cggjc.JSONObject;
    cpaf.ParseJO(jo, retObj, this.val$thisForm3, 'FormActivate');
    cpac.Printlog('Before InvokeCallback, FormActivate (success)');
    if (this.val$start4) {
      activationLink = this.this$01.GetActivationLink(retObj);
      cpap.ProcStartActivate_0(this.val$ename5, this.val$type6, activationLink, this.val$onProgress7, this.this$01.dname, this.val$onSuccess8, this.val$onError9);
      this.this$01.ExecuteNextRequest();
    }
     else {
      cpaf.InvokeCallback(this.val$thisForm3, jo, retObj, null, null, this.val$onSuccess8, this.val$onError9, false);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
_.val$start4 = false;
cggl.Lcom_priority_app_form_Form$9_2_classLit = createForClass('com.priority.app.form', 'Form/9', 186, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_Form$Position = function $clinit_Form$Position(){
  cpaf.$clinit_Form$Position = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.Form$Position = function Form$Position(){
  cpaf.$clinit_Form$Position();
  Object_0.call(this);
  this.$init_128();
}
;
defineClass(176, 1, $intern_0, cpaf.Form$Position);
_.$init_128 = function $init_128(){
}
;
_.changed_0 = 0;
_.curline_0 = 0;
_.field_0 = 0;
_.isappend_0 = 0;
_.line_0 = 0;
_.lines_0 = 0;
_.table_0 = 0;
cggl.Lcom_priority_app_form_Form$Position_2_classLit = createForClass('com.priority.app.form', 'Form/Position', 176, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_Form$UploadMode = function $clinit_Form$UploadMode(){
  cpaf.$clinit_Form$UploadMode = emptyMethod;
}
;
defineClass(374, 1, $intern_0);
cpaf.$clinit_Form$WarningMessageData = function $clinit_Form$WarningMessageData(){
  cpaf.$clinit_Form$WarningMessageData = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.Form$WarningMessageData = function Form$WarningMessageData(){
  cpaf.$clinit_Form$WarningMessageData();
  Object_0.call(this);
  this.$init_129();
}
;
defineClass(177, 1, $intern_0, cpaf.Form$WarningMessageData);
_.$init_129 = function $init_129(){
}
;
_.SetData = function SetData(wsql, wval, wline, wkey, wstep, readWrite){
  this.wsql = wsql;
  this.wval = wval;
  this.wline = wline;
  this.wkey = wkey;
  this.wstep = wstep;
  this.readWrite = readWrite;
}
;
_.readWrite = 0;
_.wkey = {l:0, m:0, h:0};
_.wline = {l:0, m:0, h:0};
_.wstep = {l:0, m:0, h:0};
_.wval = {l:0, m:0, h:0};
cggl.Lcom_priority_app_form_Form$WarningMessageData_2_classLit = createForClass('com.priority.app.form', 'Form/WarningMessageData', 177, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormAPI = function $clinit_FormAPI(){
  cpaf.$clinit_FormAPI = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormStart_0 = function FormStart_0(name_0, onShowMessageFunc, updateFieldsFunc, onSuccess, onError, autoRetrieveFirstRows, dname){
  var f;
  f = new cpaf.Form_1;
  if (jsNotEquals(dname, null) && jl.length__I__devirtual$_0(dname) > 0)
    f.dname = dname;
  f.onShowMessage = onShowMessageFunc;
  f.updateFieldsFunc = updateFieldsFunc;
  cpaf.addForm(f, name_0);
  f.FormStart(name_0, autoRetrieveFirstRows == 1?true:false, onSuccess, onError);
}
;
cpaf.InvokeCallback = function InvokeCallback(form_0, jo, retObj, errorMsg, errType, onSuccess, onError, isOnServer){
  cpaf.$clinit_FormAPI();
  if (jo == null || retObj == null) {
    cpaf.onSrvError(form_0, onError, errorMsg, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1)
    cpaf.onSrvError(form_0, onError, retObj.Error != null && (retObj.Error.message != null && retObj.Error.message.length > 0)?retObj.Error.message:null, 1, errType);
  else 
    cpaf.onSrvSuccess_0(form_0, retObj, onSuccess, onError, null, null, 0);
}
;
cpaf.InvokeError = function InvokeError(form_0, onError, message, errType, fatal){
  cpaf.$clinit_FormAPI();
  cpaf.onSrvError(form_0, onError, message, fatal, errType);
}
;
cpaf.InvokeErrorNow = function InvokeErrorNow(form_0, onError, message, fatal, errType){
  cpaf.$clinit_FormAPI();
  cpaf.sendMessage(form_0, onError, message, 'apiError', errType, fatal, 1, 1);
}
;
cpaf.InvokeFormChooseCallback = function InvokeFormChooseCallback(form_0, jo, retObj, error, errType, onSuccess, onError, isOnServer){
  cpaf.$clinit_FormAPI();
  if (jo == null || retObj == null) {
    cpaf.onSrvError(form_0, onError, error, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1)
    cpaf.onSrvError(form_0, onError, retObj.Error != null && (retObj.Error.message != null && retObj.Error.message.length > 0)?retObj.Error.message:null, 1, errType);
  else {
    var type_0 = 'None';
    if (retObj.Search != null) {
      type_0 = 'Search';
    }
     else if (retObj.Choose != null) {
      type_0 = 'Choose';
    }
    cpaf.onSrvSuccess_0(form_0, retObj, onSuccess, onError, type_0, null, 0);
  }
}
;
cpaf.InvokeFormSearchActionCallback = function InvokeFormSearchActionCallback(form_0, jo, retObj, error, errType, onSuccess, onError, isOnServer){
  cpaf.$clinit_FormAPI();
  if (jo == null || retObj == null) {
    cpaf.onSrvError(form_0, onError, null, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1)
    cpaf.onSrvError(form_0, onError, retObj.Error != null && (retObj.Error.message != null && retObj.Error.message.length > 0)?retObj.Error.message:null, 1, errType);
  else 
    cpaf.onSrvSuccess_0(form_0, retObj, onSuccess, onError, null, null, 0);
}
;
cpaf.InvokeFormStartCallback = function InvokeFormStartCallback(form_0, table, jo, retObj, errorMsg, errType, onSuccess, onError){
  cpaf.$clinit_FormAPI();
  if (jo == null || retObj == null) {
    cpaf.onSrvError(form_0, onError, errorMsg, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1) {
    cpaf.onSrvError(form_0, onError, retObj.Error != null && (retObj.Error.message != null && retObj.Error.message.length > 0)?retObj.Error.message:null, 1, errType);
  }
   else {
    var gform = form_0.GetJsTableObject(table);
    onSuccess(gform);
  }
}
;
cpaf.InvokeIsAliveCallback = function InvokeIsAliveCallback(form_0, jo, onSuccess){
  cpaf.$clinit_FormAPI();
  var isalive = 0;
  if (jo.Form && (jo.Form.length > 0 && (jo.Form[0] && jo.Form[0].isalive == 1)))
    isalive = 1;
  onSuccess(isalive);
  form_0.ExecuteNextRequest();
}
;
cpaf.InvokeLoginError = function InvokeLoginError(error, onError, errType){
  cpaf.$clinit_FormAPI();
  var msg = {};
  msg.type = 'apiError';
  msg.code = errType;
  msg.message = error;
  msg.form = null;
  msg.fatal = false;
  onError(msg);
}
;
cpaf.InvokeSubFormStartCallback = function InvokeSubFormStartCallback(form_0, table, jo, retObj, errorMsg, errType, onSuccess, onError){
  cpaf.$clinit_FormAPI();
  if (jo == null || retObj == null) {
    cpaf.onSrvError(form_0, onError, errorMsg, 0, errType);
    return;
  }
  if (retObj.fatalerror && retObj.fatalerror == 1)
    cpaf.onSrvError(form_0, onError, retObj.Error != null && (retObj.Error.message != null && retObj.Error.message.length > 0)?retObj.Error.message:null, 1, errType);
  else {
    var gform = form_0.GetJsTableObject(table);
    if (retObj.Warning || retObj.Error) {
      cpaf.onSrvSuccess_0(form_0, retObj, onSuccess, onError, null, null, 1);
      if (retObj.Error && retObj.Error.messagetype == 'information')
        cpaf.onSrvSuccess(form_0, gform, onSuccess);
    }
     else 
      cpaf.onSrvSuccess(form_0, gform, onSuccess);
  }
}
;
cpaf.InvokeSuccess = function InvokeSuccess(onSuccess){
  cpaf.$clinit_FormAPI();
  onSuccess();
}
;
cpaf.InvokeSuccess_0 = function InvokeSuccess_0(form_0, onSuccess){
  cpaf.$clinit_FormAPI();
  cpaf.onSrvSuccess(form_0, null, onSuccess);
}
;
cpaf.InvokeSuccessNow = function InvokeSuccessNow(onSuccess, ret){
  cpaf.$clinit_FormAPI();
  onSuccess(ret);
}
;
cpaf.Login_0 = function Login_0(configuration, onSuccess, onError){
  cpaf.$clinit_FormAPI();
  var conf;
  conf = configuration;
  cpac.SetWCFServiceParams(cpaf.$getUrl(conf) + '/wcf/wcf/service.svc', cpaf.$getTabini(conf), cpaf.$getLang(conf), cpaf.$getDname(conf), cpaf.$getAppname(conf));
  cpaf.Login_1(cpaf.$getUsername(conf), cpaf.$getPassword(conf), cpaf.$getComputerName(conf), null, onSuccess, onError);
}
;
cpaf.Login_1 = function Login_1(username, pwd, computerName, windowsUserName, onSuccess, onError){
  cpac.SetWCFServiceClientParams(username, pwd, computerName, windowsUserName);
  (cpac.$clinit_PriCommon() , cpac.AppMain).RemoveConnection();
  (cpac.$clinit_PriCommon() , cpac.AppMain).GetConnection().GeneralValidPasswordMobAsync(cpac.getPwd(), new cpaf.FormAPI$1((cpac.$clinit_PriCommon() , cpac.AppMain).GetConnection(), onSuccess, onError));
}
;
cpaf.ParseInitJson = function ParseInitJson(jo, retStr){
  cpaf.$clinit_FormAPI();
  var ret = 0;
  if (jo.General && (jo.General.length > 0 && (jo.General[0].ValidPassword && jo.General[0].ValidPassword.length > 0)))
    ret = jo.General[0].ValidPassword[0].valid;
  if (jo.General && (jo.General.length > 0 && (jo.General[0].Message && jo.General[0].Message.length > 0)))
    retStr[0] = jo.General[0].Message[0].message;
  else 
    retStr[0] = null;
  if (jo.General && (jo.General.length > 0 && jo.General[0].systemmail))
    retStr[1] = jo.General[0].systemmail;
  else 
    retStr[1] = null;
  if (jo.General && (jo.General.length > 0 && jo.General[0].systemimages))
    retStr[2] = jo.General[0].systemimages;
  else 
    retStr[2] = null;
  return ret;
}
;
cpaf.createJsHelperFunc = function createJsHelperFunc(){
  cpaf.$clinit_FormAPI();
  $wnd.GMTTime = function(dt){
    var mon = 1 + dt.getUTCMonth();
    if (mon < 10)
      mon = '0' + mon;
    var day = dt.getUTCDate();
    if (day < 10)
      day = '0' + day;
    var hours = dt.getUTCHours();
    if (hours < 10)
      hours = '0' + hours;
    var minutes = dt.getUTCMinutes();
    if (minutes < 10)
      minutes = '0' + minutes;
    var sec = dt.getUTCSeconds();
    if (sec < 10)
      sec = '0' + sec;
    var msec = dt.getUTCMilliseconds();
    if (msec < 10)
      msec = '00' + msec;
    else if (msec < 100)
      msec = '0' + msec;
    var year = dt.getUTCFullYear();
    if (year < 1900)
      year += 1900;
    return year + '-' + mon + '-' + day + 'T' + hours + ':' + minutes + ':' + sec + '.' + msec + 'Z';
  }
  ;
  $wnd.GMTDates = function(){
    var cr = new Date;
    var exp_0 = new Date(cr);
    exp_0.setMinutes(cr.getMinutes() + 6);
    return '<u:Created>' + $wnd.GMTTime(cr) + '<\/u:Created><u:Expires>' + $wnd.GMTTime(exp_0) + '<\/u:Expires>';
  }
  ;
}
;
cpaf.onSrvError = function onSrvError(form_0, onError, message, fatal, errType){
  cpaf.sendMessage(form_0, onError, message, 'apiError', errType, fatal, 1, 1);
  form_0.HandleError();
}
;
cpaf.onSrvSuccess = function onSrvSuccess(form_0, gform, onSuccess){
  if (onSuccess != null) {
    if (gform && gform != null)
      onSuccess(gform);
    else 
      onSuccess();
  }
  form_0.ExecuteNextRequest();
}
;
cpaf.onSrvSuccess_0 = function onSrvSuccess_0(form_0, resultObj, onSuccess, onError, par1, par2, fromStartForm){
  var responseVal = resultObj;
  var showMessage = form_0.onShowMessage;
  var updateFieldsFunc = form_0.updateFieldsFunc;
  form_0.onSuccess = onSuccess;
  form_0.onError = onError;
  form_0.fromStartForm = fromStartForm;
  var table = form_0.getCurrentTable();
  var gform = form_0.GetJsTableObject(table);
  var tableShowMessage = form_0.getTableMessageFunc();
  var tableUpdateFields = form_0.getTableUpdateFieldsFunc();
  if (resultObj == null) {
    if (onSuccess != null)
      onSuccess();
    form_0.ExecuteNextRequest();
    return;
  }
  if (resultObj.Error != null) {
    form_0.HandleError();
    cpaf.sendMessage(form_0, onError, resultObj.Error.message, 'error', resultObj.Error.messagetype, 0, 1, 1);
    if (resultObj.ReplaceText != null) {
      if (tableUpdateFields != null)
        tableUpdateFields(resultObj.ReplaceText, gform);
      else if (updateFieldsFunc != null)
        updateFieldsFunc(resultObj.ReplaceText, gform);
    }
    return;
  }
   else if (resultObj.Warning != null) {
    form_0.WaitForWarningApprove();
    cpaf.sendMessage(form_0, onError, resultObj.Warning.message, 'warning', resultObj.Warning.messagetype, 0, 1, 0);
    if (resultObj.ReplaceText != null) {
      if (tableUpdateFields != null)
        tableUpdateFields(resultObj.ReplaceText, gform);
      else if (updateFieldsFunc != null)
        updateFieldsFunc(resultObj.ReplaceText, gform);
    }
    return;
  }
   else if (resultObj.ReplaceText != null) {
    updateFieldsFunc(resultObj.ReplaceText, gform);
    delete responseVal.ReplaceText;
  }
   else if (resultObj.RowsData != null)
    responseVal = resultObj.RowsData;
  else if (resultObj.Choose != null)
    responseVal = resultObj.Choose;
  else if (resultObj.Search != null)
    responseVal = resultObj.Search;
  if (resultObj.ClearLine != null)
    responseVal = resultObj.ClearLine;
  else if (resultObj.NewRow != null)
    responseVal = resultObj.NewRow;
  if (onSuccess != null) {
    onSuccess(responseVal, par1, par2);
  }
  form_0.ExecuteNextRequest();
}
;
cpaf.onWarningCancel = function onWarningCancel(form_0, onError, errType){
  cpaf.$clinit_FormAPI();
  cpaf.sendMessage(form_0, onError, '', 'apiError', errType, 0, 0, 1);
}
;
cpaf.publishAPIfuncForm = function publishAPIfuncForm(){
  cpaf.$clinit_FormAPI();
  $wnd.formStart = function(formName, onShowMessge, afterMessageShownFunc, dname, autoRetrieveFirstRows, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      cpaf.FormStart_0(formName, onShowMessge, afterMessageShownFunc, onSuccess_0, onError_0, autoRetrieveFirstRows, dname);
    else 
      return new Promise(function(onSuccess, onError){
        cpaf.FormStart_0(formName, onShowMessge, afterMessageShownFunc, onSuccess, onError, autoRetrieveFirstRows, dname);
      }
      );
  }
  ;
}
;
cpaf.sendMessage = function sendMessage(form_0, onError, message, type_0, iconType, fatal, invokeMessage, invokeError){
  var table = form_0.getCurrentTable();
  var gform = form_0.GetJsTableObject(table);
  var showMessage = form_0.onShowMessage;
  var tableShowMessage = form_0.getTableMessageFunc();
  var msg = {};
  msg.type = type_0;
  msg.code = iconType;
  msg.message = message;
  msg.form = gform;
  msg.fatal = fatal == 1;
  if (invokeMessage == 1) {
    if (tableShowMessage != null)
      tableShowMessage(msg);
    else if (showMessage != null)
      showMessage(msg);
  }
  if (invokeError == 1)
    onError(msg);
}
;
defineClass(345, 1, $intern_0);
cpaf.lang_1 = 0;
cpaf.$clinit_FormAPI$1 = function $clinit_FormAPI$1(){
  cpaf.$clinit_FormAPI$1 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpaf.FormAPI$1 = function FormAPI$1($anonymous0, val$onSuccess, val$onError){
  cpaf.$clinit_FormAPI$1();
  this.val$onSuccess2 = val$onSuccess;
  this.val$onError3 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_130();
}
;
defineClass(136, 6, $intern_0, cpaf.FormAPI$1);
_.$init_130 = function $init_130(){
}
;
_.OnPriError = function OnPriError_18(error, isOnServer){
  var response;
  response = "Can't connect to server.";
  if (jl.contains_Ljava_lang_CharSequence__Z__devirtual$(error, 'InvalidSecurityToken')) {
    response = 'Authorization failed. \nPlease check the username and password.';
  }
  cpaf.InvokeLoginError(response, this.val$onError3, 'loginFailed');
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_18(response){
  var e, jo, ret, retStr;
  try {
    jo = cggcc.safeEval(response);
    retStr = initDim(cggl.Ljava_lang_String_2_classLit, $intern_2, 2, 1, 4, 1);
    ret = cpaf.ParseInitJson(jo, retStr);
    if (ret == 1) {
      if (jsNotEquals(retStr[1], null) && jl.length__I__devirtual$_0(retStr[1]) > 0)
        cpac.$clinit_PriCommon() , cpac.SystemMailDir = retStr[1];
      if (jsNotEquals(retStr[2], null) && jl.length__I__devirtual$_0(retStr[2]) > 0)
        cpac.$clinit_PriCommon() , cpac.SystemImagesDir = retStr[2];
      cpaf.InvokeSuccess(this.val$onSuccess2);
    }
     else {
      if (jsEquals(retStr[0], null) || jl.length__I__devirtual$_0(retStr[0]) <= 0)
        retStr[0] = "Can't connect to server.";
      cpaf.InvokeLoginError(retStr[0], this.val$onError3, 'loginFailed');
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpaf.InvokeLoginError(e.getMessage(), this.val$onError3, 'loginFailed');
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_form_FormAPI$1_2_classLit = createForClass('com.priority.app.form', 'FormAPI/1', 136, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpaf.$clinit_FormAPI$Configuration = function $clinit_FormAPI$Configuration(){
  cpaf.$clinit_FormAPI$Configuration = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cpaf.$getAppname = function $getAppname(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.appname;
}
;
cpaf.$getComputerName = function $getComputerName(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.devicename;
}
;
cpaf.$getDname = function $getDname(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.company;
}
;
cpaf.$getLang = function $getLang(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.language;
}
;
cpaf.$getPassword = function $getPassword(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.password;
}
;
cpaf.$getTabini = function $getTabini(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.tabulaini;
}
;
cpaf.$getUrl = function $getUrl(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.url;
}
;
cpaf.$getUsername = function $getUsername(this$static){
  cpaf.$clinit_FormAPI$Configuration();
  return this$static.username;
}
;
cpaf.$clinit_FormAPIQueue = function $clinit_FormAPIQueue(){
  cpaf.$clinit_FormAPIQueue = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormAPIQueue = function FormAPIQueue(form_0){
  cpaf.$clinit_FormAPIQueue();
  Object_0.call(this);
  this.$init_131();
  this.form_0 = form_0;
}
;
defineClass(213, 1, $intern_0, cpaf.FormAPIQueue);
_.$init_131 = function $init_131(){
  this.RequestsQueue = new ju.LinkedList;
  this.isExecutingNow = false;
  this.isWaitingForWarningApprove = false;
}
;
_.CanExecuteNow = function CanExecuteNow(req){
  if (this.isExecutingNow && jsEquals(req.getType(), (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.WarningApproved))) {
    if (this.isWaitingForWarningApprove) {
      this.isWaitingForWarningApprove = false;
      return true;
    }
    this.RequestsQueue.offerFirst(req);
    return false;
  }
  if (this.RequestsQueue.size_1() > 0 || this.isExecutingNow) {
    this.RequestsQueue.offer(req);
    return false;
  }
  this.isExecutingNow = true;
  return true;
}
;
_.ExecuteNextRequest = function ExecuteNextRequest_0(){
  var req;
  this.isExecutingNow = false;
  if (this.RequestsQueue.size_1() <= 0)
    return;
  req = this.RequestsQueue.poll();
  cpac.Printlog('In ExecuteNextRequest: Executing:' + req.getType().toString$());
  switch (req.getType().ordinal_0()) {
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetActiveRow_0).ordinal_0():
      this.form_0.SetActiveRow(req.getParams()[0].intValue_0(), req.getParams()[1], req.getParams()[2], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.Choose_0).ordinal_0():
      this.form_0.FormChoose(req.getParams()[0], req.getParams()[1], req.getParams()[2], req.getParams()[3], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SearchAction).ordinal_0():
      this.form_0.FormSearchAction(req.getParams()[0].intValue_0(), req.getParams()[1], req.getParams()[2], req.getParams()[3], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.FieldUpdate).ordinal_0():
      this.form_0.FormFieldUpdate(req.getParams()[0], req.getParams()[1], req.getParams()[2], req.getParams()[3], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.WarningApproved).ordinal_0():
      this.form_0.FormWarning(req.getParams()[0].intValue_0(), 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SaveRow).ordinal_0():
      this.form_0.SaveCurrentRow(req.getParams()[0].intValue_0(), req.getParams()[1], req.getParams()[2], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.StartSubForm).ordinal_0():
      this.form_0.GotoSubForm(req.getParams()[0], req.getParams()[1], req.getParams()[2], req.getParams()[3], req.getParams()[4], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.GetRows_0).ordinal_0():
      this.form_0.GetRows(req.getParams()[0].intValue_0(), req.getParams()[1], req.getParams()[2], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.NewRow_0).ordinal_0():
      this.form_0.NewRow_0(req.getParams()[0], req.getParams()[1], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.EndCurrentForm_0).ordinal_0():
      this.form_0.EndCurrentForm(req.getParams()[0], req.getParams()[1], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.Undo_0).ordinal_0():
      this.form_0.Undo(req.getParams()[0], req.getParams()[1], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.DelRow_0).ordinal_0():
      this.form_0.DelRow(req.getParams()[0], req.getParams()[1], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ClearRows_0).ordinal_0():
      this.form_0.ClearRows(req.getParams()[0], req.getParams()[1], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetSearchFilter_0).ordinal_0():
      this.form_0.SetSearchFilter(req.getParams()[0], req.getParams()[1], req.getParams()[2], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetSimpleSearchFilter_0).ordinal_0():
      this.form_0.SetSimpleSearchFilter(req.getParams()[0], req.getParams()[1], req.getParams()[2], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ClearSearchFilter_0).ordinal_0():
      this.form_0.ClearSearchFilter(req.getParams()[0], req.getParams()[1], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ActivateStart_0).ordinal_0():
      this.form_0.ActivateStart(req.getParams()[0], req.getParams()[1], req.getParams()[2], req.getParams()[3], req.getParams()[4], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ActivateEnd_0).ordinal_0():
      this.form_0.ActivateStart(req.getParams()[0], req.getParams()[1], null, null, null, 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.UploadFile_1).ordinal_0():
      this.form_0.UploadFile_1(req.getParams()[0], req.getParams()[1], req.getParams()[2], 1);
      break;
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.AddText_0).ordinal_0():
      this.form_0.AddText(req.getParams()[0], req.getParams()[1].intValue_0(), req.getParams()[2].intValue_0(), req.getParams()[3].intValue_0(), req.getParams()[4], req.getParams()[5], 1);
    case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.IsAlive_0).ordinal_0():
      this.form_0.IsAlive(req.getParams()[0], req.getParams()[1], 1);
      break;
  }
}
;
_.HandleError = function HandleError_0(){
  var onError, req;
  this.isExecutingNow = false;
  while (this.RequestsQueue.size_1() > 0) {
    req = this.RequestsQueue.poll();
    onError = null;
    cpac.Printlog('In HandleError: Sending error to request:' + req.getType().toString$());
    switch (req.getType().ordinal_0()) {
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetActiveRow_0).ordinal_0():
        onError = req.getParams()[2];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.Choose_0).ordinal_0():
        onError = req.getParams()[3];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SearchAction).ordinal_0():
        onError = req.getParams()[3];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.FieldUpdate).ordinal_0():
        onError = req.getParams()[3];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.WarningApproved).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SaveRow).ordinal_0():
        onError = req.getParams()[2];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.StartSubForm).ordinal_0():
        onError = req.getParams()[4];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.GetRows_0).ordinal_0():
        onError = req.getParams()[2];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.NewRow_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.EndCurrentForm_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.Undo_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.DelRow_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ClearRows_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetSearchFilter_0).ordinal_0():
        onError = req.getParams()[2];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.SetSimpleSearchFilter_0).ordinal_0():
        onError = req.getParams()[2];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ClearSearchFilter_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ActivateStart_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.ActivateEnd_0).ordinal_0():
        onError = req.getParams()[1];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.UploadFile_1).ordinal_0():
        onError = req.getParams()[2];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.AddText_0).ordinal_0():
        onError = req.getParams()[4];
        break;
      case (cpaf.$clinit_FormAPIRequest$RequestTypes() , cpaf.IsAlive_0).ordinal_0():
        onError = req.getParams()[1];
        break;
    }
    if (isNotNull(onError))
      cpaf.InvokeErrorNow(this.form_0, onError, 'A previous request has failed, causing all subsequent requests to fail', 0, 'failedPreviousRequest');
  }
}
;
_.WaitForWarningApprove = function WaitForWarningApprove_0(){
  this.isWaitingForWarningApprove = true;
}
;
_.isExecutingNow = false;
_.isWaitingForWarningApprove = false;
cpaf.FailedRequest = 'A previous request has failed, causing all subsequent requests to fail';
cggl.Lcom_priority_app_form_FormAPIQueue_2_classLit = createForClass('com.priority.app.form', 'FormAPIQueue', 213, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormAPIRequest = function $clinit_FormAPIRequest(){
  cpaf.$clinit_FormAPIRequest = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormAPIRequest = function FormAPIRequest(type_0, params){
  cpaf.$clinit_FormAPIRequest();
  Object_0.call(this);
  this.$init_132();
  this.type_0 = type_0;
  this.params = params;
}
;
defineClass(16, 1, $intern_0, cpaf.FormAPIRequest);
_.$init_132 = function $init_132(){
}
;
_.getParams = function getParams(){
  return this.params;
}
;
_.getType = function getType(){
  return this.type_0;
}
;
cggl.Lcom_priority_app_form_FormAPIRequest_2_classLit = createForClass('com.priority.app.form', 'FormAPIRequest', 16, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormAPIRequest$RequestTypes = function $clinit_FormAPIRequest$RequestTypes(){
  cpaf.$clinit_FormAPIRequest$RequestTypes = emptyMethod;
  jl.$clinit_Enum();
  cpaf.SetActiveRow_0 = new cpaf.FormAPIRequest$RequestTypes('SetActiveRow', 0, 1);
  cpaf.Choose_0 = new cpaf.FormAPIRequest$RequestTypes('Choose', 1, 2);
  cpaf.SearchAction = new cpaf.FormAPIRequest$RequestTypes('SearchAction', 2, 3);
  cpaf.FieldUpdate = new cpaf.FormAPIRequest$RequestTypes('FieldUpdate', 3, 4);
  cpaf.WarningApproved = new cpaf.FormAPIRequest$RequestTypes('WarningApproved', 4, 5);
  cpaf.SaveRow = new cpaf.FormAPIRequest$RequestTypes('SaveRow', 5, 6);
  cpaf.StartSubForm = new cpaf.FormAPIRequest$RequestTypes('StartSubForm', 6, 7);
  cpaf.GetRows_0 = new cpaf.FormAPIRequest$RequestTypes('GetRows', 7, 8);
  cpaf.NewRow_0 = new cpaf.FormAPIRequest$RequestTypes('NewRow', 8, 9);
  cpaf.EndCurrentForm_0 = new cpaf.FormAPIRequest$RequestTypes('EndCurrentForm', 9, 10);
  cpaf.Undo_0 = new cpaf.FormAPIRequest$RequestTypes('Undo', 10, 11);
  cpaf.DelRow_0 = new cpaf.FormAPIRequest$RequestTypes('DelRow', 11, 12);
  cpaf.ClearRows_0 = new cpaf.FormAPIRequest$RequestTypes('ClearRows', 12, 13);
  cpaf.SetSearchFilter_0 = new cpaf.FormAPIRequest$RequestTypes('SetSearchFilter', 13, 14);
  cpaf.SetSimpleSearchFilter_0 = new cpaf.FormAPIRequest$RequestTypes('SetSimpleSearchFilter', 14, 15);
  cpaf.ClearSearchFilter_0 = new cpaf.FormAPIRequest$RequestTypes('ClearSearchFilter', 15, 16);
  cpaf.ActivateStart_0 = new cpaf.FormAPIRequest$RequestTypes('ActivateStart', 16, 17);
  cpaf.ActivateEnd_0 = new cpaf.FormAPIRequest$RequestTypes('ActivateEnd', 17, 18);
  cpaf.UploadFile_1 = new cpaf.FormAPIRequest$RequestTypes('UploadFile', 18, 19);
  cpaf.CancelFileUpload = new cpaf.FormAPIRequest$RequestTypes('CancelFileUpload', 19, 20);
  cpaf.GetFileUrl_0 = new cpaf.FormAPIRequest$RequestTypes('GetFileUrl', 20, 21);
  cpaf.AddText_0 = new cpaf.FormAPIRequest$RequestTypes('AddText', 21, 22);
  cpaf.IsAlive_0 = new cpaf.FormAPIRequest$RequestTypes('IsAlive', 22, 23);
}
;
cpaf.FormAPIRequest$RequestTypes = function FormAPIRequest$RequestTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_133();
  this.intValue = value_0;
  cpaf.getMappings_4().put_0(jl.valueOf_15(value_0), this);
}
;
cpaf.getMappings_4 = function getMappings_4(){
  if (isNull(cpaf.mappings_4)) {
    {
      cggl.Lcom_priority_app_form_FormAPIRequest$RequestTypes_2_classLit;
      if (isNull(cpaf.mappings_4)) {
        cpaf.mappings_4 = new ju.HashMap;
      }
    }
  }
  return cpaf.mappings_4;
}
;
cpaf.valueOf_8 = function valueOf_8(name_0){
  cpaf.$clinit_FormAPIRequest$RequestTypes();
  return valueOf((cpaf.$clinit_FormAPIRequest$RequestTypes$Map() , cpaf.$MAP_7), name_0);
}
;
cpaf.values_8 = function values_8(){
  cpaf.$clinit_FormAPIRequest$RequestTypes();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_form_FormAPIRequest$RequestTypes_2_classLit, 1), $intern_2, 12, 0, [cpaf.SetActiveRow_0, cpaf.Choose_0, cpaf.SearchAction, cpaf.FieldUpdate, cpaf.WarningApproved, cpaf.SaveRow, cpaf.StartSubForm, cpaf.GetRows_0, cpaf.NewRow_0, cpaf.EndCurrentForm_0, cpaf.Undo_0, cpaf.DelRow_0, cpaf.ClearRows_0, cpaf.SetSearchFilter_0, cpaf.SetSimpleSearchFilter_0, cpaf.ClearSearchFilter_0, cpaf.ActivateStart_0, cpaf.ActivateEnd_0, cpaf.UploadFile_1, cpaf.CancelFileUpload, cpaf.GetFileUrl_0, cpaf.AddText_0, cpaf.IsAlive_0]);
}
;
defineClass(12, 15, {12:1, 3:1, 18:1, 15:1, 1:1}, cpaf.FormAPIRequest$RequestTypes);
_.$init_133 = function $init_133(){
}
;
_.getValue_0 = function getValue_5(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_form_FormAPIRequest$RequestTypes_2_classLit = createForEnum('com.priority.app.form', 'FormAPIRequest/RequestTypes', 12, cggl.Ljava_lang_Enum_2_classLit, cpaf.values_8, cpaf.valueOf_8);
cpaf.$clinit_FormAPIRequest$RequestTypes$Map = function $clinit_FormAPIRequest$RequestTypes$Map(){
  cpaf.$clinit_FormAPIRequest$RequestTypes$Map = emptyMethod;
  cpaf.$MAP_7 = createValueOfMap(cpaf.values_8());
}
;
defineClass(441, 1, $intern_0);
cpaf.$clinit_FormColumn = function $clinit_FormColumn(){
  cpaf.$clinit_FormColumn = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormColumn = function FormColumn(zoomname, type_0, width_0, field){
  cpaf.$clinit_FormColumn();
  Object_0.call(this);
  this.$init_134();
  this.field_0 = field;
  this.zoomname_0 = zoomname;
  this.type_0 = type_0;
  this.width_0 = width_0;
}
;
defineClass(231, 1, $intern_0, cpaf.FormColumn);
_.$init_134 = function $init_134(){
}
;
_.field_0 = 0;
_.width_0 = 0;
cggl.Lcom_priority_app_form_FormColumn_2_classLit = createForClass('com.priority.app.form', 'FormColumn', 231, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormManager = function $clinit_FormManager(){
  cpaf.$clinit_FormManager = emptyMethod;
  jl.$clinit_Object();
  {
    cpaf.FormsMap = new ju.HashMap;
  }
}
;
cpaf.addForm = function addForm(form_0, id_0){
  cpaf.$clinit_FormManager();
  cpaf.FormsMap.put_0(id_0, form_0);
}
;
defineClass(375, 1, $intern_0);
cpaf.$clinit_FormTable = function $clinit_FormTable(){
  cpaf.$clinit_FormTable = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.BuildFilter = function BuildFilter(filter, table, form_0){
  var gform = form_0.GetJsTableObject(table);
  if (!gform)
    return null;
  var filt = {};
  filt.or = 1;
  filt.ignorecase = 1;
  filt.QueryValues = [];
  var col = 0;
  for (var colname in gform.columns) {
    if (colname) {
      if (gform.columns[colname].searchfield == 1 && gform.columns[colname].field > 0) {
        filt.QueryValues[col] = {};
        filt.QueryValues[col].field = gform.columns[colname].field;
        filt.QueryValues[col].fromval = filter + '*';
        filt.QueryValues[col].toval = '';
        filt.QueryValues[col].op = '=';
        filt.QueryValues[col].sort = 0;
        filt.QueryValues[col].isdesc = 0;
        col++;
      }
    }
  }
  if (filt.QueryValues.length <= 0)
    return null;
  return filt;
}
;
cpaf.FixFilter = function FixFilter(filter, table, form_0){
  var gform = form_0.GetJsTableObject(table);
  if (!gform || filter == null)
    return null;
  if (!filter.QueryValues || filter.QueryValues.length <= 0)
    return null;
  for (i = 0; i < filter.QueryValues.length; i++) {
    var colname = filter.QueryValues[i].field;
    var val = filter.QueryValues[i].fromval;
    if (!val || val.length <= 0)
      return null;
    if (!colname || (!gform.columns[colname] || (!gform.columns[colname].field || gform.columns[colname].field <= 0))) {
      return null;
    }
    val = cpaf.FixFilterValue(val);
    if (gform.columns[colname].type == 'date')
      val = cpaf.ISOToDate(gform.columns[colname].maxLength, val);
    if (!val || val.length <= 0)
      return null;
    var toval = filter.QueryValues[i].toval;
    if (toval && toval.length > 0) {
      toval = cpaf.FixFilterValue(toval);
      if (gform.columns[colname].type == 'date')
        toval = cpaf.ISOToDate(gform.columns[colname].maxLength, toval);
      if (!toval || toval.length <= 0)
        return null;
    }
    filter.QueryValues[i].field = gform.columns[colname].field;
  }
  if (filter.QueryValues.length <= 0)
    return null;
  return filter;
}
;
cpaf.FixFilterValue = function FixFilterValue(value_0){
  while (jsNotEquals(value_0, null) && jl.length__I__devirtual$_0(value_0) > 0 && (jl.startsWith_Ljava_lang_String__Z__devirtual$(value_0, '*') || jl.startsWith_Ljava_lang_String__Z__devirtual$(value_0, '%'))) {
    value_0 = jl.substring_I_Ljava_lang_String___devirtual$(value_0, 1);
  }
  return value_0;
}
;
cpaf.FormTable = function FormTable(mainform, table, form_0, title_0, name_0, level, self_0, ishtml, oneline, isquery){
  cpaf.$clinit_FormTable();
  Object_0.call(this);
  this.$init_135();
  this.mainform = mainform;
  this.table_0 = table;
  this.form_0 = form_0;
  this.title_0 = title_0;
  this.name_0 = name_0;
  this.level_0 = level;
  this.self_0 = self_0;
  this.ishtml_0 = ishtml;
  this.AddTableJS(mainform, this, oneline, isquery, ishtml, name_0, title_0);
}
;
cpaf.fixtime = function fixtime(str, ampm){
  var time = new Date;
  var hour = time.getHours();
  var ampms;
  if (ampm) {
    ampms = hour >= 12?'PM':'AM';
    if (hour == 0)
      hour = 12;
    else if (hour > 12)
      hour -= 12;
  }
  if (hour < 10)
    hour = '0' + hour;
  var minu = time.getMinutes();
  if (minu < 10)
    minu = '0' + minu;
  hm = hour + ':' + minu + (ampm?' ' + ampms:'');
  return str.replace('HH:MM', hm);
}
;
defineClass(228, 1, $intern_0, cpaf.FormTable);
_.$init_135 = function $init_135(){
  this.FormColumns = new ju.HashMap;
  this.FormColumnsI = new ju.HashMap;
  this.SubForms = new ju.HashMap;
  this.Activations = new ju.HashMap;
  this.onShowMessage = null;
  this.updateFieldsFunc = null;
  this.jsTableObject = null;
  this.isAdd = false;
  this.filter = null;
}
;
_.AddActivation_0 = function AddActivation_0(ename, exec_0, form_0, table, title_0, background, confirm_0, etype, type_0){
  var da;
  da = new cpaf.DirectAct(ename, exec_0, form_0, table, title_0, background == 1, confirm_0 == 1, cpac.forValue_0(etype), cpac.forValue_0(type_0));
  this.Activations.put_0(ename + '.' + charToString(cpac.getEntChar(cpac.forValue_0(etype))), da);
  this.AddActivationJS(this.jsTableObject, ename, title_0, cpac.getEntChar(cpac.forValue_0(etype)), background, confirm_0);
}
;
_.AddActivationJS = function AddActivationJS(gform, name_0, title_0, etype, background, confirm_0){
  var key = name_0 + '.' + String.fromCharCode(etype);
  gform.activations[key] = {};
  gform.activations[key].title = title_0;
  gform.activations[key].background = background;
  gform.activations[key].confirm = confirm_0;
}
;
_.AddColumn_0 = function AddColumn_0(name_0, type_0, width_0, field){
  var fc;
  fc = new cpaf.FormColumn(name_0, type_0, width_0, field);
  this.FormColumns.put_0(name_0, fc);
  this.FormColumnsI.put_0(jl.valueOf_15(field), fc);
}
;
_.AddSubForm_0 = function AddSubForm_0(ename, exec_0, form_0, self_0, table, title_0){
  var sb;
  sb = new cpaf.SubForm(ename, exec_0, form_0, self_0, table, title_0);
  this.SubForms.put_0(ename, sb);
  this.AddSubFormJS(this.jsTableObject, ename, title_0);
}
;
_.AddSubFormJS = function AddSubFormJS(gform, name_0, title_0){
  gform.subForms[name_0] = {};
  gform.subForms[name_0].title = title_0;
}
;
_.AddTableJS = function AddTableJS(form_0, table, oneline, isquery, ishtml, name_0, title_0){
  var gform = {};
  gform.name = name_0;
  gform.title = title_0;
  gform.subForms = {};
  gform.activations = {};
  gform.columns = {};
  gform.oneline = oneline;
  gform.isquery = isquery;
  gform.ishtml = ishtml;
  gform.setActiveRow = function(row, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SetActiveRow(row, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SetActiveRow(row, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.choose = function(fieldName, fieldValue, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.FormChoose(fieldName, fieldValue, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.FormChoose(fieldName, fieldValue, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.searchAction = function(action, searchText, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.FormSearchAction(action, searchText, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.FormSearchAction(action, searchText, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.fieldUpdate = function(fieldName, fieldValue, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.FormFieldUpdate(fieldName, fieldValue, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.FormFieldUpdate(fieldName, fieldValue, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.warningConfirm = function(ok){
    form_0.FormWarning(ok, 0);
  }
  ;
  gform.saveRow = function(backToParentForm, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SaveCurrentRow(backToParentForm, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SaveCurrentRow(backToParentForm, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.startSubForm = function(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.GotoSubForm(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.GotoSubForm(formName, onMessageFunc, onUpdateFieldsFunc, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.getRows = function(fromRow, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.GetRows(fromRow, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.GetRows(fromRow, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.newRow = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.NewRow_0(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.NewRow_0(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.endCurrentForm = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.EndCurrentForm(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.EndCurrentForm(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.undo = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.Undo(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.Undo(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.delRow = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.DelRow(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.DelRow(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.clearRows = function(onSuccess_0, onError_0, userState){
    if (onSuccess_0 || onError_0)
      form_0.ClearRows(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ClearRows(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.setSearchFilter = function(filter, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SetSearchFilter(filter, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SetSearchFilter(filter, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.setSimpleSearchFilter = function(filter, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.SetSimpleSearchFilter(filter, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.SetSimpleSearchFilter(filter, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.clearSearchFilter = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.ClearSearchFilter(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ClearSearchFilter(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.activateStart = function(ename, type_0, onProgress, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.ActivateStart(onSuccess_0, onError_0, ename, type_0, onProgress, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ActivateStart(onSuccess, onError, ename, type_0, onProgress, 0);
      }
      );
    }
  }
  ;
  gform.activateEnd = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.ActivateEnd(onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.ActivateEnd(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.uploadFile = function(file, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.UploadFile_1(file, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.UploadFile_1(file, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.uploadDataUrl = function(dataUrl, type_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      form_0.UploadDataUrl(dataUrl, type_0, onSuccess_0, onError_0, 0);
    else {
      return new Promise(function(onSuccess, onError){
        form_0.UploadDataUrl(dataUrl, type_0, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.cancelFileUpload = function(){
    form_0.isCancelFileUpload = true;
  }
  ;
  gform.getFileUrl = function(file){
    return form_0.GetFileUrl(file);
  }
  ;
  gform.saveText = function(text_0, addFlag, commentFlag, lang2Flag, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0) {
      form_0.AddText(text_0, addFlag, commentFlag, lang2Flag, onSuccess_0, onError_0, 0);
    }
     else {
      return new Promise(function(onSuccess, onError){
        form_0.AddText(text_0, addFlag, commentFlag, lang2Flag, onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  gform.isAlive = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0) {
      form_0.IsAlive(onSuccess_0, onError_0, 0);
    }
     else {
      return new Promise(function(onSuccess, onError){
        form_0.IsAlive(onSuccess, onError, 0);
      }
      );
    }
  }
  ;
  table.SetJsTableObject(gform);
}
;
_.ClearSearchFilter_0 = function ClearSearchFilter_1(onSuccess, onError){
  this.isAdd = false;
  this.filter = null;
  cpaf.InvokeSuccess_0(this.mainform, onSuccess);
}
;
_.ComposeText = function ComposeText(curText, textToAdd, addFlag, addSignature, lang2){
  var end, hr, ret, sig, start_0;
  sig = lang2?this.EngSignature:this.HebSignature;
  start_0 = '';
  end = '';
  ret = '';
  if (addSignature) {
    if (!cpac.IsNullOrEmpty(sig.date_0)) {
      start_0 += this.pGet(cpaf.fixtime(sig.date_0, cpac.getLang() == 3), lang2);
      start_0 += this.pGet('&nbsp;', lang2);
    }
    end += this.pGet('&nbsp;', lang2) + this.pGet(sig.message_0, lang2) + this.pGet(sig.name_0, lang2) + this.pGet(sig.position_0, lang2) + this.pGet(sig.email_0, lang2) + this.pGet(sig.phone_0, lang2) + this.pGet(sig.cellphone_0, lang2) + this.pGet(sig.dept_0, lang2) + this.pGet(sig.branch_0, lang2) + this.pGet(sig.company_0, lang2);
  }
  hr = addSignature && sig.hr_0 == 1?'<hr/>':'';
  if (sig.begin_0 == 1) {
    ret = start_0 + this.pGet(textToAdd, lang2) + end + hr + (addFlag?curText:'');
  }
   else {
    ret = (addFlag?curText:'') + hr + start_0 + this.pGet(textToAdd, lang2) + end;
  }
  return ret;
}
;
_.CreateMemento = function CreateMemento(){
  return this.CreateMemento_0((cpaf.$clinit_PriKeys() , cpaf.None_4), this.CurField(), this.CurRowInData(), this.CurFieldVal());
}
;
_.CreateMemento_0 = function CreateMemento_0(key, field, row, value_0){
  return new cpaf.FormTableMemento(field, row, fromInt(this.getCurrentTab()), value_0, this.getIsQueryMode()?-1:this.getIsActive()?1:0, key);
}
;
_.CurField = function CurField(){
  return this.curfield;
}
;
_.CurFieldVal = function CurFieldVal(){
  return this.curfieldval;
}
;
_.CurRowInData = function CurRowInData(){
  return this.rowInData;
}
;
_.GetFilter = function GetFilter(){
  return this.filter;
}
;
_.GetJsTableObject_0 = function GetJsTableObject_0(){
  return this.jsTableObject;
}
;
_.GetSubForms = function GetSubForms(){
  return this.SubForms;
}
;
_.SetCurRow = function SetCurRow(row){
  this.currow = row;
}
;
_.SetCurRowInData = function SetCurRowInData(row){
  this.rowInData = row;
}
;
_.SetField = function SetField(field, value_0){
  this.curfield = field;
  this.curfieldval = value_0;
}
;
_.SetHtmlValues = function SetHtmlValues(edit, tsline, tstext, htmltext){
  this.isEdit = edit;
  this.tsline_0 = tsline;
  this.tstext_0 = tstext;
  this.htmltext = htmltext;
}
;
_.SetJsTableObject = function SetJsTableObject(jsTableObject){
  this.jsTableObject = jsTableObject;
}
;
_.SetSearchFilter_0 = function SetSearchFilter_1(filter, onSuccess, onError){
  var fixed_0;
  this.isAdd = false;
  fixed_0 = cpaf.FixFilter(filter, this.table_0, this.mainform);
  if (isNotNull(filter) && isNull(fixed_0)) {
    cpaf.InvokeError(this.mainform, onError, 'Invalid filter.', 'invalidFilter', false);
    return;
  }
  this.filter = fixed_0;
  cpaf.InvokeSuccess_0(this.mainform, onSuccess);
}
;
_.SetSignature = function SetSignature(eng, date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company){
  if (eng == 1)
    this.EngSignature = new cpaf.FormTable$Signature(date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company);
  else 
    this.HebSignature = new cpaf.FormTable$Signature(date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company);
}
;
_.SetSimpleSearchFilter_0 = function SetSimpleSearchFilter_1(filter, onSuccess, onError){
  var jfilter;
  this.isAdd = false;
  if (jsEquals(filter, null) || jl.length__I__devirtual$_0(filter) <= 0) {
    cpaf.InvokeError(this.mainform, onError, 'Invalid filter.', 'invalidFilter', false);
    return;
  }
  filter = cpaf.FixFilterValue(filter);
  if (jsEquals(filter, null) || jl.length__I__devirtual$_0(filter) <= 0) {
    cpaf.InvokeError(this.mainform, onError, 'Invalid filter.', 'invalidFilter', false);
    return;
  }
  jfilter = cpaf.BuildFilter(filter, this.table_0, this.mainform);
  if (isNull(jfilter)) {
    cpaf.InvokeError(this.mainform, onError, 'Invalud filter.', 'invalidFilter', false);
    return;
  }
  this.filter = jfilter;
  cpaf.InvokeSuccess_0(this.mainform, onSuccess);
}
;
_.SetTableLines_0 = function SetTableLines_0(lines, line, curline){
  this.lines_0 = lines;
  this.line_0 = line;
  this.curline_0 = curline;
}
;
_.getCol = function getCol(field){
  return this.FormColumnsI.get_2(jl.valueOf_15(field));
}
;
_.getCol_0 = function getCol_0(fieldName){
  return this.FormColumns.get_2(fieldName);
}
;
_.getCurrentTab = function getCurrentTab(){
  return 0;
}
;
_.getIsActive = function getIsActive(){
  return true;
}
;
_.getIsQueryMode = function getIsQueryMode(){
  return this._isQueryMode;
}
;
_.isAdd_0 = function isAdd(){
  return this.isAdd;
}
;
_.pEnd = function pEnd(){
  return '<\/p>\n';
}
;
_.pGet = function pGet(str, lang2){
  return cpac.IsNullOrEmpty(str)?'':this.pStart(lang2) + str + this.pEnd();
}
;
_.pStart = function pStart(lang2){
  return '<p dir=' + (cpac.getLang() == 1 && !lang2?'rtl':'ltr') + '>';
}
;
_.setAdd = function setAdd(add_0){
  this.isAdd = add_0;
}
;
_._isQueryMode = false;
_.curfield = 0;
_.curline_0 = 0;
_.currow = 0;
_.form_0 = 0;
_.isAdd = false;
_.isEdit = 0;
_.ishtml_0 = 0;
_.level_0 = 0;
_.line_0 = 0;
_.lines_0 = 0;
_.rowInData = 0;
_.rowcount = 0;
_.self_0 = 0;
_.table_0 = 0;
_.tsline_0 = 0;
cggl.Lcom_priority_app_form_FormTable_2_classLit = createForClass('com.priority.app.form', 'FormTable', 228, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormTable$Signature = function $clinit_FormTable$Signature(){
  cpaf.$clinit_FormTable$Signature = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormTable$Signature = function FormTable$Signature(date, name_0, hr, begin, position, email, phone, message, fontsize, cellphone, branch, dept, company){
  cpaf.$clinit_FormTable$Signature();
  Object_0.call(this);
  this.$init_136();
  this.date_0 = cpaf.removeQuote(date);
  this.name_0 = cpaf.removeQuote(name_0);
  this.hr_0 = hr;
  this.begin_0 = begin;
  this.position_0 = cpaf.removeQuote(position);
  this.email_0 = cpaf.removeQuote(email);
  this.phone_0 = cpaf.removeQuote(phone);
  this.message_0 = cpaf.removeQuote(message);
  this.fontsize_0 = fontsize;
  this.cellphone_0 = cpaf.removeQuote(cellphone);
  this.branch_0 = cpaf.removeQuote(branch);
  this.dept_0 = cpaf.removeQuote(dept);
  this.company_0 = cpaf.removeQuote(company);
}
;
cpaf.removeQuote = function removeQuote(str){
  if (str == null)
    return str;
  return str.replace(/\\'/g, "'");
}
;
defineClass(97, 1, $intern_0, cpaf.FormTable$Signature);
_.$init_136 = function $init_136(){
}
;
_.begin_0 = 0;
_.fontsize_0 = 0;
_.hr_0 = 0;
cggl.Lcom_priority_app_form_FormTable$Signature_2_classLit = createForClass('com.priority.app.form', 'FormTable/Signature', 97, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormTableMemento = function $clinit_FormTableMemento(){
  cpaf.$clinit_FormTableMemento = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormTableMemento = function FormTableMemento(currentFieldNum, currentLine, currentTab, currentFieldValue, isActive, key){
  cpaf.$clinit_FormTableMemento();
  Object_0.call(this);
  this.$init_137();
  cpac.Printlog('FormTableMemento. currentFieldNum: ' + currentFieldNum + '\ncurrentLine: ' + currentLine + '\ncurrentTab: ' + toString_11(currentTab) + '\ncurrentFieldValue: ' + currentFieldValue + '\nisActive: ' + isActive + '\nkey: ' + key);
  this.m_currentFieldNum = currentFieldNum;
  this.m_currentLine = currentLine;
  this.m_currentTab = currentTab;
  this.m_currentFieldValue = currentFieldValue;
  this.m_isActive = isActive;
  this.m_key = key;
}
;
defineClass(235, 1, $intern_0, cpaf.FormTableMemento);
_.$init_137 = function $init_137(){
  this.m_key = cpaf.values_9()[0];
}
;
_.getCurrentFieldNum = function getCurrentFieldNum(){
  return this.m_currentFieldNum;
}
;
_.getCurrentFieldValue = function getCurrentFieldValue(){
  return this.m_currentFieldValue;
}
;
_.getCurrentLine = function getCurrentLine(){
  return this.m_currentLine;
}
;
_.getCurrentTab_0 = function getCurrentTab_0(){
  return this.m_currentTab;
}
;
_.getIsActive_0 = function getIsActive_0(){
  return this.m_isActive;
}
;
_.getKey = function getKey(){
  return this.m_key;
}
;
_.m_currentFieldNum = 0;
_.m_currentLine = 0;
_.m_currentTab = {l:0, m:0, h:0};
_.m_isActive = 0;
cggl.Lcom_priority_app_form_FormTableMemento_2_classLit = createForClass('com.priority.app.form', 'FormTableMemento', 235, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_FormTableOperations = function $clinit_FormTableOperations(){
  cpaf.$clinit_FormTableOperations = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.FormTableOperations = function FormTableOperations(){
  cpaf.$clinit_FormTableOperations();
  Object_0.call(this);
  this.$init_138();
  this.operations = new ju.ArrayList;
}
;
defineClass(214, 1, $intern_0, cpaf.FormTableOperations);
_.$init_138 = function $init_138(){
}
;
_.ToCompressedData = function ToCompressedData(session, currState){
  return cpac.b64encode(this.ToStringData(session, currState));
}
;
_.ToStringData = function ToStringData(session, currState){
  var jop, op, op$iterator, opTable, opsTable, retData, ses, tableState;
  tableState = new cggjc.JSONObject;
  opTable = new cggjc.JSONArray;
  opsTable = new cggjc.JSONArray;
  tableState.put('Operations', opsTable);
  tableState.put('Operation', opTable);
  ses = new cggjc.JSONObject;
  ses.put('session', new cggjc.JSONString(session));
  opsTable.set_0(opsTable.size_1(), ses);
  if (isNotNull(currState)) {
    this.operations.add_1(currState);
  }
  if (this.operations.size_1() > 0) {
    for (op$iterator = this.operations.iterator(); op$iterator.hasNext();) {
      op = op$iterator.next_0();
      jop = new cggjc.JSONObject;
      jop.put('field', new cggjc.JSONString(jl.toString_24(op.getCurrentFieldNum())));
      jop.put('line', new cggjc.JSONString(jl.toString_24(op.getCurrentLine())));
      jop.put('curtab', new cggjc.JSONString(jl.toString_26(op.getCurrentTab_0())));
      jop.put('value', new cggjc.JSONString(op.getCurrentFieldValue()));
      jop.put('active', new cggjc.JSONString(jl.toString_24(op.getIsActive_0())));
      jop.put('key', new cggjc.JSONString(jl.toString_26(fromInt(-op.getKey().getValue_0()))));
      opTable.set_0(opTable.size_1(), jop);
    }
  }
   else {
    jop = new cggjc.JSONObject;
    jop.put('field', new cggjc.JSONString('0'));
    jop.put('line', new cggjc.JSONString('0'));
    jop.put('curtab', new cggjc.JSONString('0'));
    jop.put('value', new cggjc.JSONString(''));
    jop.put('active', new cggjc.JSONString('1'));
    jop.put('key', new cggjc.JSONString('0'));
    opTable.set_0(opTable.size_1(), jop);
  }
  retData = tableState.toString$();
  this.getOperations().clear_0();
  return retData;
}
;
_.getOperations = function getOperations(){
  return this.operations;
}
;
cggl.Lcom_priority_app_form_FormTableOperations_2_classLit = createForClass('com.priority.app.form', 'FormTableOperations', 214, cggl.Ljava_lang_Object_2_classLit);
cpaf.$clinit_PriKeys = function $clinit_PriKeys(){
  cpaf.$clinit_PriKeys = emptyMethod;
  jl.$clinit_Enum();
  cpaf.QueryIncr = new cpaf.PriKeys('QueryIncr', 0, -5);
  cpaf.QueryDecr = new cpaf.PriKeys('QueryDecr', 1, -6);
  cpaf.QueryEnd = new cpaf.PriKeys('QueryEnd', 2, -7);
  cpaf.FormBrother = new cpaf.PriKeys('FormBrother', 3, -8);
  cpaf.SaveHtml = new cpaf.PriKeys('SaveHtml', 4, -10);
  cpaf.FormZoom = new cpaf.PriKeys('FormZoom', 5, -18);
  cpaf.FormNavigateBack = new cpaf.PriKeys('FormNavigateBack', 6, -27);
  cpaf.PrevReturn = new cpaf.PriKeys('PrevReturn', 7, -29);
  cpaf.DebugMode = new cpaf.PriKeys('DebugMode', 8, -32);
  cpaf.SendLink = new cpaf.PriKeys('SendLink', 9, -31);
  cpaf.RestoreColumnWidths = new cpaf.PriKeys('RestoreColumnWidths', 10, -33);
  cpaf.FullZoom = new cpaf.PriKeys('FullZoom', 11, -38);
  cpaf.NotifyViewChange = new cpaf.PriKeys('NotifyViewChange', 12, -39);
  cpaf.CopyRecordLink = new cpaf.PriKeys('CopyRecordLink', 13, -40);
  cpaf.SaveChoose = new cpaf.PriKeys('SaveChoose', 14, -43);
  cpaf.MailTaskUsers = new cpaf.PriKeys('MailTaskUsers', 15, -45);
  cpaf.SendLabels = new cpaf.PriKeys('SendLabels', 16, -46);
  cpaf.GoogleMaps = new cpaf.PriKeys('GoogleMaps', 17, -48);
  cpaf.RefreshTimer = new cpaf.PriKeys('RefreshTimer', 18, -51);
  cpaf.SetFollowup = new cpaf.PriKeys('SetFollowup', 19, -52);
  cpaf.UnsetFollowup = new cpaf.PriKeys('UnsetFollowup', 20, -52);
  cpaf.SaveRow_0 = new cpaf.PriKeys('SaveRow', 21, -78);
  cpaf.None_4 = new cpaf.PriKeys('None', 22, 0);
  cpaf.Return = new cpaf.PriKeys('Return', 23, 4);
  cpaf.Tab = new cpaf.PriKeys('Tab', 24, 5);
  cpaf.Up = new cpaf.PriKeys('Up', 25, 6);
  cpaf.Down = new cpaf.PriKeys('Down', 26, 7);
  cpaf.Right = new cpaf.PriKeys('Right', 27, 8);
  cpaf.Left = new cpaf.PriKeys('Left', 28, 9);
  cpaf.Del = new cpaf.PriKeys('Del', 29, 10);
  cpaf.Cont = new cpaf.PriKeys('Cont', 30, 11);
  cpaf.Srch = new cpaf.PriKeys('Srch', 31, 12);
  cpaf.App_0 = new cpaf.PriKeys('App', 32, 13);
  cpaf.Blk = new cpaf.PriKeys('Blk', 33, 14);
  cpaf.DefaultSubLevel = new cpaf.PriKeys('DefaultSubLevel', 34, 15);
  cpaf.Backs = new cpaf.PriKeys('Backs', 35, 16);
  cpaf.Allbacks = new cpaf.PriKeys('Allbacks', 36, 17);
  cpaf.Do = new cpaf.PriKeys('Do', 37, 18);
  cpaf.Hebeng = new cpaf.PriKeys('Hebeng', 38, 19);
  cpaf.Ins = new cpaf.PriKeys('Ins', 39, 20);
  cpaf.Copyf = new cpaf.PriKeys('Copyf', 40, 21);
  cpaf.Copyc = new cpaf.PriKeys('Copyc', 41, 22);
  cpaf.Setval = new cpaf.PriKeys('Setval', 42, 23);
  cpaf.Getval = new cpaf.PriKeys('Getval', 43, 24);
  cpaf.Help = new cpaf.PriKeys('Help', 44, 25);
  cpaf.Undo_1 = new cpaf.PriKeys('Undo', 45, 26);
  cpaf.Learn = new cpaf.PriKeys('Learn', 46, 27);
  cpaf.Autofill = new cpaf.PriKeys('Autofill', 47, 28);
  cpaf.Tquery = new cpaf.PriKeys('Tquery', 48, 29);
  cpaf.Total = new cpaf.PriKeys('Total', 49, 30);
  cpaf.Npage = new cpaf.PriKeys('Npage', 50, 31);
  cpaf.Ppage = new cpaf.PriKeys('Ppage', 51, 32);
  cpaf.Draw = new cpaf.PriKeys('Draw', 52, 33);
  cpaf.Prnt = new cpaf.PriKeys('Prnt', 53, 34);
  cpaf.Downfirst = new cpaf.PriKeys('Downfirst', 54, 35);
  cpaf.SubLevels = new cpaf.PriKeys('SubLevels', 55, 36);
  cpaf.Splitdef = new cpaf.PriKeys('Splitdef', 56, 37);
  cpaf.Clnln = new cpaf.PriKeys('Clnln', 57, 38);
  cpaf.Clntb = new cpaf.PriKeys('Clntb', 58, 39);
  cpaf.Lputscr = new cpaf.PriKeys('Lputscr', 59, 40);
  cpaf.Lgetscr = new cpaf.PriKeys('Lgetscr', 60, 41);
  cpaf.Hebengs = new cpaf.PriKeys('Hebengs', 61, 42);
  cpaf.Repins = new cpaf.PriKeys('Repins', 62, 43);
  cpaf.Activations = new cpaf.PriKeys('Activations', 63, 44);
  cpaf.Gotolin = new cpaf.PriKeys('Gotolin', 64, 45);
  cpaf.Gotolinn = new cpaf.PriKeys('Gotolinn', 65, 46);
  cpaf.FullMultiRecord = new cpaf.PriKeys('FullMultiRecord', 66, 47);
  cpaf.Element_0 = new cpaf.PriKeys('Element', 67, 48);
  cpaf.Begin = new cpaf.PriKeys('Begin', 68, 49);
  cpaf.Dolearn = new cpaf.PriKeys('Dolearn', 69, 50);
  cpaf.Lstlearn = new cpaf.PriKeys('Lstlearn', 70, 51);
  cpaf.Lstval = new cpaf.PriKeys('Lstval', 71, 52);
  cpaf.Lstscr = new cpaf.PriKeys('Lstscr', 72, 53);
  cpaf.Nframe = new cpaf.PriKeys('Nframe', 73, 54);
  cpaf.Pframe = new cpaf.PriKeys('Pframe', 74, 55);
  cpaf.Select_0 = new cpaf.PriKeys('Select', 75, 56);
  cpaf.Tabhelp = new cpaf.PriKeys('Tabhelp', 76, 57);
  cpaf.Refresh = new cpaf.PriKeys('Refresh', 77, 58);
  cpaf.Activate_0 = new cpaf.PriKeys('Activate', 78, 59);
  cpaf.Gotopos = new cpaf.PriKeys('Gotopos', 79, 60);
  cpaf.Home = new cpaf.PriKeys('Home', 80, 61);
  cpaf.End = new cpaf.PriKeys('End', 81, 62);
  cpaf.Top = new cpaf.PriKeys('Top', 82, 63);
  cpaf.Bottom = new cpaf.PriKeys('Bottom', 83, 64);
  cpaf.Oneline = new cpaf.PriKeys('Oneline', 84, 65);
  cpaf.Printtofile = new cpaf.PriKeys('Printtofile', 85, 66);
  cpaf.Execute = new cpaf.PriKeys('Execute', 86, 67);
  cpaf.Phone = new cpaf.PriKeys('Phone', 87, 68);
  cpaf.Sort = new cpaf.PriKeys('Sort', 88, 69);
  cpaf.Wdel = new cpaf.PriKeys('Wdel', 89, 70);
  cpaf.Enlarge = new cpaf.PriKeys('Enlarge', 90, 71);
  cpaf.Mailinter = new cpaf.PriKeys('Mailinter', 91, 72);
  cpaf.Movetab = new cpaf.PriKeys('Movetab', 92, 73);
  cpaf.Splitempty = new cpaf.PriKeys('Splitempty', 93, 74);
  cpaf.DlgQuery = new cpaf.PriKeys('DlgQuery', 94, 75);
  cpaf.Execform = new cpaf.PriKeys('Execform', 95, 76);
  cpaf.Scroll = new cpaf.PriKeys('Scroll', 96, 77);
  cpaf.SelectAll = new cpaf.PriKeys('SelectAll', 97, 78);
  cpaf.StoreRecords = new cpaf.PriKeys('StoreRecords', 98, 79);
  cpaf.RetrieveRecords = new cpaf.PriKeys('RetrieveRecords', 99, 80);
  cpaf.IncrDecrValue = new cpaf.PriKeys('IncrDecrValue', 100, 81);
  cpaf.Macro = new cpaf.PriKeys('Macro', 101, 82);
  cpaf.ExecuteQuery = new cpaf.PriKeys('ExecuteQuery', 102, 83);
  cpaf.DlgBusiness = new cpaf.PriKeys('DlgBusiness', 103, 84);
  cpaf.DlgData = new cpaf.PriKeys('DlgData', 104, 85);
  cpaf.DlgFields = new cpaf.PriKeys('DlgFields', 105, 86);
  cpaf.DlgDirectActivations = new cpaf.PriKeys('DlgDirectActivations', 106, 87);
  cpaf.DlgSubLevels = new cpaf.PriKeys('DlgSubLevels', 107, 88);
  cpaf.RowColors = new cpaf.PriKeys('RowColors', 108, 89);
  cpaf.MacroList = new cpaf.PriKeys('MacroList', 109, 90);
  cpaf.DlgMultiComp = new cpaf.PriKeys('DlgMultiComp', 110, 91);
  cpaf.AttachActivateApp = new cpaf.PriKeys('AttachActivateApp', 111, 92);
  cpaf.AttachBrowse = new cpaf.PriKeys('AttachBrowse', 112, 93);
  cpaf.AttachImport = new cpaf.PriKeys('AttachImport', 113, 94);
  cpaf.AttachPasteImport = new cpaf.PriKeys('AttachPasteImport', 114, 95);
  cpaf.AttachClear = new cpaf.PriKeys('AttachClear', 115, 96);
  cpaf.AttachDelete = new cpaf.PriKeys('AttachDelete', 116, 97);
  cpaf.AttachSaveAs = new cpaf.PriKeys('AttachSaveAs', 117, 98);
  cpaf.AttachHelp = new cpaf.PriKeys('AttachHelp', 118, 99);
  cpaf.ShiftDo = new cpaf.PriKeys('ShiftDo', 119, 100);
  cpaf.ExecuteDirectAct = new cpaf.PriKeys('ExecuteDirectAct', 120, 101);
  cpaf.GotoSubForm_0 = new cpaf.PriKeys('GotoSubForm', 121, 102);
  cpaf.Navigate = new cpaf.PriKeys('Navigate', 122, 103);
  cpaf.SendExcel = new cpaf.PriKeys('SendExcel', 123, 104);
  cpaf.DesignExcel = new cpaf.PriKeys('DesignExcel', 124, 105);
  cpaf.SaveExcel = new cpaf.PriKeys('SaveExcel', 125, 106);
  cpaf.FormFontSize = new cpaf.PriKeys('FormFontSize', 126, 107);
  cpaf.CopyColumn = new cpaf.PriKeys('CopyColumn', 127, 108);
  cpaf.PasteColumn = new cpaf.PriKeys('PasteColumn', 128, 109);
  cpaf.Skype = new cpaf.PriKeys('Skype', 129, 110);
  cpaf.Messenger = new cpaf.PriKeys('Messenger', 130, 111);
  cpaf.Dialer = new cpaf.PriKeys('Dialer', 131, 112);
  cpaf.Calculator = new cpaf.PriKeys('Calculator', 132, 113);
  cpaf.MacroRecStart = new cpaf.PriKeys('MacroRecStart', 133, 114);
  cpaf.MacroRecStop = new cpaf.PriKeys('MacroRecStop', 134, 115);
  cpaf.RunApp = new cpaf.PriKeys('RunApp', 135, 116);
  cpaf.Browse = new cpaf.PriKeys('Browse', 136, 117);
  cpaf.Clnfld = new cpaf.PriKeys('Clnfld', 137, 118);
  cpaf.Pastec = new cpaf.PriKeys('Pastec', 138, 119);
  cpaf.SendWord = new cpaf.PriKeys('SendWord', 139, 120);
  cpaf.DesignWord = new cpaf.PriKeys('DesignWord', 140, 121);
  cpaf.SubLevelsQuery = new cpaf.PriKeys('SubLevelsQuery', 141, 122);
  cpaf.DefaultSubLevelQuery = new cpaf.PriKeys('DefaultSubLevelQuery', 142, 123);
  cpaf.MailInterface = new cpaf.PriKeys('MailInterface', 143, 124);
  cpaf.PasteOnServer = new cpaf.PriKeys('PasteOnServer', 144, 125);
  cpaf.AttachDuplicate = new cpaf.PriKeys('AttachDuplicate', 145, 126);
  cpaf.AutoSaveHtml = new cpaf.PriKeys('AutoSaveHtml', 146, 127);
  cpaf.Enter = new cpaf.PriKeys('Enter', 147, 128);
  cpaf.DynamicKeyboard = new cpaf.PriKeys('DynamicKeyboard', 148, 129);
}
;
cpaf.PriKeys = function PriKeys(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_139();
  this.intValue = value_0;
  cpaf.getMappings_5().put_0(jl.valueOf_15(value_0), this);
}
;
cpaf.getMappings_5 = function getMappings_5(){
  if (isNull(cpaf.mappings_5)) {
    {
      cggl.Lcom_priority_app_form_PriKeys_2_classLit;
      if (isNull(cpaf.mappings_5)) {
        cpaf.mappings_5 = new ju.HashMap;
      }
    }
  }
  return cpaf.mappings_5;
}
;
cpaf.valueOf_9 = function valueOf_9(name_0){
  cpaf.$clinit_PriKeys();
  return valueOf((cpaf.$clinit_PriKeys$Map() , cpaf.$MAP_8), name_0);
}
;
cpaf.values_9 = function values_9(){
  cpaf.$clinit_PriKeys();
  return initValues(getClassLiteralForArray(cggl.Lcom_priority_app_form_PriKeys_2_classLit, 1), $intern_2, 4, 0, [cpaf.QueryIncr, cpaf.QueryDecr, cpaf.QueryEnd, cpaf.FormBrother, cpaf.SaveHtml, cpaf.FormZoom, cpaf.FormNavigateBack, cpaf.PrevReturn, cpaf.DebugMode, cpaf.SendLink, cpaf.RestoreColumnWidths, cpaf.FullZoom, cpaf.NotifyViewChange, cpaf.CopyRecordLink, cpaf.SaveChoose, cpaf.MailTaskUsers, cpaf.SendLabels, cpaf.GoogleMaps, cpaf.RefreshTimer, cpaf.SetFollowup, cpaf.UnsetFollowup, cpaf.SaveRow_0, cpaf.None_4, cpaf.Return, cpaf.Tab, cpaf.Up, cpaf.Down, cpaf.Right, cpaf.Left, cpaf.Del, cpaf.Cont, cpaf.Srch, cpaf.App_0, cpaf.Blk, cpaf.DefaultSubLevel, cpaf.Backs, cpaf.Allbacks, cpaf.Do, cpaf.Hebeng, cpaf.Ins, cpaf.Copyf, cpaf.Copyc, cpaf.Setval, cpaf.Getval, cpaf.Help, cpaf.Undo_1, cpaf.Learn, cpaf.Autofill, cpaf.Tquery, cpaf.Total, cpaf.Npage, cpaf.Ppage, cpaf.Draw, cpaf.Prnt, cpaf.Downfirst, cpaf.SubLevels, cpaf.Splitdef, cpaf.Clnln, cpaf.Clntb, cpaf.Lputscr, cpaf.Lgetscr, cpaf.Hebengs, cpaf.Repins, cpaf.Activations, cpaf.Gotolin, cpaf.Gotolinn, cpaf.FullMultiRecord, cpaf.Element_0, cpaf.Begin, cpaf.Dolearn, cpaf.Lstlearn, cpaf.Lstval, cpaf.Lstscr, cpaf.Nframe, cpaf.Pframe, cpaf.Select_0, cpaf.Tabhelp, cpaf.Refresh, cpaf.Activate_0, cpaf.Gotopos, cpaf.Home, cpaf.End, cpaf.Top, cpaf.Bottom, cpaf.Oneline, cpaf.Printtofile, cpaf.Execute, cpaf.Phone, cpaf.Sort, cpaf.Wdel, cpaf.Enlarge, cpaf.Mailinter, cpaf.Movetab, cpaf.Splitempty, cpaf.DlgQuery, cpaf.Execform, cpaf.Scroll, cpaf.SelectAll, cpaf.StoreRecords, cpaf.RetrieveRecords, cpaf.IncrDecrValue, cpaf.Macro, cpaf.ExecuteQuery, cpaf.DlgBusiness, cpaf.DlgData, cpaf.DlgFields, cpaf.DlgDirectActivations, cpaf.DlgSubLevels, cpaf.RowColors, cpaf.MacroList, cpaf.DlgMultiComp, cpaf.AttachActivateApp, cpaf.AttachBrowse, cpaf.AttachImport, cpaf.AttachPasteImport, cpaf.AttachClear, cpaf.AttachDelete, cpaf.AttachSaveAs, cpaf.AttachHelp, cpaf.ShiftDo, cpaf.ExecuteDirectAct, cpaf.GotoSubForm_0, cpaf.Navigate, cpaf.SendExcel, cpaf.DesignExcel, cpaf.SaveExcel, cpaf.FormFontSize, cpaf.CopyColumn, cpaf.PasteColumn, cpaf.Skype, cpaf.Messenger, cpaf.Dialer, cpaf.Calculator, cpaf.MacroRecStart, cpaf.MacroRecStop, cpaf.RunApp, cpaf.Browse, cpaf.Clnfld, cpaf.Pastec, cpaf.SendWord, cpaf.DesignWord, cpaf.SubLevelsQuery, cpaf.DefaultSubLevelQuery, cpaf.MailInterface, cpaf.PasteOnServer, cpaf.AttachDuplicate, cpaf.AutoSaveHtml, cpaf.Enter, cpaf.DynamicKeyboard]);
}
;
defineClass(4, 15, {4:1, 3:1, 18:1, 15:1, 1:1}, cpaf.PriKeys);
_.$init_139 = function $init_139(){
}
;
_.getValue_0 = function getValue_6(){
  return this.intValue;
}
;
_.intValue = 0;
cggl.Lcom_priority_app_form_PriKeys_2_classLit = createForEnum('com.priority.app.form', 'PriKeys', 4, cggl.Ljava_lang_Enum_2_classLit, cpaf.values_9, cpaf.valueOf_9);
cpaf.$clinit_PriKeys$Map = function $clinit_PriKeys$Map(){
  cpaf.$clinit_PriKeys$Map = emptyMethod;
  cpaf.$MAP_8 = createValueOfMap(cpaf.values_9());
}
;
defineClass(450, 1, $intern_0);
cpaf.$clinit_SubForm = function $clinit_SubForm(){
  cpaf.$clinit_SubForm = emptyMethod;
  jl.$clinit_Object();
}
;
cpaf.SubForm = function SubForm(ename, exec_0, form_0, self_0, table, title_0){
  cpaf.$clinit_SubForm();
  Object_0.call(this);
  this.$init_140();
  this.ename_0 = ename;
  this.exec_0 = exec_0;
  this.form_0 = form_0;
  this.self_0 = self_0;
  this.table_0 = table;
  this.title_0 = title_0;
}
;
defineClass(232, 1, $intern_0, cpaf.SubForm);
_.$init_140 = function $init_140(){
}
;
_.getSelf = function getSelf(){
  return this.self_0;
}
;
_.exec_0 = 0;
_.form_0 = 0;
_.self_0 = 0;
_.table_0 = 0;
cggl.Lcom_priority_app_form_SubForm_2_classLit = createForClass('com.priority.app.form', 'SubForm', 232, cggl.Ljava_lang_Object_2_classLit);
cpam.$clinit_PriorityApp = function $clinit_PriorityApp(){
  cpam.$clinit_PriorityApp = emptyMethod;
  jl.$clinit_Object();
}
;
cpam.PriorityApp = function PriorityApp(){
  cpam.$clinit_PriorityApp();
  Object_0.call(this);
  this.$init_141();
}
;
cpam.publishAPIfuncMain = function publishAPIfuncMain(){
  $wnd.login = function(configuration, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      cpaf.Login_0(configuration, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        cpaf.Login_0(configuration, onSuccess, onError);
      }
      );
  }
  ;
  if (!(typeof module !== 'undefined' && typeof module.exports !== 'undefined')) {
    $wnd.priorityReady();
  }
}
;
defineClass(116, 1, $intern_0, cpam.PriorityApp);
_.$init_141 = function $init_141(){
  this.con = null;
}
;
_.GetConnection = function GetConnection_0(){
  if (isNotNull(this.con))
    return this.con;
  this.con = cpac.GetWCFServiceClient(this);
  return this.con;
}
;
_.RemoveConnection = function RemoveConnection(){
  this.con = null;
}
;
_.ServerTripCompleted = function ServerTripCompleted_0(sender, e){
}
;
_.SetIsGoneToServer = function SetIsGoneToServer_0(userState){
  return true;
}
;
_.getDname = function getDname_0(){
  return null;
}
;
_.onModuleLoad = function onModuleLoad_2(){
  cpac.$clinit_PriCommon() , cpac.AppMain = this;
  cpaf.createJsHelperFunc();
  cpaf.publishAPIfuncForm();
  cpap.publishAPIfuncProc();
  cpam.publishAPIfuncMain();
}
;
cggl.Lcom_priority_app_main_PriorityApp_2_classLit = createForClass('com.priority.app.main', 'PriorityApp', 116, cggl.Ljava_lang_Object_2_classLit);
cpap.$clinit_Proc = function $clinit_Proc(){
  cpap.$clinit_Proc = emptyMethod;
  jl.$clinit_Object();
}
;
cpap.Proc = function Proc(){
  cpap.$clinit_Proc();
  Object_0.call(this);
  this.$init_142();
  if (isNull(cpap.ExtMessages))
    cpap.ExtMessages = new ju.HashMap;
}
;
cpap.isExtMessagesInitizlized = function isExtMessagesInitizlized(){
  return isNotNull(cpap.ExtMessages) && !cpap.ExtMessages.isEmpty_0();
}
;
defineClass(92, 1, $intern_0, cpap.Proc);
_.$init_142 = function $init_142(){
  this.progressFunc = null;
  this.dname = null;
  this.SearchLast = new ju.ArrayList;
  this.errCount = 0;
  this.inputFields_0 = new ju.HashMap;
  this.con = null;
  this.isOnServer = false;
}
;
_.AskPrint = function AskPrint(proc, onSuccess, onError){
  var askprint, formats, par, pdfVal, wantsPdf;
  askprint = proc.get_1('AskPrint');
  formats = null;
  wantsPdf = false;
  if (isNotNull(askprint) && askprint.size_1() > 0) {
    par = askprint.get_0(0);
    formats = par.get_1('Formats');
    pdfVal = round_int(cpac.getJSONNumberProperty(par, 'pdf'));
    wantsPdf = pdfVal % 2 != 0;
  }
  cpap.InvokeDocumentOptions(this, wantsPdf, isNull(formats)?null:formats.getJavaScriptObject(), onSuccess);
}
;
_.CancelProcedure = function CancelProcedure(onSuccess, onError){
  cpap.$clinit_Proc();
  this.CancelProcedure_0(true, this.waitAutoProgress, onSuccess, onError);
}
;
_.CancelProcedure_0 = function CancelProcedure_0(killFlag, executionFlag, onSuccess, onError){
  if (this.isFinished || cpac.IsNullOrEmpty(this.getSession())) {
    if (isNotNull(onSuccess))
      this.OnProcEnd(onSuccess);
    return;
  }
  if (killFlag) {
    if (executionFlag) {
      this.GetConnection().ProcKillExecutionMobAsync(this.getSession(), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcKillExecution', onSuccess, onError));
    }
     else {
      this.GetConnection().ProcKillProcessMobAsync(this.getSession(), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcKillProcess', onSuccess, onError));
    }
  }
   else {
    this.GetConnection().ProcEndMobAsync(this.getSession(), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcEnd', onSuccess, onError));
  }
}
;
_.DisplayUrl = function DisplayUrl(proc, onSuccess, onError){
  var urls;
  urls = proc.get_1('URL');
  cpap.InvokeDisplayUrl(this, urls.getJavaScriptObject(), onSuccess);
}
;
_.DocumentOptions = function DocumentOptions(ok, selectedFormat, pdf, onSuccess, onError){
  cpap.$clinit_Proc();
  if (ok == 0) {
    this.CancelProcedure_0(false, false, onSuccess, onError);
  }
   else {
    this.GetConnection().ProcAskPrintOKMobAsync(this.getSession(), {l:2, m:0, h:0}, fromInt(selectedFormat), false, {l:1, m:0, h:0}, pdf == 1, false, false, new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcNewReport', onSuccess, onError));
  }
}
;
_.GetConnection = function GetConnection_1(){
  if (isNotNull(this.con))
    return this.con;
  this.con = cpac.GetWCFServiceClient(this);
  return this.con;
}
;
_.GetProc = function GetProc(){
  return cpap.GetProc_0(this);
}
;
_.Input_0 = function Input_0(proc, onSuccess, onError){
  var chooseField, chooseFields, columntype, editField, editFields, field, helpString, i_0, isboolean, ispassword, mandatory, name_0, op, opId, operator, operators, par, parameters, readonly, ret, selected, text_0, title_0, title0, value_0, value1, width_0, zoomtype;
  ret = this.InputStart();
  parameters = proc.get_1('Parameters');
  if (isNotNull(parameters) && parameters.size_1() > 0) {
    par = parameters.get_0(0);
    editFields = par.get_1('EditField');
    if (isNotNull(editFields)) {
      for (i_0 = 0; i_0 < editFields.size_1(); i_0++) {
        editField = editFields.get_0(i_0);
        field = round_int(cpac.getJSONNumberProperty(editField, 'field'));
        helpString = cpac.getHyperLinkedText(editField, 'help');
        isboolean = round_int(cpac.getJSONNumberProperty(editField, 'isboolean'));
        ispassword = round_int(cpac.getJSONNumberProperty(editField, 'ispassword'));
        mandatory = round_int(cpac.getJSONNumberProperty(editField, 'mandatory'));
        operator = round_int(cpac.getJSONNumberProperty(editField, 'operator'));
        readonly = round_int(cpac.getJSONNumberProperty(editField, 'simplechoose'));
        title0 = cpac.getJSONStringProperty(editField, 'title');
        columntype = cpac.forValue(jl.charAt_I_C__devirtual$_0(cpac.getJSONStringProperty(editField, 'type'), 0));
        value_0 = cpac.getJSONStringProperty(editField, 'value');
        value1 = cpac.getJSONStringProperty(editField, 'value1');
        width_0 = round_int(cpac.getJSONNumberProperty(editField, 'width'));
        zoomtype = cpac.forValue_1(round_int(cpac.getJSONNumberProperty(editField, 'zoomtype')));
        this.InputFieldAdd(ret, field, helpString, isboolean, ispassword, mandatory, operator, readonly, title0, columntype, value_0, value1, width_0, zoomtype);
      }
    }
    operators = par.get_1('Operators');
    if (isNotNull(operators)) {
      for (i_0 = 0; i_0 < operators.size_1(); i_0++) {
        op = operators.get_0(i_0);
        name_0 = cpac.getJSONStringProperty(op, 'name');
        opId = round_int(cpac.getJSONNumberProperty(op, 'op'));
        title0 = cpac.getJSONStringProperty(op, 'title');
        this.InputOperatorAdd(ret, name_0, opId, title0);
      }
    }
    chooseFields = par.get_1('ChooseField');
    if (isNotNull(chooseFields)) {
      for (i_0 = 0; i_0 < chooseFields.size_1(); i_0++) {
        chooseField = chooseFields.get_0(i_0);
        field = round_int(cpac.getJSONNumberProperty(chooseField, 'field'));
        helpString = cpac.getHyperLinkedText(chooseField, 'help');
        name_0 = cpac.getJSONStringProperty(chooseField, 'name');
        selected = round_int(cpac.getJSONNumberProperty(chooseField, 'selected'));
        title0 = cpac.getJSONStringProperty(chooseField, 'title');
        this.InputChooseAdd(ret, field, helpString, name_0, selected, title0);
      }
    }
    text_0 = cpac.getJSONStringProperty(par, 'text');
    title_0 = cpac.getJSONStringProperty(par, 'title');
    this.InputTextSet(ret, text_0, title_0);
  }
  cpap.InvokeInput(this, ret, onSuccess);
}
;
_.InputChoose = function InputChoose(ok, selection, onSuccess, onError){
  cpap.$clinit_Proc();
  if (ok == 0) {
    this.CancelProcedure_0(false, false, onSuccess, onError);
  }
   else {
    this.GetConnection().ProcChooseFieldsOKMobAsync(this.getSession(), fromInt(selection), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcChooseFieldsOK', onSuccess, onError));
  }
}
;
_.InputChooseAdd = function InputChooseAdd(retObj, fieldId, helpString, name_0, selected, title_0){
  var field = {};
  field.field = fieldId;
  field.help = helpString;
  field.name = name_0;
  field.selected = selected;
  field.title = title_0;
  if (!retObj.Options)
    retObj.Options = [];
  retObj.Options.push(field);
}
;
_.InputFieldAdd = function InputFieldAdd(retObj, fieldId, helpstring, isboolean, ispassword, mandatory, operator, readonly, title_0, columntype, value_0, value1, width_0, zoomtype){
  this.inputFields_0.put_0(jl.valueOf_15(fieldId), new cpap.Proc$InputField(fieldId, columntype, zoomtype));
  this.InputFieldAddNative(retObj, fieldId, helpstring, isboolean, ispassword, mandatory, operator, readonly, title_0, columntype.toString$(), value_0, value1, width_0, zoomtype.toString$());
}
;
_.InputFieldAddNative = function InputFieldAddNative(retObj, fieldId, helpstring, isboolean, ispassword, mandatory, operator, readonly, title_0, columntype, value_0, value1, width_0, zoomtype){
  var field = {};
  field.field = fieldId;
  field.helpstring = helpstring;
  field.isboolean = isboolean;
  field.ispassword = ispassword;
  field.mandatory = mandatory;
  field.operator = operator;
  field.readonly = readonly;
  field.title = title_0;
  field.columntype = columntype;
  field.value = value_0;
  field.value1 = value1;
  field.width = width_0;
  field.zoom = zoomtype;
  if (!retObj.EditFields)
    retObj.EditFields = [];
  retObj.EditFields.push(field);
}
;
_.InputFields = function InputFields(ok, data_0, onSuccess, onError){
  cpap.$clinit_Proc();
  var json;
  if (ok == 0) {
    this.CancelProcedure_0(false, false, onSuccess, onError);
  }
   else {
    json = cpac.b64encode(cpac.JsonToString(data_0));
    this.GetConnection().ProcEditFieldsOKMobAsync(this.getSession(), false, json, new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcEditFieldsOK', onSuccess, onError));
  }
}
;
_.InputHelp = function InputHelp(ok, onSuccess, onError){
  cpap.$clinit_Proc();
  if (ok == 0) {
    this.CancelProcedure_0(false, false, onSuccess, onError);
  }
   else {
    this.GetConnection().ProcContinueMobAsync(this.getSession(), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcContinue', onSuccess, onError));
  }
}
;
_.InputOperatorAdd = function InputOperatorAdd(retObj, name_0, opId, title_0){
  var op = {};
  op.name = name_0;
  op.op = opId;
  op.title = title_0;
  if (!retObj.Operators)
    retObj.Operators = [];
  retObj.Operators.push(op);
}
;
_.InputStart = function InputStart(){
  this.inputFields_0.clear_0();
  return this.InputStartNative();
}
;
_.InputStartNative = function InputStartNative(){
  var retObj = {};
  return retObj;
}
;
_.InputTextSet = function InputTextSet(retObj, text_0, title_0){
  retObj.text = text_0;
  retObj.title = title_0;
}
;
_.NewReport = function NewReport(proc, onSuccess, onError){
  var firstFormat, format, formats, i_0, n, nformat, nselected, oformat, option, selectedFormat, showExcel, str;
  n = proc.get_1('showexcel');
  showExcel = isNull(n) || n.doubleValue() != 0;
  if (this.spreadsheet == 1)
    showExcel = false;
  str = proc.get_1('optionselected');
  option = null;
  if (isNotNull(str))
    option = str.stringValue();
  selectedFormat = 0;
  firstFormat = 0;
  formats = proc.get_1('Formats');
  if (isNotNull(formats) && formats.size_1() > 0) {
    for (i_0 = 0; i_0 < formats.size_1(); i_0++) {
      oformat = formats.get_0(i_0);
      format = 0;
      nformat = oformat.get_1('format');
      if (isNotNull(nformat)) {
        format = round_int(nformat.doubleValue());
        if (firstFormat == 0)
          firstFormat = format;
      }
      nselected = oformat.get_1('selected');
      if (isNotNull(nselected) && nselected.doubleValue() == 1)
        selectedFormat = format;
    }
  }
  if (isNull(formats) || formats.size_1() <= 1) {
    this.ReportOptions(1, selectedFormat == 0?firstFormat:selectedFormat, onSuccess, onError);
  }
   else {
    cpap.InvokeReportOptions(this, showExcel, jl.equals_Ljava_lang_Object__Z__devirtual$_0('excel', option), formats.getJavaScriptObject(), onSuccess);
  }
}
;
_.NotSupported = function NotSupported(step, onError){
  cpap.InvokeNotSupported(this, step, onError);
  this.CancelProcedure_0(false, false, null, null);
}
;
_.OnProcEnd = function OnProcEnd(onSuccess){
  cpap.InvokeEnd(this, onSuccess);
}
;
_.OpenChoose = function OpenChoose(fieldId, value_0, data_0, onSuccess, onError){
  cpap.$clinit_Proc();
  var field, json, proc;
  field = this.inputFields_0.get_2(jl.valueOf_15(fieldId));
  proc = this;
  if (isNull(field)) {
    cpap.InvokeError_0(this, 'Field not found: ' + fieldId, false, onError);
  }
   else {
    json = cpac.b64encode(cpac.JsonToString(data_0));
    this.GetConnection().ProcParamChooseMobAsync(this.getSession(), fromInt(jsEquals(field.zoomtype, (cpac.$clinit_ZoomTypes() , cpac.Date8_0)) || jsEquals(field.zoomtype, (cpac.$clinit_ZoomTypes() , cpac.Date10_0)) || jsEquals(field.zoomtype, (cpac.$clinit_ZoomTypes() , cpac.Date14_0))?-1:fieldId), json, new cpap.Proc$4(this, this.GetConnection(), proc, onSuccess, fieldId, value_0, json, onError));
  }
}
;
_.ProcContinue = function ProcContinue(onSuccess, onError){
  if (this.isFinished) {
    this.OnProcEnd(onSuccess);
    return;
  }
  this.GetConnection().ProcContinueMobAsync(this.getSession(), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcContinue', onSuccess, onError));
}
;
_.ProcMessage = function ProcMessage(curmsg, onSuccess){
  var msgtext, mt;
  mt = curmsg.get_1('messagetype');
  this.setLastMessageType(mt.stringValue());
  msgtext = cpac.getHyperLinkedText(curmsg, 'message');
  cpap.InvokeMessage(this, msgtext, mt.stringValue(), onSuccess);
}
;
_.ProcMessageHidden = function ProcMessageHidden(ok, onSuccess, onError){
  if (jsEquals(this.lastMessageType, (cpac.$clinit_PriCommon$PriMessageType() , cpac.Ok))) {
    if (isNotNull(this.lastResponse)) {
      this.MsgCounter++;
      this.ProcStep(this.lastResponse, this.lastOperation, false, onSuccess, onError);
    }
     else {
      this.ProcContinue(onSuccess, onError);
    }
  }
   else if (ok == 1) {
    this.GetConnection().ProcWarningOKMobAsync(this.getSession(), fromInt(0), new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcWarningOK', onSuccess, onError));
  }
   else {
    this.CancelProcedure_0(false, false, onSuccess, onError);
  }
}
;
_.ProcStart = function ProcStart(ename, etitle, type_0, onSuccess, onError){
  var thisProc;
  this.ename_0 = ename;
  this.etype_0 = type_0;
  this.etitle = etitle;
  thisProc = this;
  this.GetConnection().ProcStartMobAsync(type_0, ename, false, {l:0, m:0, h:0}, cpap.isExtMessagesInitizlized(), new cpap.Proc$1(this, this.GetConnection(), onSuccess, onError, thisProc));
}
;
_.ProcStartActivate = function ProcStartActivate(ename, type_0, activationlink, onSuccess, onError){
  var lnk, thisProc;
  lnk = activationlink;
  this.ename_0 = ename;
  this.etype_0 = type_0;
  thisProc = this;
  this.GetConnection().ProcStartActivateMobAsync(type_0, ename, cpap.$getTable(lnk), cpap.$getLink(lnk), cpap.$getLinkid(lnk), cpap.isExtMessagesInitizlized(), new cpap.Proc$2(this, this.GetConnection(), onSuccess, onError, thisProc));
}
;
_.ProcStep = function ProcStep(jo, operation, newStep, onSuccess, onError){
  cpap.$clinit_Proc();
  var curmsg, messages, msgs, n, pa, proc, s, step;
  pa = jo.get_1('Procedure');
  proc = pa.get_0(0);
  step = proc.get_1('step').stringValue();
  this.setLastOperation(operation);
  if (newStep)
    this.MsgCounter = 0;
  s = proc.get_1('session');
  if (isNotNull(s))
    this.setSession(s.stringValue());
  n = proc.get_1('finished');
  if (isNotNull(n))
    this.setFinished(n.doubleValue() == 1);
  n = proc.get_1('spreadsheet');
  if (isNotNull(n))
    this.setSpreadsheet(round_int(n.doubleValue()));
  if (isNotNull(n))
    this.setFinished(n.doubleValue() == 1);
  messages = proc.get_1('Message');
  if (isNotNull(messages) && messages.size_1() > this.MsgCounter) {
    curmsg = messages.get_0(this.MsgCounter);
    this.setLastResponse(jo);
    this.ProcMessage(curmsg, onSuccess);
    return;
  }
  switch (step) {
    case 'newsaved':
      this.NewReport(proc, onSuccess, onError);
      break;
    case 'input':
      this.Input_0(proc, onSuccess, onError);
      break;
    case 'displayurl':
      this.DisplayUrl(proc, onSuccess, onError);
      break;
    case 'askprint':
      this.AskPrint(proc, onSuccess, onError);
      break;
    case 'NETLABELSINIT':
    case 'upload':
    case 'download':
    case 'excel':
    case 'savefile':
    case 'movie':
    case 'wizard':
    case 'document':
    case 'GANTT':
    case 'WINDBI':
    case 'EXPLORER':
    case 'PRIVTREE':
    case 'BPM':
    case 'form':
    case 'mailurl':
    case 'internalmail':
    case 'procedure':
    case 'passthru':
    case 'labels':
    case 'synccontacts':
    case 'prexfile':
    case 'OLPORTAL':
    case 'SENDMSG':
    case 'PRINTDLG':
    case 'OPENWORD':
    case 'WORDCONV':
    case 'GTOKENS':
    case 'MSPROJ':
    case 'WORDTMPL':
    case 'SHVAEXEC':
    case 'WINFORM':
    case 'WINPROC':
    case 'WINHTMLH':
    case 'STARSHIP':
      this.NotSupported(step, onError);
      break;
    case 'warning':
      this.setLastResponse(null);
      msgs = proc.get_1('Warning');
      curmsg = msgs.get_0(0);
      this.ProcMessage(curmsg, onSuccess);
      break;
    case 'BACKGROUND':
      this.ProcContinue(onSuccess, onError);
      break;
    case 'waitprocess':
    case 'waitexecution':
      this.waitMS = 400;
      this.WaitProcess(jl.equals_Ljava_lang_Object__Z__devirtual$_0('waitexecution', step), onSuccess, onError);
      break;
    default:this.OnProcEnd(onSuccess);
      break;
  }
}
;
_.RefreshSearch = function RefreshSearch(jo){
  cpap.$clinit_Proc();
  var pa, pr, search, searcharr;
  search = null;
  pa = jo.get_1('Procedure');
  pr = pa.get_0(0);
  searcharr = pr.get_1('Search');
  if (isNotNull(searcharr)) {
    search = searcharr.get_0(0);
    this.SearchCursor = fromDouble(cpac.getJSONNumberProperty(search, 'stack_cursor'));
    this.SearchStart = fromDouble(cpac.getJSONNumberProperty(search, 'stack_stack'));
    this.SearchLast.add_1(cpac.getJSONStringProperty(search, 'stack_last'));
  }
  return search;
}
;
_.ReportOptions = function ReportOptions(ok, selectedFormat, onSuccess, onError){
  cpap.$clinit_Proc();
  var newrepmode;
  if (ok == 0) {
    this.CancelProcedure_0(false, false, onSuccess, onError);
  }
   else {
    newrepmode = 'H';
    this.GetConnection().ProcNewReportMobAsync(this.etype_0, this.ename_0, false, newrepmode, fromInt(selectedFormat), '', new cpap.Proc$CommonResponse(this.GetConnection(), this, 'ProcNewReport', onSuccess, onError));
  }
}
;
_.SearchAction = function SearchAction_0(fieldId, value_0, action, data_0, onSuccess, onError){
  cpap.$clinit_Proc();
  var count, from, i_0, lastval, proc, to;
  proc = this;
  count = this.SearchLast.size_1();
  lastval = '';
  if (action == (cpac.$clinit_SearchActions() , cpac.Prev).getValue_0()) {
    action = (cpac.$clinit_SearchActions() , cpac.Next).getValue_0();
    if (count > 0) {
      from = count - 2;
      to = jl.min_0(2, count) + jl.max_0(0, count - 2);
      for (i_0 = to - 1; i_0 >= from; i_0--)
        this.SearchLast.remove_2(i_0);
    }
    count -= 2;
  }
  if (action == (cpac.$clinit_SearchActions() , cpac.Next).getValue_0() && count > 0) {
    lastval = this.SearchLast.get_3(count - 1);
  }
   else {
    this.SearchLast.clear_0();
  }
  this.GetConnection().ProcParamSearchMobAsync(this.getSession(), fromInt(fieldId), fromInt(action), this.SearchCursor, this.SearchStart, lastval, value_0, null, new cpap.Proc$3(this, this.GetConnection(), proc, onSuccess, onError));
}
;
_.ServerTripCompleted = function ServerTripCompleted_1(sender, e){
  this.isOnServer = false;
}
;
_.SetIsGoneToServer = function SetIsGoneToServer_1(userState){
  if (this.isOnServer)
    return false;
  this.isOnServer = true;
  return true;
}
;
_.WaitContinue = function WaitContinue(jo, onSuccess, onError, operation){
  cpap.$clinit_Proc();
  var pa, proc, step, val;
  this.errCount = 0;
  pa = jo.get_1('Procedure');
  proc = pa.get_0(0);
  step = proc.get_1('step').stringValue();
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_0('waitprocess', step) && this.waitAutoProgress) {
    this.waitAutoProgress = false;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_0('waitexecution', step) && !this.waitAutoProgress) {
    this.waitAutoProgress = true;
  }
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_0('waitprocess', step)) {
    val = proc.get_1('sandglass').doubleValue();
    if (val > 0) {
      cpap.InvokeProgress(this, round_int(val), this.progressFunc);
    }
  }
   else if (!jl.equals_Ljava_lang_Object__Z__devirtual$_0('waitexecution', step)) {
    this.ProcStep(jo, operation, true, onSuccess, onError);
    return;
  }
  this.WaitProcess(this.waitAutoProgress, onSuccess, onError);
}
;
_.WaitProcess = function WaitProcess(autoprogress, onSuccess, onError){
  cpap.$clinit_Proc();
  var thisProc;
  this.waitAutoProgress = autoprogress;
  thisProc = this;
  cggcc.get_0().scheduleFixedDelay(new cpap.Proc$5(this, thisProc, onSuccess, onError), this.waitMS);
  this.waitMS = jl.max_0(this.waitMS + 200, 5000);
}
;
_.getDname = function getDname_1(){
  return this.dname;
}
;
_.getSession = function getSession_0(){
  return this.privateSession;
}
;
_.setFinished = function setFinished(finished){
  this.isFinished = finished;
}
;
_.setLastMessageType = function setLastMessageType(type_0){
  this.lastMessageType = (cpac.$clinit_PriCommon$PriMessageType() , cpac.Ok);
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_0('warning', type_0))
    this.lastMessageType = (cpac.$clinit_PriCommon$PriMessageType() , cpac.OkCancel);
}
;
_.setLastOperation = function setLastOperation(operation){
  this.lastOperation = operation;
}
;
_.setLastResponse = function setLastResponse(response){
  this.lastResponse = response;
}
;
_.setSession = function setSession_0(value_0){
  this.privateSession = value_0;
}
;
_.setSpreadsheet = function setSpreadsheet(spreadsheet){
  this.spreadsheet = spreadsheet;
}
;
_.MsgCounter = 0;
_.SearchCursor = {l:0, m:0, h:0};
_.SearchStart = {l:0, m:0, h:0};
_.errCount = 0;
_.isFinished = false;
_.isOnServer = false;
_.spreadsheet = 0;
_.waitAutoProgress = false;
_.waitMS = 0;
cggl.Lcom_priority_app_proc_Proc_2_classLit = createForClass('com.priority.app.proc', 'Proc', 92, cggl.Ljava_lang_Object_2_classLit);
cpap.$clinit_Proc$1 = function $clinit_Proc$1(){
  cpap.$clinit_Proc$1 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$1 = function Proc$1(this$0, $anonymous0, val$onSuccess, val$onError, val$thisProc){
  cpap.$clinit_Proc$1();
  this.this$01 = this$0;
  this.val$onSuccess3 = val$onSuccess;
  this.val$onError4 = val$onError;
  this.val$thisProc5 = val$thisProc;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_143();
}
;
defineClass(197, 6, $intern_0, cpap.Proc$1);
_.$init_143 = function $init_143(){
}
;
_.OnPriError = function OnPriError_19(error, isOnServer){
  cpap.InvokeError_0(this.val$thisProc5, error, isOnServer, this.val$onError4);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_19(response){
  var e, jo;
  try {
    jo = cggjc.parseStrict(response);
    this.this$01.ProcStep(jo, 'ProcStart', false, this.val$onSuccess3, this.val$onError4);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpap.InvokeError_0(this.val$thisProc5, e.getMessage(), false, this.val$onError4);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_proc_Proc$1_2_classLit = createForClass('com.priority.app.proc', 'Proc/1', 197, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_Proc$2 = function $clinit_Proc$2(){
  cpap.$clinit_Proc$2 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$2 = function Proc$2(this$0, $anonymous0, val$onSuccess, val$onError, val$thisProc){
  cpap.$clinit_Proc$2();
  this.this$01 = this$0;
  this.val$onSuccess3 = val$onSuccess;
  this.val$onError4 = val$onError;
  this.val$thisProc5 = val$thisProc;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_144();
}
;
defineClass(198, 6, $intern_0, cpap.Proc$2);
_.$init_144 = function $init_144(){
}
;
_.OnPriError = function OnPriError_20(error, isOnServer){
  cpap.InvokeError_0(this.val$thisProc5, error, isOnServer, this.val$onError4);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_20(response){
  var e, jo;
  try {
    jo = cggjc.parseStrict(response);
    this.this$01.ProcStep(jo, 'ProcStartActivate', false, this.val$onSuccess3, this.val$onError4);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      cpap.InvokeError_0(this.val$thisProc5, e.getMessage(), false, this.val$onError4);
    }
     else 
      throw unwrap_5($e0);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_proc_Proc$2_2_classLit = createForClass('com.priority.app.proc', 'Proc/2', 198, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_Proc$3 = function $clinit_Proc$3(){
  cpap.$clinit_Proc$3 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$3 = function Proc$3(this$0, $anonymous0, val$proc, val$onSuccess, val$onError){
  cpap.$clinit_Proc$3();
  this.this$01 = this$0;
  this.val$proc3 = val$proc;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_145();
}
;
defineClass(199, 6, $intern_0, cpap.Proc$3);
_.$init_145 = function $init_145(){
}
;
_.OnPriError = function OnPriError_21(error, isOnServer){
  cpap.InvokeError_0(this.val$proc3, error, isOnServer, this.val$onError5);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_21(response){
  var jo, search;
  jo = cggjc.parseStrict(response);
  search = this.this$01.RefreshSearch(jo);
  if (isNotNull(search)) {
    cpap.InvokeSearch(this.val$proc3, search.getJavaScriptObject(), this.val$onSuccess4);
  }
   else {
    cpap.InvokeError_0(this.val$proc3, 'Error in choose/search', this.this$01.isOnServer, this.val$onError5);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_proc_Proc$3_2_classLit = createForClass('com.priority.app.proc', 'Proc/3', 199, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_Proc$4 = function $clinit_Proc$4(){
  cpap.$clinit_Proc$4 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$4 = function Proc$4(this$0, $anonymous0, val$proc, val$onSuccess, val$fieldId, val$value, val$json, val$onError){
  cpap.$clinit_Proc$4();
  this.this$01 = this$0;
  this.val$proc3 = val$proc;
  this.val$onSuccess4 = val$onSuccess;
  this.val$fieldId5 = val$fieldId;
  this.val$value6 = val$value;
  this.val$json7 = val$json;
  this.val$onError8 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_146();
}
;
defineClass(200, 6, $intern_0, cpap.Proc$4);
_.$init_146 = function $init_146(){
}
;
_.OnPriError = function OnPriError_22(error, isOnServer){
  cpap.InvokeError_0(this.val$proc3, error, isOnServer, this.val$onError8);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_22(response){
  var choose, choosearr, chooselines, jo, pa, pr;
  chooselines = null;
  choose = null;
  jo = cggjc.parseStrict(response);
  pa = jo.get_1('Procedure');
  pr = pa.get_0(0);
  choosearr = pr.get_1('Choose');
  if (isNotNull(choosearr)) {
    choose = choosearr.get_0(0);
    if (isNotNull(choose)) {
      chooselines = choose.get_1('ChooseLine');
    }
  }
  if (isNotNull(chooselines) && chooselines.size_1() > 0) {
    cpap.InvokeChoose(this.val$proc3, choose.getJavaScriptObject(), this.val$onSuccess4);
  }
   else {
    this.this$01.SearchLast.clear_0();
    this.this$01.GetConnection().ProcParamSearchMobAsync(this.this$01.getSession(), fromInt(this.val$fieldId5), fromInt((cpac.$clinit_SearchActions() , cpac.Start).getValue_0()), {l:0, m:0, h:0}, {l:0, m:0, h:0}, '', this.val$value6, this.val$json7, new cpap.Proc$4$1(this, this.this$01.GetConnection(), this.val$proc3, this.val$onSuccess4, this.val$onError8));
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
_.val$fieldId5 = 0;
cggl.Lcom_priority_app_proc_Proc$4_2_classLit = createForClass('com.priority.app.proc', 'Proc/4', 200, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_Proc$4$1 = function $clinit_Proc$4$1(){
  cpap.$clinit_Proc$4$1 = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$4$1 = function Proc$4$1(this$1, $anonymous0, val$proc, val$onSuccess, val$onError){
  cpap.$clinit_Proc$4$1();
  this.this$11 = this$1;
  this.val$proc3 = val$proc;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  cpac.WCFResponse.call(this, $anonymous0);
  this.$init_147();
}
;
defineClass(201, 6, $intern_0, cpap.Proc$4$1);
_.$init_147 = function $init_147(){
}
;
_.OnPriError = function OnPriError_23(error, isOnServer){
  cpap.InvokeError_0(this.val$proc3, error, isOnServer, this.val$onError5);
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_23(response){
  var jo, search;
  jo = cggjc.parseStrict(response);
  search = this.this$11.this$01.RefreshSearch(jo);
  if (isNotNull(search)) {
    cpap.InvokeSearch(this.val$proc3, search.getJavaScriptObject(), this.val$onSuccess4);
  }
   else {
    cpap.InvokeError_0(this.val$proc3, 'Error in choose/search', this.this$11.this$01.isOnServer, this.val$onError5);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_proc_Proc$4$1_2_classLit = createForClass('com.priority.app.proc', 'Proc/4/1', 201, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_Proc$5 = function $clinit_Proc$5(){
  cpap.$clinit_Proc$5 = emptyMethod;
  jl.$clinit_Object();
}
;
cpap.Proc$5 = function Proc$5(this$0, val$thisProc, val$onSuccess, val$onError){
  cpap.$clinit_Proc$5();
  this.this$01 = this$0;
  this.val$thisProc2 = val$thisProc;
  this.val$onSuccess3 = val$onSuccess;
  this.val$onError4 = val$onError;
  Object_0.call(this);
  this.$init_148();
}
;
defineClass(202, 1, $intern_0, cpap.Proc$5);
_.$init_148 = function $init_148(){
}
;
_.execute = function execute_4(){
  if (this.this$01.waitAutoProgress) {
    this.this$01.GetConnection().ProcCheckExecutionMobAsync(this.this$01.getSession(), new cpap.Proc$WaitProcessResponse(this.this$01.GetConnection(), this.val$thisProc2, 'ProcCheckExecution', this.val$onSuccess3, this.val$onError4));
  }
   else {
    this.this$01.GetConnection().ProcContinueMobAsync(this.this$01.getSession(), new cpap.Proc$WaitProcessResponse(this.this$01.GetConnection(), this.val$thisProc2, 'ProcContinue', this.val$onSuccess3, this.val$onError4));
  }
  return false;
}
;
cggl.Lcom_priority_app_proc_Proc$5_2_classLit = createForClass('com.priority.app.proc', 'Proc/5', 202, cggl.Ljava_lang_Object_2_classLit);
cpap.$clinit_Proc$CommonResponse = function $clinit_Proc$CommonResponse(){
  cpap.$clinit_Proc$CommonResponse = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$CommonResponse = function Proc$CommonResponse(con, proc, operation, onSuccess, onError){
  cpap.$clinit_Proc$CommonResponse();
  cpac.WCFResponse.call(this, con);
  this.$init_149();
  this.proc_0 = proc;
  this.operation = operation;
  this.onSuccess = onSuccess;
  this.onError = onError;
}
;
defineClass(26, 6, $intern_0, cpap.Proc$CommonResponse);
_.$init_149 = function $init_149(){
}
;
_.OnPriError = function OnPriError_24(error, isOnServer){
  if (isNotNull(this.onError)) {
    cpap.InvokeError_0(this.proc_0, error, isOnServer, this.onError);
  }
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_24(response){
  var e, jo;
  if (isNotNull(this.onSuccess)) {
    try {
      jo = cggjc.parseStrict(response);
      this.proc_0.ProcStep(jo, this.operation, false, this.onSuccess, this.onError);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        cpap.InvokeError_0(this.proc_0, e.getMessage(), false, this.onError);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_proc_Proc$CommonResponse_2_classLit = createForClass('com.priority.app.proc', 'Proc/CommonResponse', 26, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_Proc$InputField = function $clinit_Proc$InputField(){
  cpap.$clinit_Proc$InputField = emptyMethod;
  jl.$clinit_Object();
}
;
cpap.Proc$InputField = function Proc$InputField(fieldId, columntype, zoomtype){
  cpap.$clinit_Proc$InputField();
  Object_0.call(this);
  this.$init_150();
  this.fieldId = fieldId;
  this.columntype_0 = columntype;
  this.zoomtype = zoomtype;
}
;
defineClass(196, 1, $intern_0, cpap.Proc$InputField);
_.$init_150 = function $init_150(){
}
;
_.fieldId = 0;
cggl.Lcom_priority_app_proc_Proc$InputField_2_classLit = createForClass('com.priority.app.proc', 'Proc/InputField', 196, cggl.Ljava_lang_Object_2_classLit);
cpap.$clinit_Proc$Link = function $clinit_Proc$Link(){
  cpap.$clinit_Proc$Link = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cpap.$getLink = function $getLink(this$static){
  cpap.$clinit_Proc$Link();
  return this$static.link;
}
;
cpap.$getLinkid = function $getLinkid(this$static){
  cpap.$clinit_Proc$Link();
  return this$static.linkid;
}
;
cpap.$getTable = function $getTable(this$static){
  cpap.$clinit_Proc$Link();
  return this$static.table;
}
;
cpap.$clinit_Proc$PrintFormat = function $clinit_Proc$PrintFormat(){
  cpap.$clinit_Proc$PrintFormat = emptyMethod;
}
;
defineClass(377, 1, $intern_0);
cpap.$clinit_Proc$WaitProcessResponse = function $clinit_Proc$WaitProcessResponse(){
  cpap.$clinit_Proc$WaitProcessResponse = emptyMethod;
  cpac.$clinit_WCFResponse();
}
;
cpap.Proc$WaitProcessResponse = function Proc$WaitProcessResponse(con, proc, operation, onSuccess, onError){
  cpap.$clinit_Proc$WaitProcessResponse();
  cpac.WCFResponse.call(this, con);
  this.$init_151();
  this.proc_0 = proc;
  this.operation = operation;
  this.onSuccess = onSuccess;
  this.onError = onError;
}
;
defineClass(93, 6, $intern_0, cpap.Proc$WaitProcessResponse);
_.$init_151 = function $init_151(){
}
;
_.OnPriError = function OnPriError_25(error, isOnServer){
  if (this.proc_0.errCount >= 100) {
    this.proc_0.CancelProcedure_0(true, this.proc_0.waitAutoProgress, this.onSuccess, this.onError);
  }
   else {
    this.proc_0.errCount++;
    this.proc_0.WaitProcess(this.proc_0.waitAutoProgress, this.onSuccess, this.onError);
  }
  getClassPrototype(6).OnPriError.call(this, error, isOnServer);
}
;
_.OnPriResponse = function OnPriResponse_25(response){
  var jo;
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_0('ProcContinue', this.operation)) {
    jo = cggjc.parseStrict(response);
    this.proc_0.WaitContinue(jo, this.onSuccess, this.onError, this.operation);
  }
  getClassPrototype(6).OnPriResponse.call(this, response);
}
;
cggl.Lcom_priority_app_proc_Proc$WaitProcessResponse_2_classLit = createForClass('com.priority.app.proc', 'Proc/WaitProcessResponse', 93, cggl.Lcom_priority_app_common_WCFResponse_2_classLit);
cpap.$clinit_ProcAPI = function $clinit_ProcAPI(){
  cpap.$clinit_ProcAPI = emptyMethod;
  jl.$clinit_Object();
}
;
cpap.GetProc_0 = function GetProc_0(thisProc){
  cpap.$clinit_ProcAPI();
  var proc = thisProc.proc_0;
  if (proc)
    return proc;
  proc = {};
  proc.title = thisProc.etitle;
  proc.message = function(ok, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.ProcMessageHidden(ok, onSuccess_0, onError_0);
    else {
      return new Promise(function(onSuccess, onError){
        thisProc.ProcMessageHidden(ok, onSuccess, onError);
      }
      );
    }
  }
  ;
  proc.reportOptions = function(ok, selectedFormat, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.ReportOptions(ok, selectedFormat, onSuccess_0, onError_0);
    else {
      return new Promise(function(onSuccess, onError){
        thisProc.ReportOptions(ok, selectedFormat, onSuccess, onError);
      }
      );
    }
  }
  ;
  proc.documentOptions = function(ok, selectedFormat, pdf, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.DocumentOptions(ok, selectedFormat, pdf, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.DocumentOptions(ok, selectedFormat, pdf, onSuccess, onError);
      }
      );
  }
  ;
  proc.inputFields = function(ok, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.InputFields(ok, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.InputFields(ok, data_0, onSuccess, onError);
      }
      );
  }
  ;
  proc.inputOptions = function(ok, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.InputChoose(ok, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.InputChoose(ok, data_0, onSuccess, onError);
      }
      );
  }
  ;
  proc.inputHelp = function(ok, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.InputHelp(ok, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.InputHelp(ok, onSuccess, onError);
      }
      );
  }
  ;
  proc.continueProc = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.ProcContinue(onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.ProcContinue(onSuccess, onError);
      }
      );
  }
  ;
  proc.cancel = function(onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.CancelProcedure(onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.CancelProcedure(onSuccess, onError);
      }
      );
  }
  ;
  proc.choose = function(fieldId, value_0, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.OpenChoose(fieldId, value_0, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.OpenChoose(fieldId, value_0, data_0, onSuccess, onError);
      }
      );
  }
  ;
  proc.searchAction = function(fieldId, value_0, action, data_0, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0)
      thisProc.SearchAction(fieldId, value_0, action, data_0, onSuccess_0, onError_0);
    else 
      return new Promise(function(onSuccess, onError){
        thisProc.SearchAction(fieldId, value_0, action, data_0, onSuccess, onError);
      }
      );
  }
  ;
  thisProc.proc_0 = proc;
  return proc;
}
;
cpap.InvokeChoose = function InvokeChoose(thisProc, jo, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'Choose';
  delete jo.chooseid;
  delete jo.sortby;
  ret.Choose = jo;
  onSuccess(ret);
}
;
cpap.InvokeDisplayUrl = function InvokeDisplayUrl(thisProc, urls, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'displayUrl';
  ret.Urls = urls;
  onSuccess(ret);
}
;
cpap.InvokeDocumentOptions = function InvokeDocumentOptions(thisProc, wantsPdf, formats, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'documentOptions';
  ret.formats = formats;
  ret.pdf = wantsPdf?1:0;
  onSuccess(ret);
}
;
cpap.InvokeEnd = function InvokeEnd(thisProc, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'end';
  onSuccess(ret);
}
;
cpap.InvokeError_0 = function InvokeError_0(thisProc, message, isOnServer, onError){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = isOnServer?'ServerBusy':'Error';
  ret.text = message;
  onError(ret);
}
;
cpap.InvokeInput = function InvokeInput(thisProc, inputObj, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  var type_0 = 'inputHelp';
  if (inputObj.EditFields)
    type_0 = 'inputFields';
  else if (inputObj.ChooseFields)
    type_0 = 'inputOptions';
  ret.type = type_0;
  ret.input = inputObj;
  onSuccess(ret);
}
;
cpap.InvokeMessage = function InvokeMessage(thisProc, message, messageType, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'message';
  ret.message = message;
  ret.messagetype = messageType;
  onSuccess(ret);
}
;
cpap.InvokeNotSupported = function InvokeNotSupported(thisProc, step, onError){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'NotSupported';
  ret.text = 'step ' + step + ' is not supported';
  onError(ret);
}
;
cpap.InvokeProgress = function InvokeProgress(thisProc, progress, onProgress){
  cpap.$clinit_ProcAPI();
  if (onProgress)
    onProgress(thisProc.GetProc(), progress);
}
;
cpap.InvokeReportOptions = function InvokeReportOptions(thisProc, showExecl, excelSelected, formats, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'reportOptions';
  ret.formats = formats;
  onSuccess(ret);
}
;
cpap.InvokeSearch = function InvokeSearch(thisProc, jo, onSuccess){
  cpap.$clinit_ProcAPI();
  var ret = {};
  ret.proc = thisProc.GetProc();
  ret.type = 'Search';
  delete jo.stack_last;
  delete jo.stack_cursor;
  delete jo.stack_start;
  delete jo.start;
  ret.Search = jo;
  onSuccess(ret);
}
;
cpap.ProcStart_0 = function ProcStart_0(ename, etitle, type_0, progressFunc, dname, onSuccess, onError){
  var p;
  p = new cpap.Proc;
  p.progressFunc = progressFunc;
  p.dname = dname;
  p.ProcStart(ename, etitle, type_0, onSuccess, onError);
}
;
cpap.ProcStartActivate_0 = function ProcStartActivate_0(ename, type_0, link_0, progressFunc, dname, onSuccess, onError){
  cpap.$clinit_ProcAPI();
  var p;
  p = new cpap.Proc;
  p.progressFunc = progressFunc;
  p.dname = dname;
  p.ProcStartActivate(ename, type_0, link_0, onSuccess, onError);
}
;
cpap.publishAPIfuncProc = function publishAPIfuncProc(){
  cpap.$clinit_ProcAPI();
  $wnd.procStart = function(ename, etitle, type_0, onProgress, dname, onSuccess_0, onError_0){
    if (onSuccess_0 || onError_0) {
      cpap.ProcStart_0(ename, etitle, type_0, onProgress, dname, onSuccess_0, onError_0);
    }
     else 
      return new Promise(function(onSuccess, onError){
        cpap.ProcStart_0(ename, etitle, type_0, onProgress, dname, onSuccess, onError);
      }
      );
  }
  ;
}
;
defineClass(348, 1, $intern_0);
jl.$clinit_AbstractStringBuilder = function $clinit_AbstractStringBuilder(){
  jl.$clinit_AbstractStringBuilder = emptyMethod;
  jl.$clinit_Object();
}
;
jl.AbstractStringBuilder = function AbstractStringBuilder(string){
  jl.$clinit_AbstractStringBuilder();
  Object_0.call(this);
  this.$init_152();
  this.string = string;
}
;
defineClass(66, 1, $intern_0);
_.$init_152 = function $init_152(){
}
;
_.charAt = function charAt(index_0){
  return jl.charAt_I_C__devirtual$_0(this.string, index_0);
}
;
_.indexOf_0 = function indexOf(x_0){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this.string, x_0);
}
;
_.indexOf_1 = function indexOf_0(x_0, start_0){
  return jl.indexOf_Ljava_lang_String_I_I__devirtual$(this.string, x_0, start_0);
}
;
_.lastIndexOf_0 = function lastIndexOf(s){
  return jl.lastIndexOf_Ljava_lang_String__I__devirtual$(this.string, s);
}
;
_.lastIndexOf_1 = function lastIndexOf_0(s, start_0){
  return jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$(this.string, s, start_0);
}
;
_.length_0 = function length_1(){
  return jl.length__I__devirtual$_0(this.string);
}
;
_.substring_0 = function substring(begin){
  return jl.substring_I_Ljava_lang_String___devirtual$(this.string, begin);
}
;
_.substring_1 = function substring_0(begin, end){
  return jl.substring_II_Ljava_lang_String___devirtual$(this.string, begin, end);
}
;
_.toString$ = function toString_12(){
  return this.string;
}
;
cggl.Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 66, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Appendable = function $clinit_Appendable(){
  jl.$clinit_Appendable = emptyMethod;
}
;
jl.$clinit_ArithmeticException = function $clinit_ArithmeticException(){
  jl.$clinit_ArithmeticException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ArithmeticException = function ArithmeticException(explanation){
  jl.$clinit_ArithmeticException();
  jl.RuntimeException_0.call(this, explanation);
  this.$init_153();
}
;
defineClass(127, 8, $intern_5, jl.ArithmeticException);
_.$init_153 = function $init_153(){
}
;
cggl.Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 127, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_ArrayStoreException = function $clinit_ArrayStoreException(){
  jl.$clinit_ArrayStoreException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ArrayStoreException = function ArrayStoreException(){
  jl.$clinit_ArrayStoreException();
  jl.RuntimeException.call(this);
  this.$init_154();
}
;
defineClass(56, 8, $intern_5, jl.ArrayStoreException);
_.$init_154 = function $init_154(){
}
;
cggl.Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 56, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_AutoCloseable = function $clinit_AutoCloseable(){
  jl.$clinit_AutoCloseable = emptyMethod;
}
;
jl.$clinit_Boolean = function $clinit_Boolean(){
  jl.$clinit_Boolean = emptyMethod;
  jl.$clinit_Object();
  jl.FALSE_0 = new jl.Boolean_0(false);
  jl.TRUE_0 = new jl.Boolean_0(true);
  jl.TYPE = cggl.Z_classLit;
}
;
jl.Boolean_0 = function Boolean_0(value_0){
  Object_0.call(this);
  this.$init_155();
  this.value_0 = value_0;
}
;
jl.toString_14 = function toString_14(x_0){
  jl.$clinit_Boolean();
  return jl.valueOf_24(x_0);
}
;
jl.valueOf_10 = function valueOf_10(b){
  jl.$clinit_Boolean();
  return b?jl.TRUE_0:jl.FALSE_0;
}
;
defineClass(57, 1, {3:1, 57:1, 18:1, 1:1}, jl.Boolean_0);
_.$init_155 = function $init_155(){
}
;
_.booleanValue = function booleanValue_0(){
  return this.value_0;
}
;
_.equals$ = function equals_6(o){
  return instanceOf(o, 57) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_13(){
  return jl.toString_14(this.value_0);
}
;
_.value_0 = false;
cggl.Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 57, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Number = function $clinit_Number(){
  jl.$clinit_Number = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Number_0 = function Number_0(){
  jl.$clinit_Number();
  Object_0.call(this);
  this.$init_156();
}
;
defineClass(41, 1, $intern_7);
_.$init_156 = function $init_156(){
}
;
_.byteValue = function byteValue(){
  return narrow_byte(this.intValue_0());
}
;
_.shortValue = function shortValue(){
  return narrow_short(this.intValue_0());
}
;
cggl.Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 41, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Byte = function $clinit_Byte(){
  jl.$clinit_Byte = emptyMethod;
  jl.$clinit_Number();
  jl.MIN_VALUE_0 = narrow_byte(128);
  jl.MAX_VALUE_0 = narrow_byte(127);
  jl.TYPE_0 = cggl.B_classLit;
}
;
jl.Byte = function Byte(value_0){
  jl.Number_0.call(this);
  this.$init_157();
  this.value_0 = value_0;
}
;
jl.hashCode_9 = function hashCode_9(b){
  return b;
}
;
jl.toString_16 = function toString_16(b){
  return jl.valueOf_21(b);
}
;
jl.valueOf_11 = function valueOf_11(b){
  var rebase, result;
  rebase = b + 128;
  result = (jl.$clinit_Byte$BoxedValues() , jl.boxedValues_0)[rebase];
  if (isNull(result)) {
    result = (jl.$clinit_Byte$BoxedValues() , jl.boxedValues_0)[rebase] = new jl.Byte(b);
  }
  return result;
}
;
defineClass(58, 41, {3:1, 58:1, 18:1, 1:1}, jl.Byte);
_.$init_157 = function $init_157(){
}
;
_.byteValue = function byteValue_0(){
  return this.value_0;
}
;
_.doubleValue = function doubleValue_0(){
  return this.value_0;
}
;
_.equals$ = function equals_7(o){
  return instanceOf(o, 58) && o.value_0 == this.value_0;
}
;
_.floatValue = function floatValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_8(){
  return jl.hashCode_9(this.value_0);
}
;
_.intValue_0 = function intValue(){
  return this.value_0;
}
;
_.longValue = function longValue(){
  return fromInt(this.value_0);
}
;
_.shortValue = function shortValue_0(){
  return this.value_0;
}
;
_.toString$ = function toString_15(){
  return jl.toString_16(this.value_0);
}
;
_.value_0 = 0;
jl.MAX_VALUE_0 = 0;
jl.MIN_VALUE_0 = 0;
jl.SIZE = 8;
cggl.Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 58, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Byte$BoxedValues = function $clinit_Byte$BoxedValues(){
  jl.$clinit_Byte$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_0 = initDim(cggl.Ljava_lang_Byte_2_classLit, $intern_2, 58, 256, 0, 1);
}
;
defineClass(310, 1, $intern_0);
jl.$clinit_Character = function $clinit_Character(){
  jl.$clinit_Character = emptyMethod;
  jl.$clinit_Object();
  jl.TYPE_1 = cggl.Ljava_lang_Character_2_classLit;
}
;
function Character(value_0){
  Object_0.call(this);
  this.$init_158();
  this.value_0 = value_0;
}

function getHighSurrogate(codePoint){
  jl.$clinit_Character();
  return narrow_char(55296 + (codePoint - $intern_3 >> 10 & 1023));
}

function getLowSurrogate(codePoint){
  jl.$clinit_Character();
  return narrow_char(56320 + (codePoint - $intern_3 & 1023));
}

jl.hashCode_11 = function hashCode_11(c){
  return c;
}
;
function valueOf_12(c){
  var result;
  if (c < 128) {
    result = (jl.$clinit_Character$BoxedValues() , jl.boxedValues_1)[c];
    if (isNull(result)) {
      result = (jl.$clinit_Character$BoxedValues() , jl.boxedValues_1)[c] = new Character(c);
    }
    return result;
  }
  return new Character(c);
}

defineClass(46, 1, {3:1, 46:1, 18:1, 1:1}, Character);
_.$init_158 = function $init_158(){
}
;
_.charValue = function charValue(){
  return this.value_0;
}
;
_.equals$ = function equals_8(o){
  return instanceOf(o, 46) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_10(){
  return jl.hashCode_11(this.value_0);
}
;
_.toString$ = function toString_17(){
  return jl.valueOf_18(this.value_0);
}
;
_.value_0 = 0;
jl.MAX_CODE_POINT = 1114111;
jl.MAX_HIGH_SURROGATE = 56319;
jl.MAX_LOW_SURROGATE = 57343;
jl.MAX_RADIX = 36;
jl.MAX_SURROGATE = 57343;
jl.MAX_VALUE_1 = 65535;
jl.MIN_CODE_POINT = 0;
jl.MIN_HIGH_SURROGATE = 55296;
jl.MIN_LOW_SURROGATE = 56320;
jl.MIN_RADIX = 2;
jl.MIN_SUPPLEMENTARY_CODE_POINT = $intern_3;
jl.MIN_SURROGATE = 55296;
jl.MIN_VALUE_1 = 0;
jl.SIZE_0 = 16;
cggl.Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 46, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character$BoxedValues = function $clinit_Character$BoxedValues(){
  jl.$clinit_Character$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_1 = initDim(cggl.Ljava_lang_Character_2_classLit, $intern_2, 46, 128, 0, 1);
}
;
defineClass(314, 1, $intern_0);
jl.$clinit_Character$CharSequenceAdapter = function $clinit_Character$CharSequenceAdapter(){
  jl.$clinit_Character$CharSequenceAdapter = emptyMethod;
}
;
defineClass(313, 1, $intern_16);
jl.$clinit_ClassCastException = function $clinit_ClassCastException(){
  jl.$clinit_ClassCastException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ClassCastException = function ClassCastException(){
  jl.$clinit_ClassCastException();
  jl.RuntimeException.call(this);
  this.$init_160();
}
;
defineClass(40, 8, $intern_5, jl.ClassCastException);
_.$init_160 = function $init_160(){
}
;
cggl.Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 40, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Cloneable = function $clinit_Cloneable(){
  jl.$clinit_Cloneable = emptyMethod;
}
;
jl.$clinit_Double = function $clinit_Double(){
  jl.$clinit_Double = emptyMethod;
  jl.$clinit_Number();
  jl.MIN_EXPONENT = -1022;
  jl.NaN_0 = 0 / 0;
  jl.NEGATIVE_INFINITY = -1 / 0;
  jl.POSITIVE_INFINITY = 1 / 0;
  jl.TYPE_2 = cggl.D_classLit;
  jl.powers = initValues(getClassLiteralForArray(cggl.D_classLit, 1), $intern_7, 0, 7, [$intern_17, $intern_18, $intern_19, $intern_20, $intern_11, $intern_3, 256, 16, 4, 2]);
  jl.invPowers = initValues(getClassLiteralForArray(cggl.D_classLit, 1), $intern_7, 0, 7, [$intern_21, $intern_22, $intern_23, $intern_24, $intern_25, $intern_26, 0.00390625, 0.0625, 0.25, 0.5]);
}
;
jl.Double = function Double(value_0){
  jl.Number_0.call(this);
  this.$init_161();
  this.value_0 = value_0;
}
;
jl.hashCode_13 = function hashCode_13(d){
  return round_int(d);
}
;
jl.isNaN_0 = function isNaN_0(x_0){
  jl.$clinit_Double();
  return isNaN(x_0);
}
;
jl.toString_20 = function toString_20(b){
  return jl.valueOf_19(b);
}
;
jl.valueOf_13 = function valueOf_13(d){
  jl.$clinit_Double();
  return new jl.Double(d);
}
;
defineClass(64, 41, {3:1, 18:1, 64:1, 1:1}, jl.Double);
_.$init_161 = function $init_161(){
}
;
_.byteValue = function byteValue_1(){
  return round_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_1(){
  return this.value_0;
}
;
_.equals$ = function equals_9(o){
  return instanceOf(o, 64) && o.value_0 == this.value_0;
}
;
_.floatValue = function floatValue_0(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_12(){
  return jl.hashCode_13(this.value_0);
}
;
_.intValue_0 = function intValue_0(){
  return round_int(this.value_0);
}
;
_.longValue = function longValue_0(){
  return fromDouble(this.value_0);
}
;
_.shortValue = function shortValue_1(){
  return round_short(this.value_0);
}
;
_.toString$ = function toString_19(){
  return jl.toString_20(this.value_0);
}
;
_.value_0 = 0;
jl.MAX_EXPONENT = 1023;
jl.MAX_VALUE_2 = 1.7976931348623157E308;
jl.MIN_EXPONENT = 0;
jl.MIN_NORMAL = $intern_27;
jl.MIN_VALUE_2 = 4.9E-324;
jl.NEGATIVE_INFINITY = 0;
jl.NaN_0 = 0;
jl.POSITIVE_INFINITY = 0;
jl.POWER_1 = 2;
jl.POWER_128 = $intern_19;
jl.POWER_16 = $intern_3;
jl.POWER_2 = 4;
jl.POWER_20 = 1048576;
jl.POWER_256 = $intern_18;
jl.POWER_31 = 2147483648;
jl.POWER_32 = $intern_11;
jl.POWER_4 = 16;
jl.POWER_512 = $intern_17;
jl.POWER_52 = 4503599627370496;
jl.POWER_64 = $intern_20;
jl.POWER_8 = 256;
jl.POWER_MINUS_1 = 0.5;
jl.POWER_MINUS_1022 = $intern_27;
jl.POWER_MINUS_128 = $intern_23;
jl.POWER_MINUS_16 = $intern_26;
jl.POWER_MINUS_2 = 0.25;
jl.POWER_MINUS_20 = 9.5367431640625E-7;
jl.POWER_MINUS_256 = $intern_22;
jl.POWER_MINUS_32 = $intern_25;
jl.POWER_MINUS_4 = 0.0625;
jl.POWER_MINUS_512 = $intern_21;
jl.POWER_MINUS_52 = 2.220446049250313E-16;
jl.POWER_MINUS_64 = $intern_24;
jl.POWER_MINUS_8 = 0.00390625;
jl.SIZE_1 = 64;
cggl.Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 64, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Float = function $clinit_Float(){
  jl.$clinit_Float = emptyMethod;
  jl.$clinit_Number();
  jl.MIN_EXPONENT_0 = -126;
  jl.NaN_1 = 0 / 0;
  jl.NEGATIVE_INFINITY_0 = -1 / 0;
  jl.POSITIVE_INFINITY_0 = 1 / 0;
  jl.TYPE_3 = cggl.F_classLit;
}
;
jl.Float = function Float(value_0){
  jl.Number_0.call(this);
  this.$init_162();
  this.value_0 = value_0;
}
;
jl.hashCode_15 = function hashCode_15(f){
  return round_int(f);
}
;
jl.toString_22 = function toString_22(b){
  return jl.valueOf_20(b);
}
;
jl.valueOf_14 = function valueOf_14(f){
  return new jl.Float(f);
}
;
defineClass(65, 41, {3:1, 18:1, 65:1, 1:1}, jl.Float);
_.$init_162 = function $init_162(){
}
;
_.byteValue = function byteValue_2(){
  return round_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_2(){
  return this.value_0;
}
;
_.equals$ = function equals_10(o){
  return instanceOf(o, 65) && o.value_0 == this.value_0;
}
;
_.floatValue = function floatValue_1(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_14(){
  return jl.hashCode_15(this.value_0);
}
;
_.intValue_0 = function intValue_1(){
  return round_int(this.value_0);
}
;
_.longValue = function longValue_1(){
  return fromDouble(this.value_0);
}
;
_.shortValue = function shortValue_2(){
  return round_short(this.value_0);
}
;
_.toString$ = function toString_21(){
  return jl.toString_22(this.value_0);
}
;
_.value_0 = 0;
jl.MAX_EXPONENT_0 = 127;
jl.MAX_VALUE_3 = 3.4028234663852886E38;
jl.MIN_EXPONENT_0 = 0;
jl.MIN_NORMAL_0 = 1.1754943508222875E-38;
jl.MIN_VALUE_3 = 1.401298464324817E-45;
jl.NEGATIVE_INFINITY_0 = 0;
jl.NaN_1 = 0;
jl.POSITIVE_INFINITY_0 = 0;
jl.POWER_31_INT = {l:0, m:512, h:0};
jl.POWER_32_INT = {l:0, m:1024, h:0};
jl.SIZE_2 = 32;
cggl.Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 65, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_IllegalArgumentException = function $clinit_IllegalArgumentException(){
  jl.$clinit_IllegalArgumentException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IllegalArgumentException = function IllegalArgumentException(){
  jl.$clinit_IllegalArgumentException();
  jl.RuntimeException.call(this);
  this.$init_163();
}
;
jl.IllegalArgumentException_0 = function IllegalArgumentException_0(message){
  jl.$clinit_IllegalArgumentException();
  jl.RuntimeException_0.call(this, message);
  this.$init_163();
}
;
defineClass(30, 8, $intern_5, jl.IllegalArgumentException, jl.IllegalArgumentException_0);
_.$init_163 = function $init_163(){
}
;
cggl.Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 30, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_IllegalStateException = function $clinit_IllegalStateException(){
  jl.$clinit_IllegalStateException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IllegalStateException = function IllegalStateException(){
  jl.$clinit_IllegalStateException();
  jl.RuntimeException.call(this);
  this.$init_164();
}
;
jl.IllegalStateException_0 = function IllegalStateException_0(s){
  jl.$clinit_IllegalStateException();
  jl.RuntimeException_0.call(this, s);
  this.$init_164();
}
;
defineClass(72, 8, $intern_5, jl.IllegalStateException, jl.IllegalStateException_0);
_.$init_164 = function $init_164(){
}
;
cggl.Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 72, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_IndexOutOfBoundsException = function $clinit_IndexOutOfBoundsException(){
  jl.$clinit_IndexOutOfBoundsException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IndexOutOfBoundsException = function IndexOutOfBoundsException(message){
  jl.$clinit_IndexOutOfBoundsException();
  jl.RuntimeException_0.call(this, message);
  this.$init_165();
}
;
defineClass(43, 8, $intern_5, jl.IndexOutOfBoundsException);
_.$init_165 = function $init_165(){
}
;
cggl.Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 43, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Integer = function $clinit_Integer(){
  jl.$clinit_Integer = emptyMethod;
  jl.$clinit_Number();
  jl.TYPE_4 = cggl.I_classLit;
}
;
jl.Integer = function Integer(value_0){
  jl.Number_0.call(this);
  this.$init_166();
  this.value_0 = value_0;
}
;
jl.hashCode_17 = function hashCode_17(i_0){
  return i_0;
}
;
function numberOfLeadingZeros_0(i_0){
  jl.$clinit_Integer();
  var m, n, y_0;
  if (i_0 < 0) {
    return 0;
  }
   else if (i_0 == 0) {
    return 32;
  }
   else {
    y_0 = -(i_0 >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i_0 = i_0 >> m;
    y_0 = i_0 - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i_0 <<= m;
    y_0 = i_0 - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i_0 <<= m;
    y_0 = i_0 - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i_0 <<= m;
    y_0 = i_0 >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i_0){
  jl.$clinit_Integer();
  var r, rtn;
  if (i_0 == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i_0) == 0; r <<= 1) {
      rtn++;
    }
    return rtn;
  }
}

function toHexString(value_0){
  jl.$clinit_Integer();
  return jl.toUnsignedRadixString(value_0, 16);
}

jl.toString_24 = function toString_24(value_0){
  jl.$clinit_Integer();
  return jl.valueOf_21(value_0);
}
;
jl.toUnsignedRadixString = function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}
;
jl.valueOf_15 = function valueOf_15(i_0){
  jl.$clinit_Integer();
  var rebase, result;
  if (i_0 > -129 && i_0 < 128) {
    rebase = i_0 + 128;
    result = (jl.$clinit_Integer$BoxedValues() , jl.boxedValues_2)[rebase];
    if (isNull(result)) {
      result = (jl.$clinit_Integer$BoxedValues() , jl.boxedValues_2)[rebase] = new jl.Integer(i_0);
    }
    return result;
  }
  return new jl.Integer(i_0);
}
;
defineClass(47, 41, {3:1, 18:1, 47:1, 1:1}, jl.Integer);
_.$init_166 = function $init_166(){
}
;
_.byteValue = function byteValue_3(){
  return narrow_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_3(){
  return this.value_0;
}
;
_.equals$ = function equals_11(o){
  return instanceOf(o, 47) && o.value_0 == this.value_0;
}
;
_.floatValue = function floatValue_2(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_16(){
  return jl.hashCode_17(this.value_0);
}
;
_.intValue_0 = function intValue_2(){
  return this.value_0;
}
;
_.longValue = function longValue_2(){
  return fromInt(this.value_0);
}
;
_.shortValue = function shortValue_3(){
  return narrow_short(this.value_0);
}
;
_.toString$ = function toString_23(){
  return jl.toString_24(this.value_0);
}
;
_.value_0 = 0;
jl.MAX_VALUE_4 = $intern_1;
jl.MIN_VALUE_4 = -2147483648;
jl.SIZE_3 = 32;
cggl.Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 47, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Integer$BoxedValues = function $clinit_Integer$BoxedValues(){
  jl.$clinit_Integer$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_2 = initDim(cggl.Ljava_lang_Integer_2_classLit, $intern_2, 47, 256, 0, 1);
}
;
defineClass(317, 1, $intern_0);
jl.$clinit_Integer$ReverseNibbles = function $clinit_Integer$ReverseNibbles(){
  jl.$clinit_Integer$ReverseNibbles = emptyMethod;
}
;
defineClass(318, 1, $intern_0);
jl.$clinit_Iterable = function $clinit_Iterable(){
  jl.$clinit_Iterable = emptyMethod;
}
;
jl.$clinit_Long = function $clinit_Long(){
  jl.$clinit_Long = emptyMethod;
  jl.$clinit_Number();
  jl.TYPE_5 = cggl.J_classLit;
}
;
jl.Long = function Long(value_0){
  jl.Number_0.call(this);
  this.$init_167();
  this.value_0 = value_0;
}
;
jl.hashCode_19 = function hashCode_19(l){
  return toInt(l);
}
;
jl.toString_26 = function toString_26(value_0){
  jl.$clinit_Long();
  return jl.valueOf_22(value_0);
}
;
jl.valueOf_16 = function valueOf_16(i_0){
  var rebase, result;
  if (gt(i_0, fromInt(-129)) && lt(i_0, {l:128, m:0, h:0})) {
    rebase = toInt(i_0) + 128;
    result = (jl.$clinit_Long$BoxedValues() , jl.boxedValues_3)[rebase];
    if (isNull(result)) {
      result = (jl.$clinit_Long$BoxedValues() , jl.boxedValues_3)[rebase] = new jl.Long(i_0);
    }
    return result;
  }
  return new jl.Long(i_0);
}
;
defineClass(48, 41, {3:1, 18:1, 48:1, 1:1}, jl.Long);
_.$init_167 = function $init_167(){
}
;
_.byteValue = function byteValue_4(){
  return narrow_byte(toInt(this.value_0));
}
;
_.doubleValue = function doubleValue_4(){
  return toDouble(this.value_0);
}
;
_.equals$ = function equals_12(o){
  return instanceOf(o, 48) && eq(o.value_0, this.value_0);
}
;
_.floatValue = function floatValue_3(){
  return toDouble(this.value_0);
}
;
_.hashCode$ = function hashCode_18(){
  return jl.hashCode_19(this.value_0);
}
;
_.intValue_0 = function intValue_3(){
  return toInt(this.value_0);
}
;
_.longValue = function longValue_3(){
  return this.value_0;
}
;
_.shortValue = function shortValue_4(){
  return narrow_short(toInt(this.value_0));
}
;
_.toString$ = function toString_25(){
  return jl.toString_26(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
jl.MAX_VALUE_5 = {l:$intern_12, m:$intern_12, h:524287};
jl.MIN_VALUE_5 = {l:0, m:0, h:524288};
jl.SIZE_4 = 64;
cggl.Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 48, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Long$BoxedValues = function $clinit_Long$BoxedValues(){
  jl.$clinit_Long$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_3 = initDim(cggl.Ljava_lang_Long_2_classLit, $intern_2, 48, 256, 0, 1);
}
;
defineClass(320, 1, $intern_0);
jl.$clinit_Math = function $clinit_Math(){
  jl.$clinit_Math = emptyMethod;
  jl.$clinit_Object();
  jl.PI_OVER_180 = $intern_28 / 180;
  jl.PI_UNDER_180 = 180 / $intern_28;
}
;
jl.abs_0 = function abs_0(x_0){
  jl.$clinit_Math();
  return x_0 < 0?-x_0:x_0;
}
;
jl.max_0 = function max_0(x_0, y_0){
  jl.$clinit_Math();
  return x_0 > y_0?x_0:y_0;
}
;
jl.min_0 = function min_0(x_0, y_0){
  jl.$clinit_Math();
  return x_0 < y_0?x_0:y_0;
}
;
defineClass(414, 1, $intern_0);
jl.E_0 = 2.718281828459045;
jl.PI_0 = $intern_28;
jl.PI_OVER_180 = 0;
jl.PI_UNDER_180 = 0;
jl.$clinit_NullPointerException = function $clinit_NullPointerException(){
  jl.$clinit_NullPointerException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.NullPointerException = function NullPointerException(){
  jl.$clinit_NullPointerException();
  jl.RuntimeException.call(this);
  this.$init_168();
}
;
jl.NullPointerException_0 = function NullPointerException_0(message){
  jl.$clinit_NullPointerException();
  jl.RuntimeException_0.call(this, message);
  this.$init_168();
}
;
defineClass(29, 8, $intern_5, jl.NullPointerException, jl.NullPointerException_0);
_.$init_168 = function $init_168(){
}
;
cggl.Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 29, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Number$__Decode = function $clinit_Number$__Decode(){
  jl.$clinit_Number$__Decode = emptyMethod;
}
;
defineClass(311, 1, $intern_0);
jl.$clinit_Number$__ParseLong = function $clinit_Number$__ParseLong(){
  jl.$clinit_Number$__ParseLong = emptyMethod;
}
;
defineClass(312, 1, $intern_0);
jl.$clinit_Short = function $clinit_Short(){
  jl.$clinit_Short = emptyMethod;
  jl.$clinit_Number();
  jl.MIN_VALUE_6 = narrow_short(32768);
  jl.MAX_VALUE_6 = narrow_short(32767);
  jl.TYPE_6 = cggl.S_classLit;
}
;
jl.Short = function Short(value_0){
  jl.Number_0.call(this);
  this.$init_169();
  this.value_0 = value_0;
}
;
jl.hashCode_21 = function hashCode_21(s){
  return s;
}
;
jl.toString_28 = function toString_28(b){
  return jl.valueOf_21(b);
}
;
jl.valueOf_17 = function valueOf_17(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = (jl.$clinit_Short$BoxedValues() , jl.boxedValues_4)[rebase];
    if (isNull(result)) {
      result = (jl.$clinit_Short$BoxedValues() , jl.boxedValues_4)[rebase] = new jl.Short(s);
    }
    return result;
  }
  return new jl.Short(s);
}
;
defineClass(49, 41, {3:1, 18:1, 1:1, 49:1}, jl.Short);
_.$init_169 = function $init_169(){
}
;
_.byteValue = function byteValue_5(){
  return narrow_byte(this.value_0);
}
;
_.doubleValue = function doubleValue_5(){
  return this.value_0;
}
;
_.equals$ = function equals_13(o){
  return instanceOf(o, 49) && o.value_0 == this.value_0;
}
;
_.floatValue = function floatValue_4(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_20(){
  return jl.hashCode_21(this.value_0);
}
;
_.intValue_0 = function intValue_4(){
  return this.value_0;
}
;
_.longValue = function longValue_4(){
  return fromInt(this.value_0);
}
;
_.shortValue = function shortValue_5(){
  return this.value_0;
}
;
_.toString$ = function toString_27(){
  return jl.toString_28(this.value_0);
}
;
_.value_0 = 0;
jl.MAX_VALUE_6 = 0;
jl.MIN_VALUE_6 = 0;
jl.SIZE_5 = 16;
cggl.Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 49, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Short$BoxedValues = function $clinit_Short$BoxedValues(){
  jl.$clinit_Short$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_4 = initDim(cggl.Ljava_lang_Short_2_classLit, $intern_2, 49, 256, 0, 1);
}
;
defineClass(321, 1, $intern_0);
jl.$clinit_StackTraceElement = function $clinit_StackTraceElement(){
  jl.$clinit_StackTraceElement = emptyMethod;
  jl.$clinit_Object();
}
;
jl.StackTraceElement = function StackTraceElement(className, methodName, fileName, lineNumber){
  jl.$clinit_StackTraceElement();
  Object_0.call(this);
  this.$init_170();
  this.className = className;
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}
;
defineClass(37, 1, {3:1, 1:1, 37:1}, jl.StackTraceElement);
_.$init_170 = function $init_170(){
}
;
_.equals$ = function equals_14(other){
  var st;
  if (instanceOf(other, 37)) {
    st = other;
    return this.lineNumber == st.lineNumber && ju.equals_25(this.methodName, st.methodName) && ju.equals_25(this.className, st.className) && ju.equals_25(this.fileName, st.fileName);
  }
  return false;
}
;
_.getMethodName = function getMethodName_0(){
  return this.methodName;
}
;
_.hashCode$ = function hashCode_22(){
  return ju.hash_0(initValues(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [jl.valueOf_15(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_29(){
  return this.className + '.' + this.methodName + '(' + (jsNotEquals(this.fileName, null)?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
cggl.Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 37, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_String$HashCache = function $clinit_String$HashCache(){
  jl.$clinit_String$HashCache = emptyMethod;
  jl.$clinit_Object();
  jl.back_0 = createObject();
  jl.front = createObject();
}
;
jl.compute = function compute(str){
  var hashCode, i_0, n, nBatch;
  hashCode = 0;
  n = jl.length__I__devirtual$_0(str);
  nBatch = n - 4;
  i_0 = 0;
  while (i_0 < nBatch) {
    hashCode = jl.charAt_I_C__devirtual$_0(str, i_0 + 3) + 31 * (jl.charAt_I_C__devirtual$_0(str, i_0 + 2) + 31 * (jl.charAt_I_C__devirtual$_0(str, i_0 + 1) + 31 * (jl.charAt_I_C__devirtual$_0(str, i_0) + 31 * hashCode)));
    hashCode = cggcci.ensureInt(hashCode);
    i_0 += 4;
  }
  while (i_0 < n) {
    hashCode = hashCode * 31 + jl.charAt_I_C__devirtual$_0(str, i_0++);
  }
  hashCode = cggcci.ensureInt(hashCode);
  return hashCode;
}
;
jl.getHashCode_0 = function getHashCode_0(str){
  jl.$clinit_String$HashCache();
  var key = ':' + str;
  var result = jl.front[key];
  if (result != null) {
    return result;
  }
  result = jl.back_0[key];
  if (result == null) {
    result = jl.compute(str);
  }
  jl.increment();
  return jl.front[key] = result;
}
;
jl.increment = function increment(){
  if (jl.count_0 == 256) {
    jl.back_0 = jl.front;
    jl.front = createObject();
    jl.count_0 = 0;
  }
  ++jl.count_0;
}
;
defineClass(322, 1, $intern_0);
jl.MAX_CACHE = 256;
jl.count_0 = 0;
jl.$clinit_StringBuilder = function $clinit_StringBuilder(){
  jl.$clinit_StringBuilder = emptyMethod;
  jl.$clinit_AbstractStringBuilder();
}
;
jl.StringBuilder = function StringBuilder(){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, '');
  this.$init_172();
}
;
jl.StringBuilder_0 = function StringBuilder_0(ignoredCapacity){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, '');
  this.$init_172();
}
;
jl.StringBuilder_1 = function StringBuilder_1(s){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, s);
  this.$init_172();
}
;
defineClass(33, 66, $intern_16, jl.StringBuilder, jl.StringBuilder_0, jl.StringBuilder_1);
_.$init_172 = function $init_172(){
}
;
_.append_0 = function append_0(x_0){
  this.string += charToString(x_0);
  return this;
}
;
_.append_1 = function append_1(x_0){
  this.string += x_0;
  return this;
}
;
_.append_2 = function append_2(x_0){
  this.string += x_0;
  return this;
}
;
cggl.Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 33, cggl.Ljava_lang_AbstractStringBuilder_2_classLit);
jl.$clinit_System = function $clinit_System(){
  jl.$clinit_System = emptyMethod;
  jl.$clinit_Object();
  jl.err_0 = new ji.PrintStream(null);
  jl.out_0 = new ji.PrintStream(null);
}
;
jl.currentTimeMillis_0 = function currentTimeMillis_0(){
  jl.$clinit_System();
  return fromDouble(cggcc.now_1());
}
;
defineClass(370, 1, $intern_0);
jl.$clinit_UnsupportedOperationException = function $clinit_UnsupportedOperationException(){
  jl.$clinit_UnsupportedOperationException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.UnsupportedOperationException = function UnsupportedOperationException(){
  jl.$clinit_UnsupportedOperationException();
  jl.RuntimeException.call(this);
  this.$init_173();
}
;
jl.UnsupportedOperationException_0 = function UnsupportedOperationException_0(message){
  jl.$clinit_UnsupportedOperationException();
  jl.RuntimeException_0.call(this, message);
  this.$init_173();
}
;
defineClass(20, 8, $intern_5, jl.UnsupportedOperationException, jl.UnsupportedOperationException_0);
_.$init_173 = function $init_173(){
}
;
cggl.Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 20, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Void = function $clinit_Void(){
  jl.$clinit_Void = emptyMethod;
}
;
defineClass(442, 1, $intern_0);
jla.$clinit_Annotation = function $clinit_Annotation(){
  jla.$clinit_Annotation = emptyMethod;
}
;
ju.$clinit_AbstractMap = function $clinit_AbstractMap(){
  ju.$clinit_AbstractMap = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMap = function AbstractMap(){
  ju.$clinit_AbstractMap();
  Object_0.call(this);
  this.$init_174();
}
;
ju.getEntryValueOrNull = function getEntryValueOrNull(entry){
  ju.$clinit_AbstractMap();
  return isNull(entry)?null:entry.getValue_1();
}
;
defineClass(80, 1, $intern_29);
_.$init_174 = function $init_174(){
}
;
_.clear_0 = function clear_2(){
  this.entrySet_0().clear_0();
}
;
_.containsEntry = function containsEntry(entry){
  var key, ourValue, value_0;
  key = entry.getKey_0();
  value_0 = entry.getValue_1();
  ourValue = this.get_2(key);
  if (!ju.equals_25(value_0, ourValue)) {
    return false;
  }
  if (jsEquals(ourValue, null) && !this.containsKey_0(key)) {
    return false;
  }
  return true;
}
;
_.containsKey_0 = function containsKey_0(key){
  return isNotNull(this.implFindEntry(key, false));
}
;
_.equals$ = function equals_15(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 53)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_2 = function get_5(key){
  return ju.getEntryValueOrNull(this.implFindEntry(key, false));
}
;
_.hashCode$ = function hashCode_23(){
  return ju.hashCode_28(this.entrySet_0());
}
;
_.implFindEntry = function implFindEntry(key, remove){
  var entry, iter, k;
  for (iter = this.entrySet_0().iterator(); iter.hasNext();) {
    entry = iter.next_0();
    k = entry.getKey_0();
    if (ju.equals_25(key, k)) {
      if (remove) {
        entry = new ju.AbstractMap$SimpleEntry(entry.getKey_0(), entry.getValue_1());
        iter.remove_1();
      }
      return entry;
    }
  }
  return null;
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.keySet_0 = function keySet_0(){
  return new ju.AbstractMap$1(this);
}
;
_.put_0 = function put_0(key, value_0){
  throw new jl.UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_0 = function remove_1(key){
  return ju.getEntryValueOrNull(this.implFindEntry(key, true));
}
;
_.size_1 = function size_5(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_30(){
  var comma, entry, entry$iterator, sb;
  sb = new jl.StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    if (comma) {
      sb.append_2(', ');
    }
     else {
      comma = true;
    }
    sb.append_2(this.toString_0(entry.getKey_0()));
    sb.append_2('=');
    sb.append_2(this.toString_0(entry.getValue_1()));
  }
  sb.append_2('}');
  return sb.toString$();
}
;
_.toString_0 = function toString_31(o){
  return o === this?'(this Map)':valueOf_23(o);
}
;
cggl.Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 80, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractHashMap = function $clinit_AbstractHashMap(){
  ju.$clinit_AbstractHashMap = emptyMethod;
  ju.$clinit_AbstractMap();
}
;
ju.AbstractHashMap = function AbstractHashMap(){
  ju.$clinit_AbstractHashMap();
  ju.AbstractMap.call(this);
  this.$init_175();
  this.reset_0();
}
;
ju.unsafeCast = function unsafeCast(string){
  return string;
}
;
defineClass(121, 80, $intern_29);
_.$init_175 = function $init_175(){
}
;
_.clear_0 = function clear_3(){
  this.reset_0();
}
;
_.containsKey_0 = function containsKey_1(key){
  return isJavaString(key)?this.hasStringValue(ju.unsafeCast(key)):this.hasHashValue(key);
}
;
_.elementAdded = function elementAdded(){
  this.size_0++;
  ju.structureChanged(this);
}
;
_.elementRemoved = function elementRemoved(){
  this.size_0--;
  ju.structureChanged(this);
}
;
_.entrySet_0 = function entrySet(){
  return new ju.AbstractHashMap$EntrySet(this);
}
;
_.get_2 = function get_6(key){
  return isJavaString(key)?this.getStringValue(ju.unsafeCast(key)):this.getHashValue(key);
}
;
_.getHashValue = function getHashValue(key){
  return ju.getEntryValueOrNull(this.hashCodeMap.getEntry(key));
}
;
_.getStringValue = function getStringValue(key){
  return jsEquals(key, null)?this.getHashValue(null):this.stringMap.get_4(key);
}
;
_.hasHashValue = function hasHashValue(key){
  return isNotNull(this.hashCodeMap.getEntry(key));
}
;
_.hasStringValue = function hasStringValue(key){
  return jsEquals(key, null)?this.hasHashValue(null):this.stringMap.contains_0(key);
}
;
_.put_0 = function put_1(key, value_0){
  return isJavaString(key)?this.putStringValue(ju.unsafeCast(key), value_0):this.putHashValue(key, value_0);
}
;
_.putHashValue = function putHashValue(key, value_0){
  return this.hashCodeMap.put_0(key, value_0);
}
;
_.putStringValue = function putStringValue(key, value_0){
  return jsEquals(key, null)?this.putHashValue(null, value_0):this.stringMap.put_1(key, value_0);
}
;
_.remove_0 = function remove_2(key){
  return isJavaString(key)?this.removeStringValue(ju.unsafeCast(key)):this.removeHashValue(key);
}
;
_.removeHashValue = function removeHashValue(key){
  return this.hashCodeMap.remove_0(key);
}
;
_.removeStringValue = function removeStringValue(key){
  return jsEquals(key, null)?this.removeHashValue(null):this.stringMap.remove_4(key);
}
;
_.reset_0 = function reset_0(){
  var factory;
  factory = new ju.InternalJsMapFactory$BackwardCompatibleJsMapFactory;
  this.hashCodeMap = factory.createJsHashCodeMap();
  this.hashCodeMap.host = this;
  this.stringMap = factory.createJsStringMap();
  this.stringMap.host = this;
  this.size_0 = 0;
  ju.structureChanged(this);
}
;
_.size_1 = function size_6(){
  return this.size_0;
}
;
_.size_0 = 0;
cggl.Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 121, cggl.Ljava_util_AbstractMap_2_classLit);
ju.$clinit_AbstractHashMap$EntrySet = function $clinit_AbstractHashMap$EntrySet(){
  ju.$clinit_AbstractHashMap$EntrySet = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.AbstractHashMap$EntrySet = function AbstractHashMap$EntrySet(this$0){
  ju.$clinit_AbstractHashMap$EntrySet();
  this.this$01 = this$0;
  ju.AbstractSet.call(this);
  this.$init_176();
}
;
defineClass(122, 60, $intern_9, ju.AbstractHashMap$EntrySet);
_.$init_176 = function $init_176(){
}
;
_.clear_0 = function clear_4(){
  this.this$01.clear_0();
}
;
_.contains = function contains_1(o){
  if (instanceOf(o, 25)) {
    return this.this$01.containsEntry(o);
  }
  return false;
}
;
_.iterator = function iterator_1(){
  return new ju.AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_7(){
  return this.this$01.size_1();
}
;
cggl.Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 122, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_AbstractHashMap$EntrySetIterator = function $clinit_AbstractHashMap$EntrySetIterator(){
  ju.$clinit_AbstractHashMap$EntrySetIterator = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractHashMap$EntrySetIterator = function AbstractHashMap$EntrySetIterator(this$0){
  ju.$clinit_AbstractHashMap$EntrySetIterator();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_177();
  ju.recordLastKnownStructure(this$0, this);
}
;
defineClass(123, 1, $intern_0, ju.AbstractHashMap$EntrySetIterator);
_.$init_177 = function $init_177(){
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
}
;
_.hasNext = function hasNext(){
  if (this.current.hasNext()) {
    return true;
  }
  if (jsNotEquals(this.current, this.stringMapEntries)) {
    return false;
  }
  this.current = this.this$01.hashCodeMap.entries();
  return this.current.hasNext();
}
;
_.next_0 = function next_0(){
  return this.next_1();
}
;
_.next_1 = function next_1(){
  ju.checkStructuralChange(this.this$01, this);
  cggcsi.checkElement(this.hasNext());
  this.last = this.current;
  return this.current.next_0();
}
;
_.remove_1 = function remove_3(){
  cggcsi.checkState(isNotNull(this.last));
  ju.checkStructuralChange(this.this$01, this);
  this.last.remove_1();
  this.last = null;
  ju.recordLastKnownStructure(this.this$01, this);
}
;
cggl.Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 123, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractList = function $clinit_AbstractList(){
  ju.$clinit_AbstractList = emptyMethod;
  ju.$clinit_AbstractCollection();
}
;
ju.AbstractList = function AbstractList(){
  ju.$clinit_AbstractList();
  ju.AbstractCollection.call(this);
  this.$init_178();
}
;
defineClass(61, 81, $intern_30);
_.$init_178 = function $init_178(){
}
;
_.add_2 = function add_4(index_0, element){
  throw new jl.UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_5(obj){
  this.add_2(this.size_1(), obj);
  return true;
}
;
_.clear_0 = function clear_5(){
  this.removeRange(0, this.size_1());
}
;
_.equals$ = function equals_16(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 23)) {
    return false;
  }
  other = o;
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!ju.equals_25(elem, elemOther)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_24(){
  return ju.hashCode_29(this);
}
;
_.indexOf_2 = function indexOf_1(toFind){
  var i_0, n;
  for (i_0 = 0 , n = this.size_1(); i_0 < n; ++i_0) {
    if (ju.equals_25(toFind, this.get_3(i_0))) {
      return i_0;
    }
  }
  return -1;
}
;
_.iterator = function iterator_2(){
  return new ju.AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new ju.AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_2 = function remove_4(index_0){
  throw new jl.UnsupportedOperationException_0('Remove not supported on this list');
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i_0, iter;
  iter = this.listIterator_0(fromIndex);
  for (i_0 = fromIndex; i_0 < endIndex; ++i_0) {
    iter.next_0();
    iter.remove_1();
  }
}
;
cggl.Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 61, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractList$IteratorImpl = function $clinit_AbstractList$IteratorImpl(){
  ju.$clinit_AbstractList$IteratorImpl = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractList$IteratorImpl = function AbstractList$IteratorImpl(this$0){
  ju.$clinit_AbstractList$IteratorImpl();
  this.this$01_0 = this$0;
  Object_0.call(this);
  this.$init_179();
}
;
defineClass(88, 1, $intern_0, ju.AbstractList$IteratorImpl);
_.$init_179 = function $init_179(){
  this.i = 0;
  this.last = -1;
}
;
_.hasNext = function hasNext_0(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_2(){
  cggcsi.checkElement(this.hasNext());
  return this.this$01_0.get_3(this.last = this.i++);
}
;
_.remove_1 = function remove_5(){
  cggcsi.checkState(this.last != -1);
  this.this$01_0.remove_2(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
cggl.Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 88, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractList$ListIteratorImpl = function $clinit_AbstractList$ListIteratorImpl(){
  ju.$clinit_AbstractList$ListIteratorImpl = emptyMethod;
  ju.$clinit_AbstractList$IteratorImpl();
}
;
ju.AbstractList$ListIteratorImpl = function AbstractList$ListIteratorImpl(this$0, start_0){
  ju.$clinit_AbstractList$ListIteratorImpl();
  this.this$01 = this$0;
  ju.AbstractList$IteratorImpl.call(this, this$0);
  this.$init_180();
  cggcsi.checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}
;
defineClass(146, 88, $intern_0, ju.AbstractList$ListIteratorImpl);
_.$init_180 = function $init_180(){
}
;
_.add_3 = function add_6(o){
  this.this$01.add_2(this.i, o);
  this.i++;
  this.last = -1;
}
;
cggl.Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 146, cggl.Ljava_util_AbstractList$IteratorImpl_2_classLit);
ju.$clinit_AbstractList$SubList = function $clinit_AbstractList$SubList(){
  ju.$clinit_AbstractList$SubList = emptyMethod;
}
;
defineClass(361, 61, $intern_30);
ju.$clinit_AbstractMap$1 = function $clinit_AbstractMap$1(){
  ju.$clinit_AbstractMap$1 = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.AbstractMap$1 = function AbstractMap$1(this$0){
  ju.$clinit_AbstractMap$1();
  this.this$01 = this$0;
  ju.AbstractSet.call(this);
  this.$init_181();
}
;
defineClass(125, 60, $intern_9, ju.AbstractMap$1);
_.$init_181 = function $init_181(){
}
;
_.clear_0 = function clear_6(){
  this.this$01.clear_0();
}
;
_.contains = function contains_2(key){
  return this.this$01.containsKey_0(key);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  outerIter = this.this$01.entrySet_0().iterator();
  return new ju.AbstractMap$1$1(this, outerIter);
}
;
_.size_1 = function size_8(){
  return this.this$01.size_1();
}
;
cggl.Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 125, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_AbstractMap$1$1 = function $clinit_AbstractMap$1$1(){
  ju.$clinit_AbstractMap$1$1 = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMap$1$1 = function AbstractMap$1$1(this$1, val$outerIter){
  ju.$clinit_AbstractMap$1$1();
  this.this$11 = this$1;
  this.val$outerIter2 = val$outerIter;
  Object_0.call(this);
  this.$init_182();
}
;
defineClass(126, 1, $intern_0, ju.AbstractMap$1$1);
_.$init_182 = function $init_182(){
}
;
_.hasNext = function hasNext_1(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_3(){
  var entry;
  entry = this.val$outerIter2.next_0();
  return entry.getKey_0();
}
;
_.remove_1 = function remove_6(){
  this.val$outerIter2.remove_1();
}
;
cggl.Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 126, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractMap$2 = function $clinit_AbstractMap$2(){
  ju.$clinit_AbstractMap$2 = emptyMethod;
}
;
defineClass(331, 81, $intern_0);
ju.$clinit_AbstractMap$2$1 = function $clinit_AbstractMap$2$1(){
  ju.$clinit_AbstractMap$2$1 = emptyMethod;
}
;
defineClass(332, 1, $intern_0);
ju.$clinit_AbstractMap$AbstractEntry = function $clinit_AbstractMap$AbstractEntry(){
  ju.$clinit_AbstractMap$AbstractEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMap$AbstractEntry = function AbstractMap$AbstractEntry(key, value_0){
  ju.$clinit_AbstractMap$AbstractEntry();
  Object_0.call(this);
  this.$init_183();
  this.key = key;
  this.value_0 = value_0;
}
;
defineClass(124, 1, $intern_31);
_.$init_183 = function $init_183(){
}
;
_.equals$ = function equals_17(other){
  var entry;
  if (!instanceOf(other, 25)) {
    return false;
  }
  entry = other;
  return ju.equals_25(this.key, entry.getKey_0()) && ju.equals_25(this.value_0, entry.getValue_1());
}
;
_.getKey_0 = function getKey_0(){
  return this.key;
}
;
_.getValue_1 = function getValue_7(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_25(){
  return ju.hashCode_35(this.key) ^ ju.hashCode_35(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_32(){
  return this.key + '=' + this.value_0;
}
;
cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 124, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractMap$SimpleEntry = function $clinit_AbstractMap$SimpleEntry(){
  ju.$clinit_AbstractMap$SimpleEntry = emptyMethod;
  ju.$clinit_AbstractMap$AbstractEntry();
}
;
ju.AbstractMap$SimpleEntry = function AbstractMap$SimpleEntry(key, value_0){
  ju.$clinit_AbstractMap$SimpleEntry();
  ju.AbstractMap$AbstractEntry.call(this, key, value_0);
  this.$init_184();
}
;
defineClass(82, 124, $intern_31, ju.AbstractMap$SimpleEntry);
_.$init_184 = function $init_184(){
}
;
cggl.Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 82, cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit);
ju.$clinit_AbstractMap$SimpleImmutableEntry = function $clinit_AbstractMap$SimpleImmutableEntry(){
  ju.$clinit_AbstractMap$SimpleImmutableEntry = emptyMethod;
}
;
defineClass(330, 124, $intern_31);
ju.$clinit_AbstractMapEntry = function $clinit_AbstractMapEntry(){
  ju.$clinit_AbstractMapEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMapEntry = function AbstractMapEntry(){
  ju.$clinit_AbstractMapEntry();
  Object_0.call(this);
  this.$init_185();
}
;
defineClass(151, 1, $intern_31);
_.$init_185 = function $init_185(){
}
;
_.equals$ = function equals_18(other){
  var entry;
  if (!instanceOf(other, 25)) {
    return false;
  }
  entry = other;
  return ju.equals_25(this.getKey_0(), entry.getKey_0()) && ju.equals_25(this.getValue_1(), entry.getValue_1());
}
;
_.hashCode$ = function hashCode_26(){
  return ju.hashCode_35(this.getKey_0()) ^ ju.hashCode_35(this.getValue_1());
}
;
_.toString$ = function toString_33(){
  return this.getKey_0() + '=' + this.getValue_1();
}
;
cggl.Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 151, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractQueue = function $clinit_AbstractQueue(){
  ju.$clinit_AbstractQueue = emptyMethod;
}
;
defineClass(359, 81, $intern_0);
ju.$clinit_AbstractSequentialList = function $clinit_AbstractSequentialList(){
  ju.$clinit_AbstractSequentialList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.AbstractSequentialList = function AbstractSequentialList(){
  ju.$clinit_AbstractSequentialList();
  ju.AbstractList.call(this);
  this.$init_186();
}
;
defineClass(222, 61, $intern_30);
_.$init_186 = function $init_186(){
}
;
_.add_2 = function add_7(index_0, element){
  var iter;
  iter = this.listIterator_0(index_0);
  iter.add_3(element);
}
;
_.get_3 = function get_7(index_0){
  var e, iter;
  iter = this.listIterator_0(index_0);
  try {
    return iter.next_0();
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 52)) {
      e = $e0;
      throw new jl.IndexOutOfBoundsException("Can't get element " + index_0);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.iterator = function iterator_4(){
  return this.listIterator();
}
;
_.remove_2 = function remove_7(index_0){
  var e, iter, old;
  iter = this.listIterator_0(index_0);
  try {
    old = iter.next_0();
    iter.remove_1();
    return old;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 52)) {
      e = $e0;
      throw new jl.IndexOutOfBoundsException("Can't remove element " + index_0);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
cggl.Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 222, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_ArrayList = function $clinit_ArrayList(){
  ju.$clinit_ArrayList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.ArrayList = function ArrayList(){
  ju.$clinit_ArrayList();
  ju.AbstractList.call(this);
  this.$init_187();
}
;
ju.splice_0 = function splice_0(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}
;
ju.splice_1 = function splice_1(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}
;
defineClass(31, 61, $intern_32, ju.ArrayList);
_.$init_187 = function $init_187(){
  this.array = initDim(cggl.Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}
;
_.add_2 = function add_8(index_0, o){
  cggcsi.checkPositionIndex(index_0, this.array.length);
  ju.splice_1(this.array, index_0, 0, o);
}
;
_.add_1 = function add_9(o){
  this.array[this.array.length] = o;
  return true;
}
;
_.clear_0 = function clear_7(){
  this.array = initDim(cggl.Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}
;
_.contains = function contains_3(o){
  return this.indexOf_2(o) != -1;
}
;
_.get_3 = function get_8(index_0){
  cggcsi.checkElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.indexOf_2 = function indexOf_2(o){
  return this.indexOf_3(o, 0);
}
;
_.indexOf_3 = function indexOf_3(o, index_0){
  for (; index_0 < this.array.length; ++index_0) {
    if (ju.equals_25(o, this.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}
;
_.isEmpty_0 = function isEmpty_2(){
  return this.array.length == 0;
}
;
_.remove_2 = function remove_8(index_0){
  var previous;
  previous = this.get_3(index_0);
  ju.splice_0(this.array, index_0, 1);
  return previous;
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  var count;
  cggcsi.checkPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  ju.splice_0(this.array, fromIndex, count);
}
;
_.size_1 = function size_9(){
  return this.array.length;
}
;
_.toArray = function toArray_0(out){
  var i_0, size_0;
  size_0 = this.array.length;
  if (out.length < size_0) {
    out = createFrom_0(out, size_0);
  }
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    out[i_0] = this.array[i_0];
  }
  if (out.length > size_0) {
    out[size_0] = null;
  }
  return out;
}
;
cggl.Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 31, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Arrays = function $clinit_Arrays(){
  ju.$clinit_Arrays = emptyMethod;
  jl.$clinit_Object();
}
;
ju.asList = function asList(array){
  ju.$clinit_Arrays();
  return new ju.Arrays$ArrayList(array);
}
;
ju.hashCode_27 = function hashCode_27(a){
  ju.$clinit_Arrays();
  var e, e$array, e$index, e$max, hashCode;
  if (jsEquals(a, null)) {
    return 0;
  }
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + ju.hashCode_35(e);
    hashCode = cggcci.ensureInt(hashCode);
  }
  return hashCode;
}
;
defineClass(443, 1, $intern_0);
ju.$clinit_Arrays$ArrayList = function $clinit_Arrays$ArrayList(){
  ju.$clinit_Arrays$ArrayList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.Arrays$ArrayList = function Arrays$ArrayList(array){
  ju.$clinit_Arrays$ArrayList();
  ju.AbstractList.call(this);
  this.$init_188();
  this.array = array;
}
;
defineClass(229, 61, $intern_32, ju.Arrays$ArrayList);
_.$init_188 = function $init_188(){
}
;
_.contains = function contains_4(o){
  return this.indexOf_2(o) != -1;
}
;
_.get_3 = function get_9(index_0){
  cggcsi.checkElementIndex(index_0, this.size_1());
  return this.array[index_0];
}
;
_.size_1 = function size_10(){
  return this.array.length;
}
;
_.toArray = function toArray_1(out){
  var i_0, size_0;
  size_0 = this.size_1();
  if (out.length < size_0) {
    out = createFrom_0(out, size_0);
  }
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    out[i_0] = this.array[i_0];
  }
  if (out.length > size_0) {
    out[size_0] = null;
  }
  return out;
}
;
cggl.Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 229, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Collection = function $clinit_Collection(){
  ju.$clinit_Collection = emptyMethod;
}
;
ju.$clinit_Collections = function $clinit_Collections(){
  ju.$clinit_Collections = emptyMethod;
  jl.$clinit_Object();
  ju.EMPTY_LIST = new ju.Collections$EmptyList;
  ju.EMPTY_MAP = new ju.Collections$EmptyMap;
  ju.EMPTY_SET = new ju.Collections$EmptySet;
}
;
ju.emptyIterator = function emptyIterator(){
  ju.$clinit_Collections();
  return ju.$clinit_Collections$EmptyListIterator() , ju.INSTANCE_0;
}
;
ju.emptyListIterator = function emptyListIterator(){
  ju.$clinit_Collections();
  return ju.$clinit_Collections$EmptyListIterator() , ju.INSTANCE_0;
}
;
ju.hashCode_28 = function hashCode_28(collection){
  ju.$clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + ju.hashCode_35(e);
    hashCode = cggcci.ensureInt(hashCode);
  }
  return hashCode;
}
;
ju.hashCode_29 = function hashCode_29(list){
  ju.$clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + ju.hashCode_35(e);
    hashCode = cggcci.ensureInt(hashCode);
  }
  return hashCode;
}
;
ju.unmodifiableList = function unmodifiableList(list){
  ju.$clinit_Collections();
  return instanceOf(list, 54)?new ju.Collections$UnmodifiableRandomAccessList(list):new ju.Collections$UnmodifiableList(list);
}
;
ju.unmodifiableMap = function unmodifiableMap(map_0){
  ju.$clinit_Collections();
  return new ju.Collections$UnmodifiableMap(map_0);
}
;
defineClass(350, 1, $intern_0);
ju.$clinit_Collections$1 = function $clinit_Collections$1(){
  ju.$clinit_Collections$1 = emptyMethod;
}
;
defineClass(357, 1, $intern_0);
ju.$clinit_Collections$2 = function $clinit_Collections$2(){
  ju.$clinit_Collections$2 = emptyMethod;
}
;
defineClass(358, 1, $intern_0);
ju.$clinit_Collections$EmptyList = function $clinit_Collections$EmptyList(){
  ju.$clinit_Collections$EmptyList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.Collections$EmptyList = function Collections$EmptyList(){
  ju.$clinit_Collections$EmptyList();
  ju.AbstractList.call(this);
  this.$init_189();
}
;
defineClass(137, 61, $intern_32, ju.Collections$EmptyList);
_.$init_189 = function $init_189(){
}
;
_.contains = function contains_5(object){
  return false;
}
;
_.get_3 = function get_10(location_0){
  cggcsi.checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return ju.emptyIterator();
}
;
_.listIterator = function listIterator_1(){
  return ju.emptyListIterator();
}
;
_.size_1 = function size_11(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 137, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Collections$EmptyListIterator = function $clinit_Collections$EmptyListIterator(){
  ju.$clinit_Collections$EmptyListIterator = emptyMethod;
  jl.$clinit_Object();
  ju.INSTANCE_0 = new ju.Collections$EmptyListIterator;
}
;
ju.Collections$EmptyListIterator = function Collections$EmptyListIterator(){
  Object_0.call(this);
  this.$init_190();
}
;
defineClass(138, 1, $intern_0, ju.Collections$EmptyListIterator);
_.$init_190 = function $init_190(){
}
;
_.add_3 = function add_10(o){
  throw new jl.UnsupportedOperationException;
}
;
_.hasNext = function hasNext_2(){
  return false;
}
;
_.next_0 = function next_4(){
  throw new ju.NoSuchElementException;
}
;
_.remove_1 = function remove_9(){
  throw new jl.IllegalStateException;
}
;
cggl.Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 138, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$EmptyMap = function $clinit_Collections$EmptyMap(){
  ju.$clinit_Collections$EmptyMap = emptyMethod;
  ju.$clinit_AbstractMap();
}
;
ju.Collections$EmptyMap = function Collections$EmptyMap(){
  ju.$clinit_Collections$EmptyMap();
  ju.AbstractMap.call(this);
  this.$init_191();
}
;
defineClass(140, 80, $intern_33, ju.Collections$EmptyMap);
_.$init_191 = function $init_191(){
}
;
_.containsKey_0 = function containsKey_2(key){
  return false;
}
;
_.entrySet_0 = function entrySet_0(){
  return ju.$clinit_Collections() , ju.EMPTY_SET;
}
;
_.get_2 = function get_11(key){
  return null;
}
;
_.keySet_0 = function keySet_1(){
  return ju.$clinit_Collections() , ju.EMPTY_SET;
}
;
_.size_1 = function size_12(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 140, cggl.Ljava_util_AbstractMap_2_classLit);
ju.$clinit_Collections$EmptySet = function $clinit_Collections$EmptySet(){
  ju.$clinit_Collections$EmptySet = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.Collections$EmptySet = function Collections$EmptySet(){
  ju.$clinit_Collections$EmptySet();
  ju.AbstractSet.call(this);
  this.$init_192();
}
;
defineClass(139, 60, $intern_34, ju.Collections$EmptySet);
_.$init_192 = function $init_192(){
}
;
_.contains = function contains_6(object){
  return false;
}
;
_.iterator = function iterator_6(){
  return ju.emptyIterator();
}
;
_.size_1 = function size_13(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 139, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_Collections$LifoQueue = function $clinit_Collections$LifoQueue(){
  ju.$clinit_Collections$LifoQueue = emptyMethod;
}
;
defineClass(351, 359, $intern_7);
ju.$clinit_Collections$ReverseComparator = function $clinit_Collections$ReverseComparator(){
  ju.$clinit_Collections$ReverseComparator = emptyMethod;
}
;
defineClass(352, 1, $intern_0);
ju.$clinit_Collections$SetFromMap = function $clinit_Collections$SetFromMap(){
  ju.$clinit_Collections$SetFromMap = emptyMethod;
}
;
defineClass(353, 60, $intern_34);
ju.$clinit_Collections$SingletonList = function $clinit_Collections$SingletonList(){
  ju.$clinit_Collections$SingletonList = emptyMethod;
}
;
defineClass(354, 61, $intern_35);
ju.$clinit_Collections$UnmodifiableCollection = function $clinit_Collections$UnmodifiableCollection(){
  ju.$clinit_Collections$UnmodifiableCollection = emptyMethod;
  jl.$clinit_Object();
}
;
ju.Collections$UnmodifiableCollection = function Collections$UnmodifiableCollection(coll){
  ju.$clinit_Collections$UnmodifiableCollection();
  Object_0.call(this);
  this.$init_193();
  this.coll = coll;
}
;
defineClass(68, 1, $intern_0);
_.$init_193 = function $init_193(){
}
;
_.add_1 = function add_11(o){
  throw new jl.UnsupportedOperationException;
}
;
_.clear_0 = function clear_8(){
  throw new jl.UnsupportedOperationException;
}
;
_.contains = function contains_7(o){
  return this.coll.contains(o);
}
;
_.containsAll = function containsAll_0(c){
  return this.coll.containsAll(c);
}
;
_.isEmpty_0 = function isEmpty_3(){
  return this.coll.isEmpty_0();
}
;
_.iterator = function iterator_7(){
  return new ju.Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_14(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_2(a){
  return this.coll.toArray(a);
}
;
_.toString$ = function toString_34(){
  return this.coll.toString$();
}
;
cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 68, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableCollectionIterator = function $clinit_Collections$UnmodifiableCollectionIterator(){
  ju.$clinit_Collections$UnmodifiableCollectionIterator = emptyMethod;
  jl.$clinit_Object();
}
;
ju.Collections$UnmodifiableCollectionIterator = function Collections$UnmodifiableCollectionIterator(it){
  ju.$clinit_Collections$UnmodifiableCollectionIterator();
  Object_0.call(this);
  this.$init_194();
  this.it = it;
}
;
defineClass(87, 1, $intern_0, ju.Collections$UnmodifiableCollectionIterator);
_.$init_194 = function $init_194(){
}
;
_.hasNext = function hasNext_3(){
  return this.it.hasNext();
}
;
_.next_0 = function next_5(){
  return this.it.next_0();
}
;
_.remove_1 = function remove_10(){
  throw new jl.UnsupportedOperationException;
}
;
cggl.Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 87, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableList = function $clinit_Collections$UnmodifiableList(){
  ju.$clinit_Collections$UnmodifiableList = emptyMethod;
  ju.$clinit_Collections$UnmodifiableCollection();
}
;
ju.Collections$UnmodifiableList = function Collections$UnmodifiableList(list){
  ju.$clinit_Collections$UnmodifiableList();
  ju.Collections$UnmodifiableCollection.call(this, list);
  this.$init_195();
  this.list = list;
}
;
defineClass(84, 68, $intern_30, ju.Collections$UnmodifiableList);
_.$init_195 = function $init_195(){
}
;
_.add_2 = function add_12(index_0, element){
  throw new jl.UnsupportedOperationException;
}
;
_.equals$ = function equals_19(o){
  return this.list.equals$(o);
}
;
_.get_3 = function get_12(index_0){
  return this.list.get_3(index_0);
}
;
_.hashCode$ = function hashCode_30(){
  return this.list.hashCode$();
}
;
_.indexOf_2 = function indexOf_4(o){
  return this.list.indexOf_2(o);
}
;
_.isEmpty_0 = function isEmpty_4(){
  return this.list.isEmpty_0();
}
;
_.listIterator = function listIterator_2(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_3(from){
  return new ju.Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
_.remove_2 = function remove_11(index_0){
  throw new jl.UnsupportedOperationException;
}
;
cggl.Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 84, cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit);
ju.$clinit_Collections$UnmodifiableListIterator = function $clinit_Collections$UnmodifiableListIterator(){
  ju.$clinit_Collections$UnmodifiableListIterator = emptyMethod;
  ju.$clinit_Collections$UnmodifiableCollectionIterator();
}
;
ju.Collections$UnmodifiableListIterator = function Collections$UnmodifiableListIterator(lit){
  ju.$clinit_Collections$UnmodifiableListIterator();
  ju.Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.$init_196();
  this.lit = lit;
}
;
defineClass(144, 87, $intern_0, ju.Collections$UnmodifiableListIterator);
_.$init_196 = function $init_196(){
}
;
_.add_3 = function add_13(o){
  throw new jl.UnsupportedOperationException;
}
;
cggl.Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 144, cggl.Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit);
ju.$clinit_Collections$UnmodifiableMap = function $clinit_Collections$UnmodifiableMap(){
  ju.$clinit_Collections$UnmodifiableMap = emptyMethod;
  jl.$clinit_Object();
}
;
ju.Collections$UnmodifiableMap = function Collections$UnmodifiableMap(map_0){
  ju.$clinit_Collections$UnmodifiableMap();
  Object_0.call(this);
  this.$init_197();
  this.map_0 = map_0;
}
;
defineClass(141, 1, $intern_29, ju.Collections$UnmodifiableMap);
_.$init_197 = function $init_197(){
}
;
_.clear_0 = function clear_9(){
  throw new jl.UnsupportedOperationException;
}
;
_.containsKey_0 = function containsKey_3(key){
  return this.map_0.containsKey_0(key);
}
;
_.entrySet_0 = function entrySet_1(){
  if (isNull(this.entrySet)) {
    this.entrySet = new ju.Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0());
  }
  return this.entrySet;
}
;
_.equals$ = function equals_20(o){
  return this.map_0.equals$(o);
}
;
_.get_2 = function get_13(key){
  return this.map_0.get_2(key);
}
;
_.hashCode$ = function hashCode_31(){
  return this.map_0.hashCode$();
}
;
_.isEmpty_0 = function isEmpty_5(){
  return this.map_0.isEmpty_0();
}
;
_.keySet_0 = function keySet_2(){
  if (isNull(this.keySet)) {
    this.keySet = new ju.Collections$UnmodifiableSet(this.map_0.keySet_0());
  }
  return this.keySet;
}
;
_.put_0 = function put_2(key, value_0){
  throw new jl.UnsupportedOperationException;
}
;
_.remove_0 = function remove_12(key){
  throw new jl.UnsupportedOperationException;
}
;
_.size_1 = function size_15(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_35(){
  return this.map_0.toString$();
}
;
cggl.Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 141, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableSet = function $clinit_Collections$UnmodifiableSet(){
  ju.$clinit_Collections$UnmodifiableSet = emptyMethod;
  ju.$clinit_Collections$UnmodifiableCollection();
}
;
ju.Collections$UnmodifiableSet = function Collections$UnmodifiableSet(set_0){
  ju.$clinit_Collections$UnmodifiableSet();
  ju.Collections$UnmodifiableCollection.call(this, set_0);
  this.$init_198();
}
;
defineClass(85, 68, $intern_9, ju.Collections$UnmodifiableSet);
_.$init_198 = function $init_198(){
}
;
_.equals$ = function equals_21(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_32(){
  return this.coll.hashCode$();
}
;
cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 85, cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = emptyMethod;
  ju.$clinit_Collections$UnmodifiableSet();
}
;
ju.Collections$UnmodifiableMap$UnmodifiableEntrySet = function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet();
  ju.Collections$UnmodifiableSet.call(this, s);
  this.$init_199();
}
;
defineClass(142, 85, $intern_9, ju.Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.$init_199 = function $init_199(){
}
;
_.contains = function contains_8(o){
  return this.coll.contains(o);
}
;
_.containsAll = function containsAll_1(o){
  return this.coll.containsAll(o);
}
;
_.iterator = function iterator_8(){
  var it;
  it = this.coll.iterator();
  return new ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$1(this, it);
}
;
_.toArray = function toArray_3(a){
  var result;
  result = getClassPrototype(68).toArray.call(this, a);
  this.wrap(result, this.coll.size_1());
  return result;
}
;
_.wrap = function wrap_0(array, size_0){
  var i_0;
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    array[i_0] = new ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(array[i_0]);
  }
}
;
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 142, cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = emptyMethod;
  jl.$clinit_Object();
}
;
ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(this$2, val$it){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1();
  this.this$21 = this$2;
  this.val$it2 = val$it;
  Object_0.call(this);
  this.$init_200();
}
;
defineClass(145, 1, $intern_0, ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.$init_200 = function $init_200(){
}
;
_.hasNext = function hasNext_4(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_6(){
  return this.next_1();
}
;
_.next_1 = function next_7(){
  return new ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_0());
}
;
_.remove_1 = function remove_13(){
  throw new jl.UnsupportedOperationException;
}
;
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 145, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry();
  Object_0.call(this);
  this.$init_201();
  this.entry = entry;
}
;
defineClass(86, 1, $intern_31, ju.Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.$init_201 = function $init_201(){
}
;
_.equals$ = function equals_22(o){
  return this.entry.equals$(o);
}
;
_.getKey_0 = function getKey_1(){
  return this.entry.getKey_0();
}
;
_.getValue_1 = function getValue_8(){
  return this.entry.getValue_1();
}
;
_.hashCode$ = function hashCode_33(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new jl.UnsupportedOperationException;
}
;
_.toString$ = function toString_36(){
  return this.entry.toString$();
}
;
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 86, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableRandomAccessList = function $clinit_Collections$UnmodifiableRandomAccessList(){
  ju.$clinit_Collections$UnmodifiableRandomAccessList = emptyMethod;
  ju.$clinit_Collections$UnmodifiableList();
}
;
ju.Collections$UnmodifiableRandomAccessList = function Collections$UnmodifiableRandomAccessList(list){
  ju.$clinit_Collections$UnmodifiableRandomAccessList();
  ju.Collections$UnmodifiableList.call(this, list);
  this.$init_202();
}
;
defineClass(143, 84, {1:1, 23:1, 54:1}, ju.Collections$UnmodifiableRandomAccessList);
_.$init_202 = function $init_202(){
}
;
cggl.Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 143, cggl.Ljava_util_Collections$UnmodifiableList_2_classLit);
ju.$clinit_Collections$UnmodifiableSortedMap = function $clinit_Collections$UnmodifiableSortedMap(){
  ju.$clinit_Collections$UnmodifiableSortedMap = emptyMethod;
}
;
defineClass(355, 141, $intern_29);
ju.$clinit_Collections$UnmodifiableSortedSet = function $clinit_Collections$UnmodifiableSortedSet(){
  ju.$clinit_Collections$UnmodifiableSortedSet = emptyMethod;
}
;
defineClass(356, 85, $intern_9);
ju.$clinit_ConcurrentModificationDetector = function $clinit_ConcurrentModificationDetector(){
  ju.$clinit_ConcurrentModificationDetector = emptyMethod;
  jl.$clinit_Object();
}
;
ju.checkStructuralChange = function checkStructuralChange(host, iterator){
  ju.$clinit_ConcurrentModificationDetector();
  if (ju.getModCount(iterator) != ju.getModCount(host)) {
    throw new ju.ConcurrentModificationException;
  }
}
;
ju.getModCount = function getModCount(o){
  return o._gwt_modCount;
}
;
ju.recordLastKnownStructure = function recordLastKnownStructure(host, iterator){
  ju.$clinit_ConcurrentModificationDetector();
  ju.setModCount(iterator, ju.getModCount(host));
}
;
ju.setModCount = function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}
;
ju.structureChanged = function structureChanged(map_0){
  ju.$clinit_ConcurrentModificationDetector();
  var modCount;
  modCount = ju.getModCount(map_0) | 0;
  ju.setModCount(map_0, modCount + 1);
}
;
defineClass(368, 1, $intern_0);
ju.$clinit_ConcurrentModificationException = function $clinit_ConcurrentModificationException(){
  ju.$clinit_ConcurrentModificationException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
ju.ConcurrentModificationException = function ConcurrentModificationException(){
  ju.$clinit_ConcurrentModificationException();
  jl.RuntimeException.call(this);
  this.$init_203();
}
;
defineClass(226, 8, $intern_5, ju.ConcurrentModificationException);
_.$init_203 = function $init_203(){
}
;
cggl.Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 226, cggl.Ljava_lang_RuntimeException_2_classLit);
ju.$clinit_Date = function $clinit_Date(){
  ju.$clinit_Date = emptyMethod;
  jl.$clinit_Object();
  ju.ONE_HOUR_IN_MILLISECONDS = fromInt(60 * 60 * 1000);
}
;
ju.Date_0 = function Date_0(date){
  ju.$clinit_Date();
  Object_0.call(this);
  this.$init_204();
  this.jsdate = cggcc.create(toDouble(date));
}
;
ju.padTwo = function padTwo(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return jl.valueOf_21(number);
  }
}
;
defineClass(74, 1, {3:1, 18:1, 1:1, 74:1}, ju.Date_0);
_.$init_204 = function $init_204(){
}
;
_.equals$ = function equals_23(obj){
  return instanceOf(obj, 74) && eq(this.getTime_0(), obj.getTime_0());
}
;
_.getDate_0 = function getDate(){
  return cggcc.$getDate(this.jsdate);
}
;
_.getDay_0 = function getDay(){
  return cggcc.$getDay(this.jsdate);
}
;
_.getHours_0 = function getHours(){
  return cggcc.$getHours(this.jsdate);
}
;
_.getMinutes_0 = function getMinutes(){
  return cggcc.$getMinutes(this.jsdate);
}
;
_.getMonth_0 = function getMonth(){
  return cggcc.$getMonth(this.jsdate);
}
;
_.getSeconds_0 = function getSeconds(){
  return cggcc.$getSeconds(this.jsdate);
}
;
_.getTime_0 = function getTime(){
  return fromDouble(cggcc.$getTime(this.jsdate));
}
;
_.getTimezoneOffset_0 = function getTimezoneOffset(){
  return cggcc.$getTimezoneOffset(this.jsdate);
}
;
_.hashCode$ = function hashCode_34(){
  var time;
  time = this.getTime_0();
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_37(){
  var hourOffset, minuteOffset, offset;
  offset = -cggcc.$getTimezoneOffset(this.jsdate);
  hourOffset = (offset >= 0?'+':'') + narrow_int(offset / 60);
  minuteOffset = ju.padTwo(jl.abs_0(offset) % 60);
  return (ju.$clinit_Date$StringData() , ju.DAYS)[cggcc.$getDay(this.jsdate)] + ' ' + (ju.$clinit_Date$StringData() , ju.MONTHS)[cggcc.$getMonth(this.jsdate)] + ' ' + ju.padTwo(cggcc.$getDate(this.jsdate)) + ' ' + ju.padTwo(cggcc.$getHours(this.jsdate)) + ':' + ju.padTwo(cggcc.$getMinutes(this.jsdate)) + ':' + ju.padTwo(cggcc.$getSeconds(this.jsdate)) + ' GMT' + hourOffset + minuteOffset + ' ' + cggcc.$getFullYear(this.jsdate);
}
;
ju.ONE_HOUR_IN_MILLISECONDS = {l:0, m:0, h:0};
cggl.Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 74, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Date$StringData = function $clinit_Date$StringData(){
  ju.$clinit_Date$StringData = emptyMethod;
  jl.$clinit_Object();
  ju.DAYS = initValues(getClassLiteralForArray(cggl.Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  ju.MONTHS = initValues(getClassLiteralForArray(cggl.Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}
;
defineClass(440, 1, $intern_0);
ju.$clinit_Deque = function $clinit_Deque(){
  ju.$clinit_Deque = emptyMethod;
}
;
ju.$clinit_Enumeration = function $clinit_Enumeration(){
  ju.$clinit_Enumeration = emptyMethod;
}
;
ju.$clinit_HashMap = function $clinit_HashMap(){
  ju.$clinit_HashMap = emptyMethod;
  ju.$clinit_AbstractHashMap();
}
;
ju.HashMap = function HashMap(){
  ju.$clinit_HashMap();
  ju.AbstractHashMap.call(this);
  this.$init_205();
}
;
defineClass(17, 121, $intern_33, ju.HashMap);
_.$init_205 = function $init_205(){
}
;
_.equals = function equals_24(value1, value2){
  return ju.equals_25(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key){
  var hashCode;
  hashCode = jl.hashCode__I__devirtual$(key);
  return cggcci.ensureInt(hashCode);
}
;
cggl.Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 17, cggl.Ljava_util_AbstractHashMap_2_classLit);
ju.$clinit_InternalJsHashCodeMap = function $clinit_InternalJsHashCodeMap(){
  ju.$clinit_InternalJsHashCodeMap = emptyMethod;
  jl.$clinit_Object();
}
;
ju.InternalJsHashCodeMap = function InternalJsHashCodeMap(){
  ju.$clinit_InternalJsHashCodeMap();
  Object_0.call(this);
  this.$init_206();
}
;
ju.splice_2 = function splice_2(arr, index_0){
  arr.splice(index_0, 1);
}
;
defineClass(90, 1, $intern_0, ju.InternalJsHashCodeMap);
_.$init_206 = function $init_206(){
  this.backingMap = this.createMap();
}
;
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.ensureChain = function ensureChain(hashCode){
  var map_0 = this.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}
;
_.entries = function entries(){
  return new ju.InternalJsHashCodeMap$1(this);
}
;
_.getChain = function getChain(hashCode){
  ju.$clinit_InternalJsHashCodeMap();
  return this.backingMap[hashCode];
}
;
_.getChainOrEmpty = function getChainOrEmpty(hashCode){
  return this.backingMap[hashCode] || [];
}
;
_.getEntry = function getEntry(key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = this.getChainOrEmpty(this.hash(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this.host.equals(key, entry.getKey_0())) {
      return entry;
    }
  }
  return null;
}
;
_.hash = function hash(key){
  return jsEquals(key, null)?'0':jl.valueOf_21(this.host.getHashCode(key));
}
;
_.keys_1 = function keys_1(){
  ju.$clinit_InternalJsHashCodeMap();
  return Object.getOwnPropertyNames(this.backingMap);
}
;
_.put_0 = function put_3(key, value_0){
  var chain, entry, entry$array, entry$index, entry$max;
  chain = this.ensureChain(this.hash(key));
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this.host.equals(key, entry.getKey_0())) {
      return entry.setValue(value_0);
    }
  }
  chain[chain.length] = new ju.AbstractMap$SimpleEntry(key, value_0);
  this.host.elementAdded();
  return null;
}
;
_.remove_0 = function remove_14(key){
  var chain, entry, hashCode, i_0;
  hashCode = this.hash(key);
  chain = this.getChainOrEmpty(hashCode);
  for (i_0 = 0; i_0 < chain.length; i_0++) {
    entry = chain[i_0];
    if (this.host.equals(key, entry.getKey_0())) {
      if (chain.length == 1) {
        this.removeChain(hashCode);
      }
       else {
        ju.splice_2(chain, i_0);
      }
      this.host.elementRemoved();
      return entry.getValue_1();
    }
  }
  return null;
}
;
_.removeChain = function removeChain(hashCode){
  delete this.backingMap[hashCode];
}
;
cggl.Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 90, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsHashCodeMap$1 = function $clinit_InternalJsHashCodeMap$1(){
  ju.$clinit_InternalJsHashCodeMap$1 = emptyMethod;
  jl.$clinit_Object();
}
;
ju.InternalJsHashCodeMap$1 = function InternalJsHashCodeMap$1(this$0){
  ju.$clinit_InternalJsHashCodeMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_207();
}
;
defineClass(159, 1, $intern_0, ju.InternalJsHashCodeMap$1);
_.$init_207 = function $init_207(){
  this.keys_0 = this.this$01.keys_1();
  this.chainIndex = -1;
  this.itemIndex = 0;
  this.chain = initDim(cggl.Ljava_util_Map$Entry_2_classLit, $intern_2, 25, 0, 0, 1);
  this.lastChain = null;
  this.lastEntry = null;
}
;
_.hasNext = function hasNext_5(){
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  if (this.chainIndex < this.keys_0.length - 1) {
    this.chain = this.this$01.getChain(this.keys_0[++this.chainIndex]);
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.next_0 = function next_8(){
  return this.next_1();
}
;
_.next_1 = function next_9(){
  cggcsi.checkElement(this.hasNext());
  this.lastChain = this.chain;
  this.lastEntry = this.chain[this.itemIndex++];
  return this.lastEntry;
}
;
_.remove_1 = function remove_15(){
  cggcsi.checkState(isNotNull(this.lastEntry));
  this.this$01.remove_0(this.lastEntry.getKey_0());
  if (maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1) {
    this.itemIndex--;
  }
  this.lastEntry = null;
}
;
_.chainIndex = 0;
_.itemIndex = 0;
cggl.Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 159, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy = function $clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  ju.$clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy = emptyMethod;
  ju.$clinit_InternalJsHashCodeMap();
}
;
ju.InternalJsHashCodeMap$InternalJsHashCodeMapLegacy = function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  ju.$clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy();
  ju.InternalJsHashCodeMap.call(this);
  this.$init_208();
}
;
defineClass(157, 90, $intern_0, ju.InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.$init_208 = function $init_208(){
}
;
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
        list.add_1(array[i_0]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new ju.InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
cggl.Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 157, cggl.Ljava_util_InternalJsHashCodeMap_2_classLit);
ju.$clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1 = function $clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ju.$clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1 = emptyMethod;
  ju.$clinit_ArrayList();
}
;
ju.InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1 = function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  ju.$clinit_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1();
  this.this$11 = this$1;
  ju.ArrayList.call(this);
  this.$init_209();
}
;
defineClass(158, 31, $intern_32, ju.InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.$init_209 = function $init_209(){
}
;
_.remove_2 = function remove_16(index_0){
  return this.remove_3(index_0);
}
;
_.remove_3 = function remove_17(index_0){
  var removed;
  removed = getClassPrototype(31).remove_2.call(this, index_0);
  this.this$11.remove_0(removed.getKey_0());
  return removed;
}
;
cggl.Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 158, cggl.Ljava_util_ArrayList_2_classLit);
ju.$clinit_InternalJsMapFactory = function $clinit_InternalJsMapFactory(){
  ju.$clinit_InternalJsMapFactory = emptyMethod;
  jl.$clinit_Object();
}
;
ju.InternalJsMapFactory = function InternalJsMapFactory(){
  ju.$clinit_InternalJsMapFactory();
  Object_0.call(this);
  this.$init_210();
}
;
defineClass(62, 1, $intern_0, ju.InternalJsMapFactory);
_.$init_210 = function $init_210(){
}
;
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new ju.InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new ju.InternalJsStringMap;
}
;
cggl.Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 62, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  ju.$clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  ju.$clinit_InternalJsMapFactory();
  ju.delegate = ju.createFactory();
}
;
ju.InternalJsMapFactory$BackwardCompatibleJsMapFactory = function InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  ju.$clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  ju.InternalJsMapFactory.call(this);
  this.$init_211();
}
;
ju.canHandleProto = function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}
;
ju.createFactory = function createFactory(){
  if (ju.isModern() && ju.canHandleProto()) {
    return ju.needsKeysWorkaround()?new ju.InternalJsMapFactory$KeysWorkaroundJsMapFactory:new ju.InternalJsMapFactory;
  }
  return new ju.InternalJsMapFactory$LegacyInternalJsMapFactory;
}
;
ju.isModern = function isModern(){
  return Object.create && Object.getOwnPropertyNames;
}
;
ju.needsKeysWorkaround = function needsKeysWorkaround(){
  var map_0 = Object.create(null);
  map_0['__proto__'] = 42;
  return Object.getOwnPropertyNames(map_0).length == 0;
}
;
defineClass(156, 62, $intern_0, ju.InternalJsMapFactory$BackwardCompatibleJsMapFactory);
_.$init_211 = function $init_211(){
}
;
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return ju.delegate.createJsHashCodeMap();
}
;
_.createJsStringMap = function createJsStringMap_0(){
  return ju.delegate.createJsStringMap();
}
;
cggl.Ljava_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/BackwardCompatibleJsMapFactory', 156, cggl.Ljava_util_InternalJsMapFactory_2_classLit);
ju.$clinit_InternalJsMapFactory$KeysWorkaroundJsMapFactory = function $clinit_InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
  ju.$clinit_InternalJsMapFactory$KeysWorkaroundJsMapFactory = emptyMethod;
  ju.$clinit_InternalJsMapFactory();
}
;
ju.InternalJsMapFactory$KeysWorkaroundJsMapFactory = function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
  ju.$clinit_InternalJsMapFactory$KeysWorkaroundJsMapFactory();
  ju.InternalJsMapFactory.call(this);
  this.$init_212();
}
;
defineClass(155, 62, $intern_0, ju.InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.$init_212 = function $init_212(){
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new ju.InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
cggl.Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 155, cggl.Ljava_util_InternalJsMapFactory_2_classLit);
ju.$clinit_InternalJsMapFactory$LegacyInternalJsMapFactory = function $clinit_InternalJsMapFactory$LegacyInternalJsMapFactory(){
  ju.$clinit_InternalJsMapFactory$LegacyInternalJsMapFactory = emptyMethod;
  ju.$clinit_InternalJsMapFactory();
}
;
ju.InternalJsMapFactory$LegacyInternalJsMapFactory = function InternalJsMapFactory$LegacyInternalJsMapFactory(){
  ju.$clinit_InternalJsMapFactory$LegacyInternalJsMapFactory();
  ju.InternalJsMapFactory.call(this);
  this.$init_213();
}
;
defineClass(154, 62, $intern_0, ju.InternalJsMapFactory$LegacyInternalJsMapFactory);
_.$init_213 = function $init_213(){
}
;
_.createJsHashCodeMap = function createJsHashCodeMap_1(){
  return new ju.InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_2(){
  return new ju.InternalJsStringMap$InternalJsStringMapLegacy;
}
;
cggl.Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 154, cggl.Ljava_util_InternalJsMapFactory_2_classLit);
ju.$clinit_InternalJsStringMap = function $clinit_InternalJsStringMap(){
  ju.$clinit_InternalJsStringMap = emptyMethod;
  jl.$clinit_Object();
}
;
ju.InternalJsStringMap = function InternalJsStringMap(){
  ju.$clinit_InternalJsStringMap();
  Object_0.call(this);
  this.$init_214();
}
;
ju.isUndefined = function isUndefined(value_0){
  return value_0 === undefined;
}
;
ju.toNullIfUndefined = function toNullIfUndefined(value_0){
  return ju.isUndefined(value_0)?null:value_0;
}
;
defineClass(38, 1, $intern_0, ju.InternalJsStringMap);
_.$init_214 = function $init_214(){
  this.backingMap = this.createMap_0();
}
;
_.at = function at(key){
  return this.backingMap[key];
}
;
_.contains_0 = function contains_9(key){
  return !ju.isUndefined(this.get_4(key));
}
;
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.delete_$ = function delete_$(key){
  delete this.backingMap[key];
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_2();
  return new ju.InternalJsStringMap$1(this, keys_0);
}
;
_.get_4 = function get_14(key){
  return this.at(key);
}
;
_.keys_2 = function keys_2(){
  return Object.getOwnPropertyNames(this.backingMap);
}
;
_.newMapEntry = function newMapEntry(key){
  return new ju.InternalJsStringMap$2(this, key);
}
;
_.put_1 = function put_4(key, value_0){
  var oldValue;
  oldValue = this.at(key);
  if (ju.isUndefined(oldValue)) {
    this.host.elementAdded();
  }
  this.set_1(key, ju.toNullIfUndefined(value_0));
  return oldValue;
}
;
_.remove_4 = function remove_18(key){
  var value_0;
  value_0 = this.at(key);
  if (!ju.isUndefined(value_0)) {
    this.delete_$(key);
    this.host.elementRemoved();
  }
  return value_0;
}
;
_.set_1 = function set_3(key, value_0){
  this.backingMap[key] = value_0;
}
;
cggl.Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 38, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsStringMap$1 = function $clinit_InternalJsStringMap$1(){
  ju.$clinit_InternalJsStringMap$1 = emptyMethod;
  jl.$clinit_Object();
}
;
ju.InternalJsStringMap$1 = function InternalJsStringMap$1(this$0, val$keys){
  ju.$clinit_InternalJsStringMap$1();
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
  Object_0.call(this);
  this.$init_215();
}
;
defineClass(150, 1, $intern_0, ju.InternalJsStringMap$1);
_.$init_215 = function $init_215(){
  this.i = 0;
  this.last = -1;
}
;
_.hasNext = function hasNext_6(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_10(){
  return this.next_1();
}
;
_.next_1 = function next_11(){
  cggcsi.checkElement(this.hasNext());
  return this.this$01.newMapEntry(this.val$keys2[this.last = this.i++]);
}
;
_.remove_1 = function remove_19(){
  cggcsi.checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
cggl.Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 150, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsStringMap$2 = function $clinit_InternalJsStringMap$2(){
  ju.$clinit_InternalJsStringMap$2 = emptyMethod;
  ju.$clinit_AbstractMapEntry();
}
;
ju.InternalJsStringMap$2 = function InternalJsStringMap$2(this$0, val$key){
  ju.$clinit_InternalJsStringMap$2();
  this.this$01 = this$0;
  this.val$key2 = val$key;
  ju.AbstractMapEntry.call(this);
  this.$init_216();
}
;
defineClass(152, 151, $intern_31, ju.InternalJsStringMap$2);
_.$init_216 = function $init_216(){
}
;
_.getKey_0 = function getKey_2(){
  return this.val$key2;
}
;
_.getValue_1 = function getValue_9(){
  return this.this$01.get_4(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put_1(this.val$key2, object);
}
;
cggl.Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 152, cggl.Ljava_util_AbstractMapEntry_2_classLit);
ju.$clinit_InternalJsStringMap$InternalJsStringMapLegacy = function $clinit_InternalJsStringMap$InternalJsStringMapLegacy(){
  ju.$clinit_InternalJsStringMap$InternalJsStringMapLegacy = emptyMethod;
  ju.$clinit_InternalJsStringMap();
}
;
ju.InternalJsStringMap$InternalJsStringMapLegacy = function InternalJsStringMap$InternalJsStringMapLegacy(){
  ju.$clinit_InternalJsStringMap$InternalJsStringMapLegacy();
  ju.InternalJsStringMap.call(this);
  this.$init_217();
}
;
defineClass(147, 38, $intern_0, ju.InternalJsStringMap$InternalJsStringMapLegacy);
_.$init_217 = function $init_217(){
}
;
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_4 = function get_15(key){
  return getClassPrototype(38).get_4.call(this, this.normalize(key));
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new ju.InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.normalize = function normalize(key){
  return ':' + key;
}
;
_.put_1 = function put_5(key, value_0){
  return getClassPrototype(38).put_1.call(this, this.normalize(key), value_0);
}
;
_.remove_4 = function remove_20(key){
  return getClassPrototype(38).remove_4.call(this, this.normalize(key));
}
;
cggl.Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 147, cggl.Ljava_util_InternalJsStringMap_2_classLit);
ju.$clinit_InternalJsStringMap$InternalJsStringMapLegacy$1 = function $clinit_InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ju.$clinit_InternalJsStringMap$InternalJsStringMapLegacy$1 = emptyMethod;
  ju.$clinit_ArrayList();
}
;
ju.InternalJsStringMap$InternalJsStringMapLegacy$1 = function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  ju.$clinit_InternalJsStringMap$InternalJsStringMapLegacy$1();
  this.this$11 = this$1;
  ju.ArrayList.call(this);
  this.$init_218();
}
;
defineClass(149, 31, $intern_32, ju.InternalJsStringMap$InternalJsStringMapLegacy$1);
_.$init_218 = function $init_218(){
}
;
_.remove_2 = function remove_21(index_0){
  return this.remove_3(index_0);
}
;
_.remove_3 = function remove_22(index_0){
  var removed;
  removed = getClassPrototype(31).remove_2.call(this, index_0);
  this.this$11.remove_4(removed.getKey_0());
  return removed;
}
;
cggl.Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 149, cggl.Ljava_util_ArrayList_2_classLit);
ju.$clinit_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround = function $clinit_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  ju.$clinit_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround = emptyMethod;
  ju.$clinit_InternalJsStringMap();
}
;
ju.InternalJsStringMap$InternalJsStringMapWithKeysWorkaround = function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  ju.$clinit_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround();
  ju.InternalJsStringMap.call(this);
  this.$init_219();
}
;
defineClass(148, 38, $intern_0, ju.InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.$init_219 = function $init_219(){
}
;
_.keys_2 = function keys_3(){
  var keys_0;
  keys_0 = getClassPrototype(38).keys_2.call(this);
  if (this.contains_0('__proto__')) {
    keys_0[keys_0.length] = '__proto__';
  }
  return keys_0;
}
;
ju.PROTO = '__proto__';
cggl.Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 148, cggl.Ljava_util_InternalJsStringMap_2_classLit);
ju.$clinit_Iterator = function $clinit_Iterator(){
  ju.$clinit_Iterator = emptyMethod;
}
;
ju.$clinit_LinkedList = function $clinit_LinkedList(){
  ju.$clinit_LinkedList = emptyMethod;
  ju.$clinit_AbstractSequentialList();
}
;
ju.LinkedList = function LinkedList(){
  ju.$clinit_LinkedList();
  ju.AbstractSequentialList.call(this);
  this.$init_220();
  this.reset_1();
}
;
defineClass(223, 222, $intern_35, ju.LinkedList);
_.$init_220 = function $init_220(){
  this.header = new ju.LinkedList$Node;
  this.tail = new ju.LinkedList$Node;
}
;
_.add_1 = function add_14(o){
  this.addLast(o);
  return true;
}
;
_.addFirst = function addFirst(o){
  this.addNode(o, this.header, this.header.next);
}
;
_.addLast = function addLast(o){
  this.addNode(o, this.tail.prev, this.tail);
}
;
_.addNode = function addNode(o, prev, next){
  ju.$clinit_LinkedList();
  var node;
  node = new ju.LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next = next;
  next.prev = prev.next = node;
  ++this.size_0;
}
;
_.clear_0 = function clear_10(){
  this.reset_1();
}
;
_.listIterator_0 = function listIterator_4(index_0){
  var i_0, node;
  cggcsi.checkPositionIndex(index_0, this.size_0);
  if (index_0 >= this.size_0 >> 1) {
    node = this.tail;
    for (i_0 = this.size_0; i_0 > index_0; --i_0) {
      node = node.prev;
    }
  }
   else {
    node = this.header.next;
    for (i_0 = 0; i_0 < index_0; ++i_0) {
      node = node.next;
    }
  }
  return new ju.LinkedList$ListIteratorImpl(this, index_0, node);
}
;
_.offer = function offer(o){
  return this.offerLast(o);
}
;
_.offerFirst = function offerFirst(e){
  this.addFirst(e);
  return true;
}
;
_.offerLast = function offerLast(e){
  this.addLast(e);
  return true;
}
;
_.poll = function poll(){
  return this.pollFirst();
}
;
_.pollFirst = function pollFirst(){
  return this.size_0 == 0?null:this.removeFirst();
}
;
_.removeFirst = function removeFirst(){
  cggcsi.checkElement(this.size_0 != 0);
  return this.removeNode(this.header.next);
}
;
_.removeNode = function removeNode(node){
  ju.$clinit_LinkedList();
  var oldValue;
  oldValue = node.value_0;
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = node.prev = null;
  node.value_0 = null;
  --this.size_0;
  return oldValue;
}
;
_.reset_1 = function reset_1(){
  this.header.next = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next = null;
  this.size_0 = 0;
}
;
_.size_1 = function size_16(){
  return this.size_0;
}
;
_.size_0 = 0;
cggl.Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 223, cggl.Ljava_util_AbstractSequentialList_2_classLit);
ju.$clinit_LinkedList$DescendingIteratorImpl = function $clinit_LinkedList$DescendingIteratorImpl(){
  ju.$clinit_LinkedList$DescendingIteratorImpl = emptyMethod;
}
;
defineClass(427, 1, $intern_0);
ju.$clinit_LinkedList$ListIteratorImpl = function $clinit_LinkedList$ListIteratorImpl(){
  ju.$clinit_LinkedList$ListIteratorImpl = emptyMethod;
  jl.$clinit_Object();
}
;
ju.LinkedList$ListIteratorImpl = function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  ju.$clinit_LinkedList$ListIteratorImpl();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_221();
  this.currentNode = startNode;
  this.currentIndex = index_0;
}
;
defineClass(224, 1, $intern_0, ju.LinkedList$ListIteratorImpl);
_.$init_221 = function $init_221(){
  this.lastNode = null;
}
;
_.add_3 = function add_15(o){
  this.this$01.addNode(o, this.currentNode.prev, this.currentNode);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext = function hasNext_7(){
  return jsNotEquals(this.currentNode, this.this$01.tail);
}
;
_.next_0 = function next_12(){
  cggcsi.checkElement(this.hasNext());
  this.lastNode = this.currentNode;
  this.currentNode = this.currentNode.next;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_1 = function remove_23(){
  var nextNode;
  cggcsi.checkState(isNotNull(this.lastNode));
  nextNode = this.lastNode.next;
  this.this$01.removeNode(this.lastNode);
  if (jsEquals(this.currentNode, this.lastNode)) {
    this.currentNode = nextNode;
  }
   else {
    --this.currentIndex;
  }
  this.lastNode = null;
}
;
_.currentIndex = 0;
cggl.Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 224, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_LinkedList$Node = function $clinit_LinkedList$Node(){
  ju.$clinit_LinkedList$Node = emptyMethod;
  jl.$clinit_Object();
}
;
ju.LinkedList$Node = function LinkedList$Node(){
  ju.$clinit_LinkedList$Node();
  Object_0.call(this);
  this.$init_222();
}
;
defineClass(71, 1, $intern_0, ju.LinkedList$Node);
_.$init_222 = function $init_222(){
}
;
cggl.Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 71, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_List = function $clinit_List(){
  ju.$clinit_List = emptyMethod;
}
;
ju.$clinit_ListIterator = function $clinit_ListIterator(){
  ju.$clinit_ListIterator = emptyMethod;
}
;
ju.$clinit_Map = function $clinit_Map(){
  ju.$clinit_Map = emptyMethod;
}
;
ju.$clinit_Map$Entry = function $clinit_Map$Entry(){
  ju.$clinit_Map$Entry = emptyMethod;
}
;
cggl.Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry', 25, null);
ju.$clinit_NoSuchElementException = function $clinit_NoSuchElementException(){
  ju.$clinit_NoSuchElementException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
ju.NoSuchElementException = function NoSuchElementException(){
  ju.$clinit_NoSuchElementException();
  jl.RuntimeException.call(this);
  this.$init_223();
}
;
defineClass(52, 8, {3:1, 7:1, 1:1, 8:1, 9:1, 52:1}, ju.NoSuchElementException);
_.$init_223 = function $init_223(){
}
;
cggl.Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 52, cggl.Ljava_lang_RuntimeException_2_classLit);
ju.$clinit_Objects = function $clinit_Objects(){
  ju.$clinit_Objects = emptyMethod;
  jl.$clinit_Object();
}
;
ju.equals_25 = function equals_25(a, b){
  ju.$clinit_Objects();
  return maskUndefined(a) === maskUndefined(b) || jsNotEquals(a, null) && jl.equals_Ljava_lang_Object__Z__devirtual$(a, b);
}
;
ju.hash_0 = function hash_0(values){
  ju.$clinit_Objects();
  return ju.hashCode_27(values);
}
;
ju.hashCode_35 = function hashCode_35(o){
  ju.$clinit_Objects();
  return jsNotEquals(o, null)?jl.hashCode__I__devirtual$(o):0;
}
;
defineClass(369, 1, $intern_0);
ju.$clinit_Queue = function $clinit_Queue(){
  ju.$clinit_Queue = emptyMethod;
}
;
ju.$clinit_RandomAccess = function $clinit_RandomAccess(){
  ju.$clinit_RandomAccess = emptyMethod;
}
;
ju.$clinit_Set = function $clinit_Set(){
  ju.$clinit_Set = emptyMethod;
}
;
ju.$clinit_SortedMap = function $clinit_SortedMap(){
  ju.$clinit_SortedMap = emptyMethod;
}
;
ju.$clinit_SortedSet = function $clinit_SortedSet(){
  ju.$clinit_SortedSet = emptyMethod;
}
;
jul.$clinit_Level = function $clinit_Level(){
  jul.$clinit_Level = emptyMethod;
  jl.$clinit_Object();
  jul.staticImpl = new cggli.LevelImplRegular;
  jul.ALL = new jul.Level$LevelAll;
  jul.CONFIG = new jul.Level$LevelConfig;
  jul.FINE = new jul.Level$LevelFine;
  jul.FINER = new jul.Level$LevelFiner;
  jul.FINEST = new jul.Level$LevelFinest;
  jul.INFO = new jul.Level$LevelInfo;
  jul.OFF = new jul.Level$LevelOff;
  jul.SEVERE = new jul.Level$LevelSevere;
  jul.WARNING = new jul.Level$LevelWarning;
}
;
jul.Level = function Level(){
  jul.$clinit_Level();
  Object_0.call(this);
  this.$init_224();
}
;
jul.parse_3 = function parse_3(name_0){
  jul.$clinit_Level();
  return jul.staticImpl.parse_1(name_0);
}
;
defineClass(32, 1, $intern_7);
_.$init_224 = function $init_224(){
}
;
_.getName = function getName_2(){
  return 'DUMMY';
}
;
_.intValue_0 = function intValue_5(){
  return -1;
}
;
_.toString$ = function toString_38(){
  return this.getName();
}
;
cggl.Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 32, cggl.Ljava_lang_Object_2_classLit);
jul.$clinit_Level$LevelAll = function $clinit_Level$LevelAll(){
  jul.$clinit_Level$LevelAll = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelAll = function Level$LevelAll(){
  jul.$clinit_Level$LevelAll();
  jul.Level.call(this);
  this.$init_225();
}
;
defineClass(166, 32, $intern_7, jul.Level$LevelAll);
_.$init_225 = function $init_225(){
}
;
_.getName = function getName_3(){
  return 'ALL';
}
;
_.intValue_0 = function intValue_6(){
  return -2147483648;
}
;
cggl.Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 166, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelConfig = function $clinit_Level$LevelConfig(){
  jul.$clinit_Level$LevelConfig = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelConfig = function Level$LevelConfig(){
  jul.$clinit_Level$LevelConfig();
  jul.Level.call(this);
  this.$init_226();
}
;
defineClass(167, 32, $intern_7, jul.Level$LevelConfig);
_.$init_226 = function $init_226(){
}
;
_.getName = function getName_4(){
  return 'CONFIG';
}
;
_.intValue_0 = function intValue_7(){
  return 700;
}
;
cggl.Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 167, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelFine = function $clinit_Level$LevelFine(){
  jul.$clinit_Level$LevelFine = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelFine = function Level$LevelFine(){
  jul.$clinit_Level$LevelFine();
  jul.Level.call(this);
  this.$init_227();
}
;
defineClass(168, 32, $intern_7, jul.Level$LevelFine);
_.$init_227 = function $init_227(){
}
;
_.getName = function getName_5(){
  return 'FINE';
}
;
_.intValue_0 = function intValue_8(){
  return 500;
}
;
cggl.Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 168, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelFiner = function $clinit_Level$LevelFiner(){
  jul.$clinit_Level$LevelFiner = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelFiner = function Level$LevelFiner(){
  jul.$clinit_Level$LevelFiner();
  jul.Level.call(this);
  this.$init_228();
}
;
defineClass(169, 32, $intern_7, jul.Level$LevelFiner);
_.$init_228 = function $init_228(){
}
;
_.getName = function getName_6(){
  return 'FINER';
}
;
_.intValue_0 = function intValue_9(){
  return 400;
}
;
cggl.Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 169, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelFinest = function $clinit_Level$LevelFinest(){
  jul.$clinit_Level$LevelFinest = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelFinest = function Level$LevelFinest(){
  jul.$clinit_Level$LevelFinest();
  jul.Level.call(this);
  this.$init_229();
}
;
defineClass(170, 32, $intern_7, jul.Level$LevelFinest);
_.$init_229 = function $init_229(){
}
;
_.getName = function getName_7(){
  return 'FINEST';
}
;
_.intValue_0 = function intValue_10(){
  return 300;
}
;
cggl.Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 170, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelInfo = function $clinit_Level$LevelInfo(){
  jul.$clinit_Level$LevelInfo = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelInfo = function Level$LevelInfo(){
  jul.$clinit_Level$LevelInfo();
  jul.Level.call(this);
  this.$init_230();
}
;
defineClass(171, 32, $intern_7, jul.Level$LevelInfo);
_.$init_230 = function $init_230(){
}
;
_.getName = function getName_8(){
  return 'INFO';
}
;
_.intValue_0 = function intValue_11(){
  return 800;
}
;
cggl.Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 171, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelOff = function $clinit_Level$LevelOff(){
  jul.$clinit_Level$LevelOff = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelOff = function Level$LevelOff(){
  jul.$clinit_Level$LevelOff();
  jul.Level.call(this);
  this.$init_231();
}
;
defineClass(172, 32, $intern_7, jul.Level$LevelOff);
_.$init_231 = function $init_231(){
}
;
_.getName = function getName_9(){
  return 'OFF';
}
;
_.intValue_0 = function intValue_12(){
  return $intern_1;
}
;
cggl.Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 172, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelSevere = function $clinit_Level$LevelSevere(){
  jul.$clinit_Level$LevelSevere = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelSevere = function Level$LevelSevere(){
  jul.$clinit_Level$LevelSevere();
  jul.Level.call(this);
  this.$init_232();
}
;
defineClass(173, 32, $intern_7, jul.Level$LevelSevere);
_.$init_232 = function $init_232(){
}
;
_.getName = function getName_10(){
  return 'SEVERE';
}
;
_.intValue_0 = function intValue_13(){
  return 1000;
}
;
cggl.Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 173, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_Level$LevelWarning = function $clinit_Level$LevelWarning(){
  jul.$clinit_Level$LevelWarning = emptyMethod;
  jul.$clinit_Level();
}
;
jul.Level$LevelWarning = function Level$LevelWarning(){
  jul.$clinit_Level$LevelWarning();
  jul.Level.call(this);
  this.$init_233();
}
;
defineClass(174, 32, $intern_7, jul.Level$LevelWarning);
_.$init_233 = function $init_233(){
}
;
_.getName = function getName_11(){
  return 'WARNING';
}
;
_.intValue_0 = function intValue_14(){
  return 900;
}
;
cggl.Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 174, cggl.Ljava_util_logging_Level_2_classLit);
jul.$clinit_LogManager = function $clinit_LogManager(){
  jul.$clinit_LogManager = emptyMethod;
  jl.$clinit_Object();
}
;
jul.LogManager = function LogManager(){
  Object_0.call(this);
  this.$init_234();
}
;
jul.getLogManager = function getLogManager(){
  jul.$clinit_LogManager();
  var rootLogger;
  if (isNull(jul.singleton)) {
    jul.singleton = new jul.LogManager;
    rootLogger = new jul.Logger('', null);
    rootLogger.setLevel((jul.$clinit_Level() , jul.INFO));
    jul.singleton.addLoggerImpl(rootLogger);
  }
  return jul.singleton;
}
;
defineClass(153, 1, $intern_0, jul.LogManager);
_.$init_234 = function $init_234(){
  this.loggerConfigurator = new cggli.LoggerConfiguratorNull;
  this.loggerMap = new ju.HashMap;
}
;
_.addLoggerAndEnsureParents = function addLoggerAndEnsureParents(logger){
  var name_0, parentName;
  name_0 = logger.getName();
  parentName = jl.substring_II_Ljava_lang_String___devirtual$(name_0, 0, jl.max_0(0, jl.lastIndexOf_I_I__devirtual$(name_0, 46)));
  logger.setParent(this.ensureLogger(parentName));
  this.addLoggerImpl(logger);
}
;
_.addLoggerImpl = function addLoggerImpl(logger){
  this.loggerConfigurator.configure(logger);
  this.loggerMap.put_0(logger.getName(), logger);
}
;
_.ensureLogger = function ensureLogger(name_0){
  var logger, newLogger;
  logger = this.getLogger(name_0);
  if (isNull(logger)) {
    newLogger = new jul.Logger(name_0, null);
    this.addLoggerAndEnsureParents(newLogger);
    return newLogger;
  }
  return logger;
}
;
_.getLogger = function getLogger(name_0){
  return this.loggerMap.get_2(name_0);
}
;
cggl.Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 153, cggl.Ljava_lang_Object_2_classLit);
jul.$clinit_LogRecord = function $clinit_LogRecord(){
  jul.$clinit_LogRecord = emptyMethod;
  jl.$clinit_Object();
}
;
jul.LogRecord = function LogRecord(level, msg){
  jul.$clinit_LogRecord();
  Object_0.call(this);
  this.$init_235();
  this.level_0 = level;
  this.msg = msg;
  this.millis = jl.currentTimeMillis_0();
}
;
defineClass(208, 1, $intern_7, jul.LogRecord);
_.$init_235 = function $init_235(){
  this.loggerName = '';
  this.thrown = null;
}
;
_.getLevel = function getLevel_2(){
  return this.level_0;
}
;
_.getLoggerName = function getLoggerName(){
  return this.loggerName;
}
;
_.getMessage = function getMessage_1(){
  return this.msg;
}
;
_.getMillis = function getMillis(){
  return this.millis;
}
;
_.getThrown_0 = function getThrown_0(){
  return this.thrown;
}
;
_.setLevel = function setLevel_1(newLevel){
  this.level_0 = newLevel;
}
;
_.setLoggerName = function setLoggerName(newName){
  this.loggerName = newName;
}
;
_.setThrown = function setThrown(newThrown){
  this.thrown = newThrown;
}
;
_.millis = {l:0, m:0, h:0};
cggl.Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 208, cggl.Ljava_lang_Object_2_classLit);
jul.$clinit_Logger = function $clinit_Logger(){
  jul.$clinit_Logger = emptyMethod;
  jl.$clinit_Object();
}
;
jul.Logger = function Logger(name_0, resourceName){
  jul.$clinit_Logger();
  Object_0.call(this);
  this.$init_236();
  this.impl = new cggli.LoggerImplRegular;
  this.impl.setName(name_0);
}
;
jul.getLogger_0 = function getLogger_0(name_0){
  jul.$clinit_Logger();
  if (instanceOf(new cggli.LoggerImplRegular, 254)) {
    return new jul.Logger(name_0, '');
  }
  return jul.getLogManager().ensureLogger(name_0);
}
;
defineClass(67, 1, $intern_0, jul.Logger);
_.$init_236 = function $init_236(){
}
;
_.addHandler = function addHandler_0(handler){
  this.impl.addHandler(handler);
}
;
_.getHandlers = function getHandlers_0(){
  return this.impl.getHandlers();
}
;
_.getLevel = function getLevel_3(){
  return this.impl.getLevel();
}
;
_.getName = function getName_12(){
  return this.impl.getName();
}
;
_.getParent = function getParent_0(){
  return this.impl.getParent();
}
;
_.getUseParentHandlers = function getUseParentHandlers_0(){
  return this.impl.getUseParentHandlers();
}
;
_.isLoggable_0 = function isLoggable_1(messageLevel){
  return this.impl.isLoggable_0(messageLevel);
}
;
_.log_2 = function log_10(level, msg){
  this.impl.log_2(level, msg);
}
;
_.log_3 = function log_11(level, msg, thrown){
  this.impl.log_3(level, msg, thrown);
}
;
_.log_4 = function log_12(record){
  this.impl.log_4(record);
}
;
_.setLevel = function setLevel_2(newLevel){
  this.impl.setLevel(newLevel);
}
;
_.setParent = function setParent_0(newParent){
  this.impl.setParent(newParent);
}
;
_.setUseParentHandlers = function setUseParentHandlers_0(newUseParentHandlers){
  this.impl.setUseParentHandlers(newUseParentHandlers);
}
;
jul.GLOBAL_LOGGER_NAME = 'global';
cggl.Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 67, cggl.Ljava_lang_Object_2_classLit);
cggl.I_classLit = createForPrimitive('int', 'I');
cggl.Z_classLit = createForPrimitive('boolean', 'Z');
var Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler', 55, null);
var Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback', 100, null);
cggl.Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 238, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 240, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 242, cggl.Ljava_lang_Object_2_classLit);
cggl.B_classLit = createForPrimitive('byte', 'B');
cggl.D_classLit = createForPrimitive('double', 'D');
cggl.F_classLit = createForPrimitive('float', 'F');
cggl.J_classLit = createForPrimitive('long', 'J');
cggl.S_classLit = createForPrimitive('short', 'S');
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry', 25, null);
var $entry = registerEntry_0();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=priorityapp-0.js

