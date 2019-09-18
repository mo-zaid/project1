var x
function myself( x)
{
    var result =x*x*x;
    return result;
}
console.log(myself(2))

function counter() {
    for (var count = 1;; count++) { // تكرار الى مالا نهاي ة
        document.write(count + "A<br>"); // 5 حتى
        if (count === 5) {
            return;
        }
        document.write(count + "B<br>"); // 4 حتى
    }
    document.write(count + "C<br>"); // لن تظهر أبد اً
    4
}
counter();
document.write(counter());