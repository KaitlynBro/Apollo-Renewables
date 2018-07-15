(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
    $("[href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

$(document).ready(function () {
    $("a").each(function () {
        if (this.a == window.location.a) {
            $(this).addClass("active-button");
        }
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVztBQUN6QixNQUFFLFFBQUYsRUFBWSxJQUFaLENBQWlCLFlBQVc7QUFDeEIsWUFBSSxLQUFLLElBQUwsSUFBYSxPQUFPLFFBQVAsQ0FBZ0IsSUFBakMsRUFBdUM7QUFDbkMsY0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQjtBQUNIO0FBQ0osS0FKRDtBQUtILENBTkQ7O0FBUUEsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQ3pCLE1BQUUsR0FBRixFQUFPLElBQVAsQ0FBWSxZQUFXO0FBQ25CLFlBQUksS0FBSyxDQUFMLElBQVUsT0FBTyxRQUFQLENBQWdCLENBQTlCLEVBQWlDO0FBQzdCLGNBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsZUFBakI7QUFDSDtBQUNKLEtBSkQ7QUFLSCxDQU5EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcIltocmVmXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcImFcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYSA9PSB3aW5kb3cubG9jYXRpb24uYSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZS1idXR0b25cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdfQ==
