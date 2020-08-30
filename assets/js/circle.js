window.onload = function () {
skill();
// ai();
// lr();
// sai();
}
function skill(){
var total = 100
var color = 85 , color1 = 70 , color2 = 60 , color3 = 55 //红色区域代表的金额和总金额
var percent = color / total

// var color1 = 80 //红色区域代表的金额和总金额
var percent1 = color1 / total

// var color2 = 80 //红色区域代表的金额和总金额
var percent2 = color2 / total

// var color3 = 80 //红色区域代表的金额和总金额
var percent3 = color3 / total

// // var color4 = 80 //红色区域代表的金额和总金额
// var percent4 = color4 / total

// // var color5 = 80 //红色区域代表的金额和总金额
// var percent5 = color5 / total

// // var color6 = 80//红色区域代表的金额和总金额
// var percent6 = color6 / total

// // var color7 = 80 //红色区域代表的金额和总金额
// var percent7 = color7 / total

// // var color8 = 80 //红色区域代表的金额和总金额
// var percent8 = color8 / total

// // var color9 = 80 //红色区域代表的金额和总金额
// var percent9 = color9 / total

// // var color10 = 80 //红色区域代表的金额和总金额
// var percent10 = color10 / total

// // var color11 = 80 //红色区域代表的金额和总金额
// var percent11 = color11 / total

var right = document.getElementsByClassName('circle-right')[0]
var right1 = document.getElementsByClassName('circle-right')[1]
var right2 = document.getElementsByClassName('circle-right')[2]
var right3 = document.getElementsByClassName('circle-right')[3]
// var right4 = document.getElementsByClassName('circle-right')[4]
// var right5 = document.getElementsByClassName('circle-right')[5]
// var right6 = document.getElementsByClassName('circle-right')[6]
// var right7 = document.getElementsByClassName('circle-right')[7]
// var right8 = document.getElementsByClassName('circle-right')[8]
// var right9 = document.getElementsByClassName('circle-right')[9]
// var right10 = document.getElementsByClassName('circle-right')[10]
// var right11 = document.getElementsByClassName('circle-right')[11]


var left = document.getElementsByClassName('circle-left')[0]
var left1 = document.getElementsByClassName('circle-left')[1]
var left2 = document.getElementsByClassName('circle-left')[2]
var left3 = document.getElementsByClassName('circle-left')[3]
// var left4 = document.getElementsByClassName('circle-left')[4]
// var left5 = document.getElementsByClassName('circle-left')[5]
// var left6 = document.getElementsByClassName('circle-left')[6]
// var left7 = document.getElementsByClassName('circle-left')[7]
// var left8 = document.getElementsByClassName('circle-left')[8]
// var left9 = document.getElementsByClassName('circle-left')[9]
// var left10 = document.getElementsByClassName('circle-left')[10]
// var left11 = document.getElementsByClassName('circle-left')[11]

if (percent <= 0.5) {  //红色区域不超过一半

right.style.transform = `rotate(${percent * 360}deg)`
right1.style.transform = `rotate(${percent1 * 360}deg)`
right2.style.transform = `rotate(${percent2 * 360}deg)`
right3.style.transform = `rotate(${percent3 * 360}deg)`
// right4.style.transform = `rotate(${percent * 360}deg)`
// right5.style.transform = `rotate(${percent * 360}deg)`
// right6.style.transform = `rotate(${percent * 360}deg)`
// right7.style.transform = `rotate(${percent * 360}deg)`
// right8.style.transform = `rotate(${percent * 360}deg)`
// right9.style.transform = `rotate(${percent * 360}deg)`
// right10.style.transform = `rotate(${percent * 360}deg)`
// right11.style.transform = `rotate(${percent * 360}deg)`


} else {    //红色区域超过一半的情况，重点部分
right.style.transform = `rotate(180deg)`
right1.style.transform = `rotate(180deg)`
right2.style.transform = `rotate(180deg)`
right3.style.transform = `rotate(180deg)`
// right4.style.transform = `rotate(180deg)`
// right5.style.transform = `rotate(180deg)`
// right6.style.transform = `rotate(180deg)`
// right7.style.transform = `rotate(180deg)`
// right8.style.transform = `rotate(180deg)`
// right9.style.transform = `rotate(180deg)`
// right10.style.transform = `rotate(180deg)`
// right11.style.transform = `rotate(180deg)`


right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right1.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right2.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right3.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right4.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right5.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right6.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right7.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right8.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right9.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right10.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right11.style.transition = `opacity 0s step-end 1s, transform 1s linear`


right.style.opacity = 0
right1.style.opacity = 0
right2.style.opacity = 0
right3.style.opacity = 0
// right4.style.opacity = 0
// right5.style.opacity = 0
// right6.style.opacity = 0
// right7.style.opacity = 0
// right8.style.opacity = 0
// right9.style.opacity = 0
// right10.style.opacity = 0
// right11.style.opacity = 0


left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left1.style.transition = `transform ${(percent1 - 0.5) / 0.5}s linear 1s`
left2.style.transition = `transform ${(percent2 - 0.5) / 0.5}s linear 1s`
left3.style.transition = `transform ${(percent3 - 0.5) / 0.5}s linear 1s`
// left4.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left5.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left6.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left7.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left8.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left9.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left10.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left11.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`


left.style.transform = `rotate(${percent * 360 - 180}deg)`
left1.style.transform = `rotate(${percent1 * 360 - 180}deg)`
left2.style.transform = `rotate(${percent2 * 360 - 180}deg)`
left3.style.transform = `rotate(${percent3 * 360 - 180}deg)`
// left4.style.transform = `rotate(${percent * 360 - 180}deg)`
// left5.style.transform = `rotate(${percent * 360 - 180}deg)`
// left6.style.transform = `rotate(${percent * 360 - 180}deg)`
// left7.style.transform = `rotate(${percent * 360 - 180}deg)`
// left8.style.transform = `rotate(${percent * 360 - 180}deg)`
// left9.style.transform = `rotate(${percent * 360 - 180}deg)`
// left10.style.transform = `rotate(${percent * 360 - 180}deg)`
// left11.style.transform = `rotate(${percent * 360 - 180}deg)`

}
}


// function ai(){
// var red = 90, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right ai')[0]
// var left = document.getElementsByClassName('circle-left ai')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }

// function lr(){
// var red = 75, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right lr')[0]
// var left = document.getElementsByClassName('circle-left lr')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }
// function sai(){
// var red = 95, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right sai')[0]
// var left = document.getElementsByClassName('circle-left sai')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }

// function ccna(){
// var red = 80, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right')[0]
// var left = document.getElementsByClassName('circle-left')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }
// function wordpro(){
// var red = 80, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right')[0]
// var left = document.getElementsByClassName('circle-left')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }
// function game(){
// var red = 80, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right')[0]
// var left = document.getElementsByClassName('circle-left')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }
// function sleep(){
// var red = 80, total = 100 //红色区域代表的金额和总金额
// var percent = red / total
// var right = document.getElementsByClassName('circle-right')[0]
// var left = document.getElementsByClassName('circle-left')[0]
// if (percent <= 0.5) {  //红色区域不超过一半
// right.style.transform = `rotate(${percent * 360}deg)`
// } else {    //红色区域超过一半的情况，重点部分
// right.style.transform = `rotate(180deg)`
// right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
// right.style.opacity = 0
// left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
// left.style.transform = `rotate(${percent * 360 - 180}deg)`
// }
// }
