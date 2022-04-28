  // navbar toggle menu
  function openNav() {
    document.getElementById('col-vertical').classList.toggle('active');
    document.getElementById('col-vertical').style.position = "absolute";
    document.getElementById('toggler').style.display = "none";
    document.getElementById('cancle').style.display = "block";
    console.log("navbar open");
  }

  function closeNav() {
    document.getElementById('col-vertical').classList.toggle('active');
    document.getElementById('col-vertical').style.position = "fixed";
    document.getElementById('toggler').style.display = "block";
    document.getElementById('cancle').style.display = "none";
    console.log("navbar closed");
  }