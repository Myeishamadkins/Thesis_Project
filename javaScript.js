function elongateBox(box) {
    if (box.classList.contains("elongate")) {
        box.classList.remove("elongate");
    } else {
        box.classList.add("elongate");
    }
}

function addElongateListener(elongateBox2) {
    elongateBox2.addEventListener("click", function() {
        var box = event.target;
        elongateBox(box);
        setTimeout(function() {
            box.classList.remove("elongate");
        }, 4000);
    });
}

// add event listener
Array.from(document.getElementsByClassName("elongated")).forEach(
    addElongateListener
);

function spinBox(box) {
    if (box.classList.contains("spin")) {
        box.classList.remove("spin");
    } else {
        box.classList.add("spin");
    }
}

function addSpinListener(spinBox2) {
    spinBox2.addEventListener("click", function() {
        var box = event.target;
        spinBox(box);
        setTimeout(function() {
            box.classList.remove("spin");
        }, 4000);
    });
}

// add event listener
Array.from(document.getElementsByClassName("spinner")).forEach(addSpinListener);

function boxCrawl(box) {
    if (box.classList.contains("crawl")) {
        box.classList.remove("crawl");
    } else {
        box.classList.add("crawl");
    }
}

function addCrawlListener(crawlBox) {
    crawlBox.addEventListener("click", function() {
        var box = event.target;
        boxCrawl(box);
        setTimeout(function() {
            box.classList.remove("crawl");
        }, 4000);
    });
}

// add event listener
Array.from(document.getElementsByClassName("crawler")).forEach(
    addCrawlListener
);

function boxDangle(box) {
    if (box.classList.contains("dangle")) {
        box.classList.remove("dangle");
    } else {
        box.classList.add("dangle");
    }
}

function addDangleListener(dangleBox) {
    dangleBox.addEventListener("click", function() {
        var box = event.target;
        boxDangle(box);
        setTimeout(function() {
            box.classList.remove("dangle");
        }, 4000);
    });
}

// add event listener
Array.from(document.getElementsByClassName("dangler")).forEach(
    addDangleListener
);

function boxJump(box) {
    if (box.classList.contains("jump")) {
        box.classList.remove("jump");
    } else {
        box.classList.add("jump");
    }
}

function addJumpListener(jumpBox) {
    jumpBox.addEventListener("click", function() {
        var box = event.target;
        boxJump(box);
        setTimeout(function() {
            box.classList.remove("jump");
        }, 4000);
    });
}

// add event listener
Array.from(document.getElementsByClassName("jumper")).forEach(addJumpListener);

function boxStretch(box) {
    if (box.classList.contains("stretch")) {
        box.classList.remove("stretch");
    } else {
        box.classList.add("stretch");
    }
}

function addStretchListener(stretchBox) {
    stretchBox.addEventListener("click", function() {
        var box = event.target;
        boxStretch(box);
        setTimeout(function() {
            box.classList.remove("stretch");
        }, 4000);
    });
}

// add event listener
Array.from(document.getElementsByClassName("stretcher")).forEach(
    addStretchListener
);

window.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 20; i++) {
        (function(n) {
            let box = document.getElementById("spin-all-the-time");
            box.classList.add("spin");
            setTimeout(function() {
                console.log(i);
                box.classList.remove("spin");
            });
        })(i);
    }
});

document.forms.purchaseForm.addEventListener("submit", event =>{
    event.preventDefault();
    $(".bd-example-modal-sm").modal("show");
});
