const menu = [
  {
    id: 1,
    title: 'Kebab',
    category: 'Turkey',
    price: 29.99,
    img: 'https://blog.turkishairlines.com/wp-content/uploads/2022/02/turk-yemekleri-kebap.jpg.webp',
    desc: `Kebab, which is preferred with lamb meat, is prepared with the addition of salt and pepper, cooked over coal fire or on a barbecue, and served with a special pita bread and sumac onions.`,
  },
  {
    id: 2,
    title: 'Manti',
    category: 'Turkey',
    price: 19.99,
    img: 'https://blog.turkishairlines.com/wp-content/uploads/2022/02/turk-mutfagi-manti.jpg.webp',
    desc: `Served with a sauce consisting of spices and butter, optionally with garlic or plain yoghurt. `,
  },
  {
    id: 3,
    title: 'Lasagna',
    category: 'Italy',
    price: 19.99,
    img: 'https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: `Served with fresh crispy green salad or delicious fresh slices of bread.`,
  },
  {
    id: 4,
    title: 'Margarita Pizza',
    category: 'Italy',
    price: 19.99,
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',
    desc: `Fresh green salad or slices of fresh bread marinated in garlic butter are offered. `,
  },
  {
    id: 5,
    title: 'Beef Tenderloin',
    category: 'France',
    price: 29.99,
    img: 'https://www.ardaninmutfagi.com/wp-content/uploads/2019/09/cafe-de-paris.jpg',
    desc: `Antrecote with sauce is served with carefully prepared garlic puree, grilled vegetables or fresh potato side dish.`,
  },
  {
    id: 6,
    title: 'Dana Stragonof',
    category: 'France',
    price: 29.99,
    img: 'https://efsaneyemektarifleri.com/wp-content/uploads/2020/04/Dana-Stroganoff-Tarifi.jpg',
    desc: `With its rich and creamy flavor, it invites you to a luxurious Russian food experience.`,
  },
  {
    id: 7,
    title: 'Niçoise Salad',
    category: 'France',
    price: 19.99,
    img: 'https://i.lezzet.com.tr/images-xxlarge/nicoise-salata-cd61cf60-4b2b-4693-ad9f-4e3022a4bca4',
    desc: `Niçoise Salad is served with slices of fresh bread or fresh crispy baguette.`,
  },
  {
    id: 8,
    title: 'Taco',
    category: 'Mexican',
    price: 29.99,
    img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/tacos_meksika_mutfagi-dc7ec63b-e1df-4acf-bdcc-96c7a609e85b.jpg',
    desc: `Taco offers vibrant flavors of Mexican cuisine and offers a taste experience of your own. `,
  },
  {
    id: 9,
    title: 'Burrito',
    category: 'Mexican',
    price: 19.99,
    img: 'https://i.pinimg.com/736x/ec/b3/50/ecb35063752286a93b241715470b45aa.jpg',
    desc: `Mexican side dishes such as extra hot sauce, fresh corn, black beans or lettuce are offered.`,
  },
  {
    id: 10,
    title: 'Tamale',
    category: 'Mexican',
    price: 19.99,
    img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/tamale-0a8d8cc7-0370-46e4-ba23-c2388d9d5721.jpg',
    desc: `Special Mexican side dishes such as salsa, guacamole or fresh hot peppers are offered next to Tamale.`,
  },
]

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
