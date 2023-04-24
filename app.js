// const downloadBtn = document.getElementById("download-btn");
// const heroDiv = document.querySelector(".hero");

// downloadBtn.addEventListener("click", () => {
//   // create canvas element
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");

//   // set canvas dimensions to match div
//   canvas.width = heroDiv.offsetWidth;
//   canvas.height = heroDiv.offsetHeight;

//   // draw contents of div onto canvas
//   context.drawSvg(
//     new XMLSerializer().serializeToString(heroDiv),
//     0,
//     0,
//     canvas.width,
//     canvas.height
//   );

//   // convert canvas to image and download
//   const dataURL = canvas.toDataURL("image/png");
//   const downloadLink = document.createElement("a");
//   downloadLink.href = dataURL;
//   downloadLink.download = "hero-image.png";
//   downloadLink.click();
// });
