const getDeductions = (cartItems) =>{
    var stockDeductions = {
        babySpinachQuantityDetections: 0,
        pakChoiQuantityDetections: 0,
        basilQuantityDetections: 0,
        kaleQuantityDetections: 0,
        lettuceQuantityDetections: 0,
        argulaQuantityDetections: 0,
        beetRootQuantityDetections: 0,
        radishPurpleQuantityDetections: 0,
        radishWhiteQuantityDetections: 0,
        radishPinkQuantityDetections: 0,
        mustardQuantityDetections: 0,
        sunflowerQuantityDetections: 0,
        peaShootQuantityDetections: 0,
        broccoliQuantityDetections: 0,
        redCabbageQuantityDetections: 0,
      };
      console.log(cartItems);
      cartItems.map((item) => {
        if (item.id === "m1") {
          stockDeductions.babySpinachQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.babySpinachQuantityDetections;
        } else if (item.id === "m6") {
          stockDeductions.argulaQuantityDetections =
            item.grams * item.quantity + stockDeductions.argulaQuantityDetections;
        } else if (item.id === "m7") {
          stockDeductions.pakChoiQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.pakChoiQuantityDetections;
        } else if (item.id === "m8") {
          stockDeductions.kaleQuantityDetections =
            item.grams * item.quantity + stockDeductions.kaleQuantityDetections;
        } else if (item.id === "m5") {
          stockDeductions.lettuceQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.lettuceQuantityDetections;
        } else if (item.id === "mg1") {
          stockDeductions.beetRootQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.beetRootQuantityDetections;
        } else if (item.id === "mg2") {
          stockDeductions.radishPurpleQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.radishPurpleQuantityDetections;
        } else if (item.id === "mg4") {
          stockDeductions.radishPinkQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.radishPinkQuantityDetections;
        } else if (item.id === "mg3") {
          stockDeductions.radishWhiteQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.radishWhiteQuantityDetections;
        } else if (item.id === "mg5") {
          stockDeductions.mustardQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.mustardQuantityDetections;
        } else if (item.id === "mg6") {
          stockDeductions.sunflowerQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.sunflowerQuantityDetections;
        } else if (item.id === "mg7") {
          stockDeductions.peaShootQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.peaShootQuantityDetections;
        } else if (item.id === "mg8") {
          stockDeductions.broccoliQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.broccoliQuantityDetections;
        } else if (item.id === "mg9") {
          stockDeductions.redCabbageQuantityDetections =
            item.grams * item.quantity +
            stockDeductions.redCabbageQuantityDetections;
        } else {
          stockDeductions.basilQuantityDetections =
            item.grams * item.quantity + stockDeductions.basilQuantityDetections;
        }
      });
      return stockDeductions;
} 

export default getDeductions;