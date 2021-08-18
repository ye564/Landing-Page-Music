const search = 'metodos de pago'
const apiKey= "3s0IOeDHVCRz3tQhPfg4D8K1oqEKFhvF";
const UrlQ =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`;
let Array_Position = 0; 
let Array_Position2=1;
let Array_Position3=2;

fetch(UrlQ)
.then(function (res) {
  return res.json();
})
.then(function (json) {
  const url1= json.data[Array_Position].images.fixed_width.url;
  const $result1 = document.getElementById('result');
  let resultHTML = '';
  resultHTML+=`<img src="${url1}" style="margin: 0px 49px; border-radius: 10%; border:gray ; border-style: outset;"  >`;
  $result1.innerHTML = resultHTML;

  const url2= json.data[Array_Position2].images.fixed_width.url;
  const $result2 = document.getElementById('result2');
  let resultHTML2 = '';
  resultHTML2+=`<img src="${url2}" style="margin: 0px 49px; border-radius: 10%; border:gray ; border-style: outset;" >`;
  $result2.innerHTML = resultHTML2;

  const url3= json.data[Array_Position3].images.fixed_width.url;
  const $result3 = document.getElementById('result3');
  let resultHTML3 = '';
  resultHTML3+=`<img src="${url3}" style="margin: 0px 49px; border-radius: 10%; border:gray ; border-style: outset;">`;
  $result3.innerHTML = resultHTML3;
})
.catch(function (err) {
  console.log(err.message)
});