// Variable global para almacenar el color actual
let color = ''


        document.addEventListener('keydown', function(event) {

            const pressedKey = event.key.toLowerCase()

            switch (pressedKey) {
                case 'a':
                    color = 'pink';
                    break;
                case 's':
                    color = 'orange';
                    break;
                case 'd':
                    color = 'lightblue';
                    break;
                case 'q':
                    createDiv('purple');
                    break;
                case 'w':
                    createDiv('gray');
                    break;
                case 'e':
                    createDiv('brown');
                    break;
            }

            if (color) {
                document.getElementById('key').style.backgroundColor = color;
            }
        });

        function createDiv(newColor) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('new-div')
            newDiv.style.backgroundColor = newColor;
            document.body.appendChild(newDiv)
        }