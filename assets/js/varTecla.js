// Variable global para almacenar el color actual
let color = '';

        // Event listener for keydown events
        document.addEventListener('keydown', function(event) {
            // Get the pressed key
            const pressedKey = event.key.toLowerCase();

            // Set the color based on the pressed key
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

            // Update the color of the 'key' div
            if (color) {
                document.getElementById('key').style.backgroundColor = color;
            }
        });

        // Function to create a new div with the specified color
        function createDiv(newColor) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('new-div');
            newDiv.style.backgroundColor = newColor;
            document.body.appendChild(newDiv);
        }