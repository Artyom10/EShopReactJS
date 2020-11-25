const state = {
    mainPage: {
        brands: [ {
            "title": "Tommy Hilfiger",
            "urlPhoto": "https://sun9-13.userapi.com/impg/xN5D8Yh3MgDVF9ajbLcPqLECprYTUgYRh-eX7A/MNApVqDxm3w.jpg?size=1600x1940&quality=96&proxy=1&sign=def7aa8d2f59c73835b66bfa4d17eaa2"
           },
           {
           "title": "Polo Ralph Lauren",
           "urlPhoto": "https://sun9-61.userapi.com/impg/bYX_qovkC0Gn2o2pl7qH8ZRNeA7VcOHqfh5tKA/0LY-RT1jW7g.jpg?size=1600x1940&quality=96&proxy=1&sign=3e1ca3a8bee9f8a6514f950f094fa8a2"
           },
           {
           "title": "Hugo Boss",
           "urlPhoto": "https://sun9-20.userapi.com/impg/UMv0fl1YvOYKUUPQq6YX44q4_UCUljuIIGmd0g/PhrM3l2W7Gk.jpg?size=1600x1940&quality=96&proxy=1&sign=a12bc5b3c55c62b9efeefa19c38216d2"
           },
           {
           "title": "Carhartt",
           "urlPhoto": "https://sun9-46.userapi.com/impg/nSojveHYD_IA9-O89sXKQde6ql2AGj21UhqCaA/ZjUF279FeUI.jpg?size=1600x1940&quality=96&proxy=1&sign=5578d0354eb85c4f864e3e22b0b5e877"
           },],
        products: [ {
            "id": 1,
             "urlPhoto": "https://sun9-75.userapi.com/impg/v9-83eUNEQ5s5JdHfLDdcFXVoSdZ8CvseVH3Tw/JAxl7sVkPs4.jpg?size=762x1100&quality=96&proxy=1&sign=524d2c12b64f491a17abd599fa4318f7",
             "price": "50$",
             "producer": "Mango",
             "type": "Jacket",
             "sizes": "XS,S,M,L",
             "description": "Something",
             "tags": "#mango, #jacket, #streetware"
            },
            {
                "id": 2,
                "urlPhoto": "https://sun9-68.userapi.com/impg/BHwQV6ItiqEBIU0jgzXb4LpWm4R_8639f7WF9g/tBB8NyRwMhE.jpg?size=1496x2160&quality=96&proxy=1&sign=17b1b3045f69aab4a771d0fb9e4511a4",
                "price": "100$",
                "producer": "Carhartt",
                "type": "Down jacket",
                "sizes": "S,M,L",
                "description": "Something",
                "tags": "#carhartt, #jacket"
               },
               {
                "id": 3,
                "urlPhoto": "https://sun9-66.userapi.com/impg/VrtHC75OfFYYCa9JfkL-W7cORCkFEIhGKFbwBw/ym1NDhSC9fs.jpg?size=1496x2160&quality=96&proxy=1&sign=b908d4ad177c98974ad56576acfa6bf3",
                "price": "35$",
                "producer": "Diesel",
                "type": "Shirt",
                "sizes": "S",
                "description": "Something",
                "tags": "#diesel, #shirt"
               },
               {
                "id": 4,
                "urlPhoto": "https://sun9-52.userapi.com/impg/kz7_A2GPc8s3WwGZDSkyNGgcWJactYgDYlQqug/WQpW-9mdTWU.jpg?size=600x866&quality=96&proxy=1&sign=bc15dc8d948e3c67970b3d255f2b19f6",
                "price": "70$",
                "producer": "Mango",
                "type": "Jacket",
                "sizes": "XS,S,M,L",
                "description": "Something",
                "tags": "#mango, #jacket"
               },
               {
                "id": 5,
                "urlPhoto": "https://sun9-51.userapi.com/impg/mP-HyBe0hlpJkK8JLrjuDsvlfC5N897l38-cJQ/q656OVsD3Xk.jpg?size=600x866&quality=96&proxy=1&sign=2aa238d9da68b421b4aafb1f652d2b36",
                "price": "70$",
                "producer": "Mango",
                "type": "Coat",
                "sizes": "M,L",
                "description": "Something",
                "tags": "#mango, #coat"
               },
               {
                "id": 6,
                "urlPhoto": "https://sun9-53.userapi.com/impg/rZO7uzY77jW4S1C_bZFjOEDbjO40s8bk-rgGRA/q3v79SyeC5I.jpg?size=600x866&quality=96&proxy=1&sign=1085920c0f91da8084a5005d9f1b18c0",
                "price": "47$",
                "producer": "Mango",
                "type": "Pants",
                "sizes": "M,L,XL",
                "description": "Something",
                "tags": "#mango, #pants"
               },
               {
                "id": 7,
                "urlPhoto": "https://sun9-13.userapi.com/impg/6bJBE1DBLwKvFu8csRcfTtHkHHuMKZaQCOkMeg/QYXQybTR_Uo.jpg?size=1496x2160&quality=96&proxy=1&sign=33b12de91d790063bef8b9b6a52f0abe",
                "price": "500$",
                "producer": "Diesel",
                "type": "Coat",
                "sizes": "XS,S,M",
                "description": "Something",
                "tags": "#diesel, #coat"
               },
               {
                "id": 8,
                "urlPhoto": "https://sun9-52.userapi.com/impg/xWd_NaCKK7vVjAIBP0dTekN36nsRI9kidnelOw/V7IfJ1kIGO8.jpg?size=762x1100&quality=96&proxy=1&sign=ec477ba05df76b5c6a800f2f0b3ebeee",
                "price": "47$",
                "producer": "Mango",
                "type": "Pants",
                "sizes": "M,L,XL",
                "description": "Something",
                "tags": "#mango, #pants"
               }],
               sliders: [{
                "id":1,
                "urlPhoto":
                  "https://sun9-30.userapi.com/impg/2-KK4RLEzdUJIf2ngjIbXW5jWn-AnUavK0ZDvQ/0NQ4fNZsRnM.jpg?size=1128x634&quality=96&proxy=1&sign=bc862b17a08a11896dbbab6d6b1061b5",
                "text": "In our store you will find only the best clothes, most likely we will not be able to find something similar on the Internet.",
              },
              {
                "id":2,
                "urlPhoto":
                  "https://sun9-67.userapi.com/impg/WIT9k2o-JkFX8bHBYN58xLdL0VLf5qPdy4NtMA/oWMcdsxN3yk.jpg?size=1128x634&quality=96&proxy=1&sign=a7cfa799213dc1fc04334f8adeb4f45e",
                "text": "Thank you for choosing on our website, you can not only buy one thing, you can also choose several things at once creating your own style",
              },
              {
                "id":3,
                "urlPhoto":
                  "https://sun9-55.userapi.com/impg/OtcJv2MLv3spezj6IAS5nDl8ItkxkeCA6-EvCw/ABCT-qapl3c.jpg?size=1128x634&quality=96&proxy=1&sign=2b4b5724065412a1aee9c6850891a70b",
                "text": "Always be in fashion with our selection. Here you can buy only the most fashionable and trendy clothes",
              },],
            stylesData: [{
                "urlPhoto": "https://sun9-26.userapi.com/impg/bYrumQNTerWhQ2Hr-HF6NKecpc4c_sgLNMlX6A/FY7brYuv_vM.jpg?size=854x1280&quality=96&proxy=1&sign=9af21754a3340b17d8d2e81662914168",
                "title": "Classic"
              },
              {
                "urlPhoto": "https://sun9-51.userapi.com/impg/tjL4G2VVbwzvGZPyL_pdtcxX6lwZH0xilhHpWg/unfQ8ndBZzM.jpg?size=1000x1500&quality=96&proxy=1&sign=4848d75bd2c8ef93a773137e426b5fde",
                "title": "Casual"
              },
              {
                "urlPhoto": "https://sun9-42.userapi.com/impg/yaiH1cNJX1VvBdIyTjWHX3YJwUaqVMKlb3Aymg/HdUxTHR13e4.jpg?size=900x1350&quality=96&proxy=1&sign=fb81c6251d24c625c56ed3d33b7d03d3",
                "title": "Military"
              },]
            },
    clientsPage: {
        clients:[ {
            "id": 1,
            "firstName": "Mark",
            "secondName": "Otto",
            "username": "@mdo",
            "mail": "markotto@gmail.com",
            "request": "False",
            "pawword": "12345",
            "urlPhoto": "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf"
         },
         {
             "id": 2,
             "firstName": "Jacob",
             "secondName": "Thornton",
             "username": "@fat",
             "mail": "jacobth@gmail.com",
             "request": "False", 
             "pawword": "12345",
             "urlPhoto": "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf"
          },
          {
             "id": 3,
             "firstName": "Larry",
             "secondName": "Bird",
             "username": "@twitter",
             "mail": "larrybird@gmail.com",
             "request": "False", 
             "pawword": "12345",
             "urlPhoto": "https://sun9-11.userapi.com/impg/kmBJYJ5uzeAzzFzjzsKNPk-_-XVrImJWvS0ILw/4c_igfiEqMI.jpg?size=512x512&quality=96&proxy=1&sign=093166373fa3195e88d2f44ed114afcf"
          }],
    },
    bagPage: {
        bags: [{
            "id": 1,
             "urlPhoto": "https://sun9-75.userapi.com/impg/v9-83eUNEQ5s5JdHfLDdcFXVoSdZ8CvseVH3Tw/JAxl7sVkPs4.jpg?size=762x1100&quality=96&proxy=1&sign=524d2c12b64f491a17abd599fa4318f7",
             "price": "50$",
             "producer": "Mango",
             "type": "Jacket",
             "sizes": "XS,S,M,L",
             "description": "Something",
             "tags": "#mango, #jacket, #streetware"
            },
           
               {
                "id": 2,
                "urlPhoto": "https://sun9-52.userapi.com/impg/xWd_NaCKK7vVjAIBP0dTekN36nsRI9kidnelOw/V7IfJ1kIGO8.jpg?size=762x1100&quality=96&proxy=1&sign=ec477ba05df76b5c6a800f2f0b3ebeee",
                "price": "47$",
                "producer": "Mango",
                "type": "Pants",
                "sizes": "M,L,XL",
                "description": "Something",
                "tags": "#mango, #pants"
               },],
    },

}

export default state;