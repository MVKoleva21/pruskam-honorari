var color = document.getElementById("colorBackground");
        color.addEventListener("click", () => changeBackground());
        var changeBackground = () => {
            var randomColor = getRandomColor();
            document.body.style.background = randomColor;
        }

        var getRandomColor = () => {
            var red = Math.floor(Math.random() * 256);
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);
            var changeColor = `rgb(${red}, ${green}, ${blue})`;
            return changeColor;
        }