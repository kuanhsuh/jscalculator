var calculator = {
  placeholder: [""],
  operators1: ["+", "-", "/", "*"],
  operator2: ["."],
  nums: [0,1,2,3,4,5,6,7,8,9],
  totalString: "",

  getValue: function(value){
    if(this.operator2.includes(this.placeholder[this.placeholder.length-1]) && value === "."){
      alert("Duplicate .")
    } else if (this.placeholder.length === 1 && this.operators1.includes(value) === true) {
      alert("Can not start with operators")
    } else if (this.operators1.includes(this.placeholder[this.placeholder.length-1]) && this.operators1.includes(value)){
      alert("Can't end with duplicate operators");
    } else if (this.placeholder.length > 11){
      alert("MAX Length Reach");
    } else {
      this.placeholder.push(value);
    }
    this.update();
  },
  update: function(){
    this.totalString = this.placeholder.join("");
  },
  clear: function(){
    this.placeholder = [""];
    this.update();
  },
  clearInputs: function(){
    this.placeholder = [""];
    this.placeholder.push(this.totalString)
    this.update();
  },
  getTotal: function(){
    this.totalString = eval(this.totalString);
    this.placeholder = [""];
    this.placeholder.push(this.totalString);
  }
}

var handlers = {
  getValue: function(data){
    calculator.getValue(data.innerHTML);
    view.updateInputs();
  },
  clear: function(){
    calculator.clear();
    view.reset();
  },
  clearInputs: function(){
    calculator.clear();
    view.resetInput();
  },
  getTotal: function(){
    view.updateInputs();
    calculator.getTotal();
    view.updateCurrent();
  }
}

var view = {
  updateCurrent: function(){
    $("#history").html(calculator.totalString);
  },
  updateInputs: function(){
    // console.log("wtf");
    $("#result").html(calculator.totalString)
  },
  reset: function(){
    $("#result").html("0");
    $("#history").html("0");
  },
  resetInput: function(){
    $("#result").html("0");
  }
}
