function Button(text) {
   this.text = text || "Hello"; 
}
Button.prototype = {
   create: function() {
      var self = this
      this.$element = $("<button>").css("padding","30px").css("margin-left","45%").css("width","200px"); 
      this.$element.text(this.text);
      this.$element.click(function() {
         alert(self.text);
         console.log(self.text); 
         $("body").append(self.$element.clone()); 
      });
   
   $("body").append(this.$element);
    
   } 
}
var btn1 = new Button("Hello!");
btn1.create(); 