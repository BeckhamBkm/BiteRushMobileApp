import axios from "axios";
import React, { useEffect, useState } from "react";




export const restaurants = [
    {
        "name":"Steers",
        "logo":"https://upload.wikimedia.org/wikipedia/en/1/1e/Steers_Logo.jpg",
        "displayPic":"https://pineslopesboulevard.co.za/wp-content/uploads/2020/07/meal-steers-delft-mall.jpg",
        "rating":"4.0",
        "suburb":"Pretoria",
        "street":"Pretorius Street 2"
    },
    {
        "name":"Spur",
        "logo":"https://upload.wikimedia.org/wikipedia/en/3/39/Spur_Steak_Ranch_logo.png",
        "displayPic":"https://gorhino.co.za/wp-content/uploads/2001/10/spur.jpg",
        "rating":"4.4",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2"
    },
    {
        "name":"KFC",
        "logo":"https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
        "displayPic":"https://d1ralsognjng37.cloudfront.net/6a4e6663-6ac6-47c5-a58a-23a785b24868.jpeg",
        "rating":"4.7",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2",
        "tabItems":[      
            "Featured Items",
            "Picked for you",
            "Promotions",
            "Buckets",
            "FamilyTreat",
            "BoxMeals",
            "Burgers",
            "Twisters",
            "StreetWise",
            "Wings",
            "Snacks & Sides",
            "Treats",
            "Drinks",
    ]
    },
    {
        "name":"Debonairs Pizza",
        "logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRBg0pllSiU4OmYKk05A1QH_vgeij_wtL5mXdBaxaIA&s",
        "displayPic":"https://tb-static.uber.com/prod/image-proc/processed_images/1ea23d6a167ccf6e0c68f16599d5f402/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        "rating":"4.8",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2"
    },
    {
        "name":"Roman's Pizza",
        "logo":"https://pbs.twimg.com/profile_images/1500745743627341824/2uu9aPJL_400x400.jpg",
        "displayPic":"https://tableviewinfo.co.za/wp-content/uploads/2017/07/romans2.jpg",
        "rating":"3.7",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2"
    },
    {
        "name":"McDonald's",
        "logo":"https://dawsondickson.files.wordpress.com/2016/11/mcdonalds.png",
        "displayPic":"https://tb-static.uber.com/prod/image-proc/processed_images/8ad6c3de15b6aac4d89a06822e71ca05/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        "rating":"4.2",
        "suburb":"Pretoria Central",
        "street":"Paul Kruger"
    },
    {
        "name":"Chicken Licken",
        "logo":"data:image/png;base64,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",
        "displayPic":"https://menusouthafrica.com/wordpress/wp-content/uploads/2023/06/chicken-licken-Menu.jpg",
        "rating":"3.8",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2"
    },
    {
        "name":"Nando's",
        "logo":"https://1000logos.net/wp-content/uploads/2017/09/Nandos-Logo.png",
        "displayPic":"https://www.suncoastcasino.co.za/wp-content/uploads/2020/08/3842-Website-Images-Nandos-Suncoast_Winter-2022_Header_1920x10002.jpg",
        "rating":"4.3",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2"
    },
    {
        "name":"Burger King",
        "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1200px-Burger_King_logo_%281999%29.svg.png",
        "displayPic":"https://tb-static.uber.com/prod/image-proc/processed_images/798222427fa48dddae3250557266c5e1/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg",
        "rating":"5.3",
        "suburb":"Arcadia",
        "street":"Pretorius Street 2"
    }
    
]

export const foodCategories = [
    {
        "category":"Pizza",
        "logo":"data:image/png;base64,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"
    },
    {
        "category":"Burgers",
        "logo":"https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
    },
    {
        "category":"Halaal"
    },
    {
        "category":"Wings",
        "logo":"https://cdn.icon-icons.com/icons2/3277/PNG/512/fried_chicken_bucket_chicken_wings_food_icon_208005.png"
    },
    {
        "category":"Chicken",
        "logo":"https://cdn-icons-png.flaticon.com/512/8688/8688558.png"
    },
    {
        "category":"Asian"
    },
    {
        "category":"Indian"
    },
    {
        "category":"SeaFood"
    },
    {
        "category":"Desserts",
        "logo":"https://icons.veryicon.com/png/o/cartoon/christmas-icon/dessert-2.png"
    }
]

export const tabItems = [  
    {name:"Featured Items",
        items:["one,two,three"]
    },   
    {name:"Picked for you"},
    {name:"Promotions"},
    {name:"Buckets"},
    {name:"FamilyTreat"}, 
    {name:"BoxMeals"},
    {name:"Burgers"},
    {name:"Twisters"},
    {name:"StreetWise"},
    {name:"Wings"},
    {name:"Snacks & Sides"},
    {name:"Treats"},
    {name:"Drinks"}
]