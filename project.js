(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.OrbitProject=api;})(globalThis,function(){
  'use strict';
  const MAX_BYTES=8192,keys=['format','version','tempo','volume','pattern'];
  function validate(value){
    if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).length!==keys.length||keys.some(k=>!Object.hasOwn(value,k)))throw Error('作品字段不完整或包含未知字段');
    if(value.format!=='orbit-beats-project'||value.version!==1)throw Error('不支持此作品格式或版本');
    if(!Number.isInteger(value.tempo)||value.tempo<60||value.tempo>140)throw Error('速度须为60—140的整数');
    if(!Number.isInteger(value.volume)||value.volume<0||value.volume>50)throw Error('试听音量须为0—50的整数');
    if(!Array.isArray(value.pattern)||value.pattern.length!==4||Array.from(value.pattern).some(row=>!Array.isArray(row)||row.length!==16||Array.from(row).some(v=>typeof v!=='boolean')))throw Error('节拍须为4×16布尔矩阵');
    return{format:'orbit-beats-project',version:1,tempo:value.tempo,volume:value.volume,pattern:value.pattern.map(row=>row.slice())};
  }
  function parse(text){if(typeof text!=='string'||text.length>MAX_BYTES)throw Error('作品内容过长');let value;try{value=JSON.parse(text.replace(/^\uFEFF/,''));}catch{throw Error('文件不是有效JSON');}return validate(value);}
  function serialize(state){return JSON.stringify(validate({format:'orbit-beats-project',version:1,...state}),null,2);}
  return{MAX_BYTES,validate,parse,serialize};
});
