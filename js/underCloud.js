var canvas3 = document.getElementById("derivativeCloudCanvas"), 
    c3 = canvas3.getContext('2d');

c3.lineWidth = 2;
n = 10;

for (var i3 = 0; i3 < n; i3++){
    c3.beginPath();
    c3.lineTo(20, 180);
    c3.lineTo(180, 20);
    c3.lineTo(180, 40);
    c3.lineTo(130, 40);
    c3.stroke();
}