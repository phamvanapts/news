'use strict'
/**
 * Lấy thông tin từ form nhập
 */
const inputfirstname = document.getElementById('input-firstname'); // lấy giá trị của ô nhập
const inputlastname = document.getElementById('input-lastname'); // lấy giá trị của ô nhập
const inputusername = document.getElementById('input-username'); // lấy giá trị của ô nhập
const inputpassword = document.getElementById('input-password'); // lấy giá trị của ô nhập
const inputpasswordconfirm = document.getElementById('input-password-confirm'); // lấy giá trị của ô nhập
// gán giá trị nút submit
const btnsubmit = document.getElementById('btn-submit');

/**
 * Khi click nút Register hàm thực hiện
 */
btnsubmit.addEventListener('click',function(){
    /**
     * 1. Lấy dữ liệu từ form nhập
     * gán cho các thuộc tính của user
     */
    const user = new User(
        inputfirstname.value,   //giá trị nhập vào inputfirstname
        inputlastname.value,    // giá trị nhập vào inputlastname
        inputusername.value,    // giá trị nhập vào inputusername
        inputpassword.value,    // giá trị nhập vào inputpassword
        );
    /**
     * 2. Gọi hàm validate để kiểm tra form hợp lệ
     */
    /**
     * 3. Khởi tạo user mới với các dữ liệu hợp lệ
     */
    /**
     * 4. Thêm user vào mảng, lưu mảng vào localStorage
     */
    /**
     * 5. Chuyển trang đến màn hình login
     */
    alert(`${user.inputpassword.value}`);
} //finish function
) //finish button Submit
// alert(inputfirstname.value);