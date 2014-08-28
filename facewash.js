(function() {
  var posts  = document.getElementsByClassName('userContent'),
      terms = [],
      container,
      filteredArray = [],
      controller,
      fwClear;
  function findAncestor (el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
  }
  function clearFiltered(postList) {
    for (var n=0,k=postList.length;n<k;++n) {
      postList[n].style.display="block";
    }
  }
  function blockIt(terms) {
    clearFiltered(filteredArray);
    for (var i=0, x=posts.length; i<x;++i) {
      this.post = posts[i];
      for (var j = 0, y = terms.length; j < y; ++j) {
      	if (this.post.textContent.search(terms[j]) > -1) {
      	  container = (findAncestor(this.post, 'timelineUnitContainer') || findAncestor(this.post, 'userContentWrapper')).parentElement;
      	  container.style.position = "absolute";
          container.style.left = "-500%";
          filteredArray.push(container);
      	}
      }
    }
  }
  var controller = "<div id='blockItBox' class='_4f7n'><input type='text' id='blockItTerms'/><a id='fw-clear'>X</a></div>";
  document.body.innerHTML+=controller;
  controller = document.getElementById('blockItBox');
  controller.style={ position: "fixed",
                     bottom: "0",
                     left: "0",
                     lineHeight: "42px",
                     minWidth: "0"  };
  fwClear = document.getElementById('blockItBox');
  fwClear.style= {  padding: "0 1em 0 2em",
                    fontSize: "16px",
                    color: "#fff",
                 };

  document.getElementById('blockItTerms').addEventListener('change', function() {
    terms = document.getElementById('blockItTerms').value;
    if (terms.typeof == "string") {terms=terms.split(',');}
    blockIt(terms);
  });
  document.getElementById('fw-clear').addEventListener('click', function() {
    clearFiltered(filteredArray);
  });
})()
