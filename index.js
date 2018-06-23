Handlebars.registerHelper('comment_body', function() {
  if(this.state==="closed") {
    return new
  }
})

function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
    var result = template(issues);
    document.getElementsByTagName("main")[0].innerHTML += result;
}