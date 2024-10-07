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
    const isValidate = validate(user);
    if(isValidate){
        /**
         * 3. Khởi tạo user mới với các dữ liệu hợp lệ
        */
       
        userArr.push(user);
    //    console.log(user.passWord.length);
       
        /**
         * 4. Thêm user vào mảng, lưu mảng vào localStorage
        */
       saveToStorage("userArr", userArr);
        /**
         * 5. Chuyển trang đến màn hình login
         */
        window.location.assign('../pages/login.html');
    }else{
        alert("Không đăng ký được thành viên!")
    }
    
} //finish function
) //finish button Submit
/**
 * Hàm kiểm tra nhập liệu của người dùng 
 */
function checkInput(user){ 
    if(inputfirstname.value == ""){ //Kiểm tra trường firstname có rỗng không.
        alert(" Please, Input First Name !"); //Thông báo phải nhập First name
        return false;  // Trả về giá trị false ==> Không ghi được dữ liệu
    }else if(inputlastname.value ==""){
        alert(" Please, Input Last Name !"); //Thông báo phải nhập LastName
        return false;  // Trả về giá trị false ==> Không ghi được dữ liệu
    }else if(inputusername.value ==""){
        alert(" Please, Input User Name !"); //Thông báo phải nhập LastName
        return false;  // Trả về giá trị false ==> Không ghi được dữ liệu
    }else if(inputpassword.value ==""){
        alert(" Please, Input PassWord !"); //Thông báo phải nhập LastName
        return false;  // Trả về giá trị false ==> Không ghi được dữ liệu
    }else if(inputpasswordconfirm.value ==""){
        alert(" Please, Input Confirm PassWord !"); //Thông báo phải nhập LastName
        return false;  // Trả về giá trị false ==> Không ghi được dữ liệu
    }else{
        return true;    // Trả về true ==> kiểm tra các điều kiện khác.
    }
    // alert(" Có dữ liệu ID !");
}
/**
 * username không được trùng với username của người dùng khác trước đó
 * @param {*} user 
 */
function userNameUnique(user){
    /**
     * Nếu mảng userArr rỗng thì không cần kiểm tra ==> true
     */
    if(userArr.length == 0) true; 
    // alert(`userArr.length = ${userArr.length}`);
    for(let i = 0; i < userArr.length; i++){ // lập hết mảng petArr
        if(userArr[i].userName == inputusername.value){             // Nếu petArr thứ i trùng với giá trị kiểm tra
            alert(` Trùng = ${inputusername.value} !`);      // Thông báo trùng ID
            return false;                   // trả về false ==> Không thực hiện ghi dữ liệu.    
        }
    }   // kết thúc for
    return true;
}
/**
 * Password và confirm password phải giống nhau
 * @param {*} user 
 */
function checkConfirmpwd(user){
    if(inputpassword.value == inputpasswordconfirm.value){
        return true; //kiểm tra giống thì true
    }else{
        alert("Password và confirm password phải giống nhau");
        return false; // ngược lại thì false
    }
}
/**
 * Password có nhiều hơn 8 ký tự.
 * @param {*} user 
 */
function checkPwd(user){

    // alert(user.passWord.length);
    if(user.passWord.length < 8){
        alert('Password phải có nhiều hơn 8 ký tự');
        return false;
    }else{
        return true;
    }
}
/**
 * Hàm kiểm tra giá trị nhập đăng ký thành viên mới
 * @param {*} user mảng user nhập vào để kiểm tra
 * Không có trường nào bị bỏ trống. ==> ok
 * username không được trùng với username của người dùng khác trước đó. ==> ok
 * Password và confirm password phải giống nhau. 
 * Password có nhiều hơn 8 ký tự.
 */
function validate(user){
    if(    checkInput(user)
        && userNameUnique(user)
        && checkConfirmpwd(user)
        && checkPwd(user)){
        return true;
    }else{
        return false; //tạo giá trị true để kiểm tra
    }
}
