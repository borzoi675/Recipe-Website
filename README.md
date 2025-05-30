THIS IS THE PROGRAM SOURCE CODE

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mami Mama Cooking</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Cabin+Sketch:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(135deg, #fff9f4 0%, #ffece1 100%);
            font-family: 'Poppins', sans-serif;
            color: #333;
            line-height: 1.6;
        }
        
        .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 5%;
            background: #c74343;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-left img, .nav-right img {
            height: 50px;
            border-radius: 50%;
            border: 2px solid #fff;
            transition: transform 0.3s ease;
        }
        
        .nav-left img:hover, .nav-right img:hover {
            transform: scale(1.1);
        }
        
        .nav-right a {
            margin-left: 15px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .hero {
            text-align: center;
            padding: 40px 20px;
            margin: 20px 0;
            background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), 
                        url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .hero h1 {
            font-family: 'cabin sketch', cursive;
            font-size: 3.5rem;
            color: #be4545;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(255,255,255,0.8);
        }
        
        .hero h2 {
            font-family: 'Pacifico', cursive;
            font-size: 2rem;
            color: #d2691e;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
            color: #555;
        }
        
        .favorites-nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin: 30px 0;
            padding: 15px;
            background: #fff;
            border-radius: 50px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        
        .nav-btn {
            padding: 10px 20px;
            border: none;
            border-radius: 30px;
            background: #f8f8f8;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }
        
        .nav-btn:hover {
            background: #b44646;
            color: white;
            transform: translateY(-3px);
        }
        
        .nav-btn.active {
            background: #bd4545;
            color: white;
            box-shadow: 0 4px 8px rgba(139, 0, 0, 0.3);
        }
        
        .recipes-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .recipe-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
            position: relative;
        }
        
        .recipe-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .recipe-tag {
            position: absolute;
            top: 15px;
            left: 0;
            background: #a83d3d;
            color: white;
            padding: 5px 15px;
            font-size: 0.9rem;
            font-weight: 600;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            z-index: 2;
        }
        
        .favorite-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255,255,255,0.8);
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            z-index: 2;
            transition: all 0.3s ease;
        }
        
        .favorite-btn:hover {
            background: white;
            transform: scale(1.1);
        }
        
        .favorite-btn.favorited {
            color: #e74c3c;
        }
        
        .recipe-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
        }
        
        .recipe-content {
            padding: 20px;
        }
        
        .recipe-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            margin-bottom: 10px;
            color: #333;
        }
        
        .cooking-time {
            display: flex;
            align-items: center;
            color: #666;
            margin-bottom: 15px;
            font-size: 0.95rem;
        }
        
        .cooking-time::before {
            content: "⏲";
            margin-right: 8px;
            font-size: 1.1rem;
        }
        
        .ingredients-list {
            list-style-type: none;
            margin-bottom: 20px;
        }
        
        .ingredients-list li {
            padding: 8px 0;
            border-bottom: 1px dashed #eee;
            font-size: 1rem;
            display: flex;
            align-items: center;
        }
        
        .ingredients-list li:before {
            content: "•";
            color: #b84343;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-right: 5px;
        }
        
        .descript {
            font-style: italic;
            color: #666;
            margin: 15px 0;
            padding: 10px;
            background: #f9f9f9;
            border-left: 3px solid #d2691e;
        }
        
        .view-recipe-btn {
            background: linear-gradient(to right, #b44646, #d2691e);
            color: white;
            border: none;
            padding: 12px 25px;
            width: 100%;
            border-radius: 8px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
        }
        
        .view-recipe-btn:hover {
            background: linear-gradient(to right, #d2691e, #bb4c4c);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(139, 0, 0, 0.3);
        }
        
        .recipe-steps {
            padding: 20px;
            background: #fff8f0;
            border-top: 2px solid #d2691e;
            display: none;
        }
        
        .recipe-steps h2 {
            font-family: 'Playfair Display', serif;
            color: #bd4444;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .checkbox-label {
            display: block;
            padding: 12px;
            margin-bottom: 10px;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            border-left: 4px solid #d2691e;
            font-size: 1rem;
            color: #444;
        }
        
        .checkbox-label:hover {
            background: #fff5e6;
            transform: translateX(5px);
        }
        
        .checkbox-label input {
            margin-right: 10px;
            transform: scale(1.2);
        }
        
        .crossout {
            text-decoration: line-through;
            color: #999;
        }
        
        footer {
            text-align: center;
            padding: 25px;
            background: #b44040;
            color: white;
            border-radius: 10px;
            margin-top: 30px;
            font-family: 'Pacifico', cursive;
        }
        
        footer p {
            margin: 5px 0;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero h2 {
                font-size: 1.5rem;
            }
            
            .favorites-nav {
                flex-direction: column;
                align-items: center;
                border-radius: 15px;
            }
            
            .nav-btn {
                width: 80%;
                justify-content: center;
            }
            
            .recipes-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <nav class="navigation">
        <div class="nav-left">
            <img src="logo.jpg" alt="Site Logo" class="picture">
        </div>
        <div class="nav-right">
            <a href="#about"><img src="home.jpg" alt="Homepage" class="picture"></a>
            <a href="#services"><img src="about.jpg" alt="About" class="picture"></a>
        </div>
    </nav>

    <div class="container">
        <div class="hero">
            <h1>Mami Mama Cooking</h1>
            <h2>Warm Hugs in Every Dish</h2>
            <p>Simple & Hearty Delicious Recipes for Everyone</p>
        </div>

        <nav class="favorites-nav">
            <button id="all-recipes-btn" class="nav-btn active">🍲 All Recipes</button>
            <button id="favorites-btn" class="nav-btn">❤️ Favorites Only</button>
            <button class="nav-btn filter-btn" data-filter="chicken">🐔 Chicken</button>
            <button class="nav-btn filter-btn" data-filter="pork">🐖 Pork</button>
            <button class="nav-btn filter-btn" data-filter="beef">🐄 Beef</button>
            <button class="nav-btn filter-btn" data-filter="sweet">🍬 Sweet</button>
        </nav>

        <div class="recipes-container">
            <!-- Creamy Garlic Chicken -->
            <div class="recipe-card" data-id="chicken-garlic" data-category="chicken">
                <div class="recipe-tag">Chicken Recipe</div>
                <button class="favorite-btn" aria-label="Add to favorites">♡</button>
                <img src="creamy.jpg" alt="Creamy Garlic Chicken" class="recipe-image">
                <div class="recipe-content">
                    <h3 class="recipe-title">Creamy Garlic Chicken</h3>
                    <span class="cooking-time">⏲ 40 mins</span>
                    <h2>Ingredients</h2>
                    <ul class="ingredients-list">
                        <li>2 boneless, skinless chicken breasts</li>
                        <li>1/2 tsp Italian seasoning</li>
                        <li>1/2 tsp salt</li>
                        <li>1 tsp Pepper & Garlic powder</li>
                        <li>3/4 cup heavy cream</li>
                        <li>1 cup chicken broth</li>
                    </ul>
                    <button class="view-recipe-btn">View Full Recipe</button>
                    <div class="recipe-steps">
                        <h2>Process</h2>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Slice breasts into thin cutlets.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Season with Italian seasoning, salt, pepper. Coat with flour.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Sear in skillet with olive oil + 1 Tbsp butter, ~4 min per side.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            To make sauce, sauté smashed garlic in 1 Tbsp butter, ~3 min.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Add broth, cream, garlic powder. Simmer 8–10 min until thickened.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Season to taste. Serve hot.
                        </label>
                    </div>
                </div>
            </div>

            <!-- Sinigang na Baboy -->
            <div class="recipe-card" data-id="baboy-sinigang" data-category="pork">
                <div class="recipe-tag">Pork Recipe</div>
                <button class="favorite-btn" aria-label="Add to favorites">♡</button>
                <img src="sinigang.jpeg" alt="Sinigang na Baboy" class="recipe-image">
                <div class="recipe-content">
                    <h3 class="recipe-title">Sinigang na Baboy</h3>
                    <span class="cooking-time">⏲ 1 hour</span>
                    <h2>Ingredients</h2>
                    <ul class="ingredients-list">
                        <li>1 pc red onion</li>
                        <li>2 pcs tomato, quartered</li>
                        <li>8 pcs sitaw, sliced</li>
                        <li>2 cups pork spare rib cut into chunks</li>
                        <li>1 liter of water</li>
                        <li>Radish, Kangkong & eggplant</li>
                        <li>Green chili</li>
                        <li>1 (20g) pack Knorr Sinigang sa Sampalok Mix Original</li>
                    </ul>
                    <button class="view-recipe-btn">View Full Recipe</button>
                    <div class="recipe-steps">
                        <h2>Process</h2>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Place pork ribs in a pot with 1 liter of water. Bring to a boil uncovered, and skim off any scum (impurities) that rise to the surface using a slotted spoon.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Add onions and tomatoes, cover, and simmer on medium until ribs are tender. Use a fork to check doneness.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Add vegetables according to their cooking time then cook for 2–3 minutes until vegetables turn dark green.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Add siling sigang, kangkong leaves, and sinigang mix, then stir and simmer for 2–3 minutes.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Season to taste. Serve hot.
                        </label>
                    </div>
                </div>
            </div>

            <!-- Beef Mechado -->
            <div class="recipe-card" data-id="beef-mechado" data-category="beef">
                <div class="recipe-tag">Beef Recipe</div>
                <button class="favorite-btn" aria-label="Add to favorites">♡</button>
                <img src="mechado.jpeg" alt="Beef Mechado" class="recipe-image">
                <div class="recipe-content">
                    <h3 class="recipe-title">Beef Mechado</h3>
                    <span class="cooking-time">⏲ 2 hours</span>
                    <h2>Ingredients</h2>
                    <ul class="ingredients-list">
                        <li>1 1/2 lbs beef for stew, bay leaves</li>
                        <li>1/2 juice of half a lemon, 3tsp of oil</li>
                        <li>1/2 tsp fish sauce, pepper</li>
                        <li>1 cup tomato sauce and water</li>
                        <li>1 carrots, red bell pepper, potato</li>
                        <li>1 cup beef broth, dashed of tabasco</li>
                    </ul>
                    <p class="descript">A traditional Filipino stew made with tender beef chunks simmered in a savory tomato-based sauce, often flavored with soy sauce, calamansi (or lemon), garlic, onions, and bay leaves.</p>
                    <button class="view-recipe-btn">View Full Recipe</button>
                    <div class="recipe-steps">
                        <h2>Process</h2>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Marinate beef for at least 30 minutes.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Brown garlic and beef in oil and set aside the marinated sauce.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Return beef to pot, add onions and season with fish sauce (patis) add tomato sauce and water and stir.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Add Tabasco, beef stock, 2 tablespoons of reserved marinade, bay leaves and bell pepper. Let come to a boil.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Cover the pot with the lid, and let it stew for about 1 1/2 hours, stirring occasionally.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            When the meat is tender, add potatoes and carrots. Continue cooking until the potatoes are fork tender, about 20 minutes more.
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" onchange="toggleCrossout(this)">
                            Season to taste. Serve hot.
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>🍲 Made with love & hot broth 🍲</p>
            <p>© 2023 Mami Mama - All rights reserved</p>
        </footer>
    </div>

    <script>
        // Toggle recipe steps visibility
        document.querySelectorAll('.view-recipe-btn').forEach(button => {
            button.addEventListener('click', function() {
                const steps = this.nextElementSibling;
                steps.style.display = steps.style.display === 'block' ? 'none' : 'block';
                this.textContent = steps.style.display === 'block' ? 'Hide Recipe' : 'View Full Recipe';
            });
        });

        // Toggle strikethrough for recipe steps
        function toggleCrossout(checkbox) {
            const label = checkbox.parentElement;
            if (checkbox.checked) {
                label.classList.add('crossout');
            } else {
                label.classList.remove('crossout');
            }
        }

        // Toggle favorite status
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.textContent === '♡') {
                    this.textContent = '♥';
                    this.classList.add('favorited');
                } else {
                    this.textContent = '♡';
                    this.classList.remove('favorited');
                }
            });
        });

        // Filter recipes
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter recipes
                document.querySelectorAll('.recipe-card').forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // All recipes button
        document.getElementById('all-recipes-btn').addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.recipe-card').forEach(card => {
                card.style.display = 'block';
            });
        });

        // Favorites only button
        document.getElementById('favorites-btn').addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.recipe-card').forEach(card => {
                const btn = card.querySelector('.favorite-btn');
                if (btn.textContent === '♥') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    </script>
</body>
</html>
