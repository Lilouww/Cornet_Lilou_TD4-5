let generatedIds = [];
for (let i = 1; i <= 3; i++) {
  $.ajax({
    url: `https://dummyjson.com/products/${i}`,
    dataType: "json",
    success: function (data) {
      let productTemplate = $(".product-template").clone();
      productTemplate.removeClass("product-template").addClass(`product-${i}`);
      productTemplate
        .find(".img")
        .attr("src", data.img)
        .attr("alt", data.title);
      productTemplate.find(".title").text(data.title);
      productTemplate.find(".brand").text(data.brand);
      productTemplate.find(".price").text(data.price);
      productTemplate.find(".old-price").text(data["old-price"]);
      productTemplate.find(".stock").text(data.stock);
      $("body").append(productTemplate);
    },
    error: function (xhr, status, error) {
      console.error(`Erreur ${xhr.status} : ${error}`);
    },
  });
}
function generateRandomProduct() {
  if (generatedIds.length === 100) {
    $("#generate-btn").prop("disabled", true);
    return;
  }
  let randomId;
  do {
    randomId = Math.floor(Math.random() * 100) + 1;
  } while (generatedIds.includes(randomId));
  generatedIds.push(randomId);
  $.ajax({
    url: `https://dummyjson.com/products/${randomId}`,
    dataType: "json",
    success: function (data) {
      let productTemplate = $(".product-template").clone();
      productTemplate
        .removeClass("product-template")
        .addClass(`product-${randomId}`);
      productTemplate
        .find(".img")
        .attr("src", data.img)
        .attr("alt", data.title);
      productTemplate.find(".title").text(data.title);
      productTemplate.find(".brand").text(data.brand);
      productTemplate.find(".price").text(data.price);
      productTemplate.find(".old-price").text(data["old-price"]);
      productTemplate.find(".stock").text(data.stock);
      $("body").append(productTemplate);
    },
    error: function (xhr, status, error) {
      console.error(`Erreur ${xhr.status} : ${error}`);
    },
  });
}
$("#generate-btn").click(generateRandomProduct);
