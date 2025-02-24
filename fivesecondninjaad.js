let　adDisplayed　=　false;
let　adClosed　=　false;
var　url　=　location.href;

//　スマホかどうかを判定
function　isMobile()　{
　　　　return　window.innerWidth　<=　600;
}

//　ページのスクロール監視
window.addEventListener("scroll",　function()　{
　　　　if　(url.indexOf("cms.e.jimdo.com")　===　-1){
　　　　　　　　if　(adDisplayed　||　adClosed)　return;
　　　　　　　　
　　　　　　　　let　scrollPosition　=　window.scrollY　+　window.innerHeight;
　　　　　　　　let　pageHeight　=　document.body.scrollHeight;
　　　　　　　　
　　　　　　　　if　(scrollPosition　>=　pageHeight　/　2)　{
　　　　　　　　　　　　adDisplayed　=　true;
　　　　　　　　　　　　showAd();
　　　　　　　　}
　　　　}
});

function　showAd()　{
　　　　if　(url.indexOf("cms.e.jimdo.com")　===　-1){
　　　　　　　　let　adContainer　=　document.getElementById("adContainer");
　　　　　　　　let　closeButton　=　document.getElementById("closeButton");

　　　　　　　　if　(isMobile())　{
　　　　　　　　　　　　adContainer.style.width　=　"90%";
　　　　　　　　　　　　closeButton.style.top　=　"8px";
　　　　　　　　　　　　closeButton.style.right　=　"8px";
　　　　　　　　}　else　{
　　　　　　　　　　　　adContainer.style.width　=　"300px";
　　　　　　　　　　　　closeButton.style.top　=　"30px";
　　　　　　　　　　　　closeButton.style.right　=　"16px";
　　　　　　　　}

　　　　　　　　document.getElementById("adOverlay").style.display　=　"flex";
　　　　　　　　disableScroll();
　　　　　　　　startCountdown();
　　　　}
}

function　startCountdown()　{
　　　　if　(url.indexOf("cms.e.jimdo.com")　===　-1){
　　　　　　　　let　timeLeft　=　5;
　　　　　　　　let　countdownInterval　=　setInterval(()　=>　{
　　　　　　　　　　　　document.getElementById("countdown").innerText　=　${timeLeft}　seconds　until　you　can　close　the　ad;
　　　　　　　　　　　　if　(timeLeft　===　0)　{
　　　　　　　　　　　　　　　　clearInterval(countdownInterval);
　　　　　　　　　　　　　　　　document.getElementById("closeButton").style.display　=　"block";
　　　　　　　　　　　　　　　　document.getElementById("countdown").innerText　=　"You　can　now　close　the　ad";
　　　　　　　　　　　　}
　　　　　　　　　　　　timeLeft--;
　　　　　　　　},　1000);
　　　　　　　　document.getElementById("closeButton").addEventListener("click",　closeAd);
　　　　}
}

function　closeAd()　{
　　　　if　(url.indexOf("cms.e.jimdo.com")　===　-1){
　　　　　　　　document.getElementById("adOverlay").style.display　=　"none";
　　　　　　　　enableScroll();
　　　　　　　　adClosed　=　true;
　　　　　　　　
　　　　　　　　//　スクロール位置をページの半分に設定
　　　　　　　　let　pageHeight　=　document.body.scrollHeight;
　　　　　　　　window.scrollTo({　top:　pageHeight　/　2,　behavior:　"smooth"　});
　　　　}
}

function　disableScroll()　{
　　　　document.body.style.overflow　=　"hidden";
　　　　document.body.style.height　=　"100%";
　　　　document.documentElement.style.overflow　=　"hidden";
　　　　document.documentElement.style.height　=　"100%";
}

function　enableScroll()　{
　　　　document.body.style.overflow　=　"auto";
　　　　document.body.style.height　=　"auto";
　　　　document.documentElement.style.overflow　=　"auto";
　　　　document.documentElement.style.height　=　"auto";
}