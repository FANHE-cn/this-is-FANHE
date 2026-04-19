
let counter = 0;      
    document
        .getElementById("image")
        .addEventListener("mousedown", function () {
          this.src = "https://pic1.imgdb.cn/item/69e38e91c84565a4b2d8a866.png"; // 按下时的图片
          this.classList.add("active"); // 添加active类以应用CSS变换
        });

    document
      .getElementById("image")
      .addEventListener("mouseup", function () {
        counter++;
        let shuchu ="你打了我" + counter + "下"
        document.getElementById("demo").innerHTML = shuchu;
        this.src = "https://pic1.imgdb.cn/item/69df618bdea40c4b80743fd1.png"; // 松开手时的图片
        this.classList.remove("active"); // 移除active类以移除CSS变换
        });
    document
        .getElementById("image")
        .addEventListener("mouseout", function () {
          this.src = "https://pic1.imgdb.cn/item/69df618bdea40c4b80743fd1.png"; // 鼠标移出时的图片，确保松开手后变回原始状态
          this.classList.remove("active"); // 移除active类以移除CSS变换
        });
        