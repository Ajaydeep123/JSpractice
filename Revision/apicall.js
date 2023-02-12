//Code when we need to make multiple api calls
// https://openjavascript.info/2023/01/12/wait-for-multiple-fetch-requests-to-finish/
// https://openjavascript.info/handling-multiple-javascript-promises/ 
// ---->>> imp resource


const fetchNames = async () => {
    try {
      const res = await Promise.all([
        fetch("https://api.sampleapis.com/coffee/hot"),
        fetch("https://api.sampleapis.com/coffee/iced")
      ]);
      const data = await Promise.all(res.map(r => r.json()))
      // console.log(data[0].title)
      console.log(data[0].map(o=>o.title));
      console.log(data[1].map(o=>o.title));
  
    } catch {
      throw Error("Promise failed");
    }
  };
  fetchNames();