<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>가스타이머콕 전문회사 엘스아이입니다.</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/jquery.bxslider.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
    <script src="https://kit.fontawesome.com/7ce992cc35.js" crossorigin="anonymous"></script>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
</head>

<body>
    <header>
        <div id="m-open">
            <img src="images/m-btn-blue.png" alt="">
        </div>
        <div id="headline">
            <div class="logo">
                <a href="index.jsp"><img src="images/header_logo_png.png" alt="엘스아이 로고"></a>
            </div>
            <!-- <div id="gnb">
                <li>
                    <a href="#">BRAND STORY</a>
                    <ul class="submenu">
                        <li><a href="#">회사소개</a></li>
                        <li><a href="#">인사말</a></li>
                        <li><a href="#">연혁</a></li>
                        <li><a href="#">오시는 길</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">PRODUCT</a>
                    <ul class="submenu">
                        <li><a href="#">가스타이머콕</a></li>
                        <li><a href="#">콘센트 / 멀티탭</a></li>
                        <li><a href="#">초음파 식기세척기</a></li>
                        <li><a href="#">안전캔따개</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">NEWS</a>
                </li>
                <li>
                    <a href="#">CUSTOMER SUPPORT</a>
                    <ul class="submenu-3">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">1:1 문의</a></li>
                        <li><a href="#">A / S 안내</a></li>
                        <li><a href="#">제품 메뉴얼</a></li>
                        <li><a href="#">설치 동영상</a></li>
                    </ul>
                </li>
            </div> -->
        </div>
    </header>
    <section id="manager-login-box">
      <div id="login-box">
        <div id="manager-login">
            <form name="loginform" method="post" action="loginCheck.php" autocomplete="off">
                <div class="form-wrap">
                    <ul>
                        <li>
                            <label for="userId"></label>
                            <input type="text" id="userId" name="userId" maxlength="12" placeholder="아이디">
                        </li>
                        <li>
                            <label for="userPw"></label>
                            <input type="text" id="userPw" name="userPw" maxlength="12" placeholder="비밀번호">
                        </li>
                        <li>
                            <button class="submit">로그인</button>
                        </li>                      
                    </ul>                  
                </div>
            </form>
        </div>
      </div>
    </section>
    <!-- <footer>
        <div class="footer">
            <div class="footer-line">
                <div class="footer-menu">
                    <li class="company"><a href="#">회사소개</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li class="manager"><a href="#">관리자 로그인</a></li>
                </div>
            </div>
            <div class="logo-info">
                <div class="f-box">
                    <div class="flogo">
                        <a href=""><img src="images/footer_logo_png.png" alt=""></a>
                    </div>
                    <div class="info">
                        <li>회사명 : (주)엘스아이 | 대표 및 개인정보 관리자 : 유선호 | 사업자등록번호 : 518-27-00376</li>
                        <li>주소 : 광주광역시 광산구 금봉로 44번길 53-15 | 통신판매신고번호 :</li>
                        <li>TEL : 062-945-7123 | FAX : 062-716-7123 | E-MAIL : 9457123@naver.com</li> <br>
                        <li>COPYRIGHT ⓒ ELSI.ALL.RIGHTS RESERVED.</li>
                    </div>
                </div>
            </div>
            <div class="top-btn">
                <a href="#headline"><img src="images/top_button.png" alt="위로가기 버튼"></a>
            </div>
        </div>
    </footer> -->
    <div id="m-back"></div>
    <div id="m-menu">
        <div id="m-header">
            <div class="title">
                <h2>MENU</h2>
                <div class="close"><img src="images/m-btn-closed.png" alt=""></div>
            </div>
            <div id="m-gnb">
                <li>
                    <div class="m-gnb-2"><a href="#">BRAND STORY</a></div>
                    <ul class="m-submenu">
                        <li><a href="#">회사소개</a></li>
                        <li><a href="#">인사말</a></li>
                        <li><a href="#">연혁</a></li>
                        <li><a href="#">오시는 길</a></li>
                    </ul>
                </li>
                <li>
                    <div class="m-gnb-2"><a href="#">PRODUCT</a></div>
                    <ul class="m-submenu">
                        <li><a href="#">가스타이머콕</a></li>
                        <li><a href="#">콘센트 / 멀티탭</a></li>
                        <li><a href="#">초음파 식기세척기</a></li>
                        <li><a href="#">안전캔따개</a></li>
                    </ul>
                </li>
                <li>
                    <div class="m-gnb-2"><a href="#">NEWS</a></div>
                </li>
                <li>
                    <div class="m-gnb-2"><a href="#">CUSTOMER SUPPORT</a></div>
                    <ul class="m-submenu">
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">1:1 문의</a></li>
                        <li><a href="#">A / S 안내</a></li>
                        <li><a href="#">제품 메뉴얼</a></li>
                        <li><a href="#">설치 동영상</a></li>
                    </ul>
                </li>
            </div>
        </div>
    </div>
</body>
</html>