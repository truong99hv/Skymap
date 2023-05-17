const endPoint = "https://loainguycap.ceid.gov.vn/api/";
const Api = {
  loaicongbo: endPoint + "loaicongbo",
  loaihientrangs: endPoint + "loaihientrangs",
  provinces: endPoint + "provinces",
  paginate: "?paginate=true&page=1&perpage=18",
  sachDo: endPoint + "danhmuccha?ma_danh_mucs[]=REDBOOK&ma_danh_mucs[]=IUCN",
  IUCN: endPoint + "danhmuccha?ma_danh_mucs[]=IUCN",
  str: "https://loainguycap.ceid.gov.vn/api/loaicongbo?paginate=true&page=1&perpage=18",
};
export default Api;
