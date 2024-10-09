'use strict';
// alert("test home.js");
/**
 * Tạo và gán các biến là DOM cần thiết
 */
const loginmodal = document.getElementById('login-modal');
const maincontent = document.getElementById('main-content');
const welcomemessage = document.getElementById('welcome-message');
const btnlogout = document.getElementById('btn-logout');
const APIKey = "06d2d5ea18804146b74f47577906c4b9";
let logIn = false;
if(curentUser != null){
    logIn = true;
}
/**
 * Hàm hiển thị nội dung trang chủ
 * @param {*} logIn
 * Nếu hệ thống đã lohIn thì show các id cần thiết
 * Ngược lại thì show logOut
 */
function homeShow(){
    if(logIn){
        // alert(logIn);
        loginmodal.style.display='none';    //DOM có id là loginmodal ẩn
        maincontent.style.display='block';  //hiện DOM có id maincontent
        welcomemessage.innerHTML =      
        `Xin chào ${curentUser.firstName}`  //Chào tên user
    }else{
        loginmodal.style.display='block';
        maincontent.style.display='none';
    }
}
homeShow(); //thực thi hàm homeShow
/**
 * Thực hiện click button LogOut
 * Trả về curentUser là null, ghi vào localStorage
 * Gán lại giá trị logIn = false
 */
btnlogout.addEventListener('click', function(){
    // alert('test logout'); //==> ok
    const curentUser = null                     //gán null cho curentUser
    saveToStorage("curentUser", curentUser);    //lưu curentUser vào localStorage
    logIn = false;                              // gán giá trị false cho logIn
    homeShow();                                 //thực thi hàm homeShow
})
const newscontainer = document.getElementById('news-container');
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
getDataNews("us","technology",5,1,APIKey);
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
        console.log(data);       //kiểm tra data
        // console.log(articles); //kiểm tra trả về của json
        /**
         * Nếu số bản tin trả về nhở hơn pageSize thì không hiện btnprv
         */
        /**
         * Thực hiện hàm tạo tin tức vào trang news
         */
        rebderdata(articles);
        // pagenum.innerHTML = page;
    }catch(err){
        alert(err.messenge);
    }
}