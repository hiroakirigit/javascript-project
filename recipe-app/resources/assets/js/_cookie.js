import Cookies from 'js-cookie';

import { id_array } from './_favorite';

export default function cookie(){
  window.addEventListener('load', ()=>{
    // console.log(id_array );
    // console.log( Cookies.get('recipe') );
    if( Cookies.get('recipe') == undefined ){
      Cookies.set('recipe', 'value', {expires: 1/24});
      getMealList();
    }else{
      let obj = JSON.parse(localStorage.getItem("mealjson"));
      console.log(obj);
      if( obj){
        for( const key in obj){
          id_array.push(key);
        }
      }
      if( obj === null){
        getMealList();
      }
      if(obj !== {}){
        // console.log(obj);
        if(document.querySelector('.main__favorite__list').children[0].classList.contains('notice')){
          // console.log(document.querySelector('.main__favorite__list').children);
          document.querySelector('.main__favorite__list').innerHTML = '';
        }
        for ( const key in obj){
          let insertedHTML = `
          <li class="" id="favorite${obj[key].id}">
          <div class="main__favorite__meal">
          <img src="${obj[key].path}" alt="" class="object-cover h-full w-full block">
          </div>
          <p class="main__favorite__desc text-center text-md">${obj[key].recipe}</p>
          </li>
          `;
          document.querySelector('.main__favorite__list').insertAdjacentHTML('afterbegin', insertedHTML);
        }
        let insertedHTML;

        async function getMealList1(){
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese');
          const data = await response.json();

          for (let index = 0; index < data.meals.length; index++) {
            const value = data.meals[index];
            let str;
            for (let j = 0; j < Object.keys(obj).length; j++) {
              if(Object.keys(obj)[j] === value.idMeal){
                insertedHTML = `
                <li class="recipe-item shadow-xl border border-1 border-solid border-gray-300 rounded-lg" id="meal${value.idMeal}">
                    <div class="recipe-item__thumb rounded-lg overflow-hidden">
                        <img src="${value.strMealThumb}" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="flex justify-between items-center p-5">
                        <p class="reciope-item__name  text-2xl">${value.strMeal}</p>
                        <div class="fa-heart heart is-active">
                          <i class="fa-solid fa-heart cursor-pointer text-2xl"></i>
                        </div>
                    </div>
                </li>
                `;
              document.querySelector('.main__recipe__list').insertAdjacentHTML('afterbegin',insertedHTML);
              }
              // document.querySelector('.main__recipe__list').insertAdjacentHTML('afterbegin',insertedHTML);
            }
          }

          let duplicatedArray = [];
          let allArray = [];
          for (let z = 0; z < data.meals.length; z++) {
            const value = data.meals[z];
            allArray.push(value.idMeal);
            for (let j = 0; j < Object.keys(obj).length; j++) {
              const element = Object.keys(obj)[j];
              // console.log(element);
              duplicatedArray.push(element);
            }
          }
          allArray = allArray;
          let duplicatedArrray2 = Array.from( new Set(duplicatedArray)) ;
          //配列を高次元な配列にまとめる
          let arrs = [allArray, duplicatedArrray2];

          //配列を展開された配列にまとめる
          let concatArray = duplicatedArrray2.concat(allArray);

          //重複した配列を削除する
          let arrsUnique = [...new Set(concatArray)];

          //重複していない配列の値のみ残す
          arrsUnique = arrsUnique.splice(duplicatedArrray2.length, arrsUnique.length);

          for (let w = 0; w < arrsUnique.length; w++) {
            const element = arrsUnique[w];
            // console.log(element);
            async function getMealById(id) {
              const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
              const data3 = await resp.json();
              let value = data3.meals[0];

                insertedHTML = `
                <li class="recipe-item shadow-xl border border-1 border-solid border-gray-300 rounded-lg" id="meal${value.idMeal}">
                    <div class="recipe-item__thumb rounded-lg overflow-hidden">
                        <img src="${value.strMealThumb}" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="flex justify-between items-center p-5">
                        <p class="reciope-item__name  text-2xl">${value.strMeal}</p>
                        <div class="fa-heart heart">
                          <i class="fa-regular fa-heart cursor-pointer text-2xl"></i>
                        </div>
                    </div>
                </li>
                `;
              document.querySelector('.main__recipe__list').insertAdjacentHTML('beforeend',insertedHTML);
            }
            getMealById(element);
          }
        }
        getMealList1();
      }else if( obj == null){
        console.log('cookie');
        getMealList();
      }
    }
  });
};

async function getMealList(){
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese');
  const data = await response.json();
  // console.log(data);
  loadMeals(data);
}

function loadMeals(data) {
  data.meals.map( (value,index,arry) => {
    // console.log(index);
    const insertedHTML = `
    <li class="recipe-item shadow-xl border border-1 border-solid border-gray-300 rounded-lg" id="meal${value.idMeal}">
        <div class="recipe-item__thumb rounded-lg overflow-hidden">
            <img src="${value.strMealThumb}" alt="" class="w-full h-full object-cover">
        </div>
        <div class="flex justify-between items-center p-5">
            <p class="reciope-item__name  text-2xl">${value.strMeal}</p>
            ${heartElement}
        </div>
    </li>
    `;

    document.querySelector('.main__recipe__list').insertAdjacentHTML('afterbegin',insertedHTML);

  });
}
