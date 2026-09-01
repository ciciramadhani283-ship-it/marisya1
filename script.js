/* =========================================
   EMOT BERTERBANGAN 💜✨🌸🦋
========================================= */

const emot = [
    "💜",
    "🌸",
    "✨",
    "🦋",
    "🌿",
    "🌷",
    "💫",
    "🤍"
];


function buatEmot() {

    const el =
        document.createElement("div");

    el.className =
        "floating-emot";

    el.textContent =
        emot[
            Math.floor(
                Math.random() * emot.length
            )
        ];

    el.style.left =
        Math.random() * 100 + "vw";

    el.style.fontSize =
        (16 + Math.random() * 18) + "px";

    el.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(el);

    setTimeout(function () {
        el.remove();
    }, 10000);

}


setInterval(
    buatEmot,
    1500
);



/* =========================================
   GAME 1 — TEBAK ANGKA
========================================= */

let angkaRahasia =
    Math.floor(
        Math.random() * 10
    ) + 1;


function tebakAngka() {

    const input =
        document.getElementById(
            "guessInput"
        );

    const result =
        document.getElementById(
            "guessResult"
        );

    const tebakan =
        Number(input.value);


    if (
        !tebakan ||
        tebakan < 1 ||
        tebakan > 10
    ) {

        result.textContent =
            "Masukkan angka 1 sampai 10 😭";

        return;
    }


    if (tebakan === angkaRahasia) {

        result.textContent =
            "🎉 Benar! Kamu hebat!";

        angkaRahasia =
            Math.floor(
                Math.random() * 10
            ) + 1;

    } else if (
        tebakan < angkaRahasia
    ) {

        result.textContent =
            "⬆️ Terlalu kecil!";

    } else {

        result.textContent =
            "⬇️ Terlalu besar!";

    }

}



/* =========================================
   GAME 2 — CLICK CHALLENGE
========================================= */

let clickScore = 0;

let clickStarted = false;

let clickTimer;


function clickGame() {

    const button =
        document.getElementById(
            "clickButton"
        );

    const score =
        document.getElementById(
            "clickScore"
        );

    const time =
        document.getElementById(
            "clickTime"
        );


    if (!clickStarted) {

        clickStarted = true;

        clickScore = 0;

        let remaining = 10;

        score.textContent =
            clickScore;

        time.textContent =
            remaining;

        button.textContent =
            "KLIK!";

        clickTimer =
            setInterval(
                function () {

                    remaining--;

                    time.textContent =
                        remaining;


                    if (remaining <= 0) {

                        clearInterval(
                            clickTimer
                        );

                        clickStarted =
                            false;

                        button.textContent =
                            "MAIN LAGI";

                        alert(
                            "Waktu habis! Skormu: "
                            + clickScore
                        );

                    }

                },
                1000
            );

    } else {

        clickScore++;

        score.textContent =
            clickScore;

    }

}



/* =========================================
   GAME 3 — CARI EMOJI BERBEDA
========================================= */

function cekEmoji(button) {

    const result =
        document.getElementById(
            "emojiResult"
        );


    if (
        button.textContent === "😸"
    ) {

        result.textContent =
            "🎉 Benar! Kamu menemukan emoji berbeda!";

    } else {

        result.textContent =
            "😆 Belum tepat, coba lagi!";

    }

}