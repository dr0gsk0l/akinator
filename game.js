var l=0,r=5000;

document.getElementById("reset").onclick =function(){
  l=0,r=5000;
  bina();
}

function bina(){
  var mid=Math.floor((l+r)/2);
  document.getElementById("que").innerText='その人のレートは'+mid+'より大きいですか？'
  console.log('現在のmidは'+mid)
}

document.getElementById("bigger").onclick =function(){
  console.log('BIGが押された');
  if(r<l||r-l==1)document.write('矛盾');
  l=Math.floor((l+r)/2);
  bina();
}

document.getElementById("Bigger").onclick =function(){
  console.log('BIGが押された');
  if(r<l||r-l==1)document.write('矛盾');
  l=Math.floor((l+r)/2);
  bina();
}

document.getElementById("smaller").onclick =function(){
  console.log('SMALLが押された');
  if(r<l||r-l==1)document.write('矛盾');
  r=Math.floor((l+r)/2);
  bina();
}

document.getElementById("Smaller").onclick =function(){
  console.log('SMALLが押された');
  if(r<l||r-l==1)document.write('矛盾');
  r=Math.floor((l+r)/2);
  bina();
}

function ans(){
  return 'ここの実装まだ分かってない';
}

document.getElementById("just").onclick =function(){
  console.log('JUSTが押された');
  document.getElementById("que").innerText=(
    'あなたが考えているのは'+ans()+'ですね'
    );
}
