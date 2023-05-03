const endpoint = "https://loainguycap.ceid.gov.vn/api/";
const domain = "https://loainguycap.ceid.gov.vn";
export const Api = {
  listSpecies: endpoint + "loaicongbo?paginate=true&page=1&perpage=18",
  ListCurrent: endpoint + "loaihientrangs",
  listAllSpecies: endpoint + "loaicongbo",
  ListProvince: endpoint + "provinces",
  ListRedBook:
    endpoint + "danhmuccha?ma_danh_mucs[]=REDBOOK&ma_danh_mucs[]=IUCN",
  domain: domain,
  chartDetail: endpoint + "species-stats?paginate=true&page=1&perpage=18",
  animalDetail: domain + "/species/",
};
