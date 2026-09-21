'use strict';
// No autosave. Files are parsed as bounded data, never as source code.
let projectRevision=0,importSequence=0;
const controls=document.createElement('section');controls.className='project-controls';
const projectHeading=document.createElement('h3');projectHeading.textContent='把编排带走 · V1.1';
const projectHint=document.createElement('p');projectHint.className='hint';projectHint.textContent='手动保存JSON作品可继续编辑；它不是音频。载入最多8 KiB的JSON，校验通过并确认后才替换当前编排。不会自动保存或自动播放。';
const projectSave=document.createElement('button');projectSave.id='saveProject';projectSave.textContent='保存作品 JSON';
const projectLabel=document.createElement('label');projectLabel.textContent='载入作品 JSON';
const projectFile=document.createElement('input');projectFile.id='loadProject';projectFile.type='file';projectFile.accept='.json,application/json';projectLabel.append(projectFile);
controls.append(projectHeading,projectHint,projectSave,projectLabel);document.querySelector('.desk').append(controls);
document.querySelector('.desk').addEventListener('input',e=>{if(e.target!==projectFile)projectRevision++;});
document.querySelector('.desk').addEventListener('click',e=>{if(e.target.closest('.step,#clear,#reset,#new'))projectRevision++;});
projectSave.onclick=()=>{try{const text=OrbitProject.serialize({tempo:Number($('tempo').value),volume:Number($('volume').value),pattern});download(new Blob([text],{type:'application/json'}),'orbit-beats-project.json');tell('已请求下载作品JSON。请确认文件已保存在你的设备中；这里不会自动备份。');}catch(e){tell('无法保存作品：'+e.message);}};
projectFile.onchange=async()=>{
  const file=projectFile.files[0];if(!file)return;
  const sequence=++importSequence,revision=projectRevision;projectFile.disabled=true;
  try{
    if(!/\.json$/i.test(file.name))throw Error('仅接受.json作品文件');
    if(file.size>OrbitProject.MAX_BYTES)throw Error('作品文件超过8 KiB');
    const next=OrbitProject.parse(await file.text());
    if(sequence!==importSequence)return;
    if(revision!==projectRevision)throw Error('读取时编排已变化，请重新选择文件以免覆盖新编辑');
    if(!confirm('用此作品替换当前编排、速度和试听音量？尚未保存的编辑会丢失。')){tell('已取消载入，当前编排保持不变。');return;}
    stop();pattern=next.pattern;$('tempo').value=next.tempo;$('tempoValue').value=next.tempo;$('volume').value=next.volume;$('volumeValue').value=next.volume;cache=null;projectRevision++;grid();draw();tell('作品已载入。没有自动播放；试听前请检查设备音量。');
  }catch(e){if(sequence===importSequence)tell('载入失败，当前编排未替换：'+e.message);}
  finally{if(sequence===importSequence){projectFile.value='';projectFile.disabled=false;}}
};
