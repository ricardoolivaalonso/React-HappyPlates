import { CategoriesSection } from "../02-sections/CategoriesSection";
import { CreatorsSection } from "../02-sections/CreatorsSection";
import { FooterSection } from "../02-sections/FooterSection";
import { HeaderSection } from "../02-sections/HeaderSection";
import { HeroSection } from "../02-sections/HeroSection";
import { RecipesSection } from "../02-sections/RecipesSection";
import { TrendingSection } from "../02-sections/TrendingSection";
import { data } from "../00-data/data";

const HomePage = () => {
    return(
        <>
            <HeaderSection menu={data.menu}/>
            <HeroSection />
            <TrendingSection trending={data.trendingA}/>
            <RecipesSection recipesList={data.recipesListA}/>
            <CreatorsSection />
            <RecipesSection recipesList={data.recipesListB}/>
            <RecipesSection recipesList={data.recipesListC}/>
            <RecipesSection recipesList={data.recipesListD}/>
            <TrendingSection items trending={data.trendingB}/>
            <RecipesSection recipesList={data.recipesListE}/>
            <CategoriesSection menu={data.categories} links={data.categoriesLinks}/>
            <FooterSection />
        </>
    )
}

export { HomePage }