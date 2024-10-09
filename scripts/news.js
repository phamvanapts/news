'use strict'
/**
 * Tạo và lấy giá trị các DoM có id tương ứng
 */
const btnprev = document.getElementById('btn-prev');
const pagenum = document.getElementById('page-num');
const btnnext = document.getElementById('btn-next');
const newscontainer = document.getElementById('news-container');
const APIKey = "06d2d5ea18804146b74f47577906c4b9";
/**
 * Biến số news từ API trả về
 */
// let totalnews = 0;
newscontainer.innerHTML = "";
/**
 * Hàm tạo trang tin tức
 * @param {*} data 
 */
function rebderdata(data){
    newscontainer.innerHTML = "";
    data.forEach((art) => {
        const html = `
                <div class="card flex-row flex-wrap">
					<div class="card mb-3" style="">
						<div class="row no-gutters">
							<div class="col-md-4">
								<img src=${art.urlToImage ? art.urlToImage : "keyAPI.PNG"}
									class="card-img"
									alt="img form API">
							</div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">${art.title}</h5>
									<p class="card-text">${art.description}</p>
									<a href=${art.url}
										class="btn btn-primary">View</a>
								</div>
							</div>
						</div>
					</div>
				</div>`;
                newscontainer.insertAdjacentHTML('beforebegin',html); 
    });
}
/**
 * Thực hiện hàm getDataNews
 */
getDataNews("us","technology",10,3,APIKey);
/**
 * Lấy dữ liệu DataNews từ API hiển thị list News
 * @param {*} country 
 * @param {*} page 
 */
async function getDataNews(country,category,pageSize, page, APIKey) {
    try{
        
        /**
         * Kết nối với API và lấy dữ liệu
         */
        const res = await fetch(`
            https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${APIKey}
            `);
        const data = await res.json();
        const articles = data.articles;
        // console.log(data);       //kiểm tra data
        // console.log(articles); //kiểm tra trả về của json
        /**
         * Nếu số bản tin trả về nhở hơn pageSize thì không hiện btnprv
         */
        if(articles.lenght <page){
            btnnext.style.display = "none";
        }else{
            btnnext.style.display = "block";
        }
        if(page == 1){
            btnprev.style.display = "none";
        }else{
            btnprev.style.display = "block";
        }
        /**
         * Thực hiện hàm tạo tin tức vào trang news
         */
        rebderdata(articles);
        pagenum.innerHTML = page;
    }catch(err){
        alert(err.messenge);
    }
}
