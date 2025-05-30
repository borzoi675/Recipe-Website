
document.querySelectorAll(".favorite-btn").forEach(button => {
  const card = button.closest(".recipe-card");
  const id = card.dataset.id;

  // Load saved favorites
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(id)) {
    button.classList.add("favorited");
    button.textContent = "❤️";
  }

  button.addEventListener("click", () => {
    let updated = [...favorites];
    if (button.classList.toggle("favorited")) {
      button.textContent = "❤️";
      if (!updated.includes(id)) updated.push(id);
    } else {
      button.textContent = "♡";
      updated = updated.filter(fav => fav !== id);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
  });
});


const favoriteButtons = document.querySelectorAll(".favorite-btn");
const allRecipesBtn = document.getElementById("all-recipes-btn");
const favoritesBtn = document.getElementById("favorites-btn");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//para mapindot yung button
favoriteButtons.forEach(button => {
  const card = button.closest(".recipe-card");
  const recipeId = card.dataset.id;

  if (favorites.includes(recipeId)) {
    button.classList.add("favorited");
    button.textContent = "❤️";
  }

  button.addEventListener("click", () => {
    if (favorites.includes(recipeId)) {
      favorites = favorites.filter(id => id !== recipeId);
      button.classList.remove("favorited");
      button.textContent = "♡";
    } else {
      favorites.push(recipeId);
      button.classList.add("favorited");
      button.textContent = "❤️";
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
});

const recipeCards = document.querySelectorAll('.recipe-card');
const filterButtons = document.querySelectorAll('.filter-btn');
const allBtn = document.getElementById('all-recipes-btn');
const favBtn = document.getElementById('favorites-btn');

function showAllRecipes() {
  recipeCards.forEach(card => card.style.display = 'block');
  updateActive(allBtn);
}

function showFavoritesOnly() {
  recipeCards.forEach(card => {
    const isFavorited = card.querySelector('.favorite-btn').classList.contains('favorited');
    card.style.display = isFavorited ? 'block' : 'none';
  });
  updateActive(favBtn);
}

function filterByCategory(category) {
  recipeCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    card.style.display = (category === cardCategory) ? 'block' : 'none';
  });
}

function updateActive(activeBtn) {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

allBtn.addEventListener('click', showAllRecipes);
favBtn.addEventListener('click', showFavoritesOnly);

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    filterByCategory(category);
    updateActive(btn);
  });
});

function showMessage() {
  const message = document.getElementById('message');
  if (message.style.display === 'block') {
    message.style.display = 'none';
  } else {
    message.style.display = 'block';
  }
}


//para sa crossout
function toggleCrossout(checkbox) {
      const label = checkbox.parentElement;
      label.classList.toggle('crossed', checkbox.checked);
    }