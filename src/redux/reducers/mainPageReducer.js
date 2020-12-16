
const initialState = {
    brands: [
      {
        title: /*"Tommy Hilfiger"*/ 'Pants',
        urlPhoto:
        "https://sun9-49.userapi.com/impg/Yc2WgYCxxofy_Vzn8awYjabOZgPcytZ-zLXyZQ/RxXuvpqgl-0.jpg?size=1600x1940&quality=96&proxy=1&sign=fd92a716e2661985c70ced4343816b6e" 
        //"https://sun9-13.userapi.com/impg/xN5D8Yh3MgDVF9ajbLcPqLECprYTUgYRh-eX7A/MNApVqDxm3w.jpg?size=1600x1940&quality=96&proxy=1&sign=def7aa8d2f59c73835b66bfa4d17eaa2",
      },
      {
        title:/* "Polo Ralph Lauren"*/ 'Jacket',
        urlPhoto:
        "https://sun9-14.userapi.com/impg/PKMrR-Zz0XdWWxgUb-qTbA_-iOyDkWh8hU3EkQ/S754s1bG-Ak.jpg?size=1600x1940&quality=96&proxy=1&sign=f2573fe5d98f349aaf1d931a972f8e71"
          //"https://sun9-61.userapi.com/impg/bYX_qovkC0Gn2o2pl7qH8ZRNeA7VcOHqfh5tKA/0LY-RT1jW7g.jpg?size=1600x1940&quality=96&proxy=1&sign=3e1ca3a8bee9f8a6514f950f094fa8a2",
      },
      {
        title: /*"Hugo Boss"*/ "Coat",
        urlPhoto:
        "https://sun9-47.userapi.com/impg/FTkXfhWFj1cWXw9ttZau2D4FInYtW2zc3YAo2g/ipm_NNR_bhk.jpg?size=1600x1940&quality=96&proxy=1&sign=73b2fdab52f048504e45882a1af85041"
          //"https://sun9-20.userapi.com/impg/UMv0fl1YvOYKUUPQq6YX44q4_UCUljuIIGmd0g/PhrM3l2W7Gk.jpg?size=1600x1940&quality=96&proxy=1&sign=a12bc5b3c55c62b9efeefa19c38216d2",
      },
      {
        title: /*"Carhartt"*/ "Shirt",
        urlPhoto:
        "https://sun9-14.userapi.com/impg/6OsrKT2FNI4aFQ4GYWm2z5f2o8FaH6G51g1cIw/GHpa4Vkeg-Y.jpg?size=1600x1940&quality=96&proxy=1&sign=a0771a6af59ff360846452d182dcbc20"
          //"https://sun9-46.userapi.com/impg/nSojveHYD_IA9-O89sXKQde6ql2AGj21UhqCaA/ZjUF279FeUI.jpg?size=1600x1940&quality=96&proxy=1&sign=5578d0354eb85c4f864e3e22b0b5e877",
      },
    ],
    sliders: [
      {
        id: 1,
        urlPhoto:
          "https://sun9-30.userapi.com/impg/2-KK4RLEzdUJIf2ngjIbXW5jWn-AnUavK0ZDvQ/0NQ4fNZsRnM.jpg?size=1128x634&quality=96&proxy=1&sign=bc862b17a08a11896dbbab6d6b1061b5",
        text:
          "In our store you will find only the best clothes, most likely we will not be able to find something similar on the Internet.",
      },
      {
        id: 2,
        urlPhoto:
          "https://sun9-67.userapi.com/impg/WIT9k2o-JkFX8bHBYN58xLdL0VLf5qPdy4NtMA/oWMcdsxN3yk.jpg?size=1128x634&quality=96&proxy=1&sign=a7cfa799213dc1fc04334f8adeb4f45e",
        text:
          "Thank you for choosing on our website, you can not only buy one thing, you can also choose several things at once creating your own style",
      },
      {
        id: 3,
        urlPhoto:
          "https://sun9-55.userapi.com/impg/OtcJv2MLv3spezj6IAS5nDl8ItkxkeCA6-EvCw/ABCT-qapl3c.jpg?size=1128x634&quality=96&proxy=1&sign=2b4b5724065412a1aee9c6850891a70b",
        text:
          "Always be in fashion with our selection. Here you can buy only the most fashionable and trendy clothes",
      },
    ],
    stylesData: [
      {
        urlPhoto:
          "https://sun9-26.userapi.com/impg/bYrumQNTerWhQ2Hr-HF6NKecpc4c_sgLNMlX6A/FY7brYuv_vM.jpg?size=854x1280&quality=96&proxy=1&sign=9af21754a3340b17d8d2e81662914168",
        title: "Classic",
      },
      {
        urlPhoto:
          "https://sun9-51.userapi.com/impg/tjL4G2VVbwzvGZPyL_pdtcxX6lwZH0xilhHpWg/unfQ8ndBZzM.jpg?size=1000x1500&quality=96&proxy=1&sign=4848d75bd2c8ef93a773137e426b5fde",
        title: "Casual",
      },
      {
        urlPhoto:
          "https://sun9-42.userapi.com/impg/yaiH1cNJX1VvBdIyTjWHX3YJwUaqVMKlb3Aymg/HdUxTHR13e4.jpg?size=900x1350&quality=96&proxy=1&sign=fb81c6251d24c625c56ed3d33b7d03d3",
        title: "Military",
      },
    ],
 
  };

const mainPageReducer = (state = initialState, action) => {
  return state;
};


export default mainPageReducer;