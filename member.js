function skillsMember() {
    var skills = document.getElementById('skills');
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('memberSkills');
    var memberSkillsList = document.getElementById('memberSkillsList');
    var memberSkillsListItems = document.getElementsByClassName('memberSkillsListItem');

    skills.addEventListener('click', function() {
        memberSkills.style.display = 'block';
        member.style.display = 'none';
    });

    for (var i = 0; i < memberSkillsListItems.length; i++) {
        memberSkillsListItems[i].addEventListener('click', function() {
            memberSkills.style.display = 'none';
            member.style.display = 'block';
        });
    }
}