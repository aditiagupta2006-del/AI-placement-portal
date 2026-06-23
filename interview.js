let acc =
    document.getElementsByClassName(
        "accordion"
    );

for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener(
        "click",
        function () {

            this.classList.toggle(
                "active"
            );

            let panel =
                this.nextElementSibling;

            if (
                panel.style.display
                === "block"
            ) {

                panel.style.display =
                    "none";

            }
            else {

                panel.style.display =
                    "block";

            }

        }
    );

}

function searchQuestion() {

    let input =
        document.getElementById(
            "searchBox"
        )
            .value
            .toLowerCase();

    let buttons =
        document.getElementsByClassName(
            "accordion"
        );

    for (let i = 0; i < buttons.length; i++) {

        let text =
            buttons[i]
                .innerText
                .toLowerCase();

        if (
            text.includes(input)
        ) {

            buttons[i]
                .style.display = "";

        }
        else {

            buttons[i]
                .style.display = "none";

            buttons[i]
                .nextElementSibling
                .style.display = "none";

        }

    }

}