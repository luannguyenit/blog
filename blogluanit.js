//<![CDATA[
// Remove Title Attribute
$("a").hover(function(a){$(this).attr("title","")});
// Nav
$(document).ready(function(){$(".toggleMenu").click(function(){$(".dropdowns").toggleClass("shows");});});
$(document).ready(function(){$(".darkshadow").click(function(){$(".dropdowns").removeClass("shows");});});
$(document).ready(function(){$(".darkshadow").click(function(){$(".darkshadow").removeClass("shows");});});
$(document).ready(function(){$(".toggleMenu").click(function(){$(".darkshadow").toggleClass("shows");});});
// Sub Nav
var Script=function(){jQuery('.nav-menu2 .sub-menu > a').click(function(){var last=jQuery('.sub-menu.open',$('.nav-menu2'));last.removeClass("open");jQuery('.dropdown').addClass("open");jQuery('.dropdown',last).removeClass("open");jQuery('.sub',last).slideUp(300);var sub=jQuery(this).next();if(sub.is(":visible")){jQuery('.dropdown',jQuery(this)).removeClass("open");jQuery(this).parent().removeClass("open");sub.slideUp(300)}else{jQuery('.dropdown',jQuery(this)).addClass("open");jQuery(this).parent().addClass("open");sub.slideDown(300)}var o=($(this).offset());diff=300-o.top;if(diff>0)$(".nav-menu2").scrollTo("-="+Math.abs(diff),500);else $(".nav-menu2").scrollTo("+="+Math.abs(diff),500)})}();
// Menu Dropdown Click
$(document).ready(function(){$(".dropdown").each(function(){var n=$(this);$(".dropdown-link",n).click(function(o){return o.preventDefault(),$div=$(".dropdown-container",n),$div.toggle(),$(".dropdown-container").not($div).hide(),!1})}),$("html").click(function(){$(".dropdown-container").hide()})});
// Friendlist Dropdown Click
function expand() {var ele = document.getElementById("expandText");var text = document.getElementById("displayText");if(ele.style.display == "block") {ele.style.display = "none";text.innerHTML = "<i class='fa fa-users'></i> Xem thêm bạn bè";}else {ele.style.display = "block";
  text.innerHTML = "<i aria-hidden='true' class='fa fa-users'></i> Ẩn bớt bạn bè";}} 
// Copy Post URL
function copyTextToClipboard(d){var c=document.createElement("textarea");c.style.position="fixed";c.style.top=0;c.style.left=0;c.style.width="2em";c.style.height="2em";c.style.padding=0;c.style.border="none";c.style.outline="none";c.style.boxShadow="none";c.style.background="transparent";c.value=d;document.body.appendChild(c);c.select();try{var e=document.execCommand("copy");var b=alert("Đã sao chép liên kết vào khay nhớ tạm!")}catch(a){var b=alert("Không thể sao chép liên kết!")}document.body.removeChild(c)}function CopyLink(){copyTextToClipboard(location.href)};
// Homepage Tab Click
function openCity(a,b){var d,e,c;e=document.getElementsByClassName("tabcontent");for(d=0;d<e.length;d++){e[d].style.display="none"}c=document.getElementsByClassName("tablinks");for(d=0;d<c.length;d++){c[d].className=c[d].className.replace(" active","")}document.getElementById(b).style.display="block";a.currentTarget.className+="active"};
// Emoticons
function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("comments");
theText = bodyText.innerHTML;
theText = theText.replace(/:\)\)/gi, "<img src='https://3.bp.blogspot.com/-_puH_nMa34g/WkPcaz67wEI/AAAAAAAABOk/Im_UdMejttEeSXi_uM6fR8_Q-_wMfltzwCLcBGAs/s1600/1-min.png'/>");
theText = theText.replace(/:\)/gi, "<img src='https://1.bp.blogspot.com/-hsoHdfi76I8/WkPh0LbZ6qI/AAAAAAAABQE/nHYjWXyRND4hsUrrdO0R-TKUqVNZU541QCLcBGAs/s1600/18-min.png'/>");
theText = theText.replace(/:\*/gi, "<img src='https://3.bp.blogspot.com/-JUI475bs2yU/WkPcz_K4UjI/AAAAAAAABOo/sBVTCOx4Vv4Rp22Dhqzi9UhxoIjygmc6gCLcBGAs/s1600/2-min.png'/>");
theText = theText.replace(/:v/gi, "<img src='https://4.bp.blogspot.com/-8wR0OhWOiy8/WkPdFO7zReI/AAAAAAAABOw/R5BSX4P_mT0PU0iRwajH4ZJbFV7CSmChQCLcBGAs/s1600/3-min.png'/>");
theText = theText.replace(/:thuglife/gi, "<img src='https://3.bp.blogspot.com/-8qldhVwg5z0/WkPdTPyedPI/AAAAAAAABO0/XdlEvCauSHUD4yHd4QiAR9m53UYq6GE4gCLcBGAs/s1600/4-min.png'/>");
theText = theText.replace(/;\//gi, "<img src='https://4.bp.blogspot.com/-q4scAFyladE/WkPdo6Ma3sI/AAAAAAAABO4/lBZdruPy-DQCXegEhdygvnaCvAhOpVhigCLcBGAs/s1600/5-min.png'/>");
theText = theText.replace(/:D/gi, "<img src='https://2.bp.blogspot.com/-g1-bG5V_zNg/WkPd4tv4wxI/AAAAAAAABPA/_Fo10rUHNPceFuRUXnZLXO9eM8j1OkirACLcBGAs/s1600/6-min.png'/>");
theText = theText.replace(/:angry/gi, "<img src='https://3.bp.blogspot.com/-Jvm0GNzrAuQ/WkPeWwp9j8I/AAAAAAAABPI/6lmPlGOZGlMmcSfzSEpYAzgEVwqxHP-kgCLcBGAs/s1600/8-min.png'/>");
theText = theText.replace(/@@/gi, "<img src='https://2.bp.blogspot.com/-XaQH6wmbj0o/WkPelUsUuSI/AAAAAAAABPQ/fdjZ0409fFAOHpyn9Yrg8otUEqaH93kogCLcBGAs/s1600/9-min.png'/>");
theText = theText.replace(/:\(\(/gi, "<img src='https://4.bp.blogspot.com/-DcVgmnAI_p8/WkPfxIjF5kI/AAAAAAAABPs/Gxd_mLxD5JIZVC4ECCFcdMRIy2y6tLvfwCLcBGAs/s1600/14-min.png'/>");
theText = theText.replace(/:\(/gi, "<img src='https://4.bp.blogspot.com/-j2I8aEsVxF4/WkPe0f-4BEI/AAAAAAAABPU/c9yfxlnSL7Y08FftDcbuI_38uqoMkZQowCLcBGAs/s1600/10-min.png'/>");
theText = theText.replace(/O\.o/gi, "<img src='https://3.bp.blogspot.com/-dv1aKmoZyhA/WkPfJWsm7hI/AAAAAAAABPc/XkkmyiN-dXMFjQpNBlSTjel7bCpb112lwCLcBGAs/s1600/11-min.png'/>");
theText = theText.replace(/-_-/gi, "<img src='https://4.bp.blogspot.com/-d0kXBUxE-VY/WkPfWVH2E-I/AAAAAAAABPg/4zfiVZP_kiAhl63fEBqfa_d95J8sSmIYACLcBGAs/s1600/12-min.png'/>");
theText = theText.replace(/zzz/gi, "<img src='https://3.bp.blogspot.com/-nne-1AG5C_g/WkPfjaGYfVI/AAAAAAAABPk/Jv_-ZBj6TE4dqWhg9SgjSPsxW2IAg5OXACLcBGAs/s1600/13-min.png'/>");
theText = theText.replace(/:x/gi, "<img src='https://2.bp.blogspot.com/-QlPPGMNkVJo/WkPf-levWgI/AAAAAAAABPw/IghBac5vs5g2DhQLSgZS_CD-WhP74Vl6QCLcBGAs/s1600/15-min.png'/>");
theText = theText.replace(/&lt;3/gi, "<img src='https://2.bp.blogspot.com/-GjQABnYcBYA/WkPhB_jEdpI/AAAAAAAABP8/82_a7hgL5oAboVWEJ_Onv8ank76t_zxfwCLcBGAs/s1600/17-min.png'/>");
theText = theText.replace(/\(Y\)/gi, "<img src='https://3.bp.blogspot.com/-8IsRUMCPdiM/WkilVKkjHfI/AAAAAAAABSM/5p5TDO5DwqoF8lWVUvoO9Gd1iO-y7jtrgCLcBGAs/s1600/like-min.png'/>");
theText = theText.replace(/lồn/gi, "***");
theText = theText.replace(/cặc/gi, "***");
theText = theText.replace(/buồi/gi, "***");
theText = theText.replace(/dái/gi, "***");
theText = theText.replace(/địt/gi, "***");
bodyText.innerHTML = theText;
}replaceText();
//]]>
