export let id_array = [];
let favorite_obj = {};
let favoriteArea = document.querySelector('.main__favorite__list');
export default function favorite(){
  document.addEventListener('click', (e)=>{
    const clickedTargetElement = e.target.closest('.heart');

    if(clickedTargetElement !== null && (clickedTargetElement.classList.contains('is-active') && clickedTargetElement.classList.contains('heart') )){
      changeSelected(e, "empty", clickedTargetElement);
    }else if(clickedTargetElement.classList.contains('heart') && clickedTargetElement !== null){
      changeSelected(e, "fill", clickedTargetElement);
    }
  });
};

function changeSelected(event, status, f) {
    const t = event.target.closest('.recipe-item');
    if( f !== null){
      //ハートの親要素のクラスのつけかえ
      f.classList.toggle('is-active');

      //ハート自体の表示の切り替え
      if(status === "fill"){
        f.innerHTML = `<i class="fa-solid fa-heart cursor-pointer text-2xl"></i>`;
      }else{
        f.innerHTML = `<i class="fa-regular fa-heart cursor-pointer text-2xl"></i>`;
      }
    }

    //レシピのidを取得する
    const id = t.closest('.recipe-item').getAttribute('id');
    const num_id = id.replace(/meal(\d.+?)/, '$1');

    // お気に入り登録したリストのidが既にあるかどうか（あれば削除、なければ追加）
    if(id_array.some( value => value === num_id ) === true) {
      //既にidがある場合
      id_array = id_array.filter( value => value !== num_id );
      removeFavoriteList(event,num_id);
      updateLocalStroge(num_id);
    }else{
      if( id_array.length === 0){
        favoriteArea.innerHTML = '';
      }
      console.log(id_array);
      //idが重複してなかった場合
      id_array.push(num_id);
      console.log(id_array);

      // クリックした要素のレシピ名・画像パス・idをlocalStorageに保存する
      setLocalStorage(num_id);

      getMealById(num_id);
    }
}

async function getMealById(id) {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await resp.json();

  addFavoriteList(data);
}

function addFavoriteList(data){
  let insertedHTML = `
  <li class="flex justify-center items-center flex-col" id="favorite${data.meals[0].idMeal}">
    <div class="main__favorite__meal w-20 h-20 rounded-full overflow-hidden">
        <img src="${data.meals[0].strMealThumb}" alt="" class="object-cover h-full w-full block">
    </div>
    <p class="main__favorite__desc text-center text-md">${data.meals[0].strMeal}</p>
  </li>
  `;

  favoriteArea.insertAdjacentHTML('afterbegin', insertedHTML);
}

function removeFavoriteList(event, id ){
  // console.log(id);
  const target = document.getElementById(`favorite${id}`);
  target.remove();
  if( countFavoriteItem(favoriteArea) === 0){
    favoriteArea.insertAdjacentHTML('afterbegin', '<li>There is no registered item here.<br> If you want to register, please click heart icon whatever you like.<li>')
  }
}

function countFavoriteItem(element) {
  return element.childElementCount;
}

function setLocalStorage(id){
  let favorite_obj = JSON.parse(localStorage.getItem("mealjson"));
  let imgPath = document.getElementById(`meal${id}`).children[0].children[0].getAttribute('src');
  let name = document.getElementById(`meal${id}`).children[1].children[0].innerHTML;
  let mealId = id;
  let obj = {
      "id" : id,
      "recipe" : name,
      "path": imgPath
  };
  favorite_obj[mealId] = obj;
  console.log(favorite_obj);
  // favorite_array.push(obj);
  localStorage.setItem("mealjson", JSON.stringify(favorite_obj));
}

function updateLocalStroge(id){
  const lsdata = JSON.parse(localStorage.getItem("mealjson"));
  delete lsdata[id];
  localStorage.setItem("mealjson", JSON.stringify(lsdata));
}


