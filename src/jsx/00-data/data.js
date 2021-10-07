import { v4 as uuidv4 } from 'uuid';

import TrendingImage1 from '../../img/happy-plates-01-set-06-0663-1622816592412.jpg'
import TrendingImage2 from '../../img/happy-plates-02-set-01-1106-1622816384708.jpg'
import TrendingImage3 from '../../img/happy-plates-01-set-08-0923-1622816502408.jpg'
import TrendingImage4 from '../../img/happy-plates-01-set-01-0061-1622816631839.jpg'
import TrendingImage5 from '../../img/happy-plates-01-set-02-0170-1622816432016.jpg'
// 
import RecipeImage1 from '../../img/pflaumenkuchen-mit-zimt-creme-1633533168051.jpg'
import RecipeImage2 from '../../img/birnen-galette-mit-mohn-fangipane-1632847300208.jpg'
import RecipeImage3 from '../../img/happy-plates-rezept-veganer-apfelkuchen-mit-ingwer-und-zimt-stabmixer-backform-18-cm-o-vegan-vegetarisch-laktosefrei-kuchen-and-torten-easy-modern-nqdfaxix0.jpg'
import RecipeImage4 from '../../img/galette-violette-1632676449321.jpg'
import RecipeImage5 from '../../img/happy-plates-rezept-kuerbis-gnocchi-mit-haselnuss-salbei-butter-stabmixer-vegetarisch-gesund-hauptspeisen-medium-europaeisch-dd874f30.jpg'
import RecipeImage6 from '../../img/happy-plates-rezept-vegane-semmelknoedel-mit-pilzsauce-vegan-fuer-kinder-gesund-laktosefrei-hauptspeisen-medium-europaeisch-f3rdisxqo.jpg'
import RecipeImage7 from '../../img/cremiges-birnen-ricotta-risotto-1633125838398.jpg'
import RecipeImage8 from '../../img/suesskartoffel-kokos-suppe-mit-cashewcreme-und-buchweizen-crunch-1632341944212.jpg'
import RecipeImage9 from '../../img/happy-plates-rezept-rigatoni-mit-salsiccia-tomatensauce-und-frischem-thymian-fleisch-fuer-kinder-hauptspeisen-easy-italienisch-7f4680fa.jpg'
import RecipeImage10 from '../../img/happy-plates-rezept-cremiger-pasta-auflauf-mit-tomaten-und-mozzarella-vegetarisch-hauptspeisen-easy-b257da8e.jpg'
import RecipeImage11 from '../../img/happyplates-rezept-magda-wagner-1630064593717.jpg'
import RecipeImage12 from '../../img/happy-plates-rezept-spaghetti-cacio-e-pepe-vegetarisch-last-minute-hauptspeisen-medium-italienisch-bkd5u21sx.jpg'
import RecipeImage13 from '../../img/happy-plates-rezept-fruehstuecks-sandwich-mit-ruehrei-und-karamelisierten-zwiebeln-vegetarisch-qhec2inor.jpg'
import RecipeImage14 from '../../img/happy-plates-rezept-sandwich-mit-kichererbsensalat-und-dille-vegetarisch-to-go-proteinreich-cwwzjqqpz.jpg'
import RecipeImage15 from '../../img/happy-plates-rezept-steak-sandwich-mit-blitz-dijonnaise-fleisch-hauptspeisen-easy-europaeisch-ywuyeaa6m.jpg'
import RecipeImage16 from '../../img/happy-plates-rezept-cremige-pilze-auf-geroestetem-brot-laktosefrei-gesund-vegetarisch-fruehstueck-and-brunch-easy-mediterran-50353375.jpg'
import RecipeImage17 from '../../img/happy-plates-rezept-suesskartoffel-curry-mit-saisonalem-gemuese-vegan-gesund-laktosefrei-hauptspeisen-easy-indisch-o0wvbbn8v.jpg'
import RecipeImage18 from '../../img/happy-plates-rezept-karfiolsteaks-mit-joghurt-minz-sauce-kuechenmaschine-vegetarisch-gesund-low-carb-hauptspeisen-easy-indisch-zszznigbl.jpg'
import RecipeImage19 from '../../img/happy-plates-rezept-schnelles-aloo-gobi-indisches-suesskartoffel-karfiol-curry-vegetarisch-vegan-glutenfrei-low-carb-laktosefrei-leichte-kueche-hauptspeisen-easy-indisch-3f2c5f6e.jpg'
import RecipeImage20 from '../../img/happy-plates-rezept-jungspinat-mit-chilioel-limetten-und-minz-koriander-chutney-gesund-vegan-laktosefrei-beilagen-easy-indisch-ab8fd74f.jpg'
// 
import AvatarImage1 from '../../img/luisa-zeltner-1621838037124.jpg'
import AvatarImage2 from '../../img/laura-neuhofer-1631646794997.jpg'
import AvatarImage3 from '../../img/119604501-2744952972456123-7283583483558658922-n-1621439755297.jpg'
import AvatarImage4 from '../../img/luisa-zeltner-1621838037124.jpg'
import AvatarImage5 from '../../img/bildschirmfoto-2021-05-17-um-12-28-05-1621419492469.jpg'
import AvatarImage6 from '../../img/jenny-rose-1629483830601.jpg'
import AvatarImage7 from '../../img/luisa-zeltner-1621838037124.jpg'
import AvatarImage8 from '../../img/lena-fuchs-1632341700570.jpg'
import AvatarImage9 from '../../img/bildschirmfoto-2021-05-17-um-12-28-05-1621419492469.jpg'
import AvatarImage10 from '../../img/jenny-rose-1629483830601.jpg'
import AvatarImage11 from '../../img/magda-wagner-1629902493149.jpg'
import AvatarImage12 from '../../img/jenny-rose-1629483830601.jpg'
import AvatarImage13 from '../../img/janos-spindler-1627756630845.jpg'
import AvatarImage14 from '../../img/jenny-rose-1629483830601.jpg'
import AvatarImage15 from '../../img/jenny-rose-1629483830601.jpg'
import AvatarImage16 from '../../img/119604501-2744952972456123-7283583483558658922-n-1621439755297.jpg'
import AvatarImage17 from '../../img/simone-adi-copyright-vanessa-maas-1625735030705.jpg'
// 
import CreatorsImage1 from '../../img/happyplates-luisamenn-1627916182790.jpg'
import CreatorsImage2 from '../../img/jenny-rose-1629483830601.jpg'
import CreatorsImage3 from '../../img/eddi-analog-1627297133027.jpg'
import CreatorsImage4 from '../../img/carina2-1627296914036.jpg'
import CreatorsImage5 from '../../img/film5049-32a-1627904708222.jpg'
import CreatorsImage6 from '../../img/happyplates-florencestoiber-1627916023583.jpg'
// 
const data = {
    menu: [
        {
            id: uuidv4(),
            title: 'entdecken',
            active: true
        },
        {
            id: uuidv4(),
            title: 'rezepte',
            active: false
        }
    ],
    categories: [
        {
            id: uuidv4(),
            title: 'Derzeit beliebt',
            active: true,
        },
        {
            id: uuidv4(),
            title: 'Kategorie',
            active: false,
        }
        ,
        {
            id: uuidv4(),
            title: 'Ernährung',
            active: false,
        }
        ,
        {
            id: uuidv4(),
            title: 'Länderküche',
            active: false,
        }
    ],
    categoriesLinks: [   
        [
            'Gesunde Jause für Kids',
            'Italian Classics',
            'Quick Lunch',
            'Kochen für Kids'
        ],
        [
            'Österreichische Klassiker',
            'Schnell & vegan',
            'Klimafreundliche Rezepte'
        ],
        [
            'Kürbis Rezepte',
            'Herbst Rezepte',
            'Herbstkuchen Rezepte'
        ]          
    ],
    trendingA: [
        {
            id: uuidv4(),
            title: 'quick lunch',
            img: TrendingImage1,
            area: 'big'
        },
        {
            id: uuidv4(),
            title: 'bunte salate & bowls',
            img: TrendingImage2,
            area: 'small-top'
        },
        {
            id: uuidv4(),
            title: 'orientalische nezze',
            img: TrendingImage3,
            area: 'small-bottom'
        },
    ],
    trendingB: [
        {
            id: uuidv4(),
            title: 'snacks für zwischendurch',
            img: TrendingImage4,
            area: 'small-top' 
        },
        {
            id: uuidv4(),
            title: 'kochen für kids',
            img: TrendingImage5,
            area: 'small-bottom' 
        },
    ],
    recipesListA: [
        {
            id: uuidv4(),
            title: 'Backen im Herbst',
            recipes: [
                {
                    id: uuidv4(),
                    title: 'Pflaumenkuchen mit Zimt-Crème',
                    author: 'Luisa Menn',
                    cat: 'Kochbuchautorin',
                    img: RecipeImage1,
                    avatar: AvatarImage1
                },
                {
                    id: uuidv4(),
                    title: 'Birnen-Galette mit Mohn Fangipane',
                    author: 'Luisa Menn',
                    cat: 'Kochbuchautorin',
                    img: RecipeImage2,
                    avatar: AvatarImage2
                },
                {
                    id: uuidv4(),
                    title: 'Veganer Apfelkuchen mit Ingwer und Zimt',
                    author: 'Antje Seebach',
                    cat: 'Team Happy Plates',
                    img: RecipeImage3,
                    avatar: AvatarImage3
                },
                {
                    id: uuidv4(),
                    title: 'Galette Violette',
                    author: 'Luisa Menn',
                    cat: 'Viola Waldeck',
                    img: RecipeImage4,
                    avatar: AvatarImage4
                }
            ]
        }
    ],
    recipesListB: [
        {
            id: uuidv4(),
            title: 'Herbstgerichte',
            recipes: [
                {
                    id: uuidv4(),
                    title: 'Kürbis-Gnocchi mit Haselnuss-Salbei Butter',
                    author: 'Simon Jacko',
                    cat: 'Team Happy Plates',
                    img: RecipeImage5,
                    avatar: AvatarImage5
                },
                {
                    id: uuidv4(),
                    title: 'Vegane Semmelknödel mit Pilzsauce',
                    author: 'Jenny Rose',
                    cat: 'Team Happy Plates',
                    img: RecipeImage6,
                    avatar: AvatarImage6
                },
                {
                    id: uuidv4(),
                    title: 'Cremiges Birnen-Ricotta-Risotto',
                    author: 'Luisa Menn',
                    cat: 'Kochbuchautorin',
                    img: RecipeImage7,
                    avatar: AvatarImage7
                },
                {
                    id: uuidv4(),
                    title: 'Galette Violette',
                    author: 'Lena Fuchs',
                    cat: 'Food Bloggerin',
                    img: RecipeImage8,
                    avatar: AvatarImage8
                }
            ]
        }
    ],
    recipesListC: [
        {
            id: uuidv4(),
            title: 'Wohlfühlpasta',
            recipes: [
                {
                    id: uuidv4(),
                    title: 'Rigatoni mit Salsiccia, Tomatensauce und frischem Thymian',
                    author: 'Simon Jacko',
                    cat: 'Team Happy Plates',
                    img: RecipeImage9,
                    avatar: AvatarImage9
                },
                {
                    id: uuidv4(),
                    title: 'Cremiger Pasta- Auflauf mit Tomaten und Mozzarella ',
                    author: 'Jenny Rose',
                    cat: 'Team Happy Plates',
                    img: RecipeImage10,
                    avatar: AvatarImage10
                },
                {
                    id: uuidv4(),
                    title: 'Spaghetti Bolognese',
                    author: 'Magda Wagner',
                    cat: 'Kochbuchautorin',
                    img: RecipeImage11,
                    avatar: AvatarImage11
                },
                {
                    id: uuidv4(),
                    title: 'Galette Violette',
                    author: 'Jenny Rose',
                    cat: 'Team Happy Plates',
                    img: RecipeImage12,
                    avatar: AvatarImage12
                }
            ]
        }
    ],
    recipesListD: [
        {
            id: uuidv4(),
            title: 'Sandwich Rezepte',
            recipes: [
                {
                    id: uuidv4(),
                    title: 'Frühstücks Sandwich mit Rührei und karamelisierten Zwiebeln',
                    author: 'János Spindler',
                    cat: 'Team Happy Plates',
                    img: RecipeImage13,
                    avatar: AvatarImage13
                },
                {
                    id: uuidv4(),
                    title: 'Sandwich mit Kichererbsensalat und DilleCremiger Pasta- Auflauf mit Tomaten und Mozzarella ',
                    author: 'Jenny Rose',
                    cat: 'Team Happy Plates',
                    img: RecipeImage14,
                    avatar: AvatarImage14
                },
                {
                    id: uuidv4(),
                    title: 'Steak Sandwich mit Blitz-Dijonnaise',
                    author: 'Jenny Rose',
                    cat: 'Team Happy Plates',
                    img: RecipeImage15,
                    avatar: AvatarImage15
                },
                {
                    id: uuidv4(),
                    title: 'Cremige Pilze auf geröstetem Brot',
                    author: 'Antje Seebach',
                    cat: 'Team Happy Plates',
                    img: RecipeImage16,
                    avatar: AvatarImage16
                }
            ]
        }
    ],
    recipesListE: [
        {
            id: uuidv4(),
            title: 'Sandwich Rezepte',
            recipes: [
                {
                    id: uuidv4(),
                    title: 'Süßkartoffel-Curry mit Zuckererbsenschoten',
                    author: 'Simone und Adi Raihmann',
                    cat: 'Karma Foof',
                    img: RecipeImage17,
                    avatar: AvatarImage17
                },
                {
                    id: uuidv4(),
                    title: 'Karfiolsteaks mit Joghurt-Minz Sauce ',
                    author: 'Simone und Adi Raihmann',
                    cat: 'Karma Foof',
                    img: RecipeImage18,
                    avatar: AvatarImage17
                },
                {
                    id: uuidv4(),
                    title: 'Schnelles Aloo Gobi - Indisches Süßkartoffel-Karfiol-Curry',
                    author: 'Simone und Adi Raihmann',
                    cat: 'Karma Foof',
                    img: RecipeImage19,
                    avatar: AvatarImage17
                },
                {
                    id: uuidv4(),
                    title: 'Jungspinat mit Chiliöl, Limetten und Minz-Koriander-Chutney',
                    author: 'Simone und Adi Raihmann',
                    cat: 'Karma Foof',
                    img: RecipeImage20,
                    avatar: AvatarImage17
                },
               
            ]
        }
    ],
    creators: [
        {
            id: uuidv4(),
            title: 'luisa menn',
            cat: 'Kochbuchautorin',
            img: CreatorsImage1
        },
        {
            id: uuidv4(),
            title: 'Jenny Rose',
            cat: 'Team Happy Plates',
            img: CreatorsImage2
        },
        {
            id: uuidv4(),
            title: 'Eddi Dimant',
            cat: 'Küchenchef Mochi',
            img: CreatorsImage3
        },
        {
            id: uuidv4(),
            title: 'Cleaneating Carry',
            cat: 'Food Bloggerin',
            img: CreatorsImage4
        },
        {
            id: uuidv4(),
            title: 'Ursula Melchhammer',
            cat: 'Ayurveda Köchin',
            img: CreatorsImage5
        },
        {
            id: uuidv4(),
            title: 'Florence Stoiber',
            cat: 'Food Bloggerin',
            img: CreatorsImage6
        },
    ]
}

export { data }