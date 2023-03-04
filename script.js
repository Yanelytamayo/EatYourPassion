// // This below is the placement for food items

let foodItems = [
  {
    foodName: "Tamales",
    foodDescription: "a small steamed cake of dough made from corn (maize)",
    foodPrice: 5,
    foodCategory: "Mexican",
    foodImage: "chorizo_tacos_recipe-500x500.jpg",
    foodImage: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-11-southern-thanksgiving%2F2019-11-Black-Bean-Tamales%2F2019-11-04_91710-Southern-Thanksgiving",
  },
  {
    foodName: "Posole",
    foodDescription: "a thick, stewlike soup of pork or chicken, hominy, mild chile peppers, and cilantro",
    foodPrice: 5,
    foodCategory: "Mexican",
    foodImage: "https://melissacookston.com/wp-content/uploads/2020/10/Posole-rojo-square-2-scaled.jpg",
  },
  {
    foodName: "Tacos",
    foodDescription: "traditional Mexican taco, which is served on a corn tortilla with meat, onions, and cilantro",
    foodPrice: 4,
    foodCategory: "Mexican",
    foodImage: "https://www.maricruzavalos.com/wp-content/uploads/2021/10/chorizo_tacos_recipe-500x500.jpg",
  },
  {
    foodName: "Feijoada",
    foodDescription: "a black bean stew that is brewed with a variety of salted and smoked pork and beef products from carne-seca to smoked pork spareribs.",
    foodPrice: 15,
    foodCategory: "Brazilian",
    foodImage: "https://easybrazilianfood.com/wp-content/uploads/2022/05/Feijoada-Rice-and-Beans-Brazilian-Angle-SQUARE-500x500.jpeg",
  },
  {
    foodName: "Açai",
    foodDescription: "thick smoothie bowls loaded with toppings",
    foodPrice: 15,
    foodCategory: "Brazilian",
    foodImage: "https://www.eatingbirdfood.com/wp-content/uploads/2021/06/acai-bowl-hero.jpg",

  },
  {
    foodName: "Pão de queijo",
    foodDescription: "“cheese bread” in Portuguese, is a delightful snack from Brazil made with tapioca flour (meaning it's gluten-free) and cheese.",
    foodPrice: 1,
    foodCategory: "Brazilian",
    foodImage: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1626243746/Traditional-Brazilian-Food-Pao-de-quieijo/Traditional-Brazilian-Food-Pao-de-quieijo.jpg",

  },
  {
    foodName: "Guilin noodles with cha siu",
    foodDescription: "noodles",
    foodPrice: 16,
    foodCategory: "Chinese",
    foodImage: "https://1.bp.blogspot.com/-tr3jxRC_mHc/VS0qCVwoUXI/AAAAAAAAO1k/inCUOtRHw-s/s1600/IMG_3674.jpg",


  },
  {
    foodName: "(3) Fried Turnip Cakes",
    foodDescription: "Each pan-fried cake has a thin crunchy layer on the outside from frying, and is soft on the inside.",
    foodPrice: 5,
    foodCategory: "Chinese",
    foodImage: "https://th.bing.com/th/id/OIP.7U4qQIBj59H_ol36gw3K8AHaE8?pid=ImgDet&rs=1",

  },
  {
    foodName: "(3) Fried Taro Cakes",
    foodDescription: "Cantonese dish made from the vegetable taro.",
    foodPrice: 5,
    foodCategory: "Chinese",
    foodImage: "https://th.bing.com/th/id/R.4629bf68a2019d91cca6ecdafdce4c7f?rik=kHqSiTp2yg077w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-mNH5rIBD4R0%2fUolEHMPryOI%2fAAAAAAAAFfs%2fspORDpHvGcA%2fs1600%2fCAM00156.jpg&ehk=UhNQrkpGHm4rCL3aNAnX%2bVyurcm%2blSMn%2b7drMn4F2YQ%3d&risl=&pid=ImgRaw&r=0",

  }];

//
// This below is for budgeting tool
let click = 0;
const budget_button1 = document.querySelector("#show_budget_form");
const filter_form = document.querySelector("#filter");
console.log("budget form, ", budget_button1)
budget_button1.onclick = function() {
  click += 1
  if (click % 2 == 1) {
    filter_form.style.display = "block";
  }
  else {
    filter_form.style.display = "none";
  }
};
  
const price1 = document.querySelector("#cheap");
const price2 = document.querySelector("#middle");
const price3 = document.querySelector("#expensive");
const budget_search = document.querySelector("#budget_search");
const budget_recommend = document.querySelector("#your_budget");
function price_filter(arr) {
  let $price = [];
  let $$price = [];
  let $$$price = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].foodPrice < 5) {
      $price.push(arr[i].foodName)
    }
    else if (arr[i].foodPrice <= 10) {
      $$price.push(arr[i].foodName)
    }
    else {
      $$$price.push(arr[i].foodName)
    }
  }
  return ([$price, $$price, $$$price])
}

console.log(budget_search)
budget_search.onclick = function(){
    // budget_recommend.style.display = 'block';
    let pricesList= price_filter(foodItems);
    console.log("pricesLIst ", pricesList)
    if (price1.checked) {
      let c = pricesList[0]
      console.log('p1')
      for (let i = 0; i < c.length; i++) {
        budget_recommend.appendChild(`<h3>${c[i]}</h3>`);
      }
    }
    if (price2.checked){
      let c = pricesList[1]
      console.log('p3')
      for (let i = 0; i < c.length; i++) {
        budget_recommend.appendChild(`<h3>${c[i]}</h3>`);
        // let child = 
        // budget_recommend.appendChild(child)
      }
    }
    if(price3.checked){
      console.log('p3')
      let c = pricesList[2]
      for (let i = 0; i < c.length; i++) {
        budget_recommend.appendChild(`<h3>${c[i]}</h3>`);
      }
    }
};


// for(let i=0; i < 3; i++) {
//   let element1 = document.querySelector('.foodName');
//   let h5 = element1.createElement("h5");


// }
let foodCategory = document.querySelectorAll(".foodCategory");

console.log("Food Category >> ", foodCategory);

for(let i=0; i < foodCategory.length; i++) {
  foodCategory[i].onclick = function() {
    console.log("hello");
    document.getElementById("carouselExampleCaptions").style.display = "none";
    // foodItems
    const filtered = foodItems.filter(function(foodItem) {
      return foodItem.foodCategory === foodCategory[i].innerText;
    });

    console.log("filtered food items",filtered);

    document.createElement();
    console.log("iterating > ", foodCategory[i]);

    //foodview
    // let element1 = document.querySelector(".example")
    // let images = document.createElement("img");
    // let images.src = filtered[i];
    // filteredFood.append(filtered)
    
  };
}

