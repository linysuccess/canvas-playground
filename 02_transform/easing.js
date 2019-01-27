//animation effects, t:time, b:begin value, e:end value, d:duration
var EASING = {
    //前半段匀加速,后半段匀减速
    ease: function(t,b,e,d) {
        if(t<=d/2) {
            var f = t/d;
            return 2*(e-b)*f*f;
        } else {
            var s = e-b;
            var remain = 1-t/d;
            return s*(1-2*remain*remain);
        }
    },
    linear: function(t,b,e,d) {
        return t*(e-b)/d;
    },
    //函数y=1-cosx在[0,PI]上取值从0到2,这里按此函数图像的走势设计缓动函数
    sine: function(t,b,e,d) {
        var rad = Math.PI*(t/d);
        return 0.5*(e-b)*(1-Math.cos(rad));
    },
    v3: function(t,b,e,d) {
        var x = 2*t/d;
        return 0.5*(e-b)*((x-1)*(x-1)*(x-1)+1);
    }
}