'use strict'
/**
 * Tạo biến và gán dữ liệu cho biến là các DOM có id tương ứng
 */
const inputusername = document.getElementById('input-username');
const inputpassword = document.getElementById('input-password');
const btnsubmit = document.getElementById('btn-submit');
/**
 * Bắt sự kiện click vào button
 * Validate giá trị nhập vào
 * So sánh giá trị nhập vào có trong mảng user không
 * Nếu các thông tin nhập vào trùng với user có 
 * trong danh sách thì tức là đăng nhập thành công, 
 * ngược lại thì cần thông báo lỗi cho người dùng.
 * Nếu người dùng Đăng nhập thành công,  bạn cần lưu thông tin người dùng hiện tại xuống  localStorage, 
 * để sao các trang khác có thể lấy được thông tin dữ liệu về người dùng  đã đăng nhập. 
 * Sau đó chuyển về Trang Home
 */
btnsubmit.addEventListener('click',function(){
    // alert('TÉT')
    // Validate giá trị nhập vào
    const user = userArr.find((item)=>
        item.userName === inputusername.value
    &&  item.passWord === inputpassword.value);
    if(user){
        alert("Đăng nhập thành công!"); //Thông báo
        /**
         * 4. Thêm user vào mảng, lưu mảng vào localStorage
        */
       saveToStorage("curentUser", user);
        //chuyển về Trang Home ==> ok
        window.location.assign('../index.html');
    }else{
        alert("Sai User Name hoặc Password!"); //thông báo
    }
})