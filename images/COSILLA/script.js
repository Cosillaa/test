let currentIndex = 0;
let currentImages = [];
const products = [
  {
    name: "🌷 Mã  : AD81 🌷",
    brand: "@wepretty.clothes",
    size: "S <50kg",
    price: "80🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma81.webp", "images/ma811.webp", "images/ma812.webp"],
  },
  {
    name: "🌷 Mã  : AD80 🌷",
    brand: "@mieufashionista",
    size: "M <60kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma80.webp",
      "images/ma801.webp",
      "images/ma802.webp",
      "images/ma803.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD79 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma79.webp",
      "images/ma791.webp",
      "images/ma792.webp",
      "images/ma793.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD78 🌷(Ngũ Thân kèm mấn)",
    size: "M <55kg",
    price: "80🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma78.webp",
      "images/ma781.webp",
      "images/ma782.webp",
      "images/ma783.webp",
      "images/ma784.webp",
      "images/ma785.webp",
      "images/ma786.webp",
      "images/ma787.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD77 🌷",
    brand: "@wepretty.clothes",
    size: "S <50kg",
    price: "80🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma77.webp",
      "images/ma771.webp",
      "images/ma772.webp",
      "images/ma773.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD76 🌷",
    brand: "@edini.vn",
    size: "Freesize",
    price: "60🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma76.webp",
      "images/ma761.webp",
      "images/ma762.webp",
      "images/ma763.webp",
      "images/ma764.webp",
      "images/ma765.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD75 🌷",
    size: "S <48kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma75.webp",
      "images/ma751.webp",
      "images/ma752.webp",
      "images/ma753.webp",
      "images/ma754.webp",
      "images/ma755.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD74 🌷(Xanh)",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma74.webp",
      "images/ma741.webp",
      "images/ma742.webp",
      "images/ma743.webp",
      "images/ma744.webp",
      "images/ma745.webp",
      "images/ma746.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD73 🌷",
    size: "Freesize <58kg",
    price: "80🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma73.webp",
      "images/ma731.webp",
      "images/ma732.webp",
      "images/ma733.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD72 🌷",
    size: "S <52kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma72.webp",
      "images/ma721.webp",
      "images/ma722.webp",
      "images/ma723.webp",
      "images/ma724.webp",
      "images/ma725.webp",
      "images/ma726.webp",
      "images/ma727.webp",
      "images/ma728.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD71 🌷",
    size: "S <48kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma71.webp",
      "images/ma711.webp",
      "images/ma712.webp",
      "images/ma713.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD70 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma70.webp",
      "images/ma701.webp",
      "images/ma702.webp",
      "images/ma703.webp",
      "images/ma704.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD69 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma69.webp",
      "images/ma691.webp",
      "images/ma692.webp",
      "images/ma693.webp",
      "images/ma694.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD65 🌷",
    size: "M < 55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma65.webp",
      "images/ma651.webp",
      "images/ma652.webp",
      "images/ma653.webp",
      "images/ma654.webp",
      "images/ma655.webp",
      "images/ma656.webp",
      "images/ma657.webp",
      "images/ma658.webp",
      "images/ma659.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD63 🌷",
    size: "M",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma63.webp",
      "images/ma631.webp",
      "images/ma632.webp",
      "images/ma633.webp",
      "images/ma634.webp",
      "images/ma635.webp",
      "images/ma636.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD68 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma68.webp",
      "images/ma681.webp",
      "images/ma682.webp",
      "images/ma683.webp",
      "images/ma684.webp",
      "images/ma685.webp",
      "images/ma686.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD67 🌷",
    size: "S < 50kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma67.webp",
      "images/ma671.webp",
      "images/ma672.webp",
      "images/ma673.webp",
      "images/ma674.webp",
      "images/ma675.webp",
      "images/ma676.webp",
      "images/ma677.webp",
      "images/ma678.webp",
      "images/ma679.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD66 🌷",
    size: "Freesize",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma66.webp",
      "images/ma661.webp",
      "images/ma662.webp",
      "images/ma663.webp",
      "images/ma664.webp",
      "images/ma665.webp",
      "images/ma666.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD64 🌷( hồng )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma64.webp",
      "images/ma641.webp",
      "images/ma642.webp",
      "images/ma643.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD62 🌷",
    size: "S < 50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma62.webp",
      "images/ma621.webp",
      "images/ma622.webp",
      "images/ma623.webp",
      "images/ma624.webp",
      "images/ma625.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD61 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma61.webp",
      "images/ma611.webp",
      "images/ma612.webp",
      "images/ma613.webp",
      "images/ma64.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD60 🌷 ( đỏ )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma60.webp",
      "images/ma601.webp",
      "images/ma602.webp",
      "images/ma603.webp",
      "images/ma604.webp",
    ],
  },
  {
    name: "🌷 Mã  : AD58 (đỏ) AD59 (xanh)🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma58_59.webp",
      "images/ma58_591.webp",
      "images/ma58_592.webp",
      "images/ma58_593.webp",
    ],
  },
  {
    name: "🌷 Mã : AD57 🌷",
    size: "M < 55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma57.webp",
      "images/ma571.webp",
      "images/ma572.webp",
      "images/ma573.webp",
      "images/ma574.webp",
      "images/ma575.webp",
      "images/ma576.webp",
      "images/ma577.webp",
    ],
  },
  {
    name: "🌷 Mã : AD56 🌷",
    size: "S < 52kg",
    price: "60🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma56.webp",
      "images/ma561.webp",
      "images/ma562.webp",
      "images/ma563.webp",
      "images/ma564.webp",
      "images/ma565.webp",
      "images/ma566.webp",
      "images/ma567.webp",
      "images/ma568.webp",
      "images/ma569.webp",
    ],
  },
  {
    name: "🌷 Mã : AD54 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma54.webp",
      "images/ma541.webp",
      "images/ma542.webp",
      "images/ma543.webp",
      "images/ma544.webp",
      "images/ma545.webp",
    ],
  },
  {
    name: "🌷 Mã : AD53 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma53.webp",
      "images/ma531.webp",
      "images/ma532.webp",
      "images/ma533.webp",
      "images/ma534.webp",
      "images/ma535.webp",
    ],
  },
  {
    name: "🌷 Mã : AD52 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma52.webp",
      "images/ma521.webp",
      "images/ma52.webp",
      "images/ma523.webp",
      "images/ma524.webp",
      "images/ma525.webp",
      "images/ma526.webp",
      "images/ma527.webp",
      "images/ma528.webp",
    ],
  },
  {
    name: "🌷 Mã : AD51 🌷",
    size: "S < 52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma51.webp",
      "images/ma511.webp",
      "images/ma512.webp",
      "images/ma513.webp",
      "images/ma514.webp",
      "images/ma515.webp",
    ],
  },
  {
    name: "🌷 Mã : AD50 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma50.webp",
      "images/ma501.webp",
      "images/ma502.webp",
      "images/ma503.webp",
      "images/ma504.webp",
      "images/ma505.webp",
      "images/ma506.webp",
    ],
  },
  {
    name: "🌷 Mã : AD49 🌷",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma49.webp", "images/ma491.webp", "images/ma492.webp"],
  },
  {
    name: "🌷 Mã : AD46 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma46.webp",
      "images/ma461.webp",
      "images/ma462.webp",
      "images/ma463.webp",
    ],
  },
  {
    name: "🌷 Mã : AD45 🌷(áo be quần xanh cốm)",
    size: "S < 55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma45.webp", "images/ma451.webp", "images/ma452.webp"],
  },
  {
    name: "🌷 Mã : AD44 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma44.webp",
      "images/ma441.webp",
      "images/ma442.webp",
      "images/ma443.webp",
      "images/ma444.webp",
    ],
  },
  {
    name: "🌷 Mã : AD43 🌷",
    size: "S < 50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma43.webp",
      "images/ma431.webp",
      "images/ma432.webp",
      "images/ma433.webp",
      "images/ma434.webp",
    ],
  },
  {
    name: "🌷 Mã : AD35 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma35.webp",
      "images/ma351.webp",
      "images/ma352.webp",
      "images/ma353.webp",
      "images/ma354.webp",
      "images/ma355.webp",
    ],
  },
  {
    name: "🌷 Mã : AD42 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma42.webp",
      "images/ma421.webp",
      "images/ma422.webp",
      "images/ma423.webp",
    ],
  },
  {
    name: "🌷 Mã : AD41 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma41.webp",
      "images/ma411.webp",
      "images/ma412.webp",
      "images/ma413.webp",
      "images/ma414.webp",
      "images/ma415.webp",
      "images/ma416.webp",
    ],
  },
  {
    name: "🌷 Mã : AD38 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma38.webp",
      "images/ma381.webp",
      "images/ma382.webp",
      "images/ma383.webp",
      "images/ma384.webp",
      "images/ma385.webp",
      "images/ma386.webp",
      "images/ma387.webp",
      "images/ma388.webp",
    ],
  },
  {
    name: "🌷 Mã : AD39 🌷 ( hồng )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma39.webp",
      "images/ma391.webp",
      "images/ma392.webp",
      "images/ma393.webp",
    ],
  },
  {
    name: "🌷 Mã : AD14 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma14.webp",
      "images/ma141.webp",
      "images/ma142.webp",
      "images/ma143.webp",
      "images/ma144.webp",
      "images/ma145.webp",
      "images/ma146.webp",
    ],
  },
  {
    name: "🌷 Mã : AD12 🌷",
    size: "M < 60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma12.webp",
      "images/ma121.webp",
      "images/ma122.webp",
      "images/ma123.webp",
      "images/ma124.webp",
    ],
  },
  {
    name: "🌷 Mã : AD11 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma11.webp",
      "images/ma111.webp",
      "images/ma112.webp",
      "images/ma113.webp",
      "images/ma114.webp",
    ],
  },
  {
    name: "🌷 Mã : AD40 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma40.webp",
      "images/ma401.webp",
      "images/ma402.webp",
      "images/ma403.webp",
      "images/ma404.webp",
    ],
  },
  {
    name: "🌷 Mã : AD37 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma37.webp",
      "images/ma371.webp",
      "images/ma372.webp",
      "images/ma373.webp",
      "images/ma374.webp",
      "images/ma375.webp",
    ],
  },
  {
    name: "🌷 Mã : AD36 🌷",
    brand: "@__chouchou.official",
    size: "L <55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: [
      "images/ma36.webp",
      "images/ma361.webp",
      "images/ma362.webp",
      "images/ma363.webp",
      "images/ma364.webp",
    ],
  },
  {
    name: "🌷 Mã : AD10 🌷",
    brand: "@remusedesigns",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma10.webp",
      "images/ma101.webp",
      "images/ma102.webp",
      "images/ma103.webp",
    ],
  },
  {
    name: "🌷 Mã : AD34 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma34.webp",
      "images/ma341.webp",
      "images/ma342.webp",
      "images/ma343.webp",
      "images/ma344.webp",
    ],
  },
  {
    name: "🌷 Mã : AD33 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma33.webp",
      "images/ma331.webp",
      "images/ma332.webp",
      "images/ma333.webp",
      "images/ma334.webp",
      "images/ma335.webp",
      "images/ma336.webp",
    ],
  },
  {
    name: "🌷 Mã : AD32 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma32.webp",
      "images/ma321.webp",
      "images/ma322.webp",
      "images/ma323.webp",
      "images/ma324.webp",
    ],
  },
  {
    name: "🌷 Mã : AD31 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma31.webp",
      "images/ma311.webp",
      "images/ma312.webp",
      "images/ma313.webp",
      "images/ma314.webp",
    ],
  },
  {
    name: "🌷 Mã : AD30 🌷",
    size: "S <50kg",
    price: "70🐟 / ngày",
    deposit: "200🐟",
    images: [
      "images/ma30.webp",
      "images/ma301.webp",
      "images/ma302.webp",
      "images/ma303.webp",
      "images/ma304.webp",
    ],
  },
  {
    name: "🌷 Mã : AD29 🌷",
    size: "M <58kg",
    price: "60🐟 / ngày",
    deposit: "200🐟",
    images: [
      "images/ma29.webp",
      "images/ma291.webp",
      "images/ma292.webp",
      "images/ma293.webp",
      "images/ma294.webp",
      "images/ma295.webp",
    ],
  },
  {
    name: "🌷 Mã : AD28 🌷",
    size: "Freesize <56kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma28.webp",
      "images/ma281.webp",
      "images/ma282.webp",
      "images/ma283.webp",
      "images/ma284.webp",
    ],
  },
  {
    name: "🌷 Mã : AD27 🌷",
    size: "Freesize",
    price: "70🐟 / ngày",
    deposit: "200🐟",
    images: [
      "images/ma27.webp",
      "images/ma271.webp",
      "images/ma272.webp",
      "images/ma273.webp",
      "images/ma274.webp",
      "images/ma275.webp",
      "images/ma276.webp",
    ],
  },
  {
    name: "🌷 Mã : AD26 🌷",
    size: "M <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma26.webp",
      "images/ma261.webp",
      "images/ma262.webp",
      "images/ma263.webp",
      "images/ma264.webp",
    ],
  },
  {
    name: "🌷 Mã : AD16 🌷",
    size: "Freesize <60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma16.webp",
      "images/ma161.webp",
      "images/ma162.webp",
      "images/ma163.webp",
      "images/ma164.webp",
    ],
  },
  {
    name: "🌷 Mã : AD25 🌷 ( Đỏ )",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma25.webp",
      "images/ma251.webp",
      "images/ma252.webp",
      "images/ma253.webp",
      "images/ma254.webp",
      "images/ma255.webp",
    ],
  },
  {
    name: "🌷 Mã : AD24 🌷",
    size: "S <50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma24.webp",
      "images/ma241.webp",
      "images/ma242.webp",
      "images/ma243.webp",
    ],
  },
  {
    name: "🌷 Mã : AD23 🌷 ( Hồng )",
    size: "S <52kg (v1<82)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma23.webp",
      "images/ma231.webp",
      "images/ma232.webp",
      "images/ma233.webp",
      "images/ma234.webp",
    ],
  },
  {
    name: "🌷 Mã : AD22 🌷 ( Xanh )",
    size: "S <52kg (v1<82)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma22.webp",
      "images/ma221.webp",
      "images/ma222.webp",
      "images/ma223.webp",
      "images/ma224.webp",
    ],
  },
  {
    name: "🌷 Mã : AD19 🌷",
    size: "S <52kg (v1 <80)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma19.webp",
      "images/ma191.webp",
      "images/ma192.webp",
      "images/ma193.webp",
      "images/ma194.webp",
      "images/ma195.webp",
    ],
  },
  {
    name: "🌷 Mã : AD21 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma21.webp",
      "images/ma211.webp",
      "images/ma212.webp",
      "images/ma213.webp",
      "images/ma214.webp",
      "images/ma215.webp",
      "images/ma216.webp",
    ],
  },
  {
    name: "🌷 Mã : AD18 🌷",
    size: "M <52kg (v1<88)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma18.webp",
      "images/ma181.webp",
      "images/ma182.webp",
      "images/ma183.webp",
    ],
  },
  {
    name: "🌷 Mã : AD20 🌷 (kèm mấn)",
    size: "Freesize <56kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma20.webp",
      "images/ma201.webp",
      "images/ma202.webp",
      "images/ma203.webp",
    ],
  },
  {
    name: "🌷 Mã : AD17 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma17.webp",
      "images/ma171.webp",
      "images/ma172.webp",
      "images/ma173.webp",
      "images/ma174.webp",
      "images/ma175.webp",
      "images/ma176.webp",
    ],
  },
  {
    name: "🌷 Mã : AD07 🌷 ( Đỏ )",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma07.webp",
      "images/ma071.webp",
      "images/ma072.webp",
      "images/ma073.webp",
      "images/ma074.webp",
    ],
  },
  {
    name: "🌷 Mã : AD13 🌷",
    size: "S <52kg (v1<86 , v2<68)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma13.webp",
      "images/ma131.webp",
      "images/ma132.webp",
      "images/ma133.webp",
      "images/ma134.webp",
    ],
  },
  {
    name: "🌷 Mã : AD08 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma08.webp",
      "images/ma081.webp",
      "images/ma082.webp",
      "images/ma083.webp",
      "images/ma084.webp",
    ],
  },
  {
    name: "🌷 Mã : AD06 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma06.webp",
      "images/ma061.webp",
      "images/ma062.webp",
      "images/ma063.webp",
      "images/ma064.webp",
      "images/ma065.webp",
    ],
  },
  {
    name: "🌷 Mã : AD05 🌷",
    size: "Freesize <60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma05.webp",
      "images/ma051.webp",
      "images/ma052.webp",
      "images/ma053.webp",
      "images/ma054.webp",
      "images/ma055.webp",
    ],
  },
  {
    name: "🌷 Mã : AD04 🌷",
    size: "M",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma04.webp",
      "images/ma041.webp",
      "images/ma042.webp",
      "images/ma043.webp",
      "images/ma044.webp",
    ],
  },
  {
    name: "🌷 Mã : AD03 🌷",
    size: "M <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma03.webp",
      "images/ma031.webp",
      "images/ma032.webp",
      "images/ma033.webp",
      "images/ma034.webp",
    ],
  },
  {
    name: "🌷 Mã : AD02 🌷",
    size: "L <55kg (eo <75, v1 < 90)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma02.webp",
      "images/ma021.webp",
      "images/ma022.webp",
      "images/ma023.webp",
      "images/ma024.webp",
      "images/ma025.webp",
    ],
  },
  {
    name: "🌷 Mã : AD01 🌷",
    size: "Freesize <55kg (v1 <90)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: [
      "images/ma01.webp",
      "images/ma011.webp",
      "images/ma012.webp",
      "images/ma013.webp",
    ],
  },
];

const app = document.getElementById("app");

app.innerHTML = `
  <h1>Cosilla</h1>
  <div class="products" >
    ${products
      .map(
        (p, i) => `
      <div class="product" onclick="openModal(${i})">
        <img src="${p.images[0]}" loading="lazy">
        <h3>${p.name}</h3>
        ${p.brand ? `<p class="brand"><b>Brand:</b> ${p.brand}</p>` : ""}
        <p><b>Size:</b> ${p.size}</p>
        <p><b>Giá thuê:</b> ${p.price}</p>
        <p><b>Cọc:</b> ${p.deposit}</p>
      </div>
    `
      )
      .join("")}
  </div>
`;

// ===== MODAL =====
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function openModal(index) {
  const p = products[index];
  currentImages = p.images;
  currentIndex = 0;

  renderModalImage(p.name);

  modal.style.display = "flex";
}

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
function renderModalImage(name) {
  modalBody.innerHTML = `
    <h2 class="modal-title">${name}</h2>

    <div class="slider">
      <button class="nav-btn left" onclick="prevImage()">&#10094;</button>

      <img src="./${currentImages[currentIndex]}" class="main-image">

      <button class="nav-btn right" onclick="nextImage()">&#10095;</button>
    </div>
  `;
}
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  renderModalImage(document.querySelector(".modal-title").innerText);
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= currentImages.length) currentIndex = 0;
  renderModalImage(document.querySelector(".modal-title").innerText);
}