document.addEventListener('DOMContentLoaded', function() {
   changeBranch("Thane")

});
function changeBranch(branchname) {
    document.querySelectorAll('.allbranch').forEach(branch => {
        branch.style.display = 'none';
    });
    document.getElementById(`${branchname}`).style.display = 'flex';
}





