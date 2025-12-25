let currentIndex = 0;
let currentImages = [];
const products = [
  {
    name: "🌷 Mã  : AD73 🌷",
    size: "Freesize <58kg",
    price: "80🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma73.jpg", "images/ma731.jpg", "images/ma732.jpg", "images/ma733.jpg"]
  },
  {
    name: "🌷 Mã  : AD72 🌷",
    size: "S <52kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma72.jpg", "images/ma721.jpg", "images/ma722.jpg", "images/ma723.jpg", "images/ma724.jpg", "images/ma725.jpg", "images/ma726.jpg", "images/ma727.jpg", "images/ma728.jpg"]
  },
  {
    name: "🌷 Mã  : AD71 🌷",
    size: "S <48kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma71.jpg", "images/ma711.jpg", "images/ma712.jpg", "images/ma713.jpg"]
  },
  {
    name: "🌷 Mã  : AD70 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma70.jpg", "images/ma701.jpg", "images/ma702.jpg", "images/ma703.jpg", "images/ma704.jpg"]
  },
  {
    name: "🌷 Mã  : AD69 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma69.jpg", "images/ma691.jpg", "images/ma692.jpg", "images/ma693.jpg", "images/ma694.jpg"]
  }, 
  {
    name: "🌷 Mã  : AD65 🌷",
    size: "M < 55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma65.jpg", "images/ma651.jpg", "images/ma652.jpg", "images/ma653.jpg", "images/ma654.jpg", "images/ma655.jpg", "images/ma656.jpg", "images/ma657.jpg", "images/ma658.jpg", "images/ma659.jpg"]
  },
  {
    name: "🌷 Mã  : AD63 🌷",
    size: "M",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma63.jpg", "images/ma631.jpg", "images/ma632.jpg", "images/ma633.jpg", "images/ma634.jpg", "images/ma635.jpg", "images/ma636.jpg"]
  },
    {
    name: "🌷 Mã  : AD68 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma68.jpg", "images/ma681.jpg", "images/ma682.jpg", "images/ma683.jpg", "images/ma684.jpg", "images/ma685.jpg", "images/ma686.jpg"]
  },
  {
    name: "🌷 Mã  : AD67 🌷",
    size: "S < 50kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma67.jpg", "images/ma671.jpg", "images/ma672.jpg", "images/ma673.jpg", "images/ma674.jpg", "images/ma675.jpg", "images/ma676.jpg", "images/ma677.jpg", "images/ma678.jpg", "images/ma679.jpg"]
  },
  {
    name: "🌷 Mã  : AD66 🌷",
    size: "Freesize",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma66.jpg", "images/ma661.jpg", "images/ma662.jpg", "images/ma663.jpg", "images/ma664.jpg", "images/ma665.jpg", "images/ma666.jpg"]
  },
  {
    name: "🌷 Mã  : AD64 🌷( hồng )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma64.jpg", "images/ma641.jpg", "images/ma642.jpg", "images/ma643.jpg"]
  },
  {
    name: "🌷 Mã  : AD62 🌷",
    size: "S < 50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma62.jpg", "images/ma621.jpg", "images/ma622.jpg", "images/ma623.jpg", "images/ma624.jpg", "images/ma625.jpg"]
  },
  {
    name: "🌷 Mã  : AD61 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma61.jpg", "images/ma611.jpg", "images/ma612.jpg", "images/ma613.jpg", "images/ma64.jpg"]
  },
  {
    name: "🌷 Mã  : AD60 🌷 ( đỏ )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma60.jpg", "images/ma601.jpg", "images/ma602.jpg", "images/ma603.jpg", "images/ma604.jpg"]
  },
 {
    name: "🌷 Mã  : AD58 (đỏ) AD59 (xanh)🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma58_59.jpg", "images/ma58_591.jpg", "images/ma58_592.jpg", "images/ma58_593.jpg"]
  },
  {
    name: "🌷 Mã : AD57 🌷",
    size: "M < 55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma57.jpg", "images/ma571.jpg", "images/ma572.jpg", "images/ma573.jpg", "images/ma574.jpg", "images/ma575.jpg", "images/ma576.jpg", "images/ma577.jpg"]
  },
  {
    name: "🌷 Mã : AD56 🌷",
    size: "S < 52kg",
    price: "60🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma56.jpg", "images/ma561.jpg", "images/ma562.jpg", "images/ma563.jpg", "images/ma564.jpg", "images/ma565.jpg", "images/ma566.jpg", "images/ma567.jpg", "images/ma568.jpg", "images/ma569.jpg"]
  },
  {
    name: "🌷 Mã : AD54 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma54.jpg", "images/ma541.jpg", "images/ma542.jpg", "images/ma543.jpg", "images/ma544.jpg", "images/ma545.jpg"]
  },
  {
    name: "🌷 Mã : AD53 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma53.jpg", "images/ma531.jpg", "images/ma532.jpg", "images/ma533.jpg", "images/ma534.jpg", "images/ma535.jpg"]
  },
  {
    name: "🌷 Mã : AD52 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma52.jpg", "images/ma521.jpg", "images/ma52.jpg", "images/ma523.jpg", "images/ma524.jpg", "images/ma525.jpg", "images/ma526.jpg", "images/ma527.jpg", "images/ma528.jpg"]
  },
  {
    name: "🌷 Mã : AD51 🌷",
    size: "S < 52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma51.jpg", "images/ma511.jpg", "images/ma512.jpg", "images/ma513.jpg", "images/ma514.jpg", "images/ma515.jpg"]
  },
  {
    name: "🌷 Mã : AD50 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma50.jpg", "images/ma501.jpg", "images/ma502.jpg", "images/ma503.jpg", "images/ma504.jpg", "images/ma505.jpg", "images/ma506.jpg"]
  },
  {
    name: "🌷 Mã : AD49 🌷",
    size: "S <52kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma49.jpg", "images/ma491.jpg", "images/ma492.jpg"]
  },
  {
    name: "🌷 Mã : AD46 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma46.jpg", "images/ma461.jpg", "images/ma462.jpg", "images/ma463.jpg"]
  },
  {
    name: "🌷 Mã : AD45 🌷(áo be quần xanh cốm)",
    size: "S < 55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma45.jpg", "images/ma451.jpg", "images/ma452.jpg"]
  },
  {
    name: "🌷 Mã : AD44 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma44.jpg", "images/ma441.jpg", "images/ma442.jpg", "images/ma443.jpg", "images/ma444.jpg"]
  },
  {
    name: "🌷 Mã : AD43 🌷",
    size: "S < 50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma43.jpg", "images/ma431.jpg", "images/ma432.jpg", "images/ma433.jpg", "images/ma434.jpg"]
  },
  {
    name: "🌷 Mã : AD35 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma35.jpg", "images/ma351.jpg", "images/ma352.jpg", "images/ma353.jpg", "images/ma354.jpg", "images/ma355.jpg"]
  },
  {
    name: "🌷 Mã : AD42 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma42.jpg", "images/ma421.jpg", "images/ma422.jpg", "images/ma423.jpg"]
  },
  {
    name: "🌷 Mã : AD41 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma41.jpg", "images/ma411.jpg", "images/ma412.jpg", "images/ma413.jpg", "images/ma414.jpg", "images/ma415.jpg", "images/ma416.jpg"]
  },
  {
    name: "🌷 Mã : AD38 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma38.jpg", "images/ma381.jpg", "images/ma382.jpg", "images/ma383.jpg", "images/ma384.jpg", "images/ma385.jpg", "images/ma386.jpg", "images/ma387.jpg", "images/ma388.jpg"]
  },
  {
    name: "🌷 Mã : AD39 🌷 ( hồng )",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma39.jpg", "images/ma391.jpg", "images/ma392.jpg", "images/ma393.jpg"]
  },
  {
    name: "🌷 Mã : AD14 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma14.jpg", "images/ma141.jpg", "images/ma142.jpg", "images/ma143.jpg", "images/ma144.jpg", "images/ma145.jpg", "images/ma146.jpg"]
  },
  {
    name: "🌷 Mã : AD12 🌷",
    size: "M < 60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma12.jpg", "images/ma121.jpg", "images/ma122.jpg", "images/ma123.jpg", "images/ma124.jpg"]
  },
  {
    name: "🌷 Mã : AD11 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma11.jpg", "images/ma111.jpg", "images/ma112.jpg", "images/ma113.jpg", "images/ma114.jpg"]
  },
  {
    name: "🌷 Mã : AD40 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma40.jpg", "images/ma401.jpg", "images/ma402.jpg", "images/ma403.jpg", "images/ma404.jpg"]
  },
  {
    name: "🌷 Mã : AD37 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma37.jpg", "images/ma371.jpg", "images/ma372.jpg", "images/ma373.jpg", "images/ma374.jpg", "images/ma375.jpg"]
  },
  {
    name: "🌷 Mã : AD36 🌷",
    size: "L <55kg",
    price: "60🐟 / ngày",
    deposit: "250🐟",
    images: ["images/ma36.jpg", "images/ma361.jpg", "images/ma362.jpg", "images/ma363.jpg", "images/ma364.jpg"]
  },
  {
    name: "🌷 Mã : AD10 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma10.jpg", "images/ma101.jpg", "images/ma102.jpg", "images/ma103.jpg"]
  },
  {
    name: "🌷 Mã : AD34 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma34.jpg", "images/ma341.jpg", "images/ma342.jpg", "images/ma343.jpg", "images/ma344.jpg"]
  },
  {
    name: "🌷 Mã : AD33 🌷",
    size: "Freesize",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma33.jpg", "images/ma331.jpg", "images/ma332.jpg", "images/ma333.jpg", "images/ma334.jpg", "images/ma335.jpg", "images/ma336.jpg"]
  },
  {
    name: "🌷 Mã : AD32 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma32.jpg", "images/ma321.jpg", "images/ma322.jpg", "images/ma323.jpg", "images/ma324.jpg"]
  },
  {
    name: "🌷 Mã : AD31 🌷",
    size: "L",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma31.jpg", "images/ma311.jpg", "images/ma312.jpg", "images/ma313.jpg", "images/ma314.jpg"]
  },
  {
    name: "🌷 Mã : AD30 🌷",
    size: "S <50kg",
    price: "70🐟 / ngày",
    deposit: "200🐟",
    images: ["images/ma30.jpg", "images/ma301.jpg", "images/ma302.jpg", "images/ma303.jpg", "images/ma304.jpg"]
  },
  {
    name: "🌷 Mã : AD29 🌷",
    size: "M <58kg",
    price: "60🐟 / ngày",
    deposit: "200🐟",
    images: ["images/ma29.jpg", "images/ma291.jpg", "images/ma292.jpg", "images/ma293.jpg", "images/ma294.jpg", "images/ma295.jpg"]
  },
  {
    name: "🌷 Mã : AD28 🌷",
    size: "Freesize <56kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma28.jpg", "images/ma281.jpg", "images/ma282.jpg", "images/ma283.jpg", "images/ma284.jpg"]
  },
  {
    name: "🌷 Mã : AD27 🌷",
    size: "Freesize",
    price: "70🐟 / ngày",
    deposit: "200🐟",
    images: ["images/ma27.jpg", "images/ma271.jpg", "images/ma272.jpg", "images/ma273.jpg", "images/ma274.jpg", "images/ma275.jpg", "images/ma276.jpg"]
  },
  {
    name: "🌷 Mã : AD26 🌷",
    size: "M <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma26.jpg", "images/ma261.jpg", "images/ma262.jpg", "images/ma263.jpg", "images/ma264.jpg"]
  },
  {
    name: "🌷 Mã : AD16 🌷",
    size: "Freesize <60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma16.jpg", "images/ma161.jpg", "images/ma162.jpg", "images/ma163.jpg", "images/ma164.jpg"]
  },
  {
    name: "🌷 Mã : AD25 🌷 ( Đỏ )",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma25.jpg", "images/ma251.jpg", "images/ma252.jpg", "images/ma253.jpg", "images/ma254.jpg", "images/ma255.jpg"]
  },
  {
    name: "🌷 Mã : AD24 🌷",
    size: "S <50kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma24.jpg", "images/ma241.jpg", "images/ma242.jpg", "images/ma243.jpg"]
  },
  {
    name: "🌷 Mã : AD23 🌷 ( Hồng )",
    size: "S <52kg (v1<82)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma23.jpg", "images/ma231.jpg", "images/ma232.jpg", "images/ma233.jpg", "images/ma234.jpg"]
  },
  {
    name: "🌷 Mã : AD22 🌷 ( Xanh )",
    size: "S <52kg (v1<82)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma22.jpg", "images/ma221.jpg", "images/ma222.jpg", "images/ma223.jpg", "images/ma224.jpg"]
  },
  {
    name: "🌷 Mã : AD19 🌷",
    size: "S <52kg (v1 <80)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma19.jpg", "images/ma191.jpg", "images/ma192.jpg", "images/ma193.jpg", "images/ma194.jpg", "images/ma195.jpg"]
  },
  {
    name: "🌷 Mã : AD21 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma21.jpg", "images/ma211.jpg", "images/ma212.jpg", "images/ma213.jpg", "images/ma214.jpg", "images/ma215.jpg", "images/ma216.jpg"]
  },
  {
    name: "🌷 Mã : AD18 🌷",
    size: "M <52kg (v1<88)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma18.jpg", "images/ma181.jpg", "images/ma182.jpg", "images/ma183.jpg"]
  },
  {
    name: "🌷 Mã : AD20 🌷 (kèm mấn)",
    size: "Freesize <56kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma20.jpg", "images/ma201.jpg", "images/ma202.jpg", "images/ma203.jpg"]
  },
  {
    name: "🌷 Mã : AD17 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma17.jpg", "images/ma171.jpg", "images/ma172.jpg", "images/ma173.jpg", "images/ma174.jpg", "images/ma175.jpg", "images/ma176.jpg"]
  },
  {
    name: "🌷 Mã : AD07 🌷 ( Đỏ )",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma07.jpg", "images/ma071.jpg", "images/ma072.jpg", "images/ma073.jpg", "images/ma074.jpg"]
  },
  {
    name: "🌷 Mã : AD13 🌷",
    size: "S <52kg (v1<86 , v2<68)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma13.jpg", "images/ma131.jpg", "images/ma132.jpg", "images/ma133.jpg", "images/ma134.jpg"]
  },
  {
    name: "🌷 Mã : AD08 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma08.jpg", "images/ma081.jpg", "images/ma082.jpg", "images/ma083.jpg", "images/ma084.jpg"]
  },
  {
    name: "🌷 Mã : AD06 🌷",
    size: "Freesize <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma06.jpg", "images/ma061.jpg", "images/ma062.jpg", "images/ma063.jpg", "images/ma064.jpg", "images/ma065.jpg"]
  },
  {
    name: "🌷 Mã : AD05 🌷",
    size: "Freesize <60kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma05.jpg", "images/ma051.jpg", "images/ma052.jpg", "images/ma053.jpg", "images/ma054.jpg", "images/ma055.jpg"]
  },
  {
    name: "🌷 Mã : AD04 🌷",
    size: "M",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma04.jpg", "images/ma041.jpg", "images/ma042.jpg", "images/ma043.jpg", "images/ma044.jpg"]
  },
  {
    name: "🌷 Mã : AD03 🌷",
    size: "M <55kg",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma03.jpg", "images/ma031.jpg", "images/ma032.jpg", "images/ma033.jpg", "images/ma034.jpg"]
  },
  {
    name: "🌷 Mã : AD02 🌷",
    size: "L <55kg (eo <75, v1 < 90)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma02.jpg", "images/ma021.jpg", "images/ma022.jpg", "images/ma023.jpg", "images/ma024.jpg", "images/ma025.jpg"]
  },
  {
    name: "🌷 Mã : AD01 🌷",
    size: "Freesize <55kg (v1 <90)",
    price: "50🐟 / ngày",
    deposit: "150🐟",
    images: ["images/ma01.jpg", "images/ma011.jpg", "images/ma012.jpg", "images/ma013.jpg"]
  },
];

const app = document.getElementById("app");

app.innerHTML = `
  <h1>Cosilla</h1>
  <div class="products">
    ${products.map((p, i) => `
      <div class="product" onclick="openModal(${i})">
        <img src="${p.images[0]}" loading="lazy">
        <h3>${p.name}</h3>
        <p><b>Size:</b> ${p.size}</p>
        <p><b>Giá thuê:</b> ${p.price}</p>
        <p><b>Cọc:</b> ${p.deposit}</p>
      </div>
    `).join("")}
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

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
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
