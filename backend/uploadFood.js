import fs from 'fs';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';
import 'dotenv/config';

const foodData = [
    {
        _id: "2",
        name: "Veg salad",
        image: "food_2.png",
        price: 900,
        description: "A fresh, crunchy mix of assorted vegetables tossed with a light dressing, flavorful dish perfect for any meal or occasion, highlighting the best of nutritious eating.",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Clover Salad",
        image: "food_3.png",
        price: 1500,
        description: "Clover salad is a light and refreshing dish made with fresh clover leaves, often combined with other greens, vegetables, and a simple vinaigrette or dressing."
    },
    {
        _id: "4",
        name: "Chicken Salad",
        image: "food_4.png",
        price: 1150,
        description: "Chicken salad is a versatile dish made from cooked, shredded, or diced chicken mixed with various ingredients such as mayonnaise, celery, onions, and seasonings.",
        category: "Salad"
    },
    {
        _id: "5",
        name: "Lasagna Rolls",
        image: "food_5.png",
        price: 250,
        description: "Lasagna rolls offer a twist on traditional lasagna, with noodles rolled around ricotta cheese, spinach, meat, then topped with marinara sauce and mozzarella cheese before baking.",
        category: "Rolls"
    },
    {
        _id: "6",
        name: "Peri Peri Rolls",
        image: "food_6.png",
        price: 200,
        description: "Peri peri rolls are a delectable dish showcasing spicy peri peri (piri piri) sauce, traditionally crafted from African bird's eye chili peppers, offering a burst of bold flavors.",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Chicken Rolls",
        image: "food_7.png",
        price: 150,
        description: "Chicken rolls are made by wrapping seasoned chicken in flatbread, tortilla, or pastry with vegetables, cheese, and sauces. They can be baked, fried, or grilled.",
        category: "Rolls"
    },
    {
        _id: "8",
        name: "Veg Rolls",
        image: "food_8.png",
        price: 100,
        description: "Veggie rolls are a nutritious dish featuring various vegetables wrapped in flatbread, tortillas, or pastry. Common fillings include lettuce, carrots, cucumbers, and bell peppers.",
        category: "Rolls"
    },
    {
        _id: "9",
        name: "Ripple Ice Cream",
        image: "food_9.png",
        price: 200,
        description: "Ripple ice cream has swirls of syrup or sauce. Common flavors include chocolate, strawberry, and caramel, making a delightful treat.",
        category: "Deserts"
    },
    {
        _id: "10",
        name: "Fruit Ice Cream",
        image: "food_10.png",
        price: 250,
        description: "Fruit ice cream is a refreshing dessert made by blending fresh or pureed fruits with a creamy ice cream base. Popular flavors include strawberry, mango, raspberry, and peach.",
        category: "Deserts"
    },
    {
        _id: "11",
        name: "Jar Ice Cream",
        image: "food_11.png",
        price: 340,
        description: "Jar ice cream is a trendy dessert served in small, resealable jars with layers of ice cream, sauces, and toppings like cookies, fruit, or nuts, offering convenience and variety.",
        category: "Deserts"
    },
    {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: "food_12.png",
        price: 100,
        description: "Vanilla ice cream is a classic and popular dessert made from a base of milk, cream, sugar, and vanilla flavoring",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: "food_13.png",
        price: 260,
        description: "A chicken sandwich is a popular dish consisting of cooked chicken (often grilled, fried, or roasted) served between two slices of bread or a bun.",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: "food_14.png",
        price: 180,
        description: "A vegan sandwich with whole grain bread, lettuce, tomatoes, cucumbers, avocado, and sprouts offers a nutritious, cruelty-free alternative with delicious plant-based ingredients.",
        category: "Sandwich"
    },
    {
        _id: "15",
        name: "Grilled Sandwich",
        image: "food_15.png",
        price: 250,
        description: "A grilled sandwich is a versatile dish where bread is toasted with various fillings, offering a satisfying meal that's customizable to taste preferences and cravings.",
        category: "Sandwich"
    },
    {
        _id: "16",
        name: "Bread Sandwich",
        image: "food_16.png",
        price: 140,
        description: "A bread sandwich is a minimalistic dish made by placing one slice of bread between two others, often with a simple spread like butter or mayonnaise.",
        category: "Sandwich"
    },
    {
        _id: "17",
        name: "Cup Cake",
        image: "food_17.png",
        price: 160,
        description: "A cupcake is a delightful small cake baked in a cup-shaped container, adorned with frosting or other toppings, offering a single-serving treat loved for its sweetness and decorative charm.",
        category: "Cake"
    },
    {
        _id: "18",
        name: "Vegan Cake",
        image: "food_18.png",
        price: 550,
        description: "Vegan cake is a type of cake crafted without any animal products, including eggs, dairy (like milk and butter), or honey, offering a delicious alternative suitable for plant-based diets and ethical considerations.",
        category: "Cake"
    },
    {
        _id: "19",
        name: "Butterscotch Cake",
        image: "food_19.png",
        price: 1600,
        description: "A butterscotch cake features moist layers infused with rich butterscotch flavor, often paired with butterscotch frosting or buttercream, offering a decadent dessert experience.",
        category: "Cake"
    },
    {
        _id: "20",
        name: "Sliced Cake",
        image: "food_20.png",
        price: 220,
        description: "Sliced cake refers to any type of cake that has been cut into individual slices for serving. This could include various types such as chocolate cake, vanilla cake, fruitcake, or any other flavor that has been baked and then portioned into slices.",
        category: "Cake"
    },
    {
        _id: "21",
        name: "Garlic Mushroom",
        image: "food_21.png",
        price: 480,
        description: "Garlic mushrooms: mushrooms sautéed with garlic, butter, and herbs, creating a flavorful and savory dish that enhances any meal with its rich taste and aroma.",
        category: "Pure Veg"
    },
    {
        _id: "22",
        name: "Fried Cauliflower",
        image: "food_22.png",
        price: 360,
        description: "Fried cauliflower features cauliflower florets coated in batter or breadcrumbs, fried until golden and crispy, offering a delicious twist on this versatile vegetable.",
        category: "Pure Veg"
    },
    {
        _id: "23",
        name: "Mix Veg Pulao",
        image: "food_23.png",
        price: 730,
        description: "Mixed vegetable pulao is a fragrant and flavorful rice dish featuring carrots, peas, beans, bell peppers, and potatoes cooked with long-grain rice in a seasoned broth, showcasing a delicious blend of vegetables and aromatic spices.",
        category: "Pure Veg"
    },
    {
        _id: "24",
        name: "Rice Zucchini",
        image: "food_24.png",
        price: 790,
        description: "Rice with zucchini is a simple and delicious dish where diced or sliced zucchini is cooked with rice, creating a flavorful and nutritious meal that's easy to prepare and enjoyable to eat.",
        category: "Pure Veg"
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: "food_25.png",
        price: 1100,
        description: "Cheese pasta is a beloved dish featuring pasta combined with a creamy cheese sauce, offering comfort and satisfaction in every bite.",
        category: "Pasta"
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: "food_26.png",
        price: 700,
        description: "Tomato pasta: a classic dish with pasta in a rich tomato-based sauce, featuring onions, garlic, basil, and oregano for robust flavor and hearty satisfaction.",
        category: "Pasta"
    },
    {
        _id: "27",
        name: "Creamy Pasta",
        image: "food_27.png",
        price: 900,
        description: "Creamy pasta: pasta coated in rich, creamy sauce with heavy cream, butter, garlic, Parmesan cheese for a smooth, velvety texture. A decadent dish loved for its indulgence.",
        category: "Pasta"
    },
    {
        _id: "28",
        name: "Chicken Pasta",
        image: "food_28.png",
        price: 1200,
        description: "Chicken pasta combines tender chicken with pasta in flavorful sauce. Chicken is cooked separately and added to cooked pasta. It's a popular, delicious dish.",
        category: "Pasta"
    },
    {
        _id: "29",
        name: "Buttter Noodles",
        image: "food_29.png",
        price: 1000,
        description: "Got it! Butter noodles are indeed a comforting and easy dish to prepare. How do you usually like to enjoy them?",
        category: "Noodles"
    },
    {
        _id: "30",
        name: "Veg Noodles",
        image: "food_30.png",
        price: 700,
        description: "Vegetable noodles, or veg noodles, are a popular dish made by stir-frying noodles with a variety of vegetables and sauces.",
        category: "Noodles"
    },
    {
        _id: "31",
        name: "Somen Noodles",
        image: "food_31.png",
        price: 1350,
        description: "Somen noodles: thin Japanese wheat noodles, served cold with tsuyu sauce . Ideal for hot weather. Delicate, akin to angel hair pasta.",
        category: "Noodles"
    },
    {
        _id: "32",
        name: "Cooked Noodles",
        image: "food_32.png",
        price: 900,
        description: "Cooked noodles refer to noodles that have been boiled in water until they reach a desired level of tenderness and are ready to be used in various dishes.",
        category: "Noodles"
    }
];

const uploadFood = async () => {
    const apiUrl = 'http://localhost:4000/api/food/add';
    const imageBasePath = path.resolve('../frontend/src/assets');

    console.log('Starting food upload process...');
    let successCount = 0;
    let failureCount = 0;

    for (const food of foodData) {
        try {
            const imagePath = path.join(imageBasePath, food.image);
            
            // Check if image file exists
            if (!fs.existsSync(imagePath)) {
                console.log(`⚠️  Image not found: ${food.image} - Skipping ${food.name}`);
                failureCount++;
                continue;
            }

            // Create FormData
            const formData = new FormData();
            formData.append('name', food.name);
            formData.append('description', food.description);
            formData.append('price', food.price.toString());
            formData.append('category', food.category || 'Other');
            formData.append('image', fs.createReadStream(imagePath));

            // Make POST request
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
                headers: formData.getHeaders()
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log(`✅ Successfully uploaded: ${food.name}`);
                successCount++;
            } else {
                console.log(`❌ Failed to upload ${food.name}: ${result.message}`);
                failureCount++;
            }
        } catch (error) {
            console.log(`❌ Error uploading ${food.name}:`, error.message);
            failureCount++;
        }
    }

    console.log(`\n📊 Upload Summary:`);
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${failureCount}`);
    console.log(`📝 Total: ${successCount + failureCount}`);
};

// Run the upload
uploadFood();
