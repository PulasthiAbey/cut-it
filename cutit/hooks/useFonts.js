import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    "OtomanopeeOne-Regular": require("../assets/fonts/OtomanopeeOne-Regular.ttf"),
    "VeganStylePersonalUse-5Y58": require("../assets/fonts/VeganStylePersonalUse-5Y58.ttf"),
    "Festive-Regular": require("../assets/fonts/Festive-Regular.ttf"),
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });
};
