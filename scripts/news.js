'use strict'
/**
 * Tạo và lấy giá trị các DoM có id tương ứng
 */
const btnprev = document.getElementById('btn-prev');
const pagenum = document.getElementById('page-num');
const btnnext = document.getElementById('btn-next');
const newscontainer = document.getElementById('news-container');
/**
 * Biến số news từ API trả về
 */
let totalnews = 0;
/**
 * Thực hiện hàm getDataNews
 */
getDataNews("us",1);
/**
 * Lấy dữ liệu DataNews từ API hiển thị list News
 * @param {*} country 
 * @param {*} page 
 */
async function getDataNews(country, page) {
    try{
        
    /**
     * Kết nối với API và lấy dữ liệu
     */
    const res = await fetch(`
        https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=06d2d5ea18804146b74f47577906c4b9`);
    const data = await res.json();
    // console.log(data);
    
    }
}
