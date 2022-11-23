// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "A unique web card",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "To my dearest princess",  // 同上...
        "This is your 24th birthday",
        "And also",
        "Your 4th bday with me",
        "I've seen",
        "you all sort of faces",
        "Err wrong pic",
        "And created",
        "Tons of memories",
        "Tiramisu face",
        "2019 bday face",
        "2020 AIA face",
        "2021 Graduation face",
        "Boat P face",
        "Hiking face",
        "Camping face",
        "Foodie face",
        "Kayak face",
        "Post swim face",
        "Post Hike meal face",
        "Ocean park face",
        "And many more",
        "I will feed you well",
        "So that you have energy to work",
        "And miss me!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        
        //"A unique web card",
        //"To my dearest princess",
        //"This is your 24th birthday",
        //"And also",
        "Your 4th bday with me": "./imgs/with_me.jpg",
        //"I've seen",
        "you all sort of faces": "./imgs/v.jpg",
        "Err wrong pic": "./imgs/wrong.jpg",
        //"And created",
        "Tons of memories": "./imgs/first_meal.JPG",
        "Tiramisu face": "./imgs/tiramisu.jpg",
        "2019 bday face": "./imgs/2019 birthday.jpg",
        "2020 AIA face": "./imgs/aia.jpg",
        "2021 Graduation face": "./imgs/graduation.jpg",
        "Boat P face": "./imgs/boat_p.jpg",
        "Hiking face": "./imgs/hiking.jpg",
        "Camping face": "./imgs/camping.jpg",
        "Foodie face": "./imgs/foodie_face.jpg",
        "Kayak face": "./imgs/kayak.jpg",
        "Post swim face": "./imgs/post_swimming.jpg",
        "Post Hike meal face": "./imgs/post_hike.jpg",
        "Ocean park face": "./imgs/ocean_park.jpg",
        "And many more": "./imgs/cwb.jpg",
        "I will feed you well": "./imgs/feed_well.jpg",
        //"So that you have energy to work",
        "And miss me!": "./imgs/me.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "lets start!",
        play: "Music~!",
        bannar_coming: "Colour~",
        balloons_flying: "Seems like something is still missing...",
        cake_fadein: "Cake???",
        light_candle: "Candle???",
        wish_message: "Happy Birthday to my Bee Bee :D",
        story: "A MESSAGE FOR YOU",
    }
};
