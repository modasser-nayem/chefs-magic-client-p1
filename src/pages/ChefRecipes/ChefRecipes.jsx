import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipeHeader from "./ChefRecipeHeader";
import RecipeCart from "../../components/RecipeCart";
import Loading from "../../components/Loading";

const ChefRecipes = () => {
   const { chef, chefRecipes } = useLoaderData();
   return (
      <>
         {chef && chefRecipes ? (
            <div className="cs-container">
               <ChefRecipeHeader chef={chef} />
               <div className="py-24">
                  <h2 className="cs-title cs-title-border mb-10">Recipes</h2>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                     {chefRecipes &&
                        chefRecipes.map((recipe) => (
                           <RecipeCart
                              key={recipe.author}
                              recipe={recipe}
                           />
                        ))}
                  </div>
               </div>
            </div>
         ) : (
            <Loading />
         )}
      </>
   );
};

export default ChefRecipes;
