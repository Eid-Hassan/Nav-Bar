const $mark = document.querySelector(".marker");
const $list = document.querySelectorAll("ul li");

$list.forEach(($li) => {
    $li.addEventListener(
        'click',
        (event) => {
            $mark.style.left = $li.offsetLeft + 'px';
            $mark.style.width = $li.offsetWidth + 'px'
            document
            .querySelector(".active")?.classList.remove(".active");
            $li.classList.add("active");
        },
    );
});


// function activeLink() {
//     $list.forEach(($li) => {
//         $li.classList.remove('active')
//     });
//     this.classList.add('active');
// }

// $list.forEach(($li) => {
//     $li.addEventListener(
//         'click',
//         activeLink,
//     );
// });