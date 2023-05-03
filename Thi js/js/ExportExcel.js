import getData from "./getData.js";
import ListBtn from "./button.js";
import { newApi } from "./app.js";

async function exportExcel() {
  ListBtn.exportBtn.addEventListener("click", async () => {
    ListBtn.exportBtn.classList.add("loading");
    const data = await getData(newApi);
    const res = data.list;
    let newarr = [];
    res.forEach((item) => {
      newarr.push({
        id: item.id,
        ten: item.ten,
        ten_khoa_hoc: item.ten_khoa_hoc,
        ten_tac_gia: item.ten_tac_gia,
        ten_dia_phuong: item.provinces,
        dac_diem_nhan_dang: item.dac_diem_nhan_dang,
      });
    });
    let filename = "loai.xlsx";
    var ws = XLSX.utils.json_to_sheet(newarr);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "loai");
    XLSX.writeFile(wb, filename);
    ListBtn.exportBtn.classList.remove("loading");
  });
}

export default exportExcel;
