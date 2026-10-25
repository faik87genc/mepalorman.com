import sharp from "sharp";
const src="C:/Users/FAIKGENC/AppData/Local/Temp/claude/C--Users-FAIKGENC-Desktop-dusbelensk-com-tasarim3/3fc6fd13-804d-4371-8afc-ecf5c6976e57/images/";
const jobs=[["15.jpg","depo"],["16.jpg","forklift"],["17.jpg","euro-damga"],["18.jpg","kullanilmis"]];
for(const [f,n] of jobs){
  const m=await sharp(src+f).metadata();
  for(const w of [640,1280]){
    const out=`public/img/${n}-${w}.webp`;
    await sharp(src+f).resize({width:Math.min(w,m.width)}).webp({quality:74}).toFile(out);
  }
  console.log(n,m.width,m.height);
}
