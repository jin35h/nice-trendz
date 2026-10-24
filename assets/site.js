
(function($){
"use strict";const phone="919898752107";function wa(message){return "https://wa.me/"+phone+"?text="+encodeURIComponent(message||"Hello NICE TRENDZ, I would like to enquire about your fabrics and tailoring services.");}
$(function(){
$(".menu-toggle").on("click",function(){const open=$(".nav-links").toggleClass("open").hasClass("open");$(this).attr("aria-expanded",String(open));});
$(".nav-links a").on("click",function(){$(".nav-links").removeClass("open");$(".menu-toggle").attr("aria-expanded","false");});
$("[data-wa]").each(function(){const kind=$(this).attr("data-wa");const messages={general:"Hello NICE TRENDZ, I would like to know more about your fabric collections and services.",fabric:"Hello NICE TRENDZ, I am interested in your fabric collections. Could you please share more details?",stitching:"Hello NICE TRENDZ, I would like to enquire about custom stitching, fittings and alterations.",wedding:"Hello NICE TRENDZ, I am planning wedding or occasion wear and would like to discuss fabric selection and tailoring.",offer:"Hello NICE TRENDZ, I would like to enquire about your services and collections."};$(this).attr({href:wa(messages[kind]),target:"_blank",rel:"noopener noreferrer"});});
$(".faq-question").on("click",function(){const item=$(this).closest(".faq-item"),open=!item.hasClass("open");item.toggleClass("open",open);$(this).attr("aria-expanded",String(open)).find(".faq-plus").text(open?"−":"+");});
function reveal(){$(".reveal").each(function(){if(this.getBoundingClientRect().top<window.innerHeight-40)$(this).addClass("is-visible");});}reveal();$(window).on("scroll resize",reveal);
$("#contact-enquiry").on("submit",function(e){e.preventDefault();const name=$("#name").val().trim(),interest=$("#interest").val(),message=$("#message").val().trim(),phoneNumber=$("#customer-phone").val().trim();if(!name||!interest||!message){$("#form-status").text("Please complete the required fields.");return;}const text="Hello NICE TRENDZ, my name is "+name+".\nEnquiry: "+interest+"\nPhone: "+(phoneNumber||"Not provided")+"\nMessage: "+message;window.open(wa(text),"_blank","noopener,noreferrer");$("#form-status").text("Your message is ready in WhatsApp. Please send it there to contact the store.");});
$("#year").text(new Date().getFullYear());
$("#language-select").on("change",function(){const lang=$(this).val();if(lang==="gu")location.href="/gu/index.html";else if(lang==="hi")location.href="/hi/index.html";else location.href="/index.html";});
$("#lightbox-close,#lightbox").on("click",function(e){if(e.target===this)$("#lightbox").hide();});
$(".gallery-item").on("click",function(){$("#lightbox-image").attr("src",$(this).attr("data-src"));$("#lightbox").css("display","flex");$("#lightbox-close").trigger("focus");});
$(document).on("keydown",function(e){if(e.key==="Escape")$("#lightbox").hide();});
});
})(jQuery);
