'use strict';
// alert("test home.js");
/**
 * Tạo và gán các biến là DOM cần thiết
 */
const loginmodal = document.getElementById('login-modal');
const maincontent = document.getElementById('main-content');
const welcomemessage = document.getElementById('welcome-message');
const btnlogout = document.getElementById('btn-logout');
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