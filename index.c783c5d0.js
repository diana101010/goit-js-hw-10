!function(){axios.defaults.headers.common["x-api-key"]="live_NRhFbX2RX8DJRpSiGeMIZ4UoukAQyUgUN5FPeOESVv0XTQFFLPD0pTRrw8aH2mbW";var e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),n=document.querySelector(".loader"),a=document.querySelector(".error");n.style.display="none",a.style.display="none",axios.get("https://api.thecatapi.com/v1/breeds").then((function(e){return e.data})).catch((function(e){throw console.error("Error fetching data from API:",e),e})).then((function(t){var n=document.createDocumentFragment();t.forEach((function(e){var t=document.createElement("option");t.textContent=e.name,t.value=e.id,n.append(t)})),e.append(n),new SlimSelect({select:e})})).catch((function(e){n.style.display="none",Notify.failure(a.textContent,e),a.style.display="block"})),e.addEventListener("change",(function(){var c=e.value;n.style.display="block",t.style.display="none",function(e){return axios.get("https://api.thecatapi.com/v1/images/search?api_key=".concat("live_NRhFbX2RX8DJRpSiGeMIZ4UoukAQyUgUN5FPeOESVv0XTQFFLPD0pTRrw8aH2mbW","&breed_ids=").concat(e)).then((function(e){return e.data})).catch((function(e){throw console.error("Error fetching data from API:",e),e}))}(c).then((function(e){n.style.display="none",t.style.display="flex",t.innerHTML='<img class="catImage" src='.concat(e[0].url,'  width="300px" alt="Image of a ').concat(e[0].breeds[0].name,' cat ">\n      <h1 class="catBreed">').concat(e[0].breeds[0].name,'  </h1>\n      <p class="catDescription">').concat(e[0].breeds[0].description,'  </p>\n      <p class="catTemperament">Temperament: ').concat(e[0].breeds[0].temperament,"  </p>\n      ")})).catch((function(e){n.style.display="none",Notify.failure(a.textContent,e)}))}))}();
//# sourceMappingURL=index.c783c5d0.js.map
