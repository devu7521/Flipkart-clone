

let arr = [
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
      href:'Product.html'
      
    },
    
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home and Furtinure",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
      title: "Appliances",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
      title: "Travel",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty,Toys and More",
     
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
     
    },
  ];
//   Javascript map() method creates an array by calling a specific function on each element present in the parent array.and we use it  beacuse we want to show the content of array into  our html page and using map we can look over an array and will give every object of array
//  element-it is nothing but a tag in devoloper lang
  arr.map((element)=>
  {
    // creating new element inside array
    let image= document.createElement('img');
    image.src=element.img_src;
    let title=document.createElement("p");
    // to write something inside p tag we will use innerHtml
    title.innerHTML=element.title;
    let box=document.createElement('div');
    box.append(image,title);
    document.getElementById("categories").append(box);
    

  })
let a = document.getElementById("categories");
// we are using document word beacuse we are using DOM (dociment object model) to implement this website and making it responsive.

  
