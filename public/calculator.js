// Define the Calculator class
class Calculator {
    constructor() {
        this.panelContents = "";
        this.memoryContents = 0;
        this.markContents = "";
        this.markPressed = false;
        this.marks = ["+", "-", "x", "/"];
    }

    pressButton(b) {
        if (b == "C") {
            this.panelContents = "";
        }
        else if (this.marks.includes(b)) {
            this.memoryContents = parseFloat(this.panelContents);
            this.markContents = b;
            this.markPressed = true;
        }
        else if (b == "=") {
            this.markPressed = true;
            if (this.markContents.length === 1) {
                if (this.markContents == "+") {
                    this.panelContents = (this.memoryContents + parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "-") {
                    this.panelContents = (this.memoryContents - parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "x") {
                    this.panelContents = (this.memoryContents * parseFloat(this.panelContents)).toString();
                }
                if (this.markContents == "/") {
                    this.panelContents = (this.memoryContents / parseFloat(this.panelContents)).toString();
                }
            }
        }
        else {
            if (this.markPressed) {
                this.panelContents = "";
                this.markPressed = false;
            }
            this.panelContents += b;
        }
    }

    getPanelContents() {
        if (this.panelContents.length > 0) {
            return this.panelContents;
        }
        return "0";
    }
}

// Create an instance of the Calculator class
const calc = new Calculator();

// Define the buttonClicked function
function buttonClicked(value) {
    calc.pressButton(value);
    const panel = document.getElementById("panel");
    panel.textContent = calc.getPanelContents();
}