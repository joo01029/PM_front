export default (pm_state: number) => {
  let pm_color;
  let pm_value;
  if (pm_state < 50) {
    pm_color = "#228B22";
    pm_value = "좋음";
  } else if (pm_state < 100) {
    pm_color = "#FFB400";
    pm_value = "보통";
  } else if (pm_state < 150) {
    pm_color = "#FF8200";
    pm_value = "나쁨";
  } else if (pm_state < 200) {
    pm_color = "#FF0000";
    pm_value = "매우 나쁨";
  } else if (pm_state < 300) {
    pm_color = "#B22222";
    pm_value = "매우 해로움";
  } else {
    pm_color = "#800080";
    pm_value = "치명적";
  }

  return { pm_color, pm_value };
};
