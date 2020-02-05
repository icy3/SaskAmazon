const express = require("express");
const bodyParser = require("body-parser");
const db = require(".././database/database.js");
const cors = require("cors");

const app = express();
const PORT = 4137;

app.use(cors()); // necessary for cross origin problems
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('/client/src'));
app.use(express.static(__dirname + "/../client/dist"));
// app.use(express.static(__dirname + '/../client/dist'));

app.get("/", (req, res) => {
  // console.log("In server, this is the request: ", req)
  db.getAllTransactions(req.body.data, (err, resulty) => {
    if (err) {
      console.log(err); 
    } else {
      res.send(resulty);
    }
  });
});
app.get("/product/:id", (req, res) => {
  console.log("In server, this is the request: ", req.params.id);
    db.getProd(req.params.id, (err, resulty) => {
      if (err) {
        console.log("WILLISSSSSS",err); 
      } else {
        res.send(resulty);
      }
    });
  });
  
  app.get('/insertallTransactions', (req, res) => {
    console.log("THISISreq",req)
      db.createTransactions(req, (err, data) => {
        if (err) console.error('server get error');
        res.send(data);
      })
    });
    
    
    app.delete("/deleteTransaction/:id", (req, res) => {
      //the ':/id' end point acts like a variable and allows the /deleteTransaction/:id route to be dynamic, id = 1,2,etc
      console.log("delete at id", req.params);
      const id = req.params.id;
    });
    
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  
  //ZZZZZZZZZZZZZSomething like that for final?
  //     const { id } = req.params;
  //     db.getProd(req.params.id, (err, {id}) => {
  //     if(err){
  //       console.log("WILLISSSSSS",err); 
  //     }else{
  //     res.send({ id });
  //     }
  //   })
  // })
  //ENDZZZZZZZZZZZZZSomething like that for final?END

  // app.get("/allTransactions", (req, res) => {
//   // console.log("In server, this is the request: ", req)
//   db.getProd(req.body.productName, (err,data) => {
//     if (err) {
//       console.log(err); 
//     } else {
//       res.send(data);
//     }
//   });
// });
  
  //setup basic routes
  // error first cb
  // app.get("/postAllTransactions", (req, res) => {
  //   console.log("This is the request in server for POSTXyz: ", req.body.data);
  //   //req.body.data
  //   let transactions = req.body.data;
  //   for (var i = 0; i < transactions.length; i++) {
  //     let transaction = transactions[i];
  //     console.log("THIS IT THE LOOPING=",transaction);
  //     db.createTransactions(transaction, err => {
  //       if (err) {
  //         console.log(err); 
  //       }else{
  //       res.send();
  //     };
  //   },req.body.data)
  // }})
  
  
  // app.get("/postAllTransactions", (req, res) => {
  //   db.createTransactions(req.body, (err,result) => {
  //     if (err) {console.log(err)
  //     }else if(result){
  //       console.log(result)};
  //     res.send(result)
  //     })
  //   })
  
  //
  // testing things for the google docs sheets page!
  //
  
  // DUMMY DATA FOR ***
  //      CATAGORY 4
  // DUMMY DATA FOR ***
  
  // checking to see if copy/paste worked
  
  /*
  var x = [ {
    productId: 52,
    productName: 'Le Bon Shoppe Envie Sweater',
    productDescription: 'Slightly oversized fit with above the hip hem. Soft and fluffy with no itch. 59% polyester, 29% acrylic, 9% wool, 3% spandex.',
    price: 110.00,
    category_id: 4,
    imgUrls: [ 'https://static.wixstatic.com/media/63bd66_b7aa0acaa404441982eebecda429e3fd~mv2.png',
    'https://static.wixstatic.com/media/63bd66_9d56e3915eba4e2db4726d7391d121f1~mv2.jpg', 'https://static.wixstatic.com/media/63bd66_4fccf111980047d1b644e3ef406f1997~mv2_d_2048_1536_s_2.jp', 'https://static.wixstatic.com/media/63bd66_ead2f56317fd466ca46a383278767298~mv2_d_2048_1760_s_2.jpg', 'https://static.wixstatic.com/media/63bd66_0aa2e36d6da04c1b844d63a6afe3ff52~mv2.jpg'
  ]
} ,
{
  productId: 53,
  productName: 'axe holster',
  productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
  Price: 1.00,
  Category_id: 4,
  imgUrls: ['https://www.canadianoutdoorequipment.com/images/P/cache/damn-yak-axe-holster-620x338.jpg'
]
} , 
{
  
  productId: 54,
	productName: 'beaver',
	productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine. ',
	price: 1.00,
	category_id: 4,
  imgUrls: [ 'http://cwf-fcf.org/assets/images/CW-JulAug-Beaver.jpg'
        ]
} ,
{
  productId: 55,
  productName: 'pants',
  productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
  Price: 1.00,
  Category_id: 4,
  imgUrls: ['https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUvt7NChnjoACHVD1zhiImfhLU-M9RzLbz8p1wXeXBmhqZg0Ja4o5_qp3MzC00p8UdhJQYS3UI&usqp=CAc'
  ]
      } ,
      {
        productId: 56,
        productName: 'flannel',
        productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
        Price: 1.00,
        Category_id: 4,
        imgUrls: ['https://i.pinimg.com/originals/db/43/9a/db439a36b8442214aafef231153351e9.jpg'
        ]
            } ,
            {
              productId: 57,
              productName: 'belt',
              productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
              Price: 1.00,
              Category_id: 4,
              imgUrls: ['https://generalleathercraft.com/wp-content/uploads/2018/03/Custom-Canada-Belt.png'
              ]
                  } ,
                  {
                    productId: 58,
                    productName: 'candy',
                    productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                    Price: 1.00,
                    Category_id: 4,
                    imgUrls: ['http://cdn.shopify.com/s/files/1/0892/1918/products/smores_grande.jpg'
                    ]
                        } ,
                  {
                    productId: 59,
                    productName: 'tshirt',
                    productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                    Price: 1.00,
                    Category_id: 4,
                    imgUrls: ['https://d1w8c6s6gmwlek.cloudfront.net/yournexttshirt.com/products/443/667/4436676.png'
                    ]
                        } ,
                        {
                          productId: 60,
                          productName: 'tshirt',
                          productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                          Price: 1.00,
                          Category_id: 4,
                          imgUrls: ['http://ocanadagear.com/graphics/tshirt-ilovecanada1.jpg'
                          ]
                              } ,

                              {
                                productId: 61,
                                productName: 'tshirt',
                                productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                Price: 1.00,
                                Category_id: 4,
                                imgUrls: ['https://i.ebayimg.com/images/g/1YAAAOSwVYhcBstw/s-l300.jpg'
                                ]
                                    } ,
                                    {
                                      productId: 62,
                                      productName: 'tshirt',
                                      productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                      Price: 1.00,
                                      Category_id: 4,
                                      imgUrls: ['https://i.etsystatic.com/5622545/r/il/090b63/1751002904/il_570xN.1751002904_djkv.jpg'
                                      ]
                                          } ,

                                          {
                                            productId: 63,
                                            productName: 'tshirt',
                                            productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                            Price: 1.00,
                                            Category_id: 4,
                                            imgUrls: ['https://i0.wp.com/shirts-n-giggles.com/wp-content/uploads/2017/10/mockup-6c103f07.jpg'
                                            ]
                                                } ,
                                                {
                                                  productId: 64,
                                                  productName: 'tshirt',
                                                  productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                                  Price: 1.00,
                                                  Category_id: 4,
                                                  imgUrls: ['https://image.shutterstock.com/image-vector/trust-me-m-canadian-tshirt-600w-1084051736.jpg'
                                                  ]
                                                      } ,
                                                      {
                                                        productId: 65,
                                                        productName: 'tshirt',
                                                        productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                                        Price: 1.00,
                                                        Category_id: 4,
                                                        imgUrls: ['https://di2ponv0v5otw.cloudfront.net/posts/2019/07/19/5d323eaf29f030572488b960/m_5d323ebaa20dfc782a589db2.jpg'
                                                        ]
                                                            } ,
                                                            {
                                                              productId: 66,
                                                              productName: 'tshirt',
                                                              productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                                              Price: 1.00,
                                                              Category_id: 4,
                                                              imgUrls: ['https://i.etsystatic.com/20402614/c/1440/1144/0/646/il/a54104/1906641838/il_340x270.1906641838_g05d.jpg'
                                                              ]
                                                                  } ,
                                                                  {
                                                                    productId: 67,
                                                                    productName: 'tshirt',
                                                                    productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                                                    Price: 1.00,
                                                                    Category_id: 4,
                                                                    imgUrls: ['https://ak1.ostkcdn.com/images/products/28157125/Mens-Sorry-Definition-Tshirt-Funny-Canada-Apology-Tee-73327532-f59b-4998-8460-0d526877acda_600.jpg'
                                                                    ]
                                                                        } ,
                                                                        {
                                                                          productId: 68,
                                                                          productName: 'tshirt',
                                                                          productDescription: 'carpet in places everyone can see - why hide my amazing artistic clawing skills? brown cats with pink ears hunt anything that moves. My left donut is missing, as is my right why use post when this sofa is here but good morning sunshine.',
                                                                          Price: 1.00,
                                                                          Category_id: 4,
                                                                          imgUrls: ['https://i.etsystatic.com/13007480/r/il/735bf9/1577052982/il_fullxfull.1577052982_juey.jpg'
                                                                          ]
                                                                              } ,    
]
*/
