document.getElementsByTagName("header")[0].innerHTML += `
<div class="container">
    <div class="row align-items-start">
        <div class="col-3">
            <img src="./img/logo1.png" alt="" class="logo">
        </div>

        <div class="col-9">
            <div class="text-end align-items-center small-button">                
                <i class="bi bi-facebook icon align-middle"></i>
                <i class="bi bi-instagram icon align-middle"></i>
                <i class="bi bi-pinterest icon align-middle"></i>
                <i class="bi bi-tiktok icon align-middle"></i>
                <i class="bi bi-envelope icon align-middle"></i>
                <div class="userDetail">
                    <button class="btn dropbtn" id="login" onmouseenter="enter('userDrop')" onmouseleave="leave('userDrop')">
                        <i class="bi bi-person-fill"></i>
                        <div id="user-login"></div>
                    </button>
                </div>
            </div>

            <div class="row py-4">
                <div class="col-11 input-group">
                    <input type="search" placeholder="Tìm kiếm" class="search" id="search">
                    <div class="input-group-append">
                        <button class="btn btn-warning" onclick="search()">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                
                <div class="col-1">
                    <a href="./cart.html" style="color: black">
                        <i class="bi bi-cart" style="font-size: 32px"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`

document.getElementById("nav-bar").innerHTML = `
    <div class="col-3"></div>
    <div class="col-6 main-nav">
        <a href="./index.html">TRANG CHỦ</a>
        <a href="./san-pham.html">SẢN PHẨM</a>
        <a href="./gioi-thieu.html">GIỚI THIỆU</a>
        <a href="./blog.html">BLOG</a>
    </div>
    <div class="col-3"></div>
`

document.getElementsByTagName("footer")[0].innerHTML = `
<div class="container pb-2">
    <div class="row">
        <div class="col-4">
            <h2>HỖ TRỢ</h2>
            <ul>
                <li>
                    <a href="#">Chính sách vận chuyển</a>
                </li>
                <li>
                    <a href="#">Hình thức thanh toán</a>
                </li>
                <li>
                    <a href="#">Chính sách đổi trả</a>
                </li>
                <li>
                    <a href="#">Report</a>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <h2>KẾT NỐI</h2>
            <ul>
                <li>
                    <a href=""><i class="bi bi-facebook"></i> turmeric_cosmestic</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-instagram"></i> _Turmeric.2022_</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-pinterest"></i> _Turmeric.2022_</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-tiktok"></i> _Turmeric.2022_</a>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <h2>LIÊN HỆ</h2>
            <ul>
                <li class="highlight"><i class="bi bi-door-open"></i> OPEN: Thứ 2 ~ Thứ 6 (trừ ngày lễ)</li>
                <li class="highlight"><i class="bi bi-phone"></i> 0348 923 412</li>
                <li>
                    <a href=""><i class="bi bi-envelope"></i> Turmeric@gmail.com</a>
                </li>
            </ul>
        </div>
    </div>
    <hr class="my-1">
    <div class="row">
        <span class="text-center">&copy 2023 | Copyright by Turmeric</span>
    </div>
</div>

<button class="btn btn-danger back-up" onclick="window.scroll(0,0)"><i class="bi bi-arrow-up"></i></button>
`

function search() {
    const search = document.getElementById("search").value;
    window.location = (search === "") ? "./san-pham.html" : `./san-pham.html?search=${search}`;
}

document.getElementById("search").addEventListener("keyup", event => {
    if (event.key === "Enter") search();
})

function getGia(gia) {
    return Number(gia).toLocaleString("vi-VN") + "đ"; //định dạng số 1.000.000 VN
}

function dangerMessage(message) {
    document.querySelector(".alert-danger").innerHTML = message;
    $('.alert-danger').css("display", "initial");
    setTimeout(() => $('.alert-danger').css("display", "none"), 3000);
}

function successMessage(message, second = 3000) {
    document.querySelector(".alert-success").innerHTML = message;
    $('.alert-success').css("display", "initial");
    setTimeout(() => $('.alert-success').css("display", "none"), second);
}

function enter(element) {
    document.getElementById(element).classList.toggle("show");
}

function leave(element) {
    document.getElementById(element).classList.toggle("show");
}

const userLogin = ""; //lưu ý: username này chỉ có mục đích là kiểm thử
document.getElementById("user-login").innerHTML = (userLogin === "") ? "Đăng nhập" : userLogin;
if (userLogin !== "") document.querySelector(".userDetail").innerHTML += `    
    <div onmouseenter="enter('userDrop')" onmouseleave="leave('userDrop')" id="userDrop" class="dropdown-content">
        <a href="./order.html">Đơn hàng đã đặt</a>
        <a href="">Đăng xuất</a>
    </div>
`
