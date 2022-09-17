import mongoose, { trusted } from"mongoose"

const RecipeSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Ingredient_Used: [
            {
                type: String,
                required: true
            }
        ],
        Duration: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Image: {
            type: String,
             required: true
        },
          Comment: String,
        Rating: {
            type: Number,
            default:0
        },
        photo: String,
        category: {
            type: String,
            enum: ['Breakfast recipes', 'Lunch recipes', 'Dinner recipes', 'Appetizer recipes', 'Salad Recipes', 'Main-Course recipes', 'Side-Dish recipes', 'Baked-Goods recipes', 'Dessert Recipes', 'Snack recipes', 'Soup recipes', 'Holiday recipes', 'Vegetarian Dishes'],
            required: true,
        },
        Similar_Recipe: [
            {
                String
            }
        ],
        likes: [
            {
                type: String
            }
        ],
        likecount: {
            type: Number,
            default: 0
        },
        tag: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export const Recipe = mongoose.model('Recipe', RecipeSchema)