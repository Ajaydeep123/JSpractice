//Code when we need to make multiple api calls
// https://openjavascript.info/2023/01/12/wait-for-multiple-fetch-requests-to-finish/
// https://openjavascript.info/handling-multiple-javascript-promises/ 
// https://github.com/Ajaydeep123/ReactPractice/commit/15a5441ed3a3e0228962ec365f7b303655e20a04#diff-be553993f5a6b10c7caef578449cd0b170363ad960378d5fde1d6005e307766e

// ---->>> imp resource


// const fetchNames = async () => {
//     try {
//       const res = await Promise.all([
//         fetch("https://api.sampleapis.com/coffee/hot"),
//         fetch("https://api.sampleapis.com/coffee/iced")
//       ]);
//       const data = await Promise.all(res.map(r => r.json()))
//       // console.log(data[0].title)
//       console.log(data[0].map(o=>o.title));
//       console.log(data[1].map(o=>o.title));
  
//     } catch {
//       throw Error("Promise failed");
//     }
//   };
//   fetchNames();

const fetchNames = async () => {
    try {
      const res = await Promise.all([
        fetch("https://api.sampleapis.com/coffee/hot"),
        fetch("https://api.sampleapis.com/coffee/iced")
      ]);
      const data = await Promise.all(res.map(r => r.json()))
      // console.log(data[0].title)
  
      const hot= data[0];
      const iced = data[1];
  
      const hotTitle=[];
      const icedTitle=[];
  
      for(const key in hot){
        hotTitle.push({
          title: hot[key].title,
          description: hot[key].description,
        });
      }
      for(const key in iced){
        icedTitle.push({
          title: iced[key].title,
          description: iced[key].description,
        });
      }
      console.log(hotTitle);
      console.log(icedTitle);
  
      // console.log(data[0].map(o=>o.title));
      // console.log(data[1].map(o=>o.title));
  
    } catch {
      throw Error("Promise failed");
    }
  };
  fetchNames();