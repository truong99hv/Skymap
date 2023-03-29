window.onscroll = function () {
  scroll();
};

let header = document.querySelector(".title-suggest");
let sticky = header.offsetTop;
// let bottom =
//   header.offsetParent.offsetHeight - header.offsetTop - header.offsetHeight;

const scroll = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.width = "width: 100%";
  } else {
    header.classList.remove("sticky");
  }

  //   if (
  //     document.body.scrollTop > 1200 ||
  //     document.documentElement.scrollTop > 1200
  //   ) {
  //     //   header.classList.remove("sticky");
  //     header.style.top = "-100%";
  //   } else {
  //     header.style.top = "0";
  //   }
};
